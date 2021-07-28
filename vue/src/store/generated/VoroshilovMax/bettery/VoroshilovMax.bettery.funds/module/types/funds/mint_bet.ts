/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'VoroshilovMax.bettery.funds'

export interface MintBet {
  creator: string
  amount: number
  userId: number
}

const baseMintBet: object = { creator: '', amount: 0, userId: 0 }

export const MintBet = {
  encode(message: MintBet, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.amount !== 0) {
      writer.uint32(16).int64(message.amount)
    }
    if (message.userId !== 0) {
      writer.uint32(24).int64(message.userId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MintBet {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMintBet } as MintBet
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.amount = longToNumber(reader.int64() as Long)
          break
        case 3:
          message.userId = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MintBet {
    const message = { ...baseMintBet } as MintBet
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount)
    } else {
      message.amount = 0
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = Number(object.userId)
    } else {
      message.userId = 0
    }
    return message
  },

  toJSON(message: MintBet): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.amount !== undefined && (obj.amount = message.amount)
    message.userId !== undefined && (obj.userId = message.userId)
    return obj
  },

  fromPartial(object: DeepPartial<MintBet>): MintBet {
    const message = { ...baseMintBet } as MintBet
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = 0
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId
    } else {
      message.userId = 0
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
