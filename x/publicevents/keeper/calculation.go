package keeper

import "math/big"

func CalcPercent(number int, from int) int {
	return number * 100 / from
}

func GetPercent(percent *big.Int, from *big.Int) *big.Int {
	am := new(big.Int).Mul(percent, from)
	return am.Div(am, new(big.Int).SetInt64(int64(100)))
}

func ExpertFormula(from *big.Int, percent *big.Int, reputation *big.Int, allReputation *big.Int) *big.Int {
	perc := GetPercent(from, percent)
	reput := reputation.Add(reputation, new(big.Int).SetInt64(int64(1)))
	perc = perc.Mul(perc, reput)
	return perc.Div(perc, allReputation)
}

func CalcPayForExpert(percent *big.Int, loserPool *big.Int, reputation *big.Int, allReputation *big.Int, premiumAmount *big.Int, expertPremiumPerc *big.Int) *big.Int {
	amount := ExpertFormula(loserPool, percent, reputation, allReputation)
	if premiumAmount.Cmp(new(big.Int).SetInt64(int64(0))) == 1 {
		amount.Add(amount, ExpertFormula(premiumAmount, expertPremiumPerc, reputation, allReputation))
	}
	return amount
}

func CalcWinPool(playersPers *big.Int, loserPool *big.Int, rightPlay *big.Int) *big.Int {
	perc := GetPercent(playersPers, loserPool)
	return perc.Div(perc, rightPlay)
}

func CalcPremiumWin(rightPlay *big.Int, premToken *big.Int, playersPersPremiun *big.Int) *big.Int {
	if premToken.Cmp(new(big.Int).SetInt64(int64(0))) == 0 {
		premiumToken := GetPercent(playersPersPremiun, premToken)
		return premiumToken.Div(premiumToken, rightPlay)
	} else {
		return new(big.Int).SetInt64(int64(0))
	}
}

func CalcPremiumPubEvent(canMint bool, pool *big.Int, activePlay *big.Int, mintedToken *big.Int, playersPersMint *big.Int) (*big.Int, *big.Int) {
	avarageBet := new(big.Int).SetInt64(int64(0))
	calcMintedToken := new(big.Int).SetInt64(int64(0))
	if canMint {
		avarageBet = avarageBet.Div(pool, activePlay)
		calcMintedToken = GetPercent(playersPersMint, mintedToken)
	}

	return avarageBet, calcMintedToken
}

func PlayersFormula(calcMintedToken *big.Int, userBet *big.Int, avarageBet *big.Int, activePlay *big.Int) *big.Int {
	x := calcMintedToken.Mul(calcMintedToken, userBet)
	z := avarageBet.Mul(avarageBet, activePlay)
	return x.Div(x, z)
}

func CalcPlayerPay(premAmount *big.Int, winPool *big.Int, userBet *big.Int, avarageBetWin *big.Int, premimWin *big.Int) *big.Int {
	x := winPool.Mul(winPool, userBet)
	z := x.Div(x, avarageBetWin)
	amount := z.Add(z, userBet)
	if premAmount.Cmp(new(big.Int).SetInt64(int64(0))) == 1 {
		// add premium tokens to amount
		y := premimWin.Mul(premimWin, userBet)
		o := y.Div(y, avarageBetWin)
		amount = amount.Add(amount, o)
	}
	return amount
}

func CalcLoserMint(calcMintedToken *big.Int, avarageBet *big.Int, activePlay *big.Int, playToken *big.Int) *big.Int {
	z := calcMintedToken.Mul(calcMintedToken, playToken)
	x := avarageBet.Mul(avarageBet, activePlay)
	return z.Div(z, x)
}
