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
		loserPool, mintedToken, reverted, ok, errString := findLosersPool(k, ctx, msg.PubId, correctAnswer)
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
			ok, errString := letsPayToCompanies(k, ctx, msg.PubId, mintedToken)
			if !ok {
				return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("lets Pay To Companies event by id %d, error message: %s", msg.PubId, errString))
			}

			// lets pay to host
			ok, errString = letsPayToHost(k, ctx, msg.PubId, mintedToken, loserPool)
			if !ok {
				return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("lets Pay To Companies event by id %d, error message: %s", msg.PubId, errString))
			}

			// TODO lets pay to experts
			// TODO lets pay to players
			// TODO lets pay to losers
			// TODO lets pay to ref
			return sendToStorage(ctx, k, msg, correctAnswer, reverted, status, "0")
		}
	}
}

func letsPayToHost(k msgServer, ctx sdk.Context, id uint64, tokenMinted *big.Int, loserPool *big.Int) (bool, string) {
	host := k.GetCreatePubEventsOwner(ctx, id)
	if len(k.GetAdvisorPubEvent(ctx, id)) > 1 {
		advisor := k.GetAdvisorPubEvent(ctx, id)
		if canMint(k, ctx, id) {
			// mint tokens to host
			mintHostPerc := FEtypes.HostPercMint + FEtypes.ExtraHostPercMint
			ok, err := letsMint(tokenMinted, k, ctx, host, mintHostPerc)
			if !ok {
				return ok, err
			}

			// mint token to advisor
			ok, err = letsMint(tokenMinted, k, ctx, advisor, FEtypes.AdvisorPercMint)
			if !ok {
				return ok, err
			}
		}
		// pay tokens to host
		payHostPerc := FEtypes.HostPerc + FEtypes.ExtraHostPerc
		ok, err := letsPay(loserPool, k, ctx, host, payHostPerc)
		if !ok {
			return ok, err
		}

		ok, err = letsPay(loserPool, k, ctx, advisor, FEtypes.AdvisorPepc)
		if !ok {
			return ok, err
		}
		return true, ""
	} else {
		if canMint(k, ctx, id) {
			// mint to host
			ok, err := letsMint(tokenMinted, k, ctx, host, FEtypes.HostPercMint)
			if !ok {
				return ok, err
			}
		}

		// pay to host
		ok, err := letsPay(loserPool, k, ctx, host, FEtypes.HostPerc)
		if !ok {
			return ok, err
		}
		return true, ""
	}
}

func letsPayToCompanies(k msgServer, ctx sdk.Context, id uint64, tokenMinted *big.Int) (bool, string) {
	var percentCMF int

	if canMint(k, ctx, id) {
		// mint to Development Fund
		ok, err := letsMint(tokenMinted, k, ctx, FEtypes.Owner, FEtypes.DevelopFundPerc)
		if !ok {
			return ok, err
		}

		// mint to Community Marketing Fund
		if len(k.GetAdvisorPubEvent(ctx, id)) > 1 {
			percentCMF = FEtypes.ComMarketFundPerc
		} else {
			percentCMF = FEtypes.ComMarketFundPerc + FEtypes.ExtraHostPercMint + FEtypes.AdvisorPercMint
		}

		ok, err = letsMint(tokenMinted, k, ctx, FEtypes.ComMarketFundAddr, percentCMF)
		if !ok {
			return ok, err
		}

		// mint to Moderators Fund
		ok, err = letsMint(tokenMinted, k, ctx, FEtypes.ModeratorsFundAddr, FEtypes.ModeratorsFundPerc)
		if !ok {
			return ok, err
		}

	}

	premAmount, ok := k.GetPremAmountPubEvent(ctx, id)
	if !ok {
		return false, "err from parse premium amount"
	}

	// pay to advisor
	if premAmount.Cmp(new(big.Int).SetInt64(0)) > 1 {
		ok, err := letsPay(premAmount, k, ctx, FEtypes.Owner, FEtypes.DevelopFundPercPremim)
		if !ok {
			return ok, err
		}
	}
	return true, ""
}

func letsPay(tokenMinted *big.Int, k msgServer, ctx sdk.Context, addr string, percent int) (bool, string) {
	reciever, err := sdk.AccAddressFromBech32(addr)
	if err != nil {
		return false, err.Error()
	}

	mintDF := getPercent(tokenMinted, new(big.Int).SetInt64(int64(percent)))
	amount := sdk.NewIntFromBigInt(mintDF)
	err = k.PayTokens(ctx, reciever, sdk.NewCoin(types.BetToken, amount))
	if err != nil {
		return false, err.Error()
	}
	return true, ""
}

func letsMint(tokenMinted *big.Int, k msgServer, ctx sdk.Context, addr string, percent int) (bool, string) {
	reciever, err := sdk.AccAddressFromBech32(addr)
	if err != nil {
		return false, err.Error()
	}

	mintDF := getPercent(tokenMinted, new(big.Int).SetInt64(int64(percent)))
	amount := sdk.NewIntFromBigInt(mintDF)
	err = k.MintTokens(ctx, reciever, sdk.NewCoin(types.BetToken, amount))
	if err != nil {
		return false, err.Error()
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
