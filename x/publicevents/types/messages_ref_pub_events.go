package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateRefPubEvents{}

func NewMsgCreateRefPubEvents(creator string, pubId uint64, refOneAddr []string, refOneAmount []string, refTwoAddr []string, refTwoAmount []string, refThreeAddr []string, refThreeAmount []string, companyAmount string) *MsgCreateRefPubEvents {
	return &MsgCreateRefPubEvents{
		Creator:        creator,
		PubId:          pubId,
		RefOneAddr:     refOneAddr,
		RefOneAmount:   refOneAmount,
		RefTwoAddr:     refTwoAddr,
		RefTwoAmount:   refTwoAmount,
		RefThreeAddr:   refThreeAddr,
		RefThreeAmount: refThreeAmount,
		PayToComp:      companyAmount,
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
