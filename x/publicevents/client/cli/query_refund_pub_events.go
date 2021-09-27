package cli

import (
	"context"
	"strconv"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListRefundPubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-refund-pub-events",
		Short: "list all refundPubEvents",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllRefundPubEventsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.RefundPubEventsAll(context.Background(), params)
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

func CmdShowRefundPubEvents() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-refund-pub-events [id]",
		Short: "shows a refundPubEvents",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetRefundPubEventsRequest{
				Id: id,
			}

			res, err := queryClient.RefundPubEvents(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
