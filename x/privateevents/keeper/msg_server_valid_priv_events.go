package keeper

import (
	"context"
	"fmt"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateValidPrivEvents(goCtx context.Context, msg *types.MsgCreateValidPrivEvents) (*types.MsgCreateValidPrivEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var validPrivEvents = types.ValidPrivEvents{
		Creator: msg.Creator,
		PrivId:  msg.PrivId,
		Answer:  msg.Answer,
	}

	id := k.AppendValidPrivEvents(
		ctx,
		validPrivEvents,
	)

	return &types.MsgCreateValidPrivEventsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateValidPrivEvents(goCtx context.Context, msg *types.MsgUpdateValidPrivEvents) (*types.MsgUpdateValidPrivEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var validPrivEvents = types.ValidPrivEvents{
		Creator: msg.Creator,
		PrivId:  msg.PrivId,
		Answer:  msg.Answer,
	}

	// Checks that the element exists
	if !k.HasValidPrivEvents(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetValidPrivEventsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetValidPrivEvents(ctx, validPrivEvents)

	return &types.MsgUpdateValidPrivEventsResponse{}, nil
}

func (k msgServer) DeleteValidPrivEvents(goCtx context.Context, msg *types.MsgDeleteValidPrivEvents) (*types.MsgDeleteValidPrivEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasValidPrivEvents(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetValidPrivEventsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveValidPrivEvents(ctx, msg.Id)

	return &types.MsgDeleteValidPrivEventsResponse{}, nil
}
