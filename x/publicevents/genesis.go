package publicevents

import (
	"github.com/VoroshilovMax/bettery/x/publicevents/keeper"
	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the createPubEvents
	for _, elem := range genState.CreatePubEventsList {
		k.SetCreatePubEvents(ctx, *elem)
	}

	// Set createPubEvents count
	//k.SetCreatePubEventsCount(ctx, genState.CreatePubEventsCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all createPubEvents
	createPubEventsList := k.GetAllCreatePubEvents(ctx)
	for _, elem := range createPubEventsList {
		elem := elem
		genesis.CreatePubEventsList = append(genesis.CreatePubEventsList, &elem)
	}

	// Set the current count
	//	genesis.CreatePubEventsCount = k.GetCreatePubEventsCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
