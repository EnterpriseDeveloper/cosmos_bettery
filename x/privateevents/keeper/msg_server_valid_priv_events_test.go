package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
)

func TestValidPrivEventsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateValidPrivEvents(ctx, &types.MsgCreateValidPrivEvents{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestValidPrivEventsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateValidPrivEvents
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateValidPrivEvents{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateValidPrivEvents{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateValidPrivEvents{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateValidPrivEvents(ctx, &types.MsgCreateValidPrivEvents{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateValidPrivEvents(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestValidPrivEventsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteValidPrivEvents
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteValidPrivEvents{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteValidPrivEvents{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteValidPrivEvents{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateValidPrivEvents(ctx, &types.MsgCreateValidPrivEvents{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteValidPrivEvents(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
