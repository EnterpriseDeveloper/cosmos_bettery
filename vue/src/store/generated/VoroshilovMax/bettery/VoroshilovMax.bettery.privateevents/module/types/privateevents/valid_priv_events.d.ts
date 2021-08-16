import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.privateevents";
export interface ValidPrivEvents {
    creator: string;
    id: number;
    privId: number;
    answer: string;
    answerIndex: number;
}
export interface allValidPrivEvent {
    creator: string;
    id: number;
    privId: number;
}
export declare const ValidPrivEvents: {
    encode(message: ValidPrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ValidPrivEvents;
    fromJSON(object: any): ValidPrivEvents;
    toJSON(message: ValidPrivEvents): unknown;
    fromPartial(object: DeepPartial<ValidPrivEvents>): ValidPrivEvents;
};
export declare const allValidPrivEvent: {
    encode(message: allValidPrivEvent, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): allValidPrivEvent;
    fromJSON(object: any): allValidPrivEvent;
    toJSON(message: allValidPrivEvent): unknown;
    fromPartial(object: DeepPartial<allValidPrivEvent>): allValidPrivEvent;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
