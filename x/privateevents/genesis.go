package privateevents

import (
	"github.com/VoroshilovMax/bettery/x/privateevents/keeper"
	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the validPrivEvents
	for _, elem := range genState.ValidPrivEventsList {
		k.SetValidPrivEvents(ctx, *elem)
	}

	// Set validPrivEvents count
	k.SetValidPrivEventsCount(ctx, genState.ValidPrivEventsCount)

	// Set all the partPrivEvents
	for _, elem := range genState.PartPrivEventsList {
		k.SetPartPrivEvents(ctx, *elem)
	}

	// Set partPrivEvents count
	k.SetPartPrivEventsCount(ctx, genState.PartPrivEventsCount)

	// // Set all the createPrivEvents
	// for _, elem := range genState.CreatePrivEventsList {
	// 	k.SetCreatePrivEvents(ctx, *elem)
	// }

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all validPrivEvents
	validPrivEventsList := k.GetAllValidPrivEvents(ctx)
	for _, elem := range validPrivEventsList {
		elem := elem
		genesis.ValidPrivEventsList = append(genesis.ValidPrivEventsList, &elem)
	}

	//Set the current count
	genesis.ValidPrivEventsCount = k.GetValidPrivEventsCount(ctx)

	// Get all partPrivEvents
	partPrivEventsList := k.GetAllPartPrivEvents(ctx)
	for _, elem := range partPrivEventsList {
		elem := elem
		genesis.PartPrivEventsList = append(genesis.PartPrivEventsList, &elem)
	}

	// Set the current count
	genesis.PartPrivEventsCount = k.GetPartPrivEventsCount(ctx)

	// // Get all createPrivEvents
	// createPrivEventsList := k.GetAllCreatePrivEvents(ctx)
	// for _, elem := range createPrivEventsList {
	// 	elem := elem
	// 	genesis.CreatePrivEventsList = append(genesis.CreatePrivEventsList, &elem)
	// }

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
