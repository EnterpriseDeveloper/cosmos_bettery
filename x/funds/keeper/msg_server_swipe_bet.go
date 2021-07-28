package keeper

import (
	"context"
	"fmt"

	"github.com/VoroshilovMax/bettery/x/funds/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateSwipeBet(goCtx context.Context, msg *types.MsgCreateSwipeBet) (*types.MsgCreateSwipeBetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var swipeBet = types.SwipeBet{
		Creator: msg.Creator,
		Amount:  msg.Amount,
		UserId:  msg.UserId,
	}

	id := k.AppendSwipeBet(
		ctx,
		swipeBet,
	)

	return &types.MsgCreateSwipeBetResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateSwipeBet(goCtx context.Context, msg *types.MsgUpdateSwipeBet) (*types.MsgUpdateSwipeBetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var swipeBet = types.SwipeBet{
		Creator: msg.Creator,
		Id:      msg.Id,
		Amount:  msg.Amount,
		UserId:  msg.UserId,
	}

	// Checks that the element exists
	if !k.HasSwipeBet(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetSwipeBetOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetSwipeBet(ctx, swipeBet)

	return &types.MsgUpdateSwipeBetResponse{}, nil
}

func (k msgServer) DeleteSwipeBet(goCtx context.Context, msg *types.MsgDeleteSwipeBet) (*types.MsgDeleteSwipeBetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasSwipeBet(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetSwipeBetOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSwipeBet(ctx, msg.Id)

	return &types.MsgDeleteSwipeBetResponse{}, nil
}
