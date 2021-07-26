package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateValidPrivEvents{}

func NewMsgCreateValidPrivEvents(creator string, privId string, answer string) *MsgCreateValidPrivEvents {
	return &MsgCreateValidPrivEvents{
		Creator: creator,
		PrivId:  privId,
		Answer:  answer,
	}
}

func (msg *MsgCreateValidPrivEvents) Route() string {
	return RouterKey
}

func (msg *MsgCreateValidPrivEvents) Type() string {
	return "CreateValidPrivEvents"
}

func (msg *MsgCreateValidPrivEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateValidPrivEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateValidPrivEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateValidPrivEvents{}

func NewMsgUpdateValidPrivEvents(creator string, id uint64, privId string, answer string) *MsgUpdateValidPrivEvents {
	return &MsgUpdateValidPrivEvents{
		Id:      id,
		Creator: creator,
		PrivId:  privId,
		Answer:  answer,
	}
}

func (msg *MsgUpdateValidPrivEvents) Route() string {
	return RouterKey
}

func (msg *MsgUpdateValidPrivEvents) Type() string {
	return "UpdateValidPrivEvents"
}

func (msg *MsgUpdateValidPrivEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateValidPrivEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateValidPrivEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteValidPrivEvents{}

func NewMsgDeleteValidPrivEvents(creator string, id uint64) *MsgDeleteValidPrivEvents {
	return &MsgDeleteValidPrivEvents{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteValidPrivEvents) Route() string {
	return RouterKey
}

func (msg *MsgDeleteValidPrivEvents) Type() string {
	return "DeleteValidPrivEvents"
}

func (msg *MsgDeleteValidPrivEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteValidPrivEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteValidPrivEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
