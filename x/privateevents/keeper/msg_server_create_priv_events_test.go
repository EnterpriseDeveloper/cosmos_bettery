package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/VoroshilovMax/bettery/x/privateevents/types"
)

func TestCreatePrivEventsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateCreatePrivEvents(ctx, &types.MsgCreateCreatePrivEvents{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestCreatePrivEventsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateCreatePrivEvents
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateCreatePrivEvents{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCreatePrivEvents{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateCreatePrivEvents{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateCreatePrivEvents(ctx, &types.MsgCreateCreatePrivEvents{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateCreatePrivEvents(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestCreatePrivEventsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteCreatePrivEvents
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteCreatePrivEvents{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteCreatePrivEvents{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteCreatePrivEvents{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateCreatePrivEvents(ctx, &types.MsgCreateCreatePrivEvents{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteCreatePrivEvents(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
