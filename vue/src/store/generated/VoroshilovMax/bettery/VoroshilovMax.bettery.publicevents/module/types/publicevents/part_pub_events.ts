/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'VoroshilovMax.bettery.publicevents'

export interface PartPubEvents {
  creator: string
  pubId: number
  answers: string
  amount: string
}

export interface allPartPubEvent {
  creator: string
  privId: number
}

const basePartPubEvents: object = { creator: '', pubId: 0, answers: '', amount: '' }

export const PartPubEvents = {
  encode(message: PartPubEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.pubId !== 0) {
      writer.uint32(16).uint64(message.pubId)
    }
    if (message.answers !== '') {
      writer.uint32(26).string(message.answers)
    }
    if (message.amount !== '') {
      writer.uint32(34).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PartPubEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePartPubEvents } as PartPubEvents
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

  fromJSON(object: any): PartPubEvents {
    const message = { ...basePartPubEvents } as PartPubEvents
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

  toJSON(message: PartPubEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.pubId !== undefined && (obj.pubId = message.pubId)
    message.answers !== undefined && (obj.answers = message.answers)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<PartPubEvents>): PartPubEvents {
    const message = { ...basePartPubEvents } as PartPubEvents
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

const baseallPartPubEvent: object = { creator: '', privId: 0 }

export const allPartPubEvent = {
  encode(message: allPartPubEvent, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.privId !== 0) {
      writer.uint32(16).uint64(message.privId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): allPartPubEvent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseallPartPubEvent } as allPartPubEvent
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

  fromJSON(object: any): allPartPubEvent {
    const message = { ...baseallPartPubEvent } as allPartPubEvent
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

  toJSON(message: allPartPubEvent): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.privId !== undefined && (obj.privId = message.privId)
    return obj
  },

  fromPartial(object: DeepPartial<allPartPubEvent>): allPartPubEvent {
    const message = { ...baseallPartPubEvent } as allPartPubEvent
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
