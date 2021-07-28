package keeper

import (
	"github.com/VoroshilovMax/bettery/x/funds/types"
)

var _ types.QueryServer = Keeper{}
