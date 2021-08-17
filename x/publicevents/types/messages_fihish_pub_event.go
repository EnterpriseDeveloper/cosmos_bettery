package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateFihishPubEvent{}

func NewMsgCreateFihishPubEvent(creator string, pubId uint64) *MsgCreateFihishPubEvent {
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
