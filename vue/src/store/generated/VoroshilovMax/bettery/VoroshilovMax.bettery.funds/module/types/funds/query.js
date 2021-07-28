/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
import { SwipeBet } from '../funds/swipe_bet';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { MintBet } from '../funds/mint_bet';
export const protobufPackage = 'VoroshilovMax.bettery.funds';
const baseQueryGetSwipeBetRequest = { id: 0 };
export const QueryGetSwipeBetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSwipeBetRequest };
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
        const message = { ...baseQueryGetSwipeBetRequest };
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
        const message = { ...baseQueryGetSwipeBetRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetSwipeBetResponse = {};
export const QueryGetSwipeBetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.SwipeBet !== undefined) {
            SwipeBet.encode(message.SwipeBet, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSwipeBetResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SwipeBet = SwipeBet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSwipeBetResponse };
        if (object.SwipeBet !== undefined && object.SwipeBet !== null) {
            message.SwipeBet = SwipeBet.fromJSON(object.SwipeBet);
        }
        else {
            message.SwipeBet = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.SwipeBet !== undefined && (obj.SwipeBet = message.SwipeBet ? SwipeBet.toJSON(message.SwipeBet) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSwipeBetResponse };
        if (object.SwipeBet !== undefined && object.SwipeBet !== null) {
            message.SwipeBet = SwipeBet.fromPartial(object.SwipeBet);
        }
        else {
            message.SwipeBet = undefined;
        }
        return message;
    }
};
const baseQueryAllSwipeBetRequest = {};
export const QueryAllSwipeBetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSwipeBetRequest };
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
        const message = { ...baseQueryAllSwipeBetRequest };
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
        const message = { ...baseQueryAllSwipeBetRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllSwipeBetResponse = {};
export const QueryAllSwipeBetResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.SwipeBet) {
            SwipeBet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSwipeBetResponse };
        message.SwipeBet = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.SwipeBet.push(SwipeBet.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllSwipeBetResponse };
        message.SwipeBet = [];
        if (object.SwipeBet !== undefined && object.SwipeBet !== null) {
            for (const e of object.SwipeBet) {
                message.SwipeBet.push(SwipeBet.fromJSON(e));
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
        if (message.SwipeBet) {
            obj.SwipeBet = message.SwipeBet.map((e) => (e ? SwipeBet.toJSON(e) : undefined));
        }
        else {
            obj.SwipeBet = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSwipeBetResponse };
        message.SwipeBet = [];
        if (object.SwipeBet !== undefined && object.SwipeBet !== null) {
            for (const e of object.SwipeBet) {
                message.SwipeBet.push(SwipeBet.fromPartial(e));
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
const baseQueryGetMintBetRequest = { id: 0 };
export const QueryGetMintBetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMintBetRequest };
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
        const message = { ...baseQueryGetMintBetRequest };
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
        const message = { ...baseQueryGetMintBetRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseQueryGetMintBetResponse = {};
export const QueryGetMintBetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.MintBet !== undefined) {
            MintBet.encode(message.MintBet, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMintBetResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.MintBet = MintBet.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetMintBetResponse };
        if (object.MintBet !== undefined && object.MintBet !== null) {
            message.MintBet = MintBet.fromJSON(object.MintBet);
        }
        else {
            message.MintBet = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.MintBet !== undefined && (obj.MintBet = message.MintBet ? MintBet.toJSON(message.MintBet) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMintBetResponse };
        if (object.MintBet !== undefined && object.MintBet !== null) {
            message.MintBet = MintBet.fromPartial(object.MintBet);
        }
        else {
            message.MintBet = undefined;
        }
        return message;
    }
};
const baseQueryAllMintBetRequest = {};
export const QueryAllMintBetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMintBetRequest };
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
        const message = { ...baseQueryAllMintBetRequest };
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
        const message = { ...baseQueryAllMintBetRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllMintBetResponse = {};
export const QueryAllMintBetResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.MintBet) {
            MintBet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMintBetResponse };
        message.MintBet = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.MintBet.push(MintBet.decode(reader, reader.uint32()));
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
        const message = { ...baseQueryAllMintBetResponse };
        message.MintBet = [];
        if (object.MintBet !== undefined && object.MintBet !== null) {
            for (const e of object.MintBet) {
                message.MintBet.push(MintBet.fromJSON(e));
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
        if (message.MintBet) {
            obj.MintBet = message.MintBet.map((e) => (e ? MintBet.toJSON(e) : undefined));
        }
        else {
            obj.MintBet = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMintBetResponse };
        message.MintBet = [];
        if (object.MintBet !== undefined && object.MintBet !== null) {
            for (const e of object.MintBet) {
                message.MintBet.push(MintBet.fromPartial(e));
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
    SwipeBet(request) {
        const data = QueryGetSwipeBetRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.funds.Query', 'SwipeBet', data);
        return promise.then((data) => QueryGetSwipeBetResponse.decode(new Reader(data)));
    }
    SwipeBetAll(request) {
        const data = QueryAllSwipeBetRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.funds.Query', 'SwipeBetAll', data);
        return promise.then((data) => QueryAllSwipeBetResponse.decode(new Reader(data)));
    }
    MintBet(request) {
        const data = QueryGetMintBetRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.funds.Query', 'MintBet', data);
        return promise.then((data) => QueryGetMintBetResponse.decode(new Reader(data)));
    }
    MintBetAll(request) {
        const data = QueryAllMintBetRequest.encode(request).finish();
        const promise = this.rpc.request('VoroshilovMax.bettery.funds.Query', 'MintBetAll', data);
        return promise.then((data) => QueryAllMintBetResponse.decode(new Reader(data)));
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
