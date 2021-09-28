package keeper

import (
	"context"
	"fmt"
	"math/big"
	"strconv"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	FEtypes "github.com/VoroshilovMax/bettery/x/publicevents/types/finish_event_config"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/spf13/cast"
)

func (k msgServer) CreateFihishPubEvent(goCtx context.Context, msg *types.MsgCreateFihishPubEvent) (*types.MsgCreateFihishPubEventResponse, error) {
	// TODO Only comapny can execute function
	// TODO think abount refactoring
	// TODO think abount scaling function if event reach more that 1000 people on event

	ctx := sdk.UnwrapSDKContext(goCtx)
	eventId, err := cast.ToStringE(msg.PubId)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event finish, can not pars event id: %d, err: %s", msg.PubId, err.Error()))
	}

	correctAnswer, reverted, status := k.findCorrectAnswer(ctx, msg.PubId)
	if reverted {
		ok, errString := k.PayBackToPlayers(ctx, msg.PubId)
		if !ok {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("payBackToPlayers err, event id %d, error message: %s", msg.PubId, errString))
		}
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
		loserPool, mintedToken, reverted, ok, errString := k.findLosersPool(ctx, msg.PubId, correctAnswer)
		if ok {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("event from find loser pool, event id %d, error message: %s", msg.PubId, errString))
		}
		if reverted {
			ok, errString := k.PayBackToPlayers(ctx, msg.PubId)
			if !ok {
				return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("payBackToPlayers err, event id %d, error message: %s", msg.PubId, errString))
			}
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
			//ok, errString =
			go k.letsPayToCompanies(ctx, msg.PubId, mintedToken)
			//	if !ok {
			//		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("lets Pay To Companies event by id %d, error message: %s", msg.PubId, errString))
			//	}
			// lets pay to host
			//ok, errString =
			go k.letsPayToHost(ctx, msg.PubId, mintedToken, loserPool)
			// if !ok {
			// 	return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("lets Pay To Companies event by id %d, error message: %s", msg.PubId, errString))
			// }

			// lets pay to experts
			// ok, errString =
			go k.letsPayToExperts(ctx, msg.PubId, correctAnswer, loserPool, mintedToken)
			// if !ok {
			// 	return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("lets Pay To Expert event by id %d, error message: %s", msg.PubId, errString))
			// }
			// lets pay to players
			ok, errString, avarageBet, calcMintedToken := k.letsPayToPlayers(ctx, msg.PubId, correctAnswer, loserPool, mintedToken)
			if !ok {
				return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("lets Pay To Players event by id %d, error message: %s", msg.PubId, errString))
			}
			if k.canMint(ctx, msg.PubId) {
				// lets pay to losers
				ok, errString := k.letsPayToLosers(ctx, msg.PubId, correctAnswer, avarageBet, calcMintedToken)
				if !ok {
					return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("lets Pay To Loser event by id %d, error message: %s", msg.PubId, errString))
				}
				answer := k.GetAnswerByIndexPubEvent(ctx, msg.PubId, correctAnswer)
				ctx.EventManager().EmitEvent(
					sdk.NewEvent(
						"pub.event",
						sdk.NewAttribute("finished", "true"),
						sdk.NewAttribute("minted", "true"),
						sdk.NewAttribute("mintedTokens", mintedToken.String()),
						sdk.NewAttribute("answer", answer),
						sdk.NewAttribute("answerIndex", strconv.Itoa(correctAnswer)),
						sdk.NewAttribute("id", eventId),
					),
				)
				return sendToStorage(ctx, k, msg, correctAnswer, reverted, "finished minted event", mintedToken.String())
			} else {
				answer := k.GetAnswerByIndexPubEvent(ctx, msg.PubId, correctAnswer)
				ctx.EventManager().EmitEvent(
					sdk.NewEvent(
						"pub.event",
						sdk.NewAttribute("finished", "true"),
						sdk.NewAttribute("minted", "false"),
						sdk.NewAttribute("answer", answer),
						sdk.NewAttribute("answerIndex", strconv.Itoa(correctAnswer)),
						sdk.NewAttribute("id", eventId),
					),
				)
				return sendToStorage(ctx, k, msg, correctAnswer, reverted, "finished event", mintedToken.String())
			}
		}
	}
}

func (k msgServer) PayBackToPlayers(ctx sdk.Context, id uint64) (bool, string) {
	players := k.GetAllPlayersById(ctx, id)
	for i := 0; i < len(players); i++ {
		amount, ok := new(big.Int).SetString(players[i].Amount, 10)
		if !ok {
			return false, "error parse user bet from reverted"
		}
		k.LetsPay(ctx, players[i].Creator, amount)
	}
	return true, ""
}

