/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'VoroshilovMax.bettery.privateevents'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateValidPrivEvents {
  creator: string
  privId: number
  answer: string
}

export interface MsgCreateValidPrivEventsResponse {
  id: number
}

export interface MsgUpdateValidPrivEvents {
  creator: string
  id: number
  privId: number
  answer: string
}

export interface MsgUpdateValidPrivEventsResponse {}

export interface MsgDeleteValidPrivEvents {
  creator: string
  id: number
}

export interface MsgDeleteValidPrivEventsResponse {}

export interface MsgCreatePartPrivEvents {
  creator: string
  privId: number
  answer: string
}

export interface MsgCreatePartPrivEventsResponse {
  id: number
}

export interface MsgUpdatePartPrivEvents {
  creator: string
  privId: number
  answer: string
}

export interface MsgUpdatePartPrivEventsResponse {}

export interface MsgDeletePartPrivEvents {
  creator: string
  id: number
}

export interface MsgDeletePartPrivEventsResponse {}

export interface MsgCreateCreatePrivEvents {
  creator: string
  privId: number
  question: string
  answers: string[]
  winner: string
  loser: string
}

export interface MsgCreateCreatePrivEventsResponse {
  id: number
}

export interface MsgUpdateCreatePrivEvents {
  creator: string
  privId: number
  question: string
  answers: string[]
  winner: string
  loser: string
}

export interface MsgUpdateCreatePrivEventsResponse {}

export interface MsgDeleteCreatePrivEvents {
  creator: string
  id: number
}

export interface MsgDeleteCreatePrivEventsResponse {}

const baseMsgCreateValidPrivEvents: object = { creator: '', privId: 0, answer: '' }

export const MsgCreateValidPrivEvents = {
  encode(message: MsgCreateValidPrivEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.privId !== 0) {
      writer.uint32(16).uint64(message.privId)
    }
    if (message.answer !== '') {
      writer.uint32(26).string(message.answer)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateValidPrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateValidPrivEvents } as MsgCreateValidPrivEvents
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.privId = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.answer = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateValidPrivEvents {
    const message = { ...baseMsgCreateValidPrivEvents } as MsgCreateValidPrivEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.privId !== undefined && object.privId !== null) {
      message.privId = Number(object.privId)
    } else {
      message.privId = 0
    }
    if (object.answer !== undefined && object.answer !== null) {
      message.answer = String(object.answer)
    } else {
      message.answer = ''
    }
    return message
  },

  toJSON(message: MsgCreateValidPrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.privId !== undefined && (obj.privId = message.privId)
    message.answer !== undefined && (obj.answer = message.answer)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateValidPrivEvents>): MsgCreateValidPrivEvents {
    const message = { ...baseMsgCreateValidPrivEvents } as MsgCreateValidPrivEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.privId !== undefined && object.privId !== null) {
      message.privId = object.privId
    } else {
      message.privId = 0
    }
    if (object.answer !== undefined && object.answer !== null) {
      message.answer = object.answer
    } else {
      message.answer = ''
    }
    return message
  }
}

const baseMsgCreateValidPrivEventsResponse: object = { id: 0 }

