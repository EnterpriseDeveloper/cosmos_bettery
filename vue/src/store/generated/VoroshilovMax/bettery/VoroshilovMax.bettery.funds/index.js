import { txClient, queryClient, MissingWalletError } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { MintBet } from "./module/types/funds/mint_bet";
import { SwipeBet } from "./module/types/funds/swipe_bet";
export { MintBet, SwipeBet };
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function mergeResults(value, next_values) {
    for (let prop of Object.keys(next_values)) {
        if (Array.isArray(next_values[prop])) {
            value[prop] = [...value[prop], ...next_values[prop]];
        }
        else {
            value[prop] = next_values[prop];
        }
    }
    return value;
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        SwipeBet: {},
        SwipeBetAll: {},
        MintBet: {},
        MintBetAll: {},
        _Structure: {
            MintBet: getStructure(MintBet.fromPartial({})),
            SwipeBet: getStructure(SwipeBet.fromPartial({})),
        },
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(subscription);
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(subscription);
        }
    },
    getters: {
        getSwipeBet: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.SwipeBet[JSON.stringify(params)] ?? {};
        },
        getSwipeBetAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.SwipeBetAll[JSON.stringify(params)] ?? {};
        },
        getMintBet: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.MintBet[JSON.stringify(params)] ?? {};
        },
        getMintBetAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.MintBetAll[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: VoroshilovMax.bettery.funds initialized!');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach(async (subscription) => {
                try {
                    await dispatch(subscription.action, subscription.payload);
                }
                catch (e) {
                    throw new SpVuexError('Subscriptions: ' + e.message);
                }
            });
        },
        async QuerySwipeBet({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.querySwipeBet(key.id)).data;
                commit('QUERY', { query: 'SwipeBet', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QuerySwipeBet', payload: { options: { all }, params: { ...key }, query } });
                return getters['getSwipeBet']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QuerySwipeBet', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QuerySwipeBetAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.querySwipeBetAll(query)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await queryClient.querySwipeBetAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'SwipeBetAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QuerySwipeBetAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getSwipeBetAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QuerySwipeBetAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryMintBet({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryMintBet(key.id)).data;
                commit('QUERY', { query: 'MintBet', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryMintBet', payload: { options: { all }, params: { ...key }, query } });
                return getters['getMintBet']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryMintBet', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryMintBetAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryMintBetAll(query)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await queryClient.queryMintBetAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'MintBetAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryMintBetAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getMintBetAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryMintBetAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgCreateSwipeBet({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateSwipeBet(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateSwipeBet:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateSwipeBet:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeleteSwipeBet({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteSwipeBet(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteSwipeBet:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteSwipeBet:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateMintBet({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateMintBet(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateMintBet:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateMintBet:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUpdateSwipeBet({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateSwipeBet(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateSwipeBet:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateSwipeBet:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgCreateSwipeBet({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateSwipeBet(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateSwipeBet:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateSwipeBet:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeleteSwipeBet({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteSwipeBet(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteSwipeBet:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteSwipeBet:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateMintBet({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateMintBet(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateMintBet:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateMintBet:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUpdateSwipeBet({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateSwipeBet(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateSwipeBet:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateSwipeBet:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