func (k msgServer) letsPayToLosers(ctx sdk.Context, id uint64, correctAnswer int, avarageBet *big.Int, calcMintedToken *big.Int) (bool, string) {
	activePlay := k.GetAllPlayAmount(ctx, id)
	questionAmount := k.GetQuestAmountPubEvent(ctx, id)
	for i := 0; i < *questionAmount; i++ {
		players := k.GetPlayAmountByAnswer(ctx, id, i)
		if correctAnswer != i && len(players) != 0 {
			for z := 0; z < len(players); z++ {
				wallet := players[z].Creator
				userBet := players[z].Amount
				uB, ok := new(big.Int).SetString(userBet, 10)
				if !ok {
					return false, "error parse user bet from letsPayToPlayers"
				}
				amount := CalcLoserMint(calcMintedToken, avarageBet, new(big.Int).SetInt64(int64(activePlay)), uB)
				ok, err := k.letsMint(ctx, wallet, amount)
				if !ok {
					return false, err
				}
			}
		}
	}
	return true, ""
}

func (k msgServer) letsPayToPlayers(ctx sdk.Context, id uint64, correctAnswer int, loserPool *big.Int, mintedToken *big.Int) (bool, string, *big.Int, *big.Int) {
	zero := new(big.Int).SetInt64(int64(0))
	activePlay := k.GetAllPlayAmount(ctx, id)
	rightPlay := k.GetPlayAmountByAnswer(ctx, id, correctAnswer)
	rightPlayLenght := len(rightPlay)
	winPool := CalcWinPool(new(big.Int).SetInt64(int64(FEtypes.PlayersPers)), loserPool, new(big.Int).SetInt64(int64(rightPlayLenght)))
	premAmount, ok := k.GetPremAmountPubEvent(ctx, id)
	if !ok {
		return false, "error parse premium amount from letsPayToPlayers", zero, zero
	}
	premimWin := CalcPremiumWin(new(big.Int).SetInt64(int64(rightPlayLenght)), premAmount, new(big.Int).SetInt64(int64(FEtypes.PlayersPersPremiun)))
	betAmount, errMess, ok := k.GetPoolByAnswerPubEvent(ctx, id, correctAnswer)
	if !ok {
		return false, errMess, zero, zero
	}

	cm := k.canMint(ctx, id)
	pool, errMess, ok := k.GetPoolPubEvent(ctx, id)
	if !ok {
		return false, errMess, zero, zero
	}
	avarageBetWin := betAmount.Div(betAmount, new(big.Int).SetInt64(int64(rightPlayLenght)))
	avarageBet, calcMintedToken := CalcPremiumPubEvent(cm, pool, new(big.Int).SetInt64(int64(activePlay)), mintedToken, new(big.Int).SetInt64(int64(FEtypes.PlayersPersMint)))

	for i := 0; i < rightPlayLenght; i++ {
		userBet := rightPlay[i].Amount
		wallet := rightPlay[i].Creator
		uB, ok := new(big.Int).SetString(userBet, 10)
		if !ok {
			return false, "error parse user bet from letsPayToPlayers", zero, zero
		}
		if cm {
			// mint token to users
			ok, err := k.letsMint(ctx, wallet, PlayersFormula(calcMintedToken, uB, avarageBet, new(big.Int).SetInt64(int64(activePlay))))
			if !ok {
				return ok, err, zero, zero
			}
		}
		// pay token
		ok, err := k.LetsPay(ctx, wallet, CalcPlayerPay(premAmount, winPool, uB, avarageBetWin, premimWin))
		if !ok {
			return ok, err, zero, zero
		}
	}
	return true, "", avarageBet, calcMintedToken
}

