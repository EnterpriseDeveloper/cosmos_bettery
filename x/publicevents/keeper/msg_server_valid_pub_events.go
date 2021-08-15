package keeper

import (
	"context"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateValidPubEvents(goCtx context.Context, msg *types.MsgCreateValidPubEvents) (*types.MsgCreateValidPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var validPubEvents = types.ValidPubEvents{
		Creator: msg.Creator,
		PubId:   msg.PubId,
		Answers: msg.Answers,
		Reput:   msg.Reput,
	}

	// check if event not finished
	// event not exist
	// check time start
	// check time end
	// alredy part
	// creator can't be validator
	// calculate validators
	// alredy validate
	// find answer index
	// finish evend

	id := k.AppendValidPubEvents(
		ctx,
		validPubEvents,
	)

	return &types.MsgCreateValidPubEventsResponse{
		Id: id,
	}, nil
}
