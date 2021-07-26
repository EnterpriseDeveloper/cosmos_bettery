// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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
    msgUpdateCreatePrivEvents: (data: MsgUpdateCreatePrivEvents): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgUpdateCreatePrivEvents", value: data }),
    msgUpdatePartPrivEvents: (data: MsgUpdatePartPrivEvents): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgUpdatePartPrivEvents", value: data }),
    msgCreateCreatePrivEvents: (data: MsgCreateCreatePrivEvents): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgCreateCreatePrivEvents", value: data }),
    msgDeleteCreatePrivEvents: (data: MsgDeleteCreatePrivEvents): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgDeleteCreatePrivEvents", value: data }),
    msgCreatePartPrivEvents: (data: MsgCreatePartPrivEvents): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgCreatePartPrivEvents", value: data }),
    msgDeletePartPrivEvents: (data: MsgDeletePartPrivEvents): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgDeletePartPrivEvents", value: data }),
    
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
