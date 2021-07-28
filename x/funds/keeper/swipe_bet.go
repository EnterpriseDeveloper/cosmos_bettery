package keeper

import (
	"encoding/binary"

	"github.com/VoroshilovMax/bettery/x/funds/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// AppendSwipeBet appends a swipeBet in the store with a new id and update the count
func (k Keeper) AppendSwipeBet(
	ctx sdk.Context,
	swipeBet types.SwipeBet,
) uint64 {

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwipeBetKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&swipeBet)
	store.Set(GetSwipeBetIDBytes(uint64(swipeBet.UserId)), appendedValue)

	return uint64(swipeBet.UserId)
}

// SetSwipeBet set a specific swipeBet in the store
func (k Keeper) SetSwipeBet(ctx sdk.Context, swipeBet types.SwipeBet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwipeBetKey))
	b := k.cdc.MustMarshalBinaryBare(&swipeBet)
	store.Set(GetSwipeBetIDBytes(uint64(swipeBet.UserId)), b)
}

// GetSwipeBet returns a swipeBet from its id
func (k Keeper) GetSwipeBet(ctx sdk.Context, id uint64) types.SwipeBet {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwipeBetKey))
	var swipeBet types.SwipeBet
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSwipeBetIDBytes(id)), &swipeBet)
	return swipeBet
}

// HasSwipeBet checks if the swipeBet exists in the store
func (k Keeper) HasSwipeBet(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwipeBetKey))
	return store.Has(GetSwipeBetIDBytes(id))
}

// GetSwipeBetOwner returns the creator of the
func (k Keeper) GetSwipeBetOwner(ctx sdk.Context, id uint64) string {
	return k.GetSwipeBet(ctx, id).Creator
}

// RemoveSwipeBet removes a swipeBet from the store
func (k Keeper) RemoveSwipeBet(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwipeBetKey))
	store.Delete(GetSwipeBetIDBytes(id))
}

// GetAllSwipeBet returns all swipeBet
func (k Keeper) GetAllSwipeBet(ctx sdk.Context) (list []types.SwipeBet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwipeBetKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SwipeBet
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetSwipeBetIDBytes returns the byte representation of the ID
func GetSwipeBetIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSwipeBetIDFromBytes returns ID in uint64 format from a byte array
func GetSwipeBetIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
