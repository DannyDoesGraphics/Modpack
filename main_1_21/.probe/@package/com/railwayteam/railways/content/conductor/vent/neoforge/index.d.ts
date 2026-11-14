import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $IdMapper } from "@package/net/minecraft/core";
import { $CopycatVentModel, $VentBlock } from "@package/com/railwayteam/railways/content/conductor/vent";
import { $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/com/railwayteam/railways/content/conductor/vent/neoforge" {
    export class $CopycatVentModelImpl extends $CopycatVentModel {
        static MATERIAL_PROPERTY: $ModelProperty<$BlockState>;
        constructor(arg0: $BakedModel);
    }
    export class $VentBlockImpl extends $VentBlock {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static OUTLINE_SHAPE: $VoxelShape;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static COLLISION_SHAPE: $VoxelShape;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static CONDUCTOR_VISIBLE: $BooleanProperty;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
}
