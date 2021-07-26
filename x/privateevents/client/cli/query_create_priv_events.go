package cli

import (
	"context"
	"strconv"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListCreatePrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-create-priv-events",
		Short: "list all createPrivEvents",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllCreatePrivEventsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.CreatePrivEventsAll(context.Background(), params)
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

func CmdShowCreatePrivEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-create-priv-events [id]",
		Short: "shows a createPrivEvents",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetCreatePrivEventsRequest{
				Id: id,
			}

			res, err := queryClient.CreatePrivEvents(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
