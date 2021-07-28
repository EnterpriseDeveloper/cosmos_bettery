import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.funds";
export interface SwipeBet {
    creator: string;
    amount: number;
    userId: number;
}
export declare const SwipeBet: {
    encode(message: SwipeBet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SwipeBet;
    fromJSON(object: any): SwipeBet;
    toJSON(message: SwipeBet): unknown;
    fromPartial(object: DeepPartial<SwipeBet>): SwipeBet;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
