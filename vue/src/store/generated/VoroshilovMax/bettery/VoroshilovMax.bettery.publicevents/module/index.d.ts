import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePartPubEvents } from "./types/publicevents/tx";
import { MsgCreateRefundPubEvents } from "./types/publicevents/tx";
import { MsgCreateFihishPubEvent } from "./types/publicevents/tx";
import { MsgCreateCreatePubEvents } from "./types/publicevents/tx";
import { MsgCreateRefPubEvents } from "./types/publicevents/tx";
import { MsgCreateValidPubEvents } from "./types/publicevents/tx";
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
    msgCreatePartPubEvents: (data: MsgCreatePartPubEvents) => EncodeObject;
    msgCreateRefundPubEvents: (data: MsgCreateRefundPubEvents) => EncodeObject;
    msgCreateFihishPubEvent: (data: MsgCreateFihishPubEvent) => EncodeObject;
    msgCreateCreatePubEvents: (data: MsgCreateCreatePubEvents) => EncodeObject;
    msgCreateRefPubEvents: (data: MsgCreateRefPubEvents) => EncodeObject;
    msgCreateValidPubEvents: (data: MsgCreateValidPubEvents) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
