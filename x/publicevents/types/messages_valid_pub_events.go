package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateValidPubEvents{}

func NewMsgCreateValidPubEvents(creator string, pubId uint64, answers string, reput int64) *MsgCreateValidPubEvents {
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
