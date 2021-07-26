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
	// Set all the createPrivEvents
	for _, elem := range genState.CreatePrivEventsList {
		k.SetCreatePrivEvents(ctx, *elem)
	}

	// Set createPrivEvents count
	k.SetCreatePrivEventsCount(ctx, genState.CreatePrivEventsCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all createPrivEvents
	createPrivEventsList := k.GetAllCreatePrivEvents(ctx)
	for _, elem := range createPrivEventsList {
		elem := elem
		genesis.CreatePrivEventsList = append(genesis.CreatePrivEventsList, &elem)
	}

	// Set the current count
	genesis.CreatePrivEventsCount = k.GetCreatePrivEventsCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
