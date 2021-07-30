import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.publicevents";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateValidPubEvents {
    creator: string;
    pubId: string;
    answers: string;
    reput: string;
}
export interface MsgCreateValidPubEventsResponse {
    id: number;
}
export interface MsgUpdateValidPubEvents {
    creator: string;
    id: number;
    pubId: string;
    answers: string;
    reput: string;
}
export interface MsgUpdateValidPubEventsResponse {
}
export interface MsgDeleteValidPubEvents {
    creator: string;
    id: number;
}
export interface MsgDeleteValidPubEventsResponse {
}
export interface MsgCreatePartPubEvents {
    creator: string;
    pubId: string;
    answers: string;
    amount: string;
}
export interface MsgCreatePartPubEventsResponse {
    id: number;
}
export interface MsgUpdatePartPubEvents {
    creator: string;
    id: number;
    pubId: string;
    answers: string;
    amount: string;
}
export interface MsgUpdatePartPubEventsResponse {
}
export interface MsgDeletePartPubEvents {
    creator: string;
    id: number;
}
export interface MsgDeletePartPubEventsResponse {
}
export interface MsgCreateCreatePubEvents {
    creator: string;
    pubId: number;
    question: string;
    answers: string[];
    premAmount: number;
    startTime: number;
    endTime: number;
    expertAmount: number;
    advisor: string;
}
export interface MsgCreateCreatePubEventsResponse {
    id: number;
}
export declare const MsgCreateValidPubEvents: {
    encode(message: MsgCreateValidPubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateValidPubEvents;
    fromJSON(object: any): MsgCreateValidPubEvents;
    toJSON(message: MsgCreateValidPubEvents): unknown;
    fromPartial(object: DeepPartial<MsgCreateValidPubEvents>): MsgCreateValidPubEvents;
};
export declare const MsgCreateValidPubEventsResponse: {
    encode(message: MsgCreateValidPubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateValidPubEventsResponse;
    fromJSON(object: any): MsgCreateValidPubEventsResponse;
    toJSON(message: MsgCreateValidPubEventsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateValidPubEventsResponse>): MsgCreateValidPubEventsResponse;
};
export declare const MsgUpdateValidPubEvents: {
    encode(message: MsgUpdateValidPubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidPubEvents;
    fromJSON(object: any): MsgUpdateValidPubEvents;
    toJSON(message: MsgUpdateValidPubEvents): unknown;
    fromPartial(object: DeepPartial<MsgUpdateValidPubEvents>): MsgUpdateValidPubEvents;
};
export declare const MsgUpdateValidPubEventsResponse: {
    encode(_: MsgUpdateValidPubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidPubEventsResponse;
    fromJSON(_: any): MsgUpdateValidPubEventsResponse;
    toJSON(_: MsgUpdateValidPubEventsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateValidPubEventsResponse>): MsgUpdateValidPubEventsResponse;
};
export declare const MsgDeleteValidPubEvents: {
    encode(message: MsgDeleteValidPubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidPubEvents;
    fromJSON(object: any): MsgDeleteValidPubEvents;
    toJSON(message: MsgDeleteValidPubEvents): unknown;
    fromPartial(object: DeepPartial<MsgDeleteValidPubEvents>): MsgDeleteValidPubEvents;
};
export declare const MsgDeleteValidPubEventsResponse: {
    encode(_: MsgDeleteValidPubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidPubEventsResponse;
    fromJSON(_: any): MsgDeleteValidPubEventsResponse;
    toJSON(_: MsgDeleteValidPubEventsResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteValidPubEventsResponse>): MsgDeleteValidPubEventsResponse;
};
export declare const MsgCreatePartPubEvents: {
    encode(message: MsgCreatePartPubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePartPubEvents;
    fromJSON(object: any): MsgCreatePartPubEvents;
    toJSON(message: MsgCreatePartPubEvents): unknown;
    fromPartial(object: DeepPartial<MsgCreatePartPubEvents>): MsgCreatePartPubEvents;
};
export declare const MsgCreatePartPubEventsResponse: {
    encode(message: MsgCreatePartPubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePartPubEventsResponse;
    fromJSON(object: any): MsgCreatePartPubEventsResponse;
    toJSON(message: MsgCreatePartPubEventsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePartPubEventsResponse>): MsgCreatePartPubEventsResponse;
};
export declare const MsgUpdatePartPubEvents: {
    encode(message: MsgUpdatePartPubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePartPubEvents;
    fromJSON(object: any): MsgUpdatePartPubEvents;
    toJSON(message: MsgUpdatePartPubEvents): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePartPubEvents>): MsgUpdatePartPubEvents;
};
export declare const MsgUpdatePartPubEventsResponse: {
    encode(_: MsgUpdatePartPubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePartPubEventsResponse;
    fromJSON(_: any): MsgUpdatePartPubEventsResponse;
    toJSON(_: MsgUpdatePartPubEventsResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePartPubEventsResponse>): MsgUpdatePartPubEventsResponse;
};
export declare const MsgDeletePartPubEvents: {
    encode(message: MsgDeletePartPubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePartPubEvents;
    fromJSON(object: any): MsgDeletePartPubEvents;
    toJSON(message: MsgDeletePartPubEvents): unknown;
    fromPartial(object: DeepPartial<MsgDeletePartPubEvents>): MsgDeletePartPubEvents;
};
export declare const MsgDeletePartPubEventsResponse: {
    encode(_: MsgDeletePartPubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePartPubEventsResponse;
    fromJSON(_: any): MsgDeletePartPubEventsResponse;
    toJSON(_: MsgDeletePartPubEventsResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePartPubEventsResponse>): MsgDeletePartPubEventsResponse;
};
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
    CreateValidPubEvents(request: MsgCreateValidPubEvents): Promise<MsgCreateValidPubEventsResponse>;
    UpdateValidPubEvents(request: MsgUpdateValidPubEvents): Promise<MsgUpdateValidPubEventsResponse>;
    DeleteValidPubEvents(request: MsgDeleteValidPubEvents): Promise<MsgDeleteValidPubEventsResponse>;
    CreatePartPubEvents(request: MsgCreatePartPubEvents): Promise<MsgCreatePartPubEventsResponse>;
    UpdatePartPubEvents(request: MsgUpdatePartPubEvents): Promise<MsgUpdatePartPubEventsResponse>;
    DeletePartPubEvents(request: MsgDeletePartPubEvents): Promise<MsgDeletePartPubEventsResponse>;
    CreateCreatePubEvents(request: MsgCreateCreatePubEvents): Promise<MsgCreateCreatePubEventsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateValidPubEvents(request: MsgCreateValidPubEvents): Promise<MsgCreateValidPubEventsResponse>;
    UpdateValidPubEvents(request: MsgUpdateValidPubEvents): Promise<MsgUpdateValidPubEventsResponse>;
    DeleteValidPubEvents(request: MsgDeleteValidPubEvents): Promise<MsgDeleteValidPubEventsResponse>;
    CreatePartPubEvents(request: MsgCreatePartPubEvents): Promise<MsgCreatePartPubEventsResponse>;
    UpdatePartPubEvents(request: MsgUpdatePartPubEvents): Promise<MsgUpdatePartPubEventsResponse>;
    DeletePartPubEvents(request: MsgDeletePartPubEvents): Promise<MsgDeletePartPubEventsResponse>;
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
