package keeper

import (
	"encoding/binary"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// AppendPartPubEvents appends a partPubEvents in the store with a new id and update the count
func (k Keeper) AppendPartPubEvents(
	ctx sdk.Context,
	partPubEvents types.PartPubEvents,
) uint64 {
	// TODO add id count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&partPubEvents)
	store.Set(GetPartPubEventsIDBytes(partPubEvents.PubId), appendedValue)

	// Update partPubEvents count
	return partPubEvents.PubId
}

// SetPartPubEvents set a specific partPubEvents in the store
func (k Keeper) SetPartPubEvents(ctx sdk.Context, partPubEvents types.PartPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	b := k.cdc.MustMarshalBinaryBare(&partPubEvents)
	store.Set(GetPartPubEventsIDBytes(partPubEvents.PubId), b)
}

// GetPartPubEvents returns a partPubEvents from its id
func (k Keeper) GetPartPubEvents(ctx sdk.Context, id uint64) types.PartPubEvents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	var partPubEvents types.PartPubEvents
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPartPubEventsIDBytes(id)), &partPubEvents)
	return partPubEvents
}

// HasPartPubEvents checks if the partPubEvents exists in the store
func (k Keeper) HasPartPubEvents(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	return store.Has(GetPartPubEventsIDBytes(id))
}

// GetPartPubEventsOwner returns the creator of the
func (k Keeper) GetPartPubEventsOwner(ctx sdk.Context, id uint64) string {
	return k.GetPartPubEvents(ctx, id).Creator
}

// RemovePartPubEvents removes a partPubEvents from the store
func (k Keeper) RemovePartPubEvents(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	store.Delete(GetPartPubEventsIDBytes(id))
}

// GetAllPartPubEvents returns all partPubEvents
func (k Keeper) GetAllPartPubEvents(ctx sdk.Context) (list []types.PartPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.PartPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPartPubEventsIDBytes returns the byte representation of the ID
func GetPartPubEventsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPartPubEventsIDFromBytes returns ID in uint64 format from a byte array
func GetPartPubEventsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) GetEachPartPubEvents(ctx sdk.Context, id uint64) (list []types.AllPartPubEvent) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AllPartPubEvent
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if id == val.PrivId {
			list = append(list, val)
		}
	}

	return
}
