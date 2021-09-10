/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { SwipeBet } from '../funds/swipe_bet'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { MintBet } from '../funds/mint_bet'

export const protobufPackage = 'VoroshilovMax.bettery.funds'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetSwipeBetRequest {
  id: number
}

export interface QueryGetSwipeBetResponse {
  SwipeBet: SwipeBet | undefined
}

export interface QueryAllSwipeBetRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSwipeBetResponse {
  SwipeBet: SwipeBet[]
  pagination: PageResponse | undefined
}

export interface QueryGetMintBetRequest {
  id: number
}

export interface QueryGetMintBetResponse {
  MintBet: MintBet | undefined
}

export interface QueryAllMintBetRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllMintBetResponse {
  MintBet: MintBet[]
  pagination: PageResponse | undefined
}

const baseQueryGetSwipeBetRequest: object = { id: 0 }

export const QueryGetSwipeBetRequest = {
  encode(message: QueryGetSwipeBetRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSwipeBetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSwipeBetRequest } as QueryGetSwipeBetRequest
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

  fromJSON(object: any): QueryGetSwipeBetRequest {
    const message = { ...baseQueryGetSwipeBetRequest } as QueryGetSwipeBetRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetSwipeBetRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSwipeBetRequest>): QueryGetSwipeBetRequest {
    const message = { ...baseQueryGetSwipeBetRequest } as QueryGetSwipeBetRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetSwipeBetResponse: object = {}

export const QueryGetSwipeBetResponse = {
  encode(message: QueryGetSwipeBetResponse, writer: Writer = Writer.create()): Writer {
    if (message.SwipeBet !== undefined) {
      SwipeBet.encode(message.SwipeBet, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSwipeBetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSwipeBetResponse } as QueryGetSwipeBetResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SwipeBet = SwipeBet.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSwipeBetResponse {
    const message = { ...baseQueryGetSwipeBetResponse } as QueryGetSwipeBetResponse
    if (object.SwipeBet !== undefined && object.SwipeBet !== null) {
      message.SwipeBet = SwipeBet.fromJSON(object.SwipeBet)
    } else {
      message.SwipeBet = undefined
    }
    return message
  },

  toJSON(message: QueryGetSwipeBetResponse): unknown {
    const obj: any = {}
    message.SwipeBet !== undefined && (obj.SwipeBet = message.SwipeBet ? SwipeBet.toJSON(message.SwipeBet) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSwipeBetResponse>): QueryGetSwipeBetResponse {
    const message = { ...baseQueryGetSwipeBetResponse } as QueryGetSwipeBetResponse
    if (object.SwipeBet !== undefined && object.SwipeBet !== null) {
      message.SwipeBet = SwipeBet.fromPartial(object.SwipeBet)
    } else {
      message.SwipeBet = undefined
    }
    return message
  }
}

const baseQueryAllSwipeBetRequest: object = {}

export const QueryAllSwipeBetRequest = {
  encode(message: QueryAllSwipeBetRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSwipeBetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSwipeBetRequest } as QueryAllSwipeBetRequest
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

  fromJSON(object: any): QueryAllSwipeBetRequest {
    const message = { ...baseQueryAllSwipeBetRequest } as QueryAllSwipeBetRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSwipeBetRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSwipeBetRequest>): QueryAllSwipeBetRequest {
    const message = { ...baseQueryAllSwipeBetRequest } as QueryAllSwipeBetRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSwipeBetResponse: object = {}

export const QueryAllSwipeBetResponse = {
  encode(message: QueryAllSwipeBetResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.SwipeBet) {
      SwipeBet.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSwipeBetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSwipeBetResponse } as QueryAllSwipeBetResponse
    message.SwipeBet = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.SwipeBet.push(SwipeBet.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllSwipeBetResponse {
    const message = { ...baseQueryAllSwipeBetResponse } as QueryAllSwipeBetResponse
    message.SwipeBet = []
    if (object.SwipeBet !== undefined && object.SwipeBet !== null) {
      for (const e of object.SwipeBet) {
        message.SwipeBet.push(SwipeBet.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSwipeBetResponse): unknown {
    const obj: any = {}
    if (message.SwipeBet) {
      obj.SwipeBet = message.SwipeBet.map((e) => (e ? SwipeBet.toJSON(e) : undefined))
    } else {
      obj.SwipeBet = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSwipeBetResponse>): QueryAllSwipeBetResponse {
    const message = { ...baseQueryAllSwipeBetResponse } as QueryAllSwipeBetResponse
    message.SwipeBet = []
    if (object.SwipeBet !== undefined && object.SwipeBet !== null) {
      for (const e of object.SwipeBet) {
        message.SwipeBet.push(SwipeBet.fromPartial(e))
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

const baseQueryGetMintBetRequest: object = { id: 0 }

export const QueryGetMintBetRequest = {
  encode(message: QueryGetMintBetRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMintBetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetMintBetRequest } as QueryGetMintBetRequest
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

  fromJSON(object: any): QueryGetMintBetRequest {
    const message = { ...baseQueryGetMintBetRequest } as QueryGetMintBetRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetMintBetRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetMintBetRequest>): QueryGetMintBetRequest {
    const message = { ...baseQueryGetMintBetRequest } as QueryGetMintBetRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetMintBetResponse: object = {}

export const QueryGetMintBetResponse = {
  encode(message: QueryGetMintBetResponse, writer: Writer = Writer.create()): Writer {
    if (message.MintBet !== undefined) {
      MintBet.encode(message.MintBet, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMintBetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetMintBetResponse } as QueryGetMintBetResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.MintBet = MintBet.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetMintBetResponse {
    const message = { ...baseQueryGetMintBetResponse } as QueryGetMintBetResponse
    if (object.MintBet !== undefined && object.MintBet !== null) {
      message.MintBet = MintBet.fromJSON(object.MintBet)
    } else {
      message.MintBet = undefined
    }
    return message
  },

  toJSON(message: QueryGetMintBetResponse): unknown {
    const obj: any = {}
    message.MintBet !== undefined && (obj.MintBet = message.MintBet ? MintBet.toJSON(message.MintBet) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetMintBetResponse>): QueryGetMintBetResponse {
    const message = { ...baseQueryGetMintBetResponse } as QueryGetMintBetResponse
    if (object.MintBet !== undefined && object.MintBet !== null) {
      message.MintBet = MintBet.fromPartial(object.MintBet)
    } else {
      message.MintBet = undefined
    }
    return message
  }
}

const baseQueryAllMintBetRequest: object = {}

export const QueryAllMintBetRequest = {
  encode(message: QueryAllMintBetRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMintBetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllMintBetRequest } as QueryAllMintBetRequest
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

  fromJSON(object: any): QueryAllMintBetRequest {
    const message = { ...baseQueryAllMintBetRequest } as QueryAllMintBetRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllMintBetRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllMintBetRequest>): QueryAllMintBetRequest {
    const message = { ...baseQueryAllMintBetRequest } as QueryAllMintBetRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllMintBetResponse: object = {}

export const QueryAllMintBetResponse = {
  encode(message: QueryAllMintBetResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.MintBet) {
      MintBet.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMintBetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllMintBetResponse } as QueryAllMintBetResponse
    message.MintBet = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.MintBet.push(MintBet.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllMintBetResponse {
    const message = { ...baseQueryAllMintBetResponse } as QueryAllMintBetResponse
    message.MintBet = []
    if (object.MintBet !== undefined && object.MintBet !== null) {
      for (const e of object.MintBet) {
        message.MintBet.push(MintBet.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllMintBetResponse): unknown {
    const obj: any = {}
    if (message.MintBet) {
      obj.MintBet = message.MintBet.map((e) => (e ? MintBet.toJSON(e) : undefined))
    } else {
      obj.MintBet = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllMintBetResponse>): QueryAllMintBetResponse {
    const message = { ...baseQueryAllMintBetResponse } as QueryAllMintBetResponse
    message.MintBet = []
    if (object.MintBet !== undefined && object.MintBet !== null) {
      for (const e of object.MintBet) {
        message.MintBet.push(MintBet.fromPartial(e))
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
  /** Queries a swipeBet by id. */
  SwipeBet(request: QueryGetSwipeBetRequest): Promise<QueryGetSwipeBetResponse>
  /** Queries a list of swipeBet items. */
  SwipeBetAll(request: QueryAllSwipeBetRequest): Promise<QueryAllSwipeBetResponse>
  /** Queries a mintBet by id. */
  MintBet(request: QueryGetMintBetRequest): Promise<QueryGetMintBetResponse>
  /** Queries a list of mintBet items. */
  MintBetAll(request: QueryAllMintBetRequest): Promise<QueryAllMintBetResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  SwipeBet(request: QueryGetSwipeBetRequest): Promise<QueryGetSwipeBetResponse> {
    const data = QueryGetSwipeBetRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.funds.Query', 'SwipeBet', data)
    return promise.then((data) => QueryGetSwipeBetResponse.decode(new Reader(data)))
  }

  SwipeBetAll(request: QueryAllSwipeBetRequest): Promise<QueryAllSwipeBetResponse> {
    const data = QueryAllSwipeBetRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.funds.Query', 'SwipeBetAll', data)
    return promise.then((data) => QueryAllSwipeBetResponse.decode(new Reader(data)))
  }

  MintBet(request: QueryGetMintBetRequest): Promise<QueryGetMintBetResponse> {
    const data = QueryGetMintBetRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.funds.Query', 'MintBet', data)
    return promise.then((data) => QueryGetMintBetResponse.decode(new Reader(data)))
  }

  MintBetAll(request: QueryAllMintBetRequest): Promise<QueryAllMintBetResponse> {
    const data = QueryAllMintBetRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.funds.Query', 'MintBetAll', data)
    return promise.then((data) => QueryAllMintBetResponse.decode(new Reader(data)))
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
