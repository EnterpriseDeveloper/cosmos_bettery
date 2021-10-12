package keeper

import (
	"context"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
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
		if err := k.cdc.Unmarshal(value, &partPubEvents); err != nil {
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

	var partPubEventss []*types.PartPubEvents
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	partPubEventsStore := prefix.NewStore(store, types.KeyPrefix(types.PartPubEventsKey))

	pageRes, err := query.Paginate(partPubEventsStore, req.Pagination, func(key []byte, value []byte) error {
		var partPubEvents types.PartPubEvents
		if err := k.cdc.Unmarshal(value, &partPubEvents); err != nil {
			return err
		}
		p := &partPubEvents
		if p.PubId == req.Id {
			partPubEventss = append(partPubEventss, &partPubEvents)
			return nil
		} else {
			return nil
		}
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	pageRes.Total = uint64(len(partPubEventss))

	return &types.QueryGetPartPubEventsResponse{PartPubEvents: partPubEventss, Pagination: pageRes}, nil
}
