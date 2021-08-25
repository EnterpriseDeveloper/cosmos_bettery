import { txClient, queryClient, MissingWalletError } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { CreatePubEvents } from "./module/types/publicevents/create_pub_events";
import { FihishPubEvent } from "./module/types/publicevents/fihish_pub_event";
import { PartPubEvents } from "./module/types/publicevents/part_pub_events";
import { allPartPubEvent } from "./module/types/publicevents/part_pub_events";
import { ValidPubEvents } from "./module/types/publicevents/valid_pub_events";
import { allValidPubEvent } from "./module/types/publicevents/valid_pub_events";
export { CreatePubEvents, FihishPubEvent, PartPubEvents, allPartPubEvent, ValidPubEvents, allValidPubEvent };
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
        FihishPubEvent: {},
        FihishPubEventAll: {},
        ValidPubEvents: {},
        ValidPubEventsAll: {},
        PartPubEvents: {},
        PartPubEventsAll: {},
        CreatePubEvents: {},
        CreatePubEventsAll: {},
        _Structure: {
            CreatePubEvents: getStructure(CreatePubEvents.fromPartial({})),
            FihishPubEvent: getStructure(FihishPubEvent.fromPartial({})),
            PartPubEvents: getStructure(PartPubEvents.fromPartial({})),
            allPartPubEvent: getStructure(allPartPubEvent.fromPartial({})),
            ValidPubEvents: getStructure(ValidPubEvents.fromPartial({})),
            allValidPubEvent: getStructure(allValidPubEvent.fromPartial({})),
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
        getFihishPubEvent: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.FihishPubEvent[JSON.stringify(params)] ?? {};
        },
        getFihishPubEventAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.FihishPubEventAll[JSON.stringify(params)] ?? {};
        },
        getValidPubEvents: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ValidPubEvents[JSON.stringify(params)] ?? {};
        },
        getValidPubEventsAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ValidPubEventsAll[JSON.stringify(params)] ?? {};
        },
        getPartPubEvents: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.PartPubEvents[JSON.stringify(params)] ?? {};
        },
        getPartPubEventsAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.PartPubEventsAll[JSON.stringify(params)] ?? {};
        },
        getCreatePubEvents: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.CreatePubEvents[JSON.stringify(params)] ?? {};
        },
        getCreatePubEventsAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.CreatePubEventsAll[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: VoroshilovMax.bettery.publicevents initialized!');
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
        async QueryFihishPubEvent({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryFihishPubEvent(key.id)).data;
                commit('QUERY', { query: 'FihishPubEvent', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryFihishPubEvent', payload: { options: { all }, params: { ...key }, query } });
                return getters['getFihishPubEvent']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryFihishPubEvent', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryFihishPubEventAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryFihishPubEventAll(query)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await queryClient.queryFihishPubEventAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'FihishPubEventAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryFihishPubEventAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getFihishPubEventAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryFihishPubEventAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryValidPubEvents({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryValidPubEvents(key.id)).data;
                commit('QUERY', { query: 'ValidPubEvents', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryValidPubEvents', payload: { options: { all }, params: { ...key }, query } });
                return getters['getValidPubEvents']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryValidPubEvents', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryValidPubEventsAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryValidPubEventsAll(query)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await queryClient.queryValidPubEventsAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'ValidPubEventsAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryValidPubEventsAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getValidPubEventsAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryValidPubEventsAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryPartPubEvents({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryPartPubEvents(key.id)).data;
                commit('QUERY', { query: 'PartPubEvents', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryPartPubEvents', payload: { options: { all }, params: { ...key }, query } });
                return getters['getPartPubEvents']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryPartPubEvents', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryPartPubEventsAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryPartPubEventsAll(query)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await queryClient.queryPartPubEventsAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'PartPubEventsAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryPartPubEventsAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getPartPubEventsAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryPartPubEventsAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryCreatePubEvents({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryCreatePubEvents(key.id)).data;
                commit('QUERY', { query: 'CreatePubEvents', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryCreatePubEvents', payload: { options: { all }, params: { ...key }, query } });
                return getters['getCreatePubEvents']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryCreatePubEvents', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryCreatePubEventsAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params: { ...key }, query = null }) {
            try {
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryCreatePubEventsAll(query)).data;
                while (all && value.pagination && value.pagination.nextKey != null) {
                    let next_values = (await queryClient.queryCreatePubEventsAll({ ...query, 'pagination.key': value.pagination.nextKey })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'CreatePubEventsAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryCreatePubEventsAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getCreatePubEventsAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryCreatePubEventsAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgCreateValidPubEvents({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateValidPubEvents(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateValidPubEvents:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateValidPubEvents:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateFihishPubEvent({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateFihishPubEvent(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateFihishPubEvent:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateFihishPubEvent:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreatePartPubEvents({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreatePartPubEvents(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreatePartPubEvents:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreatePartPubEvents:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateCreatePubEvents({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateCreatePubEvents(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateCreatePubEvents:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateCreatePubEvents:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgCreateValidPubEvents({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateValidPubEvents(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateValidPubEvents:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateValidPubEvents:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateFihishPubEvent({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateFihishPubEvent(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateFihishPubEvent:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateFihishPubEvent:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreatePartPubEvents({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreatePartPubEvents(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreatePartPubEvents:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreatePartPubEvents:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateCreatePubEvents({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateCreatePubEvents(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateCreatePubEvents:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateCreatePubEvents:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
