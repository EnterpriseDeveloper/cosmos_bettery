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
const baseMsgUpdateValidPrivEvents = { creator: '', privId: 0, answer: '' };
export const MsgUpdateValidPrivEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.privId !== 0) {
            writer.uint32(24).uint64(message.privId);
        }
        if (message.answer !== '') {
            writer.uint32(34).string(message.answer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateValidPrivEvents };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.privId = longToNumber(reader.uint64());
                    break;
                case 4:
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
        const message = { ...baseMsgUpdateValidPrivEvents };
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
        const message = { ...baseMsgUpdateValidPrivEvents };
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
const baseMsgUpdateValidPrivEventsResponse = {};
export const MsgUpdateValidPrivEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateValidPrivEventsResponse };
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
        const message = { ...baseMsgUpdateValidPrivEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateValidPrivEventsResponse };
        return message;
    }
};
const baseMsgDeleteValidPrivEvents = { creator: '', id: 0 };
export const MsgDeleteValidPrivEvents = {
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
        const message = { ...baseMsgDeleteValidPrivEvents };
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
        const message = { ...baseMsgDeleteValidPrivEvents };
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
        const message = { ...baseMsgDeleteValidPrivEvents };
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
const baseMsgDeleteValidPrivEventsResponse = {};
export const MsgDeleteValidPrivEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteValidPrivEventsResponse };
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
        const message = { ...baseMsgDeleteValidPrivEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteValidPrivEventsResponse };
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
const baseMsgUpdatePartPrivEvents = { creator: '', privId: 0, answer: '' };
export const MsgUpdatePartPrivEvents = {
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
        const message = { ...baseMsgUpdatePartPrivEvents };
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
        const message = { ...baseMsgUpdatePartPrivEvents };
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
        const message = { ...baseMsgUpdatePartPrivEvents };
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
const baseMsgUpdatePartPrivEventsResponse = {};
export const MsgUpdatePartPrivEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePartPrivEventsResponse };
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
        const message = { ...baseMsgUpdatePartPrivEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdatePartPrivEventsResponse };
        return message;
    }
};
const baseMsgDeletePartPrivEvents = { creator: '', id: 0 };
export const MsgDeletePartPrivEvents = {
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
        const message = { ...baseMsgDeletePartPrivEvents };
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
        const message = { ...baseMsgDeletePartPrivEvents };
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
        const message = { ...baseMsgDeletePartPrivEvents };
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
const baseMsgDeletePartPrivEventsResponse = {};
export const MsgDeletePartPrivEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePartPrivEventsResponse };
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
        const message = { ...baseMsgDeletePartPrivEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeletePartPrivEventsResponse };
        return message;
    }
};
const baseMsgCreateCreatePrivEvents = { creator: '', privId: 0, question: '', answers: '', winner: '', loser: '' };
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
const baseMsgUpdateCreatePrivEvents = { creator: '', privId: 0, question: '', answers: '', winner: '', loser: '' };
export const MsgUpdateCreatePrivEvents = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.privId !== 0) {
            writer.uint32(16).uint64(message.privId);
        }
        if (message.question !== '') {
            writer.uint32(34).string(message.question);
        }
        for (const v of message.answers) {
            writer.uint32(42).string(v);
        }
        if (message.winner !== '') {
            writer.uint32(50).string(message.winner);
        }
        if (message.loser !== '') {
            writer.uint32(58).string(message.loser);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCreatePrivEvents };
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
                case 4:
                    message.question = reader.string();
                    break;
                case 5:
                    message.answers.push(reader.string());
                    break;
                case 6:
                    message.winner = reader.string();
                    break;
                case 7:
                    message.loser = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateCreatePrivEvents };
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
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateCreatePrivEvents };
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
        return message;
    }
};
const baseMsgUpdateCreatePrivEventsResponse = {};
export const MsgUpdateCreatePrivEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateCreatePrivEventsResponse };
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
        const message = { ...baseMsgUpdateCreatePrivEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateCreatePrivEventsResponse };
        return message;
    }
};
const baseMsgDeleteCreatePrivEvents = { creator: '', id: 0 };
export const MsgDeleteCreatePrivEvents = {
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
        const message = { ...baseMsgDeleteCreatePrivEvents };
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
        const message = { ...baseMsgDeleteCreatePrivEvents };
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
        const message = { ...baseMsgDeleteCreatePrivEvents };
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
const baseMsgDeleteCreatePrivEventsResponse = {};
export const MsgDeleteCreatePrivEventsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteCreatePrivEventsResponse };
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
        const message = { ...baseMsgDeleteCreatePrivEventsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteCreatePrivEventsResponse };
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
    UpdateValidPrivEvents(request) {
        const data = MsgUpdateValidPrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'UpdateValidPrivEvents', data);
        return promise.then((data) => MsgUpdateValidPrivEventsResponse.decode(new Reader(data)));
    }
    DeleteValidPrivEvents(request) {
        const data = MsgDeleteValidPrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'DeleteValidPrivEvents', data);
        return promise.then((data) => MsgDeleteValidPrivEventsResponse.decode(new Reader(data)));
    }
    CreatePartPrivEvents(request) {
        const data = MsgCreatePartPrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'CreatePartPrivEvents', data);
        return promise.then((data) => MsgCreatePartPrivEventsResponse.decode(new Reader(data)));
    }
    UpdatePartPrivEvents(request) {
        const data = MsgUpdatePartPrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'UpdatePartPrivEvents', data);
        return promise.then((data) => MsgUpdatePartPrivEventsResponse.decode(new Reader(data)));
    }
    DeletePartPrivEvents(request) {
        const data = MsgDeletePartPrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'DeletePartPrivEvents', data);
        return promise.then((data) => MsgDeletePartPrivEventsResponse.decode(new Reader(data)));
    }
    CreateCreatePrivEvents(request) {
        const data = MsgCreateCreatePrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'CreateCreatePrivEvents', data);
        return promise.then((data) => MsgCreateCreatePrivEventsResponse.decode(new Reader(data)));
    }
    UpdateCreatePrivEvents(request) {
        const data = MsgUpdateCreatePrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'UpdateCreatePrivEvents', data);
        return promise.then((data) => MsgUpdateCreatePrivEventsResponse.decode(new Reader(data)));
    }
    DeleteCreatePrivEvents(request) {
        const data = MsgDeleteCreatePrivEvents.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Msg', 'DeleteCreatePrivEvents', data);
        return promise.then((data) => MsgDeleteCreatePrivEventsResponse.decode(new Reader(data)));
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
