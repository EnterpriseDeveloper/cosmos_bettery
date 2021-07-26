import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateCreatePrivEvents } from "./types/privateevents/tx";
import { MsgUpdateCreatePrivEvents } from "./types/privateevents/tx";
import { MsgDeleteCreatePrivEvents } from "./types/privateevents/tx";
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
    msgUpdateCreatePrivEvents: (data: MsgUpdateCreatePrivEvents) => EncodeObject;
    msgDeleteCreatePrivEvents: (data: MsgDeleteCreatePrivEvents) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
