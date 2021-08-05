package oracle

import (
	"context"
	"fmt"
	"log"
	"math/big"
	"strings"

	transfer "github.com/VoroshilovMax/bettery/x/funds/client/oracle/contracts"
	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/ethclient"
)

func SubToEvent() {
	go getEvent("0x608fb9bE25Cb23b2995D35B1f417685416462ADf", "wss://goerli.infura.io/ws/v3/2b5ec85db4a74c8d8ed304ff2398690d")
	//	go getEvent("0xF5665833f98938d93601dF0bdb8a663f8288b037", "wss://ws-matic-mumbai.chainstacklabs.com")
}

func getEvent(contract string, rpc string) {
	client, err := ethclient.Dial(rpc)
	if err != nil {
		log.Fatal(err)
	}

	// header, err := client.HeaderByNumber(context.Background(), nil)
	// if err != nil {
	// 	log.Fatal(err)
	// }

	// fmt.Println(header.Number.Int64())

	contractAddress := common.HexToAddress(contract)
	query := ethereum.FilterQuery{
		//	FromBlock: big.NewInt(header.Number.Int64()),
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

	for {
		select {
		case err := <-sub.Err():
			log.Fatal(err)
		case vLog := <-logs:

			event := struct {
				CosmosWallet string
				Amount       *big.Int
				Sender       common.Address
			}{}
			err = contractAbi.Unpack(&event, "transferETHEvent", vLog.Data)
			if err != nil {
				log.Fatal("unpack err", err)
			}

			fmt.Println(string(event.CosmosWallet))
			fmt.Println(event.Amount.String())
			fmt.Println(string(event.Sender[:]))
			fmt.Println(vLog.BlockHash.Hex()) // 0x3404b8c050aa0aacd0223e91b5c32fee6400f357764771d0684fa7b3f448f1a8
			fmt.Println(vLog.BlockNumber)     // 2394201
			fmt.Println(vLog.TxHash.Hex())    // 0x280201eda63c9ff6f305fcee51d5eb86167fab40ca3108ec784e8652a0e2b1a6
		}
	}
}
