import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionResult, $InteractionResult_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/hlysine/create_connected/mixin/copycat/fencegate" {
    export class $FenceGateBlockAccessor {
    }
    export interface $FenceGateBlockAccessor {
        callUseWithoutItem(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $BlockHitResult): $InteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $FenceGateBlockAccessor}.
     */
    export type $FenceGateBlockAccessor_ = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Player, arg4: $BlockHitResult) => $InteractionResult_);
}
