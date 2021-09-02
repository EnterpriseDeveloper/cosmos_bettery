import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.privateevents";
export interface PartPrivEvents {
    creator: string;
    id: number;
    privId: number;
    answer: string;
    answerIndex: number;
}
export declare const PartPrivEvents: {
    encode(message: PartPrivEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): PartPrivEvents;
    fromJSON(object: any): PartPrivEvents;
    toJSON(message: PartPrivEvents): unknown;
    fromPartial(object: DeepPartial<PartPrivEvents>): PartPrivEvents;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
