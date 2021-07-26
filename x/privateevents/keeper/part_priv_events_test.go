package keeper

import (
	"testing"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
)

func createNPartPrivEvents(keeper *Keeper, ctx sdk.Context, n int) []types.PartPrivEvents {
	items := make([]types.PartPrivEvents, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].PrivId = keeper.AppendPartPrivEvents(ctx, items[i])
	}
	return items
}

func TestPartPrivEventsGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPartPrivEvents(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetPartPrivEvents(ctx, item.PrivId))
	}
}

func TestPartPrivEventsExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPartPrivEvents(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasPartPrivEvents(ctx, item.PrivId))
	}
}

func TestPartPrivEventsRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPartPrivEvents(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePartPrivEvents(ctx, item.PrivId)
		assert.False(t, keeper.HasPartPrivEvents(ctx, item.PrivId))
	}
}

func TestPartPrivEventsGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPartPrivEvents(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllPartPrivEvents(ctx))
}
