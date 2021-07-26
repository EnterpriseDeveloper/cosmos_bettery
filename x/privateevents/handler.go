package privateevents

import (
	"fmt"

	"github.com/VoroshilovMax/bettery/x/privateevents/keeper"
	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// NewHandler ...
func NewHandler(k keeper.Keeper) sdk.Handler {
	msgServer := keeper.NewMsgServerImpl(k)

	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		ctx = ctx.WithEventManager(sdk.NewEventManager())

		switch msg := msg.(type) {
		// this line is used by starport scaffolding # 1
		case *types.MsgCreateValidPrivEvents:
			res, err := msgServer.CreateValidPrivEvents(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateValidPrivEvents:
			res, err := msgServer.UpdateValidPrivEvents(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteValidPrivEvents:
			res, err := msgServer.DeleteValidPrivEvents(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreatePartPrivEvents:
			res, err := msgServer.CreatePartPrivEvents(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdatePartPrivEvents:
			res, err := msgServer.UpdatePartPrivEvents(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeletePartPrivEvents:
			res, err := msgServer.DeletePartPrivEvents(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgCreateCreatePrivEvents:
			res, err := msgServer.CreateCreatePrivEvents(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgUpdateCreatePrivEvents:
			res, err := msgServer.UpdateCreatePrivEvents(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		case *types.MsgDeleteCreatePrivEvents:
			res, err := msgServer.DeleteCreatePrivEvents(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)

		default:
			errMsg := fmt.Sprintf("unrecognized %s message type: %T", types.ModuleName, msg)
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, errMsg)
		}
	}
}
