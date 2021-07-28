package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/VoroshilovMax/bettery/x/funds/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateMintBet() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-mint-bet [amount] [userId]",
		Short: "Create a new mintBet",
		Args:  cobra.ExactArgs(1),
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

			msg := types.NewMsgCreateMintBet(clientCtx.GetFromAddress().String(), argsAmount, argsUserId)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
