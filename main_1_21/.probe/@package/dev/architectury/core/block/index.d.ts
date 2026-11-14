import { $Supplier_ } from "@package/java/util/function";
import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IdMapper, $Direction } from "@package/net/minecraft/core";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $FlowingFluid } from "@package/net/minecraft/world/level/material";
import { $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $LiquidBlock } from "@package/net/minecraft/world/level/block";

declare module "@package/dev/architectury/core/block" {
    export class $ArchitecturyLiquidBlock extends $LiquidBlock {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$LiquidBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static LEVEL: $IntegerProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static POSSIBLE_FLOW_DIRECTIONS: $ImmutableList<$Direction>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static STABLE_SHAPE: $VoxelShape;
        fluid: $FlowingFluid;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(fluid: $Supplier_<$FlowingFluid>, properties: $BlockBehaviour$Properties);
    }
}
