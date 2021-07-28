package funds

import (
	"github.com/VoroshilovMax/bettery/x/funds/keeper"
	"github.com/VoroshilovMax/bettery/x/funds/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the mintBet
	for _, elem := range genState.MintBetList {
		k.SetMintBet(ctx, *elem)
	}

	// Set mintBet count
	//	k.SetMintBetCount(ctx, genState.MintBetCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all mintBet
	mintBetList := k.GetAllMintBet(ctx)
	for _, elem := range mintBetList {
		elem := elem
		genesis.MintBetList = append(genesis.MintBetList, &elem)
	}

	// Set the current count
	//	genesis.MintBetCount = k.GetMintBetCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
