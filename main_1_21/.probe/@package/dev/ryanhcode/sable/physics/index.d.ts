import { $BlockPos_ } from "@package/net/minecraft/core";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $BlockEntitySubLevelReactionWheel } from "@package/dev/ryanhcode/sable/api/block";
export * as config from "@package/dev/ryanhcode/sable/physics/config";
export * as floating_block from "@package/dev/ryanhcode/sable/physics/floating_block";

declare module "@package/dev/ryanhcode/sable/physics" {
    export class $ReactionWheelManager {
        physicsTick(arg0: $RigidBodyHandle): void;
        needsTicking(): boolean;
        wheelChanged(arg0: $BlockPos_, arg1: $BlockEntitySubLevelReactionWheel, arg2: boolean): void;
        constructor(arg0: $ServerSubLevel);
    }
}
