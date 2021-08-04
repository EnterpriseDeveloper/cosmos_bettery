// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateCreatePrivEvents } from "./types/privateevents/tx";
import { MsgCreatePartPrivEvents } from "./types/privateevents/tx";
import { MsgCreateValidPrivEvents } from "./types/privateevents/tx";


const types = [
  ["/VoroshilovMax.bettery.privateevents.MsgCreateCreatePrivEvents", MsgCreateCreatePrivEvents],
  ["/VoroshilovMax.bettery.privateevents.MsgCreatePartPrivEvents", MsgCreatePartPrivEvents],
  ["/VoroshilovMax.bettery.privateevents.MsgCreateValidPrivEvents", MsgCreateValidPrivEvents],
  
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
    msgCreateCreatePrivEvents: (data: MsgCreateCreatePrivEvents): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgCreateCreatePrivEvents", value: data }),
    msgCreatePartPrivEvents: (data: MsgCreatePartPrivEvents): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgCreatePartPrivEvents", value: data }),
    msgCreateValidPrivEvents: (data: MsgCreateValidPrivEvents): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.privateevents.MsgCreateValidPrivEvents", value: data }),
    
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