func (k msgServer) letsPayToExperts(ctx sdk.Context, id uint64, correctAnswer int, loserPool *big.Int, tokenMinted *big.Int) (bool, string) {
	var percent int
	if len(k.GetAdvisorPubEvent(ctx, id)) > 1 {
		percent = FEtypes.ExpertPerc
	} else {
		percent = FEtypes.ExpertPerc + FEtypes.ExpertExtraPerc
	}
	allReputation := k.GetAllExperReputPubEvent(ctx, id, correctAnswer)

	if allReputation > 0 {
		valid := k.GetValidPubEventByAnswer(ctx, id, correctAnswer)
		for i := 0; i < len(valid); i++ {
			reputation := valid[i].Reput
			wallet := valid[i].Creator
			if reputation >= 0 {
				if k.canMint(ctx, id) {
					// mint tokens
					ok, err := k.letsMint(ctx, wallet, ExpertFormula(tokenMinted, new(big.Int).SetInt64(int64(FEtypes.ExpertPercMint)), new(big.Int).SetInt64(int64(reputation)), new(big.Int).SetInt64(int64(allReputation))))
					if !ok {
						return false, err
					}
				}

				// pay to expert
				premAmount, ok := k.GetPremAmountPubEvent(ctx, id)
				if !ok {
					return false, "get premium amount error from letsPayToExperts"
				}
				ok, err := k.LetsPay(ctx, wallet, CalcPayForExpert(new(big.Int).SetInt64(int64(percent)), loserPool, new(big.Int).SetInt64(int64(reputation)), new(big.Int).SetInt64(int64(allReputation)), premAmount, new(big.Int).SetInt64((int64(FEtypes.ExpertPremiumPerc)))))
				if !ok {
					return false, err
				}
			}
		}
		return true, ""
	} else {
		ok, err := k.letsPayWithFormula(loserPool, ctx, FEtypes.ComMarketFundAddr, percent)
		if !ok {
			return false, err
		}
		return true, ""
	}
}

func (k msgServer) letsPayToHost(ctx sdk.Context, id uint64, tokenMinted *big.Int, loserPool *big.Int) (bool, string) {
	host := k.GetCreatePubEventsOwner(ctx, id)
	if len(k.GetAdvisorPubEvent(ctx, id)) > 1 {
		advisor := k.GetAdvisorPubEvent(ctx, id)
		if k.canMint(ctx, id) {
			// mint tokens to host
			mintHostPerc := FEtypes.HostPercMint + FEtypes.ExtraHostPercMint
			ok, err := k.letsMintWithFormula(tokenMinted, ctx, host, mintHostPerc)
			if !ok {
				return ok, err
			}

			// mint token to advisor
			ok, err = k.letsMintWithFormula(tokenMinted, ctx, advisor, FEtypes.AdvisorPercMint)
			if !ok {
				return ok, err
			}
		}
		// pay tokens to host
		payHostPerc := FEtypes.HostPerc + FEtypes.ExtraHostPerc
		ok, err := k.letsPayWithFormula(loserPool, ctx, host, payHostPerc)
		if !ok {
			return ok, err
		}

		ok, err = k.letsPayWithFormula(loserPool, ctx, advisor, FEtypes.AdvisorPepc)
		if !ok {
			return ok, err
		}
		return true, ""
	} else {
		if k.canMint(ctx, id) {
			// mint to host
			ok, err := k.letsMintWithFormula(tokenMinted, ctx, host, FEtypes.HostPercMint)
			if !ok {
				return ok, err
			}
		}

		// pay to host
		ok, err := k.letsPayWithFormula(loserPool, ctx, host, FEtypes.HostPerc)
		if !ok {
			return ok, err
		}
		return true, ""
	}
}

func (k msgServer) letsPayToCompanies(ctx sdk.Context, id uint64, tokenMinted *big.Int) (bool, string) {
	var percentCMF int

	if k.canMint(ctx, id) {
		// mint to Development Fund
		ok, err := k.letsMintWithFormula(tokenMinted, ctx, FEtypes.Owner, FEtypes.DevelopFundPerc)
		if !ok {
			return ok, err
		}

		// mint to Community Marketing Fund
		if len(k.GetAdvisorPubEvent(ctx, id)) > 1 {
			percentCMF = FEtypes.ComMarketFundPerc
		} else {
			percentCMF = FEtypes.ComMarketFundPerc + FEtypes.ExtraHostPercMint + FEtypes.AdvisorPercMint
		}

		ok, err = k.letsMintWithFormula(tokenMinted, ctx, FEtypes.ComMarketFundAddr, percentCMF)
		if !ok {
			return ok, err
		}

		// mint to Moderators Fund
		ok, err = k.letsMintWithFormula(tokenMinted, ctx, FEtypes.ModeratorsFundAddr, FEtypes.ModeratorsFundPerc)
		if !ok {
			return ok, err
		}

	}

	premAmount, ok := k.GetPremAmountPubEvent(ctx, id)
	if !ok {
		return false, "err from parse premium amount"
	}

	// pay to advisor
	if premAmount.Cmp(new(big.Int).SetInt64(0)) == 1 {
		ok, err := k.letsPayWithFormula(premAmount, ctx, FEtypes.Owner, FEtypes.DevelopFundPercPremim)
		if !ok {
			return ok, err
		}
	}
	return true, ""
}

func (k msgServer) LetsPay(ctx sdk.Context, addr string, am *big.Int) (bool, string) {
	reciever, err := sdk.AccAddressFromBech32(addr)
	if err != nil {
		return false, err.Error()
	}

	amount := sdk.NewIntFromBigInt(am)
	err = k.PayTokens(ctx, reciever, sdk.NewCoin(types.BetToken, amount))
	if err != nil {
		return false, err.Error()
	}
	return true, ""
}

