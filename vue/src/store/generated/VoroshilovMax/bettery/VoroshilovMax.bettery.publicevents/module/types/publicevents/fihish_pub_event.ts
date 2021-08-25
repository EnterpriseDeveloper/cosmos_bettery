/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'VoroshilovMax.bettery.publicevents'

export interface FihishPubEvent {
  creator: string
  pubId: number
  pool: boolean
  reverted: boolean
  finished: boolean
  correctAnswer: number
  tokenMinted: string
  status: string
}

const baseFihishPubEvent: object = { creator: '', pubId: 0, pool: false, reverted: false, finished: false, correctAnswer: 0, tokenMinted: '', status: '' }

export const FihishPubEvent = {
  encode(message: FihishPubEvent, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.pubId !== 0) {
      writer.uint32(16).uint64(message.pubId)
    }
    if (message.pool === true) {
      writer.uint32(24).bool(message.pool)
    }
    if (message.reverted === true) {
      writer.uint32(32).bool(message.reverted)
    }
    if (message.finished === true) {
      writer.uint32(40).bool(message.finished)
    }
    if (message.correctAnswer !== 0) {
      writer.uint32(48).uint32(message.correctAnswer)
    }
    if (message.tokenMinted !== '') {
      writer.uint32(58).string(message.tokenMinted)
    }
    if (message.status !== '') {
      writer.uint32(66).string(message.status)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): FihishPubEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseFihishPubEvent } as FihishPubEvent
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
          message.pool = reader.bool()
          break
        case 4:
          message.reverted = reader.bool()
          break
        case 5:
          message.finished = reader.bool()
          break
        case 6:
          message.correctAnswer = reader.uint32()
          break
        case 7:
          message.tokenMinted = reader.string()
          break
        case 8:
          message.status = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): FihishPubEvent {
    const message = { ...baseFihishPubEvent } as FihishPubEvent
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
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Boolean(object.pool)
    } else {
      message.pool = false
    }
    if (object.reverted !== undefined && object.reverted !== null) {
      message.reverted = Boolean(object.reverted)
    } else {
      message.reverted = false
    }
    if (object.finished !== undefined && object.finished !== null) {
      message.finished = Boolean(object.finished)
    } else {
      message.finished = false
    }
    if (object.correctAnswer !== undefined && object.correctAnswer !== null) {
      message.correctAnswer = Number(object.correctAnswer)
    } else {
      message.correctAnswer = 0
    }
    if (object.tokenMinted !== undefined && object.tokenMinted !== null) {
      message.tokenMinted = String(object.tokenMinted)
    } else {
      message.tokenMinted = ''
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status)
    } else {
      message.status = ''
    }
    return message
  },

  toJSON(message: FihishPubEvent): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.pubId !== undefined && (obj.pubId = message.pubId)
    message.pool !== undefined && (obj.pool = message.pool)
    message.reverted !== undefined && (obj.reverted = message.reverted)
    message.finished !== undefined && (obj.finished = message.finished)
    message.correctAnswer !== undefined && (obj.correctAnswer = message.correctAnswer)
    message.tokenMinted !== undefined && (obj.tokenMinted = message.tokenMinted)
    message.status !== undefined && (obj.status = message.status)
    return obj
  },

  fromPartial(object: DeepPartial<FihishPubEvent>): FihishPubEvent {
    const message = { ...baseFihishPubEvent } as FihishPubEvent
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
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = object.pool
    } else {
      message.pool = false
    }
    if (object.reverted !== undefined && object.reverted !== null) {
      message.reverted = object.reverted
    } else {
      message.reverted = false
    }
    if (object.finished !== undefined && object.finished !== null) {
      message.finished = object.finished
    } else {
      message.finished = false
    }
    if (object.correctAnswer !== undefined && object.correctAnswer !== null) {
      message.correctAnswer = object.correctAnswer
    } else {
      message.correctAnswer = 0
    }
    if (object.tokenMinted !== undefined && object.tokenMinted !== null) {
      message.tokenMinted = object.tokenMinted
    } else {
      message.tokenMinted = ''
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status
    } else {
      message.status = ''
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
