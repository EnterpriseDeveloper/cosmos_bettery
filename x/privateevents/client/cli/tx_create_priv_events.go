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
		Use:   "create-create-priv-events [privId] [question] [answers] [winner] [loser] [startTime] [endTime]",
		Short: "Create a new createPrivEvents",
		Args:  cobra.MinimumNArgs(7),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPrivId, err := strconv.ParseUint(args[0], 10, 64)
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

			argsStartTime, err := strconv.ParseUint(args[5], 10, 64)
			if err != nil {
				return err
			}

			argsEndTime, err := strconv.ParseUint(args[6], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateCreatePrivEvents(clientCtx.GetFromAddress().String(), argsPrivId, argsQuestion, argsAnswers, argsWinner, argsLoser, argsStartTime, argsEndTime)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
