package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateValidPubEvents{}, "publicevents/CreateValidPubEvents", nil)
	cdc.RegisterConcrete(&MsgUpdateValidPubEvents{}, "publicevents/UpdateValidPubEvents", nil)
	cdc.RegisterConcrete(&MsgDeleteValidPubEvents{}, "publicevents/DeleteValidPubEvents", nil)

	cdc.RegisterConcrete(&MsgCreatePartPubEvents{}, "publicevents/CreatePartPubEvents", nil)
	cdc.RegisterConcrete(&MsgUpdatePartPubEvents{}, "publicevents/UpdatePartPubEvents", nil)
	cdc.RegisterConcrete(&MsgDeletePartPubEvents{}, "publicevents/DeletePartPubEvents", nil)

	cdc.RegisterConcrete(&MsgCreateCreatePubEvents{}, "publicevents/CreateCreatePubEvents", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateValidPubEvents{},
		&MsgUpdateValidPubEvents{},
		&MsgDeleteValidPubEvents{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePartPubEvents{},
		&MsgUpdatePartPubEvents{},
		&MsgDeletePartPubEvents{},
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
