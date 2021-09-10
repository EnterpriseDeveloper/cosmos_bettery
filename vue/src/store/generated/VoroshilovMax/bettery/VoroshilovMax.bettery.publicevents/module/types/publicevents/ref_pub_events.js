/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'VoroshilovMax.bettery.publicevents';
const baseRefPubEvents = {
    creator: '',
    pubId: 0,
    refOneAddr: '',
    refOneAmount: '',
    refTwoAddr: '',
    refTwoAmount: '',
    refThreeAddr: '',
    refThreeAmount: '',
    payToComp: ''
};
export const RefPubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubId !== 0) {
            writer.uint32(16).uint64(message.pubId);
        }
        for (const v of message.refOneAddr) {
            writer.uint32(26).string(v);
        }
        for (const v of message.refOneAmount) {
            writer.uint32(34).string(v);
        }
        for (const v of message.refTwoAddr) {
            writer.uint32(42).string(v);
        }
        for (const v of message.refTwoAmount) {
            writer.uint32(50).string(v);
        }
        for (const v of message.refThreeAddr) {
            writer.uint32(58).string(v);
        }
        for (const v of message.refThreeAmount) {
            writer.uint32(66).string(v);
        }
        if (message.payToComp !== '') {
            writer.uint32(74).string(message.payToComp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRefPubEvents };
        message.refOneAddr = [];
        message.refOneAmount = [];
        message.refTwoAddr = [];
        message.refTwoAmount = [];
        message.refThreeAddr = [];
        message.refThreeAmount = [];
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
                    message.refOneAddr.push(reader.string());
                    break;
                case 4:
                    message.refOneAmount.push(reader.string());
                    break;
                case 5:
                    message.refTwoAddr.push(reader.string());
                    break;
                case 6:
                    message.refTwoAmount.push(reader.string());
                    break;
                case 7:
                    message.refThreeAddr.push(reader.string());
                    break;
                case 8:
                    message.refThreeAmount.push(reader.string());
                    break;
                case 9:
                    message.payToComp = reader.string();
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
        message.refOneAddr = [];
        message.refOneAmount = [];
        message.refTwoAddr = [];
        message.refTwoAmount = [];
        message.refThreeAddr = [];
        message.refThreeAmount = [];
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
        if (object.refOneAddr !== undefined && object.refOneAddr !== null) {
            for (const e of object.refOneAddr) {
                message.refOneAddr.push(String(e));
            }
        }
        if (object.refOneAmount !== undefined && object.refOneAmount !== null) {
            for (const e of object.refOneAmount) {
                message.refOneAmount.push(String(e));
            }
        }
        if (object.refTwoAddr !== undefined && object.refTwoAddr !== null) {
            for (const e of object.refTwoAddr) {
                message.refTwoAddr.push(String(e));
            }
        }
        if (object.refTwoAmount !== undefined && object.refTwoAmount !== null) {
            for (const e of object.refTwoAmount) {
                message.refTwoAmount.push(String(e));
            }
        }
        if (object.refThreeAddr !== undefined && object.refThreeAddr !== null) {
            for (const e of object.refThreeAddr) {
                message.refThreeAddr.push(String(e));
            }
        }
        if (object.refThreeAmount !== undefined && object.refThreeAmount !== null) {
            for (const e of object.refThreeAmount) {
                message.refThreeAmount.push(String(e));
            }
        }
        if (object.payToComp !== undefined && object.payToComp !== null) {
            message.payToComp = String(object.payToComp);
        }
        else {
            message.payToComp = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pubId !== undefined && (obj.pubId = message.pubId);
        if (message.refOneAddr) {
            obj.refOneAddr = message.refOneAddr.map((e) => e);
        }
        else {
            obj.refOneAddr = [];
        }
        if (message.refOneAmount) {
            obj.refOneAmount = message.refOneAmount.map((e) => e);
        }
        else {
            obj.refOneAmount = [];
        }
        if (message.refTwoAddr) {
            obj.refTwoAddr = message.refTwoAddr.map((e) => e);
        }
        else {
            obj.refTwoAddr = [];
        }
        if (message.refTwoAmount) {
            obj.refTwoAmount = message.refTwoAmount.map((e) => e);
        }
        else {
            obj.refTwoAmount = [];
        }
        if (message.refThreeAddr) {
            obj.refThreeAddr = message.refThreeAddr.map((e) => e);
        }
        else {
            obj.refThreeAddr = [];
        }
        if (message.refThreeAmount) {
            obj.refThreeAmount = message.refThreeAmount.map((e) => e);
        }
        else {
            obj.refThreeAmount = [];
        }
        message.payToComp !== undefined && (obj.payToComp = message.payToComp);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRefPubEvents };
        message.refOneAddr = [];
        message.refOneAmount = [];
        message.refTwoAddr = [];
        message.refTwoAmount = [];
        message.refThreeAddr = [];
        message.refThreeAmount = [];
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
        if (object.refOneAddr !== undefined && object.refOneAddr !== null) {
            for (const e of object.refOneAddr) {
                message.refOneAddr.push(e);
            }
        }
        if (object.refOneAmount !== undefined && object.refOneAmount !== null) {
            for (const e of object.refOneAmount) {
                message.refOneAmount.push(e);
            }
        }
        if (object.refTwoAddr !== undefined && object.refTwoAddr !== null) {
            for (const e of object.refTwoAddr) {
                message.refTwoAddr.push(e);
            }
        }
        if (object.refTwoAmount !== undefined && object.refTwoAmount !== null) {
            for (const e of object.refTwoAmount) {
                message.refTwoAmount.push(e);
            }
        }
        if (object.refThreeAddr !== undefined && object.refThreeAddr !== null) {
            for (const e of object.refThreeAddr) {
                message.refThreeAddr.push(e);
            }
        }
        if (object.refThreeAmount !== undefined && object.refThreeAmount !== null) {
            for (const e of object.refThreeAmount) {
                message.refThreeAmount.push(e);
            }
        }
        if (object.payToComp !== undefined && object.payToComp !== null) {
            message.payToComp = object.payToComp;
        }
        else {
            message.payToComp = '';
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
