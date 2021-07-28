/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'VoroshilovMax.bettery.privateevents';
const baseValidPrivEvents = { creator: '', privId: 0, answer: '' };
export const ValidPrivEvents = {
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
        const message = { ...baseValidPrivEvents };
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
        const message = { ...baseValidPrivEvents };
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
        const message = { ...baseValidPrivEvents };
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
const baseallValidPrivEvent = { creator: '', privId: 0 };
export const allValidPrivEvent = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.privId !== 0) {
            writer.uint32(16).uint64(message.privId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseallValidPrivEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.privId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseallValidPrivEvent };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.privId !== undefined && (obj.privId = message.privId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseallValidPrivEvent };
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
