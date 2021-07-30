// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePartPubEvents } from "./types/publicevents/tx";
import { MsgDeleteValidPubEvents } from "./types/publicevents/tx";
import { MsgCreateValidPubEvents } from "./types/publicevents/tx";
import { MsgCreateCreatePubEvents } from "./types/publicevents/tx";
import { MsgUpdatePartPubEvents } from "./types/publicevents/tx";
import { MsgUpdateValidPubEvents } from "./types/publicevents/tx";
import { MsgDeletePartPubEvents } from "./types/publicevents/tx";
const types = [
    ["/VoroshilovMax.bettery.publicevents.MsgCreatePartPubEvents", MsgCreatePartPubEvents],
    ["/VoroshilovMax.bettery.publicevents.MsgDeleteValidPubEvents", MsgDeleteValidPubEvents],
    ["/VoroshilovMax.bettery.publicevents.MsgCreateValidPubEvents", MsgCreateValidPubEvents],
    ["/VoroshilovMax.bettery.publicevents.MsgCreateCreatePubEvents", MsgCreateCreatePubEvents],
    ["/VoroshilovMax.bettery.publicevents.MsgUpdatePartPubEvents", MsgUpdatePartPubEvents],
    ["/VoroshilovMax.bettery.publicevents.MsgUpdateValidPubEvents", MsgUpdateValidPubEvents],
    ["/VoroshilovMax.bettery.publicevents.MsgDeletePartPubEvents", MsgDeletePartPubEvents],
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
        msgCreatePartPubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgCreatePartPubEvents", value: data }),
        msgDeleteValidPubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgDeleteValidPubEvents", value: data }),
        msgCreateValidPubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgCreateValidPubEvents", value: data }),
        msgCreateCreatePubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgCreateCreatePubEvents", value: data }),
        msgUpdatePartPubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgUpdatePartPubEvents", value: data }),
        msgUpdateValidPubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgUpdateValidPubEvents", value: data }),
        msgDeletePartPubEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgDeletePartPubEvents", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
