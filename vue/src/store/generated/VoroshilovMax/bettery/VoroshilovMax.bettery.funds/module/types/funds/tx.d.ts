import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.funds";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateSwipeBet {
    creator: string;
    amount: number;
    userId: number;
}
export interface MsgCreateSwipeBetResponse {
    id: number;
}
export interface MsgCreateMintBet {
    creator: string;
    amount: number;
    userId: number;
}
export interface MsgCreateMintBetResponse {
    id: number;
}
export declare const MsgCreateSwipeBet: {
    encode(message: MsgCreateSwipeBet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSwipeBet;
    fromJSON(object: any): MsgCreateSwipeBet;
    toJSON(message: MsgCreateSwipeBet): unknown;
    fromPartial(object: DeepPartial<MsgCreateSwipeBet>): MsgCreateSwipeBet;
};
export declare const MsgCreateSwipeBetResponse: {
    encode(message: MsgCreateSwipeBetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSwipeBetResponse;
    fromJSON(object: any): MsgCreateSwipeBetResponse;
    toJSON(message: MsgCreateSwipeBetResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSwipeBetResponse>): MsgCreateSwipeBetResponse;
};
export declare const MsgCreateMintBet: {
    encode(message: MsgCreateMintBet, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMintBet;
    fromJSON(object: any): MsgCreateMintBet;
    toJSON(message: MsgCreateMintBet): unknown;
    fromPartial(object: DeepPartial<MsgCreateMintBet>): MsgCreateMintBet;
};
export declare const MsgCreateMintBetResponse: {
    encode(message: MsgCreateMintBetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMintBetResponse;
    fromJSON(object: any): MsgCreateMintBetResponse;
    toJSON(message: MsgCreateMintBetResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateMintBetResponse>): MsgCreateMintBetResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateSwipeBet(request: MsgCreateSwipeBet): Promise<MsgCreateSwipeBetResponse>;
    CreateMintBet(request: MsgCreateMintBet): Promise<MsgCreateMintBetResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateSwipeBet(request: MsgCreateSwipeBet): Promise<MsgCreateSwipeBetResponse>;
    CreateMintBet(request: MsgCreateMintBet): Promise<MsgCreateMintBetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
