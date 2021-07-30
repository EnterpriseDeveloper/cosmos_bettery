package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreatePartPubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-part-pub-events [pubId] [answers] [amount]",
		Short: "Create a new partPubEvents",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPubId, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsAnswers, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsAmount, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreatePartPubEvents(clientCtx.GetFromAddress().String(), argsPubId, argsAnswers, argsAmount)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdatePartPubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-part-pub-events [id] [pubId] [answers] [amount]",
		Short: "Update a partPubEvents",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsPubId, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsAnswers, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			argsAmount, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdatePartPubEvents(clientCtx.GetFromAddress().String(), id, argsPubId, argsAnswers, argsAmount)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeletePartPubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-part-pub-events [id]",
		Short: "Delete a partPubEvents by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeletePartPubEvents(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
