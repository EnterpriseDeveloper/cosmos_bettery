/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { RefundPubEvents } from '../publicevents/refund_pub_events'
import { RefPubEvents } from '../publicevents/ref_pub_events'
import { FihishPubEvent } from '../publicevents/fihish_pub_event'
import { ValidPubEvents } from '../publicevents/valid_pub_events'
import { PartPubEvents } from '../publicevents/part_pub_events'
import { CreatePubEvents } from '../publicevents/create_pub_events'

export const protobufPackage = 'VoroshilovMax.bettery.publicevents'

/** GenesisState defines the publicevents module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  refundPubEventsList: RefundPubEvents[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  refundPubEventsCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  refPubEventsList: RefPubEvents[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  refPubEventsCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  fihishPubEventList: FihishPubEvent[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  fihishPubEventCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  validPubEventsList: ValidPubEvents[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  validPubEventsCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  partPubEventsList: PartPubEvents[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  partPubEventsCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  createPubEventsList: CreatePubEvents[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  createPubEventsCount: number
}

const baseGenesisState: object = {
  refundPubEventsCount: 0,
  refPubEventsCount: 0,
  fihishPubEventCount: 0,
  validPubEventsCount: 0,
  partPubEventsCount: 0,
  createPubEventsCount: 0
}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.refundPubEventsList) {
      RefundPubEvents.encode(v!, writer.uint32(90).fork()).ldelim()
    }
    if (message.refundPubEventsCount !== 0) {
      writer.uint32(96).uint64(message.refundPubEventsCount)
    }
    for (const v of message.refPubEventsList) {
      RefPubEvents.encode(v!, writer.uint32(74).fork()).ldelim()
    }
    if (message.refPubEventsCount !== 0) {
      writer.uint32(80).uint64(message.refPubEventsCount)
    }
    for (const v of message.fihishPubEventList) {
      FihishPubEvent.encode(v!, writer.uint32(58).fork()).ldelim()
    }
    if (message.fihishPubEventCount !== 0) {
      writer.uint32(64).uint64(message.fihishPubEventCount)
    }
    for (const v of message.validPubEventsList) {
      ValidPubEvents.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    if (message.validPubEventsCount !== 0) {
      writer.uint32(48).uint64(message.validPubEventsCount)
    }
    for (const v of message.partPubEventsList) {
      PartPubEvents.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    if (message.partPubEventsCount !== 0) {
      writer.uint32(32).uint64(message.partPubEventsCount)
    }
    for (const v of message.createPubEventsList) {
      CreatePubEvents.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.createPubEventsCount !== 0) {
      writer.uint32(16).uint64(message.createPubEventsCount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.refundPubEventsList = []
    message.refPubEventsList = []
    message.fihishPubEventList = []
    message.validPubEventsList = []
    message.partPubEventsList = []
    message.createPubEventsList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 11:
          message.refundPubEventsList.push(RefundPubEvents.decode(reader, reader.uint32()))
          break
        case 12:
          message.refundPubEventsCount = longToNumber(reader.uint64() as Long)
          break
        case 9:
          message.refPubEventsList.push(RefPubEvents.decode(reader, reader.uint32()))
          break
        case 10:
          message.refPubEventsCount = longToNumber(reader.uint64() as Long)
          break
        case 7:
          message.fihishPubEventList.push(FihishPubEvent.decode(reader, reader.uint32()))
          break
        case 8:
          message.fihishPubEventCount = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.validPubEventsList.push(ValidPubEvents.decode(reader, reader.uint32()))
          break
        case 6:
          message.validPubEventsCount = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.partPubEventsList.push(PartPubEvents.decode(reader, reader.uint32()))
          break
        case 4:
          message.partPubEventsCount = longToNumber(reader.uint64() as Long)
          break
        case 1:
          message.createPubEventsList.push(CreatePubEvents.decode(reader, reader.uint32()))
          break
        case 2:
          message.createPubEventsCount = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.refundPubEventsList = []
    message.refPubEventsList = []
    message.fihishPubEventList = []
    message.validPubEventsList = []
    message.partPubEventsList = []
    message.createPubEventsList = []
    if (object.refundPubEventsList !== undefined && object.refundPubEventsList !== null) {
      for (const e of object.refundPubEventsList) {
        message.refundPubEventsList.push(RefundPubEvents.fromJSON(e))
      }
    }
    if (object.refundPubEventsCount !== undefined && object.refundPubEventsCount !== null) {
      message.refundPubEventsCount = Number(object.refundPubEventsCount)
    } else {
      message.refundPubEventsCount = 0
    }
    if (object.refPubEventsList !== undefined && object.refPubEventsList !== null) {
      for (const e of object.refPubEventsList) {
        message.refPubEventsList.push(RefPubEvents.fromJSON(e))
      }
    }
    if (object.refPubEventsCount !== undefined && object.refPubEventsCount !== null) {
      message.refPubEventsCount = Number(object.refPubEventsCount)
    } else {
      message.refPubEventsCount = 0
    }
    if (object.fihishPubEventList !== undefined && object.fihishPubEventList !== null) {
      for (const e of object.fihishPubEventList) {
        message.fihishPubEventList.push(FihishPubEvent.fromJSON(e))
      }
    }
    if (object.fihishPubEventCount !== undefined && object.fihishPubEventCount !== null) {
      message.fihishPubEventCount = Number(object.fihishPubEventCount)
    } else {
      message.fihishPubEventCount = 0
    }
    if (object.validPubEventsList !== undefined && object.validPubEventsList !== null) {
      for (const e of object.validPubEventsList) {
        message.validPubEventsList.push(ValidPubEvents.fromJSON(e))
      }
    }
    if (object.validPubEventsCount !== undefined && object.validPubEventsCount !== null) {
      message.validPubEventsCount = Number(object.validPubEventsCount)
    } else {
      message.validPubEventsCount = 0
    }
    if (object.partPubEventsList !== undefined && object.partPubEventsList !== null) {
      for (const e of object.partPubEventsList) {
        message.partPubEventsList.push(PartPubEvents.fromJSON(e))
      }
    }
    if (object.partPubEventsCount !== undefined && object.partPubEventsCount !== null) {
      message.partPubEventsCount = Number(object.partPubEventsCount)
    } else {
      message.partPubEventsCount = 0
    }
    if (object.createPubEventsList !== undefined && object.createPubEventsList !== null) {
      for (const e of object.createPubEventsList) {
        message.createPubEventsList.push(CreatePubEvents.fromJSON(e))
      }
    }
    if (object.createPubEventsCount !== undefined && object.createPubEventsCount !== null) {
      message.createPubEventsCount = Number(object.createPubEventsCount)
    } else {
      message.createPubEventsCount = 0
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.refundPubEventsList) {
      obj.refundPubEventsList = message.refundPubEventsList.map((e) => (e ? RefundPubEvents.toJSON(e) : undefined))
    } else {
      obj.refundPubEventsList = []
    }
    message.refundPubEventsCount !== undefined && (obj.refundPubEventsCount = message.refundPubEventsCount)
    if (message.refPubEventsList) {
      obj.refPubEventsList = message.refPubEventsList.map((e) => (e ? RefPubEvents.toJSON(e) : undefined))
    } else {
      obj.refPubEventsList = []
    }
    message.refPubEventsCount !== undefined && (obj.refPubEventsCount = message.refPubEventsCount)
    if (message.fihishPubEventList) {
      obj.fihishPubEventList = message.fihishPubEventList.map((e) => (e ? FihishPubEvent.toJSON(e) : undefined))
    } else {
      obj.fihishPubEventList = []
    }
    message.fihishPubEventCount !== undefined && (obj.fihishPubEventCount = message.fihishPubEventCount)
    if (message.validPubEventsList) {
      obj.validPubEventsList = message.validPubEventsList.map((e) => (e ? ValidPubEvents.toJSON(e) : undefined))
    } else {
      obj.validPubEventsList = []
    }
    message.validPubEventsCount !== undefined && (obj.validPubEventsCount = message.validPubEventsCount)
    if (message.partPubEventsList) {
      obj.partPubEventsList = message.partPubEventsList.map((e) => (e ? PartPubEvents.toJSON(e) : undefined))
    } else {
      obj.partPubEventsList = []
    }
    message.partPubEventsCount !== undefined && (obj.partPubEventsCount = message.partPubEventsCount)
    if (message.createPubEventsList) {
      obj.createPubEventsList = message.createPubEventsList.map((e) => (e ? CreatePubEvents.toJSON(e) : undefined))
    } else {
      obj.createPubEventsList = []
    }
    message.createPubEventsCount !== undefined && (obj.createPubEventsCount = message.createPubEventsCount)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.refundPubEventsList = []
    message.refPubEventsList = []
    message.fihishPubEventList = []
    message.validPubEventsList = []
    message.partPubEventsList = []
    message.createPubEventsList = []
    if (object.refundPubEventsList !== undefined && object.refundPubEventsList !== null) {
      for (const e of object.refundPubEventsList) {
        message.refundPubEventsList.push(RefundPubEvents.fromPartial(e))
      }
    }
    if (object.refundPubEventsCount !== undefined && object.refundPubEventsCount !== null) {
      message.refundPubEventsCount = object.refundPubEventsCount
    } else {
      message.refundPubEventsCount = 0
    }
    if (object.refPubEventsList !== undefined && object.refPubEventsList !== null) {
      for (const e of object.refPubEventsList) {
        message.refPubEventsList.push(RefPubEvents.fromPartial(e))
      }
    }
    if (object.refPubEventsCount !== undefined && object.refPubEventsCount !== null) {
      message.refPubEventsCount = object.refPubEventsCount
    } else {
      message.refPubEventsCount = 0
    }
    if (object.fihishPubEventList !== undefined && object.fihishPubEventList !== null) {
      for (const e of object.fihishPubEventList) {
        message.fihishPubEventList.push(FihishPubEvent.fromPartial(e))
      }
    }
    if (object.fihishPubEventCount !== undefined && object.fihishPubEventCount !== null) {
      message.fihishPubEventCount = object.fihishPubEventCount
    } else {
      message.fihishPubEventCount = 0
    }
    if (object.validPubEventsList !== undefined && object.validPubEventsList !== null) {
      for (const e of object.validPubEventsList) {
        message.validPubEventsList.push(ValidPubEvents.fromPartial(e))
      }
    }
    if (object.validPubEventsCount !== undefined && object.validPubEventsCount !== null) {
      message.validPubEventsCount = object.validPubEventsCount
    } else {
      message.validPubEventsCount = 0
    }
    if (object.partPubEventsList !== undefined && object.partPubEventsList !== null) {
      for (const e of object.partPubEventsList) {
        message.partPubEventsList.push(PartPubEvents.fromPartial(e))
      }
    }
    if (object.partPubEventsCount !== undefined && object.partPubEventsCount !== null) {
      message.partPubEventsCount = object.partPubEventsCount
    } else {
      message.partPubEventsCount = 0
    }
    if (object.createPubEventsList !== undefined && object.createPubEventsList !== null) {
      for (const e of object.createPubEventsList) {
        message.createPubEventsList.push(CreatePubEvents.fromPartial(e))
      }
    }
    if (object.createPubEventsCount !== undefined && object.createPubEventsCount !== null) {
      message.createPubEventsCount = object.createPubEventsCount
    } else {
      message.createPubEventsCount = 0
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
