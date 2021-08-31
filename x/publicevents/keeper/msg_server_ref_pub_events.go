package keeper

import (
	"context"
	"fmt"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
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

func (k msgServer) UpdateRefPubEvents(goCtx context.Context, msg *types.MsgUpdateRefPubEvents) (*types.MsgUpdateRefPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var refPubEvents = types.RefPubEvents{
		Creator:  msg.Creator,
		Id:       msg.Id,
		PubId:    msg.PubId,
		RefOne:   msg.RefOne,
		RefTwo:   msg.RefTwo,
		RefThree: msg.RefThree,
	}

	// Checks that the element exists
	if !k.HasRefPubEvents(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetRefPubEventsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetRefPubEvents(ctx, refPubEvents)

	return &types.MsgUpdateRefPubEventsResponse{}, nil
}

func (k msgServer) DeleteRefPubEvents(goCtx context.Context, msg *types.MsgDeleteRefPubEvents) (*types.MsgDeleteRefPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasRefPubEvents(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetRefPubEventsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveRefPubEvents(ctx, msg.Id)

	return &types.MsgDeleteRefPubEventsResponse{}, nil
}
