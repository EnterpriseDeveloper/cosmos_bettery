package keeper

import (
	"encoding/binary"
	"strconv"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetValidPrivEventsCount get the total number of TypeName.LowerCamel
func (k Keeper) GetValidPrivEventsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsCountKey))
	byteKey := types.KeyPrefix(types.ValidPrivEventsCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to uint64
		panic("cannot decode count")
	}

	return count
}

// SetValidPrivEventsCount set the total number of validPrivEvents
func (k Keeper) SetValidPrivEventsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsCountKey))
	byteKey := types.KeyPrefix(types.ValidPrivEventsCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendValidPrivEvents appends a validPrivEvents in the store with a new id and update the count
func (k Keeper) AppendValidPrivEvents(
	ctx sdk.Context,
	validPrivEvents types.ValidPrivEvents,
) uint64 {
	count := k.GetValidPrivEventsCount(ctx)

	// Set the ID of the appended value
	validPrivEvents.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsKey))
	appendedValue := k.cdc.MustMarshal(&validPrivEvents)
	store.Set(GetValidPrivEventsIDBytes(validPrivEvents.Id), appendedValue)

	k.SetValidPrivEventsCount(ctx, count+1)
	return count
}

// SetValidPrivEvents set a specific validPrivEvents in the store
func (k Keeper) SetValidPrivEvents(ctx sdk.Context, validPrivEvents types.ValidPrivEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsKey))
	b := k.cdc.MustMarshal(&validPrivEvents)
	store.Set(GetValidPrivEventsIDBytes(validPrivEvents.Id), b)
}

// GetValidPrivEvents returns a validPrivEvents from its id
func (k Keeper) GetValidPrivEvents(ctx sdk.Context, id uint64) types.ValidPrivEvents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsKey))
	var validPrivEvents types.ValidPrivEvents
	k.cdc.MustUnmarshal(store.Get(GetValidPrivEventsIDBytes(id)), &validPrivEvents)
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
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetEachValidPrivEvent returs all validator in event
func (k Keeper) GetAmountOfValidPrivEvents(ctx sdk.Context, id uint64) int {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()
	var list []types.ValidPrivEvents

	for ; iterator.Valid(); iterator.Next() {
		var val types.ValidPrivEvents
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		if id == val.PrivId {
			list = append(list, val)
		}
	}

	return len(list)
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
