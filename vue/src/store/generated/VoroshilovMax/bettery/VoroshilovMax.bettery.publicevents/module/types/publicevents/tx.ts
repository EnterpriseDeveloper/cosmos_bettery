/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'VoroshilovMax.bettery.publicevents'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateCreatePubEvents {
  creator: string
  pubId: number
  question: string
  answers: string[]
  premAmount: number
  startTime: number
  endTime: number
  expertAmount: number
}

export interface MsgCreateCreatePubEventsResponse {
  id: number
}

const baseMsgCreateCreatePubEvents: object = { creator: '', pubId: 0, question: '', answers: '', premAmount: 0, startTime: 0, endTime: 0, expertAmount: 0 }

export const MsgCreateCreatePubEvents = {
  encode(message: MsgCreateCreatePubEvents, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.pubId !== 0) {
      writer.uint32(16).uint64(message.pubId)
    }
    if (message.question !== '') {
      writer.uint32(26).string(message.question)
    }
    for (const v of message.answers) {
      writer.uint32(34).string(v!)
    }
    if (message.premAmount !== 0) {
      writer.uint32(40).int64(message.premAmount)
    }
    if (message.startTime !== 0) {
      writer.uint32(48).int64(message.startTime)
    }
    if (message.endTime !== 0) {
      writer.uint32(56).int64(message.endTime)
    }
    if (message.expertAmount !== 0) {
      writer.uint32(64).int64(message.expertAmount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePubEvents {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCreatePubEvents } as MsgCreateCreatePubEvents
    message.answers = []
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
          message.question = reader.string()
          break
        case 4:
          message.answers.push(reader.string())
          break
        case 5:
          message.premAmount = longToNumber(reader.int64() as Long)
          break
        case 6:
          message.startTime = longToNumber(reader.int64() as Long)
          break
        case 7:
          message.endTime = longToNumber(reader.int64() as Long)
          break
        case 8:
          message.expertAmount = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateCreatePubEvents {
    const message = { ...baseMsgCreateCreatePubEvents } as MsgCreateCreatePubEvents
    message.answers = []
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
    if (object.question !== undefined && object.question !== null) {
      message.question = String(object.question)
    } else {
      message.question = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      for (const e of object.answers) {
        message.answers.push(String(e))
      }
    }
    if (object.premAmount !== undefined && object.premAmount !== null) {
      message.premAmount = Number(object.premAmount)
    } else {
      message.premAmount = 0
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = Number(object.startTime)
    } else {
      message.startTime = 0
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = Number(object.endTime)
    } else {
      message.endTime = 0
    }
    if (object.expertAmount !== undefined && object.expertAmount !== null) {
      message.expertAmount = Number(object.expertAmount)
    } else {
      message.expertAmount = 0
    }
    return message
  },

  toJSON(message: MsgCreateCreatePubEvents): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.pubId !== undefined && (obj.pubId = message.pubId)
    message.question !== undefined && (obj.question = message.question)
    if (message.answers) {
      obj.answers = message.answers.map((e) => e)
    } else {
      obj.answers = []
    }
    message.premAmount !== undefined && (obj.premAmount = message.premAmount)
    message.startTime !== undefined && (obj.startTime = message.startTime)
    message.endTime !== undefined && (obj.endTime = message.endTime)
    message.expertAmount !== undefined && (obj.expertAmount = message.expertAmount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCreatePubEvents>): MsgCreateCreatePubEvents {
    const message = { ...baseMsgCreateCreatePubEvents } as MsgCreateCreatePubEvents
    message.answers = []
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
    if (object.question !== undefined && object.question !== null) {
      message.question = object.question
    } else {
      message.question = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      for (const e of object.answers) {
        message.answers.push(e)
      }
    }
    if (object.premAmount !== undefined && object.premAmount !== null) {
      message.premAmount = object.premAmount
    } else {
      message.premAmount = 0
    }
    if (object.startTime !== undefined && object.startTime !== null) {
      message.startTime = object.startTime
    } else {
      message.startTime = 0
    }
    if (object.endTime !== undefined && object.endTime !== null) {
      message.endTime = object.endTime
    } else {
      message.endTime = 0
    }
    if (object.expertAmount !== undefined && object.expertAmount !== null) {
      message.expertAmount = object.expertAmount
    } else {
      message.expertAmount = 0
    }
    return message
  }
}

const baseMsgCreateCreatePubEventsResponse: object = { id: 0 }

export const MsgCreateCreatePubEventsResponse = {
  encode(message: MsgCreateCreatePubEventsResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCreatePubEventsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateCreatePubEventsResponse } as MsgCreateCreatePubEventsResponse
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

  fromJSON(object: any): MsgCreateCreatePubEventsResponse {
    const message = { ...baseMsgCreateCreatePubEventsResponse } as MsgCreateCreatePubEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateCreatePubEventsResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateCreatePubEventsResponse>): MsgCreateCreatePubEventsResponse {
    const message = { ...baseMsgCreateCreatePubEventsResponse } as MsgCreateCreatePubEventsResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateCreatePubEvents(request: MsgCreateCreatePubEvents): Promise<MsgCreateCreatePubEventsResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateCreatePubEvents(request: MsgCreateCreatePubEvents): Promise<MsgCreateCreatePubEventsResponse> {
    const data = MsgCreateCreatePubEvents.encode(request).finish()
    const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'CreateCreatePubEvents', data)
    return promise.then((data) => MsgCreateCreatePubEventsResponse.decode(new Reader(data)))
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
