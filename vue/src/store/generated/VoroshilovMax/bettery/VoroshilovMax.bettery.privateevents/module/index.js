// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateCreatePrivEvents } from "./types/privateevents/tx";
import { MsgUpdatePartPrivEvents } from "./types/privateevents/tx";
import { MsgCreateCreatePrivEvents } from "./types/privateevents/tx";
import { MsgDeleteCreatePrivEvents } from "./types/privateevents/tx";
import { MsgCreatePartPrivEvents } from "./types/privateevents/tx";
import { MsgDeletePartPrivEvents } from "./types/privateevents/tx";
const types = [
    ["/VoroshilovMax.bettery.privateevents.MsgUpdateCreatePrivEvents", MsgUpdateCreatePrivEvents],
    ["/VoroshilovMax.bettery.privateevents.MsgUpdatePartPrivEvents", MsgUpdatePartPrivEvents],
    ["/VoroshilovMax.bettery.privateevents.MsgCreateCreatePrivEvents", MsgCreateCreatePrivEvents],
    ["/VoroshilovMax.bettery.privateevents.MsgDeleteCreatePrivEvents", MsgDeleteCreatePrivEvents],
    ["/VoroshilovMax.bettery.privateevents.MsgCreatePartPrivEvents", MsgCreatePartPrivEvents],
    ["/VoroshilovMax.bettery.privateevents.MsgDeletePartPrivEvents", MsgDeletePartPrivEvents],
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
        msgUpdateCreatePrivEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgUpdateCreatePrivEvents", value: data }),
        msgUpdatePartPrivEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgUpdatePartPrivEvents", value: data }),
        msgCreateCreatePrivEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgCreateCreatePrivEvents", value: data }),
        msgDeleteCreatePrivEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgDeleteCreatePrivEvents", value: data }),
        msgCreatePartPrivEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgCreatePartPrivEvents", value: data }),
        msgDeletePartPrivEvents: (data) => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgDeletePartPrivEvents", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
