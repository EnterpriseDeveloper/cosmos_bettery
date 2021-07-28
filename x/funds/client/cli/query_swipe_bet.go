package cli

import (
	"context"
	"strconv"

	"github.com/VoroshilovMax/bettery/x/funds/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListSwipeBet() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-swipe-bet",
		Short: "list all swipeBet",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllSwipeBetRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.SwipeBetAll(context.Background(), params)
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

func CmdShowSwipeBet() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-swipe-bet [id]",
		Short: "shows a swipeBet",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetSwipeBetRequest{
				Id: id,
			}

			res, err := queryClient.SwipeBet(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
