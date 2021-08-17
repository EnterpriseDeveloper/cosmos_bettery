package keeper

import (
	"context"
	"fmt"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateFihishPubEvent(goCtx context.Context, msg *types.MsgCreateFihishPubEvent) (*types.MsgCreateFihishPubEventResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var fihishPubEvent = types.FihishPubEvent{
		Creator: msg.Creator,
		PubId:   msg.PubId,
	}

	id := k.AppendFihishPubEvent(
		ctx,
		fihishPubEvent,
	)

	return &types.MsgCreateFihishPubEventResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateFihishPubEvent(goCtx context.Context, msg *types.MsgUpdateFihishPubEvent) (*types.MsgUpdateFihishPubEventResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var fihishPubEvent = types.FihishPubEvent{
		Creator: msg.Creator,
		Id:      msg.Id,
		PubId:   msg.PubId,
	}

	// Checks that the element exists
	if !k.HasFihishPubEvent(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetFihishPubEventOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetFihishPubEvent(ctx, fihishPubEvent)

	return &types.MsgUpdateFihishPubEventResponse{}, nil
}

func (k msgServer) DeleteFihishPubEvent(goCtx context.Context, msg *types.MsgDeleteFihishPubEvent) (*types.MsgDeleteFihishPubEventResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasFihishPubEvent(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetFihishPubEventOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveFihishPubEvent(ctx, msg.Id)

	return &types.MsgDeleteFihishPubEventResponse{}, nil
}
