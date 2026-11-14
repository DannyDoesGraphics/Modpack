import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component, $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ScheduleDataEntry } from "@package/com/simibubi/create/content/trains/schedule";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $RedstoneLinkNetworkHandler$Frequency } from "@package/com/simibubi/create/content/redstone/link";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/schedule/condition" {
    export class $TimedWaitCondition extends $ScheduleWaitCondition {
        getUnit(): $TimedWaitCondition$TimeUnit;
        totalWaitTicks(): number;
        getValue(): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
        get unit(): $TimedWaitCondition$TimeUnit;
        get value(): number;
    }
    export class $TimeOfDayCondition extends $ScheduleWaitCondition {
        twoDigits(arg0: number): string;
        getDigitalDisplay(arg0: number, arg1: number, arg2: boolean): $MutableComponent;
        getRotation(): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
        get rotation(): number;
    }
    export class $CargoThresholdCondition extends $LazyTickedScheduleCondition {
        lazyTickCompletion(arg0: $Level_, arg1: $Train, arg2: $CompoundTag_): boolean;
        getMeasure(): number;
        getOperator(): $CargoThresholdCondition$Ops;
        getThreshold(): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
        get measure(): number;
        get operator(): $CargoThresholdCondition$Ops;
        get threshold(): number;
    }
    export class $ScheduleWaitCondition extends $ScheduleDataEntry {
        getWaitingStatus(arg0: $Level_, arg1: $Train, arg2: $CompoundTag_): $MutableComponent;
        tickCompletion(arg0: $Level_, arg1: $Train, arg2: $CompoundTag_): boolean;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ScheduleWaitCondition;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
    }
    export class $StationPoweredCondition extends $ScheduleWaitCondition {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
    }
    export class $FluidThresholdCondition extends $CargoThresholdCondition {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
    }
    export class $TimedWaitCondition$TimeUnit extends $Enum<$TimedWaitCondition$TimeUnit> {
        static translatedOptions(): $List<$Component>;
        static values(): $TimedWaitCondition$TimeUnit[];
        static valueOf(arg0: string): $TimedWaitCondition$TimeUnit;
        static TICKS: $TimedWaitCondition$TimeUnit;
        static SECONDS: $TimedWaitCondition$TimeUnit;
        ticksPer: number;
        static MINUTES: $TimedWaitCondition$TimeUnit;
        suffix: string;
        key: string;
    }
    /**
     * Values that may be interpreted as {@link $TimedWaitCondition$TimeUnit}.
     */
    export type $TimedWaitCondition$TimeUnit_ = "ticks" | "seconds" | "minutes";
    export class $LazyTickedScheduleCondition extends $ScheduleWaitCondition {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor(arg0: number);
    }
    export class $RedstoneLinkCondition extends $ScheduleWaitCondition {
        lowActivation(): boolean;
        freq: $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
    }
    export class $IdleCargoCondition extends $TimedWaitCondition {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
    }
    export class $ItemThresholdCondition extends $CargoThresholdCondition {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
    }
    export class $ScheduledDelay extends $TimedWaitCondition {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
    }
    export class $PlayerPassengerCondition extends $ScheduleWaitCondition {
        canOvershoot(): boolean;
        getTarget(): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
        get target(): number;
    }
    export class $StationUnloadedCondition extends $ScheduleWaitCondition {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
    }
    export class $CargoThresholdCondition$Ops extends $Enum<$CargoThresholdCondition$Ops> {
        static translatedOptions(): $List<$Component>;
        static values(): $CargoThresholdCondition$Ops[];
        test(arg0: number, arg1: number): boolean;
        static valueOf(arg0: string): $CargoThresholdCondition$Ops;
        static EQUAL: $CargoThresholdCondition$Ops;
        formatted: string;
        static GREATER: $CargoThresholdCondition$Ops;
        static LESS: $CargoThresholdCondition$Ops;
    }
    /**
     * Values that may be interpreted as {@link $CargoThresholdCondition$Ops}.
     */
    export type $CargoThresholdCondition$Ops_ = "greater" | "less" | "equal";
}
