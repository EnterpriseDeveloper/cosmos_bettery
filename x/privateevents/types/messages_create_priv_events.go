package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCreatePrivEvents{}

func NewMsgCreateCreatePrivEvents(creator string, privId uint64, question string, answers []string, winner string, loser string, startTime uint64, endTime uint64) *MsgCreateCreatePrivEvents {
	return &MsgCreateCreatePrivEvents{
		Creator:   creator,
		PrivId:    privId,
		Question:  question,
		Answers:   answers,
		Winner:    winner,
		Loser:     loser,
		StartTime: startTime,
		EndTime:   endTime,
	}
}

func (msg *MsgCreateCreatePrivEvents) Route() string {
	return RouterKey
}

func (msg *MsgCreateCreatePrivEvents) Type() string {
	return "CreateCreatePrivEvents"
}

func (msg *MsgCreateCreatePrivEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCreatePrivEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCreatePrivEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
