package keeper

import (
	"encoding/binary"
	"fmt"
	"strconv"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetValidPubEventsCount get the total number of TypeName.LowerCamel
func (k Keeper) GetValidPubEventsCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsCountKey))
	byteKey := types.KeyPrefix(types.ValidPubEventsCountKey)
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

// SetValidPubEventsCount set the total number of validPubEvents
func (k Keeper) SetValidPubEventsCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsCountKey))
	byteKey := types.KeyPrefix(types.ValidPubEventsCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendValidPubEvents appends a validPubEvents in the store with a new id and update the count
func (k Keeper) AppendValidPubEvents(
	ctx sdk.Context,
	validPubEvents types.ValidPubEvents,
) uint64 {
	count := k.GetValidPubEventsCount(ctx)

	// Set the ID of the appended value
	validPubEvents.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&validPubEvents)
	store.Set(GetValidPubEventsIDBytes(validPubEvents.Id), appendedValue)

	k.SetValidPubEventsCount(ctx, count+1)
	return count
}

// SetValidPubEvents set a specific validPubEvents in the store
func (k Keeper) SetValidPubEvents(ctx sdk.Context, validPubEvents types.ValidPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	b := k.cdc.MustMarshalBinaryBare(&validPubEvents)
	store.Set(GetValidPubEventsIDBytes(validPubEvents.Id), b)
}

// GetValidPubEvents returns a validPubEvents from its id
func (k Keeper) GetValidPubEvents(ctx sdk.Context, id uint64) types.ValidPubEvents {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	var validPubEvents types.ValidPubEvents
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetValidPubEventsIDBytes(id)), &validPubEvents)
	return validPubEvents
}

// HasValidPubEvents checks if the validPubEvents exists in the store
func (k Keeper) HasValidPubEvents(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	return store.Has(GetValidPubEventsIDBytes(id))
}

// GetValidPubEventsOwner returns the creator of the
func (k Keeper) GetValidPubEventsOwner(ctx sdk.Context, id uint64) string {
	return k.GetValidPubEvents(ctx, id).Creator
}

// RemoveValidPubEvents removes a validPubEvents from the store
func (k Keeper) RemoveValidPubEvents(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	store.Delete(GetValidPubEventsIDBytes(id))
}

// GetAllValidPubEvents returns all validPubEvents
func (k Keeper) GetAllValidPubEvents(ctx sdk.Context) (list []types.ValidPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ValidPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

func (k Keeper) GetValidPubEventByAnswer(ctx sdk.Context, id uint64, answer int) (list []types.ValidPubEvents) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ValidPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		fmt.Println(val.PubId)
		if val.PubId == id && int(val.AnswerIndex) == answer {
			list = append(list, val)
		}
	}

	return list
}

func (k Keeper) GetValidPubEventLength(ctx sdk.Context, id uint64) int {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})
	var list []types.ValidPubEvents

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ValidPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if val.PubId == id {
			list = append(list, val)
		}
	}

	return len(list)
}

// GetValidPubEventsIDBytes returns the byte representation of the ID
func GetValidPubEventsIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetValidPubEventsIDFromBytes returns ID in uint64 format from a byte array
func GetValidPubEventsIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) findValidPubEvent(ctx sdk.Context, id uint64, valid string) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ValidPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if id == val.PubId && valid == val.Creator {
			return true
		}
	}

	return false
}

func (k Keeper) GetAllExperReputPubEvent(ctx sdk.Context, id uint64, correctAnswer int) int {
	allReputation := 0
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.ValidPubEvents
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		if id == val.PubId && correctAnswer == int(val.AnswerIndex) && val.Reput > 0 {
			allReputation = allReputation + int(val.Reput+1)
		}
	}
	return allReputation
}
