import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "VoroshilovMax.bettery.publicevents";
export interface CreatePubEvents {
    creator: string;
    pubId: number;
    question: string;
    answers: string[];
    premAmount: string;
    startTime: number;
    endTime: number;
    expertAmount: number;
    advisor: string;
    finished: boolean;
}
export declare const CreatePubEvents: {
    encode(message: CreatePubEvents, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): CreatePubEvents;
    fromJSON(object: any): CreatePubEvents;
    toJSON(message: CreatePubEvents): unknown;
    fromPartial(object: DeepPartial<CreatePubEvents>): CreatePubEvents;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
