import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $List } from "@package/java/util";

declare module "@package/corgitaco/corgilib/world/level" {
    export class $RandomTickScheduler {
    }
    export interface $RandomTickScheduler {
        scheduleRandomTick(arg0: $BlockPos_): void;
        getScheduledRandomTicks(): $List<$BlockPos>;
        get scheduledRandomTicks(): $List<$BlockPos>;
    }
}
