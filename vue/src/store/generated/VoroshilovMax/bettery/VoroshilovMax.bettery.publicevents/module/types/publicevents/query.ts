/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { CreatePubEvents } from '../publicevents/create_pub_events'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'VoroshilovMax.bettery.publicevents'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetCreatePubEventsRequest {
  id: number
}

export interface QueryGetCreatePubEventsResponse {
  CreatePubEvents: CreatePubEvents | undefined
}

export interface QueryAllCreatePubEventsRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllCreatePubEventsResponse {
  CreatePubEvents: CreatePubEvents[]
  pagination: PageResponse | undefined
}

const baseQueryGetCreatePubEventsRequest: object = { id: 0 }

export const QueryGetCreatePubEventsRequest = {
  encode(message: QueryGetCreatePubEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCreatePubEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCreatePubEventsRequest } as QueryGetCreatePubEventsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCreatePubEventsRequest {
    const message = { ...baseQueryGetCreatePubEventsRequest } as QueryGetCreatePubEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetCreatePubEventsRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCreatePubEventsRequest>): QueryGetCreatePubEventsRequest {
    const message = { ...baseQueryGetCreatePubEventsRequest } as QueryGetCreatePubEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetCreatePubEventsResponse: object = {}

export const QueryGetCreatePubEventsResponse = {
  encode(message: QueryGetCreatePubEventsResponse, writer: Writer = Writer.create()): Writer {
    if (message.CreatePubEvents !== undefined) {
      CreatePubEvents.encode(message.CreatePubEvents, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCreatePubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCreatePubEventsResponse } as QueryGetCreatePubEventsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.CreatePubEvents = CreatePubEvents.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCreatePubEventsResponse {
    const message = { ...baseQueryGetCreatePubEventsResponse } as QueryGetCreatePubEventsResponse
    if (object.CreatePubEvents !== undefined && object.CreatePubEvents !== null) {
      message.CreatePubEvents = CreatePubEvents.fromJSON(object.CreatePubEvents)
    } else {
      message.CreatePubEvents = undefined
    }
    return message
  },

  toJSON(message: QueryGetCreatePubEventsResponse): unknown {
    const obj: any = {}
    message.CreatePubEvents !== undefined && (obj.CreatePubEvents = message.CreatePubEvents ? CreatePubEvents.toJSON(message.CreatePubEvents) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCreatePubEventsResponse>): QueryGetCreatePubEventsResponse {
    const message = { ...baseQueryGetCreatePubEventsResponse } as QueryGetCreatePubEventsResponse
    if (object.CreatePubEvents !== undefined && object.CreatePubEvents !== null) {
      message.CreatePubEvents = CreatePubEvents.fromPartial(object.CreatePubEvents)
    } else {
      message.CreatePubEvents = undefined
    }
    return message
  }
}

const baseQueryAllCreatePubEventsRequest: object = {}

export const QueryAllCreatePubEventsRequest = {
  encode(message: QueryAllCreatePubEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCreatePubEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCreatePubEventsRequest } as QueryAllCreatePubEventsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCreatePubEventsRequest {
    const message = { ...baseQueryAllCreatePubEventsRequest } as QueryAllCreatePubEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCreatePubEventsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCreatePubEventsRequest>): QueryAllCreatePubEventsRequest {
    const message = { ...baseQueryAllCreatePubEventsRequest } as QueryAllCreatePubEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllCreatePubEventsResponse: object = {}

export const QueryAllCreatePubEventsResponse = {
  encode(message: QueryAllCreatePubEventsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.CreatePubEvents) {
      CreatePubEvents.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCreatePubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCreatePubEventsResponse } as QueryAllCreatePubEventsResponse
    message.CreatePubEvents = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.CreatePubEvents.push(CreatePubEvents.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCreatePubEventsResponse {
    const message = { ...baseQueryAllCreatePubEventsResponse } as QueryAllCreatePubEventsResponse
    message.CreatePubEvents = []
    if (object.CreatePubEvents !== undefined && object.CreatePubEvents !== null) {
      for (const e of object.CreatePubEvents) {
        message.CreatePubEvents.push(CreatePubEvents.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCreatePubEventsResponse): unknown {
    const obj: any = {}
    if (message.CreatePubEvents) {
      obj.CreatePubEvents = message.CreatePubEvents.map((e) => (e ? CreatePubEvents.toJSON(e) : undefined))
    } else {
      obj.CreatePubEvents = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCreatePubEventsResponse>): QueryAllCreatePubEventsResponse {
    const message = { ...baseQueryAllCreatePubEventsResponse } as QueryAllCreatePubEventsResponse
    message.CreatePubEvents = []
    if (object.CreatePubEvents !== undefined && object.CreatePubEvents !== null) {
      for (const e of object.CreatePubEvents) {
        message.CreatePubEvents.push(CreatePubEvents.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a createPubEvents by id. */
  CreatePubEvents(request: QueryGetCreatePubEventsRequest): Promise<QueryGetCreatePubEventsResponse>
  /** Queries a list of createPubEvents items. */
  CreatePubEventsAll(request: QueryAllCreatePubEventsRequest): Promise<QueryAllCreatePubEventsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreatePubEvents(request: QueryGetCreatePubEventsRequest): Promise<QueryGetCreatePubEventsResponse> {
    const data = QueryGetCreatePubEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'CreatePubEvents', data)
    return promise.then((data) => QueryGetCreatePubEventsResponse.decode(new Reader(data)))
  }

  CreatePubEventsAll(request: QueryAllCreatePubEventsRequest): Promise<QueryAllCreatePubEventsResponse> {
    const data = QueryAllCreatePubEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'CreatePubEventsAll', data)
    return promise.then((data) => QueryAllCreatePubEventsResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
