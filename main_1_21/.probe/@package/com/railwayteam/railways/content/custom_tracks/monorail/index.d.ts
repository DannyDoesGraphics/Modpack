import { $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $TrackBlock, $TrackMaterial, $TrackVoxelShapes, $TrackShape } from "@package/com/simibubi/create/content/trains/track";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Map } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $IdMapper } from "@package/net/minecraft/core";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $CustomTrackBlockStateGenerator } from "@package/com/railwayteam/railways/content/custom_tracks";
export * as neoforge from "@package/com/railwayteam/railways/content/custom_tracks/monorail/neoforge";

declare module "@package/com/railwayteam/railways/content/custom_tracks/monorail" {
    export class $MonorailBlockStateGenerator extends $CustomTrackBlockStateGenerator {
        static create(): $MonorailBlockStateGenerator;
        constructor();
    }
    export class $MonorailTrackVoxelShapes extends $TrackVoxelShapes {
        constructor();
    }
    export class $MonorailTrackBlock extends $TrackBlock {
        randomTick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        useItemOn(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static HAS_BE: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static SHAPE: $EnumProperty<$TrackShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial);
    }
    export class $CustomTrackBlockOutline {
        static skipCustomRendering(): boolean;
        static convert(arg0: $Object, arg1: $TrackMaterial): $VoxelShape;
        static convert(arg0: $VoxelShape, arg1: $TrackMaterial): $VoxelShape;
        static NARROW_LONG_ORTHO: $VoxelShape;
        static TRACK_TO_MONORAIL: $Map<$VoxelShape, $VoxelShape>;
        static MONORAIL_LONG_ORTHO: $VoxelShape;
        static TRACK_TO_NARROW: $Map<$VoxelShape, $VoxelShape>;
        static MONORAIL_LONG_CROSS: $VoxelShape;
        static MONORAIL_LONG_ORTHO_OFFSET: $VoxelShape;
        static NARROW_LONG_ORTHO_OFFSET: $VoxelShape;
        static NARROW_LONG_ORTHO_2: $VoxelShape;
        static NARROW_LONG_CROSS: $VoxelShape;
        constructor();
    }
}
