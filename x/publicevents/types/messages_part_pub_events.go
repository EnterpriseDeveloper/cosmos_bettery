package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePartPubEvents{}

func NewMsgCreatePartPubEvents(creator string, pubId uint64, answers string, amount int64) *MsgCreatePartPubEvents {
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
