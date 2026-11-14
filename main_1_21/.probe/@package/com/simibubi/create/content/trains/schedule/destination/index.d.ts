import { $Level_ } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $DiscoveredPath } from "@package/com/simibubi/create/content/trains/graph";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ScheduleDataEntry, $ScheduleRuntime } from "@package/com/simibubi/create/content/trains/schedule";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/schedule/destination" {
    export class $ScheduleInstruction extends $ScheduleDataEntry {
        supportsConditions(): boolean;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        start(arg0: $ScheduleRuntime, arg1: $Level_): $DiscoveredPath;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ScheduleInstruction;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
    }
    export class $DestinationInstruction extends $TextScheduleInstruction {
        getFilterForRegex(): string;
        getFilter(): string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
        get filterForRegex(): string;
        get filter(): string;
    }
    export class $DeliverPackagesInstruction extends $ScheduleInstruction {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
    }
    export class $TextScheduleInstruction extends $ScheduleInstruction {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
    }
    export class $ChangeThrottleInstruction extends $ScheduleInstruction {
        getThrottle(): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
        get throttle(): number;
    }
    export class $FetchPackagesInstruction extends $TextScheduleInstruction {
        getFilterForRegex(): string;
        getFilter(): string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
        get filterForRegex(): string;
        get filter(): string;
    }
    export class $ChangeTitleInstruction extends $TextScheduleInstruction {
        getScheduleTitle(): string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
        get scheduleTitle(): string;
    }
}
