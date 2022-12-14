/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { RefundPubEvents } from '../publicevents/refund_pub_events'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { RefPubEvents } from '../publicevents/ref_pub_events'
import { FihishPubEvent } from '../publicevents/fihish_pub_event'
import { ValidPubEvents } from '../publicevents/valid_pub_events'
import { PartPubEvents } from '../publicevents/part_pub_events'
import { CreatePubEvents } from '../publicevents/create_pub_events'

export const protobufPackage = 'VoroshilovMax.bettery.publicevents'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetRefundPubEventsRequest {
  id: number
}

export interface QueryGetRefundPubEventsResponse {
  RefundPubEvents: RefundPubEvents | undefined
}

export interface QueryAllRefundPubEventsRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllRefundPubEventsResponse {
  RefundPubEvents: RefundPubEvents[]
  pagination: PageResponse | undefined
}

export interface QueryGetRefPubEventsRequest {
  id: number
}

export interface QueryGetRefPubEventsResponse {
  RefPubEvents: RefPubEvents | undefined
}

export interface QueryAllRefPubEventsRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllRefPubEventsResponse {
  RefPubEvents: RefPubEvents[]
  pagination: PageResponse | undefined
}

export interface QueryGetFihishPubEventRequest {
  id: number
}

export interface QueryGetFihishPubEventResponse {
  FihishPubEvent: FihishPubEvent | undefined
}

export interface QueryAllFihishPubEventRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllFihishPubEventResponse {
  FihishPubEvent: FihishPubEvent[]
  pagination: PageResponse | undefined
}

export interface QueryGetValidPubEventsRequest {
  id: number
  pagination: PageRequest | undefined
}

export interface QueryGetValidPubEventsResponse {
  ValidPubEvents: ValidPubEvents[]
  pagination: PageResponse | undefined
}

export interface QueryAllValidPubEventsRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllValidPubEventsResponse {
  ValidPubEvents: ValidPubEvents[]
  pagination: PageResponse | undefined
}

export interface QueryGetPartPubEventsRequest {
  id: number
  pagination: PageRequest | undefined
}

export interface QueryGetPartPubEventsResponse {
  PartPubEvents: PartPubEvents[]
  pagination: PageResponse | undefined
}

export interface QueryAllPartPubEventsRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllPartPubEventsResponse {
  PartPubEvents: PartPubEvents[]
  pagination: PageResponse | undefined
}

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

const baseQueryGetRefundPubEventsRequest: object = { id: 0 }

