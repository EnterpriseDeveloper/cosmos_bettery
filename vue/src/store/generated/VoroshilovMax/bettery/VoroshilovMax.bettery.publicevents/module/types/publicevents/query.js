/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { ValidPubEvents } from '../publicevents/valid_pub_events';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { PartPubEvents } from '../publicevents/part_pub_events';
import { CreatePubEvents } from '../publicevents/create_pub_events';
export const protobufPackage = 'VoroshilovMax.bettery.publicevents';
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
