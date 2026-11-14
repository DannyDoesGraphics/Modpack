import { $IdMapper, $Direction } from "@package/net/minecraft/core";
import { $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $BlockState, $BlockState_, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $Rotation_, $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/com/railwayteam/railways/content/palettes/smokebox" {
    export class $PalettesSmokeboxBlock extends $Block {
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $EnumProperty<$Direction>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
}
