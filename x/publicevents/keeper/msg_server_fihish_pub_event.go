package keeper

import (
	"context"
	"fmt"
	"math/big"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	FEtypes "github.com/VoroshilovMax/bettery/x/publicevents/types/finish_event_config"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/spf13/cast"
)

func (k msgServer) CreateFihishPubEvent(goCtx context.Context, msg *types.MsgCreateFihishPubEvent) (*types.MsgCreateFihishPubEventResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	eventId, err := cast.ToStringE(msg.PubId)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event finish, can not pars event id: %d, err: %s", msg.PubId, err.Error()))
	}

	correctAnswer, reverted, status := findCorrectAnswer(k, ctx, msg.PubId)
	if reverted {
		// TODO reverted paymant
		ctx.EventManager().EmitEvent(
			sdk.NewEvent(
				"pub.event",
				sdk.NewAttribute("reverted", "true"),
				sdk.NewAttribute("id", eventId),
				sdk.NewAttribute("status", status),
			),
		)
		return sendToStorage(ctx, k, msg, correctAnswer, reverted, status, "0")
	} else {
		// find looser pool
		_, mintedToken, reverted, ok, errString := findLosersPool(k, ctx, msg.PubId, correctAnswer)
		if ok {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event from find loser pool, event id %d, error message: %s", msg.PubId, errString))
		}
		if reverted {
			// TODO reverted paymant
			ctx.EventManager().EmitEvent(
				sdk.NewEvent(
					"pub.event",
					sdk.NewAttribute("reverted", "true"),
					sdk.NewAttribute("id", eventId),
					sdk.NewAttribute("status", errString),
				),
			)
			return sendToStorage(ctx, k, msg, correctAnswer, reverted, errString, mintedToken.String())
		} else {
			// lets pay to company
			letsPayToCompanies(k, ctx, msg.PubId, mintedToken)
			// TODO pay to host
			return sendToStorage(ctx, k, msg, correctAnswer, reverted, status, "0")
		}
	}
}

func letsPayToCompanies(k msgServer, ctx sdk.Context, id uint64, tokenMinted *big.Int) (bool, string) {
	var percentCMF int
	owner, err := sdk.AccAddressFromBech32(FEtypes.Owner)
	if err != nil {
		return false, err.Error()
	}

	if canMint(k, ctx, id) {
		// pay to Development Fund
		mintDF := getPercent(tokenMinted, new(big.Int).SetInt64(int64(FEtypes.DevelopFundPerc)))

		amount := sdk.NewIntFromBigInt(mintDF)
		err = k.MintTokens(ctx, owner, sdk.NewCoin(types.BetToken, amount))
		if err != nil {
			return false, err.Error()
		}

		// pay to Community Marketing Fund
		if len(k.GetAdvisorPubEvent(ctx, id)) > 1 {
			percentCMF = FEtypes.ComMarketFundPerc
		} else {
			percentCMF = FEtypes.ComMarketFundPerc + FEtypes.ExtraHostPercMint + FEtypes.AdvisorPercMint
		}

		mintCMF := getPercent(tokenMinted, new(big.Int).SetInt64(int64(percentCMF)))

		comMarketFundWallet, err := sdk.AccAddressFromBech32(FEtypes.ComMarketFundAddr)
		if err != nil {
			return false, err.Error()
		}
		amount = sdk.NewIntFromBigInt(mintCMF)
		err = k.MintTokens(ctx, comMarketFundWallet, sdk.NewCoin(types.BetToken, amount))
		if err != nil {
			return false, err.Error()
		}

		// pay to Moderators Fund
		mintMF := getPercent(tokenMinted, new(big.Int).SetInt64(int64(FEtypes.ModeratorsFundPerc)))
		ModeratorsFundWallet, err := sdk.AccAddressFromBech32(FEtypes.ModeratorsFundAddr)
		if err != nil {
			return false, err.Error()
		}
		amount = sdk.NewIntFromBigInt(mintMF)
		err = k.MintTokens(ctx, ModeratorsFundWallet, sdk.NewCoin(types.BetToken, amount))
		if err != nil {
			return false, err.Error()
		}

	}

	premAmount, ok := k.GetPremAmountPubEvent(ctx, id)
	if !ok {
		return false, "err from parse premium amount"
	}

	if premAmount.Cmp(new(big.Int).SetInt64(0)) > 1 {
		premDF := getPercent(premAmount, new(big.Int).SetInt64(int64(FEtypes.DevelopFundPercPremim)))
		amount := sdk.NewIntFromBigInt(premDF)
		err = k.MintTokens(ctx, owner, sdk.NewCoin(types.BetToken, amount))
		if err != nil {
			return false, err.Error()
		}
	}
	return true, ""
}

func getPercent(percent *big.Int, from *big.Int) *big.Int {
	am := new(big.Int).Mul(percent, from)
	return am.Div(am, new(big.Int).SetInt64(int64(100)))
}

func sendToStorage(ctx sdk.Context, k msgServer, msg *types.MsgCreateFihishPubEvent, correctAnswer int, reverted bool, status string, tokenMinted string) (*types.MsgCreateFihishPubEventResponse, error) {
	var fihishPubEvent = types.FihishPubEvent{
		Creator:       msg.Creator,
		PubId:         msg.PubId,
		CorrectAnswer: uint32(correctAnswer),
		Reverted:      reverted,
		Status:        status,
		TokenMinted:   tokenMinted,
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
		mintedToken := calcMintedTokens(k, ctx, id, pool)
		return lp, mintedToken, false, false, ""

	} else {
		return zero, zero, true, false, "all players lost/won"
	}
}

func canMint(k msgServer, ctx sdk.Context, id uint64) bool {
	calcExpet := k.CalculateValidatorsAmount(ctx, id)
	startTime, endTime := k.GetTimesPubEvents(ctx, id)
	if calcExpet && endTime-startTime >= int64(FEtypes.MinTime) {
		return true
	} else {
		return false
	}
}

func calcMintedTokens(k msgServer, ctx sdk.Context, id uint64, poll *big.Int) *big.Int {
	if canMint(k, ctx, id) {
		bigValue := 0
		bigValue2 := 0

		for i := 0; i < k.GetQuestAmountPubEvent(ctx, id); i++ {
			playAmount := k.GetPlayAmountByAnswer(ctx, id, i)
			if playAmount > bigValue {
				bigValue2 = bigValue
				bigValue = playAmount
			} else if playAmount > bigValue2 {
				bigValue2 = bigValue
			}
		}
		activPlay := k.GetAllPlayAmount(ctx, id)
		controversy := (100 - calcPercent(bigValue, activPlay) + calcPercent(bigValue2, activPlay))
		averageBet := poll.Div(poll, new(big.Int).SetInt64(int64(activPlay)))
		mint := averageBet.Mul(averageBet, new(big.Int).SetInt64(int64(activPlay)))
		mint = mint.Mul(mint, new(big.Int).SetInt64(int64(controversy*FEtypes.GFindex)))
		return mint.Div(mint, new(big.Int).SetInt64(10000))
	} else {
		return new(big.Int).SetInt64(0)
	}
}

func calcPercent(number int, from int) int {
	return number * 100 / from
}
