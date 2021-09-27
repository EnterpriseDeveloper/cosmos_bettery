package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateRefundPubEvents{}

func NewMsgCreateRefundPubEvents(creator string, pubId string, purpose string) *MsgCreateRefundPubEvents {
	return &MsgCreateRefundPubEvents{
		Creator: creator,
		PubId:   pubId,
		Purpose: purpose,
	}
}

func (msg *MsgCreateRefundPubEvents) Route() string {
	return RouterKey
}

func (msg *MsgCreateRefundPubEvents) Type() string {
	return "CreateRefundPubEvents"
}

func (msg *MsgCreateRefundPubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateRefundPubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateRefundPubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRefundPubEvents{}

func NewMsgUpdateRefundPubEvents(creator string, id uint64, pubId string, purpose string) *MsgUpdateRefundPubEvents {
	return &MsgUpdateRefundPubEvents{
		Id:      id,
		Creator: creator,
		PubId:   pubId,
		Purpose: purpose,
	}
}

func (msg *MsgUpdateRefundPubEvents) Route() string {
	return RouterKey
}

func (msg *MsgUpdateRefundPubEvents) Type() string {
	return "UpdateRefundPubEvents"
}

func (msg *MsgUpdateRefundPubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateRefundPubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateRefundPubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteRefundPubEvents{}

func NewMsgDeleteRefundPubEvents(creator string, id uint64) *MsgDeleteRefundPubEvents {
	return &MsgDeleteRefundPubEvents{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteRefundPubEvents) Route() string {
	return RouterKey
}

func (msg *MsgDeleteRefundPubEvents) Type() string {
	return "DeleteRefundPubEvents"
}

func (msg *MsgDeleteRefundPubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteRefundPubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteRefundPubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