export const QueryGetRefundPubEventsRequest = {
  encode(message: QueryGetRefundPubEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRefundPubEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRefundPubEventsRequest } as QueryGetRefundPubEventsRequest
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

  fromJSON(object: any): QueryGetRefundPubEventsRequest {
    const message = { ...baseQueryGetRefundPubEventsRequest } as QueryGetRefundPubEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetRefundPubEventsRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRefundPubEventsRequest>): QueryGetRefundPubEventsRequest {
    const message = { ...baseQueryGetRefundPubEventsRequest } as QueryGetRefundPubEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetRefundPubEventsResponse: object = {}

export const QueryGetRefundPubEventsResponse = {
  encode(message: QueryGetRefundPubEventsResponse, writer: Writer = Writer.create()): Writer {
    if (message.RefundPubEvents !== undefined) {
      RefundPubEvents.encode(message.RefundPubEvents, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRefundPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRefundPubEventsResponse } as QueryGetRefundPubEventsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.RefundPubEvents = RefundPubEvents.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetRefundPubEventsResponse {
    const message = { ...baseQueryGetRefundPubEventsResponse } as QueryGetRefundPubEventsResponse
    if (object.RefundPubEvents !== undefined && object.RefundPubEvents !== null) {
      message.RefundPubEvents = RefundPubEvents.fromJSON(object.RefundPubEvents)
    } else {
      message.RefundPubEvents = undefined
    }
    return message
  },

  toJSON(message: QueryGetRefundPubEventsResponse): unknown {
    const obj: any = {}
    message.RefundPubEvents !== undefined && (obj.RefundPubEvents = message.RefundPubEvents ? RefundPubEvents.toJSON(message.RefundPubEvents) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRefundPubEventsResponse>): QueryGetRefundPubEventsResponse {
    const message = { ...baseQueryGetRefundPubEventsResponse } as QueryGetRefundPubEventsResponse
    if (object.RefundPubEvents !== undefined && object.RefundPubEvents !== null) {
      message.RefundPubEvents = RefundPubEvents.fromPartial(object.RefundPubEvents)
    } else {
      message.RefundPubEvents = undefined
    }
    return message
  }
}

const baseQueryAllRefundPubEventsRequest: object = {}

export const QueryAllRefundPubEventsRequest = {
  encode(message: QueryAllRefundPubEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRefundPubEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllRefundPubEventsRequest } as QueryAllRefundPubEventsRequest
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

  fromJSON(object: any): QueryAllRefundPubEventsRequest {
    const message = { ...baseQueryAllRefundPubEventsRequest } as QueryAllRefundPubEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllRefundPubEventsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllRefundPubEventsRequest>): QueryAllRefundPubEventsRequest {
    const message = { ...baseQueryAllRefundPubEventsRequest } as QueryAllRefundPubEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllRefundPubEventsResponse: object = {}

export const QueryAllRefundPubEventsResponse = {
  encode(message: QueryAllRefundPubEventsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.RefundPubEvents) {
      RefundPubEvents.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRefundPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllRefundPubEventsResponse } as QueryAllRefundPubEventsResponse
    message.RefundPubEvents = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.RefundPubEvents.push(RefundPubEvents.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllRefundPubEventsResponse {
    const message = { ...baseQueryAllRefundPubEventsResponse } as QueryAllRefundPubEventsResponse
    message.RefundPubEvents = []
    if (object.RefundPubEvents !== undefined && object.RefundPubEvents !== null) {
      for (const e of object.RefundPubEvents) {
        message.RefundPubEvents.push(RefundPubEvents.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllRefundPubEventsResponse): unknown {
    const obj: any = {}
    if (message.RefundPubEvents) {
      obj.RefundPubEvents = message.RefundPubEvents.map((e) => (e ? RefundPubEvents.toJSON(e) : undefined))
    } else {
      obj.RefundPubEvents = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllRefundPubEventsResponse>): QueryAllRefundPubEventsResponse {
    const message = { ...baseQueryAllRefundPubEventsResponse } as QueryAllRefundPubEventsResponse
    message.RefundPubEvents = []
    if (object.RefundPubEvents !== undefined && object.RefundPubEvents !== null) {
      for (const e of object.RefundPubEvents) {
        message.RefundPubEvents.push(RefundPubEvents.fromPartial(e))
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

const baseQueryGetRefPubEventsRequest: object = { id: 0 }

export const QueryGetRefPubEventsRequest = {
  encode(message: QueryGetRefPubEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRefPubEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRefPubEventsRequest } as QueryGetRefPubEventsRequest
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

  fromJSON(object: any): QueryGetRefPubEventsRequest {
    const message = { ...baseQueryGetRefPubEventsRequest } as QueryGetRefPubEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetRefPubEventsRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRefPubEventsRequest>): QueryGetRefPubEventsRequest {
    const message = { ...baseQueryGetRefPubEventsRequest } as QueryGetRefPubEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetRefPubEventsResponse: object = {}

export const QueryGetRefPubEventsResponse = {
  encode(message: QueryGetRefPubEventsResponse, writer: Writer = Writer.create()): Writer {
    if (message.RefPubEvents !== undefined) {
      RefPubEvents.encode(message.RefPubEvents, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRefPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRefPubEventsResponse } as QueryGetRefPubEventsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.RefPubEvents = RefPubEvents.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetRefPubEventsResponse {
    const message = { ...baseQueryGetRefPubEventsResponse } as QueryGetRefPubEventsResponse
    if (object.RefPubEvents !== undefined && object.RefPubEvents !== null) {
      message.RefPubEvents = RefPubEvents.fromJSON(object.RefPubEvents)
    } else {
      message.RefPubEvents = undefined
    }
    return message
  },

  toJSON(message: QueryGetRefPubEventsResponse): unknown {
    const obj: any = {}
    message.RefPubEvents !== undefined && (obj.RefPubEvents = message.RefPubEvents ? RefPubEvents.toJSON(message.RefPubEvents) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRefPubEventsResponse>): QueryGetRefPubEventsResponse {
    const message = { ...baseQueryGetRefPubEventsResponse } as QueryGetRefPubEventsResponse
    if (object.RefPubEvents !== undefined && object.RefPubEvents !== null) {
      message.RefPubEvents = RefPubEvents.fromPartial(object.RefPubEvents)
    } else {
      message.RefPubEvents = undefined
    }
    return message
  }
}

const baseQueryAllRefPubEventsRequest: object = {}

export const QueryAllRefPubEventsRequest = {
  encode(message: QueryAllRefPubEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRefPubEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllRefPubEventsRequest } as QueryAllRefPubEventsRequest
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

  fromJSON(object: any): QueryAllRefPubEventsRequest {
    const message = { ...baseQueryAllRefPubEventsRequest } as QueryAllRefPubEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllRefPubEventsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllRefPubEventsRequest>): QueryAllRefPubEventsRequest {
    const message = { ...baseQueryAllRefPubEventsRequest } as QueryAllRefPubEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllRefPubEventsResponse: object = {}

export const QueryAllRefPubEventsResponse = {
  encode(message: QueryAllRefPubEventsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.RefPubEvents) {
      RefPubEvents.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRefPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllRefPubEventsResponse } as QueryAllRefPubEventsResponse
    message.RefPubEvents = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.RefPubEvents.push(RefPubEvents.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllRefPubEventsResponse {
    const message = { ...baseQueryAllRefPubEventsResponse } as QueryAllRefPubEventsResponse
    message.RefPubEvents = []
    if (object.RefPubEvents !== undefined && object.RefPubEvents !== null) {
      for (const e of object.RefPubEvents) {
        message.RefPubEvents.push(RefPubEvents.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllRefPubEventsResponse): unknown {
    const obj: any = {}
    if (message.RefPubEvents) {
      obj.RefPubEvents = message.RefPubEvents.map((e) => (e ? RefPubEvents.toJSON(e) : undefined))
    } else {
      obj.RefPubEvents = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllRefPubEventsResponse>): QueryAllRefPubEventsResponse {
    const message = { ...baseQueryAllRefPubEventsResponse } as QueryAllRefPubEventsResponse
    message.RefPubEvents = []
    if (object.RefPubEvents !== undefined && object.RefPubEvents !== null) {
      for (const e of object.RefPubEvents) {
        message.RefPubEvents.push(RefPubEvents.fromPartial(e))
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

const baseQueryGetFihishPubEventRequest: object = { id: 0 }

export const QueryGetFihishPubEventRequest = {
  encode(message: QueryGetFihishPubEventRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetFihishPubEventRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetFihishPubEventRequest } as QueryGetFihishPubEventRequest
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

  fromJSON(object: any): QueryGetFihishPubEventRequest {
    const message = { ...baseQueryGetFihishPubEventRequest } as QueryGetFihishPubEventRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetFihishPubEventRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetFihishPubEventRequest>): QueryGetFihishPubEventRequest {
    const message = { ...baseQueryGetFihishPubEventRequest } as QueryGetFihishPubEventRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetFihishPubEventResponse: object = {}

export const QueryGetFihishPubEventResponse = {
  encode(message: QueryGetFihishPubEventResponse, writer: Writer = Writer.create()): Writer {
    if (message.FihishPubEvent !== undefined) {
      FihishPubEvent.encode(message.FihishPubEvent, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetFihishPubEventResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetFihishPubEventResponse } as QueryGetFihishPubEventResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.FihishPubEvent = FihishPubEvent.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetFihishPubEventResponse {
    const message = { ...baseQueryGetFihishPubEventResponse } as QueryGetFihishPubEventResponse
    if (object.FihishPubEvent !== undefined && object.FihishPubEvent !== null) {
      message.FihishPubEvent = FihishPubEvent.fromJSON(object.FihishPubEvent)
    } else {
      message.FihishPubEvent = undefined
    }
    return message
  },

  toJSON(message: QueryGetFihishPubEventResponse): unknown {
    const obj: any = {}
    message.FihishPubEvent !== undefined && (obj.FihishPubEvent = message.FihishPubEvent ? FihishPubEvent.toJSON(message.FihishPubEvent) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetFihishPubEventResponse>): QueryGetFihishPubEventResponse {
    const message = { ...baseQueryGetFihishPubEventResponse } as QueryGetFihishPubEventResponse
    if (object.FihishPubEvent !== undefined && object.FihishPubEvent !== null) {
      message.FihishPubEvent = FihishPubEvent.fromPartial(object.FihishPubEvent)
    } else {
      message.FihishPubEvent = undefined
    }
    return message
  }
}

const baseQueryAllFihishPubEventRequest: object = {}

export const QueryAllFihishPubEventRequest = {
  encode(message: QueryAllFihishPubEventRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllFihishPubEventRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllFihishPubEventRequest } as QueryAllFihishPubEventRequest
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

  fromJSON(object: any): QueryAllFihishPubEventRequest {
    const message = { ...baseQueryAllFihishPubEventRequest } as QueryAllFihishPubEventRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllFihishPubEventRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllFihishPubEventRequest>): QueryAllFihishPubEventRequest {
    const message = { ...baseQueryAllFihishPubEventRequest } as QueryAllFihishPubEventRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllFihishPubEventResponse: object = {}

export const QueryAllFihishPubEventResponse = {
  encode(message: QueryAllFihishPubEventResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.FihishPubEvent) {
      FihishPubEvent.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllFihishPubEventResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllFihishPubEventResponse } as QueryAllFihishPubEventResponse
    message.FihishPubEvent = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.FihishPubEvent.push(FihishPubEvent.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllFihishPubEventResponse {
    const message = { ...baseQueryAllFihishPubEventResponse } as QueryAllFihishPubEventResponse
    message.FihishPubEvent = []
    if (object.FihishPubEvent !== undefined && object.FihishPubEvent !== null) {
      for (const e of object.FihishPubEvent) {
        message.FihishPubEvent.push(FihishPubEvent.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllFihishPubEventResponse): unknown {
    const obj: any = {}
    if (message.FihishPubEvent) {
      obj.FihishPubEvent = message.FihishPubEvent.map((e) => (e ? FihishPubEvent.toJSON(e) : undefined))
    } else {
      obj.FihishPubEvent = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllFihishPubEventResponse>): QueryAllFihishPubEventResponse {
    const message = { ...baseQueryAllFihishPubEventResponse } as QueryAllFihishPubEventResponse
    message.FihishPubEvent = []
    if (object.FihishPubEvent !== undefined && object.FihishPubEvent !== null) {
      for (const e of object.FihishPubEvent) {
        message.FihishPubEvent.push(FihishPubEvent.fromPartial(e))
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

const baseQueryGetValidPubEventsRequest: object = { id: 0 }

export const QueryGetValidPubEventsRequest = {
  encode(message: QueryGetValidPubEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetValidPubEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetValidPubEventsRequest } as QueryGetValidPubEventsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetValidPubEventsRequest {
    const message = { ...baseQueryGetValidPubEventsRequest } as QueryGetValidPubEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetValidPubEventsRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetValidPubEventsRequest>): QueryGetValidPubEventsRequest {
    const message = { ...baseQueryGetValidPubEventsRequest } as QueryGetValidPubEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetValidPubEventsResponse: object = {}

export const QueryGetValidPubEventsResponse = {
  encode(message: QueryGetValidPubEventsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.ValidPubEvents) {
      ValidPubEvents.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetValidPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetValidPubEventsResponse } as QueryGetValidPubEventsResponse
    message.ValidPubEvents = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ValidPubEvents.push(ValidPubEvents.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryGetValidPubEventsResponse {
    const message = { ...baseQueryGetValidPubEventsResponse } as QueryGetValidPubEventsResponse
    message.ValidPubEvents = []
    if (object.ValidPubEvents !== undefined && object.ValidPubEvents !== null) {
      for (const e of object.ValidPubEvents) {
        message.ValidPubEvents.push(ValidPubEvents.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetValidPubEventsResponse): unknown {
    const obj: any = {}
    if (message.ValidPubEvents) {
      obj.ValidPubEvents = message.ValidPubEvents.map((e) => (e ? ValidPubEvents.toJSON(e) : undefined))
    } else {
      obj.ValidPubEvents = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetValidPubEventsResponse>): QueryGetValidPubEventsResponse {
    const message = { ...baseQueryGetValidPubEventsResponse } as QueryGetValidPubEventsResponse
    message.ValidPubEvents = []
    if (object.ValidPubEvents !== undefined && object.ValidPubEvents !== null) {
      for (const e of object.ValidPubEvents) {
        message.ValidPubEvents.push(ValidPubEvents.fromPartial(e))
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

const baseQueryAllValidPubEventsRequest: object = {}

export const QueryAllValidPubEventsRequest = {
  encode(message: QueryAllValidPubEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllValidPubEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllValidPubEventsRequest } as QueryAllValidPubEventsRequest
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

  fromJSON(object: any): QueryAllValidPubEventsRequest {
    const message = { ...baseQueryAllValidPubEventsRequest } as QueryAllValidPubEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllValidPubEventsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllValidPubEventsRequest>): QueryAllValidPubEventsRequest {
    const message = { ...baseQueryAllValidPubEventsRequest } as QueryAllValidPubEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllValidPubEventsResponse: object = {}

export const QueryAllValidPubEventsResponse = {
  encode(message: QueryAllValidPubEventsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.ValidPubEvents) {
      ValidPubEvents.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllValidPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllValidPubEventsResponse } as QueryAllValidPubEventsResponse
    message.ValidPubEvents = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ValidPubEvents.push(ValidPubEvents.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllValidPubEventsResponse {
    const message = { ...baseQueryAllValidPubEventsResponse } as QueryAllValidPubEventsResponse
    message.ValidPubEvents = []
    if (object.ValidPubEvents !== undefined && object.ValidPubEvents !== null) {
      for (const e of object.ValidPubEvents) {
        message.ValidPubEvents.push(ValidPubEvents.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllValidPubEventsResponse): unknown {
    const obj: any = {}
    if (message.ValidPubEvents) {
      obj.ValidPubEvents = message.ValidPubEvents.map((e) => (e ? ValidPubEvents.toJSON(e) : undefined))
    } else {
      obj.ValidPubEvents = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllValidPubEventsResponse>): QueryAllValidPubEventsResponse {
    const message = { ...baseQueryAllValidPubEventsResponse } as QueryAllValidPubEventsResponse
    message.ValidPubEvents = []
    if (object.ValidPubEvents !== undefined && object.ValidPubEvents !== null) {
      for (const e of object.ValidPubEvents) {
        message.ValidPubEvents.push(ValidPubEvents.fromPartial(e))
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

const baseQueryGetPartPubEventsRequest: object = { id: 0 }

export const QueryGetPartPubEventsRequest = {
  encode(message: QueryGetPartPubEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPartPubEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPartPubEventsRequest } as QueryGetPartPubEventsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPartPubEventsRequest {
    const message = { ...baseQueryGetPartPubEventsRequest } as QueryGetPartPubEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetPartPubEventsRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPartPubEventsRequest>): QueryGetPartPubEventsRequest {
    const message = { ...baseQueryGetPartPubEventsRequest } as QueryGetPartPubEventsRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetPartPubEventsResponse: object = {}

export const QueryGetPartPubEventsResponse = {
  encode(message: QueryGetPartPubEventsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.PartPubEvents) {
      PartPubEvents.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPartPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPartPubEventsResponse } as QueryGetPartPubEventsResponse
    message.PartPubEvents = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.PartPubEvents.push(PartPubEvents.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryGetPartPubEventsResponse {
    const message = { ...baseQueryGetPartPubEventsResponse } as QueryGetPartPubEventsResponse
    message.PartPubEvents = []
    if (object.PartPubEvents !== undefined && object.PartPubEvents !== null) {
      for (const e of object.PartPubEvents) {
        message.PartPubEvents.push(PartPubEvents.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryGetPartPubEventsResponse): unknown {
    const obj: any = {}
    if (message.PartPubEvents) {
      obj.PartPubEvents = message.PartPubEvents.map((e) => (e ? PartPubEvents.toJSON(e) : undefined))
    } else {
      obj.PartPubEvents = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPartPubEventsResponse>): QueryGetPartPubEventsResponse {
    const message = { ...baseQueryGetPartPubEventsResponse } as QueryGetPartPubEventsResponse
    message.PartPubEvents = []
    if (object.PartPubEvents !== undefined && object.PartPubEvents !== null) {
      for (const e of object.PartPubEvents) {
        message.PartPubEvents.push(PartPubEvents.fromPartial(e))
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

const baseQueryAllPartPubEventsRequest: object = {}

export const QueryAllPartPubEventsRequest = {
  encode(message: QueryAllPartPubEventsRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPartPubEventsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPartPubEventsRequest } as QueryAllPartPubEventsRequest
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

  fromJSON(object: any): QueryAllPartPubEventsRequest {
    const message = { ...baseQueryAllPartPubEventsRequest } as QueryAllPartPubEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPartPubEventsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPartPubEventsRequest>): QueryAllPartPubEventsRequest {
    const message = { ...baseQueryAllPartPubEventsRequest } as QueryAllPartPubEventsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllPartPubEventsResponse: object = {}

export const QueryAllPartPubEventsResponse = {
  encode(message: QueryAllPartPubEventsResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.PartPubEvents) {
      PartPubEvents.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPartPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllPartPubEventsResponse } as QueryAllPartPubEventsResponse
    message.PartPubEvents = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.PartPubEvents.push(PartPubEvents.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllPartPubEventsResponse {
    const message = { ...baseQueryAllPartPubEventsResponse } as QueryAllPartPubEventsResponse
    message.PartPubEvents = []
    if (object.PartPubEvents !== undefined && object.PartPubEvents !== null) {
      for (const e of object.PartPubEvents) {
        message.PartPubEvents.push(PartPubEvents.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllPartPubEventsResponse): unknown {
    const obj: any = {}
    if (message.PartPubEvents) {
      obj.PartPubEvents = message.PartPubEvents.map((e) => (e ? PartPubEvents.toJSON(e) : undefined))
    } else {
      obj.PartPubEvents = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllPartPubEventsResponse>): QueryAllPartPubEventsResponse {
    const message = { ...baseQueryAllPartPubEventsResponse } as QueryAllPartPubEventsResponse
    message.PartPubEvents = []
    if (object.PartPubEvents !== undefined && object.PartPubEvents !== null) {
      for (const e of object.PartPubEvents) {
        message.PartPubEvents.push(PartPubEvents.fromPartial(e))
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
  /** Queries a refundPubEvents by id. */
  RefundPubEvents(request: QueryGetRefundPubEventsRequest): Promise<QueryGetRefundPubEventsResponse>
  /** Queries a list of refundPubEvents items. */
  RefundPubEventsAll(request: QueryAllRefundPubEventsRequest): Promise<QueryAllRefundPubEventsResponse>
  /** Queries a refPubEvents by id. */
  RefPubEvents(request: QueryGetRefPubEventsRequest): Promise<QueryGetRefPubEventsResponse>
  /** Queries a list of refPubEvents items. */
  RefPubEventsAll(request: QueryAllRefPubEventsRequest): Promise<QueryAllRefPubEventsResponse>
  /** Queries a fihishPubEvent by id. */
  FihishPubEvent(request: QueryGetFihishPubEventRequest): Promise<QueryGetFihishPubEventResponse>
  /** Queries a list of fihishPubEvent items. */
  FihishPubEventAll(request: QueryAllFihishPubEventRequest): Promise<QueryAllFihishPubEventResponse>
  /** Queries a validPubEvents by id. */
  ValidPubEvents(request: QueryGetValidPubEventsRequest): Promise<QueryGetValidPubEventsResponse>
  /** Queries a list of validPubEvents items. */
  ValidPubEventsAll(request: QueryAllValidPubEventsRequest): Promise<QueryAllValidPubEventsResponse>
  /** Queries a partPubEvents by id. */
  PartPubEvents(request: QueryGetPartPubEventsRequest): Promise<QueryGetPartPubEventsResponse>
  /** Queries a list of partPubEvents items. */
  PartPubEventsAll(request: QueryAllPartPubEventsRequest): Promise<QueryAllPartPubEventsResponse>
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
  RefundPubEvents(request: QueryGetRefundPubEventsRequest): Promise<QueryGetRefundPubEventsResponse> {
    const data = QueryGetRefundPubEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'RefundPubEvents', data)
    return promise.then((data) => QueryGetRefundPubEventsResponse.decode(new Reader(data)))
  }

  RefundPubEventsAll(request: QueryAllRefundPubEventsRequest): Promise<QueryAllRefundPubEventsResponse> {
    const data = QueryAllRefundPubEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'RefundPubEventsAll', data)
    return promise.then((data) => QueryAllRefundPubEventsResponse.decode(new Reader(data)))
  }

  RefPubEvents(request: QueryGetRefPubEventsRequest): Promise<QueryGetRefPubEventsResponse> {
    const data = QueryGetRefPubEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'RefPubEvents', data)
    return promise.then((data) => QueryGetRefPubEventsResponse.decode(new Reader(data)))
  }

  RefPubEventsAll(request: QueryAllRefPubEventsRequest): Promise<QueryAllRefPubEventsResponse> {
    const data = QueryAllRefPubEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'RefPubEventsAll', data)
    return promise.then((data) => QueryAllRefPubEventsResponse.decode(new Reader(data)))
  }

  FihishPubEvent(request: QueryGetFihishPubEventRequest): Promise<QueryGetFihishPubEventResponse> {
    const data = QueryGetFihishPubEventRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'FihishPubEvent', data)
    return promise.then((data) => QueryGetFihishPubEventResponse.decode(new Reader(data)))
  }

  FihishPubEventAll(request: QueryAllFihishPubEventRequest): Promise<QueryAllFihishPubEventResponse> {
    const data = QueryAllFihishPubEventRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'FihishPubEventAll', data)
    return promise.then((data) => QueryAllFihishPubEventResponse.decode(new Reader(data)))
  }

  ValidPubEvents(request: QueryGetValidPubEventsRequest): Promise<QueryGetValidPubEventsResponse> {
    const data = QueryGetValidPubEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'ValidPubEvents', data)
    return promise.then((data) => QueryGetValidPubEventsResponse.decode(new Reader(data)))
  }

  ValidPubEventsAll(request: QueryAllValidPubEventsRequest): Promise<QueryAllValidPubEventsResponse> {
    const data = QueryAllValidPubEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'ValidPubEventsAll', data)
    return promise.then((data) => QueryAllValidPubEventsResponse.decode(new Reader(data)))
  }

  PartPubEvents(request: QueryGetPartPubEventsRequest): Promise<QueryGetPartPubEventsResponse> {
    const data = QueryGetPartPubEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'PartPubEvents', data)
    return promise.then((data) => QueryGetPartPubEventsResponse.decode(new Reader(data)))
  }

  PartPubEventsAll(request: QueryAllPartPubEventsRequest): Promise<QueryAllPartPubEventsResponse> {
    const data = QueryAllPartPubEventsRequest.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'PartPubEventsAll', data)
    return promise.then((data) => QueryAllPartPubEventsResponse.decode(new Reader(data)))
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
