import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.publicevents";
export interface FihishPubEvent {
    creator: string;
    id: number;
    pubId: string;
}
export declare const FihishPubEvent: {
    encode(message: FihishPubEvent, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): FihishPubEvent;
    fromJSON(object: any): FihishPubEvent;
    toJSON(message: FihishPubEvent): unknown;
    fromPartial(object: DeepPartial<FihishPubEvent>): FihishPubEvent;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
