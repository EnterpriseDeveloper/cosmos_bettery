package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateValidPrivEvents{}

func NewMsgCreateValidPrivEvents(creator string, privId uint64, answer string) *MsgCreateValidPrivEvents {
	return &MsgCreateValidPrivEvents{
		Creator: creator,
		PrivId:  privId,
		Answer:  answer,
	}
}

func (msg *MsgCreateValidPrivEvents) Route() string {
	return RouterKey
}

func (msg *MsgCreateValidPrivEvents) Type() string {
	return "CreateValidPrivEvents"
}

func (msg *MsgCreateValidPrivEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateValidPrivEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateValidPrivEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
