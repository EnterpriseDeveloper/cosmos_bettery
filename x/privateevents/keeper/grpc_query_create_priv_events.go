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

func (k Keeper) CreatePrivEventsAll(c context.Context, req *types.QueryAllCreatePrivEventsRequest) (*types.QueryAllCreatePrivEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var createPrivEventss []*types.CreatePrivEvents
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	createPrivEventsStore := prefix.NewStore(store, types.KeyPrefix(types.CreatePrivEventsKey))

	pageRes, err := query.Paginate(createPrivEventsStore, req.Pagination, func(key []byte, value []byte) error {
		var createPrivEvents types.CreatePrivEvents
		if err := k.cdc.UnmarshalBinaryBare(value, &createPrivEvents); err != nil {
			return err
		}

		createPrivEventss = append(createPrivEventss, &createPrivEvents)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCreatePrivEventsResponse{CreatePrivEvents: createPrivEventss, Pagination: pageRes}, nil
}

func (k Keeper) CreatePrivEvents(c context.Context, req *types.QueryGetCreatePrivEventsRequest) (*types.QueryGetCreatePrivEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var createPrivEvents types.CreatePrivEvents
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasCreatePrivEvents(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CreatePrivEventsKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetCreatePrivEventsIDBytes(req.Id)), &createPrivEvents)

	return &types.QueryGetCreatePrivEventsResponse{CreatePrivEvents: &createPrivEvents}, nil
}
