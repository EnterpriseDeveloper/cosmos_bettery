package keeper

import (
	"context"

	"github.com/VoroshilovMax/bettery/x/funds/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateSwipeBet(goCtx context.Context, msg *types.MsgCreateSwipeBet) (*types.MsgCreateSwipeBetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var swipeBet = types.SwipeBet{
		Creator: msg.Creator,
		Amount:  msg.Amount,
		UserId:  msg.UserId,
	}

	id := k.AppendSwipeBet(
		ctx,
		swipeBet,
	)

	return &types.MsgCreateSwipeBetResponse{
		Id: id,
	}, nil
}
