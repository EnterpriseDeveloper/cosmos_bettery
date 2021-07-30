package keeper

import (
	"context"
	"fmt"

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

	amount := k.bankKeeper.GetBalance(ctx, reciever, types.BetToken)
	if msg.Amount > amount.Amount.Int64() {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("user does not have enought bet token, his amount: %d", amount.Amount.Int64()))
	}

	err = k.BurnTokens(ctx, reciever, sdk.NewCoin(types.BetToken, sdk.NewInt(msg.Amount)))

	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("error from burn token, amount: %s, user: c", msg.Creator))
	}
	err = k.MintTokens(ctx, reciever, sdk.NewCoin(types.BtyToken, sdk.NewInt(msg.Amount)))
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
