package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
)

func TestPartPrivEventsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreatePartPrivEvents(ctx, &types.MsgCreatePartPrivEvents{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestPartPrivEventsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdatePartPrivEvents
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdatePartPrivEvents{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdatePartPrivEvents{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdatePartPrivEvents{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreatePartPrivEvents(ctx, &types.MsgCreatePartPrivEvents{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdatePartPrivEvents(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestPartPrivEventsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeletePartPrivEvents
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeletePartPrivEvents{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeletePartPrivEvents{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeletePartPrivEvents{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreatePartPrivEvents(ctx, &types.MsgCreatePartPrivEvents{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeletePartPrivEvents(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
