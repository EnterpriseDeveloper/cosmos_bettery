package keeper

import (
	"encoding/binary"
	"github.com/VoroshilovMax/bettery/x/funds/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"strconv"
)

// GetSwipeBetCount get the total number of TypeName.LowerCamel
func (k Keeper) GetSwipeBetCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwipeBetCountKey))
	byteKey := types.KeyPrefix(types.SwipeBetCountKey)
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

// SetSwipeBetCount set the total number of swipeBet
func (k Keeper) SetSwipeBetCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwipeBetCountKey))
	byteKey := types.KeyPrefix(types.SwipeBetCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendSwipeBet appends a swipeBet in the store with a new id and update the count
func (k Keeper) AppendSwipeBet(
	ctx sdk.Context,
	swipeBet types.SwipeBet,
) uint64 {
	// Create the swipeBet
	count := k.GetSwipeBetCount(ctx)

	// Set the ID of the appended value
	swipeBet.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwipeBetKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&swipeBet)
	store.Set(GetSwipeBetIDBytes(swipeBet.Id), appendedValue)

	// Update swipeBet count
	k.SetSwipeBetCount(ctx, count+1)

	return count
}

// SetSwipeBet set a specific swipeBet in the store
func (k Keeper) SetSwipeBet(ctx sdk.Context, swipeBet types.SwipeBet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwipeBetKey))
	b := k.cdc.MustMarshalBinaryBare(&swipeBet)
	store.Set(GetSwipeBetIDBytes(swipeBet.Id), b)
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
