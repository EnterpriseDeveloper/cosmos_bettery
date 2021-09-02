/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'VoroshilovMax.bettery.publicevents';
const baseRefPubEvents = { creator: '', pubId: 0, refOne: '', refTwo: '', refThree: '' };
export const RefPubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubId !== 0) {
            writer.uint32(16).uint64(message.pubId);
        }
        if (message.refOne !== '') {
            writer.uint32(26).string(message.refOne);
        }
        if (message.refTwo !== '') {
            writer.uint32(34).string(message.refTwo);
        }
        if (message.refThree !== '') {
            writer.uint32(42).string(message.refThree);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRefPubEvents };
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
                    message.refOne = reader.string();
                    break;
                case 4:
                    message.refTwo = reader.string();
                    break;
                case 5:
                    message.refThree = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRefPubEvents };
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
        if (object.refOne !== undefined && object.refOne !== null) {
            message.refOne = String(object.refOne);
        }
        else {
            message.refOne = '';
        }
        if (object.refTwo !== undefined && object.refTwo !== null) {
            message.refTwo = String(object.refTwo);
        }
        else {
            message.refTwo = '';
        }
        if (object.refThree !== undefined && object.refThree !== null) {
            message.refThree = String(object.refThree);
        }
        else {
            message.refThree = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pubId !== undefined && (obj.pubId = message.pubId);
        message.refOne !== undefined && (obj.refOne = message.refOne);
        message.refTwo !== undefined && (obj.refTwo = message.refTwo);
        message.refThree !== undefined && (obj.refThree = message.refThree);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRefPubEvents };
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
        if (object.refOne !== undefined && object.refOne !== null) {
            message.refOne = object.refOne;
        }
        else {
            message.refOne = '';
        }
        if (object.refTwo !== undefined && object.refTwo !== null) {
            message.refTwo = object.refTwo;
        }
        else {
            message.refTwo = '';
        }
        if (object.refThree !== undefined && object.refThree !== null) {
            message.refThree = object.refThree;
        }
        else {
            message.refThree = '';
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
