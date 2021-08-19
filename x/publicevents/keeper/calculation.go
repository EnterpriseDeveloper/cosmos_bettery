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
