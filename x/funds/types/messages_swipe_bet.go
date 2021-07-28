package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateSwipeBet{}

func NewMsgCreateSwipeBet(creator string, amount string, userId string) *MsgCreateSwipeBet {
	return &MsgCreateSwipeBet{
		Creator: creator,
		Amount:  amount,
		UserId:  userId,
	}
}

func (msg *MsgCreateSwipeBet) Route() string {
	return RouterKey
}

func (msg *MsgCreateSwipeBet) Type() string {
	return "CreateSwipeBet"
}

func (msg *MsgCreateSwipeBet) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSwipeBet) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSwipeBet) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSwipeBet{}

func NewMsgUpdateSwipeBet(creator string, id uint64, amount string, userId string) *MsgUpdateSwipeBet {
	return &MsgUpdateSwipeBet{
		Id:      id,
		Creator: creator,
		Amount:  amount,
		UserId:  userId,
	}
}

func (msg *MsgUpdateSwipeBet) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSwipeBet) Type() string {
	return "UpdateSwipeBet"
}

func (msg *MsgUpdateSwipeBet) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSwipeBet) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSwipeBet) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSwipeBet{}

func NewMsgDeleteSwipeBet(creator string, id uint64) *MsgDeleteSwipeBet {
	return &MsgDeleteSwipeBet{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteSwipeBet) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSwipeBet) Type() string {
	return "DeleteSwipeBet"
}

func (msg *MsgDeleteSwipeBet) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSwipeBet) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSwipeBet) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
