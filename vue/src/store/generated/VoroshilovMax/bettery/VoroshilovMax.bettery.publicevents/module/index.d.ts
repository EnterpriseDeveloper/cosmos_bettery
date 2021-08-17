import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePartPubEvents } from "./types/publicevents/tx";
import { MsgCreateValidPubEvents } from "./types/publicevents/tx";
import { MsgUpdateFihishPubEvent } from "./types/publicevents/tx";
import { MsgCreateCreatePubEvents } from "./types/publicevents/tx";
import { MsgCreateFihishPubEvent } from "./types/publicevents/tx";
import { MsgDeleteFihishPubEvent } from "./types/publicevents/tx";
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
    msgCreateValidPubEvents: (data: MsgCreateValidPubEvents) => EncodeObject;
    msgUpdateFihishPubEvent: (data: MsgUpdateFihishPubEvent) => EncodeObject;
    msgCreateCreatePubEvents: (data: MsgCreateCreatePubEvents) => EncodeObject;
    msgCreateFihishPubEvent: (data: MsgCreateFihishPubEvent) => EncodeObject;
    msgDeleteFihishPubEvent: (data: MsgDeleteFihishPubEvent) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
