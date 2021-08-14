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

	var partPubEvents = types.PartPubEvents{
		Creator: msg.Creator,
		PubId:   msg.PubId,
		Answers: msg.Answers,
		Amount:  msg.Amount,
	}

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
	minAmoun, ok := new(big.Int).SetString(mAm, 10)
	if !ok {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("err parse min amount,  id: %d", msg.PubId))
	}
	amount, ok := new(big.Int).SetString(msg.Amount, 10)
	if !ok {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("err parse user bet amount,  id: %d", msg.PubId))
	}

	if amount.Cmp(minAmoun) == -1 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("min amount is: %s, event id: %d", mAm, msg.PubId))
	}

	// check balance of user

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

	// check if user already part in event
	// find answer index

	id := k.AppendPartPubEvents(
		ctx,
		partPubEvents,
	)

	return &types.MsgCreatePartPubEventsResponse{
		Id: id,
	}, nil
}
