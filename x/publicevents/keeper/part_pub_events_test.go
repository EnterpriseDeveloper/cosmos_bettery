package keeper

import (
	"testing"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
)

func createNPartPubEvents(keeper *Keeper, ctx sdk.Context, n int) []types.PartPubEvents {
	items := make([]types.PartPubEvents, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendPartPubEvents(ctx, items[i])
	}
	return items
}

func TestPartPubEventsGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPartPubEvents(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetPartPubEvents(ctx, item.Id))
	}
}

func TestPartPubEventsExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPartPubEvents(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasPartPubEvents(ctx, item.Id))
	}
}

func TestPartPubEventsRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPartPubEvents(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemovePartPubEvents(ctx, item.Id)
		assert.False(t, keeper.HasPartPubEvents(ctx, item.Id))
	}
}

func TestPartPubEventsGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPartPubEvents(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllPartPubEvents(ctx))
}

func TestPartPubEventsCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNPartPubEvents(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetPartPubEventsCount(ctx))
}
