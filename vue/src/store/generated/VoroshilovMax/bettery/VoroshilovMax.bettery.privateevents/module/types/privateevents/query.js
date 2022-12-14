/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { ValidPrivEvents } from '../privateevents/valid_priv_events';
import { PartPrivEvents } from '../privateevents/part_priv_events';
import { CreatePrivEvents } from '../privateevents/create_priv_events';
export const protobufPackage = 'VoroshilovMax.bettery.privateevents';
const baseQueryGetValidPrivEventsRequest = { id: 0 };
export const QueryGetValidPrivEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetValidPrivEventsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
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
        const message = { ...baseQueryGetValidPrivEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
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
        message.id !== undefined && (obj.id = message.id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetValidPrivEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetValidPrivEventsResponse = {};
export const QueryGetValidPrivEventsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ValidPrivEvents) {
            ValidPrivEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetValidPrivEventsResponse };
        message.ValidPrivEvents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ValidPrivEvents.push(ValidPrivEvents.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryGetValidPrivEventsResponse };
        message.ValidPrivEvents = [];
        if (object.ValidPrivEvents !== undefined && object.ValidPrivEvents !== null) {
            for (const e of object.ValidPrivEvents) {
                message.ValidPrivEvents.push(ValidPrivEvents.fromJSON(e));
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
        if (message.ValidPrivEvents) {
            obj.ValidPrivEvents = message.ValidPrivEvents.map((e) => (e ? ValidPrivEvents.toJSON(e) : undefined));
        }
        else {
            obj.ValidPrivEvents = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetValidPrivEventsResponse };
        message.ValidPrivEvents = [];
        if (object.ValidPrivEvents !== undefined && object.ValidPrivEvents !== null) {
            for (const e of object.ValidPrivEvents) {
                message.ValidPrivEvents.push(ValidPrivEvents.fromPartial(e));
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
const baseQueryAllValidPrivEventsRequest = {};
export const QueryAllValidPrivEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllValidPrivEventsRequest };
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
        const message = { ...baseQueryAllValidPrivEventsRequest };
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
        const message = { ...baseQueryAllValidPrivEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllValidPrivEventsResponse = {};
export const QueryAllValidPrivEventsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.ValidPrivEvents) {
            ValidPrivEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllValidPrivEventsResponse };
        message.ValidPrivEvents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ValidPrivEvents.push(ValidPrivEvents.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllValidPrivEventsResponse };
        message.ValidPrivEvents = [];
        if (object.ValidPrivEvents !== undefined && object.ValidPrivEvents !== null) {
            for (const e of object.ValidPrivEvents) {
                message.ValidPrivEvents.push(ValidPrivEvents.fromJSON(e));
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
        if (message.ValidPrivEvents) {
            obj.ValidPrivEvents = message.ValidPrivEvents.map((e) => (e ? ValidPrivEvents.toJSON(e) : undefined));
        }
        else {
            obj.ValidPrivEvents = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllValidPrivEventsResponse };
        message.ValidPrivEvents = [];
        if (object.ValidPrivEvents !== undefined && object.ValidPrivEvents !== null) {
            for (const e of object.ValidPrivEvents) {
                message.ValidPrivEvents.push(ValidPrivEvents.fromPartial(e));
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
const baseQueryGetPartPrivEventsRequest = { id: 0 };
export const QueryGetPartPrivEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPartPrivEventsRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 2:
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
        const message = { ...baseQueryGetPartPrivEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
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
        message.id !== undefined && (obj.id = message.id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPartPrivEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetPartPrivEventsResponse = {};
export const QueryGetPartPrivEventsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.PartPrivEvents) {
            PartPrivEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPartPrivEventsResponse };
        message.PartPrivEvents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.PartPrivEvents.push(PartPrivEvents.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryGetPartPrivEventsResponse };
        message.PartPrivEvents = [];
        if (object.PartPrivEvents !== undefined && object.PartPrivEvents !== null) {
            for (const e of object.PartPrivEvents) {
                message.PartPrivEvents.push(PartPrivEvents.fromJSON(e));
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
        if (message.PartPrivEvents) {
            obj.PartPrivEvents = message.PartPrivEvents.map((e) => (e ? PartPrivEvents.toJSON(e) : undefined));
        }
        else {
            obj.PartPrivEvents = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPartPrivEventsResponse };
        message.PartPrivEvents = [];
        if (object.PartPrivEvents !== undefined && object.PartPrivEvents !== null) {
            for (const e of object.PartPrivEvents) {
                message.PartPrivEvents.push(PartPrivEvents.fromPartial(e));
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
const baseQueryAllPartPrivEventsRequest = {};
export const QueryAllPartPrivEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPartPrivEventsRequest };
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
        const message = { ...baseQueryAllPartPrivEventsRequest };
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
        const message = { ...baseQueryAllPartPrivEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllPartPrivEventsResponse = {};
export const QueryAllPartPrivEventsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.PartPrivEvents) {
            PartPrivEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllPartPrivEventsResponse };
        message.PartPrivEvents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.PartPrivEvents.push(PartPrivEvents.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllPartPrivEventsResponse };
        message.PartPrivEvents = [];
        if (object.PartPrivEvents !== undefined && object.PartPrivEvents !== null) {
            for (const e of object.PartPrivEvents) {
                message.PartPrivEvents.push(PartPrivEvents.fromJSON(e));
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
        if (message.PartPrivEvents) {
            obj.PartPrivEvents = message.PartPrivEvents.map((e) => (e ? PartPrivEvents.toJSON(e) : undefined));
        }
        else {
            obj.PartPrivEvents = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllPartPrivEventsResponse };
        message.PartPrivEvents = [];
        if (object.PartPrivEvents !== undefined && object.PartPrivEvents !== null) {
            for (const e of object.PartPrivEvents) {
                message.PartPrivEvents.push(PartPrivEvents.fromPartial(e));
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
const baseQueryGetCreatePrivEventsRequest = { id: 0 };
export const QueryGetCreatePrivEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCreatePrivEventsRequest };
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
        const message = { ...baseQueryGetCreatePrivEventsRequest };
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
        const message = { ...baseQueryGetCreatePrivEventsRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetCreatePrivEventsResponse = {};
export const QueryGetCreatePrivEventsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.CreatePrivEvents !== undefined) {
            CreatePrivEvents.encode(message.CreatePrivEvents, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetCreatePrivEventsResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.CreatePrivEvents = CreatePrivEvents.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetCreatePrivEventsResponse };
        if (object.CreatePrivEvents !== undefined && object.CreatePrivEvents !== null) {
            message.CreatePrivEvents = CreatePrivEvents.fromJSON(object.CreatePrivEvents);
        }
        else {
            message.CreatePrivEvents = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.CreatePrivEvents !== undefined && (obj.CreatePrivEvents = message.CreatePrivEvents ? CreatePrivEvents.toJSON(message.CreatePrivEvents) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetCreatePrivEventsResponse };
        if (object.CreatePrivEvents !== undefined && object.CreatePrivEvents !== null) {
            message.CreatePrivEvents = CreatePrivEvents.fromPartial(object.CreatePrivEvents);
        }
        else {
            message.CreatePrivEvents = undefined;
        }
        return message;
    }
};
const baseQueryAllCreatePrivEventsRequest = {};
export const QueryAllCreatePrivEventsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCreatePrivEventsRequest };
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
        const message = { ...baseQueryAllCreatePrivEventsRequest };
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
        const message = { ...baseQueryAllCreatePrivEventsRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllCreatePrivEventsResponse = {};
export const QueryAllCreatePrivEventsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.CreatePrivEvents) {
            CreatePrivEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllCreatePrivEventsResponse };
        message.CreatePrivEvents = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.CreatePrivEvents.push(CreatePrivEvents.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllCreatePrivEventsResponse };
        message.CreatePrivEvents = [];
        if (object.CreatePrivEvents !== undefined && object.CreatePrivEvents !== null) {
            for (const e of object.CreatePrivEvents) {
                message.CreatePrivEvents.push(CreatePrivEvents.fromJSON(e));
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
        if (message.CreatePrivEvents) {
            obj.CreatePrivEvents = message.CreatePrivEvents.map((e) => (e ? CreatePrivEvents.toJSON(e) : undefined));
        }
        else {
            obj.CreatePrivEvents = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllCreatePrivEventsResponse };
        message.CreatePrivEvents = [];
        if (object.CreatePrivEvents !== undefined && object.CreatePrivEvents !== null) {
            for (const e of object.CreatePrivEvents) {
                message.CreatePrivEvents.push(CreatePrivEvents.fromPartial(e));
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
    ValidPrivEvents(request) {
        const data = QueryGetValidPrivEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Query', 'ValidPrivEvents', data);
        return promise.then((data) => QueryGetValidPrivEventsResponse.decode(new Reader(data)));
    }
    ValidPrivEventsAll(request) {
        const data = QueryAllValidPrivEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Query', 'ValidPrivEventsAll', data);
        return promise.then((data) => QueryAllValidPrivEventsResponse.decode(new Reader(data)));
    }
    PartPrivEvents(request) {
        const data = QueryGetPartPrivEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Query', 'PartPrivEvents', data);
        return promise.then((data) => QueryGetPartPrivEventsResponse.decode(new Reader(data)));
    }
    PartPrivEventsAll(request) {
        const data = QueryAllPartPrivEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Query', 'PartPrivEventsAll', data);
        return promise.then((data) => QueryAllPartPrivEventsResponse.decode(new Reader(data)));
    }
    CreatePrivEvents(request) {
        const data = QueryGetCreatePrivEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Query', 'CreatePrivEvents', data);
        return promise.then((data) => QueryGetCreatePrivEventsResponse.decode(new Reader(data)));
    }
    CreatePrivEventsAll(request) {
        const data = QueryAllCreatePrivEventsRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.privateevents.Query', 'CreatePrivEventsAll', data);
        return promise.then((data) => QueryAllCreatePrivEventsResponse.decode(new Reader(data)));
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
