import { $Level_ } from "@package/net/minecraft/world/level";
import { $ScheduleWaitCondition } from "@package/com/simibubi/create/content/trains/schedule/condition";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ScheduleInstruction, $DestinationInstruction } from "@package/com/simibubi/create/content/trains/schedule/destination";
import { $List } from "@package/java/util";
import { $RedstoneLinkNetworkHandler$Frequency, $IRedstoneLinkable } from "@package/com/simibubi/create/content/redstone/link";
import { $WorldAttached, $Couple } from "@package/net/createmod/catnip/data";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/railwayteam/railways/content/schedule" {
    export class $WaypointDestinationInstruction extends $DestinationInstruction {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
    }
    export class $StationLoadedCondition extends $ScheduleWaitCondition {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleWaitCondition>;
        constructor();
    }
    export class $RedstoneLinkInstruction$CustomRedstoneActor implements $IRedstoneLinkable {
    }
    export class $RedstoneLinkInstruction extends $ScheduleInstruction {
        static tick(arg0: $Level_): void;
        freq: $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        static customActors: $WorldAttached<$List<$RedstoneLinkInstruction$CustomRedstoneActor>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleInstruction>;
        constructor();
    }
}
