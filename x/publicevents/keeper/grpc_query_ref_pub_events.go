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

func (k Keeper) RefPubEventsAll(c context.Context, req *types.QueryAllRefPubEventsRequest) (*types.QueryAllRefPubEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var refPubEventss []*types.RefPubEvents
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	refPubEventsStore := prefix.NewStore(store, types.KeyPrefix(types.RefPubEventsKey))

	pageRes, err := query.Paginate(refPubEventsStore, req.Pagination, func(key []byte, value []byte) error {
		var refPubEvents types.RefPubEvents
		if err := k.cdc.UnmarshalBinaryBare(value, &refPubEvents); err != nil {
			return err
		}

		refPubEventss = append(refPubEventss, &refPubEvents)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRefPubEventsResponse{RefPubEvents: refPubEventss, Pagination: pageRes}, nil
}

func (k Keeper) RefPubEvents(c context.Context, req *types.QueryGetRefPubEventsRequest) (*types.QueryGetRefPubEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var refPubEvents types.RefPubEvents
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasRefPubEvents(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefPubEventsKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetRefPubEventsIDBytes(req.Id)), &refPubEvents)

	return &types.QueryGetRefPubEventsResponse{RefPubEvents: &refPubEvents}, nil
}
