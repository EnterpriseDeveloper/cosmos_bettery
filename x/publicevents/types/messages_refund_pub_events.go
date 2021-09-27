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
