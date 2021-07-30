package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateValidPubEvents{}

func NewMsgCreateValidPubEvents(creator string, pubId string, answers string, reput string) *MsgCreateValidPubEvents {
	return &MsgCreateValidPubEvents{
		Creator: creator,
		PubId:   pubId,
		Answers: answers,
		Reput:   reput,
	}
}

func (msg *MsgCreateValidPubEvents) Route() string {
	return RouterKey
}

func (msg *MsgCreateValidPubEvents) Type() string {
	return "CreateValidPubEvents"
}

func (msg *MsgCreateValidPubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateValidPubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateValidPubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateValidPubEvents{}

func NewMsgUpdateValidPubEvents(creator string, id uint64, pubId string, answers string, reput string) *MsgUpdateValidPubEvents {
	return &MsgUpdateValidPubEvents{
		Id:      id,
		Creator: creator,
		PubId:   pubId,
		Answers: answers,
		Reput:   reput,
	}
}

func (msg *MsgUpdateValidPubEvents) Route() string {
	return RouterKey
}

func (msg *MsgUpdateValidPubEvents) Type() string {
	return "UpdateValidPubEvents"
}

func (msg *MsgUpdateValidPubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateValidPubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateValidPubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteValidPubEvents{}

func NewMsgDeleteValidPubEvents(creator string, id uint64) *MsgDeleteValidPubEvents {
	return &MsgDeleteValidPubEvents{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteValidPubEvents) Route() string {
	return RouterKey
}

func (msg *MsgDeleteValidPubEvents) Type() string {
	return "DeleteValidPubEvents"
}

func (msg *MsgDeleteValidPubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteValidPubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteValidPubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
