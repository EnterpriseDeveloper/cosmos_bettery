package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateRefPubEvents{}

func NewMsgCreateRefPubEvents(creator string, pubId string, refOne string, refTwo string, refThree string) *MsgCreateRefPubEvents {
	return &MsgCreateRefPubEvents{
		Creator:  creator,
		PubId:    pubId,
		RefOne:   refOne,
		RefTwo:   refTwo,
		RefThree: refThree,
	}
}

func (msg *MsgCreateRefPubEvents) Route() string {
	return RouterKey
}

func (msg *MsgCreateRefPubEvents) Type() string {
	return "CreateRefPubEvents"
}

func (msg *MsgCreateRefPubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateRefPubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateRefPubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateRefPubEvents{}

func NewMsgUpdateRefPubEvents(creator string, id uint64, pubId string, refOne string, refTwo string, refThree string) *MsgUpdateRefPubEvents {
	return &MsgUpdateRefPubEvents{
		Id:       id,
		Creator:  creator,
		PubId:    pubId,
		RefOne:   refOne,
		RefTwo:   refTwo,
		RefThree: refThree,
	}
}

func (msg *MsgUpdateRefPubEvents) Route() string {
	return RouterKey
}

func (msg *MsgUpdateRefPubEvents) Type() string {
	return "UpdateRefPubEvents"
}

func (msg *MsgUpdateRefPubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateRefPubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateRefPubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteRefPubEvents{}

func NewMsgDeleteRefPubEvents(creator string, id uint64) *MsgDeleteRefPubEvents {
	return &MsgDeleteRefPubEvents{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteRefPubEvents) Route() string {
	return RouterKey
}

func (msg *MsgDeleteRefPubEvents) Type() string {
	return "DeleteRefPubEvents"
}

func (msg *MsgDeleteRefPubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteRefPubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteRefPubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
