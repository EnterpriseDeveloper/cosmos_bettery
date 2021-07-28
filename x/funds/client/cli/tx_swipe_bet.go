package cli

import (
	"strconv"

	"github.com/spf13/cobra"

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
			argsAmount, err := strconv.ParseInt(args[0], 10, 64)
			if err != nil {
				return err
			}
			argsUserId, err := strconv.ParseInt(args[1], 10, 64)
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
