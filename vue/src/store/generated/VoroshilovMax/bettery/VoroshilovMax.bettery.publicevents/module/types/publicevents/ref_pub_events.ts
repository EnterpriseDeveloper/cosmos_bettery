/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'VoroshilovMax.bettery.publicevents'

export interface RefPubEvents {
  creator: string
  id: number
  pubId: string
  refOne: string
  refTwo: string
  refThree: string
}

const baseRefPubEvents: object = { creator: '', id: 0, pubId: '', refOne: '', refTwo: '', refThree: '' }

export const RefPubEvents = {
  encode(message: RefPubEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.pubId !== '') {
      writer.uint32(26).string(message.pubId)
    }
    if (message.refOne !== '') {
      writer.uint32(34).string(message.refOne)
    }
    if (message.refTwo !== '') {
      writer.uint32(42).string(message.refTwo)
    }
    if (message.refThree !== '') {
      writer.uint32(50).string(message.refThree)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): RefPubEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRefPubEvents } as RefPubEvents
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
          message.refOne = reader.string()
          break
        case 5:
          message.refTwo = reader.string()
          break
        case 6:
          message.refThree = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): RefPubEvents {
    const message = { ...baseRefPubEvents } as RefPubEvents
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
    if (object.refOne !== undefined && object.refOne !== null) {
      message.refOne = String(object.refOne)
    } else {
      message.refOne = ''
    }
    if (object.refTwo !== undefined && object.refTwo !== null) {
      message.refTwo = String(object.refTwo)
    } else {
      message.refTwo = ''
    }
    if (object.refThree !== undefined && object.refThree !== null) {
      message.refThree = String(object.refThree)
    } else {
      message.refThree = ''
    }
    return message
  },

  toJSON(message: RefPubEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.pubId !== undefined && (obj.pubId = message.pubId)
    message.refOne !== undefined && (obj.refOne = message.refOne)
    message.refTwo !== undefined && (obj.refTwo = message.refTwo)
    message.refThree !== undefined && (obj.refThree = message.refThree)
    return obj
  },

  fromPartial(object: DeepPartial<RefPubEvents>): RefPubEvents {
    const message = { ...baseRefPubEvents } as RefPubEvents
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
    if (object.refOne !== undefined && object.refOne !== null) {
      message.refOne = object.refOne
    } else {
      message.refOne = ''
    }
    if (object.refTwo !== undefined && object.refTwo !== null) {
      message.refTwo = object.refTwo
    } else {
      message.refTwo = ''
    }
    if (object.refThree !== undefined && object.refThree !== null) {
      message.refThree = object.refThree
    } else {
      message.refThree = ''
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
