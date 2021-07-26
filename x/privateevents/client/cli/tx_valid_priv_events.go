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

func CmdCreateValidPrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-valid-priv-events [privId] [answer]",
		Short: "Create a new validPrivEvents",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPrivId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			argsAnswer, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateValidPrivEvents(clientCtx.GetFromAddress().String(), argsPrivId, argsAnswer)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateValidPrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-valid-priv-events [privId] [answer]",
		Short: "Update a validPrivEvents",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {

			argsPrivId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsAnswer, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateValidPrivEvents(clientCtx.GetFromAddress().String(), argsPrivId, argsAnswer)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteValidPrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-valid-priv-events [privId]",
		Short: "Delete a validPrivEvents by id",
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

			msg := types.NewMsgDeleteValidPrivEvents(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
