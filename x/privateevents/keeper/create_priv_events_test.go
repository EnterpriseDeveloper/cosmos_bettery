package keeper

import (
	"testing"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
)

func createNCreatePrivEvents(keeper *Keeper, ctx sdk.Context, n int) []types.CreatePrivEvents {
	items := make([]types.CreatePrivEvents, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].PrivId = keeper.AppendCreatePrivEvents(ctx, items[i])
	}
	return items
}

func TestCreatePrivEventsGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCreatePrivEvents(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetCreatePrivEvents(ctx, item.PrivId))
	}
}

func TestCreatePrivEventsExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCreatePrivEvents(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasCreatePrivEvents(ctx, item.PrivId))
	}
}

func TestCreatePrivEventsRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCreatePrivEvents(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCreatePrivEvents(ctx, item.PrivId)
		assert.False(t, keeper.HasCreatePrivEvents(ctx, item.PrivId))
	}
}

func TestCreatePrivEventsGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNCreatePrivEvents(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllCreatePrivEvents(ctx))
}
