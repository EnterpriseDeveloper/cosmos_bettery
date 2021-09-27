package keeper

import (
	"encoding/binary"
	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetRefundPubEventsCount get the total number of TypeName.LowerCamel
func (k Keeper) GetRefundPubEventsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefundPubEventsCountKey))
	byteKey := types.KeyPrefix(types.RefundPubEventsCountKey)
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

// SetRefundPubEventsCount set the total number of refundPubEvents
func (k Keeper) SetRefundPubEventsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefundPubEventsCountKey))
	byteKey := types.KeyPrefix(types.RefundPubEventsCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendRefundPubEvents appends a refundPubEvents in the store with a new id and update the count
func (k Keeper) AppendRefundPubEvents(
	ctx sdk.Context,
	refundPubEvents types.RefundPubEvents,
) uint64 {
	// Create the refundPubEvents
	count := k.GetRefundPubEventsCount(ctx)

	// Set the ID of the appended value
	refundPubEvents.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefundPubEventsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&refundPubEvents)
	store.Set(GetRefundPubEventsIDBytes(refundPubEvents.Id), appendedValue)

	// Update refundPubEvents count
	k.SetRefundPubEventsCount(ctx, count+1)

	return count
}

// SetRefundPubEvents set a specific refundPubEvents in the store
func (k Keeper) SetRefundPubEvents(ctx sdk.Context, refundPubEvents types.RefundPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefundPubEventsKey))
	b := k.cdc.MustMarshalBinaryBare(&refundPubEvents)
	store.Set(GetRefundPubEventsIDBytes(refundPubEvents.Id), b)
}

// GetRefundPubEvents returns a refundPubEvents from its id
func (k Keeper) GetRefundPubEvents(ctx sdk.Context, id uint64) types.RefundPubEvents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefundPubEventsKey))
	var refundPubEvents types.RefundPubEvents
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetRefundPubEventsIDBytes(id)), &refundPubEvents)
	return refundPubEvents
}

// HasRefundPubEvents checks if the refundPubEvents exists in the store
func (k Keeper) HasRefundPubEvents(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefundPubEventsKey))
	return store.Has(GetRefundPubEventsIDBytes(id))
}

// GetRefundPubEventsOwner returns the creator of the
func (k Keeper) GetRefundPubEventsOwner(ctx sdk.Context, id uint64) string {
	return k.GetRefundPubEvents(ctx, id).Creator
}

// RemoveRefundPubEvents removes a refundPubEvents from the store
func (k Keeper) RemoveRefundPubEvents(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefundPubEventsKey))
	store.Delete(GetRefundPubEventsIDBytes(id))
}

// GetAllRefundPubEvents returns all refundPubEvents
func (k Keeper) GetAllRefundPubEvents(ctx sdk.Context) (list []types.RefundPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefundPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.RefundPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetRefundPubEventsIDBytes returns the byte representation of the ID
func GetRefundPubEventsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetRefundPubEventsIDFromBytes returns ID in uint64 format from a byte array
func GetRefundPubEventsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
