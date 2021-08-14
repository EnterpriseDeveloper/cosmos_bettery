/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'VoroshilovMax.bettery.publicevents';
const baseCreatePubEvents = {
    creator: '',
    pubId: 0,
    question: '',
    answers: '',
    premAmount: '',
    startTime: 0,
    endTime: 0,
    expertAmount: 0,
    advisor: '',
    finished: false
};
export const CreatePubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubId !== 0) {
            writer.uint32(16).uint64(message.pubId);
        }
        if (message.question !== '') {
            writer.uint32(26).string(message.question);
        }
        for (const v of message.answers) {
            writer.uint32(34).string(v);
        }
        if (message.premAmount !== '') {
            writer.uint32(42).string(message.premAmount);
        }
        if (message.startTime !== 0) {
            writer.uint32(48).int64(message.startTime);
        }
        if (message.endTime !== 0) {
            writer.uint32(56).int64(message.endTime);
        }
        if (message.expertAmount !== 0) {
            writer.uint32(64).int64(message.expertAmount);
        }
        if (message.advisor !== '') {
            writer.uint32(74).string(message.advisor);
        }
        if (message.finished === true) {
            writer.uint32(80).bool(message.finished);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseCreatePubEvents };
        message.answers = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.pubId = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.question = reader.string();
                    break;
                case 4:
                    message.answers.push(reader.string());
                    break;
                case 5:
                    message.premAmount = reader.string();
                    break;
                case 6:
                    message.startTime = longToNumber(reader.int64());
                    break;
                case 7:
                    message.endTime = longToNumber(reader.int64());
                    break;
                case 8:
                    message.expertAmount = longToNumber(reader.int64());
                    break;
                case 9:
                    message.advisor = reader.string();
                    break;
                case 10:
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
        const message = { ...baseCreatePubEvents };
        message.answers = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.pubId !== undefined && object.pubId !== null) {
            message.pubId = Number(object.pubId);
        }
        else {
            message.pubId = 0;
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
        if (object.premAmount !== undefined && object.premAmount !== null) {
            message.premAmount = String(object.premAmount);
        }
        else {
            message.premAmount = '';
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
        if (object.expertAmount !== undefined && object.expertAmount !== null) {
            message.expertAmount = Number(object.expertAmount);
        }
        else {
            message.expertAmount = 0;
        }
        if (object.advisor !== undefined && object.advisor !== null) {
            message.advisor = String(object.advisor);
        }
        else {
            message.advisor = '';
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
        message.pubId !== undefined && (obj.pubId = message.pubId);
        message.question !== undefined && (obj.question = message.question);
        if (message.answers) {
            obj.answers = message.answers.map((e) => e);
        }
        else {
            obj.answers = [];
        }
        message.premAmount !== undefined && (obj.premAmount = message.premAmount);
        message.startTime !== undefined && (obj.startTime = message.startTime);
        message.endTime !== undefined && (obj.endTime = message.endTime);
        message.expertAmount !== undefined && (obj.expertAmount = message.expertAmount);
        message.advisor !== undefined && (obj.advisor = message.advisor);
        message.finished !== undefined && (obj.finished = message.finished);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseCreatePubEvents };
        message.answers = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.pubId !== undefined && object.pubId !== null) {
            message.pubId = object.pubId;
        }
        else {
            message.pubId = 0;
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
        if (object.premAmount !== undefined && object.premAmount !== null) {
            message.premAmount = object.premAmount;
        }
        else {
            message.premAmount = '';
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
        if (object.expertAmount !== undefined && object.expertAmount !== null) {
            message.expertAmount = object.expertAmount;
        }
        else {
            message.expertAmount = 0;
        }
        if (object.advisor !== undefined && object.advisor !== null) {
            message.advisor = object.advisor;
        }
        else {
            message.advisor = '';
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
