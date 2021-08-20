package keeper

import (
	"encoding/binary"
	"math/big"
	"strconv"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetPartPubEventsCount get the total number of TypeName.LowerCamel
func (k Keeper) GetPartPubEventsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsCountKey))
	byteKey := types.KeyPrefix(types.PartPubEventsCountKey)
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

// SetPartPubEventsCount set the total number of parPubEvents
func (k Keeper) SetPartPubEventsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsCountKey))
	byteKey := types.KeyPrefix(types.PartPubEventsCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendPartPubEvents appends a partPubEvents in the store with a new id and update the count
func (k Keeper) AppendPartPubEvents(
	ctx sdk.Context,
	partPubEvents types.PartPubEvents,
) uint64 {
	count := k.GetPartPubEventsCount(ctx)

	// Set the ID of the appended value
	partPubEvents.Id = count
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&partPubEvents)
	store.Set(GetPartPubEventsIDBytes(partPubEvents.Id), appendedValue)

	k.SetPartPubEventsCount(ctx, count+1)

	return count
}

// SetPartPubEvents set a specific partPubEvents in the store
func (k Keeper) SetPartPubEvents(ctx sdk.Context, partPubEvents types.PartPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	b := k.cdc.MustMarshalBinaryBare(&partPubEvents)
	store.Set(GetPartPubEventsIDBytes(partPubEvents.Id), b)
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

// GetPoolByAnswerPubEvent returns big init pool of winners
func (k Keeper) GetPoolByAnswerPubEvent(ctx sdk.Context, id uint64, answer int) (*big.Int, string, bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()
	var pool *big.Int

	for ; iterator.Valid(); iterator.Next() {
		var val types.PartPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if val.PubId == id && val.AnswerIndex == uint32(answer) {
			amount, ok := new(big.Int).SetString(val.Amount, 10)
			if !ok {
				return new(big.Int).SetInt64(0), "error parse from pool", false
			}
			pool = pool.Add(pool, amount)
		}
	}

	return pool, "", true
}

// GetPoolPubEvent returns big init pool of all part
func (k Keeper) GetPoolPubEvent(ctx sdk.Context, id uint64) (*big.Int, string, bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()
	var pool *big.Int

	for ; iterator.Valid(); iterator.Next() {
		var val types.PartPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if val.PubId == id {
			amount, ok := new(big.Int).SetString(val.Amount, 10)
			if !ok {
				return new(big.Int).SetInt64(0), "error parse from pool", false
			}
			pool = pool.Add(pool, amount)
		}
	}

	return pool, "", true
}

// GetPlayAmountByAnswer returns all players by answer index
func (k Keeper) GetPlayAmountByAnswer(ctx sdk.Context, id uint64, i int) (list []types.PartPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.PartPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if val.PubId == id && val.AnswerIndex == uint32(i) {
			list = append(list, val)
		}
	}

	return list
}

func (k Keeper) GetAllPlayAmount(ctx sdk.Context, id uint64) int {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()
	var list []types.PartPubEvents

	for ; iterator.Valid(); iterator.Next() {
		var val types.PartPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if val.PubId == id {
			list = append(list, val)
		}
	}

	return len(list)
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

func (k Keeper) findPartPubEvent(ctx sdk.Context, id uint64, part string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AllPartPubEvent
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if id == val.PrivId && part == val.Creator {
			return true
		}
	}

	return false
}
