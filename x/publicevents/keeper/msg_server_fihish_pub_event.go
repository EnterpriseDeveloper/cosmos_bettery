package keeper

import (
	"context"
	"math/big"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateFihishPubEvent(goCtx context.Context, msg *types.MsgCreateFihishPubEvent) (*types.MsgCreateFihishPubEventResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	correctAnswer, reverted, status := findCorrectAnswer(k, ctx, msg.PubId)
	if reverted {
		// event reverted
		// emit reverted event
	} else {
		// find looser pool
	}

	var fihishPubEvent = types.FihishPubEvent{
		Creator:       msg.Creator,
		PubId:         msg.PubId,
		CorrectAnswer: uint32(correctAnswer),
		Reverted:      reverted,
		Status:        status,
	}

	id := k.AppendFihishPubEvent(
		ctx,
		fihishPubEvent,
	)

	return &types.MsgCreateFihishPubEventResponse{
		Id: id,
	}, nil
}

func findCorrectAnswer(k msgServer, ctx sdk.Context, id uint64) (int, bool, string) {
	bigValue := 0
	candDub := 0
	var correctAnswer int
	questAmount := k.GetAnswerLength(ctx, id)
	for i := 0; i < questAmount; i++ {
		expNum := k.GetValidPubEventByAnswerLength(ctx, id, i)
		if expNum > bigValue {
			bigValue = expNum
			correctAnswer = i
		} else if expNum == bigValue {
			candDub = expNum
		}
	}

	if candDub == bigValue {
		return 0, true, "experts can't decide"
	} else {
		return correctAnswer, false, "experts can't decide"
	}
}

func findLosersPool(k msgServer, ctx sdk.Context, id uint64, correctAnswer int) (*big.Int, *big.Int, bool, bool, string) {
	zero := new(big.Int).SetInt64(0)
	B, errString, ok := k.GetWinPoolPubEvent(ctx, id, correctAnswer)
	if !ok {
		return zero, zero, false, true, errString
	}

	pool, errString, ok := k.GetPoolPubEvent(ctx, id)
	if !ok {
		return zero, zero, false, true, errString
	}
	lp := new(big.Int).Sub(B, pool)
	if lp.Cmp(zero) == 1 && B.Cmp(zero) == 1 {
		mintedToken := calcMintedTokens()
		return lp, mintedToken, false, false, ""

	} else {
		return zero, zero, true, false, "all players lost/won"
	}
}

// TODO
func canMint(k msgServer, ctx sdk.Context, id uint64) bool {
	return true
}

// TODO
func calcMintedTokens() *big.Int {
	return new(big.Int)
}
