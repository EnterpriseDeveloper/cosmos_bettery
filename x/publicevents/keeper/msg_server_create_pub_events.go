package keeper

import (
	"context"
	"fmt"
	"math/big"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCreatePubEvents(goCtx context.Context, msg *types.MsgCreateCreatePubEvents) (*types.MsgCreateCreatePubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// check if event exist
	if k.HasCreatePubEvents(ctx, msg.PubId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event already exist: %d", msg.PubId))
	}

	smlNumb := new(big.Int).SetInt64(int64(0))
	premAmount, ok := new(big.Int).SetString(msg.PremAmount, 0)
	if !ok {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("parse big init error, amount: %s, user: %s", msg.Creator, msg.PremAmount))
	}

	if premAmount.Cmp(smlNumb) == 1 {
		done, err := sendPremTokenToEvent(msg, ctx, k)
		if !done {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("send premium token to module err: %s", err))
		}
	}

	calcExpert := false
	if msg.ExpertAmount == 0 {
		calcExpert = true
	}

	var createPubEvents = types.CreatePubEvents{
		Creator:      msg.Creator,
		PubId:        msg.PubId,
		Question:     msg.Question,
		Answers:      msg.Answers,
		PremAmount:   msg.PremAmount,
		StartTime:    msg.StartTime,
		EndTime:      msg.EndTime,
		ExpertAmount: msg.ExpertAmount,
		Advisor:      msg.Advisor,
		CalcExpert:   calcExpert,
	}

	id := k.AppendCreatePubEvents(
		ctx,
		createPubEvents,
	)

	return &types.MsgCreateCreatePubEventsResponse{
		Id: id,
	}, nil
}

func sendPremTokenToEvent(msg *types.MsgCreateCreatePubEvents, ctx sdk.Context, k msgServer) (bool, string) {
	reciever, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return false, err.Error()
	}

	cehckAmount, ok := new(big.Int).SetString(msg.PremAmount, 0)
	if !ok {
		return false, "parse big init error, amount:" + msg.Creator + " , user: " + msg.PremAmount
	}

	resAmount := k.bankKeeper.GetBalance(ctx, reciever, types.BtyToken)
	if cehckAmount.Cmp(resAmount.Amount.BigInt()) == 1 {
		return false, "user does not have enought bet token, his amount: " + resAmount.Amount.String()
	}

	amount, ok := sdk.NewIntFromString(msg.PremAmount)
	if !ok {
		return false, "parse string to init error, amount: " + msg.PremAmount + " , user: " + msg.Creator
	}

	err = k.BurnTokens(ctx, reciever, sdk.NewCoin(types.BtyToken, amount))
	if err != nil {
		return false, "error from burn token, amount: " + msg.PremAmount + " , user: " + msg.Creator
	}

	err = k.MintToModule(ctx, reciever, sdk.NewCoin(types.BetToken, amount))
	if err != nil {
		return false, "error from mint token, amount: " + msg.PremAmount + " , user: " + msg.Creator
	}

	return true, ""
}
