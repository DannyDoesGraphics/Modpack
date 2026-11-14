import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PlayerList } from "@package/net/minecraft/server/players";
import { $ClientboundDebugSamplePacket_ } from "@package/net/minecraft/network/protocol/game";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/util/debugchart" {
    export class $DebugSampleSubscriptionTracker$SubscriptionStartedAt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DebugSampleSubscriptionTracker$SubscriptionStartedAt}.
     */
    export type $DebugSampleSubscriptionTracker$SubscriptionStartedAt_ = { millis?: number, tick?: number,  } | [millis?: number, tick?: number, ];
    export class $DebugSampleSubscriptionTracker$SubscriptionRequest extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $DebugSampleSubscriptionTracker$SubscriptionRequest}.
     */
    export type $DebugSampleSubscriptionTracker$SubscriptionRequest_ = { sampleType?: $RemoteDebugSampleType_, player?: $ServerPlayer,  } | [sampleType?: $RemoteDebugSampleType_, player?: $ServerPlayer, ];
    export class $LocalSampleLogger extends $AbstractSampleLogger implements $SampleStorage {
        size(): number;
        reset(): void;
        get(index: number, dimension: number): number;
        get(index: number): number;
        capacity(): number;
        static CAPACITY: number;
        constructor(size: number);
        constructor(size: number, defaults: number[]);
    }
    export class $SampleStorage {
    }
    export interface $SampleStorage {
        size(): number;
        reset(): void;
        get(index: number, dimension: number): number;
        get(index: number): number;
        capacity(): number;
    }
    export class $TpsDebugDimensions extends $Enum<$TpsDebugDimensions> {
        static values(): $TpsDebugDimensions[];
        static valueOf(arg0: string): $TpsDebugDimensions;
        static IDLE: $TpsDebugDimensions;
        static FULL_TICK: $TpsDebugDimensions;
        static TICK_SERVER_METHOD: $TpsDebugDimensions;
        static SCHEDULED_TASKS: $TpsDebugDimensions;
    }
    /**
     * Values that may be interpreted as {@link $TpsDebugDimensions}.
     */
    export type $TpsDebugDimensions_ = "full_tick" | "tick_server_method" | "scheduled_tasks" | "idle";
    export class $DebugSampleSubscriptionTracker {
        shouldLogSamples(sampleType: $RemoteDebugSampleType_): boolean;
        broadcast(packet: $ClientboundDebugSamplePacket_): void;
        tick(tick: number): void;
        subscribe(player: $ServerPlayer, sampleType: $RemoteDebugSampleType_): void;
        static STOP_SENDING_AFTER_MS: number;
        static STOP_SENDING_AFTER_TICKS: number;
        constructor(playerList: $PlayerList);
    }
    export class $RemoteDebugSampleType extends $Enum<$RemoteDebugSampleType> {
        static values(): $RemoteDebugSampleType[];
        static valueOf(arg0: string): $RemoteDebugSampleType;
        static TICK_TIME: $RemoteDebugSampleType;
    }
    /**
     * Values that may be interpreted as {@link $RemoteDebugSampleType}.
     */
    export type $RemoteDebugSampleType_ = "tick_time";
    export class $AbstractSampleLogger implements $SampleLogger {
        logFullSample(sample: number[]): void;
        logSample(value: number): void;
        logPartialSample(value: number, arg1: number): void;
    }
    export class $SampleLogger {
    }
    export interface $SampleLogger {
        logFullSample(sample: number[]): void;
        logSample(value: number): void;
        logPartialSample(value: number, arg1: number): void;
    }
    export class $RemoteSampleLogger extends $AbstractSampleLogger {
        constructor(size: number, subscriptionTracker: $DebugSampleSubscriptionTracker, sampleType: $RemoteDebugSampleType_);
        constructor(size: number, subscriptionTracker: $DebugSampleSubscriptionTracker, sampleType: $RemoteDebugSampleType_, defaults: number[]);
    }
}
