package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePartPrivEvents{}

func NewMsgCreatePartPrivEvents(creator string, privId uint64, answer string) *MsgCreatePartPrivEvents {
	return &MsgCreatePartPrivEvents{
		Creator: creator,
		PrivId:  privId,
		Answer:  answer,
	}
}

func (msg *MsgCreatePartPrivEvents) Route() string {
	return RouterKey
}

func (msg *MsgCreatePartPrivEvents) Type() string {
	return "CreatePartPrivEvents"
}

func (msg *MsgCreatePartPrivEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePartPrivEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePartPrivEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePartPrivEvents{}

func NewMsgUpdatePartPrivEvents(creator string, privId uint64, answer string) *MsgUpdatePartPrivEvents {
	return &MsgUpdatePartPrivEvents{
		Creator: creator,
		PrivId:  privId,
		Answer:  answer,
	}
}

func (msg *MsgUpdatePartPrivEvents) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePartPrivEvents) Type() string {
	return "UpdatePartPrivEvents"
}

func (msg *MsgUpdatePartPrivEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePartPrivEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePartPrivEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePartPrivEvents{}

func NewMsgDeletePartPrivEvents(creator string, id uint64) *MsgDeletePartPrivEvents {
	return &MsgDeletePartPrivEvents{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePartPrivEvents) Route() string {
	return RouterKey
}

func (msg *MsgDeletePartPrivEvents) Type() string {
	return "DeletePartPrivEvents"
}

func (msg *MsgDeletePartPrivEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePartPrivEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePartPrivEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
