import { Writer, Reader } from 'protobufjs/minimal';
import { RefundPubEvents } from '../publicevents/refund_pub_events';
import { RefPubEvents } from '../publicevents/ref_pub_events';
import { FihishPubEvent } from '../publicevents/fihish_pub_event';
import { ValidPubEvents } from '../publicevents/valid_pub_events';
import { PartPubEvents } from '../publicevents/part_pub_events';
import { CreatePubEvents } from '../publicevents/create_pub_events';
export declare const protobufPackage = "VoroshilovMax.bettery.publicevents";
/** GenesisState defines the publicevents module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    refundPubEventsList: RefundPubEvents[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    refundPubEventsCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    refPubEventsList: RefPubEvents[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    refPubEventsCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    fihishPubEventList: FihishPubEvent[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    fihishPubEventCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    validPubEventsList: ValidPubEvents[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    validPubEventsCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    partPubEventsList: PartPubEvents[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    partPubEventsCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    createPubEventsList: CreatePubEvents[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    createPubEventsCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
