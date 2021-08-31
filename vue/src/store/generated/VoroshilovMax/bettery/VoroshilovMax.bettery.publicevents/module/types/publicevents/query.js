/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { RefPubEvents } from '../publicevents/ref_pub_events';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { FihishPubEvent } from '../publicevents/fihish_pub_event';
import { ValidPubEvents } from '../publicevents/valid_pub_events';
import { PartPubEvents } from '../publicevents/part_pub_events';
import { CreatePubEvents } from '../publicevents/create_pub_events';
export const protobufPackage = 'VoroshilovMax.bettery.publicevents';
const baseQueryGetRefPubEventsRequest = { id: 0 };
export const QueryGetRefPubEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetRefPubEventsRequest };
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
        const message = { ...baseQueryGetRefPubEventsRequest };
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
        const message = { ...baseQueryGetRefPubEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetRefPubEventsResponse = {};
export const QueryGetRefPubEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.RefPubEvents !== undefined) {
            RefPubEvents.encode(message.RefPubEvents, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetRefPubEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.RefPubEvents = RefPubEvents.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetRefPubEventsResponse };
        if (object.RefPubEvents !== undefined && object.RefPubEvents !== null) {
            message.RefPubEvents = RefPubEvents.fromJSON(object.RefPubEvents);
        }
        else {
            message.RefPubEvents = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.RefPubEvents !== undefined && (obj.RefPubEvents = message.RefPubEvents ? RefPubEvents.toJSON(message.RefPubEvents) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetRefPubEventsResponse };
        if (object.RefPubEvents !== undefined && object.RefPubEvents !== null) {
            message.RefPubEvents = RefPubEvents.fromPartial(object.RefPubEvents);
        }
        else {
            message.RefPubEvents = undefined;
        }
        return message;
    }
};
const baseQueryAllRefPubEventsRequest = {};
export const QueryAllRefPubEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllRefPubEventsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllRefPubEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllRefPubEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllRefPubEventsResponse = {};
export const QueryAllRefPubEventsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.RefPubEvents) {
            RefPubEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllRefPubEventsResponse };
        message.RefPubEvents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.RefPubEvents.push(RefPubEvents.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllRefPubEventsResponse };
        message.RefPubEvents = [];
        if (object.RefPubEvents !== undefined && object.RefPubEvents !== null) {
            for (const e of object.RefPubEvents) {
                message.RefPubEvents.push(RefPubEvents.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.RefPubEvents) {
            obj.RefPubEvents = message.RefPubEvents.map((e) => (e ? RefPubEvents.toJSON(e) : undefined));
        }
        else {
            obj.RefPubEvents = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllRefPubEventsResponse };
        message.RefPubEvents = [];
        if (object.RefPubEvents !== undefined && object.RefPubEvents !== null) {
            for (const e of object.RefPubEvents) {
                message.RefPubEvents.push(RefPubEvents.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetFihishPubEventRequest = { id: 0 };
export const QueryGetFihishPubEventRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetFihishPubEventRequest };
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
        const message = { ...baseQueryGetFihishPubEventRequest };
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
        const message = { ...baseQueryGetFihishPubEventRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetFihishPubEventResponse = {};
export const QueryGetFihishPubEventResponse = {
    encode(message, writer = Writer.create()) {
        if (message.FihishPubEvent !== undefined) {
            FihishPubEvent.encode(message.FihishPubEvent, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetFihishPubEventResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.FihishPubEvent = FihishPubEvent.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetFihishPubEventResponse };
        if (object.FihishPubEvent !== undefined && object.FihishPubEvent !== null) {
            message.FihishPubEvent = FihishPubEvent.fromJSON(object.FihishPubEvent);
        }
        else {
            message.FihishPubEvent = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.FihishPubEvent !== undefined && (obj.FihishPubEvent = message.FihishPubEvent ? FihishPubEvent.toJSON(message.FihishPubEvent) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetFihishPubEventResponse };
        if (object.FihishPubEvent !== undefined && object.FihishPubEvent !== null) {
            message.FihishPubEvent = FihishPubEvent.fromPartial(object.FihishPubEvent);
        }
        else {
            message.FihishPubEvent = undefined;
        }
        return message;
    }
};
const baseQueryAllFihishPubEventRequest = {};
export const QueryAllFihishPubEventRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllFihishPubEventRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllFihishPubEventRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllFihishPubEventRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllFihishPubEventResponse = {};
export const QueryAllFihishPubEventResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.FihishPubEvent) {
            FihishPubEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllFihishPubEventResponse };
        message.FihishPubEvent = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.FihishPubEvent.push(FihishPubEvent.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllFihishPubEventResponse };
        message.FihishPubEvent = [];
        if (object.FihishPubEvent !== undefined && object.FihishPubEvent !== null) {
            for (const e of object.FihishPubEvent) {
                message.FihishPubEvent.push(FihishPubEvent.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.FihishPubEvent) {
            obj.FihishPubEvent = message.FihishPubEvent.map((e) => (e ? FihishPubEvent.toJSON(e) : undefined));
        }
        else {
            obj.FihishPubEvent = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllFihishPubEventResponse };
        message.FihishPubEvent = [];
        if (object.FihishPubEvent !== undefined && object.FihishPubEvent !== null) {
            for (const e of object.FihishPubEvent) {
                message.FihishPubEvent.push(FihishPubEvent.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetValidPubEventsRequest = { id: 0 };
export const QueryGetValidPubEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetValidPubEventsRequest };
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
        const message = { ...baseQueryGetValidPubEventsRequest };
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
        const message = { ...baseQueryGetValidPubEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetValidPubEventsResponse = {};
export const QueryGetValidPubEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.ValidPubEvents !== undefined) {
            ValidPubEvents.encode(message.ValidPubEvents, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetValidPubEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ValidPubEvents = ValidPubEvents.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetValidPubEventsResponse };
        if (object.ValidPubEvents !== undefined && object.ValidPubEvents !== null) {
            message.ValidPubEvents = ValidPubEvents.fromJSON(object.ValidPubEvents);
        }
        else {
            message.ValidPubEvents = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ValidPubEvents !== undefined && (obj.ValidPubEvents = message.ValidPubEvents ? ValidPubEvents.toJSON(message.ValidPubEvents) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetValidPubEventsResponse };
        if (object.ValidPubEvents !== undefined && object.ValidPubEvents !== null) {
            message.ValidPubEvents = ValidPubEvents.fromPartial(object.ValidPubEvents);
        }
        else {
            message.ValidPubEvents = undefined;
        }
        return message;
    }
};
const baseQueryAllValidPubEventsRequest = {};
export const QueryAllValidPubEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllValidPubEventsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllValidPubEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllValidPubEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllValidPubEventsResponse = {};
export const QueryAllValidPubEventsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ValidPubEvents) {
            ValidPubEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllValidPubEventsResponse };
        message.ValidPubEvents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ValidPubEvents.push(ValidPubEvents.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllValidPubEventsResponse };
        message.ValidPubEvents = [];
        if (object.ValidPubEvents !== undefined && object.ValidPubEvents !== null) {
            for (const e of object.ValidPubEvents) {
                message.ValidPubEvents.push(ValidPubEvents.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.ValidPubEvents) {
            obj.ValidPubEvents = message.ValidPubEvents.map((e) => (e ? ValidPubEvents.toJSON(e) : undefined));
        }
        else {
            obj.ValidPubEvents = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllValidPubEventsResponse };
        message.ValidPubEvents = [];
        if (object.ValidPubEvents !== undefined && object.ValidPubEvents !== null) {
            for (const e of object.ValidPubEvents) {
                message.ValidPubEvents.push(ValidPubEvents.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetPartPubEventsRequest = { id: 0 };
export const QueryGetPartPubEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPartPubEventsRequest };
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
        const message = { ...baseQueryGetPartPubEventsRequest };
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
        const message = { ...baseQueryGetPartPubEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetPartPubEventsResponse = {};
export const QueryGetPartPubEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.PartPubEvents !== undefined) {
            PartPubEvents.encode(message.PartPubEvents, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPartPubEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.PartPubEvents = PartPubEvents.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPartPubEventsResponse };
        if (object.PartPubEvents !== undefined && object.PartPubEvents !== null) {
            message.PartPubEvents = PartPubEvents.fromJSON(object.PartPubEvents);
        }
        else {
            message.PartPubEvents = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.PartPubEvents !== undefined && (obj.PartPubEvents = message.PartPubEvents ? PartPubEvents.toJSON(message.PartPubEvents) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPartPubEventsResponse };
        if (object.PartPubEvents !== undefined && object.PartPubEvents !== null) {
            message.PartPubEvents = PartPubEvents.fromPartial(object.PartPubEvents);
        }
        else {
            message.PartPubEvents = undefined;
        }
        return message;
    }
};
const baseQueryAllPartPubEventsRequest = {};
export const QueryAllPartPubEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPartPubEventsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPartPubEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPartPubEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllPartPubEventsResponse = {};
export const QueryAllPartPubEventsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.PartPubEvents) {
            PartPubEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPartPubEventsResponse };
        message.PartPubEvents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.PartPubEvents.push(PartPubEvents.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllPartPubEventsResponse };
        message.PartPubEvents = [];
        if (object.PartPubEvents !== undefined && object.PartPubEvents !== null) {
            for (const e of object.PartPubEvents) {
                message.PartPubEvents.push(PartPubEvents.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.PartPubEvents) {
            obj.PartPubEvents = message.PartPubEvents.map((e) => (e ? PartPubEvents.toJSON(e) : undefined));
        }
        else {
            obj.PartPubEvents = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPartPubEventsResponse };
        message.PartPubEvents = [];
        if (object.PartPubEvents !== undefined && object.PartPubEvents !== null) {
            for (const e of object.PartPubEvents) {
                message.PartPubEvents.push(PartPubEvents.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetCreatePubEventsRequest = { id: 0 };
export const QueryGetCreatePubEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCreatePubEventsRequest };
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
        const message = { ...baseQueryGetCreatePubEventsRequest };
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
        const message = { ...baseQueryGetCreatePubEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetCreatePubEventsResponse = {};
export const QueryGetCreatePubEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.CreatePubEvents !== undefined) {
            CreatePubEvents.encode(message.CreatePubEvents, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCreatePubEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.CreatePubEvents = CreatePubEvents.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCreatePubEventsResponse };
        if (object.CreatePubEvents !== undefined && object.CreatePubEvents !== null) {
            message.CreatePubEvents = CreatePubEvents.fromJSON(object.CreatePubEvents);
        }
        else {
            message.CreatePubEvents = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.CreatePubEvents !== undefined && (obj.CreatePubEvents = message.CreatePubEvents ? CreatePubEvents.toJSON(message.CreatePubEvents) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCreatePubEventsResponse };
        if (object.CreatePubEvents !== undefined && object.CreatePubEvents !== null) {
            message.CreatePubEvents = CreatePubEvents.fromPartial(object.CreatePubEvents);
        }
        else {
            message.CreatePubEvents = undefined;
        }
        return message;
    }
};
const baseQueryAllCreatePubEventsRequest = {};
export const QueryAllCreatePubEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCreatePubEventsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCreatePubEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCreatePubEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllCreatePubEventsResponse = {};
export const QueryAllCreatePubEventsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.CreatePubEvents) {
            CreatePubEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCreatePubEventsResponse };
        message.CreatePubEvents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.CreatePubEvents.push(CreatePubEvents.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllCreatePubEventsResponse };
        message.CreatePubEvents = [];
        if (object.CreatePubEvents !== undefined && object.CreatePubEvents !== null) {
            for (const e of object.CreatePubEvents) {
                message.CreatePubEvents.push(CreatePubEvents.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.CreatePubEvents) {
            obj.CreatePubEvents = message.CreatePubEvents.map((e) => (e ? CreatePubEvents.toJSON(e) : undefined));
        }
        else {
            obj.CreatePubEvents = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCreatePubEventsResponse };
        message.CreatePubEvents = [];
        if (object.CreatePubEvents !== undefined && object.CreatePubEvents !== null) {
            for (const e of object.CreatePubEvents) {
                message.CreatePubEvents.push(CreatePubEvents.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    RefPubEvents(request) {
        const data = QueryGetRefPubEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'RefPubEvents', data);
        return promise.then((data) => QueryGetRefPubEventsResponse.decode(new Reader(data)));
    }
    RefPubEventsAll(request) {
        const data = QueryAllRefPubEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'RefPubEventsAll', data);
        return promise.then((data) => QueryAllRefPubEventsResponse.decode(new Reader(data)));
    }
    FihishPubEvent(request) {
        const data = QueryGetFihishPubEventRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'FihishPubEvent', data);
        return promise.then((data) => QueryGetFihishPubEventResponse.decode(new Reader(data)));
    }
    FihishPubEventAll(request) {
        const data = QueryAllFihishPubEventRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'FihishPubEventAll', data);
        return promise.then((data) => QueryAllFihishPubEventResponse.decode(new Reader(data)));
    }
    ValidPubEvents(request) {
        const data = QueryGetValidPubEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'ValidPubEvents', data);
        return promise.then((data) => QueryGetValidPubEventsResponse.decode(new Reader(data)));
    }
    ValidPubEventsAll(request) {
        const data = QueryAllValidPubEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'ValidPubEventsAll', data);
        return promise.then((data) => QueryAllValidPubEventsResponse.decode(new Reader(data)));
    }
    PartPubEvents(request) {
        const data = QueryGetPartPubEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'PartPubEvents', data);
        return promise.then((data) => QueryGetPartPubEventsResponse.decode(new Reader(data)));
    }
    PartPubEventsAll(request) {
        const data = QueryAllPartPubEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'PartPubEventsAll', data);
        return promise.then((data) => QueryAllPartPubEventsResponse.decode(new Reader(data)));
    }
    CreatePubEvents(request) {
        const data = QueryGetCreatePubEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'CreatePubEvents', data);
        return promise.then((data) => QueryGetCreatePubEventsResponse.decode(new Reader(data)));
    }
    CreatePubEventsAll(request) {
        const data = QueryAllCreatePubEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.publicevents.Query', 'CreatePubEventsAll', data);
        return promise.then((data) => QueryAllCreatePubEventsResponse.decode(new Reader(data)));
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
