package keeper

import (
	"context"
	"fmt"
	"math"
	"math/big"
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

	eventId, err := cast.ToStringE(msg.PubId)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event finish, can not pars event id: %d, err: %s", msg.PubId, err.Error()))
	}

	//check user amount
	playAmount := k.GetAllPlayAmount(ctx, msg.PubId)
	if playAmount == 0 {
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				"pub.event",
				sdk.NewAttribute("reverted", "true"),
				sdk.NewAttribute("status", "no players"),
				sdk.NewAttribute("id", eventId),
			),
		)
	} else if playAmount == 1 {
		ok, errString := payBack(k, ctx, msg.PubId)
		if !ok {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("payBack err, event id %d, error message: %s", msg.PubId, errString))
		}
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				"pub.event",
				sdk.NewAttribute("reverted", "true"),
				sdk.NewAttribute("status", "only one player joined"),
				sdk.NewAttribute("id", eventId),
			),
		)
	} else {
		// calculate validators
		validNumber := k.GetValidatorsNumber(ctx, msg.PubId)
		if validNumber == 0 {

			exp := calcExpet(playAmount)
			k.setExpertAmount(ctx, msg.PubId, exp)

			expAmount, err := cast.ToStringE(exp)
			if err != nil {
				return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event finish, can not pars expert amount: %d, err: %s", msg.PubId, err.Error()))
			}
			ctx.EventManager().EmitEvent(
				sdk.NewEvent(
					"pub.event",
					sdk.NewAttribute("calculateExpert", "true"),
					sdk.NewAttribute("id", eventId),
					sdk.NewAttribute("experts", expAmount),
				),
			)
		} else {

			validated := k.GetValidPubEventLength(ctx, msg.PubId)
			if validNumber == int64(validated+1) {
				ctx.EventManager().EmitEvent(
					sdk.NewEvent(
						"pub.event",
						sdk.NewAttribute("letfinishevent", "true"),
						sdk.NewAttribute("id", eventId),
					),
				)
			}
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

// ASK fedor amount calculation formula
func calcExpet(players int) int64 {
	if players < 11 {
		return 3
	} else {
		percent := 0.5
		var y float64 = float64(players)
		calc := y / (math.Pow(y, percent) + 2 - (math.Pow(2, percent)))
		return int64(math.Round(calc))
	}
}

func payBack(k msgServer, ctx sdk.Context, id uint64) (bool, string) {
	players := k.GetAllPlayersById(ctx, id)
	for i := 0; i < len(players); i++ {
		amount, ok := new(big.Int).SetString(players[i].Amount, 10)
		if !ok {
			return false, "error parse user bet from reverted"
		}
		k.LetsPay(ctx, players[i].Creator, amount)
	}
	return true, ""
}
