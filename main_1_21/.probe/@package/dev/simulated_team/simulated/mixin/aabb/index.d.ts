import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/simulated_team/simulated/mixin/aabb" {
    export class $AABBMixin {
        static invokeGetDirection(arg0: $AABB_, arg1: $Vec3_, arg2: number[], arg3: $Direction_, arg4: number, arg5: number, arg6: number): $Direction;
    }
    export interface $AABBMixin {
    }
}
