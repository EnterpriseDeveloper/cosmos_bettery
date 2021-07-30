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

func CmdCreateValidPubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-valid-pub-events [pubId] [answers] [reput]",
		Short: "Create a new validPubEvents",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPubId, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			argsAnswers, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsReput, err := strconv.ParseInt(args[2], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateValidPubEvents(clientCtx.GetFromAddress().String(), argsPubId, argsAnswers, argsReput)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
