package keeper

import (
	"context"
	"fmt"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCreatePrivEvents(goCtx context.Context, msg *types.MsgCreateCreatePrivEvents) (*types.MsgCreateCreatePrivEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var createPrivEvents = types.CreatePrivEvents{
		Creator:   msg.Creator,
		PrivId:    msg.PrivId,
		Question:  msg.Question,
		Answers:   msg.Answers,
		Winner:    msg.Winner,
		Loser:     msg.Loser,
		EndTime:   msg.EndTime,
		StartTime: msg.StartTime,
	}

	// Checks that the event exists
	if k.HasCreatePrivEvents(ctx, msg.PrivId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event by id %d alredy exist", msg.PrivId))
	}

	id := k.AppendCreatePrivEvents(
		ctx,
		createPrivEvents,
	)

	return &types.MsgCreateCreatePrivEventsResponse{
		Id: id,
	}, nil
}
