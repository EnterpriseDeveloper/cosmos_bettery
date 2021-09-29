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

func (k Keeper) FihishPubEventAll(c context.Context, req *types.QueryAllFihishPubEventRequest) (*types.QueryAllFihishPubEventResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var fihishPubEvents []*types.FihishPubEvent
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	fihishPubEventStore := prefix.NewStore(store, types.KeyPrefix(types.FihishPubEventKey))

	pageRes, err := query.Paginate(fihishPubEventStore, req.Pagination, func(key []byte, value []byte) error {
		var fihishPubEvent types.FihishPubEvent
		if err := k.cdc.Unmarshal(value, &fihishPubEvent); err != nil {
			return err
		}

		fihishPubEvents = append(fihishPubEvents, &fihishPubEvent)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllFihishPubEventResponse{FihishPubEvent: fihishPubEvents, Pagination: pageRes}, nil
}

func (k Keeper) FihishPubEvent(c context.Context, req *types.QueryGetFihishPubEventRequest) (*types.QueryGetFihishPubEventResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var fihishPubEvent types.FihishPubEvent
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasFihishPubEvent(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.FihishPubEventKey))
	k.cdc.MustUnmarshal(store.Get(GetFihishPubEventIDBytes(req.Id)), &fihishPubEvent)

	return &types.QueryGetFihishPubEventResponse{FihishPubEvent: &fihishPubEvent}, nil
}
