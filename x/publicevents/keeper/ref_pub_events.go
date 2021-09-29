package keeper

import (
	"encoding/binary"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// AppendRefPubEvents appends a refPubEvents in the store with a new id and update the count
func (k Keeper) AppendRefPubEvents(
	ctx sdk.Context,
	refPubEvents types.RefPubEvents,
) uint64 {

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefPubEventsKey))
	appendedValue := k.cdc.MustMarshal(&refPubEvents)
	store.Set(GetRefPubEventsIDBytes(refPubEvents.PubId), appendedValue)

	return refPubEvents.PubId
}

// SetRefPubEvents set a specific refPubEvents in the store
func (k Keeper) SetRefPubEvents(ctx sdk.Context, refPubEvents types.RefPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefPubEventsKey))
	b := k.cdc.MustMarshal(&refPubEvents)
	store.Set(GetRefPubEventsIDBytes(refPubEvents.PubId), b)
}

// GetRefPubEvents returns a refPubEvents from its id
func (k Keeper) GetRefPubEvents(ctx sdk.Context, id uint64) types.RefPubEvents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefPubEventsKey))
	var refPubEvents types.RefPubEvents
	k.cdc.MustUnmarshal(store.Get(GetRefPubEventsIDBytes(id)), &refPubEvents)
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
		k.cdc.MustUnmarshal(iterator.Value(), &val)
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
