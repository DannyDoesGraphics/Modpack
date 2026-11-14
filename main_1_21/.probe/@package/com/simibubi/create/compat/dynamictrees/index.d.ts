import { $BlockPos_ } from "@package/net/minecraft/core";
import { $AbstractBlockBreakQueue } from "@package/com/simibubi/create/foundation/utility";
import { $Block_ } from "@package/net/minecraft/world/level/block";

declare module "@package/com/simibubi/create/compat/dynamictrees" {
    export class $DynamicTree extends $AbstractBlockBreakQueue {
        static isDynamicBranch(arg0: $Block_): boolean;
        constructor(arg0: $BlockPos_);
    }
}
