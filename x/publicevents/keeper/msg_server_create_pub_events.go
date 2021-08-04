package keeper

import (
	"context"
	//	"fmt"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	//	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateCreatePubEvents(goCtx context.Context, msg *types.MsgCreateCreatePubEvents) (*types.MsgCreateCreatePubEventsResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var createPubEvents = types.CreatePubEvents{
		Creator:      msg.Creator,
		PubId:        msg.PubId,
		Question:     msg.Question,
		Answers:      msg.Answers,
		PremAmount:   msg.PremAmount,
		StartTime:    msg.StartTime,
		EndTime:      msg.EndTime,
		ExpertAmount: msg.ExpertAmount,
		Advisor:      msg.Advisor,
	}

	id := k.AppendCreatePubEvents(
		ctx,
		createPubEvents,
	)

	return &types.MsgCreateCreatePubEventsResponse{
		Id: id,
	}, nil
}
