import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateSwipeBet } from "./types/funds/tx";
import { MsgDeleteSwipeBet } from "./types/funds/tx";
import { MsgCreateMintBet } from "./types/funds/tx";
import { MsgUpdateSwipeBet } from "./types/funds/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateSwipeBet: (data: MsgCreateSwipeBet) => EncodeObject;
    msgDeleteSwipeBet: (data: MsgDeleteSwipeBet) => EncodeObject;
    msgCreateMintBet: (data: MsgCreateMintBet) => EncodeObject;
    msgUpdateSwipeBet: (data: MsgUpdateSwipeBet) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
