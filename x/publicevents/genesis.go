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
	// Set all the validPubEvents
	for _, elem := range genState.ValidPubEventsList {
		k.SetValidPubEvents(ctx, *elem)
	}

	// Set validPubEvents count
	//k.SetValidPubEventsCount(ctx, genState.ValidPubEventsCount)

	// Set all the partPubEvents
	for _, elem := range genState.PartPubEventsList {
		k.SetPartPubEvents(ctx, *elem)
	}

	// Set partPubEvents count
	//k.SetPartPubEventsCount(ctx, genState.PartPubEventsCount)

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
	// Get all validPubEvents
	validPubEventsList := k.GetAllValidPubEvents(ctx)
	for _, elem := range validPubEventsList {
		elem := elem
		genesis.ValidPubEventsList = append(genesis.ValidPubEventsList, &elem)
	}

	// Set the current count
	//genesis.ValidPubEventsCount = k.GetValidPubEventsCount(ctx)

	// Get all partPubEvents
	partPubEventsList := k.GetAllPartPubEvents(ctx)
	for _, elem := range partPubEventsList {
		elem := elem
		genesis.PartPubEventsList = append(genesis.PartPubEventsList, &elem)
	}

	// Set the current count
	//	genesis.PartPubEventsCount = k.GetPartPubEventsCount(ctx)

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
