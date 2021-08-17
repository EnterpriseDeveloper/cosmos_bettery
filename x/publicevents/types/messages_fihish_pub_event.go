package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateFihishPubEvent{}

func NewMsgCreateFihishPubEvent(creator string, pubId string) *MsgCreateFihishPubEvent {
	return &MsgCreateFihishPubEvent{
		Creator: creator,
		PubId:   pubId,
	}
}

func (msg *MsgCreateFihishPubEvent) Route() string {
	return RouterKey
}

func (msg *MsgCreateFihishPubEvent) Type() string {
	return "CreateFihishPubEvent"
}

func (msg *MsgCreateFihishPubEvent) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateFihishPubEvent) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateFihishPubEvent) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateFihishPubEvent{}

func NewMsgUpdateFihishPubEvent(creator string, id uint64, pubId string) *MsgUpdateFihishPubEvent {
	return &MsgUpdateFihishPubEvent{
		Id:      id,
		Creator: creator,
		PubId:   pubId,
	}
}

func (msg *MsgUpdateFihishPubEvent) Route() string {
	return RouterKey
}

func (msg *MsgUpdateFihishPubEvent) Type() string {
	return "UpdateFihishPubEvent"
}

func (msg *MsgUpdateFihishPubEvent) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateFihishPubEvent) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateFihishPubEvent) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteFihishPubEvent{}

func NewMsgDeleteFihishPubEvent(creator string, id uint64) *MsgDeleteFihishPubEvent {
	return &MsgDeleteFihishPubEvent{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteFihishPubEvent) Route() string {
	return RouterKey
}

func (msg *MsgDeleteFihishPubEvent) Type() string {
	return "DeleteFihishPubEvent"
}

func (msg *MsgDeleteFihishPubEvent) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteFihishPubEvent) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteFihishPubEvent) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
