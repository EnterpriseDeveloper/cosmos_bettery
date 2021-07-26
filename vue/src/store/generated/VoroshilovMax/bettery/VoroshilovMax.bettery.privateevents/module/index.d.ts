import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateValidPrivEvents } from "./types/privateevents/tx";
import { MsgDeleteValidPrivEvents } from "./types/privateevents/tx";
import { MsgUpdateCreatePrivEvents } from "./types/privateevents/tx";
import { MsgCreatePartPrivEvents } from "./types/privateevents/tx";
import { MsgUpdatePartPrivEvents } from "./types/privateevents/tx";
import { MsgDeletePartPrivEvents } from "./types/privateevents/tx";
import { MsgDeleteCreatePrivEvents } from "./types/privateevents/tx";
import { MsgCreateCreatePrivEvents } from "./types/privateevents/tx";
import { MsgUpdateValidPrivEvents } from "./types/privateevents/tx";
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
    msgCreateValidPrivEvents: (data: MsgCreateValidPrivEvents) => EncodeObject;
    msgDeleteValidPrivEvents: (data: MsgDeleteValidPrivEvents) => EncodeObject;
    msgUpdateCreatePrivEvents: (data: MsgUpdateCreatePrivEvents) => EncodeObject;
    msgCreatePartPrivEvents: (data: MsgCreatePartPrivEvents) => EncodeObject;
    msgUpdatePartPrivEvents: (data: MsgUpdatePartPrivEvents) => EncodeObject;
    msgDeletePartPrivEvents: (data: MsgDeletePartPrivEvents) => EncodeObject;
    msgDeleteCreatePrivEvents: (data: MsgDeleteCreatePrivEvents) => EncodeObject;
    msgCreateCreatePrivEvents: (data: MsgCreateCreatePrivEvents) => EncodeObject;
    msgUpdateValidPrivEvents: (data: MsgUpdateValidPrivEvents) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
