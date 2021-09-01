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

func CmdCreateRefPubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-ref-pub-events [pubId] [refOne] [refTwo] [refThree]",
		Short: "Create a new refPubEvents",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPubId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			argsRefOne, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsRefTwo, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsRefThree, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateRefPubEvents(clientCtx.GetFromAddress().String(), argsPubId, argsRefOne, argsRefTwo, argsRefThree)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
