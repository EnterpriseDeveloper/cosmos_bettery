package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/VoroshilovMax/bettery/x/funds/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateSwipeBet() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-swipe-bet [amount] [userId]",
		Short: "Create a new swipeBet",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsAmount, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsUserId, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSwipeBet(clientCtx.GetFromAddress().String(), argsAmount, argsUserId)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSwipeBet() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-swipe-bet [id] [amount] [userId]",
		Short: "Update a swipeBet",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsAmount, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsUserId, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSwipeBet(clientCtx.GetFromAddress().String(), id, argsAmount, argsUserId)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSwipeBet() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-swipe-bet [id]",
		Short: "Delete a swipeBet by id",
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

			msg := types.NewMsgDeleteSwipeBet(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
