/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'VoroshilovMax.bettery.privateevents'

export interface CreatePrivEvents {
  creator: string
  id: number
  privId: string
  question: string
  answers: string
  winner: string
  loser: string
}

const baseCreatePrivEvents: object = { creator: '', id: 0, privId: '', question: '', answers: '', winner: '', loser: '' }

export const CreatePrivEvents = {
  encode(message: CreatePrivEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.privId !== '') {
      writer.uint32(26).string(message.privId)
    }
    if (message.question !== '') {
      writer.uint32(34).string(message.question)
    }
    if (message.answers !== '') {
      writer.uint32(42).string(message.answers)
    }
    if (message.winner !== '') {
      writer.uint32(50).string(message.winner)
    }
    if (message.loser !== '') {
      writer.uint32(58).string(message.loser)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): CreatePrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCreatePrivEvents } as CreatePrivEvents
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
          message.privId = reader.string()
          break
        case 4:
          message.question = reader.string()
          break
        case 5:
          message.answers = reader.string()
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

  fromJSON(object: any): CreatePrivEvents {
    const message = { ...baseCreatePrivEvents } as CreatePrivEvents
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
      message.privId = String(object.privId)
    } else {
      message.privId = ''
    }
    if (object.question !== undefined && object.question !== null) {
      message.question = String(object.question)
    } else {
      message.question = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      message.answers = String(object.answers)
    } else {
      message.answers = ''
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

  toJSON(message: CreatePrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.privId !== undefined && (obj.privId = message.privId)
    message.question !== undefined && (obj.question = message.question)
    message.answers !== undefined && (obj.answers = message.answers)
    message.winner !== undefined && (obj.winner = message.winner)
    message.loser !== undefined && (obj.loser = message.loser)
    return obj
  },

  fromPartial(object: DeepPartial<CreatePrivEvents>): CreatePrivEvents {
    const message = { ...baseCreatePrivEvents } as CreatePrivEvents
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
      message.privId = ''
    }
    if (object.question !== undefined && object.question !== null) {
      message.question = object.question
    } else {
      message.question = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      message.answers = object.answers
    } else {
      message.answers = ''
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
