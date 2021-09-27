package keeper

import (
	"context"
	"fmt"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateRefundPubEvents(goCtx context.Context, msg *types.MsgCreateRefundPubEvents) (*types.MsgCreateRefundPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var refundPubEvents = types.RefundPubEvents{
		Creator: msg.Creator,
		PubId:   msg.PubId,
		Purpose: msg.Purpose,
	}

	// TODO
	fmt.Println(ctx)
	fmt.Println(refundPubEvents)

	// id := k.AppendRefundPubEvents(
	// 	ctx,
	// 	refundPubEvents,
	// )

	return &types.MsgCreateRefundPubEventsResponse{
		Id: msg.PubId,
	}, nil
}
