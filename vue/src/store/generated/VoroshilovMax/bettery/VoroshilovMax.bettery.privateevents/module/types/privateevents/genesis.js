/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { ValidPrivEvents } from '../privateevents/valid_priv_events';
import { PartPrivEvents } from '../privateevents/part_priv_events';
import { CreatePrivEvents } from '../privateevents/create_priv_events';
export const protobufPackage = 'VoroshilovMax.bettery.privateevents';
const baseGenesisState = { validPrivEventsCount: 0, partPrivEventsCount: 0, createPrivEventsCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.validPrivEventsList) {
            ValidPrivEvents.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.validPrivEventsCount !== 0) {
            writer.uint32(48).uint64(message.validPrivEventsCount);
        }
        for (const v of message.partPrivEventsList) {
            PartPrivEvents.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.partPrivEventsCount !== 0) {
            writer.uint32(32).uint64(message.partPrivEventsCount);
        }
        for (const v of message.createPrivEventsList) {
            CreatePrivEvents.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.createPrivEventsCount !== 0) {
            writer.uint32(16).uint64(message.createPrivEventsCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.validPrivEventsList = [];
        message.partPrivEventsList = [];
        message.createPrivEventsList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 5:
                    message.validPrivEventsList.push(ValidPrivEvents.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validPrivEventsCount = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.partPrivEventsList.push(PartPrivEvents.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.partPrivEventsCount = longToNumber(reader.uint64());
                    break;
                case 1:
                    message.createPrivEventsList.push(CreatePrivEvents.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.createPrivEventsCount = longToNumber(reader.uint64());
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
        message.validPrivEventsList = [];
        message.partPrivEventsList = [];
        message.createPrivEventsList = [];
        if (object.validPrivEventsList !== undefined && object.validPrivEventsList !== null) {
            for (const e of object.validPrivEventsList) {
                message.validPrivEventsList.push(ValidPrivEvents.fromJSON(e));
            }
        }
        if (object.validPrivEventsCount !== undefined && object.validPrivEventsCount !== null) {
            message.validPrivEventsCount = Number(object.validPrivEventsCount);
        }
        else {
            message.validPrivEventsCount = 0;
        }
        if (object.partPrivEventsList !== undefined && object.partPrivEventsList !== null) {
            for (const e of object.partPrivEventsList) {
                message.partPrivEventsList.push(PartPrivEvents.fromJSON(e));
            }
        }
        if (object.partPrivEventsCount !== undefined && object.partPrivEventsCount !== null) {
            message.partPrivEventsCount = Number(object.partPrivEventsCount);
        }
        else {
            message.partPrivEventsCount = 0;
        }
        if (object.createPrivEventsList !== undefined && object.createPrivEventsList !== null) {
            for (const e of object.createPrivEventsList) {
                message.createPrivEventsList.push(CreatePrivEvents.fromJSON(e));
            }
        }
        if (object.createPrivEventsCount !== undefined && object.createPrivEventsCount !== null) {
            message.createPrivEventsCount = Number(object.createPrivEventsCount);
        }
        else {
            message.createPrivEventsCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.validPrivEventsList) {
            obj.validPrivEventsList = message.validPrivEventsList.map((e) => (e ? ValidPrivEvents.toJSON(e) : undefined));
        }
        else {
            obj.validPrivEventsList = [];
        }
        message.validPrivEventsCount !== undefined && (obj.validPrivEventsCount = message.validPrivEventsCount);
        if (message.partPrivEventsList) {
            obj.partPrivEventsList = message.partPrivEventsList.map((e) => (e ? PartPrivEvents.toJSON(e) : undefined));
        }
        else {
            obj.partPrivEventsList = [];
        }
        message.partPrivEventsCount !== undefined && (obj.partPrivEventsCount = message.partPrivEventsCount);
        if (message.createPrivEventsList) {
            obj.createPrivEventsList = message.createPrivEventsList.map((e) => (e ? CreatePrivEvents.toJSON(e) : undefined));
        }
        else {
            obj.createPrivEventsList = [];
        }
        message.createPrivEventsCount !== undefined && (obj.createPrivEventsCount = message.createPrivEventsCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.validPrivEventsList = [];
        message.partPrivEventsList = [];
        message.createPrivEventsList = [];
        if (object.validPrivEventsList !== undefined && object.validPrivEventsList !== null) {
            for (const e of object.validPrivEventsList) {
                message.validPrivEventsList.push(ValidPrivEvents.fromPartial(e));
            }
        }
        if (object.validPrivEventsCount !== undefined && object.validPrivEventsCount !== null) {
            message.validPrivEventsCount = object.validPrivEventsCount;
        }
        else {
            message.validPrivEventsCount = 0;
        }
        if (object.partPrivEventsList !== undefined && object.partPrivEventsList !== null) {
            for (const e of object.partPrivEventsList) {
                message.partPrivEventsList.push(PartPrivEvents.fromPartial(e));
            }
        }
        if (object.partPrivEventsCount !== undefined && object.partPrivEventsCount !== null) {
            message.partPrivEventsCount = object.partPrivEventsCount;
        }
        else {
            message.partPrivEventsCount = 0;
        }
        if (object.createPrivEventsList !== undefined && object.createPrivEventsList !== null) {
            for (const e of object.createPrivEventsList) {
                message.createPrivEventsList.push(CreatePrivEvents.fromPartial(e));
            }
        }
        if (object.createPrivEventsCount !== undefined && object.createPrivEventsCount !== null) {
            message.createPrivEventsCount = object.createPrivEventsCount;
        }
        else {
            message.createPrivEventsCount = 0;
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
