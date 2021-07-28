package keeper

import (
	"encoding/binary"

	"github.com/VoroshilovMax/bettery/x/funds/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// AppendMintBet appends a mintBet in the store with a new id and update the count
func (k Keeper) AppendMintBet(
	ctx sdk.Context,
	mintBet types.MintBet,
) uint64 {

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintBetKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&mintBet)
	store.Set(GetMintBetIDBytes(uint64(mintBet.UserId)), appendedValue)

	return uint64(mintBet.UserId)
}

// SetMintBet set a specific mintBet in the store
func (k Keeper) SetMintBet(ctx sdk.Context, mintBet types.MintBet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintBetKey))
	b := k.cdc.MustMarshalBinaryBare(&mintBet)
	store.Set(GetMintBetIDBytes(uint64(mintBet.UserId)), b)
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
