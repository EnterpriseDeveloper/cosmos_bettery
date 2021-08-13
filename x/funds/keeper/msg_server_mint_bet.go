package keeper

import (
	"context"
	"fmt"
	"math/big"

	"github.com/VoroshilovMax/bettery/x/funds/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateMintBet(goCtx context.Context, msg *types.MsgCreateMintBet) (*types.MsgCreateMintBetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var mintBet = types.MintBet{
		Creator: msg.Creator,
		Amount:  msg.Amount,
		UserId:  msg.UserId,
	}

	reciever, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}
	amount, ok := new(big.Int).SetString(msg.Amount, 10)
	if !ok {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("parse big init error, amount: %s, user: %s", msg.Creator, msg.Amount))
	}
	err = k.MintTokens(ctx, reciever, sdk.NewCoin(types.BetToken, sdk.NewIntFromBigInt(amount)))
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("error from burn mint, amount: %s, user: %s", msg.Creator, msg.Amount))
	}

	id := k.AppendMintBet(
		ctx,
		mintBet,
	)

	return &types.MsgCreateMintBetResponse{
		Id: id,
	}, nil
}
