/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'VoroshilovMax.bettery.publicevents'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateValidPubEvents {
  creator: string
  pubId: string
  answers: string
  reput: string
}

export interface MsgCreateValidPubEventsResponse {
  id: number
}

export interface MsgUpdateValidPubEvents {
  creator: string
  id: number
  pubId: string
  answers: string
  reput: string
}

export interface MsgUpdateValidPubEventsResponse {}

export interface MsgDeleteValidPubEvents {
  creator: string
  id: number
}

export interface MsgDeleteValidPubEventsResponse {}

export interface MsgCreatePartPubEvents {
  creator: string
  pubId: string
  answers: string
  amount: string
}

export interface MsgCreatePartPubEventsResponse {
  id: number
}

export interface MsgUpdatePartPubEvents {
  creator: string
  id: number
  pubId: string
  answers: string
  amount: string
}

export interface MsgUpdatePartPubEventsResponse {}

export interface MsgDeletePartPubEvents {
  creator: string
  id: number
}

export interface MsgDeletePartPubEventsResponse {}

export interface MsgCreateCreatePubEvents {
  creator: string
  pubId: number
  question: string
  answers: string[]
  premAmount: number
  startTime: number
  endTime: number
  expertAmount: number
  advisor: string
}

export interface MsgCreateCreatePubEventsResponse {
  id: number
}

const baseMsgCreateValidPubEvents: object = { creator: '', pubId: '', answers: '', reput: '' }

export const MsgCreateValidPubEvents = {
  encode(message: MsgCreateValidPubEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.pubId !== '') {
      writer.uint32(18).string(message.pubId)
    }
    if (message.answers !== '') {
      writer.uint32(26).string(message.answers)
    }
    if (message.reput !== '') {
      writer.uint32(34).string(message.reput)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateValidPubEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateValidPubEvents } as MsgCreateValidPubEvents
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.pubId = reader.string()
          break
        case 3:
          message.answers = reader.string()
          break
        case 4:
          message.reput = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateValidPubEvents {
    const message = { ...baseMsgCreateValidPubEvents } as MsgCreateValidPubEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.pubId !== undefined && object.pubId !== null) {
      message.pubId = String(object.pubId)
    } else {
      message.pubId = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      message.answers = String(object.answers)
    } else {
      message.answers = ''
    }
    if (object.reput !== undefined && object.reput !== null) {
      message.reput = String(object.reput)
    } else {
      message.reput = ''
    }
    return message
  },

  toJSON(message: MsgCreateValidPubEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.pubId !== undefined && (obj.pubId = message.pubId)
    message.answers !== undefined && (obj.answers = message.answers)
    message.reput !== undefined && (obj.reput = message.reput)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateValidPubEvents>): MsgCreateValidPubEvents {
    const message = { ...baseMsgCreateValidPubEvents } as MsgCreateValidPubEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.pubId !== undefined && object.pubId !== null) {
      message.pubId = object.pubId
    } else {
      message.pubId = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      message.answers = object.answers
    } else {
      message.answers = ''
    }
    if (object.reput !== undefined && object.reput !== null) {
      message.reput = object.reput
    } else {
      message.reput = ''
    }
    return message
  }
}

const baseMsgCreateValidPubEventsResponse: object = { id: 0 }

