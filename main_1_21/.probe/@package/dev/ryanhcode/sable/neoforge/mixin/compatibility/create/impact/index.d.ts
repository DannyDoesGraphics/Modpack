import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/impact" {
    export class $AbstractBellBlockAccessor {
    }
    export interface $AbstractBellBlockAccessor {
        invokeRing(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Player): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AbstractBellBlockAccessor}.
     */
    export type $AbstractBellBlockAccessor_ = ((arg0: $Level, arg1: $BlockPos, arg2: $Direction, arg3: $Player) => boolean);
}
