package keeper

import (
	"encoding/binary"
	"strconv"

	"github.com/VoroshilovMax/bettery/x/funds/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetMintCount get the total number of TypeName.LowerCamel
func (k Keeper) GetMintCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintBetCountKey))
	byteKey := types.KeyPrefix(types.MintBetCountKey)
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

// SetMintCount set the total number of mintCount
func (k Keeper) SetMintCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintBetCountKey))
	byteKey := types.KeyPrefix(types.MintBetCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendMintBet appends a mintBet in the store with a new id and update the count
func (k Keeper) AppendMintBet(
	ctx sdk.Context,
	mintBet types.MintBet,
) uint64 {
	count := k.GetMintCount(ctx)

	// Set the ID of the appended value
	mintBet.Id = count
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintBetKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&mintBet)
	store.Set(GetMintBetIDBytes(uint64(mintBet.Id)), appendedValue)

	k.SetMintCount(ctx, count+1)

	return count
}

// SetMintBet set a specific mintBet in the store
func (k Keeper) SetMintBet(ctx sdk.Context, mintBet types.MintBet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintBetKey))
	b := k.cdc.MustMarshalBinaryBare(&mintBet)
	store.Set(GetMintBetIDBytes(uint64(mintBet.Id)), b)
}

// GetMintBet returns a mintBet from its id
func (k Keeper) GetMintBet(ctx sdk.Context, id uint64) types.MintBet {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintBetKey))
	var mintBet types.MintBet
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetMintBetIDBytes(id)), &mintBet)
	return mintBet
}

// HasMintBet checks if the mintBet exists in the store
func (k Keeper) HasMintBet(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintBetKey))
	return store.Has(GetMintBetIDBytes(id))
}

// GetMintBetOwner returns the creator of the
func (k Keeper) GetMintBetOwner(ctx sdk.Context, id uint64) string {
	return k.GetMintBet(ctx, id).Creator
}

// RemoveMintBet removes a mintBet from the store
func (k Keeper) RemoveMintBet(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintBetKey))
	store.Delete(GetMintBetIDBytes(id))
}

// GetAllMintBet returns all mintBet
func (k Keeper) GetAllMintBet(ctx sdk.Context) (list []types.MintBet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintBetKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.MintBet
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetMintBetIDBytes returns the byte representation of the ID
func GetMintBetIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetMintBetIDFromBytes returns ID in uint64 format from a byte array
func GetMintBetIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
