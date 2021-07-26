import { Reader, Writer } from 'protobufjs/minimal';
import { CreatePrivEvents } from '../privateevents/create_priv_events';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "VoroshilovMax.bettery.privateevents";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetCreatePrivEventsRequest {
    id: number;
}
export interface QueryGetCreatePrivEventsResponse {
    CreatePrivEvents: CreatePrivEvents | undefined;
}
export interface QueryAllCreatePrivEventsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCreatePrivEventsResponse {
    CreatePrivEvents: CreatePrivEvents[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetCreatePrivEventsRequest: {
    encode(message: QueryGetCreatePrivEventsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCreatePrivEventsRequest;
    fromJSON(object: any): QueryGetCreatePrivEventsRequest;
    toJSON(message: QueryGetCreatePrivEventsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCreatePrivEventsRequest>): QueryGetCreatePrivEventsRequest;
};
export declare const QueryGetCreatePrivEventsResponse: {
    encode(message: QueryGetCreatePrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCreatePrivEventsResponse;
    fromJSON(object: any): QueryGetCreatePrivEventsResponse;
    toJSON(message: QueryGetCreatePrivEventsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCreatePrivEventsResponse>): QueryGetCreatePrivEventsResponse;
};
export declare const QueryAllCreatePrivEventsRequest: {
    encode(message: QueryAllCreatePrivEventsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCreatePrivEventsRequest;
    fromJSON(object: any): QueryAllCreatePrivEventsRequest;
    toJSON(message: QueryAllCreatePrivEventsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCreatePrivEventsRequest>): QueryAllCreatePrivEventsRequest;
};
export declare const QueryAllCreatePrivEventsResponse: {
    encode(message: QueryAllCreatePrivEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCreatePrivEventsResponse;
    fromJSON(object: any): QueryAllCreatePrivEventsResponse;
    toJSON(message: QueryAllCreatePrivEventsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCreatePrivEventsResponse>): QueryAllCreatePrivEventsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a createPrivEvents by id. */
    CreatePrivEvents(request: QueryGetCreatePrivEventsRequest): Promise<QueryGetCreatePrivEventsResponse>;
    /** Queries a list of createPrivEvents items. */
    CreatePrivEventsAll(request: QueryAllCreatePrivEventsRequest): Promise<QueryAllCreatePrivEventsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePrivEvents(request: QueryGetCreatePrivEventsRequest): Promise<QueryGetCreatePrivEventsResponse>;
    CreatePrivEventsAll(request: QueryAllCreatePrivEventsRequest): Promise<QueryAllCreatePrivEventsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
