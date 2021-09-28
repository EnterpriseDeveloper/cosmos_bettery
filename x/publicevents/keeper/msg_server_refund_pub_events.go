package keeper

import (
	"context"
	"fmt"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateRefundPubEvents(goCtx context.Context, msg *types.MsgCreateRefundPubEvents) (*types.MsgCreateRefundPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO only owner can execute this function

	// Check if event finished
	if k.GetEventFinished(ctx, msg.PubId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event already finished by id: %d", msg.PubId))
	}

	// Check if event alredy reverted
	if k.GetEventReverted(ctx, msg.PubId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event already reverted by id: %d", msg.PubId))
	}

	// revert function
	k.PayBackToPlayers(ctx, msg.PubId)

	var fihishPubEvent = types.FihishPubEvent{
		Creator:       msg.Creator,
		PubId:         msg.PubId,
		CorrectAnswer: uint32(0),
		Reverted:      true,
		Status:        msg.Purpose,
		TokenMinted:   "0",
	}

	id := k.AppendFihishPubEvent(
		ctx,
		fihishPubEvent,
	)

	return &types.MsgCreateRefundPubEventsResponse{
		Id: id,
	}, nil
}
