package keeper

import (
	"context"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ValidPubEventsAll(c context.Context, req *types.QueryAllValidPubEventsRequest) (*types.QueryAllValidPubEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var validPubEventss []*types.ValidPubEvents
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	validPubEventsStore := prefix.NewStore(store, types.KeyPrefix(types.ValidPubEventsKey))

	pageRes, err := query.Paginate(validPubEventsStore, req.Pagination, func(key []byte, value []byte) error {
		var validPubEvents types.ValidPubEvents
		if err := k.cdc.Unmarshal(value, &validPubEvents); err != nil {
			return err
		}

		validPubEventss = append(validPubEventss, &validPubEvents)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllValidPubEventsResponse{ValidPubEvents: validPubEventss, Pagination: pageRes}, nil
}

func (k Keeper) ValidPubEvents(c context.Context, req *types.QueryGetValidPubEventsRequest) (*types.QueryGetValidPubEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var validPubEvents types.ValidPubEvents
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasValidPubEvents(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPubEventsKey))
	k.cdc.MustUnmarshal(store.Get(GetValidPubEventsIDBytes(req.Id)), &validPubEvents)

	return &types.QueryGetValidPubEventsResponse{ValidPubEvents: &validPubEvents}, nil
}
