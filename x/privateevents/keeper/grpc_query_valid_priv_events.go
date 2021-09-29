package keeper

import (
	"context"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ValidPrivEventsAll(c context.Context, req *types.QueryAllValidPrivEventsRequest) (*types.QueryAllValidPrivEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var validPrivEventss []*types.ValidPrivEvents
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	validPrivEventsStore := prefix.NewStore(store, types.KeyPrefix(types.ValidPrivEventsKey))

	pageRes, err := query.Paginate(validPrivEventsStore, req.Pagination, func(key []byte, value []byte) error {
		var validPrivEvents types.ValidPrivEvents
		if err := k.cdc.Unmarshal(value, &validPrivEvents); err != nil {
			return err
		}

		validPrivEventss = append(validPrivEventss, &validPrivEvents)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllValidPrivEventsResponse{ValidPrivEvents: validPrivEventss, Pagination: pageRes}, nil
}

func (k Keeper) ValidPrivEvents(c context.Context, req *types.QueryGetValidPrivEventsRequest) (*types.QueryGetValidPrivEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var validPrivEvents types.ValidPrivEvents
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasValidPrivEvents(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidPrivEventsKey))
	k.cdc.MustUnmarshal(store.Get(GetValidPrivEventsIDBytes(req.Id)), &validPrivEvents)

	return &types.QueryGetValidPrivEventsResponse{ValidPrivEvents: &validPrivEvents}, nil
}
