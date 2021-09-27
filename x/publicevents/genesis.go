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
	// Set all the refundPubEvents
	// for _, elem := range genState.RefundPubEventsList {
	// 	k.SetRefundPubEvents(ctx, *elem)
	// }

	// Set refundPubEvents count
	//	k.SetRefundPubEventsCount(ctx, genState.RefundPubEventsCount)

	// Set all the refPubEvents
	for _, elem := range genState.RefPubEventsList {
		k.SetRefPubEvents(ctx, *elem)
	}

	// Set refPubEvents count
	// k.SetRefPubEventsCount(ctx, genState.RefPubEventsCount)

	// Set all the fihishPubEvent
	for _, elem := range genState.FihishPubEventList {
		k.SetFihishPubEvent(ctx, *elem)
	}

	// Set fihishPubEvent count
	//k.SetFihishPubEventCount(ctx, genState.FihishPubEventCount)

	// Set all the validPubEvents
	for _, elem := range genState.ValidPubEventsList {
		k.SetValidPubEvents(ctx, *elem)
	}

	// Set validPubEvents count
	k.SetValidPubEventsCount(ctx, genState.ValidPubEventsCount)

	// Set all the partPubEvents
	for _, elem := range genState.PartPubEventsList {
		k.SetPartPubEvents(ctx, *elem)
	}

	// Set partPubEvents count
	k.SetPartPubEventsCount(ctx, genState.PartPubEventsCount)

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
	// Get all refundPubEvents
	// refundPubEventsList := k.GetAllRefundPubEvents(ctx)
	// for _, elem := range refundPubEventsList {
	// 	elem := elem
	// 	genesis.RefundPubEventsList = append(genesis.RefundPubEventsList, &elem)
	// }

	// Set the current count
	//genesis.RefundPubEventsCount = k.GetRefundPubEventsCount(ctx)

	// Get all refPubEvents
	refPubEventsList := k.GetAllRefPubEvents(ctx)
	for _, elem := range refPubEventsList {
		elem := elem
		genesis.RefPubEventsList = append(genesis.RefPubEventsList, &elem)
	}

	// Set the current count
	// genesis.RefPubEventsCount = k.GetRefPubEventsCount(ctx)

	// Get all fihishPubEvent
	fihishPubEventList := k.GetAllFihishPubEvent(ctx)
	for _, elem := range fihishPubEventList {
		elem := elem
		genesis.FihishPubEventList = append(genesis.FihishPubEventList, &elem)
	}

	// Set the current count
	//genesis.FihishPubEventCount = k.GetFihishPubEventCount(ctx)

	// Get all validPubEvents
	validPubEventsList := k.GetAllValidPubEvents(ctx)
	for _, elem := range validPubEventsList {
		elem := elem
		genesis.ValidPubEventsList = append(genesis.ValidPubEventsList, &elem)
	}

	// Set the current count
	genesis.ValidPubEventsCount = k.GetValidPubEventsCount(ctx)

	// Get all partPubEvents
	partPubEventsList := k.GetAllPartPubEvents(ctx)
	for _, elem := range partPubEventsList {
		elem := elem
		genesis.PartPubEventsList = append(genesis.PartPubEventsList, &elem)
	}

	// Set the current count
	genesis.PartPubEventsCount = k.GetPartPubEventsCount(ctx)

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
