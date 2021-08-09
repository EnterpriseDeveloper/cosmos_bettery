package oracle

import (
	"context"
	"fmt"
	"log"
	"math/big"
	"strings"

	transfer "github.com/VoroshilovMax/bettery/x/funds/client/oracle/contracts"
	mintTypes "github.com/VoroshilovMax/bettery/x/funds/types"
	txs "github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keys/ed25519"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	"github.com/cosmos/cosmos-sdk/simapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/tx"
	"github.com/cosmos/cosmos-sdk/types/tx/signing"
	xauthsigning "github.com/cosmos/cosmos-sdk/x/auth/signing"
	"github.com/cosmos/go-bip39"
	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
	"google.golang.org/grpc"
)

func SubToEvent() {
	// TODO
	go getEvent("0x608fb9bE25Cb23b2995D35B1f417685416462ADf", "wss://goerli.infura.io/ws/v3/2b5ec85db4a74c8d8ed304ff2398690d")
	//	go getEvent("0xF5665833f98938d93601dF0bdb8a663f8288b037", "wss://ws-matic-mumbai.chainstacklabs.com")
}

func getEvent(contract string, rpc string) {
	client, err := ethclient.Dial(rpc)
	if err != nil {
		log.Fatal(err)
	}

	contractAddress := common.HexToAddress(contract)
	query := ethereum.FilterQuery{
		Addresses: []common.Address{contractAddress},
	}

	logs := make(chan types.Log)
	sub, err := client.SubscribeFilterLogs(context.Background(), query, logs)
	if err != nil {
		log.Fatal(err)
	}

	contractAbi, err := abi.JSON(strings.NewReader(string(transfer.TransferABI)))
	if err != nil {
		log.Fatal("abi JSON", err)
	}

	TransferETHSig := []byte("transferETHEvent(string,uint256,address)")
	TransferERC20Sig := []byte("transferERC20Event(string,uint256,address,string)")
	logTransferETHSigHash := crypto.Keccak256Hash(TransferETHSig)
	logTransferERC20SigHash := crypto.Keccak256Hash(TransferERC20Sig)

	for {
		select {
		case err := <-sub.Err():
			log.Fatal(err)
		case vLog := <-logs:
			fmt.Printf("Log Block Number: %d\n", vLog.BlockNumber)
			fmt.Printf("Log Index: %d\n", vLog.Index)

			switch vLog.Topics[0].Hex() {
			case logTransferETHSigHash.Hex():
				fmt.Printf("Log Name: Transfer ETH\n")
				transferEthEvent(vLog, contractAbi)

			case logTransferERC20SigHash.Hex():
				fmt.Printf("Log Name: Transfer ERC20\n")
				// TODO
			}
		}
	}
}

func transferEthEvent(vLog types.Log, contractAbi abi.ABI) {
	event := struct {
		CosmosWallet string
		Amount       *big.Int
		Sender       common.Address
	}{}
	err := contractAbi.Unpack(&event, "transferETHEvent", vLog.Data)
	if err != nil {
		log.Fatal("unpack err", err)
	}

	fmt.Println(string(event.CosmosWallet))
	fmt.Println(event.Amount.String())
	fmt.Println(string(event.Sender.Hex()))
	fmt.Println(vLog.BlockHash.Hex()) // 0x3404b8c050aa0aacd0223e91b5c32fee6400f357764771d0684fa7b3f448f1a8
	fmt.Println(vLog.TxHash.Hex())    // 0x280201eda63c9ff6f305fcee51d5eb86167fab40ca3108ec784e8652a0e2b1a6
	price := GetCoinPrice("ETH")
	// TODO get token price
	// TODO think about desimals
	convert := weiToEth(float64(event.Amount.Int64()))
	fmt.Println(convert)
	btyPrice := 0.01
	btyAmount := ((price * convert) / btyPrice)
	fmt.Println(btyAmount)

	msg := mintTypes.NewMsgCreateMintBet(string(event.CosmosWallet), int64(btyAmount), 124567)
	if err := msg.ValidateBasic(); err != nil {
		fmt.Println("validate error oracle", err)
	}

	sendTx(msg)
}

