import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.publicevents";
export interface RefundPubEvents {
    creator: string;
    id: number;
    pubId: string;
    purpose: string;
}
export declare const RefundPubEvents: {
    encode(message: RefundPubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): RefundPubEvents;
    fromJSON(object: any): RefundPubEvents;
    toJSON(message: RefundPubEvents): unknown;
    fromPartial(object: DeepPartial<RefundPubEvents>): RefundPubEvents;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
