package keeper

import (
	"context"
	"fmt"
	"time"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePartPrivEvents(goCtx context.Context, msg *types.MsgCreatePartPrivEvents) (*types.MsgCreatePartPrivEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var partPrivEvents = types.PartPrivEvents{
		Creator: msg.Creator,
		PrivId:  msg.PrivId,
		Answer:  msg.Answer,
	}

	dateNow := time.Now().Unix()
	startTime, _ := k.GetTimesPrivEvents(ctx, msg.PrivId)

	if int64(startTime) > dateNow {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event by id: %d not started yet, start time: %d", msg.PrivId, dateNow))
	}

	id := k.AppendPartPrivEvents(
		ctx,
		partPrivEvents,
	)

	return &types.MsgCreatePartPrivEventsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePartPrivEvents(goCtx context.Context, msg *types.MsgUpdatePartPrivEvents) (*types.MsgUpdatePartPrivEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var partPrivEvents = types.PartPrivEvents{
		Creator: msg.Creator,
		PrivId:  msg.PrivId,
		Answer:  msg.Answer,
	}

	// Checks that the element exists
	if !k.HasPartPrivEvents(ctx, msg.PrivId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.PrivId))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetPartPrivEventsOwner(ctx, msg.PrivId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPartPrivEvents(ctx, partPrivEvents)

	return &types.MsgUpdatePartPrivEventsResponse{}, nil
}

func (k msgServer) DeletePartPrivEvents(goCtx context.Context, msg *types.MsgDeletePartPrivEvents) (*types.MsgDeletePartPrivEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasPartPrivEvents(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetPartPrivEventsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePartPrivEvents(ctx, msg.Id)

	return &types.MsgDeletePartPrivEventsResponse{}, nil
}
