package keeper

import (
	"context"
	"fmt"
	"math/big"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	EFtypes "github.com/VoroshilovMax/bettery/x/publicevents/types/finish_event_config"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateRefPubEvents(goCtx context.Context, msg *types.MsgCreateRefPubEvents) (*types.MsgCreateRefPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// alredy payed
	if k.HasRefPubEvents(ctx, msg.PubId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("ref arleady payed by event id: %d", msg.PubId))
	}
	// Event do not exist
	if !k.HasCreatePubEvents(ctx, msg.PubId) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("ref event do not exist: %d", msg.PubId))
	}

	// TODO Only comapny can execute function
	// TODO think anout refactoring and move logic from JS to GO

	// payment lvl 1
	if msg.RefOneAddr[0] != "none" {
		for i := 0; i < len(msg.RefOneAddr); i++ {
			refMintAm, ok := new(big.Int).SetString(msg.RefOneAmount[i], 0)
			if !ok {
				return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("parse big init error from lvl 1 payment, amount: %s, user: %s", msg.Creator, msg.RefOneAmount[i]))
			}

			k.letsMint(ctx, msg.RefOneAddr[i], refMintAm)
		}
	}

	// payment lvl 2
	if msg.RefTwoAddr[0] != "none" {
		for i := 0; i < len(msg.RefTwoAddr); i++ {
			refMintAm, ok := new(big.Int).SetString(msg.RefTwoAmount[i], 0)
			if !ok {
				return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("parse big init error from lvl 2 payment, amount: %s, user: %s", msg.Creator, msg.RefTwoAmount[i]))
			}

			k.letsMint(ctx, msg.RefTwoAddr[i], refMintAm)
		}
	}

	// payment lvl 3
	if msg.RefThreeAddr[0] != "none" {
		for i := 0; i < len(msg.RefThreeAddr); i++ {
			refMintAm, ok := new(big.Int).SetString(msg.RefThreeAmount[i], 0)
			if !ok {
				return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("parse big init error from lvl 2 payment, amount: %s, user: %s", msg.Creator, msg.RefTwoAmount[i]))
			}

			k.letsMint(ctx, msg.RefThreeAddr[i], refMintAm)
		}
	}

	//pay to company
	compAmount, ok := new(big.Int).SetString(msg.PayToComp, 0)
	if !ok {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("parse big init error, amount: %s, user: %s", msg.Creator, msg.PayToComp))
	}

	if compAmount.Cmp(new(big.Int).SetInt64(int64(0))) == 1 {
		k.letsMint(ctx, EFtypes.Owner, compAmount)
	}

	var refPubEvents = types.RefPubEvents{
		Creator:        msg.Creator,
		PubId:          msg.PubId,
		RefOneAddr:     msg.RefOneAddr,
		RefOneAmount:   msg.RefOneAmount,
		RefTwoAddr:     msg.RefTwoAddr,
		RefTwoAmount:   msg.RefTwoAmount,
		RefThreeAddr:   msg.RefThreeAddr,
		RefThreeAmount: msg.RefThreeAmount,
		PayToComp:      msg.PayToComp,
	}

	id := k.AppendRefPubEvents(
		ctx,
		refPubEvents,
	)

	return &types.MsgCreateRefPubEventsResponse{
		Id: id,
	}, nil
}
