package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateSwipeBet{}

func NewMsgCreateSwipeBet(creator string, amount string, userId int64) *MsgCreateSwipeBet {
	return &MsgCreateSwipeBet{
		Creator: creator,
		Amount:  amount,
		UserId:  userId,
	}
}

func (msg *MsgCreateSwipeBet) Route() string {
	return RouterKey
}

func (msg *MsgCreateSwipeBet) Type() string {
	return "CreateSwipeBet"
}

func (msg *MsgCreateSwipeBet) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSwipeBet) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSwipeBet) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
