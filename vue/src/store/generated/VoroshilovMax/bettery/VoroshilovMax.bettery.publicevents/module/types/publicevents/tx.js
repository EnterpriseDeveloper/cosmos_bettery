/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'VoroshilovMax.bettery.publicevents';
const baseMsgCreateRefundPubEvents = { creator: '', pubId: 0, purpose: '' };
export const MsgCreateRefundPubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubId !== 0) {
            writer.uint32(16).uint64(message.pubId);
        }
        if (message.purpose !== '') {
            writer.uint32(26).string(message.purpose);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateRefundPubEvents };
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
                    message.purpose = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateRefundPubEvents };
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
        if (object.purpose !== undefined && object.purpose !== null) {
            message.purpose = String(object.purpose);
        }
        else {
            message.purpose = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pubId !== undefined && (obj.pubId = message.pubId);
        message.purpose !== undefined && (obj.purpose = message.purpose);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateRefundPubEvents };
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
        if (object.purpose !== undefined && object.purpose !== null) {
            message.purpose = object.purpose;
        }
        else {
            message.purpose = '';
        }
        return message;
    }
};
const baseMsgCreateRefundPubEventsResponse = { id: 0 };
export const MsgCreateRefundPubEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateRefundPubEventsResponse };
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
        const message = { ...baseMsgCreateRefundPubEventsResponse };
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
        const message = { ...baseMsgCreateRefundPubEventsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgCreateRefPubEvents = {
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
export const MsgCreateRefPubEvents = {
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
        const message = { ...baseMsgCreateRefPubEvents };
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
        const message = { ...baseMsgCreateRefPubEvents };
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
        const message = { ...baseMsgCreateRefPubEvents };
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
const baseMsgCreateRefPubEventsResponse = { id: 0 };
export const MsgCreateRefPubEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateRefPubEventsResponse };
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
        const message = { ...baseMsgCreateRefPubEventsResponse };
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
        const message = { ...baseMsgCreateRefPubEventsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgCreateFihishPubEvent = { creator: '', pubId: 0 };
export const MsgCreateFihishPubEvent = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubId !== 0) {
            writer.uint32(16).uint64(message.pubId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateFihishPubEvent };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.pubId = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateFihishPubEvent };
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
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pubId !== undefined && (obj.pubId = message.pubId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateFihishPubEvent };
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
        return message;
    }
};
const baseMsgCreateFihishPubEventResponse = { id: 0 };
export const MsgCreateFihishPubEventResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateFihishPubEventResponse };
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
        const message = { ...baseMsgCreateFihishPubEventResponse };
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
        const message = { ...baseMsgCreateFihishPubEventResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgCreateValidPubEvents = { creator: '', pubId: 0, answers: '', reput: 0 };
export const MsgCreateValidPubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubId !== 0) {
            writer.uint32(16).uint64(message.pubId);
        }
        if (message.answers !== '') {
            writer.uint32(26).string(message.answers);
        }
        if (message.reput !== 0) {
            writer.uint32(32).int64(message.reput);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateValidPubEvents };
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
                    message.answers = reader.string();
                    break;
                case 4:
                    message.reput = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateValidPubEvents };
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
        if (object.answers !== undefined && object.answers !== null) {
            message.answers = String(object.answers);
        }
        else {
            message.answers = '';
        }
        if (object.reput !== undefined && object.reput !== null) {
            message.reput = Number(object.reput);
        }
        else {
            message.reput = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pubId !== undefined && (obj.pubId = message.pubId);
        message.answers !== undefined && (obj.answers = message.answers);
        message.reput !== undefined && (obj.reput = message.reput);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateValidPubEvents };
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
        if (object.answers !== undefined && object.answers !== null) {
            message.answers = object.answers;
        }
        else {
            message.answers = '';
        }
        if (object.reput !== undefined && object.reput !== null) {
            message.reput = object.reput;
        }
        else {
            message.reput = 0;
        }
        return message;
    }
};
const baseMsgCreateValidPubEventsResponse = { id: 0 };
export const MsgCreateValidPubEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateValidPubEventsResponse };
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
        const message = { ...baseMsgCreateValidPubEventsResponse };
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
        const message = { ...baseMsgCreateValidPubEventsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgCreatePartPubEvents = { creator: '', pubId: 0, answers: '', amount: '' };
export const MsgCreatePartPubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubId !== 0) {
            writer.uint32(16).uint64(message.pubId);
        }
        if (message.answers !== '') {
            writer.uint32(26).string(message.answers);
        }
        if (message.amount !== '') {
            writer.uint32(34).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePartPubEvents };
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
                    message.answers = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePartPubEvents };
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
        if (object.answers !== undefined && object.answers !== null) {
            message.answers = String(object.answers);
        }
        else {
            message.answers = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pubId !== undefined && (obj.pubId = message.pubId);
        message.answers !== undefined && (obj.answers = message.answers);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePartPubEvents };
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
        if (object.answers !== undefined && object.answers !== null) {
            message.answers = object.answers;
        }
        else {
            message.answers = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        return message;
    }
};
const baseMsgCreatePartPubEventsResponse = { id: 0 };
export const MsgCreatePartPubEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePartPubEventsResponse };
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
        const message = { ...baseMsgCreatePartPubEventsResponse };
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
        const message = { ...baseMsgCreatePartPubEventsResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgCreateCreatePubEvents = {
    creator: '',
    pubId: 0,
    question: '',
    answers: '',
    premAmount: '',
    startTime: 0,
    endTime: 0,
    expertAmount: 0,
    advisor: ''
};
export const MsgCreateCreatePubEvents = {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCreatePubEvents };
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateCreatePubEvents };
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
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateCreatePubEvents };
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
        return message;
    }
};
const baseMsgCreateCreatePubEventsResponse = { id: 0 };
export const MsgCreateCreatePubEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateCreatePubEventsResponse };
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
        const message = { ...baseMsgCreateCreatePubEventsResponse };
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
        const message = { ...baseMsgCreateCreatePubEventsResponse };
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
    CreateRefundPubEvents(request) {
        const data = MsgCreateRefundPubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'CreateRefundPubEvents', data);
        return promise.then((data) => MsgCreateRefundPubEventsResponse.decode(new Reader(data)));
    }
    CreateRefPubEvents(request) {
        const data = MsgCreateRefPubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'CreateRefPubEvents', data);
        return promise.then((data) => MsgCreateRefPubEventsResponse.decode(new Reader(data)));
    }
    CreateFihishPubEvent(request) {
        const data = MsgCreateFihishPubEvent.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'CreateFihishPubEvent', data);
        return promise.then((data) => MsgCreateFihishPubEventResponse.decode(new Reader(data)));
    }
    CreateValidPubEvents(request) {
        const data = MsgCreateValidPubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'CreateValidPubEvents', data);
        return promise.then((data) => MsgCreateValidPubEventsResponse.decode(new Reader(data)));
    }
    CreatePartPubEvents(request) {
        const data = MsgCreatePartPubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'CreatePartPubEvents', data);
        return promise.then((data) => MsgCreatePartPubEventsResponse.decode(new Reader(data)));
    }
    CreateCreatePubEvents(request) {
        const data = MsgCreateCreatePubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'CreateCreatePubEvents', data);
        return promise.then((data) => MsgCreateCreatePubEventsResponse.decode(new Reader(data)));
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
