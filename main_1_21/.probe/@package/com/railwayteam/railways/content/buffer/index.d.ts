import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SingleBlockEntityEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $TrackTargetingBlockItem, $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Map, $UUID, $EnumMap } from "@package/java/util";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $ItemBuilder } from "@package/com/tterrag/registrate/builders";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StitchedSprite } from "@package/net/createmod/catnip/render";
import { $InteractionResult, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Consumer_, $UnaryOperator, $Function_, $UnaryOperator_ } from "@package/java/util/function";
import { $BlockEntry, $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $TrackNodeLocation, $EdgePointType } from "@package/com/simibubi/create/content/trains/graph";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $CreateRegistrate } from "@package/com/simibubi/create/foundation/data";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Comparable, $Iterable, $Class } from "@package/java/lang";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $Item$Properties, $DyeColor, $DyeColor_, $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $NonNullUnaryOperator_, $NonNullBiFunction, $NonNullFunction, $NonNullSupplier_ } from "@package/com/tterrag/registrate/util/nullness";
import { $Property, $BooleanProperty, $DirectionProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block, $HorizontalDirectionalBlock, $Block_ } from "@package/net/minecraft/world/level/block";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
export * as headstock from "@package/com/railwayteam/railways/content/buffer/headstock";
export * as single_deco from "@package/com/railwayteam/railways/content/buffer/single_deco";
export * as neoforge from "@package/com/railwayteam/railways/content/buffer/neoforge";

