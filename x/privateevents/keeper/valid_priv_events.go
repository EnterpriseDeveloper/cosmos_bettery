package keeper

import (
	"encoding/binary"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// AppendValidPrivEvents appends a validPrivEvents in the store with a new id and update the count
func (k Keeper) AppendValidPrivEvents(
	ctx sdk.Context,
	validPrivEvents types.ValidPrivEvents,
) uint64 {

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&validPrivEvents)
	store.Set(GetValidPrivEventsIDBytes(validPrivEvents.PrivId), appendedValue)

	return validPrivEvents.PrivId
}

// SetValidPrivEvents set a specific validPrivEvents in the store
func (k Keeper) SetValidPrivEvents(ctx sdk.Context, validPrivEvents types.ValidPrivEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsKey))
	b := k.cdc.MustMarshalBinaryBare(&validPrivEvents)
	store.Set(GetValidPrivEventsIDBytes(validPrivEvents.PrivId), b)
}

// GetValidPrivEvents returns a validPrivEvents from its id
func (k Keeper) GetValidPrivEvents(ctx sdk.Context, id uint64) types.ValidPrivEvents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsKey))
	var validPrivEvents types.ValidPrivEvents
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetValidPrivEventsIDBytes(id)), &validPrivEvents)
	return validPrivEvents
}

// HasValidPrivEvents checks if the validPrivEvents exists in the store
func (k Keeper) HasValidPrivEvents(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsKey))
	return store.Has(GetValidPrivEventsIDBytes(id))
}

// GetValidPrivEventsOwner returns the creator of the
func (k Keeper) GetValidPrivEventsOwner(ctx sdk.Context, id uint64) string {
	return k.GetValidPrivEvents(ctx, id).Creator
}

// RemoveValidPrivEvents removes a validPrivEvents from the store
func (k Keeper) RemoveValidPrivEvents(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsKey))
	store.Delete(GetValidPrivEventsIDBytes(id))
}

// GetAllValidPrivEvents returns all validPrivEvents
func (k Keeper) GetAllValidPrivEvents(ctx sdk.Context) (list []types.ValidPrivEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ValidPrivEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetEachValidPrivEvent returs all validator in event
func (k Keeper) GetEachValidPrivEvents(ctx sdk.Context, id uint64) (list []types.AllValidPrivEvent) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AllValidPrivEvent
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if id == val.PrivId {
			list = append(list, val)
		}
	}

	return
}

// GetValidPrivEventsIDBytes returns the byte representation of the ID
func GetValidPrivEventsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetValidPrivEventsIDFromBytes returns ID in uint64 format from a byte array
func GetValidPrivEventsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
