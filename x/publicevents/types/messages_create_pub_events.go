package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCreatePubEvents{}

func NewMsgCreateCreatePubEvents(creator string, pubId uint64, question string, answers []string, premAmount int64, startTime int64, endTime int64, expertAmount int64) *MsgCreateCreatePubEvents {
	return &MsgCreateCreatePubEvents{
		Creator:      creator,
		PubId:        pubId,
		Question:     question,
		Answers:      answers,
		PremAmount:   premAmount,
		StartTime:    startTime,
		EndTime:      endTime,
		ExpertAmount: expertAmount,
	}
}

func (msg *MsgCreateCreatePubEvents) Route() string {
	return RouterKey
}

func (msg *MsgCreateCreatePubEvents) Type() string {
	return "CreateCreatePubEvents"
}

func (msg *MsgCreateCreatePubEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateCreatePubEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateCreatePubEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
