/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'VoroshilovMax.bettery.publicevents'

export interface ValidPubEvents {
  creator: string
  id: number
  pubId: number
  answers: string
  reput: number
  answerIndex: number
}

const baseValidPubEvents: object = { creator: '', id: 0, pubId: 0, answers: '', reput: 0, answerIndex: 0 }

export const ValidPubEvents = {
  encode(message: ValidPubEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.pubId !== 0) {
      writer.uint32(24).uint64(message.pubId)
    }
    if (message.answers !== '') {
      writer.uint32(34).string(message.answers)
    }
    if (message.reput !== 0) {
      writer.uint32(40).int64(message.reput)
    }
    if (message.answerIndex !== 0) {
      writer.uint32(48).uint32(message.answerIndex)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): ValidPubEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseValidPubEvents } as ValidPubEvents
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
          message.pubId = longToNumber(reader.uint64() as Long)
          break
        case 4:
          message.answers = reader.string()
          break
        case 5:
          message.reput = longToNumber(reader.int64() as Long)
          break
        case 6:
          message.answerIndex = reader.uint32()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): ValidPubEvents {
    const message = { ...baseValidPubEvents } as ValidPubEvents
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
      message.pubId = Number(object.pubId)
    } else {
      message.pubId = 0
    }
    if (object.answers !== undefined && object.answers !== null) {
      message.answers = String(object.answers)
    } else {
      message.answers = ''
    }
    if (object.reput !== undefined && object.reput !== null) {
      message.reput = Number(object.reput)
    } else {
      message.reput = 0
    }
    if (object.answerIndex !== undefined && object.answerIndex !== null) {
      message.answerIndex = Number(object.answerIndex)
    } else {
      message.answerIndex = 0
    }
    return message
  },

  toJSON(message: ValidPubEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.pubId !== undefined && (obj.pubId = message.pubId)
    message.answers !== undefined && (obj.answers = message.answers)
    message.reput !== undefined && (obj.reput = message.reput)
    message.answerIndex !== undefined && (obj.answerIndex = message.answerIndex)
    return obj
  },

  fromPartial(object: DeepPartial<ValidPubEvents>): ValidPubEvents {
    const message = { ...baseValidPubEvents } as ValidPubEvents
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
      message.pubId = 0
    }
    if (object.answers !== undefined && object.answers !== null) {
      message.answers = object.answers
    } else {
      message.answers = ''
    }
    if (object.reput !== undefined && object.reput !== null) {
      message.reput = object.reput
    } else {
      message.reput = 0
    }
    if (object.answerIndex !== undefined && object.answerIndex !== null) {
      message.answerIndex = object.answerIndex
    } else {
      message.answerIndex = 0
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
