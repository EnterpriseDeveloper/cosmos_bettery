/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'VoroshilovMax.bettery.privateevents'

export interface ValidPrivEvents {
  creator: string
  privId: number
  answer: string
}

export interface allValidPrivEvent {
  creator: string
  privId: number
}

const baseValidPrivEvents: object = { creator: '', privId: 0, answer: '' }

export const ValidPrivEvents = {
  encode(message: ValidPrivEvents, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): ValidPrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseValidPrivEvents } as ValidPrivEvents
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

  fromJSON(object: any): ValidPrivEvents {
    const message = { ...baseValidPrivEvents } as ValidPrivEvents
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

  toJSON(message: ValidPrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.privId !== undefined && (obj.privId = message.privId)
    message.answer !== undefined && (obj.answer = message.answer)
    return obj
  },

  fromPartial(object: DeepPartial<ValidPrivEvents>): ValidPrivEvents {
    const message = { ...baseValidPrivEvents } as ValidPrivEvents
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

const baseallValidPrivEvent: object = { creator: '', privId: 0 }

export const allValidPrivEvent = {
  encode(message: allValidPrivEvent, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.privId !== 0) {
      writer.uint32(16).uint64(message.privId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): allValidPrivEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseallValidPrivEvent } as allValidPrivEvent
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.privId = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): allValidPrivEvent {
    const message = { ...baseallValidPrivEvent } as allValidPrivEvent
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
    return message
  },

  toJSON(message: allValidPrivEvent): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.privId !== undefined && (obj.privId = message.privId)
    return obj
  },

  fromPartial(object: DeepPartial<allValidPrivEvent>): allValidPrivEvent {
    const message = { ...baseallValidPrivEvent } as allValidPrivEvent
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
    return message
  }
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
