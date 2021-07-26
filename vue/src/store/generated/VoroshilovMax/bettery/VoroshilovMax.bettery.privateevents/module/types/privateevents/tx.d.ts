import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.privateevents";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreatePartPrivEvents {
    creator: string;
    privId: string;
    answer: string;
}
export interface MsgCreatePartPrivEventsResponse {
    id: number;
}
export interface MsgUpdatePartPrivEvents {
    creator: string;
    id: number;
    privId: string;
    answer: string;
}
export interface MsgUpdatePartPrivEventsResponse {
}
export interface MsgDeletePartPrivEvents {
    creator: string;
    id: number;
}
export interface MsgDeletePartPrivEventsResponse {
}
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
export declare const MsgUpdatePartPrivEvents: {
    encode(message: MsgUpdatePartPrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePartPrivEvents;
    fromJSON(object: any): MsgUpdatePartPrivEvents;
    toJSON(message: MsgUpdatePartPrivEvents): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePartPrivEvents>): MsgUpdatePartPrivEvents;
};
export declare const MsgUpdatePartPrivEventsResponse: {
    encode(_: MsgUpdatePartPrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePartPrivEventsResponse;
    fromJSON(_: any): MsgUpdatePartPrivEventsResponse;
    toJSON(_: MsgUpdatePartPrivEventsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePartPrivEventsResponse>): MsgUpdatePartPrivEventsResponse;
};
export declare const MsgDeletePartPrivEvents: {
    encode(message: MsgDeletePartPrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePartPrivEvents;
    fromJSON(object: any): MsgDeletePartPrivEvents;
    toJSON(message: MsgDeletePartPrivEvents): unknown;
    fromPartial(object: DeepPartial<MsgDeletePartPrivEvents>): MsgDeletePartPrivEvents;
};
export declare const MsgDeletePartPrivEventsResponse: {
    encode(_: MsgDeletePartPrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePartPrivEventsResponse;
    fromJSON(_: any): MsgDeletePartPrivEventsResponse;
    toJSON(_: MsgDeletePartPrivEventsResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePartPrivEventsResponse>): MsgDeletePartPrivEventsResponse;
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
    CreatePartPrivEvents(request: MsgCreatePartPrivEvents): Promise<MsgCreatePartPrivEventsResponse>;
    UpdatePartPrivEvents(request: MsgUpdatePartPrivEvents): Promise<MsgUpdatePartPrivEventsResponse>;
    DeletePartPrivEvents(request: MsgDeletePartPrivEvents): Promise<MsgDeletePartPrivEventsResponse>;
    CreateCreatePrivEvents(request: MsgCreateCreatePrivEvents): Promise<MsgCreateCreatePrivEventsResponse>;
    UpdateCreatePrivEvents(request: MsgUpdateCreatePrivEvents): Promise<MsgUpdateCreatePrivEventsResponse>;
    DeleteCreatePrivEvents(request: MsgDeleteCreatePrivEvents): Promise<MsgDeleteCreatePrivEventsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePartPrivEvents(request: MsgCreatePartPrivEvents): Promise<MsgCreatePartPrivEventsResponse>;
    UpdatePartPrivEvents(request: MsgUpdatePartPrivEvents): Promise<MsgUpdatePartPrivEventsResponse>;
    DeletePartPrivEvents(request: MsgDeletePartPrivEvents): Promise<MsgDeletePartPrivEventsResponse>;
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
