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

	id := k.AppendValidPubEvents(
		ctx,
		validPubEvents,
	)

	return &types.MsgCreateValidPubEventsResponse{
		Id: id,
	}, nil
}
