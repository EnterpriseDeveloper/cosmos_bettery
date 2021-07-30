/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'VoroshilovMax.bettery.publicevents';
const baseMsgCreateValidPubEvents = { creator: '', pubId: '', answers: '', reput: '' };
export const MsgCreateValidPubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubId !== '') {
            writer.uint32(18).string(message.pubId);
        }
        if (message.answers !== '') {
            writer.uint32(26).string(message.answers);
        }
        if (message.reput !== '') {
            writer.uint32(34).string(message.reput);
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
                    message.pubId = reader.string();
                    break;
                case 3:
                    message.answers = reader.string();
                    break;
                case 4:
                    message.reput = reader.string();
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
            message.pubId = String(object.pubId);
        }
        else {
            message.pubId = '';
        }
        if (object.answers !== undefined && object.answers !== null) {
            message.answers = String(object.answers);
        }
        else {
            message.answers = '';
        }
        if (object.reput !== undefined && object.reput !== null) {
            message.reput = String(object.reput);
        }
        else {
            message.reput = '';
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
            message.pubId = '';
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
            message.reput = '';
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
const baseMsgUpdateValidPubEvents = { creator: '', id: 0, pubId: '', answers: '', reput: '' };
export const MsgUpdateValidPubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.pubId !== '') {
            writer.uint32(26).string(message.pubId);
        }
        if (message.answers !== '') {
            writer.uint32(34).string(message.answers);
        }
        if (message.reput !== '') {
            writer.uint32(42).string(message.reput);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateValidPubEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.pubId = reader.string();
                    break;
                case 4:
                    message.answers = reader.string();
                    break;
                case 5:
                    message.reput = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateValidPubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.pubId !== undefined && object.pubId !== null) {
            message.pubId = String(object.pubId);
        }
        else {
            message.pubId = '';
        }
        if (object.answers !== undefined && object.answers !== null) {
            message.answers = String(object.answers);
        }
        else {
            message.answers = '';
        }
        if (object.reput !== undefined && object.reput !== null) {
            message.reput = String(object.reput);
        }
        else {
            message.reput = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.pubId !== undefined && (obj.pubId = message.pubId);
        message.answers !== undefined && (obj.answers = message.answers);
        message.reput !== undefined && (obj.reput = message.reput);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateValidPubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.pubId !== undefined && object.pubId !== null) {
            message.pubId = object.pubId;
        }
        else {
            message.pubId = '';
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
            message.reput = '';
        }
        return message;
    }
};
const baseMsgUpdateValidPubEventsResponse = {};
export const MsgUpdateValidPubEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateValidPubEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateValidPubEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateValidPubEventsResponse };
        return message;
    }
};
const baseMsgDeleteValidPubEvents = { creator: '', id: 0 };
export const MsgDeleteValidPubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteValidPubEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteValidPubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteValidPubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteValidPubEventsResponse = {};
export const MsgDeleteValidPubEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteValidPubEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteValidPubEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteValidPubEventsResponse };
        return message;
    }
};
const baseMsgCreatePartPubEvents = { creator: '', pubId: '', answers: '', amount: '' };
export const MsgCreatePartPubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubId !== '') {
            writer.uint32(18).string(message.pubId);
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
                    message.pubId = reader.string();
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
            message.pubId = String(object.pubId);
        }
        else {
            message.pubId = '';
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
            message.pubId = '';
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
const baseMsgUpdatePartPubEvents = { creator: '', id: 0, pubId: '', answers: '', amount: '' };
export const MsgUpdatePartPubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.pubId !== '') {
            writer.uint32(26).string(message.pubId);
        }
        if (message.answers !== '') {
            writer.uint32(34).string(message.answers);
        }
        if (message.amount !== '') {
            writer.uint32(42).string(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePartPubEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.pubId = reader.string();
                    break;
                case 4:
                    message.answers = reader.string();
                    break;
                case 5:
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
        const message = { ...baseMsgUpdatePartPubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.pubId !== undefined && object.pubId !== null) {
            message.pubId = String(object.pubId);
        }
        else {
            message.pubId = '';
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
        message.id !== undefined && (obj.id = message.id);
        message.pubId !== undefined && (obj.pubId = message.pubId);
        message.answers !== undefined && (obj.answers = message.answers);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePartPubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.pubId !== undefined && object.pubId !== null) {
            message.pubId = object.pubId;
        }
        else {
            message.pubId = '';
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
const baseMsgUpdatePartPubEventsResponse = {};
export const MsgUpdatePartPubEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePartPubEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdatePartPubEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdatePartPubEventsResponse };
        return message;
    }
};
const baseMsgDeletePartPubEvents = { creator: '', id: 0 };
export const MsgDeletePartPubEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePartPubEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeletePartPubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeletePartPubEvents };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeletePartPubEventsResponse = {};
export const MsgDeletePartPubEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePartPubEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeletePartPubEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeletePartPubEventsResponse };
        return message;
    }
};
const baseMsgCreateCreatePubEvents = {
    creator: '',
    pubId: 0,
    question: '',
    answers: '',
    premAmount: 0,
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
        if (message.premAmount !== 0) {
            writer.uint32(40).int64(message.premAmount);
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
                    message.premAmount = longToNumber(reader.int64());
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
            message.premAmount = Number(object.premAmount);
        }
        else {
            message.premAmount = 0;
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
            message.premAmount = 0;
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
    CreateValidPubEvents(request) {
        const data = MsgCreateValidPubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'CreateValidPubEvents', data);
        return promise.then((data) => MsgCreateValidPubEventsResponse.decode(new Reader(data)));
    }
    UpdateValidPubEvents(request) {
        const data = MsgUpdateValidPubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'UpdateValidPubEvents', data);
        return promise.then((data) => MsgUpdateValidPubEventsResponse.decode(new Reader(data)));
    }
    DeleteValidPubEvents(request) {
        const data = MsgDeleteValidPubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'DeleteValidPubEvents', data);
        return promise.then((data) => MsgDeleteValidPubEventsResponse.decode(new Reader(data)));
    }
    CreatePartPubEvents(request) {
        const data = MsgCreatePartPubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'CreatePartPubEvents', data);
        return promise.then((data) => MsgCreatePartPubEventsResponse.decode(new Reader(data)));
    }
    UpdatePartPubEvents(request) {
        const data = MsgUpdatePartPubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'UpdatePartPubEvents', data);
        return promise.then((data) => MsgUpdatePartPubEventsResponse.decode(new Reader(data)));
    }
    DeletePartPubEvents(request) {
        const data = MsgDeletePartPubEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Msg', 'DeletePartPubEvents', data);
        return promise.then((data) => MsgDeletePartPubEventsResponse.decode(new Reader(data)));
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
