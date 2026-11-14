import { $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $IDeployAnywayBlockItem } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item$Properties, $BlockItem, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CRBogeyBlock } from "@package/com/railwayteam/railways/content/custom_bogeys/blocks/base";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $BezierTrackPointLocation_, $TrackBlockOutline$BezierPointSelection_, $TrackTargetingBlockItem$OverlapResult } from "@package/com/simibubi/create/content/trains/track";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbstractBogeyBlock, $BogeySizes$BogeySize } from "@package/com/simibubi/create/content/trains/bogey";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $Map } from "@package/java/util";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $BiConsumer_ } from "@package/java/util/function";
import { $TrackGraphLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_, $Direction$Axis, $IdMapper } from "@package/net/minecraft/core";
import { $ControlsInteractionBehaviour } from "@package/com/simibubi/create/content/contraptions/actors/trainControls";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $RenderShape, $Block } from "@package/net/minecraft/world/level/block";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as ik from "@package/com/railwayteam/railways/content/handcar/ik";

declare module "@package/com/railwayteam/railways/content/handcar" {
    export class $HandcarControlsInteractionBehaviour extends $ControlsInteractionBehaviour {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
    export class $HandcarBlock extends $CRBogeyBlock {
        getRenderShape(arg0: $BlockState_): $RenderShape;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractBogeyBlock<never>>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        size: $BogeySizes$BogeySize;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $HandcarItem extends $BlockItem implements $IDeployAnywayBlockItem {
        static withGraphLocation(arg0: $Level_, arg1: $BlockPos_, arg2: boolean, arg3: $BezierTrackPointLocation_, arg4: $BiConsumer_<$TrackTargetingBlockItem$OverlapResult, $TrackGraphLocation>): void;
        useOnCurve(arg0: $TrackBlockOutline$BezierPointSelection_, arg1: $ItemStack_): boolean;
        placeHandcar(arg0: $TrackGraphLocation, arg1: $Level_, arg2: $Player, arg3: $BlockPos_, arg4: $Direction_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
}
