package keeper

import (
	"context"

	"github.com/VoroshilovMax/bettery/x/funds/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) SwipeBetAll(c context.Context, req *types.QueryAllSwipeBetRequest) (*types.QueryAllSwipeBetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var swipeBets []*types.SwipeBet
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	swipeBetStore := prefix.NewStore(store, types.KeyPrefix(types.SwipeBetKey))

	pageRes, err := query.Paginate(swipeBetStore, req.Pagination, func(key []byte, value []byte) error {
		var swipeBet types.SwipeBet
		if err := k.cdc.Unmarshal(value, &swipeBet); err != nil {
			return err
		}

		swipeBets = append(swipeBets, &swipeBet)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSwipeBetResponse{SwipeBet: swipeBets, Pagination: pageRes}, nil
}

func (k Keeper) SwipeBet(c context.Context, req *types.QueryGetSwipeBetRequest) (*types.QueryGetSwipeBetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var swipeBet types.SwipeBet
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasSwipeBet(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SwipeBetKey))
	k.cdc.MustUnmarshal(store.Get(GetSwipeBetIDBytes(req.Id)), &swipeBet)

	return &types.QueryGetSwipeBetResponse{SwipeBet: &swipeBet}, nil
}
