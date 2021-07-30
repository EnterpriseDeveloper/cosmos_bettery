import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.publicevents";
export interface ValidPubEvents {
    creator: string;
    id: number;
    pubId: string;
    answers: string;
    reput: string;
}
export declare const ValidPubEvents: {
    encode(message: ValidPubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): ValidPubEvents;
    fromJSON(object: any): ValidPubEvents;
    toJSON(message: ValidPubEvents): unknown;
    fromPartial(object: DeepPartial<ValidPubEvents>): ValidPubEvents;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
