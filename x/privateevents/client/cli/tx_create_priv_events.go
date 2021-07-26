package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateCreatePrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-create-priv-events [privId] [question] [answers] [winner] [loser]",
		Short: "Create a new createPrivEvents",
		Args:  cobra.MinimumNArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPrivId, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsQuestion, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsAnswers := args[2:len(args)]

			argsWinner, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}
			argsLoser, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCreatePrivEvents(clientCtx.GetFromAddress().String(), argsPrivId, argsQuestion, argsAnswers, argsWinner, argsLoser)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateCreatePrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-create-priv-events [id] [privId] [question] [answers] [winner] [loser]",
		Short: "Update a createPrivEvents",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsPrivId, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsQuestion, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			argsAnswers := args[3:len(args)]

			argsWinner, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}

			argsLoser, err := cast.ToStringE(args[5])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateCreatePrivEvents(clientCtx.GetFromAddress().String(), id, argsPrivId, argsQuestion, argsAnswers, argsWinner, argsLoser)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteCreatePrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-create-priv-events [id]",
		Short: "Delete a createPrivEvents by id",
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

			msg := types.NewMsgDeleteCreatePrivEvents(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
