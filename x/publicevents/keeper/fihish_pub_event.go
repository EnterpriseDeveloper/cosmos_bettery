package keeper

import (
	"encoding/binary"
	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetFihishPubEventCount get the total number of TypeName.LowerCamel
func (k Keeper) GetFihishPubEventCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FihishPubEventCountKey))
	byteKey := types.KeyPrefix(types.FihishPubEventCountKey)
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

// SetFihishPubEventCount set the total number of fihishPubEvent
func (k Keeper) SetFihishPubEventCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FihishPubEventCountKey))
	byteKey := types.KeyPrefix(types.FihishPubEventCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendFihishPubEvent appends a fihishPubEvent in the store with a new id and update the count
func (k Keeper) AppendFihishPubEvent(
	ctx sdk.Context,
	fihishPubEvent types.FihishPubEvent,
) uint64 {
	// Create the fihishPubEvent
	count := k.GetFihishPubEventCount(ctx)

	// Set the ID of the appended value
	fihishPubEvent.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FihishPubEventKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&fihishPubEvent)
	store.Set(GetFihishPubEventIDBytes(fihishPubEvent.Id), appendedValue)

	// Update fihishPubEvent count
	k.SetFihishPubEventCount(ctx, count+1)

	return count
}

// SetFihishPubEvent set a specific fihishPubEvent in the store
func (k Keeper) SetFihishPubEvent(ctx sdk.Context, fihishPubEvent types.FihishPubEvent) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FihishPubEventKey))
	b := k.cdc.MustMarshalBinaryBare(&fihishPubEvent)
	store.Set(GetFihishPubEventIDBytes(fihishPubEvent.Id), b)
}

// GetFihishPubEvent returns a fihishPubEvent from its id
func (k Keeper) GetFihishPubEvent(ctx sdk.Context, id uint64) types.FihishPubEvent {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FihishPubEventKey))
	var fihishPubEvent types.FihishPubEvent
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetFihishPubEventIDBytes(id)), &fihishPubEvent)
	return fihishPubEvent
}

// HasFihishPubEvent checks if the fihishPubEvent exists in the store
func (k Keeper) HasFihishPubEvent(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FihishPubEventKey))
	return store.Has(GetFihishPubEventIDBytes(id))
}

// GetFihishPubEventOwner returns the creator of the
func (k Keeper) GetFihishPubEventOwner(ctx sdk.Context, id uint64) string {
	return k.GetFihishPubEvent(ctx, id).Creator
}

// RemoveFihishPubEvent removes a fihishPubEvent from the store
func (k Keeper) RemoveFihishPubEvent(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FihishPubEventKey))
	store.Delete(GetFihishPubEventIDBytes(id))
}

// GetAllFihishPubEvent returns all fihishPubEvent
func (k Keeper) GetAllFihishPubEvent(ctx sdk.Context) (list []types.FihishPubEvent) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FihishPubEventKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.FihishPubEvent
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetFihishPubEventIDBytes returns the byte representation of the ID
func GetFihishPubEventIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetFihishPubEventIDFromBytes returns ID in uint64 format from a byte array
func GetFihishPubEventIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
