package keeper

import (
	"context"

	"github.com/VoroshilovMax/bettery/x/funds/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateMintBet(goCtx context.Context, msg *types.MsgCreateMintBet) (*types.MsgCreateMintBetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var mintBet = types.MintBet{
		Creator: msg.Creator,
		Amount:  msg.Amount,
		UserId:  msg.UserId,
	}

	id := k.AppendMintBet(
		ctx,
		mintBet,
	)

	return &types.MsgCreateMintBetResponse{
		Id: id,
	}, nil
}
