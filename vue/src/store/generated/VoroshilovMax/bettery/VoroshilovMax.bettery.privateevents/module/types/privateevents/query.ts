/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { CreatePrivEvents } from '../privateevents/create_priv_events'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'VoroshilovMax.bettery.privateevents'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetCreatePrivEventsRequest {
  id: number
}

export interface QueryGetCreatePrivEventsResponse {
  CreatePrivEvents: CreatePrivEvents | undefined
}

export interface QueryAllCreatePrivEventsRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllCreatePrivEventsResponse {
  CreatePrivEvents: CreatePrivEvents[]
  pagination: PageResponse | undefined
}

const baseQueryGetCreatePrivEventsRequest: object = { id: 0 }

export const QueryGetCreatePrivEventsRequest = {
  encode(message: QueryGetCreatePrivEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCreatePrivEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCreatePrivEventsRequest } as QueryGetCreatePrivEventsRequest
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

  fromJSON(object: any): QueryGetCreatePrivEventsRequest {
    const message = { ...baseQueryGetCreatePrivEventsRequest } as QueryGetCreatePrivEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetCreatePrivEventsRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCreatePrivEventsRequest>): QueryGetCreatePrivEventsRequest {
    const message = { ...baseQueryGetCreatePrivEventsRequest } as QueryGetCreatePrivEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetCreatePrivEventsResponse: object = {}

export const QueryGetCreatePrivEventsResponse = {
  encode(message: QueryGetCreatePrivEventsResponse, writer: Writer = Writer.create()): Writer {
    if (message.CreatePrivEvents !== undefined) {
      CreatePrivEvents.encode(message.CreatePrivEvents, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCreatePrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCreatePrivEventsResponse } as QueryGetCreatePrivEventsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.CreatePrivEvents = CreatePrivEvents.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCreatePrivEventsResponse {
    const message = { ...baseQueryGetCreatePrivEventsResponse } as QueryGetCreatePrivEventsResponse
    if (object.CreatePrivEvents !== undefined && object.CreatePrivEvents !== null) {
      message.CreatePrivEvents = CreatePrivEvents.fromJSON(object.CreatePrivEvents)
    } else {
      message.CreatePrivEvents = undefined
    }
    return message
  },

  toJSON(message: QueryGetCreatePrivEventsResponse): unknown {
    const obj: any = {}
    message.CreatePrivEvents !== undefined && (obj.CreatePrivEvents = message.CreatePrivEvents ? CreatePrivEvents.toJSON(message.CreatePrivEvents) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCreatePrivEventsResponse>): QueryGetCreatePrivEventsResponse {
    const message = { ...baseQueryGetCreatePrivEventsResponse } as QueryGetCreatePrivEventsResponse
    if (object.CreatePrivEvents !== undefined && object.CreatePrivEvents !== null) {
      message.CreatePrivEvents = CreatePrivEvents.fromPartial(object.CreatePrivEvents)
    } else {
      message.CreatePrivEvents = undefined
    }
    return message
  }
}

const baseQueryAllCreatePrivEventsRequest: object = {}

export const QueryAllCreatePrivEventsRequest = {
  encode(message: QueryAllCreatePrivEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCreatePrivEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCreatePrivEventsRequest } as QueryAllCreatePrivEventsRequest
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

  fromJSON(object: any): QueryAllCreatePrivEventsRequest {
    const message = { ...baseQueryAllCreatePrivEventsRequest } as QueryAllCreatePrivEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCreatePrivEventsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCreatePrivEventsRequest>): QueryAllCreatePrivEventsRequest {
    const message = { ...baseQueryAllCreatePrivEventsRequest } as QueryAllCreatePrivEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllCreatePrivEventsResponse: object = {}

export const QueryAllCreatePrivEventsResponse = {
  encode(message: QueryAllCreatePrivEventsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.CreatePrivEvents) {
      CreatePrivEvents.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCreatePrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCreatePrivEventsResponse } as QueryAllCreatePrivEventsResponse
    message.CreatePrivEvents = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.CreatePrivEvents.push(CreatePrivEvents.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllCreatePrivEventsResponse {
    const message = { ...baseQueryAllCreatePrivEventsResponse } as QueryAllCreatePrivEventsResponse
    message.CreatePrivEvents = []
    if (object.CreatePrivEvents !== undefined && object.CreatePrivEvents !== null) {
      for (const e of object.CreatePrivEvents) {
        message.CreatePrivEvents.push(CreatePrivEvents.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCreatePrivEventsResponse): unknown {
    const obj: any = {}
    if (message.CreatePrivEvents) {
      obj.CreatePrivEvents = message.CreatePrivEvents.map((e) => (e ? CreatePrivEvents.toJSON(e) : undefined))
    } else {
      obj.CreatePrivEvents = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCreatePrivEventsResponse>): QueryAllCreatePrivEventsResponse {
    const message = { ...baseQueryAllCreatePrivEventsResponse } as QueryAllCreatePrivEventsResponse
    message.CreatePrivEvents = []
    if (object.CreatePrivEvents !== undefined && object.CreatePrivEvents !== null) {
      for (const e of object.CreatePrivEvents) {
        message.CreatePrivEvents.push(CreatePrivEvents.fromPartial(e))
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
  /** Queries a createPrivEvents by id. */
  CreatePrivEvents(request: QueryGetCreatePrivEventsRequest): Promise<QueryGetCreatePrivEventsResponse>
  /** Queries a list of createPrivEvents items. */
  CreatePrivEventsAll(request: QueryAllCreatePrivEventsRequest): Promise<QueryAllCreatePrivEventsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreatePrivEvents(request: QueryGetCreatePrivEventsRequest): Promise<QueryGetCreatePrivEventsResponse> {
    const data = QueryGetCreatePrivEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Query', 'CreatePrivEvents', data)
    return promise.then((data) => QueryGetCreatePrivEventsResponse.decode(new Reader(data)))
  }

  CreatePrivEventsAll(request: QueryAllCreatePrivEventsRequest): Promise<QueryAllCreatePrivEventsResponse> {
    const data = QueryAllCreatePrivEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Query', 'CreatePrivEventsAll', data)
    return promise.then((data) => QueryAllCreatePrivEventsResponse.decode(new Reader(data)))
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
