export interface PrivateeventsCreatePrivEvents {
    creator?: string;
    /** @format uint64 */
    privId?: string;
    question?: string;
    answers?: string[];
    winner?: string;
    loser?: string;
    /** @format uint64 */
    startTime?: string;
    /** @format uint64 */
    endTime?: string;
    finished?: boolean;
}
export interface PrivateeventsMsgCreateCreatePrivEventsResponse {
    /** @format uint64 */
    id?: string;
}
export interface PrivateeventsMsgCreatePartPrivEventsResponse {
    /** @format uint64 */
    id?: string;
}
export interface PrivateeventsMsgCreateValidPrivEventsResponse {
    /** @format uint64 */
    id?: string;
}
export interface PrivateeventsPartPrivEvents {
    creator?: string;
    /** @format uint64 */
    id?: string;
    /** @format uint64 */
    privId?: string;
    answer?: string;
}
export interface PrivateeventsQueryAllCreatePrivEventsResponse {
    CreatePrivEvents?: PrivateeventsCreatePrivEvents[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PrivateeventsQueryAllPartPrivEventsResponse {
    PartPrivEvents?: PrivateeventsPartPrivEvents[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PrivateeventsQueryAllValidPrivEventsResponse {
    ValidPrivEvents?: PrivateeventsValidPrivEvents[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface PrivateeventsQueryGetCreatePrivEventsResponse {
    CreatePrivEvents?: PrivateeventsCreatePrivEvents;
}
export interface PrivateeventsQueryGetPartPrivEventsResponse {
    PartPrivEvents?: PrivateeventsPartPrivEvents;
}
export interface PrivateeventsQueryGetValidPrivEventsResponse {
    ValidPrivEvents?: PrivateeventsValidPrivEvents;
}
export interface PrivateeventsValidPrivEvents {
    creator?: string;
    /** @format uint64 */
    id?: string;
    /** @format uint64 */
    privId?: string;
    answer?: string;
}
export interface ProtobufAny {
    typeUrl?: string;
    /** @format byte */
    value?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title privateevents/create_priv_events.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryCreatePrivEventsAll
     * @summary Queries a list of createPrivEvents items.
     * @request GET:/VoroshilovMax/bettery/privateevents/createPrivEvents
     */
    queryCreatePrivEventsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PrivateeventsQueryAllCreatePrivEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryCreatePrivEvents
     * @summary Queries a createPrivEvents by id.
     * @request GET:/VoroshilovMax/bettery/privateevents/createPrivEvents/{id}
     */
    queryCreatePrivEvents: (id: string, params?: RequestParams) => Promise<HttpResponse<PrivateeventsQueryGetCreatePrivEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPartPrivEventsAll
     * @summary Queries a list of partPrivEvents items.
     * @request GET:/VoroshilovMax/bettery/privateevents/partPrivEvents
     */
    queryPartPrivEventsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PrivateeventsQueryAllPartPrivEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPartPrivEvents
     * @summary Queries a partPrivEvents by id.
     * @request GET:/VoroshilovMax/bettery/privateevents/partPrivEvents/{id}
     */
    queryPartPrivEvents: (id: string, params?: RequestParams) => Promise<HttpResponse<PrivateeventsQueryGetPartPrivEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryValidPrivEventsAll
     * @summary Queries a list of validPrivEvents items.
     * @request GET:/VoroshilovMax/bettery/privateevents/validPrivEvents
     */
    queryValidPrivEventsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PrivateeventsQueryAllValidPrivEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryValidPrivEvents
     * @summary Queries a validPrivEvents by id.
     * @request GET:/VoroshilovMax/bettery/privateevents/validPrivEvents/{id}
     */
    queryValidPrivEvents: (id: string, params?: RequestParams) => Promise<HttpResponse<PrivateeventsQueryGetValidPrivEventsResponse, RpcStatus>>;
}
export {};
