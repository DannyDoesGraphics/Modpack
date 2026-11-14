import { $IdMapper } from "@package/net/minecraft/core";
import { $BooleanProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Item } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $TrackBlock, $TrackShape, $TrackMaterial } from "@package/com/simibubi/create/content/trains/track";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $CustomTrackBlockStateGenerator } from "@package/com/railwayteam/railways/content/custom_tracks";
export * as neoforge from "@package/com/railwayteam/railways/content/custom_tracks/wide_gauge/neoforge";

declare module "@package/com/railwayteam/railways/content/custom_tracks/wide_gauge" {
    export class $WideGaugeTrackBlockStateGenerator extends $CustomTrackBlockStateGenerator {
        static create(): $WideGaugeTrackBlockStateGenerator;
        constructor();
    }
    export class $WideGaugeTrackBlock extends $TrackBlock {
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
}
