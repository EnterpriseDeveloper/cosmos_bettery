package keeper

import (
	"encoding/binary"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// AppendCreatePrivEvents appends a createPrivEvents in the store with a new id and update the count
func (k Keeper) AppendCreatePrivEvents(
	ctx sdk.Context,
	createPrivEvents types.CreatePrivEvents,
) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	appendedValue := k.cdc.MustMarshal(&createPrivEvents)
	store.Set(GetCreatePrivEventsIDBytes(createPrivEvents.PrivId), appendedValue)

	return createPrivEvents.PrivId
}

// SetCreatePrivEvents set a specific createPrivEvents in the store
func (k Keeper) SetCreatePrivEvents(ctx sdk.Context, createPrivEvents types.CreatePrivEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	b := k.cdc.MustMarshal(&createPrivEvents)
	store.Set(GetCreatePrivEventsIDBytes(createPrivEvents.PrivId), b)
}

// GetCreatePrivEvents returns a createPrivEvents from its id
func (k Keeper) GetCreatePrivEvents(ctx sdk.Context, id uint64) types.CreatePrivEvents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	var createPrivEvents types.CreatePrivEvents
	k.cdc.MustUnmarshal(store.Get(GetCreatePrivEventsIDBytes(id)), &createPrivEvents)
	return createPrivEvents
}

// HasCreatePrivEvents checks if the createPrivEvents exists in the store
func (k Keeper) HasCreatePrivEvents(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	return store.Has(GetCreatePrivEventsIDBytes(id))
}

// GetCreatePrivEventsOwner returns the creator of the
func (k Keeper) GetCreatePrivEventsOwner(ctx sdk.Context, id uint64) string {
	return k.GetCreatePrivEvents(ctx, id).Creator
}

// Get start and end time
func (k Keeper) GetTimesPrivEvents(ctx sdk.Context, id uint64) (uint64, uint64) {
	data := k.GetCreatePrivEvents(ctx, id)
	return data.StartTime, data.EndTime
}

// get answer index
func (k Keeper) GetAnswerIndex(ctx sdk.Context, id uint64, answer string) int {
	answers := k.GetCreatePrivEvents(ctx, id).Answers
	for k, v := range answers {
		if answer == v {
			return k
		}
	}
	return -1
}

// RemoveCreatePrivEvents removes a createPrivEvents from the store
func (k Keeper) RemoveCreatePrivEvents(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	store.Delete(GetCreatePrivEventsIDBytes(id))
}

// GetAllCreatePrivEvents returns all createPrivEvents
func (k Keeper) GetAllCreatePrivEvents(ctx sdk.Context) (list []types.CreatePrivEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CreatePrivEvents
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCreatePrivEventsIDBytes returns the byte representation of the ID
func GetCreatePrivEventsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCreatePrivEventsIDFromBytes returns ID in uint64 format from a byte array
func GetCreatePrivEventsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
