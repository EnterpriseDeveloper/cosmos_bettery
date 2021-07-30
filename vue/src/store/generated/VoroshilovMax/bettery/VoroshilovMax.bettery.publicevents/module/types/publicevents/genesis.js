/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { ValidPubEvents } from '../publicevents/valid_pub_events';
import { PartPubEvents } from '../publicevents/part_pub_events';
import { CreatePubEvents } from '../publicevents/create_pub_events';
export const protobufPackage = 'VoroshilovMax.bettery.publicevents';
const baseGenesisState = { validPubEventsCount: 0, partPubEventsCount: 0, createPubEventsCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.validPubEventsList) {
            ValidPubEvents.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.validPubEventsCount !== 0) {
            writer.uint32(48).uint64(message.validPubEventsCount);
        }
        for (const v of message.partPubEventsList) {
            PartPubEvents.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.partPubEventsCount !== 0) {
            writer.uint32(32).uint64(message.partPubEventsCount);
        }
        for (const v of message.createPubEventsList) {
            CreatePubEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.createPubEventsCount !== 0) {
            writer.uint32(16).uint64(message.createPubEventsCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.validPubEventsList = [];
        message.partPubEventsList = [];
        message.createPubEventsList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 5:
                    message.validPubEventsList.push(ValidPubEvents.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validPubEventsCount = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.partPubEventsList.push(PartPubEvents.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.partPubEventsCount = longToNumber(reader.uint64());
                    break;
                case 1:
                    message.createPubEventsList.push(CreatePubEvents.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.createPubEventsCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.validPubEventsList = [];
        message.partPubEventsList = [];
        message.createPubEventsList = [];
        if (object.validPubEventsList !== undefined && object.validPubEventsList !== null) {
            for (const e of object.validPubEventsList) {
                message.validPubEventsList.push(ValidPubEvents.fromJSON(e));
            }
        }
        if (object.validPubEventsCount !== undefined && object.validPubEventsCount !== null) {
            message.validPubEventsCount = Number(object.validPubEventsCount);
        }
        else {
            message.validPubEventsCount = 0;
        }
        if (object.partPubEventsList !== undefined && object.partPubEventsList !== null) {
            for (const e of object.partPubEventsList) {
                message.partPubEventsList.push(PartPubEvents.fromJSON(e));
            }
        }
        if (object.partPubEventsCount !== undefined && object.partPubEventsCount !== null) {
            message.partPubEventsCount = Number(object.partPubEventsCount);
        }
        else {
            message.partPubEventsCount = 0;
        }
        if (object.createPubEventsList !== undefined && object.createPubEventsList !== null) {
            for (const e of object.createPubEventsList) {
                message.createPubEventsList.push(CreatePubEvents.fromJSON(e));
            }
        }
        if (object.createPubEventsCount !== undefined && object.createPubEventsCount !== null) {
            message.createPubEventsCount = Number(object.createPubEventsCount);
        }
        else {
            message.createPubEventsCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.validPubEventsList) {
            obj.validPubEventsList = message.validPubEventsList.map((e) => (e ? ValidPubEvents.toJSON(e) : undefined));
        }
        else {
            obj.validPubEventsList = [];
        }
        message.validPubEventsCount !== undefined && (obj.validPubEventsCount = message.validPubEventsCount);
        if (message.partPubEventsList) {
            obj.partPubEventsList = message.partPubEventsList.map((e) => (e ? PartPubEvents.toJSON(e) : undefined));
        }
        else {
            obj.partPubEventsList = [];
        }
        message.partPubEventsCount !== undefined && (obj.partPubEventsCount = message.partPubEventsCount);
        if (message.createPubEventsList) {
            obj.createPubEventsList = message.createPubEventsList.map((e) => (e ? CreatePubEvents.toJSON(e) : undefined));
        }
        else {
            obj.createPubEventsList = [];
        }
        message.createPubEventsCount !== undefined && (obj.createPubEventsCount = message.createPubEventsCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.validPubEventsList = [];
        message.partPubEventsList = [];
        message.createPubEventsList = [];
        if (object.validPubEventsList !== undefined && object.validPubEventsList !== null) {
            for (const e of object.validPubEventsList) {
                message.validPubEventsList.push(ValidPubEvents.fromPartial(e));
            }
        }
        if (object.validPubEventsCount !== undefined && object.validPubEventsCount !== null) {
            message.validPubEventsCount = object.validPubEventsCount;
        }
        else {
            message.validPubEventsCount = 0;
        }
        if (object.partPubEventsList !== undefined && object.partPubEventsList !== null) {
            for (const e of object.partPubEventsList) {
                message.partPubEventsList.push(PartPubEvents.fromPartial(e));
            }
        }
        if (object.partPubEventsCount !== undefined && object.partPubEventsCount !== null) {
            message.partPubEventsCount = object.partPubEventsCount;
        }
        else {
            message.partPubEventsCount = 0;
        }
        if (object.createPubEventsList !== undefined && object.createPubEventsList !== null) {
            for (const e of object.createPubEventsList) {
                message.createPubEventsList.push(CreatePubEvents.fromPartial(e));
            }
        }
        if (object.createPubEventsCount !== undefined && object.createPubEventsCount !== null) {
            message.createPubEventsCount = object.createPubEventsCount;
        }
        else {
            message.createPubEventsCount = 0;
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
