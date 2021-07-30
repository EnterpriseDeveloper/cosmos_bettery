package keeper

import (
	"testing"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"
)

func createNValidPubEvents(keeper *Keeper, ctx sdk.Context, n int) []types.ValidPubEvents {
	items := make([]types.ValidPubEvents, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendValidPubEvents(ctx, items[i])
	}
	return items
}

func TestValidPubEventsGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNValidPubEvents(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetValidPubEvents(ctx, item.Id))
	}
}

func TestValidPubEventsExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNValidPubEvents(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasValidPubEvents(ctx, item.Id))
	}
}

func TestValidPubEventsRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNValidPubEvents(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveValidPubEvents(ctx, item.Id)
		assert.False(t, keeper.HasValidPubEvents(ctx, item.Id))
	}
}

func TestValidPubEventsGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNValidPubEvents(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllValidPubEvents(ctx))
}

func TestValidPubEventsCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNValidPubEvents(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetValidPubEventsCount(ctx))
}
