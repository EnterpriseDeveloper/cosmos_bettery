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

func (k Keeper) RefundPubEventsAll(c context.Context, req *types.QueryAllRefundPubEventsRequest) (*types.QueryAllRefundPubEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var refundPubEventss []*types.RefundPubEvents
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	refundPubEventsStore := prefix.NewStore(store, types.KeyPrefix(types.RefundPubEventsKey))

	pageRes, err := query.Paginate(refundPubEventsStore, req.Pagination, func(key []byte, value []byte) error {
		var refundPubEvents types.RefundPubEvents
		if err := k.cdc.UnmarshalBinaryBare(value, &refundPubEvents); err != nil {
			return err
		}

		refundPubEventss = append(refundPubEventss, &refundPubEvents)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllRefundPubEventsResponse{RefundPubEvents: refundPubEventss, Pagination: pageRes}, nil
}

func (k Keeper) RefundPubEvents(c context.Context, req *types.QueryGetRefundPubEventsRequest) (*types.QueryGetRefundPubEventsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var refundPubEvents types.RefundPubEvents
	//	ctx := sdk.UnwrapSDKContext(c)

	//	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.RefundPubEventsKey))
	//	k.cdc.MustUnmarshalBinaryBare(store.Get(GetRefundPubEventsIDBytes(req.Id)), &refundPubEvents)

	return &types.QueryGetRefundPubEventsResponse{RefundPubEvents: &refundPubEvents}, nil
}
