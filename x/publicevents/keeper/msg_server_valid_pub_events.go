package keeper

import (
	"context"
	"fmt"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
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

func (k msgServer) UpdateValidPubEvents(goCtx context.Context, msg *types.MsgUpdateValidPubEvents) (*types.MsgUpdateValidPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var validPubEvents = types.ValidPubEvents{
		Creator: msg.Creator,
		Id:      msg.Id,
		PubId:   msg.PubId,
		Answers: msg.Answers,
		Reput:   msg.Reput,
	}

	// Checks that the element exists
	if !k.HasValidPubEvents(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetValidPubEventsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetValidPubEvents(ctx, validPubEvents)

	return &types.MsgUpdateValidPubEventsResponse{}, nil
}

func (k msgServer) DeleteValidPubEvents(goCtx context.Context, msg *types.MsgDeleteValidPubEvents) (*types.MsgDeleteValidPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasValidPubEvents(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetValidPubEventsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveValidPubEvents(ctx, msg.Id)

	return &types.MsgDeleteValidPubEventsResponse{}, nil
}
