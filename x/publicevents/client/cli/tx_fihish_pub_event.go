package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateFihishPubEvent() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-fihish-pub-event [pubId]",
		Short: "Create a new fihishPubEvent",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPubId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateFihishPubEvent(clientCtx.GetFromAddress().String(), argsPubId)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
