import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePartPubEvents } from "./types/publicevents/tx";
import { MsgDeleteValidPubEvents } from "./types/publicevents/tx";
import { MsgCreateValidPubEvents } from "./types/publicevents/tx";
import { MsgCreateCreatePubEvents } from "./types/publicevents/tx";
import { MsgUpdatePartPubEvents } from "./types/publicevents/tx";
import { MsgUpdateValidPubEvents } from "./types/publicevents/tx";
import { MsgDeletePartPubEvents } from "./types/publicevents/tx";
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
    msgDeleteValidPubEvents: (data: MsgDeleteValidPubEvents) => EncodeObject;
    msgCreateValidPubEvents: (data: MsgCreateValidPubEvents) => EncodeObject;
    msgCreateCreatePubEvents: (data: MsgCreateCreatePubEvents) => EncodeObject;
    msgUpdatePartPubEvents: (data: MsgUpdatePartPubEvents) => EncodeObject;
    msgUpdateValidPubEvents: (data: MsgUpdateValidPubEvents) => EncodeObject;
    msgDeletePartPubEvents: (data: MsgDeletePartPubEvents) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
