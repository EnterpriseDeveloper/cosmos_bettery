/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'VoroshilovMax.bettery.privateevents'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCreatePrivEvents {
  creator: string
  privId: string
  question: string
  answers: string
  winner: string
  loser: string
}

export interface MsgCreateCreatePrivEventsResponse {
  id: number
}

export interface MsgUpdateCreatePrivEvents {
  creator: string
  id: number
  privId: string
  question: string
  answers: string
  winner: string
  loser: string
}

export interface MsgUpdateCreatePrivEventsResponse {}

export interface MsgDeleteCreatePrivEvents {
  creator: string
  id: number
}

export interface MsgDeleteCreatePrivEventsResponse {}

const baseMsgCreateCreatePrivEvents: object = { creator: '', privId: '', question: '', answers: '', winner: '', loser: '' }

export const MsgCreateCreatePrivEvents = {
  encode(message: MsgCreateCreatePrivEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.privId !== '') {
      writer.uint32(18).string(message.privId)
    }
    if (message.question !== '') {
      writer.uint32(26).string(message.question)
    }
    if (message.answers !== '') {
      writer.uint32(34).string(message.answers)
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
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.privId = reader.string()
          break
        case 3:
          message.question = reader.string()
          break
        case 4:
          message.answers = reader.string()
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
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
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

  toJSON(message: MsgCreateCreatePrivEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.privId !== undefined && (obj.privId = message.privId)
    message.question !== undefined && (obj.question = message.question)
    message.answers !== undefined && (obj.answers = message.answers)
    message.winner !== undefined && (obj.winner = message.winner)
    message.loser !== undefined && (obj.loser = message.loser)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCreatePrivEvents>): MsgCreateCreatePrivEvents {
    const message = { ...baseMsgCreateCreatePrivEvents } as MsgCreateCreatePrivEvents
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
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

const baseMsgUpdateCreatePrivEvents: object = { creator: '', id: 0, privId: '', question: '', answers: '', winner: '', loser: '' }

export const MsgUpdateCreatePrivEvents = {
  encode(message: MsgUpdateCreatePrivEvents, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateCreatePrivEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateCreatePrivEvents } as MsgUpdateCreatePrivEvents
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

  fromJSON(object: any): MsgUpdateCreatePrivEvents {
    const message = { ...baseMsgUpdateCreatePrivEvents } as MsgUpdateCreatePrivEvents
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

  toJSON(message: MsgUpdateCreatePrivEvents): unknown {
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

  fromPartial(object: DeepPartial<MsgUpdateCreatePrivEvents>): MsgUpdateCreatePrivEvents {
    const message = { ...baseMsgUpdateCreatePrivEvents } as MsgUpdateCreatePrivEvents
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
  CreateCreatePrivEvents(request: MsgCreateCreatePrivEvents): Promise<MsgCreateCreatePrivEventsResponse>
  UpdateCreatePrivEvents(request: MsgUpdateCreatePrivEvents): Promise<MsgUpdateCreatePrivEventsResponse>
  DeleteCreatePrivEvents(request: MsgDeleteCreatePrivEvents): Promise<MsgDeleteCreatePrivEventsResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
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
