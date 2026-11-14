import { $IStandardBogeyTEVirtualCoupling } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource, $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CachedRenderBBBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $TrackMaterial$TrackType } from "@package/com/simibubi/create/content/trains/track";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List, $EnumSet, $Map_, $Map, $Set } from "@package/java/util";
import { $AccessorBogeyStyle } from "@package/com/railwayteam/railways/mixin/client";
import { $Carriage } from "@package/com/simibubi/create/content/trains/entity";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Supplier_, $Function_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $ProperWaterloggedBlock, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Record } from "@package/java/lang";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $Instance } from "@package/dev/engine_room/flywheel/api/instance";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnumProperty, $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $Rotation_, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/bogey" {
    export class $StandardBogeyVisual$Large extends $StandardBogeyVisual {
        constructor(arg0: $VisualizationContext, arg1: number, arg2: boolean);
    }
    export class $StandardBogeyRenderer$Large extends $StandardBogeyRenderer {
        static BELT_RADIUS_PX: number;
        static BELT_RADIUS_IN_UV_SPACE: number;
        constructor();
    }
    export class $BogeyVisual {
    }
    export interface $BogeyVisual {
        hide(): void;
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
        updateLight(arg0: number): void;
        update(arg0: $CompoundTag_, arg1: number, arg2: $PoseStack): void;
        "delete"(): void;
    }
    export class $BogeyBlockEntityRenderer<T extends $AbstractBogeyBlockEntity> extends $SafeBlockEntityRenderer<T> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $AbstractBogeyBlock<T extends $AbstractBogeyBlockEntity> extends $Block implements $IBE<T>, $ProperWaterloggedBlock, $SpecialBlockItemRequirement, $IWrenchable {
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        isTrackAxisAlongFirstCoordinate(arg0: $BlockState_): boolean;
        isOnIncompatibleTrack(arg0: $Carriage, arg1: boolean): boolean;
        getTrackType(arg0: $BogeyStyle): $TrackMaterial$TrackType;
        getValidPathfindingTypes(arg0: $BogeyStyle): $Set<$TrackMaterial$TrackType>;
        static registerStandardBogey(arg0: $ResourceLocation_): void;
        getStickySurfaces(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $EnumSet<$Direction>;
        canBeUpsideDown(): boolean;
        isUpsideDown(arg0: $BlockState_): boolean;
        getWheelPointSpacing(): number;
        getWheelRadius(): number;
        getConnectorAnchorOffset(arg0: boolean): $Vec3;
        allowsSingleBogeyCarriage(): boolean;
        captureBlockEntityForTrain(): boolean;
        getBogeyUpDirection(): $Direction;
        getMatchingBogey(arg0: $Direction_, arg1: boolean): $BlockState;
        getNextStyle(arg0: $BogeyStyle): $BogeyStyle;
        getNextStyle(arg0: $Level_, arg1: $BlockPos_): $BogeyStyle;
        getStateOfSize(arg0: $AbstractBogeyBlockEntity, arg1: $BogeySizes$BogeySize_): $BlockState;
        getNextSize(arg0: $AbstractBogeyBlockEntity): $BlockState;
        getNextSize(arg0: $Level_, arg1: $BlockPos_): $BlockState;
        propertiesToCopy(): $List<$Property<never>>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        getSize(): $BogeySizes$BogeySize;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        getVersion(arg0: $BlockState_, arg1: boolean): $BlockState;
        getDefaultStyle(): $BogeyStyle;
        getFluidState(arg0: $BlockState_): $FluidState;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<T, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<T, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<T>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): (T) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): T;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
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
        constructor(arg0: $BlockBehaviour$Properties, arg1: $BogeySizes$BogeySize_);
        get wheelPointSpacing(): number;
        get wheelRadius(): number;
        get bogeyUpDirection(): $Direction;
        get defaultStyle(): $BogeyStyle;
    }
    export class $BogeyVisualizer {
    }
    export interface $BogeyVisualizer {
        createVisual(arg0: $VisualizationContext, arg1: number, arg2: boolean): $BogeyVisual;
    }
    /**
     * Values that may be interpreted as {@link $BogeyVisualizer}.
     */
    export type $BogeyVisualizer_ = ((arg0: $VisualizationContext, arg1: number, arg2: boolean) => $BogeyVisual);
    export class $BogeyStyle$SizeRenderer extends $Record {
        visualizer(): $BogeyVisualizer;
        renderer(): $BogeyRenderer;
        constructor(renderer: $BogeyRenderer_, visualizer: $BogeyVisualizer_);
    }
    /**
     * Values that may be interpreted as {@link $BogeyStyle$SizeRenderer}.
     */
    export type $BogeyStyle$SizeRenderer_ = { renderer?: $BogeyRenderer_, visualizer?: $BogeyVisualizer_,  } | [renderer?: $BogeyRenderer_, visualizer?: $BogeyVisualizer_, ];
    export class $StandardBogeyBlockEntity extends $AbstractBogeyBlockEntity implements $IStandardBogeyTEVirtualCoupling {
        setCouplingDistance(arg0: number): void;
        getCouplingDistance(): number;
        setFront(arg0: boolean): void;
        setCouplingDirection(arg0: $Direction_): void;
        getCouplingDirection(): $Direction;
        getFront(): boolean;
        static BOGEY_STYLE_KEY: string;
        static BOGEY_DATA_KEY: string;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $StandardBogeyRenderer$Small extends $StandardBogeyRenderer {
        constructor();
    }
    export class $StandardBogeyVisual$Small extends $StandardBogeyVisual {
        constructor(arg0: $VisualizationContext, arg1: number, arg2: boolean);
    }
    export class $AbstractBogeyBlockEntity extends $CachedRenderBBBlockEntity {
        animate(arg0: number): void;
        setBogeyStyle(arg0: $BogeyStyle): void;
        getBogeyData(): $CompoundTag;
        setBogeyData(arg0: $CompoundTag_): void;
        getVirtualAngle(arg0: number): number;
        getDefaultStyle(): $BogeyStyle;
        getStyle(): $BogeyStyle;
        static BOGEY_STYLE_KEY: string;
        static BOGEY_DATA_KEY: string;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        set bogeyStyle(value: $BogeyStyle);
        get defaultStyle(): $BogeyStyle;
        get style(): $BogeyStyle;
    }
    export class $StandardBogeyVisual implements $BogeyVisual {
        hide(): void;
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
        updateLight(arg0: number): void;
        update(arg0: $CompoundTag_, arg1: number, arg2: $PoseStack): void;
        "delete"(): void;
        constructor(arg0: $VisualizationContext, arg1: number, arg2: boolean);
    }
    export class $StandardBogeyRenderer implements $BogeyRenderer {
        render(arg0: $CompoundTag_, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: boolean): void;
        constructor();
    }
    export class $BogeyBlockEntityVisual extends $AbstractBlockEntityVisual<$AbstractBogeyBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $AbstractBogeyBlockEntity, arg2: number);
    }
    export class $BogeySizes$BogeySize extends $Record {
        nextBySize(): $BogeySizes$BogeySize;
        wheelRadius(): number;
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_, wheelRadius: number);
    }
    /**
     * Values that may be interpreted as {@link $BogeySizes$BogeySize}.
     */
    export type $BogeySizes$BogeySize_ = { id?: $ResourceLocation_, wheelRadius?: number,  } | [id?: $ResourceLocation_, wheelRadius?: number, ];
    export class $BogeyStyle$Builder {
        soundEvent(arg0: $Supplier_<$SoundEvent>): $BogeyStyle$Builder;
        smokeParticle(arg0: $ParticleOptions_): $BogeyStyle$Builder;
        contactParticle(arg0: $ParticleOptions_): $BogeyStyle$Builder;
        size(arg0: $BogeySizes$BogeySize_, arg1: $Supplier_<$AbstractBogeyBlock<never>>, arg2: $Supplier_<$Supplier<$BogeyStyle$SizeRenderer>>): $BogeyStyle$Builder;
        displayName(arg0: $Component_): $BogeyStyle$Builder;
        build(): $BogeyStyle;
        defaultData(arg0: $CompoundTag_): $BogeyStyle$Builder;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
    }
    export class $BogeyStyle implements $AccessorBogeyStyle {
        createVisual(arg0: $BogeySizes$BogeySize_, arg1: $VisualizationContext, arg2: number, arg3: boolean): $BogeyVisual;
        getCycleGroup(): $Map<$ResourceLocation, $BogeyStyle>;
        validSizes(): $Set<$BogeySizes$BogeySize>;
        getBlockForSize(arg0: $BogeySizes$BogeySize_): $AbstractBogeyBlock<never>;
        getNextBlock(arg0: $BogeySizes$BogeySize_): $AbstractBogeyBlock<never>;
        render(arg0: $BogeySizes$BogeySize_, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number, arg6: number, arg7: $CompoundTag_, arg8: boolean): void;
        getSizeRenderers(): $Map<$BogeySizes$BogeySize, $BogeyStyle$SizeRenderer>;
        contactParticle: $ParticleOptions;
        soundEvent: $Supplier<$SoundEvent>;
        smokeParticle: $ParticleOptions;
        cycleGroup: $ResourceLocation;
        displayName: $Component;
        defaultData: $CompoundTag;
        id: $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $Component_, arg3: $Supplier_<$SoundEvent>, arg4: $ParticleOptions_, arg5: $ParticleOptions_, arg6: $CompoundTag_, arg7: $Map_<$BogeySizes$BogeySize_, $Supplier_<$AbstractBogeyBlock<never>>>, arg8: $Map_<$BogeySizes$BogeySize_, $Supplier_<$Supplier<$BogeyStyle$SizeRenderer>>>);
        get sizeRenderers(): $Map<$BogeySizes$BogeySize, $BogeyStyle$SizeRenderer>;
    }
    export class $BogeySizes {
        static allSortedIncreasing(): $List<$BogeySizes$BogeySize>;
        static allSortedDecreasing(): $List<$BogeySizes$BogeySize>;
        static register(arg0: $BogeySizes$BogeySize_): void;
        static init(): void;
        static all(): $Map<$ResourceLocation, $BogeySizes$BogeySize>;
        static SMALL: $BogeySizes$BogeySize;
        static LARGE: $BogeySizes$BogeySize;
    }
    export class $BogeyRenderer {
    }
    export interface $BogeyRenderer {
        render(arg0: $CompoundTag_, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BogeyRenderer}.
     */
    export type $BogeyRenderer_ = ((arg0: $CompoundTag, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource, arg5: number, arg6: number, arg7: boolean) => void);
    export class $StandardBogeyBlock extends $AbstractBogeyBlock<$StandardBogeyBlockEntity> implements $IBE<$StandardBogeyBlockEntity>, $ProperWaterloggedBlock, $SpecialBlockItemRequirement {
        getConnectorAnchorOffset(): $Vec3;
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
        constructor(arg0: $BlockBehaviour$Properties, arg1: $BogeySizes$BogeySize_);
        get connectorAnchorOffset(): $Vec3;
    }
}
