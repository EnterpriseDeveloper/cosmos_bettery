package keeper

import (
	"encoding/binary"
	"strconv"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetPartPrivEventsCount get the total number of TypeName.LowerCamel
func (k Keeper) GetPartPrivEventsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPrivEventsCountKey))
	byteKey := types.KeyPrefix(types.PartPrivEventsCountKey)
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

// SetPartPrivEventsCount set the total number of parPrivEvents
func (k Keeper) SetPartPrivEventsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPrivEventsCountKey))
	byteKey := types.KeyPrefix(types.PartPrivEventsCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendPartPrivEvents appends a partPrivEvents in the store with a new id and update the count
func (k Keeper) AppendPartPrivEvents(
	ctx sdk.Context,
	partPrivEvents types.PartPrivEvents,
) uint64 {
	count := k.GetPartPrivEventsCount(ctx)

	// Set the ID of the appended value
	partPrivEvents.Id = count
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPrivEventsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&partPrivEvents)
	store.Set(GetPartPrivEventsIDBytes(partPrivEvents.Id), appendedValue)

	k.SetPartPrivEventsCount(ctx, count+1)

	return count
}

// SetPartPrivEvents set a specific partPrivEvents in the store
func (k Keeper) SetPartPrivEvents(ctx sdk.Context, partPrivEvents types.PartPrivEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPrivEventsKey))
	b := k.cdc.MustMarshalBinaryBare(&partPrivEvents)
	store.Set(GetPartPrivEventsIDBytes(partPrivEvents.Id), b)
}

// GetPartPrivEvents returns a partPrivEvents from its id
func (k Keeper) GetPartPrivEvents(ctx sdk.Context, id uint64) types.PartPrivEvents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPrivEventsKey))
	var partPrivEvents types.PartPrivEvents
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPartPrivEventsIDBytes(id)), &partPrivEvents)
	return partPrivEvents
}

// HasPartPrivEvents checks if the partPrivEvents exists in the store
func (k Keeper) HasPartPrivEvents(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPrivEventsKey))
	return store.Has(GetPartPrivEventsIDBytes(id))
}

// GetPartPrivEventsOwner returns the creator of the
func (k Keeper) GetPartPrivEventsOwner(ctx sdk.Context, id uint64) string {
	return k.GetPartPrivEvents(ctx, id).Creator
}

// RemovePartPrivEvents removes a partPrivEvents from the store
func (k Keeper) RemovePartPrivEvents(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPrivEventsKey))
	store.Delete(GetPartPrivEventsIDBytes(id))
}

// GetAllPartPrivEvents returns all partPrivEvents
func (k Keeper) GetAllPartPrivEvents(ctx sdk.Context) (list []types.PartPrivEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPrivEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.PartPrivEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetEachPartPrivEvent returs all participant in event
func (k Keeper) findPartPrivEvent(ctx sdk.Context, id uint64, part string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPrivEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AllPartPrivEvent
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if id == val.PrivId && part == val.Creator {
			return true
		}
	}

	return false
}

// GetPartPrivEventsIDBytes returns the byte representation of the ID
func GetPartPrivEventsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPartPrivEventsIDFromBytes returns ID in uint64 format from a byte array
func GetPartPrivEventsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
