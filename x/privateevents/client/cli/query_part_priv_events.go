package cli

import (
	"context"
	"strconv"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListPartPrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-part-priv-events",
		Short: "list all partPrivEvents",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPartPrivEventsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.PartPrivEventsAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowPartPrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-part-priv-events [id]",
		Short: "shows a partPrivEvents",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetPartPrivEventsRequest{
				Id: id,
			}

			res, err := queryClient.PartPrivEvents(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
