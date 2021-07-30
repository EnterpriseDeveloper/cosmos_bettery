package keeper

import (
	"encoding/binary"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// AppendValidPubEvents appends a validPubEvents in the store with a new id and update the count
func (k Keeper) AppendValidPubEvents(
	ctx sdk.Context,
	validPubEvents types.ValidPubEvents,
) uint64 {

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&validPubEvents)
	store.Set(GetValidPubEventsIDBytes(validPubEvents.PubId), appendedValue)

	return validPubEvents.PubId
}

// SetValidPubEvents set a specific validPubEvents in the store
func (k Keeper) SetValidPubEvents(ctx sdk.Context, validPubEvents types.ValidPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	b := k.cdc.MustMarshalBinaryBare(&validPubEvents)
	store.Set(GetValidPubEventsIDBytes(validPubEvents.PubId), b)
}

// GetValidPubEvents returns a validPubEvents from its id
func (k Keeper) GetValidPubEvents(ctx sdk.Context, id uint64) types.ValidPubEvents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	var validPubEvents types.ValidPubEvents
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetValidPubEventsIDBytes(id)), &validPubEvents)
	return validPubEvents
}

// HasValidPubEvents checks if the validPubEvents exists in the store
func (k Keeper) HasValidPubEvents(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	return store.Has(GetValidPubEventsIDBytes(id))
}

// GetValidPubEventsOwner returns the creator of the
func (k Keeper) GetValidPubEventsOwner(ctx sdk.Context, id uint64) string {
	return k.GetValidPubEvents(ctx, id).Creator
}

// RemoveValidPubEvents removes a validPubEvents from the store
func (k Keeper) RemoveValidPubEvents(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	store.Delete(GetValidPubEventsIDBytes(id))
}

// GetAllValidPubEvents returns all validPubEvents
func (k Keeper) GetAllValidPubEvents(ctx sdk.Context) (list []types.ValidPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ValidPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetValidPubEventsIDBytes returns the byte representation of the ID
func GetValidPubEventsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetValidPubEventsIDFromBytes returns ID in uint64 format from a byte array
func GetValidPubEventsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