export const MsgCreateValidPrivEventsResponse = {
  encode(message: MsgCreateValidPrivEventsResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateValidPrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateValidPrivEventsResponse } as MsgCreateValidPrivEventsResponse
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

  fromJSON(object: any): MsgCreateValidPrivEventsResponse {
    const message = { ...baseMsgCreateValidPrivEventsResponse } as MsgCreateValidPrivEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateValidPrivEventsResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateValidPrivEventsResponse>): MsgCreateValidPrivEventsResponse {
    const message = { ...baseMsgCreateValidPrivEventsResponse } as MsgCreateValidPrivEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateValidPrivEvents: object = { creator: '', id: 0, privId: 0, answer: '' }

export const MsgUpdateValidPrivEvents = {
  encode(message: MsgUpdateValidPrivEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.privId !== 0) {
      writer.uint32(24).uint64(message.privId)
    }
    if (message.answer !== '') {
      writer.uint32(34).string(message.answer)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidPrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateValidPrivEvents } as MsgUpdateValidPrivEvents
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
          message.privId = longToNumber(reader.uint64() as Long)
          break
        case 4:
          message.answer = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateValidPrivEvents {
    const message = { ...baseMsgUpdateValidPrivEvents } as MsgUpdateValidPrivEvents
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
    if (object.privId !== undefined && object.privId !== null) {
      message.privId = Number(object.privId)
    } else {
      message.privId = 0
    }
    if (object.answer !== undefined && object.answer !== null) {
      message.answer = String(object.answer)
    } else {
      message.answer = ''
    }
    return message
  },

  toJSON(message: MsgUpdateValidPrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.privId !== undefined && (obj.privId = message.privId)
    message.answer !== undefined && (obj.answer = message.answer)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateValidPrivEvents>): MsgUpdateValidPrivEvents {
    const message = { ...baseMsgUpdateValidPrivEvents } as MsgUpdateValidPrivEvents
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
    if (object.privId !== undefined && object.privId !== null) {
      message.privId = object.privId
    } else {
      message.privId = 0
    }
    if (object.answer !== undefined && object.answer !== null) {
      message.answer = object.answer
    } else {
      message.answer = ''
    }
    return message
  }
}

const baseMsgUpdateValidPrivEventsResponse: object = {}

export const MsgUpdateValidPrivEventsResponse = {
  encode(_: MsgUpdateValidPrivEventsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateValidPrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateValidPrivEventsResponse } as MsgUpdateValidPrivEventsResponse
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

  fromJSON(_: any): MsgUpdateValidPrivEventsResponse {
    const message = { ...baseMsgUpdateValidPrivEventsResponse } as MsgUpdateValidPrivEventsResponse
    return message
  },

  toJSON(_: MsgUpdateValidPrivEventsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateValidPrivEventsResponse>): MsgUpdateValidPrivEventsResponse {
    const message = { ...baseMsgUpdateValidPrivEventsResponse } as MsgUpdateValidPrivEventsResponse
    return message
  }
}

const baseMsgDeleteValidPrivEvents: object = { creator: '', id: 0 }

export const MsgDeleteValidPrivEvents = {
  encode(message: MsgDeleteValidPrivEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidPrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteValidPrivEvents } as MsgDeleteValidPrivEvents
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

  fromJSON(object: any): MsgDeleteValidPrivEvents {
    const message = { ...baseMsgDeleteValidPrivEvents } as MsgDeleteValidPrivEvents
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

  toJSON(message: MsgDeleteValidPrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteValidPrivEvents>): MsgDeleteValidPrivEvents {
    const message = { ...baseMsgDeleteValidPrivEvents } as MsgDeleteValidPrivEvents
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

const baseMsgDeleteValidPrivEventsResponse: object = {}

export const MsgDeleteValidPrivEventsResponse = {
  encode(_: MsgDeleteValidPrivEventsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteValidPrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteValidPrivEventsResponse } as MsgDeleteValidPrivEventsResponse
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

  fromJSON(_: any): MsgDeleteValidPrivEventsResponse {
    const message = { ...baseMsgDeleteValidPrivEventsResponse } as MsgDeleteValidPrivEventsResponse
    return message
  },

  toJSON(_: MsgDeleteValidPrivEventsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteValidPrivEventsResponse>): MsgDeleteValidPrivEventsResponse {
    const message = { ...baseMsgDeleteValidPrivEventsResponse } as MsgDeleteValidPrivEventsResponse
    return message
  }
}

const baseMsgCreatePartPrivEvents: object = { creator: '', privId: 0, answer: '' }

export const MsgCreatePartPrivEvents = {
  encode(message: MsgCreatePartPrivEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.privId !== 0) {
      writer.uint32(16).uint64(message.privId)
    }
    if (message.answer !== '') {
      writer.uint32(26).string(message.answer)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePartPrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePartPrivEvents } as MsgCreatePartPrivEvents
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.privId = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.answer = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreatePartPrivEvents {
    const message = { ...baseMsgCreatePartPrivEvents } as MsgCreatePartPrivEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.privId !== undefined && object.privId !== null) {
      message.privId = Number(object.privId)
    } else {
      message.privId = 0
    }
    if (object.answer !== undefined && object.answer !== null) {
      message.answer = String(object.answer)
    } else {
      message.answer = ''
    }
    return message
  },

  toJSON(message: MsgCreatePartPrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.privId !== undefined && (obj.privId = message.privId)
    message.answer !== undefined && (obj.answer = message.answer)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreatePartPrivEvents>): MsgCreatePartPrivEvents {
    const message = { ...baseMsgCreatePartPrivEvents } as MsgCreatePartPrivEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.privId !== undefined && object.privId !== null) {
      message.privId = object.privId
    } else {
      message.privId = 0
    }
    if (object.answer !== undefined && object.answer !== null) {
      message.answer = object.answer
    } else {
      message.answer = ''
    }
    return message
  }
}

const baseMsgCreatePartPrivEventsResponse: object = { id: 0 }

export const MsgCreatePartPrivEventsResponse = {
  encode(message: MsgCreatePartPrivEventsResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePartPrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePartPrivEventsResponse } as MsgCreatePartPrivEventsResponse
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

  fromJSON(object: any): MsgCreatePartPrivEventsResponse {
    const message = { ...baseMsgCreatePartPrivEventsResponse } as MsgCreatePartPrivEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreatePartPrivEventsResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreatePartPrivEventsResponse>): MsgCreatePartPrivEventsResponse {
    const message = { ...baseMsgCreatePartPrivEventsResponse } as MsgCreatePartPrivEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdatePartPrivEvents: object = { creator: '', privId: 0, answer: '' }

export const MsgUpdatePartPrivEvents = {
  encode(message: MsgUpdatePartPrivEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.privId !== 0) {
      writer.uint32(16).uint64(message.privId)
    }
    if (message.answer !== '') {
      writer.uint32(26).string(message.answer)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePartPrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePartPrivEvents } as MsgUpdatePartPrivEvents
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.privId = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.answer = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdatePartPrivEvents {
    const message = { ...baseMsgUpdatePartPrivEvents } as MsgUpdatePartPrivEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.privId !== undefined && object.privId !== null) {
      message.privId = Number(object.privId)
    } else {
      message.privId = 0
    }
    if (object.answer !== undefined && object.answer !== null) {
      message.answer = String(object.answer)
    } else {
      message.answer = ''
    }
    return message
  },

  toJSON(message: MsgUpdatePartPrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.privId !== undefined && (obj.privId = message.privId)
    message.answer !== undefined && (obj.answer = message.answer)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdatePartPrivEvents>): MsgUpdatePartPrivEvents {
    const message = { ...baseMsgUpdatePartPrivEvents } as MsgUpdatePartPrivEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.privId !== undefined && object.privId !== null) {
      message.privId = object.privId
    } else {
      message.privId = 0
    }
    if (object.answer !== undefined && object.answer !== null) {
      message.answer = object.answer
    } else {
      message.answer = ''
    }
    return message
  }
}

const baseMsgUpdatePartPrivEventsResponse: object = {}

export const MsgUpdatePartPrivEventsResponse = {
  encode(_: MsgUpdatePartPrivEventsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePartPrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePartPrivEventsResponse } as MsgUpdatePartPrivEventsResponse
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

  fromJSON(_: any): MsgUpdatePartPrivEventsResponse {
    const message = { ...baseMsgUpdatePartPrivEventsResponse } as MsgUpdatePartPrivEventsResponse
    return message
  },

  toJSON(_: MsgUpdatePartPrivEventsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdatePartPrivEventsResponse>): MsgUpdatePartPrivEventsResponse {
    const message = { ...baseMsgUpdatePartPrivEventsResponse } as MsgUpdatePartPrivEventsResponse
    return message
  }
}

const baseMsgDeletePartPrivEvents: object = { creator: '', id: 0 }

export const MsgDeletePartPrivEvents = {
  encode(message: MsgDeletePartPrivEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePartPrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePartPrivEvents } as MsgDeletePartPrivEvents
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

  fromJSON(object: any): MsgDeletePartPrivEvents {
    const message = { ...baseMsgDeletePartPrivEvents } as MsgDeletePartPrivEvents
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

  toJSON(message: MsgDeletePartPrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeletePartPrivEvents>): MsgDeletePartPrivEvents {
    const message = { ...baseMsgDeletePartPrivEvents } as MsgDeletePartPrivEvents
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

const baseMsgDeletePartPrivEventsResponse: object = {}

export const MsgDeletePartPrivEventsResponse = {
  encode(_: MsgDeletePartPrivEventsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePartPrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePartPrivEventsResponse } as MsgDeletePartPrivEventsResponse
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

  fromJSON(_: any): MsgDeletePartPrivEventsResponse {
    const message = { ...baseMsgDeletePartPrivEventsResponse } as MsgDeletePartPrivEventsResponse
    return message
  },

  toJSON(_: MsgDeletePartPrivEventsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeletePartPrivEventsResponse>): MsgDeletePartPrivEventsResponse {
    const message = { ...baseMsgDeletePartPrivEventsResponse } as MsgDeletePartPrivEventsResponse
    return message
  }
}

const baseMsgCreateCreatePrivEvents: object = { creator: '', privId: 0, question: '', answers: '', winner: '', loser: '' }

export const MsgCreateCreatePrivEvents = {
  encode(message: MsgCreateCreatePrivEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.privId !== 0) {
      writer.uint32(16).uint64(message.privId)
    }
    if (message.question !== '') {
      writer.uint32(26).string(message.question)
    }
    for (const v of message.answers) {
      writer.uint32(34).string(v!)
    }
    if (message.winner !== '') {
      writer.uint32(42).string(message.winner)
    }
    if (message.loser !== '') {
      writer.uint32(50).string(message.loser)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCreatePrivEvents } as MsgCreateCreatePrivEvents
    message.answers = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.privId = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.question = reader.string()
          break
        case 4:
          message.answers.push(reader.string())
          break
        case 5:
          message.winner = reader.string()
          break
        case 6:
          message.loser = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateCreatePrivEvents {
    const message = { ...baseMsgCreateCreatePrivEvents } as MsgCreateCreatePrivEvents
    message.answers = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.privId !== undefined && object.privId !== null) {
      message.privId = Number(object.privId)
    } else {
      message.privId = 0
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
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = String(object.winner)
    } else {
      message.winner = ''
    }
    if (object.loser !== undefined && object.loser !== null) {
      message.loser = String(object.loser)
    } else {
      message.loser = ''
    }
    return message
  },

  toJSON(message: MsgCreateCreatePrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.privId !== undefined && (obj.privId = message.privId)
    message.question !== undefined && (obj.question = message.question)
    if (message.answers) {
      obj.answers = message.answers.map((e) => e)
    } else {
      obj.answers = []
    }
    message.winner !== undefined && (obj.winner = message.winner)
    message.loser !== undefined && (obj.loser = message.loser)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCreatePrivEvents>): MsgCreateCreatePrivEvents {
    const message = { ...baseMsgCreateCreatePrivEvents } as MsgCreateCreatePrivEvents
    message.answers = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.privId !== undefined && object.privId !== null) {
      message.privId = object.privId
    } else {
      message.privId = 0
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
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = object.winner
    } else {
      message.winner = ''
    }
    if (object.loser !== undefined && object.loser !== null) {
      message.loser = object.loser
    } else {
      message.loser = ''
    }
    return message
  }
}

const baseMsgCreateCreatePrivEventsResponse: object = { id: 0 }

export const MsgCreateCreatePrivEventsResponse = {
  encode(message: MsgCreateCreatePrivEventsResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCreatePrivEventsResponse } as MsgCreateCreatePrivEventsResponse
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

  fromJSON(object: any): MsgCreateCreatePrivEventsResponse {
    const message = { ...baseMsgCreateCreatePrivEventsResponse } as MsgCreateCreatePrivEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateCreatePrivEventsResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCreatePrivEventsResponse>): MsgCreateCreatePrivEventsResponse {
    const message = { ...baseMsgCreateCreatePrivEventsResponse } as MsgCreateCreatePrivEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateCreatePrivEvents: object = { creator: '', privId: 0, question: '', answers: '', winner: '', loser: '' }

export const MsgUpdateCreatePrivEvents = {
  encode(message: MsgUpdateCreatePrivEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.privId !== 0) {
      writer.uint32(16).uint64(message.privId)
    }
    if (message.question !== '') {
      writer.uint32(34).string(message.question)
    }
    for (const v of message.answers) {
      writer.uint32(42).string(v!)
    }
    if (message.winner !== '') {
      writer.uint32(50).string(message.winner)
    }
    if (message.loser !== '') {
      writer.uint32(58).string(message.loser)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCreatePrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateCreatePrivEvents } as MsgUpdateCreatePrivEvents
    message.answers = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.privId = longToNumber(reader.uint64() as Long)
          break
        case 4:
          message.question = reader.string()
          break
        case 5:
          message.answers.push(reader.string())
          break
        case 6:
          message.winner = reader.string()
          break
        case 7:
          message.loser = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateCreatePrivEvents {
    const message = { ...baseMsgUpdateCreatePrivEvents } as MsgUpdateCreatePrivEvents
    message.answers = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.privId !== undefined && object.privId !== null) {
      message.privId = Number(object.privId)
    } else {
      message.privId = 0
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
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = String(object.winner)
    } else {
      message.winner = ''
    }
    if (object.loser !== undefined && object.loser !== null) {
      message.loser = String(object.loser)
    } else {
      message.loser = ''
    }
    return message
  },

  toJSON(message: MsgUpdateCreatePrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.privId !== undefined && (obj.privId = message.privId)
    message.question !== undefined && (obj.question = message.question)
    if (message.answers) {
      obj.answers = message.answers.map((e) => e)
    } else {
      obj.answers = []
    }
    message.winner !== undefined && (obj.winner = message.winner)
    message.loser !== undefined && (obj.loser = message.loser)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateCreatePrivEvents>): MsgUpdateCreatePrivEvents {
    const message = { ...baseMsgUpdateCreatePrivEvents } as MsgUpdateCreatePrivEvents
    message.answers = []
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.privId !== undefined && object.privId !== null) {
      message.privId = object.privId
    } else {
      message.privId = 0
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
    if (object.winner !== undefined && object.winner !== null) {
      message.winner = object.winner
    } else {
      message.winner = ''
    }
    if (object.loser !== undefined && object.loser !== null) {
      message.loser = object.loser
    } else {
      message.loser = ''
    }
    return message
  }
}

const baseMsgUpdateCreatePrivEventsResponse: object = {}

export const MsgUpdateCreatePrivEventsResponse = {
  encode(_: MsgUpdateCreatePrivEventsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCreatePrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateCreatePrivEventsResponse } as MsgUpdateCreatePrivEventsResponse
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

  fromJSON(_: any): MsgUpdateCreatePrivEventsResponse {
    const message = { ...baseMsgUpdateCreatePrivEventsResponse } as MsgUpdateCreatePrivEventsResponse
    return message
  },

  toJSON(_: MsgUpdateCreatePrivEventsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateCreatePrivEventsResponse>): MsgUpdateCreatePrivEventsResponse {
    const message = { ...baseMsgUpdateCreatePrivEventsResponse } as MsgUpdateCreatePrivEventsResponse
    return message
  }
}

const baseMsgDeleteCreatePrivEvents: object = { creator: '', id: 0 }

export const MsgDeleteCreatePrivEvents = {
  encode(message: MsgDeleteCreatePrivEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCreatePrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteCreatePrivEvents } as MsgDeleteCreatePrivEvents
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

  fromJSON(object: any): MsgDeleteCreatePrivEvents {
    const message = { ...baseMsgDeleteCreatePrivEvents } as MsgDeleteCreatePrivEvents
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

  toJSON(message: MsgDeleteCreatePrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteCreatePrivEvents>): MsgDeleteCreatePrivEvents {
    const message = { ...baseMsgDeleteCreatePrivEvents } as MsgDeleteCreatePrivEvents
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

const baseMsgDeleteCreatePrivEventsResponse: object = {}

export const MsgDeleteCreatePrivEventsResponse = {
  encode(_: MsgDeleteCreatePrivEventsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCreatePrivEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteCreatePrivEventsResponse } as MsgDeleteCreatePrivEventsResponse
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

  fromJSON(_: any): MsgDeleteCreatePrivEventsResponse {
    const message = { ...baseMsgDeleteCreatePrivEventsResponse } as MsgDeleteCreatePrivEventsResponse
    return message
  },

  toJSON(_: MsgDeleteCreatePrivEventsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteCreatePrivEventsResponse>): MsgDeleteCreatePrivEventsResponse {
    const message = { ...baseMsgDeleteCreatePrivEventsResponse } as MsgDeleteCreatePrivEventsResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateValidPrivEvents(request: MsgCreateValidPrivEvents): Promise<MsgCreateValidPrivEventsResponse>
  UpdateValidPrivEvents(request: MsgUpdateValidPrivEvents): Promise<MsgUpdateValidPrivEventsResponse>
  DeleteValidPrivEvents(request: MsgDeleteValidPrivEvents): Promise<MsgDeleteValidPrivEventsResponse>
  CreatePartPrivEvents(request: MsgCreatePartPrivEvents): Promise<MsgCreatePartPrivEventsResponse>
  UpdatePartPrivEvents(request: MsgUpdatePartPrivEvents): Promise<MsgUpdatePartPrivEventsResponse>
  DeletePartPrivEvents(request: MsgDeletePartPrivEvents): Promise<MsgDeletePartPrivEventsResponse>
  CreateCreatePrivEvents(request: MsgCreateCreatePrivEvents): Promise<MsgCreateCreatePrivEventsResponse>
  UpdateCreatePrivEvents(request: MsgUpdateCreatePrivEvents): Promise<MsgUpdateCreatePrivEventsResponse>
  DeleteCreatePrivEvents(request: MsgDeleteCreatePrivEvents): Promise<MsgDeleteCreatePrivEventsResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateValidPrivEvents(request: MsgCreateValidPrivEvents): Promise<MsgCreateValidPrivEventsResponse> {
    const data = MsgCreateValidPrivEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'CreateValidPrivEvents', data)
    return promise.then((data) => MsgCreateValidPrivEventsResponse.decode(new Reader(data)))
  }

  UpdateValidPrivEvents(request: MsgUpdateValidPrivEvents): Promise<MsgUpdateValidPrivEventsResponse> {
    const data = MsgUpdateValidPrivEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'UpdateValidPrivEvents', data)
    return promise.then((data) => MsgUpdateValidPrivEventsResponse.decode(new Reader(data)))
  }

  DeleteValidPrivEvents(request: MsgDeleteValidPrivEvents): Promise<MsgDeleteValidPrivEventsResponse> {
    const data = MsgDeleteValidPrivEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'DeleteValidPrivEvents', data)
    return promise.then((data) => MsgDeleteValidPrivEventsResponse.decode(new Reader(data)))
  }

  CreatePartPrivEvents(request: MsgCreatePartPrivEvents): Promise<MsgCreatePartPrivEventsResponse> {
    const data = MsgCreatePartPrivEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'CreatePartPrivEvents', data)
    return promise.then((data) => MsgCreatePartPrivEventsResponse.decode(new Reader(data)))
  }

  UpdatePartPrivEvents(request: MsgUpdatePartPrivEvents): Promise<MsgUpdatePartPrivEventsResponse> {
    const data = MsgUpdatePartPrivEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'UpdatePartPrivEvents', data)
    return promise.then((data) => MsgUpdatePartPrivEventsResponse.decode(new Reader(data)))
  }

  DeletePartPrivEvents(request: MsgDeletePartPrivEvents): Promise<MsgDeletePartPrivEventsResponse> {
    const data = MsgDeletePartPrivEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'DeletePartPrivEvents', data)
    return promise.then((data) => MsgDeletePartPrivEventsResponse.decode(new Reader(data)))
  }

  CreateCreatePrivEvents(request: MsgCreateCreatePrivEvents): Promise<MsgCreateCreatePrivEventsResponse> {
    const data = MsgCreateCreatePrivEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'CreateCreatePrivEvents', data)
    return promise.then((data) => MsgCreateCreatePrivEventsResponse.decode(new Reader(data)))
  }

  UpdateCreatePrivEvents(request: MsgUpdateCreatePrivEvents): Promise<MsgUpdateCreatePrivEventsResponse> {
    const data = MsgUpdateCreatePrivEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'UpdateCreatePrivEvents', data)
    return promise.then((data) => MsgUpdateCreatePrivEventsResponse.decode(new Reader(data)))
  }

  DeleteCreatePrivEvents(request: MsgDeleteCreatePrivEvents): Promise<MsgDeleteCreatePrivEventsResponse> {
    const data = MsgDeleteCreatePrivEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'DeleteCreatePrivEvents', data)
    return promise.then((data) => MsgDeleteCreatePrivEventsResponse.decode(new Reader(data)))
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
