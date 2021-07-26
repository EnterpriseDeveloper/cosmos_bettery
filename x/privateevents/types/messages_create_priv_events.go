package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateCreatePrivEvents{}

func NewMsgCreateCreatePrivEvents(creator string, privId string, question string, answers string, winner string, loser string) *MsgCreateCreatePrivEvents {
	return &MsgCreateCreatePrivEvents{
		Creator:  creator,
		PrivId:   privId,
		Question: question,
		Answers:  answers,
		Winner:   winner,
		Loser:    loser,
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

var _ sdk.Msg = &MsgUpdateCreatePrivEvents{}

func NewMsgUpdateCreatePrivEvents(creator string, id uint64, privId string, question string, answers string, winner string, loser string) *MsgUpdateCreatePrivEvents {
	return &MsgUpdateCreatePrivEvents{
		Id:       id,
		Creator:  creator,
		PrivId:   privId,
		Question: question,
		Answers:  answers,
		Winner:   winner,
		Loser:    loser,
	}
}

func (msg *MsgUpdateCreatePrivEvents) Route() string {
	return RouterKey
}

func (msg *MsgUpdateCreatePrivEvents) Type() string {
	return "UpdateCreatePrivEvents"
}

func (msg *MsgUpdateCreatePrivEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateCreatePrivEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateCreatePrivEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteCreatePrivEvents{}

func NewMsgDeleteCreatePrivEvents(creator string, id uint64) *MsgDeleteCreatePrivEvents {
	return &MsgDeleteCreatePrivEvents{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteCreatePrivEvents) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCreatePrivEvents) Type() string {
	return "DeleteCreatePrivEvents"
}

func (msg *MsgDeleteCreatePrivEvents) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCreatePrivEvents) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCreatePrivEvents) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
