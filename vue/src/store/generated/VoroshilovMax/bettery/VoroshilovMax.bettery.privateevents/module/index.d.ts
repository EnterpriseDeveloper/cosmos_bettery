import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateCreatePrivEvents } from "./types/privateevents/tx";
import { MsgUpdatePartPrivEvents } from "./types/privateevents/tx";
import { MsgCreateCreatePrivEvents } from "./types/privateevents/tx";
import { MsgDeleteCreatePrivEvents } from "./types/privateevents/tx";
import { MsgCreatePartPrivEvents } from "./types/privateevents/tx";
import { MsgDeletePartPrivEvents } from "./types/privateevents/tx";
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
    msgUpdateCreatePrivEvents: (data: MsgUpdateCreatePrivEvents) => EncodeObject;
    msgUpdatePartPrivEvents: (data: MsgUpdatePartPrivEvents) => EncodeObject;
    msgCreateCreatePrivEvents: (data: MsgCreateCreatePrivEvents) => EncodeObject;
    msgDeleteCreatePrivEvents: (data: MsgDeleteCreatePrivEvents) => EncodeObject;
    msgCreatePartPrivEvents: (data: MsgCreatePartPrivEvents) => EncodeObject;
    msgDeletePartPrivEvents: (data: MsgDeletePartPrivEvents) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
