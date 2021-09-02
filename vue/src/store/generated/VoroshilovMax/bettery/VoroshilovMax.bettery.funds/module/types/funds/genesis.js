/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { SwipeBet } from '../funds/swipe_bet';
import { MintBet } from '../funds/mint_bet';
export const protobufPackage = 'VoroshilovMax.bettery.funds';
const baseGenesisState = { swipeBetCount: 0, mintBetCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.swipeBetList) {
            SwipeBet.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.swipeBetCount !== 0) {
            writer.uint32(32).uint64(message.swipeBetCount);
        }
        for (const v of message.mintBetList) {
            MintBet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.mintBetCount !== 0) {
            writer.uint32(16).uint64(message.mintBetCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.swipeBetList = [];
        message.mintBetList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.swipeBetList.push(SwipeBet.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.swipeBetCount = longToNumber(reader.uint64());
                    break;
                case 1:
                    message.mintBetList.push(MintBet.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.mintBetCount = longToNumber(reader.uint64());
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
        message.swipeBetList = [];
        message.mintBetList = [];
        if (object.swipeBetList !== undefined && object.swipeBetList !== null) {
            for (const e of object.swipeBetList) {
                message.swipeBetList.push(SwipeBet.fromJSON(e));
            }
        }
        if (object.swipeBetCount !== undefined && object.swipeBetCount !== null) {
            message.swipeBetCount = Number(object.swipeBetCount);
        }
        else {
            message.swipeBetCount = 0;
        }
        if (object.mintBetList !== undefined && object.mintBetList !== null) {
            for (const e of object.mintBetList) {
                message.mintBetList.push(MintBet.fromJSON(e));
            }
        }
        if (object.mintBetCount !== undefined && object.mintBetCount !== null) {
            message.mintBetCount = Number(object.mintBetCount);
        }
        else {
            message.mintBetCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.swipeBetList) {
            obj.swipeBetList = message.swipeBetList.map((e) => (e ? SwipeBet.toJSON(e) : undefined));
        }
        else {
            obj.swipeBetList = [];
        }
        message.swipeBetCount !== undefined && (obj.swipeBetCount = message.swipeBetCount);
        if (message.mintBetList) {
            obj.mintBetList = message.mintBetList.map((e) => (e ? MintBet.toJSON(e) : undefined));
        }
        else {
            obj.mintBetList = [];
        }
        message.mintBetCount !== undefined && (obj.mintBetCount = message.mintBetCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.swipeBetList = [];
        message.mintBetList = [];
        if (object.swipeBetList !== undefined && object.swipeBetList !== null) {
            for (const e of object.swipeBetList) {
                message.swipeBetList.push(SwipeBet.fromPartial(e));
            }
        }
        if (object.swipeBetCount !== undefined && object.swipeBetCount !== null) {
            message.swipeBetCount = object.swipeBetCount;
        }
        else {
            message.swipeBetCount = 0;
        }
        if (object.mintBetList !== undefined && object.mintBetList !== null) {
            for (const e of object.mintBetList) {
                message.mintBetList.push(MintBet.fromPartial(e));
            }
        }
        if (object.mintBetCount !== undefined && object.mintBetCount !== null) {
            message.mintBetCount = object.mintBetCount;
        }
        else {
            message.mintBetCount = 0;
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
