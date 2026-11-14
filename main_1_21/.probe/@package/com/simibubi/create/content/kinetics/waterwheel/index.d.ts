import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $IClientBlockExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $Map, $Set } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SuperByteBufferCache$Compartment, $StitchedSprite } from "@package/net/createmod/catnip/render";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntityRenderer, $RotatedPillarKineticBlock, $DirectionalKineticBlock, $KineticBlockEntityVisual, $GeneratingKineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $BlockItem, $Item, $ItemStack_, $Item$Properties } from "@package/net/minecraft/world/item";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $MultiPosDestructionHandler } from "@package/com/simibubi/create/foundation/block/render";
import { $DirectionProperty, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IProxyHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $RenderShape, $DirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $HitResult, $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3d } from "@package/org/joml";

declare module "@package/com/simibubi/create/content/kinetics/waterwheel" {
    export class $WaterWheelBlockEntity extends $GeneratingKineticBlockEntity {
        applyMaterialIfValid(arg0: $ItemStack_): $ItemInteractionResult;
        determineAndApplyFlowScore(): void;
        getFlowVectorAtPosition(arg0: $BlockPos_): $Vec3;
        setFlowScoreAndUpdate(arg0: number): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        static SMALL_OFFSETS: $Map<$Direction$Axis, $Set<$BlockPos>>;
        flowScore: number;
        level: $Level;
        reActivateSource: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        material: $BlockState;
        updateSpeed: boolean;
        preventSpeedUpdate: number;
        static LARGE_OFFSETS: $Map<$Direction$Axis, $Set<$BlockPos>>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        set flowScoreAndUpdate(value: number);
    }
    export class $WaterWheelRenderer$ModelKey extends $Record {
        material(): $BlockState;
        large(): boolean;
        state(): $BlockState;
        constructor(large: boolean, state: $BlockState_, material: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $WaterWheelRenderer$ModelKey}.
     */
    export type $WaterWheelRenderer$ModelKey_ = { large?: boolean, state?: $BlockState_, material?: $BlockState_,  } | [large?: boolean, state?: $BlockState_, material?: $BlockState_, ];
    export class $LargeWaterWheelBlockEntity extends $WaterWheelBlockEntity {
        static SMALL_OFFSETS: $Map<$Direction$Axis, $Set<$BlockPos>>;
        flowScore: number;
        level: $Level;
        reActivateSource: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        material: $BlockState;
        updateSpeed: boolean;
        preventSpeedUpdate: number;
        static LARGE_OFFSETS: $Map<$Direction$Axis, $Set<$BlockPos>>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $WaterWheelBlock extends $DirectionalKineticBlock implements $IBE<$WaterWheelBlockEntity> {
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        getBlockEntityType(): $BlockEntityType<$WaterWheelBlockEntity>;
        getBlockEntityClass(): $Class<$WaterWheelBlockEntity>;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$WaterWheelBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$WaterWheelBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$WaterWheelBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($WaterWheelBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $WaterWheelBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$WaterWheelBlockEntity>;
        get blockEntityClass(): $Class<$WaterWheelBlockEntity>;
    }
    export class $WaterWheelStructuralBlock extends $DirectionalBlock implements $IWrenchable, $IProxyHoveringInformation {
        getInformationSource(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $BlockPos;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        static getMaster(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockPos;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        getRenderShape(arg0: $BlockState_): $RenderShape;
        stillValid(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean): boolean;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$WaterWheelStructuralBlock>;
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
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $LargeWaterWheelBlockItem extends $BlockItem {
        showBounds(arg0: $BlockPlaceContext): void;
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
    export class $LargeWaterWheelBlock extends $RotatedPillarKineticBlock implements $IBE<$LargeWaterWheelBlockEntity> {
        getAxisForPlacement(arg0: $BlockPlaceContext): $Direction$Axis;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        getBlockEntityType(): $BlockEntityType<$LargeWaterWheelBlockEntity>;
        getBlockEntityClass(): $Class<$LargeWaterWheelBlockEntity>;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        getRenderShape(arg0: $BlockState_): $RenderShape;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$LargeWaterWheelBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$LargeWaterWheelBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$LargeWaterWheelBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($LargeWaterWheelBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $LargeWaterWheelBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static EXTENSION: $BooleanProperty;
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
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$LargeWaterWheelBlockEntity>;
        get blockEntityClass(): $Class<$LargeWaterWheelBlockEntity>;
    }
    export class $WaterWheelRenderer$Variant extends $Enum<$WaterWheelRenderer$Variant> {
        model(): $BakedModel;
        static values(): $WaterWheelRenderer$Variant[];
        static valueOf(arg0: string): $WaterWheelRenderer$Variant;
        static of(arg0: boolean, arg1: $BlockState_): $WaterWheelRenderer$Variant;
        static LARGE_EXTENSION: $WaterWheelRenderer$Variant;
        static SMALL: $WaterWheelRenderer$Variant;
        static LARGE: $WaterWheelRenderer$Variant;
    }
    /**
     * Values that may be interpreted as {@link $WaterWheelRenderer$Variant}.
     */
    export type $WaterWheelRenderer$Variant_ = "small" | "large" | "large_extension";
    export class $WaterWheelStructuralBlock$RenderProperties implements $IClientBlockExtensions, $MultiPosDestructionHandler {
        getExtraPositions(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): $Set<$BlockPos>;
        addHitEffects(arg0: $BlockState_, arg1: $Level_, arg2: $HitResult, arg3: $ParticleEngine): boolean;
        addDestroyEffects(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $ParticleEngine): boolean;
        playBreakSound(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): boolean;
        getFogColor(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity, arg4: $Vector3d, arg5: number): $Vector3d;
        areBreakingParticlesTinted(arg0: $BlockState_, arg1: $ClientLevel, arg2: $BlockPos_): boolean;
        constructor();
    }
    export class $WaterWheelVisual$ModelKey extends $Record {
        material(): $BlockState;
        variant(): $WaterWheelRenderer$Variant;
        constructor(variant: $WaterWheelRenderer$Variant_, material: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $WaterWheelVisual$ModelKey}.
     */
    export type $WaterWheelVisual$ModelKey_ = { material?: $BlockState_, variant?: $WaterWheelRenderer$Variant_,  } | [material?: $BlockState_, variant?: $WaterWheelRenderer$Variant_, ];
    export class $WaterWheelRenderer<T extends $WaterWheelBlockEntity> extends $KineticBlockEntityRenderer<T> {
        static large<T extends $WaterWheelBlockEntity>(arg0: $BlockEntityRendererProvider$Context): $WaterWheelRenderer<T>;
        static generateModel(arg0: $BakedModel, arg1: $BlockState_): $BakedModel;
        static generateModel(arg0: $WaterWheelRenderer$Variant_, arg1: $BlockState_): $BakedModel;
        static generateModel(arg0: $WaterWheelRenderer$ModelKey_): $BakedModel;
        static standard<T extends $WaterWheelBlockEntity>(arg0: $BlockEntityRendererProvider$Context): $WaterWheelRenderer<T>;
        static OAK_LOG_TOP_TEMPLATE: $StitchedSprite;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        static WATER_WHEEL: $SuperByteBufferCache$Compartment<$WaterWheelRenderer$ModelKey>;
        static OAK_PLANKS_TEMPLATE: $StitchedSprite;
        static OAK_LOG_TEMPLATE: $StitchedSprite;
        constructor(arg0: $BlockEntityRendererProvider$Context, arg1: boolean);
    }
    export class $WaterWheelVisual<T extends $WaterWheelBlockEntity> extends $KineticBlockEntityVisual<T> {
        static large<T extends $WaterWheelBlockEntity>(arg0: $VisualizationContext, arg1: T, arg2: number): $WaterWheelVisual<T>;
        static standard<T extends $WaterWheelBlockEntity>(arg0: $VisualizationContext, arg1: T, arg2: number): $WaterWheelVisual<T>;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: boolean, arg3: number);
    }
}
