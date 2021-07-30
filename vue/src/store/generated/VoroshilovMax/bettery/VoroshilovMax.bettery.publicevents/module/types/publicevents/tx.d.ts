import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.publicevents";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCreatePubEvents {
    creator: string;
    pubId: number;
    question: string;
    answers: string[];
    premAmount: number;
    startTime: number;
    endTime: number;
    expertAmount: number;
}
export interface MsgCreateCreatePubEventsResponse {
    id: number;
}
export declare const MsgCreateCreatePubEvents: {
    encode(message: MsgCreateCreatePubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePubEvents;
    fromJSON(object: any): MsgCreateCreatePubEvents;
    toJSON(message: MsgCreateCreatePubEvents): unknown;
    fromPartial(object: DeepPartial<MsgCreateCreatePubEvents>): MsgCreateCreatePubEvents;
};
export declare const MsgCreateCreatePubEventsResponse: {
    encode(message: MsgCreateCreatePubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePubEventsResponse;
    fromJSON(object: any): MsgCreateCreatePubEventsResponse;
    toJSON(message: MsgCreateCreatePubEventsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCreatePubEventsResponse>): MsgCreateCreatePubEventsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateCreatePubEvents(request: MsgCreateCreatePubEvents): Promise<MsgCreateCreatePubEventsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCreatePubEvents(request: MsgCreateCreatePubEvents): Promise<MsgCreateCreatePubEventsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
