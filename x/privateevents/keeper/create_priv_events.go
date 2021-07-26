package keeper

import (
	"encoding/binary"
	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetCreatePrivEventsCount get the total number of TypeName.LowerCamel
func (k Keeper) GetCreatePrivEventsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsCountKey))
	byteKey := types.KeyPrefix(types.CreatePrivEventsCountKey)
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

// SetCreatePrivEventsCount set the total number of createPrivEvents
func (k Keeper) SetCreatePrivEventsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsCountKey))
	byteKey := types.KeyPrefix(types.CreatePrivEventsCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendCreatePrivEvents appends a createPrivEvents in the store with a new id and update the count
func (k Keeper) AppendCreatePrivEvents(
	ctx sdk.Context,
	createPrivEvents types.CreatePrivEvents,
) uint64 {
	// Create the createPrivEvents
	count := k.GetCreatePrivEventsCount(ctx)

	// Set the ID of the appended value
	createPrivEvents.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&createPrivEvents)
	store.Set(GetCreatePrivEventsIDBytes(createPrivEvents.Id), appendedValue)

	// Update createPrivEvents count
	k.SetCreatePrivEventsCount(ctx, count+1)

	return count
}

// SetCreatePrivEvents set a specific createPrivEvents in the store
func (k Keeper) SetCreatePrivEvents(ctx sdk.Context, createPrivEvents types.CreatePrivEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	b := k.cdc.MustMarshalBinaryBare(&createPrivEvents)
	store.Set(GetCreatePrivEventsIDBytes(createPrivEvents.Id), b)
}

// GetCreatePrivEvents returns a createPrivEvents from its id
func (k Keeper) GetCreatePrivEvents(ctx sdk.Context, id uint64) types.CreatePrivEvents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	var createPrivEvents types.CreatePrivEvents
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCreatePrivEventsIDBytes(id)), &createPrivEvents)
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
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
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
