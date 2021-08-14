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

	// check if event finish
	if k.GetEventFinished(ctx, msg.PrivId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event already finished by id: %d", msg.PrivId))
	}

	// check if event exist
	if !k.HasCreatePrivEvents(ctx, msg.PrivId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event doesn't exist by id: %d", msg.PrivId))
	}

	// check if event start for participant
	dateNow := time.Now().Unix()
	startTime, _ := k.GetTimesPrivEvents(ctx, msg.PrivId)
	if int64(startTime) > dateNow {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event by id: %d not started yet, start time: %d", msg.PrivId, startTime))
	}

	// check if user alredy part in event
	allPart := k.GetEachPartPrivEvents(ctx, msg.PrivId)

	for _, v := range allPart {
		if v.Creator == msg.Creator {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("user: %s alredy participate in event by id: %d", msg.Creator, msg.PrivId))
		}
	}

	// find answer index
	answerIndex := k.GetAnswerIndex(ctx, msg.PrivId, msg.Answer)
	if answerIndex == -1 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("answer %s not found in event by id: %d", msg.Answer, msg.PrivId))
	}

	id := k.AppendPartPrivEvents(
		ctx,
		partPrivEvents,
	)

	return &types.MsgCreatePartPrivEventsResponse{
		Id: id,
	}, nil
}
