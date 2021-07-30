package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
)

func TestValidPubEventsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateValidPubEvents(ctx, &types.MsgCreateValidPubEvents{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestValidPubEventsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateValidPubEvents
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateValidPubEvents{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateValidPubEvents{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateValidPubEvents{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateValidPubEvents(ctx, &types.MsgCreateValidPubEvents{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateValidPubEvents(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestValidPubEventsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteValidPubEvents
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteValidPubEvents{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteValidPubEvents{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteValidPubEvents{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateValidPubEvents(ctx, &types.MsgCreateValidPubEvents{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteValidPubEvents(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
