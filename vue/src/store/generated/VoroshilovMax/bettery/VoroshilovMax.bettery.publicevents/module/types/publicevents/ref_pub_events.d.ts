import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.publicevents";
export interface RefPubEvents {
    creator: string;
    pubId: number;
    refOne: string;
    refTwo: string;
    refThree: string;
}
export declare const RefPubEvents: {
    encode(message: RefPubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RefPubEvents;
    fromJSON(object: any): RefPubEvents;
    toJSON(message: RefPubEvents): unknown;
    fromPartial(object: DeepPartial<RefPubEvents>): RefPubEvents;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