func sendTx(msg *mintTypes.MsgCreateMintBet) {
	encCfg := simapp.MakeTestEncodingConfig()
	txBuilder := encCfg.TxConfig.NewTxBuilder()

	err := txBuilder.SetMsgs(msg)
	if err != nil {
		fmt.Println("SetMsgs", err)
	}

	mnemonic := mintTypes.Memonic
	fee := sdk.NewCoins(sdk.NewInt64Coin("stake", 150))
	txBuilder.SetGasLimit(100000)
	txBuilder.SetFeeAmount(fee)
	txBuilder.SetMemo(mnemonic)
	//    txBuilder.SetTimeoutHeight()

	// Generate a Bip32 HD wallet for the mnemonic and a user supplied password
	seed := bip39.NewSeed(mnemonic, "")

	master, ch := hd.ComputeMastersFromSeed(seed)
	priv, err := hd.DerivePrivateKeyForPath(master, ch, "m/44'/118'/0'/0/0")

	// privKey, err := cryptotypes.CompactUnmarshal(priv)
	if err != nil {
		fmt.Println("DerivePrivateKeyForPath", err)
	}

	// privKey := secp256k1.GenPrivKey()
	// armored := cryptoCosmos.EncryptArmorPrivKey(privKey, "passphrase", "")
	// test, _, err := crypto.UnarmorDecryptPrivKey(armored, "wrongpassphrase")

	privKey := ed25519.GenPrivKeyFromSecret(priv)
	privs := []cryptotypes.PrivKey{privKey}
	accNums := []uint64{0}
	accSeqs := []uint64{0}

	// First round: we gather all the signer infos. We use the "set empty
	// signature" hack to do that.
	var sigsV2 []signing.SignatureV2
	for i, priv := range privs {
		sigV2 := signing.SignatureV2{
			PubKey: priv.PubKey(),
			Data: &signing.SingleSignatureData{
				SignMode:  encCfg.TxConfig.SignModeHandler().DefaultMode(),
				Signature: nil,
			},
			Sequence: accSeqs[i],
		}

		sigsV2 = append(sigsV2, sigV2)
	}
	err = txBuilder.SetSignatures(sigsV2...)
	if err != nil {
		fmt.Println("SetSignatures", err)
	}

	// Second round: all signer infos are set, so each signer can sign.
	sigsV2 = []signing.SignatureV2{}
	for i, priv := range privs {
		signerData := xauthsigning.SignerData{
			ChainID:       "1234", // TODO
			AccountNumber: accNums[i],
			Sequence:      accSeqs[i],
		}
		sigV2, err := txs.SignWithPrivKey(
			encCfg.TxConfig.SignModeHandler().DefaultMode(), signerData,
			txBuilder, priv, encCfg.TxConfig, accSeqs[i])
		if err != nil {
			fmt.Println("SignWithPrivKey", err)
		}

		sigsV2 = append(sigsV2, sigV2)
	}
	err = txBuilder.SetSignatures(sigsV2...)
	if err != nil {
		fmt.Println("SetSignatures 2", err)
	}

	// Generated Protobuf-encoded bytes.
	txBytes, err := encCfg.TxConfig.TxEncoder()(txBuilder.GetTx())
	if err != nil {
		fmt.Println("TxEncoder", err)
	}

	fmt.Println(txBytes)

	// Generate a JSON string.
	txJSONBytes, err := encCfg.TxConfig.TxJSONEncoder()(txBuilder.GetTx())
	if err != nil {
		fmt.Println("TxJSONEncoder", err)
	}
	txJSON := string(txJSONBytes)

	fmt.Println(txJSON)

	// Create a connection to the gRPC server.
	grpcConn, err := grpc.Dial(
		"127.0.0.1:9090",    // Or your gRPC server address.
		grpc.WithInsecure(), // The SDK doesn't support any transport security mechanism.
	)
	if err != nil {
		fmt.Println("Dial", err)

	}
	defer grpcConn.Close()

	// Broadcast the tx via gRPC. We create a new client for the Protobuf Tx
	// service.
	txClient := tx.NewServiceClient(grpcConn)
	// We then call the BroadcastTx method on this client.
	grpcRes, err := txClient.BroadcastTx(
		context.Background(),
		&tx.BroadcastTxRequest{
			Mode:    tx.BroadcastMode_BROADCAST_MODE_SYNC,
			TxBytes: txBytes, // Proto-binary of the signed transaction, see previous step.
		},
	)
	if err != nil {
		fmt.Println("BroadcastTx", err)
	}

	fmt.Println(grpcRes.String()) // Should be `0` if the tx is successful
}

func weiToEth(val float64) float64 {
	return val / 1000000000000000000 //10 ^18
}
