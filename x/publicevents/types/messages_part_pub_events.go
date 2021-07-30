package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePartPubEvents{}

func NewMsgCreatePartPubEvents(creator string, pubId string, answers string, amount string) *MsgCreatePartPubEvents {
	return &MsgCreatePartPubEvents{
		Creator: creator,
		PubId:   pubId,
		Answers: answers,
		Amount:  amount,
	}
}

func (msg *MsgCreatePartPubEvents) Route() string {
	return RouterKey
}

func (msg *MsgCreatePartPubEvents) Type() string {
	return "CreatePartPubEvents"
}

func (msg *MsgCreatePartPubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePartPubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePartPubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePartPubEvents{}

func NewMsgUpdatePartPubEvents(creator string, id uint64, pubId string, answers string, amount string) *MsgUpdatePartPubEvents {
	return &MsgUpdatePartPubEvents{
		Id:      id,
		Creator: creator,
		PubId:   pubId,
		Answers: answers,
		Amount:  amount,
	}
}

func (msg *MsgUpdatePartPubEvents) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePartPubEvents) Type() string {
	return "UpdatePartPubEvents"
}

func (msg *MsgUpdatePartPubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePartPubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePartPubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeletePartPubEvents{}

func NewMsgDeletePartPubEvents(creator string, id uint64) *MsgDeletePartPubEvents {
	return &MsgDeletePartPubEvents{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePartPubEvents) Route() string {
	return RouterKey
}

func (msg *MsgDeletePartPubEvents) Type() string {
	return "DeletePartPubEvents"
}

func (msg *MsgDeletePartPubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePartPubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePartPubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
