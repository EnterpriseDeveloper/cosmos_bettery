/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'VoroshilovMax.bettery.privateevents';
const baseMsgCreateValidPrivEvents = { creator: '', privId: 0, answer: '' };
export const MsgCreateValidPrivEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.privId !== 0) {
            writer.uint32(16).uint64(message.privId);
        }
        if (message.answer !== '') {
            writer.uint32(26).string(message.answer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateValidPrivEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.privId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.answer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateValidPrivEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.privId !== undefined && object.privId !== null) {
            message.privId = Number(object.privId);
        }
        else {
            message.privId = 0;
        }
        if (object.answer !== undefined && object.answer !== null) {
            message.answer = String(object.answer);
        }
        else {
            message.answer = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.privId !== undefined && (obj.privId = message.privId);
        message.answer !== undefined && (obj.answer = message.answer);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateValidPrivEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.privId !== undefined && object.privId !== null) {
            message.privId = object.privId;
        }
        else {
            message.privId = 0;
        }
        if (object.answer !== undefined && object.answer !== null) {
            message.answer = object.answer;
        }
        else {
            message.answer = '';
        }
        return message;
    }
};
const baseMsgCreateValidPrivEventsResponse = { id: 0 };
export const MsgCreateValidPrivEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateValidPrivEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateValidPrivEventsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateValidPrivEventsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgCreatePartPrivEvents = { creator: '', privId: 0, answer: '' };
export const MsgCreatePartPrivEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.privId !== 0) {
            writer.uint32(16).uint64(message.privId);
        }
        if (message.answer !== '') {
            writer.uint32(26).string(message.answer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePartPrivEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.privId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.answer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePartPrivEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.privId !== undefined && object.privId !== null) {
            message.privId = Number(object.privId);
        }
        else {
            message.privId = 0;
        }
        if (object.answer !== undefined && object.answer !== null) {
            message.answer = String(object.answer);
        }
        else {
            message.answer = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.privId !== undefined && (obj.privId = message.privId);
        message.answer !== undefined && (obj.answer = message.answer);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePartPrivEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.privId !== undefined && object.privId !== null) {
            message.privId = object.privId;
        }
        else {
            message.privId = 0;
        }
        if (object.answer !== undefined && object.answer !== null) {
            message.answer = object.answer;
        }
        else {
            message.answer = '';
        }
        return message;
    }
};
const baseMsgCreatePartPrivEventsResponse = { id: 0 };
export const MsgCreatePartPrivEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePartPrivEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePartPrivEventsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePartPrivEventsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgCreateCreatePrivEvents = {
    creator: '',
    privId: 0,
    question: '',
    answers: '',
    winner: '',
    loser: '',
    startTime: 0,
    endTime: 0,
    finished: false
};
export const MsgCreateCreatePrivEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.privId !== 0) {
            writer.uint32(16).uint64(message.privId);
        }
        if (message.question !== '') {
            writer.uint32(26).string(message.question);
        }
        for (const v of message.answers) {
            writer.uint32(34).string(v);
        }
        if (message.winner !== '') {
            writer.uint32(42).string(message.winner);
        }
        if (message.loser !== '') {
            writer.uint32(50).string(message.loser);
        }
        if (message.startTime !== 0) {
            writer.uint32(56).uint64(message.startTime);
        }
        if (message.endTime !== 0) {
            writer.uint32(64).uint64(message.endTime);
        }
        if (message.finished === true) {
            writer.uint32(72).bool(message.finished);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCreatePrivEvents };
        message.answers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.privId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.question = reader.string();
                    break;
                case 4:
                    message.answers.push(reader.string());
                    break;
                case 5:
                    message.winner = reader.string();
                    break;
                case 6:
                    message.loser = reader.string();
                    break;
                case 7:
                    message.startTime = longToNumber(reader.uint64());
                    break;
                case 8:
                    message.endTime = longToNumber(reader.uint64());
                    break;
                case 9:
                    message.finished = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCreatePrivEvents };
        message.answers = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.privId !== undefined && object.privId !== null) {
            message.privId = Number(object.privId);
        }
        else {
            message.privId = 0;
        }
        if (object.question !== undefined && object.question !== null) {
            message.question = String(object.question);
        }
        else {
            message.question = '';
        }
        if (object.answers !== undefined && object.answers !== null) {
            for (const e of object.answers) {
                message.answers.push(String(e));
            }
        }
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = String(object.winner);
        }
        else {
            message.winner = '';
        }
        if (object.loser !== undefined && object.loser !== null) {
            message.loser = String(object.loser);
        }
        else {
            message.loser = '';
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = Number(object.startTime);
        }
        else {
            message.startTime = 0;
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = Number(object.endTime);
        }
        else {
            message.endTime = 0;
        }
        if (object.finished !== undefined && object.finished !== null) {
            message.finished = Boolean(object.finished);
        }
        else {
            message.finished = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.privId !== undefined && (obj.privId = message.privId);
        message.question !== undefined && (obj.question = message.question);
        if (message.answers) {
            obj.answers = message.answers.map((e) => e);
        }
        else {
            obj.answers = [];
        }
        message.winner !== undefined && (obj.winner = message.winner);
        message.loser !== undefined && (obj.loser = message.loser);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.finished !== undefined && (obj.finished = message.finished);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCreatePrivEvents };
        message.answers = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.privId !== undefined && object.privId !== null) {
            message.privId = object.privId;
        }
        else {
            message.privId = 0;
        }
        if (object.question !== undefined && object.question !== null) {
            message.question = object.question;
        }
        else {
            message.question = '';
        }
        if (object.answers !== undefined && object.answers !== null) {
            for (const e of object.answers) {
                message.answers.push(e);
            }
        }
        if (object.winner !== undefined && object.winner !== null) {
            message.winner = object.winner;
        }
        else {
            message.winner = '';
        }
        if (object.loser !== undefined && object.loser !== null) {
            message.loser = object.loser;
        }
        else {
            message.loser = '';
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = object.startTime;
        }
        else {
            message.startTime = 0;
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = object.endTime;
        }
        else {
            message.endTime = 0;
        }
        if (object.finished !== undefined && object.finished !== null) {
            message.finished = object.finished;
        }
        else {
            message.finished = false;
        }
        return message;
    }
};
const baseMsgCreateCreatePrivEventsResponse = { id: 0 };
export const MsgCreateCreatePrivEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCreatePrivEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCreatePrivEventsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCreatePrivEventsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateValidPrivEvents(request) {
        const data = MsgCreateValidPrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'CreateValidPrivEvents', data);
        return promise.then((data) => MsgCreateValidPrivEventsResponse.decode(new Reader(data)));
    }
    CreatePartPrivEvents(request) {
        const data = MsgCreatePartPrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'CreatePartPrivEvents', data);
        return promise.then((data) => MsgCreatePartPrivEventsResponse.decode(new Reader(data)));
    }
    CreateCreatePrivEvents(request) {
        const data = MsgCreateCreatePrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'CreateCreatePrivEvents', data);
        return promise.then((data) => MsgCreateCreatePrivEventsResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