export const MsgCreateValidPubEventsResponse = {
  encode(message: MsgCreateValidPubEventsResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateValidPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateValidPubEventsResponse } as MsgCreateValidPubEventsResponse
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

  fromJSON(object: any): MsgCreateValidPubEventsResponse {
    const message = { ...baseMsgCreateValidPubEventsResponse } as MsgCreateValidPubEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateValidPubEventsResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateValidPubEventsResponse>): MsgCreateValidPubEventsResponse {
    const message = { ...baseMsgCreateValidPubEventsResponse } as MsgCreateValidPubEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateValidPubEvents: object = { creator: '', id: 0, pubId: '', answers: '', reput: '' }

export const MsgUpdateValidPubEvents = {
  encode(message: MsgUpdateValidPubEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.pubId !== '') {
      writer.uint32(26).string(message.pubId)
    }
    if (message.answers !== '') {
      writer.uint32(34).string(message.answers)
    }
    if (message.reput !== '') {
      writer.uint32(42).string(message.reput)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidPubEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateValidPubEvents } as MsgUpdateValidPubEvents
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.pubId = reader.string()
          break
        case 4:
          message.answers = reader.string()
          break
        case 5:
          message.reput = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateValidPubEvents {
    const message = { ...baseMsgUpdateValidPubEvents } as MsgUpdateValidPubEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.pubId !== undefined && object.pubId !== null) {
      message.pubId = String(object.pubId)
    } else {
      message.pubId = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      message.answers = String(object.answers)
    } else {
      message.answers = ''
    }
    if (object.reput !== undefined && object.reput !== null) {
      message.reput = String(object.reput)
    } else {
      message.reput = ''
    }
    return message
  },

  toJSON(message: MsgUpdateValidPubEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.pubId !== undefined && (obj.pubId = message.pubId)
    message.answers !== undefined && (obj.answers = message.answers)
    message.reput !== undefined && (obj.reput = message.reput)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateValidPubEvents>): MsgUpdateValidPubEvents {
    const message = { ...baseMsgUpdateValidPubEvents } as MsgUpdateValidPubEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.pubId !== undefined && object.pubId !== null) {
      message.pubId = object.pubId
    } else {
      message.pubId = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      message.answers = object.answers
    } else {
      message.answers = ''
    }
    if (object.reput !== undefined && object.reput !== null) {
      message.reput = object.reput
    } else {
      message.reput = ''
    }
    return message
  }
}

const baseMsgUpdateValidPubEventsResponse: object = {}

export const MsgUpdateValidPubEventsResponse = {
  encode(_: MsgUpdateValidPubEventsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateValidPubEventsResponse } as MsgUpdateValidPubEventsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateValidPubEventsResponse {
    const message = { ...baseMsgUpdateValidPubEventsResponse } as MsgUpdateValidPubEventsResponse
    return message
  },

  toJSON(_: MsgUpdateValidPubEventsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateValidPubEventsResponse>): MsgUpdateValidPubEventsResponse {
    const message = { ...baseMsgUpdateValidPubEventsResponse } as MsgUpdateValidPubEventsResponse
    return message
  }
}

const baseMsgDeleteValidPubEvents: object = { creator: '', id: 0 }

