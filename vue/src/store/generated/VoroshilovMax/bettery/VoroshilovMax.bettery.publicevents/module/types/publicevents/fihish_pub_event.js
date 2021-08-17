/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'VoroshilovMax.bettery.publicevents';
const baseFihishPubEvent = { creator: '', pubId: 0, pool: false, reverted: false, finised: false, correctAnswer: 0, tokenMinted: '', status: '' };
export const FihishPubEvent = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubId !== 0) {
            writer.uint32(16).uint64(message.pubId);
        }
        if (message.pool === true) {
            writer.uint32(24).bool(message.pool);
        }
        if (message.reverted === true) {
            writer.uint32(32).bool(message.reverted);
        }
        if (message.finised === true) {
            writer.uint32(40).bool(message.finised);
        }
        if (message.correctAnswer !== 0) {
            writer.uint32(48).uint32(message.correctAnswer);
        }
        if (message.tokenMinted !== '') {
            writer.uint32(58).string(message.tokenMinted);
        }
        if (message.status !== '') {
            writer.uint32(66).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFihishPubEvent };
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
                    message.pool = reader.bool();
                    break;
                case 4:
                    message.reverted = reader.bool();
                    break;
                case 5:
                    message.finised = reader.bool();
                    break;
                case 6:
                    message.correctAnswer = reader.uint32();
                    break;
                case 7:
                    message.tokenMinted = reader.string();
                    break;
                case 8:
                    message.status = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseFihishPubEvent };
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
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = Boolean(object.pool);
        }
        else {
            message.pool = false;
        }
        if (object.reverted !== undefined && object.reverted !== null) {
            message.reverted = Boolean(object.reverted);
        }
        else {
            message.reverted = false;
        }
        if (object.finised !== undefined && object.finised !== null) {
            message.finised = Boolean(object.finised);
        }
        else {
            message.finised = false;
        }
        if (object.correctAnswer !== undefined && object.correctAnswer !== null) {
            message.correctAnswer = Number(object.correctAnswer);
        }
        else {
            message.correctAnswer = 0;
        }
        if (object.tokenMinted !== undefined && object.tokenMinted !== null) {
            message.tokenMinted = String(object.tokenMinted);
        }
        else {
            message.tokenMinted = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pubId !== undefined && (obj.pubId = message.pubId);
        message.pool !== undefined && (obj.pool = message.pool);
        message.reverted !== undefined && (obj.reverted = message.reverted);
        message.finised !== undefined && (obj.finised = message.finised);
        message.correctAnswer !== undefined && (obj.correctAnswer = message.correctAnswer);
        message.tokenMinted !== undefined && (obj.tokenMinted = message.tokenMinted);
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseFihishPubEvent };
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
        if (object.pool !== undefined && object.pool !== null) {
            message.pool = object.pool;
        }
        else {
            message.pool = false;
        }
        if (object.reverted !== undefined && object.reverted !== null) {
            message.reverted = object.reverted;
        }
        else {
            message.reverted = false;
        }
        if (object.finised !== undefined && object.finised !== null) {
            message.finised = object.finised;
        }
        else {
            message.finised = false;
        }
        if (object.correctAnswer !== undefined && object.correctAnswer !== null) {
            message.correctAnswer = object.correctAnswer;
        }
        else {
            message.correctAnswer = 0;
        }
        if (object.tokenMinted !== undefined && object.tokenMinted !== null) {
            message.tokenMinted = object.tokenMinted;
        }
        else {
            message.tokenMinted = '';
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = '';
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
