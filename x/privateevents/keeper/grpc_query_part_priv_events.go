package keeper

import (
	"context"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) PartPrivEventsAll(c context.Context, req *types.QueryAllPartPrivEventsRequest) (*types.QueryAllPartPrivEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var partPrivEventss []*types.PartPrivEvents
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	partPrivEventsStore := prefix.NewStore(store, types.KeyPrefix(types.PartPrivEventsKey))

	pageRes, err := query.Paginate(partPrivEventsStore, req.Pagination, func(key []byte, value []byte) error {
		var partPrivEvents types.PartPrivEvents
		if err := k.cdc.Unmarshal(value, &partPrivEvents); err != nil {
			return err
		}

		partPrivEventss = append(partPrivEventss, &partPrivEvents)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPartPrivEventsResponse{PartPrivEvents: partPrivEventss, Pagination: pageRes}, nil
}

func (k Keeper) PartPrivEvents(c context.Context, req *types.QueryGetPartPrivEventsRequest) (*types.QueryGetPartPrivEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var partPrivEventss []*types.PartPrivEvents
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	partPrivEventsStore := prefix.NewStore(store, types.KeyPrefix(types.PartPrivEventsKey))

	pageRes, err := query.Paginate(partPrivEventsStore, req.Pagination, func(key []byte, value []byte) error {
		var partPrivEvents types.PartPrivEvents
		if err := k.cdc.Unmarshal(value, &partPrivEvents); err != nil {
			return err
		}

		p := &partPrivEvents
		if p.PrivId == req.Id {
			partPrivEventss = append(partPrivEventss, &partPrivEvents)
			return nil
		} else {
			return nil
		}
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	pageRes.Total = uint64(len(partPrivEventss))

	return &types.QueryGetPartPrivEventsResponse{PartPrivEvents: partPrivEventss, Pagination: pageRes}, nil
}
