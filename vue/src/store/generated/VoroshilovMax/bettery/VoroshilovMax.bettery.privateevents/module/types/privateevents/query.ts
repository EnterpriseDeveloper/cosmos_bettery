/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { PartPrivEvents } from '../privateevents/part_priv_events'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { CreatePrivEvents } from '../privateevents/create_priv_events'

export const protobufPackage = 'VoroshilovMax.bettery.privateevents'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetPartPrivEventsRequest {
  id: number
}

export interface QueryGetPartPrivEventsResponse {
  PartPrivEvents: PartPrivEvents | undefined
}

export interface QueryAllPartPrivEventsRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllPartPrivEventsResponse {
  PartPrivEvents: PartPrivEvents[]
  pagination: PageResponse | undefined
}

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

const baseQueryGetPartPrivEventsRequest: object = { id: 0 }

export const QueryGetPartPrivEventsRequest = {
  encode(message: QueryGetPartPrivEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPartPrivEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPartPrivEventsRequest } as QueryGetPartPrivEventsRequest
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

  fromJSON(object: any): QueryGetPartPrivEventsRequest {
    const message = { ...baseQueryGetPartPrivEventsRequest } as QueryGetPartPrivEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetPartPrivEventsRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPartPrivEventsRequest>): QueryGetPartPrivEventsRequest {
    const message = { ...baseQueryGetPartPrivEventsRequest } as QueryGetPartPrivEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetPartPrivEventsResponse: object = {}

export const QueryGetPartPrivEventsResponse = {
  encode(message: QueryGetPartPrivEventsResponse, writer: Writer = Writer.create()): Writer {
    if (message.PartPrivEvents !== undefined) {
      PartPrivEvents.encode(message.PartPrivEvents, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPartPrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPartPrivEventsResponse } as QueryGetPartPrivEventsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.PartPrivEvents = PartPrivEvents.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPartPrivEventsResponse {
    const message = { ...baseQueryGetPartPrivEventsResponse } as QueryGetPartPrivEventsResponse
    if (object.PartPrivEvents !== undefined && object.PartPrivEvents !== null) {
      message.PartPrivEvents = PartPrivEvents.fromJSON(object.PartPrivEvents)
    } else {
      message.PartPrivEvents = undefined
    }
    return message
  },

  toJSON(message: QueryGetPartPrivEventsResponse): unknown {
    const obj: any = {}
    message.PartPrivEvents !== undefined && (obj.PartPrivEvents = message.PartPrivEvents ? PartPrivEvents.toJSON(message.PartPrivEvents) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPartPrivEventsResponse>): QueryGetPartPrivEventsResponse {
    const message = { ...baseQueryGetPartPrivEventsResponse } as QueryGetPartPrivEventsResponse
    if (object.PartPrivEvents !== undefined && object.PartPrivEvents !== null) {
      message.PartPrivEvents = PartPrivEvents.fromPartial(object.PartPrivEvents)
    } else {
      message.PartPrivEvents = undefined
    }
    return message
  }
}

const baseQueryAllPartPrivEventsRequest: object = {}

export const QueryAllPartPrivEventsRequest = {
  encode(message: QueryAllPartPrivEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPartPrivEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPartPrivEventsRequest } as QueryAllPartPrivEventsRequest
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

  fromJSON(object: any): QueryAllPartPrivEventsRequest {
    const message = { ...baseQueryAllPartPrivEventsRequest } as QueryAllPartPrivEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPartPrivEventsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPartPrivEventsRequest>): QueryAllPartPrivEventsRequest {
    const message = { ...baseQueryAllPartPrivEventsRequest } as QueryAllPartPrivEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllPartPrivEventsResponse: object = {}

export const QueryAllPartPrivEventsResponse = {
  encode(message: QueryAllPartPrivEventsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.PartPrivEvents) {
      PartPrivEvents.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPartPrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPartPrivEventsResponse } as QueryAllPartPrivEventsResponse
    message.PartPrivEvents = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.PartPrivEvents.push(PartPrivEvents.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllPartPrivEventsResponse {
    const message = { ...baseQueryAllPartPrivEventsResponse } as QueryAllPartPrivEventsResponse
    message.PartPrivEvents = []
    if (object.PartPrivEvents !== undefined && object.PartPrivEvents !== null) {
      for (const e of object.PartPrivEvents) {
        message.PartPrivEvents.push(PartPrivEvents.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPartPrivEventsResponse): unknown {
    const obj: any = {}
    if (message.PartPrivEvents) {
      obj.PartPrivEvents = message.PartPrivEvents.map((e) => (e ? PartPrivEvents.toJSON(e) : undefined))
    } else {
      obj.PartPrivEvents = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPartPrivEventsResponse>): QueryAllPartPrivEventsResponse {
    const message = { ...baseQueryAllPartPrivEventsResponse } as QueryAllPartPrivEventsResponse
    message.PartPrivEvents = []
    if (object.PartPrivEvents !== undefined && object.PartPrivEvents !== null) {
      for (const e of object.PartPrivEvents) {
        message.PartPrivEvents.push(PartPrivEvents.fromPartial(e))
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
  /** Queries a partPrivEvents by id. */
  PartPrivEvents(request: QueryGetPartPrivEventsRequest): Promise<QueryGetPartPrivEventsResponse>
  /** Queries a list of partPrivEvents items. */
  PartPrivEventsAll(request: QueryAllPartPrivEventsRequest): Promise<QueryAllPartPrivEventsResponse>
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
  PartPrivEvents(request: QueryGetPartPrivEventsRequest): Promise<QueryGetPartPrivEventsResponse> {
    const data = QueryGetPartPrivEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Query', 'PartPrivEvents', data)
    return promise.then((data) => QueryGetPartPrivEventsResponse.decode(new Reader(data)))
  }

  PartPrivEventsAll(request: QueryAllPartPrivEventsRequest): Promise<QueryAllPartPrivEventsResponse> {
    const data = QueryAllPartPrivEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Query', 'PartPrivEventsAll', data)
    return promise.then((data) => QueryAllPartPrivEventsResponse.decode(new Reader(data)))
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
