export interface ProtobufAny {
    "@type"?: string;
}
export interface PubliceventsCreatePubEvents {
    creator?: string;
    /** @format uint64 */
    pubId?: string;
    question?: string;
    answers?: string[];
    premAmount?: string;
    /** @format int64 */
    startTime?: string;
    /** @format int64 */
    endTime?: string;
    /** @format int64 */
    expertAmount?: string;
    advisor?: string;
    calcExpert?: boolean;
}
export interface PubliceventsFihishPubEvent {
    creator?: string;
    /** @format uint64 */
    pubId?: string;
    pool?: boolean;
    reverted?: boolean;
    finished?: boolean;
    /** @format int64 */
    correctAnswer?: number;
    tokenMinted?: string;
    status?: string;
}
export interface PubliceventsMsgCreateCreatePubEventsResponse {
    /** @format uint64 */
    id?: string;
}
export interface PubliceventsMsgCreateFihishPubEventResponse {
    /** @format uint64 */
    id?: string;
}
export interface PubliceventsMsgCreatePartPubEventsResponse {
    /** @format uint64 */
    id?: string;
}
export interface PubliceventsMsgCreateRefPubEventsResponse {
    /** @format uint64 */
    id?: string;
}
export interface PubliceventsMsgCreateRefundPubEventsResponse {
    /** @format uint64 */
    id?: string;
}
export interface PubliceventsMsgCreateValidPubEventsResponse {
    /** @format uint64 */
    id?: string;
}
export interface PubliceventsPartPubEvents {
    creator?: string;
    /** @format uint64 */
    id?: string;
    /** @format uint64 */
    pubId?: string;
    answers?: string;
    amount?: string;
    /** @format int64 */
    answerIndex?: number;
}
export interface PubliceventsQueryAllCreatePubEventsResponse {
    CreatePubEvents?: PubliceventsCreatePubEvents[];
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
export interface PubliceventsQueryAllFihishPubEventResponse {
    FihishPubEvent?: PubliceventsFihishPubEvent[];
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
export interface PubliceventsQueryAllPartPubEventsResponse {
    PartPubEvents?: PubliceventsPartPubEvents[];
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
export interface PubliceventsQueryAllRefPubEventsResponse {
    RefPubEvents?: PubliceventsRefPubEvents[];
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
export interface PubliceventsQueryAllRefundPubEventsResponse {
    RefundPubEvents?: PubliceventsRefundPubEvents[];
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
export interface PubliceventsQueryAllValidPubEventsResponse {
    ValidPubEvents?: PubliceventsValidPubEvents[];
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
export interface PubliceventsQueryGetCreatePubEventsResponse {
    CreatePubEvents?: PubliceventsCreatePubEvents;
}
export interface PubliceventsQueryGetFihishPubEventResponse {
    FihishPubEvent?: PubliceventsFihishPubEvent;
}
export interface PubliceventsQueryGetPartPubEventsResponse {
    PartPubEvents?: PubliceventsPartPubEvents;
}
export interface PubliceventsQueryGetRefPubEventsResponse {
    RefPubEvents?: PubliceventsRefPubEvents;
}
export interface PubliceventsQueryGetRefundPubEventsResponse {
    RefundPubEvents?: PubliceventsRefundPubEvents;
}
export interface PubliceventsQueryGetValidPubEventsResponse {
    ValidPubEvents?: PubliceventsValidPubEvents;
}
export interface PubliceventsRefPubEvents {
    creator?: string;
    /** @format uint64 */
    pubId?: string;
    refOneAddr?: string[];
    refOneAmount?: string[];
    refTwoAddr?: string[];
    refTwoAmount?: string[];
    refThreeAddr?: string[];
    refThreeAmount?: string[];
    payToComp?: string;
}
export interface PubliceventsRefundPubEvents {
    creator?: string;
    /** @format uint64 */
    pubId?: string;
    purpose?: string;
}
export interface PubliceventsValidPubEvents {
    creator?: string;
    /** @format uint64 */
    id?: string;
    /** @format uint64 */
    pubId?: string;
    answers?: string;
    /** @format int64 */
    reput?: string;
    /** @format int64 */
    answerIndex?: number;
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
 * @title publicevents/create_pub_events.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryCreatePubEventsAll
     * @summary Queries a list of createPubEvents items.
     * @request GET:/VoroshilovMax/bettery/publicevents/createPubEvents
     */
    queryCreatePubEventsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PubliceventsQueryAllCreatePubEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryCreatePubEvents
     * @summary Queries a createPubEvents by id.
     * @request GET:/VoroshilovMax/bettery/publicevents/createPubEvents/{id}
     */
    queryCreatePubEvents: (id: string, params?: RequestParams) => Promise<HttpResponse<PubliceventsQueryGetCreatePubEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryFihishPubEventAll
     * @summary Queries a list of fihishPubEvent items.
     * @request GET:/VoroshilovMax/bettery/publicevents/fihishPubEvent
     */
    queryFihishPubEventAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PubliceventsQueryAllFihishPubEventResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryFihishPubEvent
     * @summary Queries a fihishPubEvent by id.
     * @request GET:/VoroshilovMax/bettery/publicevents/fihishPubEvent/{id}
     */
    queryFihishPubEvent: (id: string, params?: RequestParams) => Promise<HttpResponse<PubliceventsQueryGetFihishPubEventResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPartPubEventsAll
     * @summary Queries a list of partPubEvents items.
     * @request GET:/VoroshilovMax/bettery/publicevents/partPubEvents
     */
    queryPartPubEventsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PubliceventsQueryAllPartPubEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPartPubEvents
     * @summary Queries a partPubEvents by id.
     * @request GET:/VoroshilovMax/bettery/publicevents/partPubEvents/{id}
     */
    queryPartPubEvents: (id: string, params?: RequestParams) => Promise<HttpResponse<PubliceventsQueryGetPartPubEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryRefPubEventsAll
     * @summary Queries a list of refPubEvents items.
     * @request GET:/VoroshilovMax/bettery/publicevents/refPubEvents
     */
    queryRefPubEventsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PubliceventsQueryAllRefPubEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryRefPubEvents
     * @summary Queries a refPubEvents by id.
     * @request GET:/VoroshilovMax/bettery/publicevents/refPubEvents/{id}
     */
    queryRefPubEvents: (id: string, params?: RequestParams) => Promise<HttpResponse<PubliceventsQueryGetRefPubEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryRefundPubEventsAll
     * @summary Queries a list of refundPubEvents items.
     * @request GET:/VoroshilovMax/bettery/publicevents/refundPubEvents
     */
    queryRefundPubEventsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PubliceventsQueryAllRefundPubEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryRefundPubEvents
     * @summary Queries a refundPubEvents by id.
     * @request GET:/VoroshilovMax/bettery/publicevents/refundPubEvents/{id}
     */
    queryRefundPubEvents: (id: string, params?: RequestParams) => Promise<HttpResponse<PubliceventsQueryGetRefundPubEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryValidPubEventsAll
     * @summary Queries a list of validPubEvents items.
     * @request GET:/VoroshilovMax/bettery/publicevents/validPubEvents
     */
    queryValidPubEventsAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<PubliceventsQueryAllValidPubEventsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryValidPubEvents
     * @summary Queries a validPubEvents by id.
     * @request GET:/VoroshilovMax/bettery/publicevents/validPubEvents/{id}
     */
    queryValidPubEvents: (id: string, params?: RequestParams) => Promise<HttpResponse<PubliceventsQueryGetValidPubEventsResponse, RpcStatus>>;
}
export {};
