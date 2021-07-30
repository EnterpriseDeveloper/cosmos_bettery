import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.publicevents";
export interface PartPubEvents {
    creator: string;
    id: number;
    pubId: string;
    answers: string;
    amount: string;
}
export declare const PartPubEvents: {
    encode(message: PartPubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): PartPubEvents;
    fromJSON(object: any): PartPubEvents;
    toJSON(message: PartPubEvents): unknown;
    fromPartial(object: DeepPartial<PartPubEvents>): PartPubEvents;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
