package keeper

import (
	"encoding/binary"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// AppendCreatePubEvents appends a createPubEvents in the store with a new id and update the count
func (k Keeper) AppendCreatePubEvents(
	ctx sdk.Context,
	createPubEvents types.CreatePubEvents,
) uint64 {

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePubEventsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&createPubEvents)
	store.Set(GetCreatePubEventsIDBytes(createPubEvents.PubId), appendedValue)

	return createPubEvents.PubId
}

// SetCreatePubEvents set a specific createPubEvents in the store
func (k Keeper) SetCreatePubEvents(ctx sdk.Context, createPubEvents types.CreatePubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePubEventsKey))
	b := k.cdc.MustMarshalBinaryBare(&createPubEvents)
	store.Set(GetCreatePubEventsIDBytes(createPubEvents.PubId), b)
}

// GetCreatePubEvents returns a createPubEvents from its id
func (k Keeper) GetCreatePubEvents(ctx sdk.Context, id uint64) types.CreatePubEvents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePubEventsKey))
	var createPubEvents types.CreatePubEvents
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCreatePubEventsIDBytes(id)), &createPubEvents)
	return createPubEvents
}

// HasCreatePubEvents checks if the createPubEvents exists in the store
func (k Keeper) HasCreatePubEvents(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePubEventsKey))
	return store.Has(GetCreatePubEventsIDBytes(id))
}

// GetCreatePubEventsOwner returns the creator of the
func (k Keeper) GetCreatePubEventsOwner(ctx sdk.Context, id uint64) string {
	return k.GetCreatePubEvents(ctx, id).Creator
}

// RemoveCreatePubEvents removes a createPubEvents from the store
func (k Keeper) RemoveCreatePubEvents(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePubEventsKey))
	store.Delete(GetCreatePubEventsIDBytes(id))
}

// Get start and end time
func (k Keeper) GetTimesPubEvents(ctx sdk.Context, id uint64) (int64, int64) {
	data := k.GetCreatePubEvents(ctx, id)
	return data.StartTime, data.EndTime
}

// check if event finished
func (k Keeper) GetEventFinished(ctx sdk.Context, id uint64) bool {
	return k.GetCreatePubEvents(ctx, id).Finished
}

// GetAllCreatePubEvents returns all createPubEvents
func (k Keeper) GetAllCreatePubEvents(ctx sdk.Context) (list []types.CreatePubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.CreatePubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetCreatePubEventsIDBytes returns the byte representation of the ID
func GetCreatePubEventsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetCreatePubEventsIDFromBytes returns ID in uint64 format from a byte array
func GetCreatePubEventsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
