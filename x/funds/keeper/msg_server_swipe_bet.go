package keeper

import (
	"context"
	"fmt"
	"math/big"

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

	reciever, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	cehckAmount, ok := new(big.Int).SetString(msg.Amount, 10)
	if !ok {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("parse big init error, amount: %s, user: %s", msg.Creator, msg.Amount))
	}
	resAmount := k.bankKeeper.GetBalance(ctx, reciever, types.BetToken)
	if cehckAmount.Cmp(resAmount.Amount.BigInt()) == 1 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("user does not have enought bet token, his amount: %d", resAmount.Amount.Int64()))
	}

	amount, ok := sdk.NewIntFromString(msg.Amount)
	if !ok {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("parse string to init error, amount: %s, user: %s", msg.Amount, msg.Creator))
	}

	err = k.BurnTokens(ctx, reciever, sdk.NewCoin(types.BetToken, amount))

	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("error from burn token, amount: %s, user: c", msg.Creator))
	}
	err = k.MintTokens(ctx, reciever, sdk.NewCoin(types.BtyToken, amount))
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("error from burn mint, amount: %s, user: c", msg.Creator))
	}

	id := k.AppendSwipeBet(
		ctx,
		swipeBet,
	)

	return &types.MsgCreateSwipeBetResponse{
		Id: id,
	}, nil
}
