package keeper

import (
	"context"
	"fmt"
	"time"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/spf13/cast"
)

func (k msgServer) CreateValidPubEvents(goCtx context.Context, msg *types.MsgCreateValidPubEvents) (*types.MsgCreateValidPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// check if event not finished
	if k.GetEventFinished(ctx, msg.PubId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event already finished by id: %d", msg.PubId))
	}

	// event not exist
	if !k.HasCreatePubEvents(ctx, msg.PubId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event doesn't exist by id: %d", msg.PubId))
	}

	// check time for validating
	dateNow := time.Now().Unix()
	_, endTime := k.GetTimesPubEvents(ctx, msg.PubId)
	if endTime > dateNow {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event by id: %d not started for validating, start time: %d", msg.PubId, endTime))
	}

	// creator can't be validator
	creator := k.GetCreatePubEventsOwner(ctx, msg.PubId)
	if creator == msg.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("user: %s is owner of event: %d, he can not be a validator", msg.Creator, msg.PubId))
	}

	// alredy part
	findPart := k.findPartPubEvent(ctx, msg.PubId, msg.Creator)
	if findPart {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("user: %s was participant in event by id: %d", msg.Creator, msg.PubId))
	}

	// alredy validate
	findValid := k.findValidPubEvent(ctx, msg.PubId, msg.Creator)
	if findValid {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("user: %s alredy validate event by id: %d", msg.Creator, msg.PubId))
	}

	// find answer index
	answerIndex := k.GetAnswerIndex(ctx, msg.PubId, msg.Answers)
	if answerIndex == -1 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("answer %s not found in event by id: %d", msg.Answers, msg.PubId))
	}

	// calculate validators

	validNumber := k.GetValidatorsNumber(ctx, msg.PubId)
	if validNumber == 0 {

		eventId, err := cast.ToStringE(msg.PubId)
		if err != nil {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("calculate expert, can not pars event id: %d, err: %s", msg.PubId, err.Error()))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				"pub.event",
				sdk.NewAttribute("calculateExpert", "true"),
				sdk.NewAttribute("id", eventId),
			),
		)
	} else {

		validated := k.GetValidPubEventLength(ctx, msg.PubId)

		if validNumber == int64(validated+1) {

			eventId, err := cast.ToStringE(msg.PubId)
			if err != nil {
				return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event finish, can not pars event id: %d, err: %s", msg.PubId, err.Error()))
			}
			ctx.EventManager().EmitEvent(
				sdk.NewEvent(
					"pub.event",
					sdk.NewAttribute("eventFinish", "true"),
					sdk.NewAttribute("id", eventId),
				),
			)
		}
	}

	var validPubEvents = types.ValidPubEvents{
		Creator:     msg.Creator,
		PubId:       msg.PubId,
		Answers:     msg.Answers,
		Reput:       msg.Reput,
		AnswerIndex: uint32(answerIndex),
	}

	id := k.AppendValidPubEvents(
		ctx,
		validPubEvents,
	)

	return &types.MsgCreateValidPubEventsResponse{
		Id: id,
	}, nil
}
