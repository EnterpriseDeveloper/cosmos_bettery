import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.privateevents";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCreatePrivEvents {
    creator: string;
    privId: number;
    question: string;
    answers: string[];
    winner: string;
    loser: string;
}
export interface MsgCreateCreatePrivEventsResponse {
    id: number;
}
export interface MsgUpdateCreatePrivEvents {
    creator: string;
    id: number;
    privId: number;
    question: string;
    answers: string[];
    winner: string;
    loser: string;
}
export interface MsgUpdateCreatePrivEventsResponse {
}
export interface MsgDeleteCreatePrivEvents {
    creator: string;
    id: number;
}
export interface MsgDeleteCreatePrivEventsResponse {
}
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
export declare const MsgUpdateCreatePrivEvents: {
    encode(message: MsgUpdateCreatePrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCreatePrivEvents;
    fromJSON(object: any): MsgUpdateCreatePrivEvents;
    toJSON(message: MsgUpdateCreatePrivEvents): unknown;
    fromPartial(object: DeepPartial<MsgUpdateCreatePrivEvents>): MsgUpdateCreatePrivEvents;
};
export declare const MsgUpdateCreatePrivEventsResponse: {
    encode(_: MsgUpdateCreatePrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateCreatePrivEventsResponse;
    fromJSON(_: any): MsgUpdateCreatePrivEventsResponse;
    toJSON(_: MsgUpdateCreatePrivEventsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateCreatePrivEventsResponse>): MsgUpdateCreatePrivEventsResponse;
};
export declare const MsgDeleteCreatePrivEvents: {
    encode(message: MsgDeleteCreatePrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCreatePrivEvents;
    fromJSON(object: any): MsgDeleteCreatePrivEvents;
    toJSON(message: MsgDeleteCreatePrivEvents): unknown;
    fromPartial(object: DeepPartial<MsgDeleteCreatePrivEvents>): MsgDeleteCreatePrivEvents;
};
export declare const MsgDeleteCreatePrivEventsResponse: {
    encode(_: MsgDeleteCreatePrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteCreatePrivEventsResponse;
    fromJSON(_: any): MsgDeleteCreatePrivEventsResponse;
    toJSON(_: MsgDeleteCreatePrivEventsResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteCreatePrivEventsResponse>): MsgDeleteCreatePrivEventsResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateCreatePrivEvents(request: MsgCreateCreatePrivEvents): Promise<MsgCreateCreatePrivEventsResponse>;
    UpdateCreatePrivEvents(request: MsgUpdateCreatePrivEvents): Promise<MsgUpdateCreatePrivEventsResponse>;
    DeleteCreatePrivEvents(request: MsgDeleteCreatePrivEvents): Promise<MsgDeleteCreatePrivEventsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCreatePrivEvents(request: MsgCreateCreatePrivEvents): Promise<MsgCreateCreatePrivEventsResponse>;
    UpdateCreatePrivEvents(request: MsgUpdateCreatePrivEvents): Promise<MsgUpdateCreatePrivEventsResponse>;
    DeleteCreatePrivEvents(request: MsgDeleteCreatePrivEvents): Promise<MsgDeleteCreatePrivEventsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
