import { Reader, Writer } from 'protobufjs/minimal';
import { SwipeBet } from '../funds/swipe_bet';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { MintBet } from '../funds/mint_bet';
export declare const protobufPackage = "VoroshilovMax.bettery.funds";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetSwipeBetRequest {
    id: number;
}
export interface QueryGetSwipeBetResponse {
    SwipeBet: SwipeBet | undefined;
}
export interface QueryAllSwipeBetRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSwipeBetResponse {
    SwipeBet: SwipeBet[];
    pagination: PageResponse | undefined;
}
export interface QueryGetMintBetRequest {
    id: number;
    pagination: PageRequest | undefined;
}
export interface QueryGetMintBetResponse {
    MintBet: MintBet[];
    pagination: PageResponse | undefined;
}
export interface QueryAllMintBetRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllMintBetResponse {
    MintBet: MintBet[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetSwipeBetRequest: {
    encode(message: QueryGetSwipeBetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSwipeBetRequest;
    fromJSON(object: any): QueryGetSwipeBetRequest;
    toJSON(message: QueryGetSwipeBetRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSwipeBetRequest>): QueryGetSwipeBetRequest;
};
export declare const QueryGetSwipeBetResponse: {
    encode(message: QueryGetSwipeBetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSwipeBetResponse;
    fromJSON(object: any): QueryGetSwipeBetResponse;
    toJSON(message: QueryGetSwipeBetResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSwipeBetResponse>): QueryGetSwipeBetResponse;
};
export declare const QueryAllSwipeBetRequest: {
    encode(message: QueryAllSwipeBetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSwipeBetRequest;
    fromJSON(object: any): QueryAllSwipeBetRequest;
    toJSON(message: QueryAllSwipeBetRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSwipeBetRequest>): QueryAllSwipeBetRequest;
};
export declare const QueryAllSwipeBetResponse: {
    encode(message: QueryAllSwipeBetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSwipeBetResponse;
    fromJSON(object: any): QueryAllSwipeBetResponse;
    toJSON(message: QueryAllSwipeBetResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSwipeBetResponse>): QueryAllSwipeBetResponse;
};
export declare const QueryGetMintBetRequest: {
    encode(message: QueryGetMintBetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMintBetRequest;
    fromJSON(object: any): QueryGetMintBetRequest;
    toJSON(message: QueryGetMintBetRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMintBetRequest>): QueryGetMintBetRequest;
};
export declare const QueryGetMintBetResponse: {
    encode(message: QueryGetMintBetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMintBetResponse;
    fromJSON(object: any): QueryGetMintBetResponse;
    toJSON(message: QueryGetMintBetResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMintBetResponse>): QueryGetMintBetResponse;
};
export declare const QueryAllMintBetRequest: {
    encode(message: QueryAllMintBetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMintBetRequest;
    fromJSON(object: any): QueryAllMintBetRequest;
    toJSON(message: QueryAllMintBetRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMintBetRequest>): QueryAllMintBetRequest;
};
export declare const QueryAllMintBetResponse: {
    encode(message: QueryAllMintBetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMintBetResponse;
    fromJSON(object: any): QueryAllMintBetResponse;
    toJSON(message: QueryAllMintBetResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMintBetResponse>): QueryAllMintBetResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a swipeBet by id. */
    SwipeBet(request: QueryGetSwipeBetRequest): Promise<QueryGetSwipeBetResponse>;
    /** Queries a list of swipeBet items. */
    SwipeBetAll(request: QueryAllSwipeBetRequest): Promise<QueryAllSwipeBetResponse>;
    /** Queries a mintBet by id. */
    MintBet(request: QueryGetMintBetRequest): Promise<QueryGetMintBetResponse>;
    /** Queries a list of mintBet items. */
    MintBetAll(request: QueryAllMintBetRequest): Promise<QueryAllMintBetResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    SwipeBet(request: QueryGetSwipeBetRequest): Promise<QueryGetSwipeBetResponse>;
    SwipeBetAll(request: QueryAllSwipeBetRequest): Promise<QueryAllSwipeBetResponse>;
    MintBet(request: QueryGetMintBetRequest): Promise<QueryGetMintBetResponse>;
    MintBetAll(request: QueryAllMintBetRequest): Promise<QueryAllMintBetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
