package keeper

import (
	"context"
	"fmt"

	"github.com/VoroshilovMax/bettery/x/funds/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateMintBet(goCtx context.Context, msg *types.MsgCreateMintBet) (*types.MsgCreateMintBetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var mintBet = types.MintBet{
		Creator:  msg.Creator,
		Amount:   msg.Amount,
		UserId:   msg.UserId,
		Reciever: msg.Reciever,
	}

	reciever, err := sdk.AccAddressFromBech32(msg.Reciever)
	if err != nil {
		return nil, err
	}
	amount, ok := sdk.NewIntFromString(msg.Amount)
	if !ok {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("parse string to init error, amount: %s, user: %s", msg.Amount, msg.Reciever))
	}
	err = k.MintTokens(ctx, reciever, sdk.NewCoin(types.BetToken, amount))
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("error from burn mint, amount: %s, user: %s", msg.Amount, msg.Reciever))
	}

	id := k.AppendMintBet(
		ctx,
		mintBet,
	)

	return &types.MsgCreateMintBetResponse{
		Id: id,
	}, nil
}
