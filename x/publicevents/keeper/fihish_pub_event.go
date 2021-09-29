package keeper

import (
	"encoding/binary"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// AppendFihishPubEvent appends a fihishPubEvent in the store with a new id and update the count
func (k Keeper) AppendFihishPubEvent(
	ctx sdk.Context,
	fihishPubEvent types.FihishPubEvent,
) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FihishPubEventKey))
	appendedValue := k.cdc.MustMarshal(&fihishPubEvent)
	store.Set(GetFihishPubEventIDBytes(fihishPubEvent.PubId), appendedValue)

	return fihishPubEvent.PubId
}

// SetFihishPubEvent set a specific fihishPubEvent in the store
func (k Keeper) SetFihishPubEvent(ctx sdk.Context, fihishPubEvent types.FihishPubEvent) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FihishPubEventKey))
	b := k.cdc.MustMarshal(&fihishPubEvent)
	store.Set(GetFihishPubEventIDBytes(fihishPubEvent.PubId), b)
}

// GetFihishPubEvent returns a fihishPubEvent from its id
func (k Keeper) GetFihishPubEvent(ctx sdk.Context, id uint64) types.FihishPubEvent {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FihishPubEventKey))
	var fihishPubEvent types.FihishPubEvent
	k.cdc.MustUnmarshal(store.Get(GetFihishPubEventIDBytes(id)), &fihishPubEvent)
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
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// check if event finished
func (k Keeper) GetEventFinished(ctx sdk.Context, id uint64) bool {
	return k.GetFihishPubEvent(ctx, id).Finished
}

// check if event reverted
func (k Keeper) GetEventReverted(ctx sdk.Context, id uint64) bool {
	return k.GetFihishPubEvent(ctx, id).Reverted
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
