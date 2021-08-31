// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateRefPubEvents } from "./types/publicevents/tx";
import { MsgCreateValidPubEvents } from "./types/publicevents/tx";
import { MsgCreateFihishPubEvent } from "./types/publicevents/tx";
import { MsgCreatePartPubEvents } from "./types/publicevents/tx";
import { MsgUpdateRefPubEvents } from "./types/publicevents/tx";
import { MsgDeleteRefPubEvents } from "./types/publicevents/tx";
import { MsgCreateCreatePubEvents } from "./types/publicevents/tx";
const types = [
    ["/VoroshilovMax.bettery.publicevents.MsgCreateRefPubEvents", MsgCreateRefPubEvents],
    ["/VoroshilovMax.bettery.publicevents.MsgCreateValidPubEvents", MsgCreateValidPubEvents],
    ["/VoroshilovMax.bettery.publicevents.MsgCreateFihishPubEvent", MsgCreateFihishPubEvent],
    ["/VoroshilovMax.bettery.publicevents.MsgCreatePartPubEvents", MsgCreatePartPubEvents],
    ["/VoroshilovMax.bettery.publicevents.MsgUpdateRefPubEvents", MsgUpdateRefPubEvents],
    ["/VoroshilovMax.bettery.publicevents.MsgDeleteRefPubEvents", MsgDeleteRefPubEvents],
    ["/VoroshilovMax.bettery.publicevents.MsgCreateCreatePubEvents", MsgCreateCreatePubEvents],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgCreateRefPubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgCreateRefPubEvents", value: data }),
        msgCreateValidPubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgCreateValidPubEvents", value: data }),
        msgCreateFihishPubEvent: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgCreateFihishPubEvent", value: data }),
        msgCreatePartPubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgCreatePartPubEvents", value: data }),
        msgUpdateRefPubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgUpdateRefPubEvents", value: data }),
        msgDeleteRefPubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgDeleteRefPubEvents", value: data }),
        msgCreateCreatePubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgCreateCreatePubEvents", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
