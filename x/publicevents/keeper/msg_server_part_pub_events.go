package keeper

import (
	"context"
	"fmt"
	"math/big"
	"time"

	//	"fmt"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	//	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePartPubEvents(goCtx context.Context, msg *types.MsgCreatePartPubEvents) (*types.MsgCreatePartPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// check if event not finished
	if k.GetEventFinished(ctx, msg.PubId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event already finished by id: %d", msg.PubId))
	}

	// check if event exist
	if !k.HasCreatePubEvents(ctx, msg.PubId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event doesn't exist by id: %d", msg.PubId))
	}

	// check mimimum bet amount
	mAm := "10000000000000000"
	minAmoun, ok := new(big.Int).SetString(mAm, 0)
	if !ok {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("err parse min amount,  id: %d", msg.PubId))
	}
	amount, ok := new(big.Int).SetString(msg.Amount, 0)
	if !ok {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("err parse user bet amount,  id: %d", msg.PubId))
	}

	if amount.Cmp(minAmoun) == -1 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("min amount is: %s, event id: %d", mAm, msg.PubId))
	}

	// check if event start for participant
	dateNow := time.Now().Unix()
	startTime, endTime := k.GetTimesPubEvents(ctx, msg.PubId)
	if startTime > dateNow {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event by id: %d not started yet, start time: %d", msg.PubId, startTime))
	}

	// check if event finish for part
	if dateNow > endTime {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event by id: %d finished for part, start time: %d", msg.PubId, startTime))
	}

	sender, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	// check if user alredy part in event
	find := k.findPartPubEvent(ctx, msg.PubId, msg.Creator)
	if find {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("user: %s alredy participate in event by id: %d", msg.Creator, msg.PubId))
	}

	// find answer index
	answerIndex := k.GetAnswerIndex(ctx, msg.PubId, msg.Answers)
	if answerIndex == -1 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("answer %s not found in event by id: %d", msg.Answers, msg.PubId))
	}

	// check balance of user
	sendAmount, ok := new(big.Int).SetString(msg.Amount, 0)
	if !ok {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("parse big init error, amount: %s, user: %s", msg.Creator, msg.Amount))
	}

	resAmount := k.bankKeeper.GetBalance(ctx, sender, types.BetToken)
	if sendAmount.Cmp(resAmount.Amount.BigInt()) == 1 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("user does not have enought bet token, his amount: %s", resAmount.Amount.String()))
	}
	// send money to the event
	betAmount, ok := sdk.NewIntFromString(msg.Amount)
	if !ok {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("parse string to init error, amount: %s, user: %s", msg.Amount, msg.Creator))
	}
	err = k.TransferToModule(ctx, sender, sdk.NewCoin(types.BetToken, betAmount))
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("send bet token to module error, amount: %s", err.Error()))
	}

	var partPubEvents = types.PartPubEvents{
		Creator:     msg.Creator,
		PubId:       msg.PubId,
		Answers:     msg.Answers,
		Amount:      msg.Amount,
		AnswerIndex: uint32(answerIndex),
	}

	id := k.AppendPartPubEvents(
		ctx,
		partPubEvents,
	)

	return &types.MsgCreatePartPubEventsResponse{
		Id: id,
	}, nil
}
