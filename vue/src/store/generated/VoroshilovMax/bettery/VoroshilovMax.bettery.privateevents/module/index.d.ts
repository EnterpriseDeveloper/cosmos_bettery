import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateCreatePrivEvents } from "./types/privateevents/tx";
import { MsgCreateValidPrivEvents } from "./types/privateevents/tx";
import { MsgCreatePartPrivEvents } from "./types/privateevents/tx";
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
    msgCreateCreatePrivEvents: (data: MsgCreateCreatePrivEvents) => EncodeObject;
    msgCreateValidPrivEvents: (data: MsgCreateValidPrivEvents) => EncodeObject;
    msgCreatePartPrivEvents: (data: MsgCreatePartPrivEvents) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
