package keeper

import (
	"context"
	//	"fmt"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	//	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreatePartPubEvents(goCtx context.Context, msg *types.MsgCreatePartPubEvents) (*types.MsgCreatePartPubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var partPubEvents = types.PartPubEvents{
		Creator: msg.Creator,
		PubId:   msg.PubId,
		Answers: msg.Answers,
		Amount:  msg.Amount,
	}

	id := k.AppendPartPubEvents(
		ctx,
		partPubEvents,
	)

	return &types.MsgCreatePartPubEventsResponse{
		Id: id,
	}, nil
}
