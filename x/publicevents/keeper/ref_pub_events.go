package keeper

import (
	"encoding/binary"
	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetRefPubEventsCount get the total number of TypeName.LowerCamel
func (k Keeper) GetRefPubEventsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefPubEventsCountKey))
	byteKey := types.KeyPrefix(types.RefPubEventsCountKey)
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

// SetRefPubEventsCount set the total number of refPubEvents
func (k Keeper) SetRefPubEventsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefPubEventsCountKey))
	byteKey := types.KeyPrefix(types.RefPubEventsCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendRefPubEvents appends a refPubEvents in the store with a new id and update the count
func (k Keeper) AppendRefPubEvents(
	ctx sdk.Context,
	refPubEvents types.RefPubEvents,
) uint64 {
	// Create the refPubEvents
	count := k.GetRefPubEventsCount(ctx)

	// Set the ID of the appended value
	refPubEvents.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefPubEventsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&refPubEvents)
	store.Set(GetRefPubEventsIDBytes(refPubEvents.Id), appendedValue)

	// Update refPubEvents count
	k.SetRefPubEventsCount(ctx, count+1)

	return count
}

// SetRefPubEvents set a specific refPubEvents in the store
func (k Keeper) SetRefPubEvents(ctx sdk.Context, refPubEvents types.RefPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefPubEventsKey))
	b := k.cdc.MustMarshalBinaryBare(&refPubEvents)
	store.Set(GetRefPubEventsIDBytes(refPubEvents.Id), b)
}

// GetRefPubEvents returns a refPubEvents from its id
func (k Keeper) GetRefPubEvents(ctx sdk.Context, id uint64) types.RefPubEvents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefPubEventsKey))
	var refPubEvents types.RefPubEvents
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetRefPubEventsIDBytes(id)), &refPubEvents)
	return refPubEvents
}

// HasRefPubEvents checks if the refPubEvents exists in the store
func (k Keeper) HasRefPubEvents(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefPubEventsKey))
	return store.Has(GetRefPubEventsIDBytes(id))
}

// GetRefPubEventsOwner returns the creator of the
func (k Keeper) GetRefPubEventsOwner(ctx sdk.Context, id uint64) string {
	return k.GetRefPubEvents(ctx, id).Creator
}

// RemoveRefPubEvents removes a refPubEvents from the store
func (k Keeper) RemoveRefPubEvents(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefPubEventsKey))
	store.Delete(GetRefPubEventsIDBytes(id))
}

// GetAllRefPubEvents returns all refPubEvents
func (k Keeper) GetAllRefPubEvents(ctx sdk.Context) (list []types.RefPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.RefPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetRefPubEventsIDBytes returns the byte representation of the ID
func GetRefPubEventsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetRefPubEventsIDFromBytes returns ID in uint64 format from a byte array
func GetRefPubEventsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
