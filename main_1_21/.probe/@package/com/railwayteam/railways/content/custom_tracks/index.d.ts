import { $Level_ } from "@package/net/minecraft/world/level";
import { $InteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos_, $IdMapper } from "@package/net/minecraft/core";
import { $BooleanProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Item } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ITrackBlock, $TrackBlock, $TrackShape, $TrackMaterial } from "@package/com/simibubi/create/content/trains/track";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
export * as monorail from "@package/com/railwayteam/railways/content/custom_tracks/monorail";
export * as wide_gauge from "@package/com/railwayteam/railways/content/custom_tracks/wide_gauge";
export * as casing from "@package/com/railwayteam/railways/content/custom_tracks/casing";
export * as phantom from "@package/com/railwayteam/railways/content/custom_tracks/phantom";
export * as generic_crossing from "@package/com/railwayteam/railways/content/custom_tracks/generic_crossing";
export * as narrow_gauge from "@package/com/railwayteam/railways/content/custom_tracks/narrow_gauge";
export * as neoforge from "@package/com/railwayteam/railways/content/custom_tracks/neoforge";

declare module "@package/com/railwayteam/railways/content/custom_tracks" {
    export class $NoCollisionCustomTrackBlock extends $TrackBlock {
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
    export class $CustomTrackBlock {
        static casingUse(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player, arg4: $InteractionHand_, arg5: $BlockHitResult): $InteractionResult;
        constructor();
    }
    export class $CustomTrackBlockStateGenerator extends $SpecialBlockStateGen {
        static create(): $CustomTrackBlockStateGenerator;
        constructor();
    }
    export class $TransparentSegmentTrackBlock {
    }
    export interface $TransparentSegmentTrackBlock extends $ITrackBlock {
    }
}
