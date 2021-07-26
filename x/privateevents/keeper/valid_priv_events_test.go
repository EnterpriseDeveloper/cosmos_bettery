package keeper

import (
	"testing"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
)

func createNValidPrivEvents(keeper *Keeper, ctx sdk.Context, n int) []types.ValidPrivEvents {
	items := make([]types.ValidPrivEvents, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].PrivId = keeper.AppendValidPrivEvents(ctx, items[i])
	}
	return items
}

func TestValidPrivEventsGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNValidPrivEvents(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetValidPrivEvents(ctx, item.PrivId))
	}
}

func TestValidPrivEventsExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNValidPrivEvents(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasValidPrivEvents(ctx, item.PrivId))
	}
}

func TestValidPrivEventsRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNValidPrivEvents(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveValidPrivEvents(ctx, item.PrivId)
		assert.False(t, keeper.HasValidPrivEvents(ctx, item.PrivId))
	}
}

func TestValidPrivEventsGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNValidPrivEvents(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllValidPrivEvents(ctx))
}