/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'VoroshilovMax.bettery.privateevents'

export interface PartPrivEvents {
  creator: string
  id: number
  privId: number
  answer: string
}

export interface allPartPrivEvent {
  creator: string
  id: number
  privId: number
}

const basePartPrivEvents: object = { creator: '', id: 0, privId: 0, answer: '' }

export const PartPrivEvents = {
  encode(message: PartPrivEvents, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): PartPrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePartPrivEvents } as PartPrivEvents
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

  fromJSON(object: any): PartPrivEvents {
    const message = { ...basePartPrivEvents } as PartPrivEvents
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

  toJSON(message: PartPrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.privId !== undefined && (obj.privId = message.privId)
    message.answer !== undefined && (obj.answer = message.answer)
    return obj
  },

  fromPartial(object: DeepPartial<PartPrivEvents>): PartPrivEvents {
    const message = { ...basePartPrivEvents } as PartPrivEvents
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

const baseallPartPrivEvent: object = { creator: '', id: 0, privId: 0 }

export const allPartPrivEvent = {
  encode(message: allPartPrivEvent, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.privId !== 0) {
      writer.uint32(24).uint64(message.privId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): allPartPrivEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseallPartPrivEvent } as allPartPrivEvent
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
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): allPartPrivEvent {
    const message = { ...baseallPartPrivEvent } as allPartPrivEvent
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
    return message
  },

  toJSON(message: allPartPrivEvent): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.privId !== undefined && (obj.privId = message.privId)
    return obj
  },

  fromPartial(object: DeepPartial<allPartPrivEvent>): allPartPrivEvent {
    const message = { ...baseallPartPrivEvent } as allPartPrivEvent
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
