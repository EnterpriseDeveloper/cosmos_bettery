import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.publicevents";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateRefPubEvents {
    creator: string;
    pubId: number;
    refOneAddr: string[];
    refOneAmount: string[];
    refTwoAddr: string[];
    refTwoAmount: string[];
    refThreeAddr: string[];
    refThreeAmount: string[];
    payToComp: string;
}
export interface MsgCreateRefPubEventsResponse {
    id: number;
}
export interface MsgCreateFihishPubEvent {
    creator: string;
    pubId: number;
}
export interface MsgCreateFihishPubEventResponse {
    id: number;
}
export interface MsgCreateValidPubEvents {
    creator: string;
    pubId: number;
    answers: string;
    reput: number;
}
export interface MsgCreateValidPubEventsResponse {
    id: number;
}
export interface MsgCreatePartPubEvents {
    creator: string;
    pubId: number;
    answers: string;
    amount: string;
}
export interface MsgCreatePartPubEventsResponse {
    id: number;
}
export interface MsgCreateCreatePubEvents {
    creator: string;
    pubId: number;
    question: string;
    answers: string[];
    premAmount: string;
    startTime: number;
    endTime: number;
    expertAmount: number;
    advisor: string;
}
export interface MsgCreateCreatePubEventsResponse {
    id: number;
}
export declare const MsgCreateRefPubEvents: {
    encode(message: MsgCreateRefPubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateRefPubEvents;
    fromJSON(object: any): MsgCreateRefPubEvents;
    toJSON(message: MsgCreateRefPubEvents): unknown;
    fromPartial(object: DeepPartial<MsgCreateRefPubEvents>): MsgCreateRefPubEvents;
};
export declare const MsgCreateRefPubEventsResponse: {
    encode(message: MsgCreateRefPubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateRefPubEventsResponse;
    fromJSON(object: any): MsgCreateRefPubEventsResponse;
    toJSON(message: MsgCreateRefPubEventsResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateRefPubEventsResponse>): MsgCreateRefPubEventsResponse;
};
export declare const MsgCreateFihishPubEvent: {
    encode(message: MsgCreateFihishPubEvent, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateFihishPubEvent;
    fromJSON(object: any): MsgCreateFihishPubEvent;
    toJSON(message: MsgCreateFihishPubEvent): unknown;
    fromPartial(object: DeepPartial<MsgCreateFihishPubEvent>): MsgCreateFihishPubEvent;
};
export declare const MsgCreateFihishPubEventResponse: {
    encode(message: MsgCreateFihishPubEventResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateFihishPubEventResponse;
    fromJSON(object: any): MsgCreateFihishPubEventResponse;
    toJSON(message: MsgCreateFihishPubEventResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateFihishPubEventResponse>): MsgCreateFihishPubEventResponse;
};
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
    CreateRefPubEvents(request: MsgCreateRefPubEvents): Promise<MsgCreateRefPubEventsResponse>;
    CreateFihishPubEvent(request: MsgCreateFihishPubEvent): Promise<MsgCreateFihishPubEventResponse>;
    CreateValidPubEvents(request: MsgCreateValidPubEvents): Promise<MsgCreateValidPubEventsResponse>;
    CreatePartPubEvents(request: MsgCreatePartPubEvents): Promise<MsgCreatePartPubEventsResponse>;
    CreateCreatePubEvents(request: MsgCreateCreatePubEvents): Promise<MsgCreateCreatePubEventsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateRefPubEvents(request: MsgCreateRefPubEvents): Promise<MsgCreateRefPubEventsResponse>;
    CreateFihishPubEvent(request: MsgCreateFihishPubEvent): Promise<MsgCreateFihishPubEventResponse>;
    CreateValidPubEvents(request: MsgCreateValidPubEvents): Promise<MsgCreateValidPubEventsResponse>;
    CreatePartPubEvents(request: MsgCreatePartPubEvents): Promise<MsgCreatePartPubEventsResponse>;
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
