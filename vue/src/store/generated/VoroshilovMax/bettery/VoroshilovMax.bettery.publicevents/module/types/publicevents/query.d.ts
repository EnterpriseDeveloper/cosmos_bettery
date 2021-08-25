import { Reader, Writer } from 'protobufjs/minimal';
import { FihishPubEvent } from '../publicevents/fihish_pub_event';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { ValidPubEvents } from '../publicevents/valid_pub_events';
import { PartPubEvents } from '../publicevents/part_pub_events';
import { CreatePubEvents } from '../publicevents/create_pub_events';
export declare const protobufPackage = "VoroshilovMax.bettery.publicevents";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetFihishPubEventRequest {
    id: number;
}
export interface QueryGetFihishPubEventResponse {
    FihishPubEvent: FihishPubEvent | undefined;
}
export interface QueryAllFihishPubEventRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllFihishPubEventResponse {
    FihishPubEvent: FihishPubEvent[];
    pagination: PageResponse | undefined;
}
export interface QueryGetValidPubEventsRequest {
    id: number;
}
export interface QueryGetValidPubEventsResponse {
    ValidPubEvents: ValidPubEvents | undefined;
}
export interface QueryAllValidPubEventsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllValidPubEventsResponse {
    ValidPubEvents: ValidPubEvents[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPartPubEventsRequest {
    id: number;
}
export interface QueryGetPartPubEventsResponse {
    PartPubEvents: PartPubEvents | undefined;
}
export interface QueryAllPartPubEventsRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPartPubEventsResponse {
    PartPubEvents: PartPubEvents[];
    pagination: PageResponse | undefined;
}
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
export declare const QueryGetFihishPubEventRequest: {
    encode(message: QueryGetFihishPubEventRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetFihishPubEventRequest;
    fromJSON(object: any): QueryGetFihishPubEventRequest;
    toJSON(message: QueryGetFihishPubEventRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetFihishPubEventRequest>): QueryGetFihishPubEventRequest;
};
export declare const QueryGetFihishPubEventResponse: {
    encode(message: QueryGetFihishPubEventResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetFihishPubEventResponse;
    fromJSON(object: any): QueryGetFihishPubEventResponse;
    toJSON(message: QueryGetFihishPubEventResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetFihishPubEventResponse>): QueryGetFihishPubEventResponse;
};
export declare const QueryAllFihishPubEventRequest: {
    encode(message: QueryAllFihishPubEventRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllFihishPubEventRequest;
    fromJSON(object: any): QueryAllFihishPubEventRequest;
    toJSON(message: QueryAllFihishPubEventRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllFihishPubEventRequest>): QueryAllFihishPubEventRequest;
};
export declare const QueryAllFihishPubEventResponse: {
    encode(message: QueryAllFihishPubEventResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllFihishPubEventResponse;
    fromJSON(object: any): QueryAllFihishPubEventResponse;
    toJSON(message: QueryAllFihishPubEventResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllFihishPubEventResponse>): QueryAllFihishPubEventResponse;
};
export declare const QueryGetValidPubEventsRequest: {
    encode(message: QueryGetValidPubEventsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetValidPubEventsRequest;
    fromJSON(object: any): QueryGetValidPubEventsRequest;
    toJSON(message: QueryGetValidPubEventsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetValidPubEventsRequest>): QueryGetValidPubEventsRequest;
};
export declare const QueryGetValidPubEventsResponse: {
    encode(message: QueryGetValidPubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetValidPubEventsResponse;
    fromJSON(object: any): QueryGetValidPubEventsResponse;
    toJSON(message: QueryGetValidPubEventsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetValidPubEventsResponse>): QueryGetValidPubEventsResponse;
};
export declare const QueryAllValidPubEventsRequest: {
    encode(message: QueryAllValidPubEventsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllValidPubEventsRequest;
    fromJSON(object: any): QueryAllValidPubEventsRequest;
    toJSON(message: QueryAllValidPubEventsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllValidPubEventsRequest>): QueryAllValidPubEventsRequest;
};
export declare const QueryAllValidPubEventsResponse: {
    encode(message: QueryAllValidPubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllValidPubEventsResponse;
    fromJSON(object: any): QueryAllValidPubEventsResponse;
    toJSON(message: QueryAllValidPubEventsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllValidPubEventsResponse>): QueryAllValidPubEventsResponse;
};
export declare const QueryGetPartPubEventsRequest: {
    encode(message: QueryGetPartPubEventsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPartPubEventsRequest;
    fromJSON(object: any): QueryGetPartPubEventsRequest;
    toJSON(message: QueryGetPartPubEventsRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPartPubEventsRequest>): QueryGetPartPubEventsRequest;
};
export declare const QueryGetPartPubEventsResponse: {
    encode(message: QueryGetPartPubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPartPubEventsResponse;
    fromJSON(object: any): QueryGetPartPubEventsResponse;
    toJSON(message: QueryGetPartPubEventsResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPartPubEventsResponse>): QueryGetPartPubEventsResponse;
};
export declare const QueryAllPartPubEventsRequest: {
    encode(message: QueryAllPartPubEventsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPartPubEventsRequest;
    fromJSON(object: any): QueryAllPartPubEventsRequest;
    toJSON(message: QueryAllPartPubEventsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPartPubEventsRequest>): QueryAllPartPubEventsRequest;
};
export declare const QueryAllPartPubEventsResponse: {
    encode(message: QueryAllPartPubEventsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPartPubEventsResponse;
    fromJSON(object: any): QueryAllPartPubEventsResponse;
    toJSON(message: QueryAllPartPubEventsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPartPubEventsResponse>): QueryAllPartPubEventsResponse;
};
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
    /** Queries a fihishPubEvent by id. */
    FihishPubEvent(request: QueryGetFihishPubEventRequest): Promise<QueryGetFihishPubEventResponse>;
    /** Queries a list of fihishPubEvent items. */
    FihishPubEventAll(request: QueryAllFihishPubEventRequest): Promise<QueryAllFihishPubEventResponse>;
    /** Queries a validPubEvents by id. */
    ValidPubEvents(request: QueryGetValidPubEventsRequest): Promise<QueryGetValidPubEventsResponse>;
    /** Queries a list of validPubEvents items. */
    ValidPubEventsAll(request: QueryAllValidPubEventsRequest): Promise<QueryAllValidPubEventsResponse>;
    /** Queries a partPubEvents by id. */
    PartPubEvents(request: QueryGetPartPubEventsRequest): Promise<QueryGetPartPubEventsResponse>;
    /** Queries a list of partPubEvents items. */
    PartPubEventsAll(request: QueryAllPartPubEventsRequest): Promise<QueryAllPartPubEventsResponse>;
    /** Queries a createPubEvents by id. */
    CreatePubEvents(request: QueryGetCreatePubEventsRequest): Promise<QueryGetCreatePubEventsResponse>;
    /** Queries a list of createPubEvents items. */
    CreatePubEventsAll(request: QueryAllCreatePubEventsRequest): Promise<QueryAllCreatePubEventsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    FihishPubEvent(request: QueryGetFihishPubEventRequest): Promise<QueryGetFihishPubEventResponse>;
    FihishPubEventAll(request: QueryAllFihishPubEventRequest): Promise<QueryAllFihishPubEventResponse>;
    ValidPubEvents(request: QueryGetValidPubEventsRequest): Promise<QueryGetValidPubEventsResponse>;
    ValidPubEventsAll(request: QueryAllValidPubEventsRequest): Promise<QueryAllValidPubEventsResponse>;
    PartPubEvents(request: QueryGetPartPubEventsRequest): Promise<QueryGetPartPubEventsResponse>;
    PartPubEventsAll(request: QueryAllPartPubEventsRequest): Promise<QueryAllPartPubEventsResponse>;
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
