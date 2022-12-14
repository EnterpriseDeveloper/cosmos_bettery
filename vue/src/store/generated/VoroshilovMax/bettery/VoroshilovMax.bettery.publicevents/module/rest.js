/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.securityWorker = null;
        this.abortControllers = new Map();
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((data, key) => {
                data.append(key, input[key]);
                return data;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
            if (this.abortControllers.has(cancelToken)) {
                const abortController = this.abortControllers.get(cancelToken);
                if (abortController) {
                    return abortController.signal;
                }
                return void 0;
            }
            const abortController = new AbortController();
            this.abortControllers.set(cancelToken, abortController);
            return abortController.signal;
        };
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = ({ body, secure, path, type, query, format = "json", baseUrl, cancelToken, ...params }) => {
            const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
            const requestParams = this.mergeRequestParams(params, secureParams);
            const queryString = query && this.toQueryString(query);
            const payloadFormatter = this.contentFormatters[type || ContentType.Json];
            return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
                ...requestParams,
                headers: {
                    ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
                    ...(requestParams.headers || {}),
                },
                signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
                body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
            }).then(async (response) => {
                const r = response;
                r.data = null;
                r.error = null;
                const data = await response[format]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
                        r.error = data;
                    }
                    return r;
                })
                    .catch((e) => {
                    r.error = e;
                    return r;
                });
                if (cancelToken) {
                    this.abortControllers.delete(cancelToken);
                }
                if (!response.ok)
                    throw data;
                return data;
            });
        };
        Object.assign(this, apiConfig);
    }
    addQueryParam(query, key) {
        const value = query[key];
        return (encodeURIComponent(key) +
            "=" +
            encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`));
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => typeof query[key] === "object" && !Array.isArray(query[key])
            ? this.toQueryString(query[key])
            : this.addQueryParam(query, key))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
        return {
            ...this.baseApiParams,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...(this.baseApiParams.headers || {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
}
/**
 * @title publicevents/create_pub_events.proto
 * @version version not set
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryCreatePubEventsAll
         * @summary Queries a list of createPubEvents items.
         * @request GET:/VoroshilovMax/bettery/publicevents/createPubEvents
         */
        this.queryCreatePubEventsAll = (query, params = {}) => this.request({
            path: `/VoroshilovMax/bettery/publicevents/createPubEvents`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryCreatePubEvents
         * @summary Queries a createPubEvents by id.
         * @request GET:/VoroshilovMax/bettery/publicevents/createPubEvents/{id}
         */
        this.queryCreatePubEvents = (id, params = {}) => this.request({
            path: `/VoroshilovMax/bettery/publicevents/createPubEvents/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryFihishPubEventAll
         * @summary Queries a list of fihishPubEvent items.
         * @request GET:/VoroshilovMax/bettery/publicevents/fihishPubEvent
         */
        this.queryFihishPubEventAll = (query, params = {}) => this.request({
            path: `/VoroshilovMax/bettery/publicevents/fihishPubEvent`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryFihishPubEvent
         * @summary Queries a fihishPubEvent by id.
         * @request GET:/VoroshilovMax/bettery/publicevents/fihishPubEvent/{id}
         */
        this.queryFihishPubEvent = (id, params = {}) => this.request({
            path: `/VoroshilovMax/bettery/publicevents/fihishPubEvent/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPartPubEventsAll
         * @summary Queries a list of partPubEvents items.
         * @request GET:/VoroshilovMax/bettery/publicevents/partPubEvents
         */
        this.queryPartPubEventsAll = (query, params = {}) => this.request({
            path: `/VoroshilovMax/bettery/publicevents/partPubEvents`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPartPubEvents
         * @summary Queries a partPubEvents by id.
         * @request GET:/VoroshilovMax/bettery/publicevents/partPubEvents/{id}
         */
        this.queryPartPubEvents = (id, query, params = {}) => this.request({
            path: `/VoroshilovMax/bettery/publicevents/partPubEvents/${id}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryRefPubEventsAll
         * @summary Queries a list of refPubEvents items.
         * @request GET:/VoroshilovMax/bettery/publicevents/refPubEvents
         */
        this.queryRefPubEventsAll = (query, params = {}) => this.request({
            path: `/VoroshilovMax/bettery/publicevents/refPubEvents`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryRefPubEvents
         * @summary Queries a refPubEvents by id.
         * @request GET:/VoroshilovMax/bettery/publicevents/refPubEvents/{id}
         */
        this.queryRefPubEvents = (id, params = {}) => this.request({
            path: `/VoroshilovMax/bettery/publicevents/refPubEvents/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryRefundPubEventsAll
         * @summary Queries a list of refundPubEvents items.
         * @request GET:/VoroshilovMax/bettery/publicevents/refundPubEvents
         */
        this.queryRefundPubEventsAll = (query, params = {}) => this.request({
            path: `/VoroshilovMax/bettery/publicevents/refundPubEvents`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryRefundPubEvents
         * @summary Queries a refundPubEvents by id.
         * @request GET:/VoroshilovMax/bettery/publicevents/refundPubEvents/{id}
         */
        this.queryRefundPubEvents = (id, params = {}) => this.request({
            path: `/VoroshilovMax/bettery/publicevents/refundPubEvents/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryValidPubEventsAll
         * @summary Queries a list of validPubEvents items.
         * @request GET:/VoroshilovMax/bettery/publicevents/validPubEvents
         */
        this.queryValidPubEventsAll = (query, params = {}) => this.request({
            path: `/VoroshilovMax/bettery/publicevents/validPubEvents`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryValidPubEvents
         * @summary Queries a validPubEvents by id.
         * @request GET:/VoroshilovMax/bettery/publicevents/validPubEvents/{id}
         */
        this.queryValidPubEvents = (id, query, params = {}) => this.request({
            path: `/VoroshilovMax/bettery/publicevents/validPubEvents/${id}`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
    }
}
