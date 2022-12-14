package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group privateevents queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1

	cmd.AddCommand(CmdListValidPrivEvents())
	cmd.AddCommand(CmdShowValidPrivEvents())

	cmd.AddCommand(CmdListPartPrivEvents())
	cmd.AddCommand(CmdShowPartPrivEvents())

	cmd.AddCommand(CmdListCreatePrivEvents())
	cmd.AddCommand(CmdShowCreatePrivEvents())

	return cmd
}
