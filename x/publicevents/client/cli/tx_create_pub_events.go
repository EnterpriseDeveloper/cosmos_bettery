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

func CmdCreateCreatePubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-create-pub-events [pubId] [question] [answers] [premAmount] [startTime] [endTime] [expertAmount] [advisor]",
		Short: "Create a new createPubEvents",
		Args:  cobra.MinimumNArgs(7),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPubId, err := strconv.ParseUint(args[0], 10, 64)

			if err != nil {
				return err
			}
			argsQuestion, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsAnswers := args[2:len(args)]

			argsPremAmount, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}
			argsStartTime, err := strconv.ParseInt(args[4], 10, 64)
			if err != nil {
				return err
			}
			argsEndTime, err := strconv.ParseInt(args[5], 10, 64)
			if err != nil {
				return err
			}
			argsExpertAmount, err := strconv.ParseInt(args[6], 10, 64)
			if err != nil {
				return err
			}

			advisor, err := cast.ToStringE(args[7])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCreatePubEvents(clientCtx.GetFromAddress().String(), argsPubId, argsQuestion, argsAnswers, argsPremAmount, argsStartTime, argsEndTime, argsExpertAmount, advisor)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
