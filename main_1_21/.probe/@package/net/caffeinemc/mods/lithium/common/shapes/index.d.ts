import { $Direction_ } from "@package/net/minecraft/core";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";

declare module "@package/net/caffeinemc/mods/lithium/common/shapes" {
    export class $OffsetVoxelShapeCache {
    }
    export interface $OffsetVoxelShapeCache {
        lithium$setShape(arg0: number, arg1: $Direction_, arg2: $VoxelShape): void;
        lithium$getOffsetSimplifiedShape(arg0: number, arg1: $Direction_): $VoxelShape;
    }
}