export const MsgDeleteValidPubEvents = {
  encode(message: MsgDeleteValidPubEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidPubEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteValidPubEvents } as MsgDeleteValidPubEvents
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteValidPubEvents {
    const message = { ...baseMsgDeleteValidPubEvents } as MsgDeleteValidPubEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteValidPubEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteValidPubEvents>): MsgDeleteValidPubEvents {
    const message = { ...baseMsgDeleteValidPubEvents } as MsgDeleteValidPubEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteValidPubEventsResponse: object = {}

export const MsgDeleteValidPubEventsResponse = {
  encode(_: MsgDeleteValidPubEventsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteValidPubEventsResponse } as MsgDeleteValidPubEventsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteValidPubEventsResponse {
    const message = { ...baseMsgDeleteValidPubEventsResponse } as MsgDeleteValidPubEventsResponse
    return message
  },

  toJSON(_: MsgDeleteValidPubEventsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteValidPubEventsResponse>): MsgDeleteValidPubEventsResponse {
    const message = { ...baseMsgDeleteValidPubEventsResponse } as MsgDeleteValidPubEventsResponse
    return message
  }
}

const baseMsgCreatePartPubEvents: object = { creator: '', pubId: '', answers: '', amount: '' }

export const MsgCreatePartPubEvents = {
  encode(message: MsgCreatePartPubEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.pubId !== '') {
      writer.uint32(18).string(message.pubId)
    }
    if (message.answers !== '') {
      writer.uint32(26).string(message.answers)
    }
    if (message.amount !== '') {
      writer.uint32(34).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePartPubEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePartPubEvents } as MsgCreatePartPubEvents
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.pubId = reader.string()
          break
        case 3:
          message.answers = reader.string()
          break
        case 4:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreatePartPubEvents {
    const message = { ...baseMsgCreatePartPubEvents } as MsgCreatePartPubEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.pubId !== undefined && object.pubId !== null) {
      message.pubId = String(object.pubId)
    } else {
      message.pubId = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      message.answers = String(object.answers)
    } else {
      message.answers = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgCreatePartPubEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.pubId !== undefined && (obj.pubId = message.pubId)
    message.answers !== undefined && (obj.answers = message.answers)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreatePartPubEvents>): MsgCreatePartPubEvents {
    const message = { ...baseMsgCreatePartPubEvents } as MsgCreatePartPubEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.pubId !== undefined && object.pubId !== null) {
      message.pubId = object.pubId
    } else {
      message.pubId = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      message.answers = object.answers
    } else {
      message.answers = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgCreatePartPubEventsResponse: object = { id: 0 }

export const MsgCreatePartPubEventsResponse = {
  encode(message: MsgCreatePartPubEventsResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePartPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePartPubEventsResponse } as MsgCreatePartPubEventsResponse
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

  fromJSON(object: any): MsgCreatePartPubEventsResponse {
    const message = { ...baseMsgCreatePartPubEventsResponse } as MsgCreatePartPubEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreatePartPubEventsResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreatePartPubEventsResponse>): MsgCreatePartPubEventsResponse {
    const message = { ...baseMsgCreatePartPubEventsResponse } as MsgCreatePartPubEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdatePartPubEvents: object = { creator: '', id: 0, pubId: '', answers: '', amount: '' }

export const MsgUpdatePartPubEvents = {
  encode(message: MsgUpdatePartPubEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.pubId !== '') {
      writer.uint32(26).string(message.pubId)
    }
    if (message.answers !== '') {
      writer.uint32(34).string(message.answers)
    }
    if (message.amount !== '') {
      writer.uint32(42).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePartPubEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePartPubEvents } as MsgUpdatePartPubEvents
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.pubId = reader.string()
          break
        case 4:
          message.answers = reader.string()
          break
        case 5:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdatePartPubEvents {
    const message = { ...baseMsgUpdatePartPubEvents } as MsgUpdatePartPubEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.pubId !== undefined && object.pubId !== null) {
      message.pubId = String(object.pubId)
    } else {
      message.pubId = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      message.answers = String(object.answers)
    } else {
      message.answers = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgUpdatePartPubEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.pubId !== undefined && (obj.pubId = message.pubId)
    message.answers !== undefined && (obj.answers = message.answers)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdatePartPubEvents>): MsgUpdatePartPubEvents {
    const message = { ...baseMsgUpdatePartPubEvents } as MsgUpdatePartPubEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.pubId !== undefined && object.pubId !== null) {
      message.pubId = object.pubId
    } else {
      message.pubId = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      message.answers = object.answers
    } else {
      message.answers = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgUpdatePartPubEventsResponse: object = {}

export const MsgUpdatePartPubEventsResponse = {
  encode(_: MsgUpdatePartPubEventsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePartPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePartPubEventsResponse } as MsgUpdatePartPubEventsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdatePartPubEventsResponse {
    const message = { ...baseMsgUpdatePartPubEventsResponse } as MsgUpdatePartPubEventsResponse
    return message
  },

  toJSON(_: MsgUpdatePartPubEventsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdatePartPubEventsResponse>): MsgUpdatePartPubEventsResponse {
    const message = { ...baseMsgUpdatePartPubEventsResponse } as MsgUpdatePartPubEventsResponse
    return message
  }
}

const baseMsgDeletePartPubEvents: object = { creator: '', id: 0 }

export const MsgDeletePartPubEvents = {
  encode(message: MsgDeletePartPubEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePartPubEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePartPubEvents } as MsgDeletePartPubEvents
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeletePartPubEvents {
    const message = { ...baseMsgDeletePartPubEvents } as MsgDeletePartPubEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeletePartPubEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeletePartPubEvents>): MsgDeletePartPubEvents {
    const message = { ...baseMsgDeletePartPubEvents } as MsgDeletePartPubEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeletePartPubEventsResponse: object = {}

export const MsgDeletePartPubEventsResponse = {
  encode(_: MsgDeletePartPubEventsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePartPubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePartPubEventsResponse } as MsgDeletePartPubEventsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeletePartPubEventsResponse {
    const message = { ...baseMsgDeletePartPubEventsResponse } as MsgDeletePartPubEventsResponse
    return message
  },

  toJSON(_: MsgDeletePartPubEventsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeletePartPubEventsResponse>): MsgDeletePartPubEventsResponse {
    const message = { ...baseMsgDeletePartPubEventsResponse } as MsgDeletePartPubEventsResponse
    return message
  }
}

const baseMsgCreateCreatePubEvents: object = {
  creator: '',
  pubId: 0,
  question: '',
  answers: '',
  premAmount: 0,
  startTime: 0,
  endTime: 0,
  expertAmount: 0,
  advisor: ''
}

export const MsgCreateCreatePubEvents = {
  encode(message: MsgCreateCreatePubEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.pubId !== 0) {
      writer.uint32(16).uint64(message.pubId)
    }
    if (message.question !== '') {
      writer.uint32(26).string(message.question)
    }
    for (const v of message.answers) {
      writer.uint32(34).string(v!)
    }
    if (message.premAmount !== 0) {
      writer.uint32(40).int64(message.premAmount)
    }
    if (message.startTime !== 0) {
      writer.uint32(48).int64(message.startTime)
    }
    if (message.endTime !== 0) {
      writer.uint32(56).int64(message.endTime)
    }
    if (message.expertAmount !== 0) {
      writer.uint32(64).int64(message.expertAmount)
    }
    if (message.advisor !== '') {
      writer.uint32(74).string(message.advisor)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePubEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCreatePubEvents } as MsgCreateCreatePubEvents
    message.answers = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.pubId = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.question = reader.string()
          break
        case 4:
          message.answers.push(reader.string())
          break
        case 5:
          message.premAmount = longToNumber(reader.int64() as Long)
          break
        case 6:
          message.startTime = longToNumber(reader.int64() as Long)
          break
        case 7:
          message.endTime = longToNumber(reader.int64() as Long)
          break
        case 8:
          message.expertAmount = longToNumber(reader.int64() as Long)
          break
        case 9:
          message.advisor = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateCreatePubEvents {
    const message = { ...baseMsgCreateCreatePubEvents } as MsgCreateCreatePubEvents
    message.answers = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.pubId !== undefined && object.pubId !== null) {
      message.pubId = Number(object.pubId)
    } else {
      message.pubId = 0
    }
    if (object.question !== undefined && object.question !== null) {
      message.question = String(object.question)
    } else {
      message.question = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      for (const e of object.answers) {
        message.answers.push(String(e))
      }
    }
    if (object.premAmount !== undefined && object.premAmount !== null) {
      message.premAmount = Number(object.premAmount)
    } else {
      message.premAmount = 0
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Number(object.startTime)
    } else {
      message.startTime = 0
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Number(object.endTime)
    } else {
      message.endTime = 0
    }
    if (object.expertAmount !== undefined && object.expertAmount !== null) {
      message.expertAmount = Number(object.expertAmount)
    } else {
      message.expertAmount = 0
    }
    if (object.advisor !== undefined && object.advisor !== null) {
      message.advisor = String(object.advisor)
    } else {
      message.advisor = ''
    }
    return message
  },

  toJSON(message: MsgCreateCreatePubEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.pubId !== undefined && (obj.pubId = message.pubId)
    message.question !== undefined && (obj.question = message.question)
    if (message.answers) {
      obj.answers = message.answers.map((e) => e)
    } else {
      obj.answers = []
    }
    message.premAmount !== undefined && (obj.premAmount = message.premAmount)
    message.startTime !== undefined && (obj.startTime = message.startTime)
    message.endTime !== undefined && (obj.endTime = message.endTime)
    message.expertAmount !== undefined && (obj.expertAmount = message.expertAmount)
    message.advisor !== undefined && (obj.advisor = message.advisor)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCreatePubEvents>): MsgCreateCreatePubEvents {
    const message = { ...baseMsgCreateCreatePubEvents } as MsgCreateCreatePubEvents
    message.answers = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.pubId !== undefined && object.pubId !== null) {
      message.pubId = object.pubId
    } else {
      message.pubId = 0
    }
    if (object.question !== undefined && object.question !== null) {
      message.question = object.question
    } else {
      message.question = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      for (const e of object.answers) {
        message.answers.push(e)
      }
    }
    if (object.premAmount !== undefined && object.premAmount !== null) {
      message.premAmount = object.premAmount
    } else {
      message.premAmount = 0
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime
    } else {
      message.startTime = 0
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime
    } else {
      message.endTime = 0
    }
    if (object.expertAmount !== undefined && object.expertAmount !== null) {
      message.expertAmount = object.expertAmount
    } else {
      message.expertAmount = 0
    }
    if (object.advisor !== undefined && object.advisor !== null) {
      message.advisor = object.advisor
    } else {
      message.advisor = ''
    }
    return message
  }
}

const baseMsgCreateCreatePubEventsResponse: object = { id: 0 }

export const MsgCreateCreatePubEventsResponse = {
  encode(message: MsgCreateCreatePubEventsResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCreatePubEventsResponse } as MsgCreateCreatePubEventsResponse
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

  fromJSON(object: any): MsgCreateCreatePubEventsResponse {
    const message = { ...baseMsgCreateCreatePubEventsResponse } as MsgCreateCreatePubEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateCreatePubEventsResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCreatePubEventsResponse>): MsgCreateCreatePubEventsResponse {
    const message = { ...baseMsgCreateCreatePubEventsResponse } as MsgCreateCreatePubEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateValidPubEvents(request: MsgCreateValidPubEvents): Promise<MsgCreateValidPubEventsResponse>
  UpdateValidPubEvents(request: MsgUpdateValidPubEvents): Promise<MsgUpdateValidPubEventsResponse>
  DeleteValidPubEvents(request: MsgDeleteValidPubEvents): Promise<MsgDeleteValidPubEventsResponse>
  CreatePartPubEvents(request: MsgCreatePartPubEvents): Promise<MsgCreatePartPubEventsResponse>
  UpdatePartPubEvents(request: MsgUpdatePartPubEvents): Promise<MsgUpdatePartPubEventsResponse>
  DeletePartPubEvents(request: MsgDeletePartPubEvents): Promise<MsgDeletePartPubEventsResponse>
  CreateCreatePubEvents(request: MsgCreateCreatePubEvents): Promise<MsgCreateCreatePubEventsResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateValidPubEvents(request: MsgCreateValidPubEvents): Promise<MsgCreateValidPubEventsResponse> {
    const data = MsgCreateValidPubEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'CreateValidPubEvents', data)
    return promise.then((data) => MsgCreateValidPubEventsResponse.decode(new Reader(data)))
  }

  UpdateValidPubEvents(request: MsgUpdateValidPubEvents): Promise<MsgUpdateValidPubEventsResponse> {
    const data = MsgUpdateValidPubEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'UpdateValidPubEvents', data)
    return promise.then((data) => MsgUpdateValidPubEventsResponse.decode(new Reader(data)))
  }

  DeleteValidPubEvents(request: MsgDeleteValidPubEvents): Promise<MsgDeleteValidPubEventsResponse> {
    const data = MsgDeleteValidPubEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'DeleteValidPubEvents', data)
    return promise.then((data) => MsgDeleteValidPubEventsResponse.decode(new Reader(data)))
  }

  CreatePartPubEvents(request: MsgCreatePartPubEvents): Promise<MsgCreatePartPubEventsResponse> {
    const data = MsgCreatePartPubEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'CreatePartPubEvents', data)
    return promise.then((data) => MsgCreatePartPubEventsResponse.decode(new Reader(data)))
  }

  UpdatePartPubEvents(request: MsgUpdatePartPubEvents): Promise<MsgUpdatePartPubEventsResponse> {
    const data = MsgUpdatePartPubEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'UpdatePartPubEvents', data)
    return promise.then((data) => MsgUpdatePartPubEventsResponse.decode(new Reader(data)))
  }

  DeletePartPubEvents(request: MsgDeletePartPubEvents): Promise<MsgDeletePartPubEventsResponse> {
    const data = MsgDeletePartPubEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'DeletePartPubEvents', data)
    return promise.then((data) => MsgDeletePartPubEventsResponse.decode(new Reader(data)))
  }

  CreateCreatePubEvents(request: MsgCreateCreatePubEvents): Promise<MsgCreateCreatePubEventsResponse> {
    const data = MsgCreateCreatePubEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'CreateCreatePubEvents', data)
    return promise.then((data) => MsgCreateCreatePubEventsResponse.decode(new Reader(data)))
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
