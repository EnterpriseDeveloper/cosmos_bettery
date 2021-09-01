package keeper

import (
	"context"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateRefPubEvents(goCtx context.Context, msg *types.MsgCreateRefPubEvents) (*types.MsgCreateRefPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var refPubEvents = types.RefPubEvents{
		Creator:  msg.Creator,
		PubId:    msg.PubId,
		RefOne:   msg.RefOne,
		RefTwo:   msg.RefTwo,
		RefThree: msg.RefThree,
	}

	id := k.AppendRefPubEvents(
		ctx,
		refPubEvents,
	)

	return &types.MsgCreateRefPubEventsResponse{
		Id: id,
	}, nil
}
