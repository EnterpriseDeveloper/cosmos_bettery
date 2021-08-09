package oracle

import (
	"context"
	"fmt"
	"log"

	mintTypes "github.com/VoroshilovMax/bettery/x/funds/types"
	"github.com/cosmos/cosmos-sdk/client"
	txs "github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/cosmos/cosmos-sdk/crypto/hd"
	"github.com/cosmos/cosmos-sdk/crypto/keys/secp256k1"
	cryptotypes "github.com/cosmos/cosmos-sdk/crypto/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/tx"
	"github.com/cosmos/cosmos-sdk/types/tx/signing"
	xauthsigning "github.com/cosmos/cosmos-sdk/x/auth/signing"
	"github.com/cosmos/go-bip39"
	"google.golang.org/grpc"
)

func SendTx(msg *mintTypes.MsgCreateMintBet, clientCtx client.Context) {

	txBuilder := clientCtx.TxConfig.NewTxBuilder()
	err := txBuilder.SetMsgs(msg)
	if err != nil {
		log.Fatal(err)
	}

	mnemonic := mintTypes.CompanyMemo
	fee := sdk.NewCoins(sdk.NewInt64Coin("stake", 150))
	txBuilder.SetGasLimit(100000)
	txBuilder.SetFeeAmount(fee)
	txBuilder.SetMemo(mnemonic)

	seed := bip39.NewSeed(mnemonic, "")

	master, ch := hd.ComputeMastersFromSeed(seed)
	priv, err := hd.DerivePrivateKeyForPath(master, ch, "m/44'/118'/0'/0/0")
	if err != nil {
		log.Fatal(err)
	}

	privKey := &secp256k1.PrivKey{Key: priv}
	fmt.Println(privKey.PubKey().Address())
	num, seq, err := clientCtx.AccountRetriever.GetAccountNumberSequence(clientCtx, sdk.AccAddress(privKey.PubKey().Address()))
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(num, seq)

	privs := []cryptotypes.PrivKey{privKey}
	accNums := []uint64{num}
	accSeqs := []uint64{seq}

	// First round: we gather all the signer infos. We use the "set empty
	// signature" hack to do that.
	var sigsV2 []signing.SignatureV2
	for i, priv := range privs {
		sigV2 := signing.SignatureV2{
			PubKey: priv.PubKey(),
			Data: &signing.SingleSignatureData{
				SignMode:  clientCtx.TxConfig.SignModeHandler().DefaultMode(),
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
			ChainID:       clientCtx.ChainID,
			AccountNumber: accNums[i],
			Sequence:      accSeqs[i],
		}
		sigV2, err := txs.SignWithPrivKey(
			clientCtx.TxConfig.SignModeHandler().DefaultMode(), signerData,
			txBuilder, priv, clientCtx.TxConfig, accSeqs[i])
		if err != nil {
			log.Fatal(err)
		}

		sigsV2 = append(sigsV2, sigV2)
	}
	err = txBuilder.SetSignatures(sigsV2...)
	if err != nil {
		log.Fatal(err)
	}
	broadcast(clientCtx, txBuilder)
}

func broadcast(clientCtx client.Context, txBuilder client.TxBuilder) {
	// Generated Protobuf-encoded bytes.
	txBytes, err := clientCtx.TxConfig.TxEncoder()(txBuilder.GetTx())
	if err != nil {
		log.Fatal(err)
	}

	// Create a connection to the gRPC server.
	grpcConn, err := grpc.Dial(
		"127.0.0.1:9090",    // Or your gRPC server address.
		grpc.WithInsecure(), // The SDK doesn't support any transport security mechanism.
	)
	if err != nil {
		log.Fatal(err)
	}
	defer grpcConn.Close()

	// Broadcast the tx via gRPC. We create a new client for the Protobuf Tx
	// service.
	txClient := tx.NewServiceClient(grpcConn)
	// We then call the BroadcastTx method on this client.
	send, err := txClient.BroadcastTx(
		context.Background(),
		&tx.BroadcastTxRequest{
			Mode:    tx.BroadcastMode_BROADCAST_MODE_SYNC,
			TxBytes: txBytes, // Proto-binary of the signed transaction, see previous step.
		},
	)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(send)
}
