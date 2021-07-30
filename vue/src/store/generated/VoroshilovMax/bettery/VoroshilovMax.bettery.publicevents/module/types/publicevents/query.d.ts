import { Reader, Writer } from 'protobufjs/minimal';
import { CreatePubEvents } from '../publicevents/create_pub_events';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "VoroshilovMax.bettery.publicevents";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetCreatePubEventsRequest {
    id: number;
}
export interface QueryGetCreatePubEventsResponse {
    CreatePubEvents: CreatePubEvents | undefined;
}
export interface QueryAllCreatePubEventsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllCreatePubEventsResponse {
    CreatePubEvents: CreatePubEvents[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetCreatePubEventsRequest: {
    encode(message: QueryGetCreatePubEventsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCreatePubEventsRequest;
    fromJSON(object: any): QueryGetCreatePubEventsRequest;
    toJSON(message: QueryGetCreatePubEventsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetCreatePubEventsRequest>): QueryGetCreatePubEventsRequest;
};
export declare const QueryGetCreatePubEventsResponse: {
    encode(message: QueryGetCreatePubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetCreatePubEventsResponse;
    fromJSON(object: any): QueryGetCreatePubEventsResponse;
    toJSON(message: QueryGetCreatePubEventsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetCreatePubEventsResponse>): QueryGetCreatePubEventsResponse;
};
export declare const QueryAllCreatePubEventsRequest: {
    encode(message: QueryAllCreatePubEventsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCreatePubEventsRequest;
    fromJSON(object: any): QueryAllCreatePubEventsRequest;
    toJSON(message: QueryAllCreatePubEventsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllCreatePubEventsRequest>): QueryAllCreatePubEventsRequest;
};
export declare const QueryAllCreatePubEventsResponse: {
    encode(message: QueryAllCreatePubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllCreatePubEventsResponse;
    fromJSON(object: any): QueryAllCreatePubEventsResponse;
    toJSON(message: QueryAllCreatePubEventsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllCreatePubEventsResponse>): QueryAllCreatePubEventsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a createPubEvents by id. */
    CreatePubEvents(request: QueryGetCreatePubEventsRequest): Promise<QueryGetCreatePubEventsResponse>;
    /** Queries a list of createPubEvents items. */
    CreatePubEventsAll(request: QueryAllCreatePubEventsRequest): Promise<QueryAllCreatePubEventsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePubEvents(request: QueryGetCreatePubEventsRequest): Promise<QueryGetCreatePubEventsResponse>;
    CreatePubEventsAll(request: QueryAllCreatePubEventsRequest): Promise<QueryAllCreatePubEventsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
