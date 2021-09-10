import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.privateevents";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateValidPrivEvents {
    creator: string;
    privId: number;
    answer: string;
}
export interface MsgCreateValidPrivEventsResponse {
    id: number;
}
export interface MsgCreatePartPrivEvents {
    creator: string;
    privId: number;
    answer: string;
}
export interface MsgCreatePartPrivEventsResponse {
    id: number;
}
export interface MsgCreateCreatePrivEvents {
    creator: string;
    privId: number;
    question: string;
    answers: string[];
    winner: string;
    loser: string;
    startTime: number;
    endTime: number;
    finished: boolean;
}
export interface MsgCreateCreatePrivEventsResponse {
    id: number;
}
export declare const MsgCreateValidPrivEvents: {
    encode(message: MsgCreateValidPrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateValidPrivEvents;
    fromJSON(object: any): MsgCreateValidPrivEvents;
    toJSON(message: MsgCreateValidPrivEvents): unknown;
    fromPartial(object: DeepPartial<MsgCreateValidPrivEvents>): MsgCreateValidPrivEvents;
};
export declare const MsgCreateValidPrivEventsResponse: {
    encode(message: MsgCreateValidPrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateValidPrivEventsResponse;
    fromJSON(object: any): MsgCreateValidPrivEventsResponse;
    toJSON(message: MsgCreateValidPrivEventsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateValidPrivEventsResponse>): MsgCreateValidPrivEventsResponse;
};
export declare const MsgCreatePartPrivEvents: {
    encode(message: MsgCreatePartPrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePartPrivEvents;
    fromJSON(object: any): MsgCreatePartPrivEvents;
    toJSON(message: MsgCreatePartPrivEvents): unknown;
    fromPartial(object: DeepPartial<MsgCreatePartPrivEvents>): MsgCreatePartPrivEvents;
};
export declare const MsgCreatePartPrivEventsResponse: {
    encode(message: MsgCreatePartPrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePartPrivEventsResponse;
    fromJSON(object: any): MsgCreatePartPrivEventsResponse;
    toJSON(message: MsgCreatePartPrivEventsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePartPrivEventsResponse>): MsgCreatePartPrivEventsResponse;
};
export declare const MsgCreateCreatePrivEvents: {
    encode(message: MsgCreateCreatePrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePrivEvents;
    fromJSON(object: any): MsgCreateCreatePrivEvents;
    toJSON(message: MsgCreateCreatePrivEvents): unknown;
    fromPartial(object: DeepPartial<MsgCreateCreatePrivEvents>): MsgCreateCreatePrivEvents;
};
export declare const MsgCreateCreatePrivEventsResponse: {
    encode(message: MsgCreateCreatePrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePrivEventsResponse;
    fromJSON(object: any): MsgCreateCreatePrivEventsResponse;
    toJSON(message: MsgCreateCreatePrivEventsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateCreatePrivEventsResponse>): MsgCreateCreatePrivEventsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateValidPrivEvents(request: MsgCreateValidPrivEvents): Promise<MsgCreateValidPrivEventsResponse>;
    CreatePartPrivEvents(request: MsgCreatePartPrivEvents): Promise<MsgCreatePartPrivEventsResponse>;
    CreateCreatePrivEvents(request: MsgCreateCreatePrivEvents): Promise<MsgCreateCreatePrivEventsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateValidPrivEvents(request: MsgCreateValidPrivEvents): Promise<MsgCreateValidPrivEventsResponse>;
    CreatePartPrivEvents(request: MsgCreatePartPrivEvents): Promise<MsgCreatePartPrivEventsResponse>;
    CreateCreatePrivEvents(request: MsgCreateCreatePrivEvents): Promise<MsgCreateCreatePrivEventsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