declare module "@package/com/railwayteam/railways/content/buffer" {
    export class $TrackBuffer extends $SingleBlockEntityEdgePoint {
        static getBufferRoom(arg0: $Train, arg1: boolean): number;
        static getBufferRoom(arg0: $Train): number;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        blockEntityDimension: $ResourceKey<$Level>;
        id: $UUID;
        position: number;
        constructor();
    }
    export class $MonoTrackBufferBlock$Style extends $Enum<$MonoTrackBufferBlock$Style> implements $StringRepresentable {
        static values(): $MonoTrackBufferBlock$Style[];
        static valueOf(arg0: string): $MonoTrackBufferBlock$Style;
        getModel(): $ResourceLocation;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SIDE: $MonoTrackBufferBlock$Style;
        static MONO: $MonoTrackBufferBlock$Style;
        static STANDARD: $MonoTrackBufferBlock$Style;
        get model(): $ResourceLocation;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MonoTrackBufferBlock$Style}.
     */
    export type $MonoTrackBufferBlock$Style_ = "standard" | "mono" | "side";
    export class $BlockStateBlockItemGroup$GroupedBlock {
    }
    export interface $BlockStateBlockItemGroup$GroupedBlock {
    }
    export class $StandardTrackBufferBlock$Style extends $Enum<$StandardTrackBufferBlock$Style> implements $StringRepresentable {
        static values(): $StandardTrackBufferBlock$Style[];
        static valueOf(arg0: string): $StandardTrackBufferBlock$Style;
        getModel(): $ResourceLocation;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static STANDARD: $StandardTrackBufferBlock$Style;
        static SHORT: $StandardTrackBufferBlock$Style;
        get model(): $ResourceLocation;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StandardTrackBufferBlock$Style}.
     */
    export type $StandardTrackBufferBlock$Style_ = "standard" | "short";
    export class $TrackBufferBlockItem extends $TrackTargetingBlockItem {
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
        constructor(arg0: $Block_, arg1: $Item$Properties, arg2: $EdgePointType<never>);
    }
    export class $BlockStateBlockItemGroup<C, T extends $BlockStateBlockItemGroup$IStyle<C>> {
        getItems(): $Iterable<$ItemEntry<$BlockStateBlockItem<T>>>;
        registerDefaultEntry(arg0: T, arg1: $ItemEntry<$BlockStateBlockItem<T>>): void;
        static get(arg0: $ResourceLocation_): $BlockStateBlockItemGroup<never, never>;
        get(arg0: T): $ItemEntry<$BlockStateBlockItem<T>>;
        constructor(arg0: C, arg1: $Property<T>, arg2: T[], arg3: $BlockEntry<never>, arg4: $NonNullUnaryOperator_<$ItemBuilder<$BlockStateBlockItem<T>, $CreateRegistrate>>, arg5: $TagKey_<$Item>);
        constructor(arg0: C, arg1: $Property<T>, arg2: T[], arg3: $BlockEntry<never>, arg4: $NonNullUnaryOperator_<$ItemBuilder<$BlockStateBlockItem<T>, $CreateRegistrate>>, arg5: $TagKey_<$Item>, arg6: string);
        constructor(arg0: C, arg1: $Property<T>, arg2: T[], arg3: $BlockEntry<never>, arg4: $NonNullUnaryOperator_<$ItemBuilder<$BlockStateBlockItem<T>, $CreateRegistrate>>, arg5: $TagKey_<$Item>, arg6: T, arg7: string);
        get items(): $Iterable<$ItemEntry<$BlockStateBlockItem<T>>>;
    }
    export class $StandardTrackBufferBlock extends $WoodVariantTrackBufferBlock {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$StandardTrackBufferBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static STYLE: $EnumProperty<$StandardTrackBufferBlock$Style>;
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
        static DIAGONAL: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BufferModelUtils {
        static getSwapper(arg0: $DyeColor_): $UnaryOperator<$TextureAtlasSprite>;
        static getSwapper(arg0: $BlockState_): $UnaryOperator<$TextureAtlasSprite>;
        static combineSwappers(...arg0: $UnaryOperator_<$TextureAtlasSprite>[]): $UnaryOperator<$TextureAtlasSprite>;
        static register(): void;
        static BIG_BUFFER_COLORS: $EnumMap<$DyeColor, $StitchedSprite>;
        static SMALL_BUFFER_TEMPLATE: $StitchedSprite;
        static SMALL_BUFFER_COLORS: $EnumMap<$DyeColor, $StitchedSprite>;
        static SPRUCE_PLANKS_TEMPLATE: $StitchedSprite;
        static SMALL_BUFFER_MONORAIL_TEMPLATE: $StitchedSprite;
        static BIG_BUFFER_TEMPLATE: $StitchedSprite;
        constructor();
    }
    export class $TrackBufferBlockEntity extends $DyeableBlockEntity implements $TransformableBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        edgePoint: $TrackTargetingBehaviour<$TrackBuffer>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $WideTrackBufferBlock extends $TrackBufferBlock<$TrackBufferBlockEntity> {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$WideTrackBufferBlock>;
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
        static DIAGONAL: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $IDyedBuffer {
    }
    export interface $IDyedBuffer {
        getColor(): $DyeColor;
        get color(): $DyeColor;
    }
    /**
     * Values that may be interpreted as {@link $IDyedBuffer}.
     */
    export type $IDyedBuffer_ = (() => $DyeColor_);
    export class $IMaterialAdaptingBuffer {
    }
    export interface $IMaterialAdaptingBuffer {
        getMaterial(): $BlockState;
        get material(): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $IMaterialAdaptingBuffer}.
     */
    export type $IMaterialAdaptingBuffer_ = (() => $BlockState_);
    export class $MonoTrackBufferBlock extends $WoodVariantTrackBufferBlock {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$MonoTrackBufferBlock>;
        static UPSIDE_DOWN: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static STYLE: $EnumProperty<$MonoTrackBufferBlock$Style>;
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
        static DIAGONAL: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BlockStateBlockItemGroup$IStyle<T> {
    }
    export interface $BlockStateBlockItemGroup$IStyle<T> {
        getLangName(arg0: T): string;
        getModel(arg0: T): $ResourceLocation;
        getBlockId(arg0: T): string;
    }
    export class $NarrowTrackBufferBlock extends $WoodVariantTrackBufferBlock {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$NarrowTrackBufferBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static STYLE: $EnumProperty<$NarrowTrackBufferBlock$Style>;
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
        static DIAGONAL: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BlockStateBlockItem<T extends $Comparable<T>> extends $BlockItem {
        static create<T extends $Comparable<T>>(arg0: $Property<T>, arg1: T, arg2: boolean): $NonNullBiFunction<$Block, $Item$Properties, $BlockStateBlockItem<T>>;
        static create<T extends $Comparable<T>>(arg0: $NonNullSupplier_<$Block>, arg1: $Property<T>, arg2: T, arg3: boolean): $NonNullFunction<$Item$Properties, $BlockStateBlockItem<T>>;
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
    }
    export class $WoodVariantTrackBufferBlockEntity extends $TrackBufferBlockEntity implements $IMaterialAdaptingBuffer {
        applyMaterialIfValid(arg0: $ItemStack_): $InteractionResult;
        getMaterial(): $BlockState;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        edgePoint: $TrackTargetingBehaviour<$TrackBuffer>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get material(): $BlockState;
    }
    export class $BufferBlockPlaceContext extends $BlockPlaceContext {
        static at(arg0: $BlockPlaceContext, arg1: $BlockPos_, arg2: $Direction_, arg3: $Direction_, arg4: $TrackBufferBlock<never>, arg5: boolean): $BufferBlockPlaceContext;
        overrideBlock: $TrackBufferBlock<never>;
        facing: $Direction;
        diagonal: boolean;
    }
    export class $NarrowTrackBufferBlock$Style extends $Enum<$NarrowTrackBufferBlock$Style> implements $StringRepresentable {
        static values(): $NarrowTrackBufferBlock$Style[];
        static valueOf(arg0: string): $NarrowTrackBufferBlock$Style;
        getModel(): $ResourceLocation;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MONO: $NarrowTrackBufferBlock$Style;
        static STANDARD: $NarrowTrackBufferBlock$Style;
        get model(): $ResourceLocation;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $NarrowTrackBufferBlock$Style}.
     */
    export type $NarrowTrackBufferBlock$Style_ = "standard" | "mono";
    export class $TrackBufferBlock<BE extends $TrackBufferBlockEntity> extends $HorizontalDirectionalBlock implements $IBE<BE>, $IWrenchable, $ProperWaterloggedBlock {
        getOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        getBlockEntityType(): $BlockEntityType<BE>;
        static getBaseModelYRotationOf(arg0: $Direction_): number;
        static getBaseModelYRotationOf(arg0: $BlockState_, arg1: number): number;
        static getBaseModelYRotationOf(arg0: $Direction_, arg1: number): number;
        static getBaseModelYRotationOf(arg0: $BlockState_): number;
        getBlockEntityClass(): $Class<BE>;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        useItemOn(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        getFluidState(arg0: $BlockState_): $FluidState;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<BE, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<BE, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<BE>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): (BE) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): BE;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
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
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static DIAGONAL: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        get blockEntityType(): $BlockEntityType<BE>;
        get blockEntityClass(): $Class<BE>;
    }
    export class $WoodVariantTrackBufferBlock extends $TrackBufferBlock<$WoodVariantTrackBufferBlockEntity> {
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
        static DIAGONAL: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
    }
    export class $DyeableBlockEntity extends $SmartBlockEntity implements $IDyedBuffer {
        applyDyeIfValid(arg0: $ItemStack_): $InteractionResult;
        getColor(): $DyeColor;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get color(): $DyeColor;
    }
}
