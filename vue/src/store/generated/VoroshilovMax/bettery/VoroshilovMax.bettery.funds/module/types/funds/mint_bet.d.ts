import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.funds";
export interface MintBet {
    creator: string;
    amount: string;
    userId: number;
}
export declare const MintBet: {
    encode(message: MintBet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MintBet;
    fromJSON(object: any): MintBet;
    toJSON(message: MintBet): unknown;
    fromPartial(object: DeepPartial<MintBet>): MintBet;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