func (k msgServer) letsMint(ctx sdk.Context, addr string, am *big.Int) (bool, string) {
	reciever, err := sdk.AccAddressFromBech32(addr)
	if err != nil {
		return false, err.Error()
	}

	amount := sdk.NewIntFromBigInt(am)
	err = k.MintTokens(ctx, reciever, sdk.NewCoin(types.BetToken, amount))
	if err != nil {
		return false, err.Error()
	}
	return true, ""
}

func (k msgServer) letsPayWithFormula(tokenMinted *big.Int, ctx sdk.Context, addr string, percent int) (bool, string) {
	reciever, err := sdk.AccAddressFromBech32(addr)
	if err != nil {
		return false, err.Error()
	}

	mintDF := GetPercent(tokenMinted, new(big.Int).SetInt64(int64(percent)))
	amount := sdk.NewIntFromBigInt(mintDF)
	err = k.PayTokens(ctx, reciever, sdk.NewCoin(types.BetToken, amount))
	if err != nil {
		return false, err.Error()
	}
	return true, ""
}

func (k msgServer) letsMintWithFormula(tokenMinted *big.Int, ctx sdk.Context, addr string, percent int) (bool, string) {
	reciever, err := sdk.AccAddressFromBech32(addr)
	if err != nil {
		return false, err.Error()
	}

	mintDF := GetPercent(tokenMinted, new(big.Int).SetInt64(int64(percent)))
	amount := sdk.NewIntFromBigInt(mintDF)
	err = k.MintTokens(ctx, reciever, sdk.NewCoin(types.BetToken, amount))
	if err != nil {
		return false, err.Error()
	}
	return true, ""
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

func (k msgServer) findCorrectAnswer(ctx sdk.Context, id uint64) (int, bool, string) {
	bigValue := 0
	var candDub int
	var correctAnswer int
	questAmount := k.GetQuestAmountPubEvent(ctx, id)
	for i := 0; i < *questAmount; i++ {
		expNum := len(k.GetValidPubEventByAnswer(ctx, id, i))
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
		return correctAnswer, false, ""
	}
}

func (k msgServer) findLosersPool(ctx sdk.Context, id uint64, correctAnswer int) (*big.Int, *big.Int, bool, bool, string) {
	zero := new(big.Int).SetInt64(0)
	B, errString, ok := k.GetPoolByAnswerPubEvent(ctx, id, correctAnswer)
	if !ok {
		return zero, zero, false, true, errString
	}

	pool, errString, ok := k.GetPoolPubEvent(ctx, id)
	if !ok {
		return zero, zero, false, true, errString
	}
	lp := new(big.Int).Sub(pool, B)
	if lp.Cmp(zero) == 1 && B.Cmp(zero) == 1 {
		mintedToken := k.calcMintedTokens(ctx, id, pool)
		return lp, mintedToken, false, false, ""

	} else {
		return zero, zero, true, false, "all players lost/won"
	}
}

func (k msgServer) canMint(ctx sdk.Context, id uint64) bool {
	calcExpet := k.CalculateValidatorsAmount(ctx, id)
	startTime, endTime := k.GetTimesPubEvents(ctx, id)
	if calcExpet && endTime-startTime >= int64(FEtypes.MinTime) {
		return true
	} else {
		return false
	}
}

func (k msgServer) calcMintedTokens(ctx sdk.Context, id uint64, poll *big.Int) *big.Int {
	if k.canMint(ctx, id) {
		bigValue := 0
		bigValue2 := 0
		questionAmount := k.GetQuestAmountPubEvent(ctx, id)
		for i := 0; i < *questionAmount; i++ {
			playAmount := len(k.GetPlayAmountByAnswer(ctx, id, i))
			if playAmount > bigValue {
				bigValue2 = bigValue
				bigValue = playAmount
			} else if playAmount > bigValue2 {
				bigValue2 = bigValue
			}
		}
		activPlay := k.GetAllPlayAmount(ctx, id)
		controversy := (100 - CalcPercent(bigValue, activPlay) + CalcPercent(bigValue2, activPlay))
		averageBet := poll.Div(poll, new(big.Int).SetInt64(int64(activPlay)))
		mint := averageBet.Mul(averageBet, new(big.Int).SetInt64(int64(activPlay)))
		mint = mint.Mul(mint, new(big.Int).SetInt64(int64(controversy*FEtypes.GFindex)))
		return mint.Div(mint, new(big.Int).SetInt64(10000))
	} else {
		return new(big.Int).SetInt64(0)
	}
}
