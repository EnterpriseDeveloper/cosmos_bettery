package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateFihishPubEvent{}, "publicevents/CreateFihishPubEvent", nil)
	cdc.RegisterConcrete(&MsgUpdateFihishPubEvent{}, "publicevents/UpdateFihishPubEvent", nil)
	cdc.RegisterConcrete(&MsgDeleteFihishPubEvent{}, "publicevents/DeleteFihishPubEvent", nil)

	cdc.RegisterConcrete(&MsgCreateValidPubEvents{}, "publicevents/CreateValidPubEvents", nil)

	cdc.RegisterConcrete(&MsgCreatePartPubEvents{}, "publicevents/CreatePartPubEvents", nil)

	cdc.RegisterConcrete(&MsgCreateCreatePubEvents{}, "publicevents/CreateCreatePubEvents", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateFihishPubEvent{},
		&MsgUpdateFihishPubEvent{},
		&MsgDeleteFihishPubEvent{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateValidPubEvents{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePartPubEvents{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCreatePubEvents{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
