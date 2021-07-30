package keeper

import (
	"context"
	"fmt"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePartPubEvents(goCtx context.Context, msg *types.MsgCreatePartPubEvents) (*types.MsgCreatePartPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var partPubEvents = types.PartPubEvents{
		Creator: msg.Creator,
		PubId:   msg.PubId,
		Answers: msg.Answers,
		Amount:  msg.Amount,
	}

	id := k.AppendPartPubEvents(
		ctx,
		partPubEvents,
	)

	return &types.MsgCreatePartPubEventsResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePartPubEvents(goCtx context.Context, msg *types.MsgUpdatePartPubEvents) (*types.MsgUpdatePartPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var partPubEvents = types.PartPubEvents{
		Creator: msg.Creator,
		Id:      msg.Id,
		PubId:   msg.PubId,
		Answers: msg.Answers,
		Amount:  msg.Amount,
	}

	// Checks that the element exists
	if !k.HasPartPubEvents(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetPartPubEventsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPartPubEvents(ctx, partPubEvents)

	return &types.MsgUpdatePartPubEventsResponse{}, nil
}

func (k msgServer) DeletePartPubEvents(goCtx context.Context, msg *types.MsgDeletePartPubEvents) (*types.MsgDeletePartPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasPartPubEvents(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetPartPubEventsOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePartPubEvents(ctx, msg.Id)

	return &types.MsgDeletePartPubEventsResponse{}, nil
}
