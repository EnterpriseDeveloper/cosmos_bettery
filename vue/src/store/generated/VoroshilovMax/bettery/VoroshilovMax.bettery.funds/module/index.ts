// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSwipeBet } from "./types/funds/tx";
import { MsgDeleteSwipeBet } from "./types/funds/tx";
import { MsgCreateMintBet } from "./types/funds/tx";
import { MsgUpdateSwipeBet } from "./types/funds/tx";


const types = [
  ["/VoroshilovMax.bettery.funds.MsgCreateSwipeBet", MsgCreateSwipeBet],
  ["/VoroshilovMax.bettery.funds.MsgDeleteSwipeBet", MsgDeleteSwipeBet],
  ["/VoroshilovMax.bettery.funds.MsgCreateMintBet", MsgCreateMintBet],
  ["/VoroshilovMax.bettery.funds.MsgUpdateSwipeBet", MsgUpdateSwipeBet],
  
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
    msgCreateSwipeBet: (data: MsgCreateSwipeBet): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.funds.MsgCreateSwipeBet", value: data }),
    msgDeleteSwipeBet: (data: MsgDeleteSwipeBet): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.funds.MsgDeleteSwipeBet", value: data }),
    msgCreateMintBet: (data: MsgCreateMintBet): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.funds.MsgCreateMintBet", value: data }),
    msgUpdateSwipeBet: (data: MsgUpdateSwipeBet): EncodeObject => ({ typeUrl: "/VoroshilovMax.bettery.funds.MsgUpdateSwipeBet", value: data }),
    
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
