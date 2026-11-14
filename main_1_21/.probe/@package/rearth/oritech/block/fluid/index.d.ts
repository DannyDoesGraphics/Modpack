import { $Supplier_ } from "@package/java/util/function";
import { $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $FlowingFluid } from "@package/net/minecraft/world/level/material";
import { $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ArchitecturyLiquidBlock } from "@package/dev/architectury/core/block";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $LiquidBlock } from "@package/net/minecraft/world/level/block";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";

declare module "@package/rearth/oritech/block/fluid" {
    export class $SheolFireFluidBlock extends $ArchitecturyLiquidBlock {
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
        constructor(arg0: $Supplier_<$FlowingFluid>, arg1: $BlockBehaviour$Properties);
    }
}
