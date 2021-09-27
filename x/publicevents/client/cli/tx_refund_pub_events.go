package cli

import (
	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
)

func CmdCreateRefundPubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-refund-pub-events [pubId] [purpose]",
		Short: "Create a new refundPubEvents",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPubId, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsPurpose, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateRefundPubEvents(clientCtx.GetFromAddress().String(), argsPubId, argsPurpose)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
