package oracle

import (
	"context"
	"fmt"
	"log"
	"math/big"
	"strings"

	transfer "github.com/VoroshilovMax/bettery/x/funds/client/oracle/contracts"
	mintTypes "github.com/VoroshilovMax/bettery/x/funds/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/types/tx"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"

	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
)

func CmdRunOracle() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "run_oracle [memonic]",
		Short: "run oracle",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			memo, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			// TODO
			responce, err := getEvent(mintTypes.EthContractAddr, mintTypes.EthNet, clientCtx, memo)
			//	go getEvent("0xF5665833f98938d93601dF0bdb8a663f8288b037", "wss://ws-matic-mumbai.chainstacklabs.com")
			if err != nil {
				fmt.Println(err)
				return err
			}
			fmt.Println(responce)
			return nil
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	return cmd
}

func getEvent(contract string, rpc string, clientCtx client.Context, memo string) (*tx.BroadcastTxResponse, error) {
	client, err := ethclient.Dial(rpc)
	if err != nil {
		return nil, err
	}

	contractAddress := common.HexToAddress(contract)
	query := ethereum.FilterQuery{
		Addresses: []common.Address{contractAddress},
	}

	logs := make(chan types.Log)
	sub, err := client.SubscribeFilterLogs(context.Background(), query, logs)
	if err != nil {
		return nil, err
	}

	contractAbi, err := abi.JSON(strings.NewReader(string(transfer.TransferABI)))
	if err != nil {
		return nil, err
	}

	TransferETHSig := []byte("transferETHEvent(string,uint256,address)")
	TransferERC20Sig := []byte("transferERC20Event(string,uint256,address,string)")
	logTransferETHSigHash := crypto.Keccak256Hash(TransferETHSig)
	logTransferERC20SigHash := crypto.Keccak256Hash(TransferERC20Sig)

	for {
		select {
		case err := <-sub.Err():
			return nil, err
		case vLog := <-logs:
			fmt.Printf("Log Block Number: %d\n", vLog.BlockNumber)
			fmt.Printf("Log Index: %d\n", vLog.Index)

			switch vLog.Topics[0].Hex() {
			case logTransferETHSigHash.Hex():
				fmt.Printf("Log Name: Transfer ETH\n")
				return transferEthEvent(vLog, contractAbi, clientCtx, memo)

			case logTransferERC20SigHash.Hex():
				fmt.Printf("Log Name: Transfer ERC20\n")
				// TODO
			}
		}
	}
}

func transferEthEvent(vLog types.Log, contractAbi abi.ABI, clientCtx client.Context, memo string) (*tx.BroadcastTxResponse, error) {
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

	transact, err := SendTx(msg, clientCtx, memo)
	if err != nil {
		return nil, err
	}
	return transact, nil
}

func weiToEth(val float64) float64 {
	return val / 1000000000000000000 //10 ^18
}
