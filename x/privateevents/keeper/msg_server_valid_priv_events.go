package keeper

import (
	"context"
	"fmt"
	"strconv"
	"time"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/spf13/cast"
)

func (k msgServer) CreateValidPrivEvents(goCtx context.Context, msg *types.MsgCreateValidPrivEvents) (*types.MsgCreateValidPrivEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// check if event not finished
	expert := k.GetAmountOfValidPrivEvents(ctx, msg.PrivId)
	if expert > 0 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event already finished by id: %d", msg.PrivId))
	}

	// event not exist
	if !k.HasCreatePrivEvents(ctx, msg.PrivId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event doesn't exist by id: %d", msg.PrivId))
	}

	// time end
	dateNow := time.Now().Unix()
	_, endTime := k.GetTimesPrivEvents(ctx, msg.PrivId)

	if dateNow > int64(endTime) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event by id: %d not started for validators, end time: %d", msg.PrivId, endTime))
	}

	// alredy particiapte
	find := k.findPartPrivEvent(ctx, msg.PrivId, msg.Creator)
	if find {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("participant: %s cant be validator in event by id: %d", msg.Creator, msg.PrivId))
	}

	// createor can't be validator
	creator := k.GetCreatePrivEventsOwner(ctx, msg.PrivId)

	if creator == msg.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("the event creator: %s cant be validator in event by id: %d", msg.Creator, msg.PrivId))
	}

	// find answer index
	answerIndex := k.GetAnswerIndex(ctx, msg.PrivId, msg.Answer)
	if answerIndex == -1 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("answer %s not found in event by id: %d", msg.Answer, msg.PrivId))
	}

	var validPrivEvents = types.ValidPrivEvents{
		Creator:     msg.Creator,
		PrivId:      msg.PrivId,
		Answer:      msg.Answer,
		AnswerIndex: uint32(answerIndex),
	}

	id := k.AppendValidPrivEvents(
		ctx,
		validPrivEvents,
	)

	eventId, err := cast.ToStringE(msg.PrivId)
	if err != nil {
		return nil, err
	}

	ctx.EventManager().EmitEvent(
		sdk.NewEvent(
			"priv.event",
			sdk.NewAttribute("finished", "true"),
			sdk.NewAttribute("answer", msg.Answer),
			sdk.NewAttribute("answerIndex", strconv.Itoa(answerIndex)),
			sdk.NewAttribute("id", eventId),
		),
	)
	return &types.MsgCreateValidPrivEventsResponse{
		Id: id,
	}, nil
}
