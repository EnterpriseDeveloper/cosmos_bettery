package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateValidPrivEvents{}, "privateevents/CreateValidPrivEvents", nil)

	cdc.RegisterConcrete(&MsgCreatePartPrivEvents{}, "privateevents/CreatePartPrivEvents", nil)

	cdc.RegisterConcrete(&MsgCreateCreatePrivEvents{}, "privateevents/CreateCreatePrivEvents", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateValidPrivEvents{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePartPrivEvents{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCreatePrivEvents{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
