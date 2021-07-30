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

func (k Keeper) PartPubEventsAll(c context.Context, req *types.QueryAllPartPubEventsRequest) (*types.QueryAllPartPubEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var partPubEventss []*types.PartPubEvents
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	partPubEventsStore := prefix.NewStore(store, types.KeyPrefix(types.PartPubEventsKey))

	pageRes, err := query.Paginate(partPubEventsStore, req.Pagination, func(key []byte, value []byte) error {
		var partPubEvents types.PartPubEvents
		if err := k.cdc.UnmarshalBinaryBare(value, &partPubEvents); err != nil {
			return err
		}

		partPubEventss = append(partPubEventss, &partPubEvents)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPartPubEventsResponse{PartPubEvents: partPubEventss, Pagination: pageRes}, nil
}

func (k Keeper) PartPubEvents(c context.Context, req *types.QueryGetPartPubEventsRequest) (*types.QueryGetPartPubEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var partPubEvents types.PartPubEvents
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasPartPubEvents(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.PartPubEventsKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPartPubEventsIDBytes(req.Id)), &partPubEvents)

	return &types.QueryGetPartPubEventsResponse{PartPubEvents: &partPubEvents}, nil
}
