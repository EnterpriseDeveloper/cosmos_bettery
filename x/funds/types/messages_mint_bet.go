package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateMintBet{}

func NewMsgCreateMintBet(creator string, amount string, userId int64, reciever string) *MsgCreateMintBet {
	return &MsgCreateMintBet{
		Creator:  creator,
		Amount:   amount,
		UserId:   userId,
		Reciever: reciever,
	}
}

func (msg *MsgCreateMintBet) Route() string {
	return RouterKey
}

func (msg *MsgCreateMintBet) Type() string {
	return "CreateMintBet"
}

func (msg *MsgCreateMintBet) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateMintBet) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMintBet) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
