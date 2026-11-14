import { $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $CopycatModel, $CopycatBlock } from "@package/com/simibubi/create/content/decoration/copycat";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
export * as neoforge from "@package/com/railwayteam/railways/content/conductor/vent/neoforge";

declare module "@package/com/railwayteam/railways/content/conductor/vent" {
    export class $CopycatVentModel extends $CopycatModel {
        static create(arg0: $BakedModel): $CopycatVentModel;
        static MATERIAL_PROPERTY: $ModelProperty<$BlockState>;
        constructor(arg0: $BakedModel);
    }
    export class $VentBlock extends $CopycatBlock implements $IWrenchable {
        useWithoutItem(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $BlockHitResult): $InteractionResult;
        teleportConductor(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity, arg3: $Direction_): void;
        static create(arg0: $BlockBehaviour$Properties): $VentBlock;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        entityInside(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): void;
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
    }
}
