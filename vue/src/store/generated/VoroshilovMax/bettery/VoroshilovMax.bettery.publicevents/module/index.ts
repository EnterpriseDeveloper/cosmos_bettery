// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateFihishPubEvent } from "./types/publicevents/tx";
import { MsgCreatePartPubEvents } from "./types/publicevents/tx";
import { MsgCreateCreatePubEvents } from "./types/publicevents/tx";
import { MsgCreateValidPubEvents } from "./types/publicevents/tx";


const types = [
  ["/VoroshilovMax.bettery.publicevents.MsgCreateFihishPubEvent", MsgCreateFihishPubEvent],
  ["/VoroshilovMax.bettery.publicevents.MsgCreatePartPubEvents", MsgCreatePartPubEvents],
  ["/VoroshilovMax.bettery.publicevents.MsgCreateCreatePubEvents", MsgCreateCreatePubEvents],
  ["/VoroshilovMax.bettery.publicevents.MsgCreateValidPubEvents", MsgCreateValidPubEvents],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateFihishPubEvent: (data: MsgCreateFihishPubEvent): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgCreateFihishPubEvent", value: data }),
    msgCreatePartPubEvents: (data: MsgCreatePartPubEvents): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgCreatePartPubEvents", value: data }),
    msgCreateCreatePubEvents: (data: MsgCreateCreatePubEvents): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgCreateCreatePubEvents", value: data }),
    msgCreateValidPubEvents: (data: MsgCreateValidPubEvents): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.publicevents.MsgCreateValidPubEvents", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
