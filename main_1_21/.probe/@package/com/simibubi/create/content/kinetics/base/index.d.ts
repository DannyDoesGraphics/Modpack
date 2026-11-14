import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleType_, $ParticleOptions, $ParticleOptions_, $ParticleType } from "@package/net/minecraft/core/particles";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SuperByteBuffer, $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $SimpleBlockEntityVisualizer$Factory } from "@package/dev/engine_room/flywheel/lib/visualization";
import { $ChatFormatting } from "@package/net/minecraft";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $InstanceHandle, $InstanceType } from "@package/dev/engine_room/flywheel/api/instance";
import { $BlockHarvester } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SpriteSet, $Particle, $ParticleProvider, $SimpleAnimatedParticle, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ColoredLitOverlayInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $AugerDistributor, $AugerDistributor_ } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft/auger_groups";
import { $Property, $BooleanProperty, $DirectionProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $KineticBlockEntityExtension } from "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $IHaveHoveringInformation, $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockEntityVisual, $TickableVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $AbstractBlockEntityVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $Mirror_, $Block, $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $TransformableBlock } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $List, $List_ } from "@package/java/util";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Vec3i, $HolderLookup$Provider, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $Enum } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $ICustomParticleDataWithSprite } from "@package/com/simibubi/create/foundation/particle";
import { $GantryShaftBlockEntity } from "@package/com/simibubi/create/content/kinetics/gantry";
import { $LevelAccessor, $LevelReader, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Model } from "@package/dev/engine_room/flywheel/api/model";
import { $BlockEntityType_, $BlockEntity, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        hideStressImpact(): boolean;
        showCapacityWithAnnotation(): boolean;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $KineticBlockEntityRenderer<T extends $KineticBlockEntity> extends $SafeBlockEntityRenderer<T> {
        static standardKineticRotationTransform(arg0: $SuperByteBuffer, arg1: $KineticBlockEntity, arg2: number): $SuperByteBuffer;
        static renderRotatingBuffer(arg0: $KineticBlockEntity, arg1: $SuperByteBuffer, arg2: $PoseStack, arg3: $VertexConsumer, arg4: number): void;
        static getRotationOffsetForPosition(arg0: $KineticBlockEntity, arg1: $BlockPos_, arg2: $Direction$Axis_): number;
        static kineticRotationTransform(arg0: $SuperByteBuffer, arg1: $KineticBlockEntity, arg2: $Direction$Axis_, arg3: number, arg4: number): $SuperByteBuffer;
        static renderRotatingKineticBlock(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $PoseStack, arg3: $VertexConsumer, arg4: number): void;
        static getRotationAxisOf(arg0: $KineticBlockEntity): $Direction$Axis;
        static getAngleForBe(arg0: $KineticBlockEntity, arg1: $BlockPos_, arg2: $Direction$Axis_): number;
        static shaft(arg0: $Direction$Axis_): $BlockState;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $KineticEffectHandler {
        spawnEffect(arg0: $ParticleOptions_, arg1: number, arg2: number): void;
        spawnRotationIndicators(): void;
        queueRotationIndicators(): void;
        triggerOverStressedEffect(): void;
        tick(): void;
        constructor(arg0: $KineticBlockEntity);
    }
    export class $DirectionalShaftHalvesBlockEntity extends $KineticBlockEntity {
        getSourceFacing(): $Direction;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get sourceFacing(): $Direction;
    }
    export class $OrientedRotatingVisual<T extends $KineticBlockEntity> extends $KineticBlockEntityVisual<T> {
        static gantryShaft(arg0: $VisualizationContext, arg1: $GantryShaftBlockEntity, arg2: number): $BlockEntityVisual<$GantryShaftBlockEntity>;
        static backHorizontal<T extends $KineticBlockEntity>(arg0: $PartialModel): $SimpleBlockEntityVisualizer$Factory<T>;
        static of<T extends $KineticBlockEntity>(arg0: $PartialModel): $SimpleBlockEntityVisualizer$Factory<T>;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number, arg3: $Direction_, arg4: $Direction_, arg5: $Model);
    }
    export class $ShaftVisual<T extends $KineticBlockEntity> extends $SingleAxisRotatingVisual<T> {
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number);
    }
    export class $BlockBreakingMovementBehaviour implements $MovementBehaviour {
        canBreak(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        wrapMethod$gac000$sable$checkPosition(arg0: $MovementContext, arg1: $BlockPos_, arg2: $Operation_<any>): void;
        damageEntities(arg0: $MovementContext, arg1: $BlockPos_, arg2: $Level_): void;
        handler$gac000$sable$testBreakingPosDist(arg0: $MovementContext, arg1: $CallbackInfo): void;
        tickBreaker(arg0: $MovementContext): void;
        startMoving(arg0: $MovementContext): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        cancelStall(arg0: $MovementContext): void;
        stopMoving(arg0: $MovementContext): void;
        tick(arg0: $MovementContext): void;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        disableBlockEntityRendering(): boolean;
        writeExtraData(arg0: $MovementContext): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        isActive(arg0: $MovementContext): boolean;
        constructor();
    }
    export class $RotationIndicatorParticle extends $SimpleAnimatedParticle {
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $SingleAxisRotatingVisual<T extends $KineticBlockEntity> extends $KineticBlockEntityVisual<T> implements $SimpleTickableVisual {
        static ofZ<T extends $KineticBlockEntity>(arg0: $PartialModel): $SimpleBlockEntityVisualizer$Factory<T>;
        static shaft<T extends $KineticBlockEntity>(arg0: $VisualizationContext, arg1: T, arg2: number): $SingleAxisRotatingVisual<T>;
        static of<T extends $KineticBlockEntity>(arg0: $PartialModel): $SimpleBlockEntityVisualizer$Factory<T>;
        tick(arg0: $TickableVisual$Context): void;
        static backtank<T extends $KineticBlockEntity>(arg0: $VisualizationContext, arg1: T, arg2: number): $SingleAxisRotatingVisual<T>;
        planTick(): $Plan<$TickableVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number, arg3: $Direction_, arg4: $Model);
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number, arg3: $Model);
    }
    export class $ShaftRenderer<T extends $KineticBlockEntity> extends $KineticBlockEntityRenderer<T> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $HorizontalKineticBlock extends $KineticBlock {
        wrapOperation$bbh000$simulated$handleAutoOrientationWithExtraKinetics(arg0: $IRotate, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $Operation_<any>): boolean;
        getPreferredHorizontalFacing(arg0: $BlockPlaceContext): $Direction;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
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
        hasCollision: boolean;
        static HORIZONTAL_FACING: $Property<$Direction>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $KineticBlockEntityVisual<T extends $KineticBlockEntity> extends $AbstractBlockEntityVisual<T> {
        static applyOverstressEffect(arg0: $KineticBlockEntity, ...arg1: $RotatingInstance[]): void;
        static shouldOffset(arg0: $Direction$Axis_, arg1: $Vec3i): boolean;
        static rotationOffset(arg0: $BlockState_, arg1: $Direction$Axis_, arg2: $Vec3i): number;
        static rotationAxis(arg0: $BlockState_): $Direction$Axis;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number);
    }
    export class $IRotate$StressImpact extends $Enum<$IRotate$StressImpact> {
        getAbsoluteColor(): $ChatFormatting;
        static getFormattedStressText(arg0: number): $LangBuilder;
        getRelativeColor(): $ChatFormatting;
        static values(): $IRotate$StressImpact[];
        static valueOf(arg0: string): $IRotate$StressImpact;
        static of(arg0: number): $IRotate$StressImpact;
        static isEnabled(): boolean;
        static HIGH: $IRotate$StressImpact;
        static MEDIUM: $IRotate$StressImpact;
        static LOW: $IRotate$StressImpact;
        static OVERSTRESSED: $IRotate$StressImpact;
        get absoluteColor(): $ChatFormatting;
        get relativeColor(): $ChatFormatting;
        static get enabled(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$StressImpact}.
     */
    export type $IRotate$StressImpact_ = "low" | "medium" | "high" | "overstressed";
    export class $RotationIndicatorParticle$Factory implements $ParticleProvider<$RotationIndicatorParticleData> {
        createParticle(arg0: $RotationIndicatorParticleData, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $RotationIndicatorParticleData implements $ParticleOptions, $ICustomParticleDataWithSprite<$RotationIndicatorParticleData> {
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<$RotationIndicatorParticleData>;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $RotationIndicatorParticleData>;
        getType(): $ParticleType<never>;
        getCodec(arg0: $ParticleType_<$RotationIndicatorParticleData>): $MapCodec<$RotationIndicatorParticleData>;
        getAxis(): $Direction$Axis;
        createType(): $ParticleType<$RotationIndicatorParticleData>;
        getFactory(): $ParticleProvider<$RotationIndicatorParticleData>;
        register(arg0: $ParticleType_<$RotationIndicatorParticleData>, arg1: $RegisterParticleProvidersEvent): void;
        static CODEC: $MapCodec<$RotationIndicatorParticleData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RotationIndicatorParticleData>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Direction$Axis_);
        constructor();
        get metaFactory(): $ParticleEngine$SpriteParticleRegistration<$RotationIndicatorParticleData>;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $RotationIndicatorParticleData>;
        get type(): $ParticleType<never>;
        get axis(): $Direction$Axis;
        get factory(): $ParticleProvider<$RotationIndicatorParticleData>;
    }
    export class $KineticBlock extends $Block implements $IRotate {
        updateIndirectNeighbourShapes(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: number, arg4: number): void;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        handler$bbe000$simulated$extraKineticsReset(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: number, arg4: number, arg5: $CallbackInfo, arg6: $BlockEntity): void;
        getParticleTargetRadius(): number;
        getParticleInitialRadius(): number;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        hideStressImpact(): boolean;
        showCapacityWithAnnotation(): boolean;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
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
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get particleTargetRadius(): number;
        get particleInitialRadius(): number;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $DirectionalAxisKineticBlock extends $DirectionalKineticBlock implements $TransformableBlock {
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static AXIS_ALONG_FIRST_COORDINATE: $BooleanProperty;
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
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        getTextColor(): $ChatFormatting;
        getParticleSpeed(): number;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        getSpeedValue(): number;
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getColor(): number;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get textColor(): $ChatFormatting;
        get particleSpeed(): number;
        get speedValue(): number;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $DirectionalKineticBlock extends $KineticBlock {
        wrapOperation$bbh000$simulated$handleAutoOrientationWithExtraKinetics(arg0: $IRotate, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $Operation_<any>): boolean;
        getPreferredFacing(arg0: $BlockPlaceContext): $Direction;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
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
    }
    export class $GeneratingKineticBlockEntity extends $KineticBlockEntity {
        updateGeneratedRotation(): void;
        wrapOperation$bbc000$simulated$getExtraKinetics(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $BlockEntity;
        applyNewSpeed(arg0: number, arg1: number): void;
        createNetworkId(): number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        level: $Level;
        updateSpeed: boolean;
        reActivateSource: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $RotatingInstance extends $ColoredLitOverlayInstance {
        setRotationalSpeed(arg0: number): $RotatingInstance;
        nudge(arg0: number, arg1: number, arg2: number): $RotatingInstance;
        setRotationAxis(arg0: $Vector3f): $RotatingInstance;
        setRotationAxis(arg0: number, arg1: number, arg2: number): $RotatingInstance;
        setRotationAxis(arg0: $Direction$Axis_): $RotatingInstance;
        static colorFromBE(arg0: $KineticBlockEntity): number;
        setRotationOffset(arg0: number): $RotatingInstance;
        rotateToFace(arg0: $Direction$Axis_): $RotatingInstance;
        rotateToFace(arg0: number, arg1: number, arg2: number): $RotatingInstance;
        rotateToFace(arg0: $Direction_, arg1: $Direction_): $RotatingInstance;
        rotateToFace(arg0: $Direction_): $RotatingInstance;
        rotateToFace(arg0: $Direction_, arg1: $Direction$Axis_): $RotatingInstance;
        setup(arg0: $KineticBlockEntity, arg1: $Direction$Axis_): $RotatingInstance;
        setup(arg0: $KineticBlockEntity): $RotatingInstance;
        setup(arg0: $KineticBlockEntity, arg1: $Direction$Axis_, arg2: number): $RotatingInstance;
        setup(arg0: $KineticBlockEntity, arg1: number): $RotatingInstance;
        setColor(arg0: $Color): $RotatingInstance;
        setColor(arg0: $KineticBlockEntity): $RotatingInstance;
        setPosition(arg0: $Vec3i): $RotatingInstance;
        setPosition(arg0: $Vector3f): $RotatingInstance;
        setPosition(arg0: number, arg1: number, arg2: number): $RotatingInstance;
        rotateTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $RotatingInstance;
        green: number;
        rotation: $Quaternionf;
        static SPEED_MULTIPLIER: number;
        rotationOffset: number;
        red: number;
        rotationalSpeed: number;
        blue: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rotationAxisZ: number;
        rotationAxisY: number;
        rotationAxisX: number;
        constructor(arg0: $InstanceType<$RotatingInstance>, arg1: $InstanceHandle);
    }
    export class $HorizontalAxisKineticBlock extends $KineticBlock {
        static getPreferredHorizontalAxis(arg0: $BlockPlaceContext): $Direction$Axis;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static HORIZONTAL_AXIS: $Property<$Direction$Axis>;
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
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $RotatedPillarKineticBlock extends $KineticBlock {
        static getPreferredAxis(arg0: $BlockPlaceContext): $Direction$Axis;
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
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $KineticBlockEntityExtension {
        isSource(): boolean;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        onSpeedChanged(arg0: number): void;
        setNetwork(arg0: number): void;
        hasSource(): boolean;
        warnOfMovement(): void;
        clearKineticInformation(): void;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        tickAudio(): void;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        simulated$getConnectedToExtraKinetics(): boolean;
        simulated$setValidationCountdown(arg0: number): void;
        hasNetwork(): boolean;
        getOrCreateNetwork(): $KineticNetwork;
        needsSpeedUpdate(): boolean;
        attachKinetics(): void;
        getFlickerScore(): number;
        removeSource(): void;
        redirect$bbd000$simulated$useProperSource(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        detachKinetics(): void;
        getGeneratedSpeed(): number;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        calculateStressApplied(): number;
        calculateAddedStressCapacity(): number;
        handler$bbd000$simulated$injectRemove(arg0: $CallbackInfo): void;
        handler$bbd000$simulated$saveConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        handler$bbd000$simulated$readConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        getTheoreticalSpeed(): number;
        redirect$bbd000$simulated$useProperSource2(arg0: $Level_, arg1: $BlockPos_): $BlockEntity;
        handler$bbd000$simulated$removeConnected(arg0: $CallbackInfo): void;
        isSpeedRequirementFulfilled(): boolean;
        handler$bbj000$simulated$addExtraKineticsInfo(arg0: $List_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        static convertToLinear(arg0: number): number;
        static convertToAngular(arg0: number): number;
        isOverStressed(): boolean;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        static switchToBlockState(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): void;
        setSource(arg0: $BlockPos_): void;
        setSpeed(arg0: number): void;
        getSpeed(): number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get orCreateNetwork(): $KineticNetwork;
        get flickerScore(): number;
        get generatedSpeed(): number;
        get theoreticalSpeed(): number;
        get speedRequirementFulfilled(): boolean;
        get overStressed(): boolean;
    }
    export class $BlockBreakingKineticBlockEntity extends $KineticBlockEntity implements $BlockHarvester {
        canBreak(arg0: $BlockState_, arg1: number): boolean;
        destroyNextTick(): void;
        onBlockBroken(arg0: $BlockState_): void;
        simulated$getAssociatedDistributor(): $AugerDistributor;
        static isBreakable(arg0: $BlockState_, arg1: number): boolean;
        simulated$setDistributor(arg0: $AugerDistributor_): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        depositItemStack(arg0: $BlockPos_, arg1: $ItemStack_): $ItemStack;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        level: $Level;
        updateSpeed: boolean;
        static NEXT_BREAKER_ID: $AtomicInteger;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $AbstractEncasedShaftBlock extends $RotatedPillarKineticBlock {
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
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
}
