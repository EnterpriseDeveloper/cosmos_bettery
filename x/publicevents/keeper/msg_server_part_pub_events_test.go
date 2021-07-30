package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/VoroshilovMax/bettery/x/publicevents/types"
)

func TestPartPubEventsMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreatePartPubEvents(ctx, &types.MsgCreatePartPubEvents{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestPartPubEventsMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdatePartPubEvents
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdatePartPubEvents{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdatePartPubEvents{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdatePartPubEvents{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreatePartPubEvents(ctx, &types.MsgCreatePartPubEvents{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdatePartPubEvents(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestPartPubEventsMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeletePartPubEvents
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeletePartPubEvents{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeletePartPubEvents{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeletePartPubEvents{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreatePartPubEvents(ctx, &types.MsgCreatePartPubEvents{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeletePartPubEvents(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
