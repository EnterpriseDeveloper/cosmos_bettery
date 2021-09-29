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

func (k Keeper) MintBetAll(c context.Context, req *types.QueryAllMintBetRequest) (*types.QueryAllMintBetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var mintBets []*types.MintBet
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	mintBetStore := prefix.NewStore(store, types.KeyPrefix(types.MintBetKey))

	pageRes, err := query.Paginate(mintBetStore, req.Pagination, func(key []byte, value []byte) error {
		var mintBet types.MintBet
		if err := k.cdc.Unmarshal(value, &mintBet); err != nil {
			return err
		}

		mintBets = append(mintBets, &mintBet)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMintBetResponse{MintBet: mintBets, Pagination: pageRes}, nil
}

func (k Keeper) MintBet(c context.Context, req *types.QueryGetMintBetRequest) (*types.QueryGetMintBetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var mintBet types.MintBet
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasMintBet(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MintBetKey))
	k.cdc.MustUnmarshal(store.Get(GetMintBetIDBytes(req.Id)), &mintBet)

	return &types.QueryGetMintBetResponse{MintBet: &mintBet}, nil
}
