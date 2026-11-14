import { $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeHolder, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $IRecipeTypeInfo } from "@package/com/simibubi/create/foundation/recipe";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $KineticBlockEntity, $RotatedPillarKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $ProcessingRecipeParams, $ProcessingInventory, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $RecipeWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $DirectionProperty, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $RenderShape, $DirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $LivingDropsEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/kinetics/crusher" {
    export class $CrushingRecipe extends $AbstractCrushingRecipe {
        constructor(arg0: $ProcessingRecipeParams);
    }
    export class $CrushingWheelControllerBlockEntity extends $SmartBlockEntity implements $Clearable {
        isOccupied(): boolean;
        startCrushing(arg0: $Entity): void;
        clearContent(): void;
        handler$gan000$sable$initSublevel(arg0: $CallbackInfo): void;
        hasEntity(): boolean;
        wrapOperation$gan000$sable$pushEntityLocalAABB(arg0: $Entity, arg1: $Operation_<any>): $AABB;
        wrapOperation$gan000$sable$pushEntityLocalX(arg0: $Entity, arg1: $Operation_<any>): number;
        wrapOperation$gan000$sable$pushEntityLocalZ(arg0: $Entity, arg1: $Operation_<any>): number;
        wrapOperation$gan000$sable$pushEntityLocalY(arg0: $Entity, arg1: $Operation_<any>): number;
        findRecipe(): ($RecipeHolder<$StandardProcessingRecipe<$RecipeWrapper>>) | undefined;
        tickAudio(): void;
        clear(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        processingEntity: $Entity;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $ProcessingInventory;
        crushingspeed: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get occupied(): boolean;
    }
    export class $CrushingWheelBlockEntity extends $KineticBlockEntity {
        fixControllers(): void;
        static handleCrushedMobDrops(arg0: $LivingDropsEvent): void;
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
    }
    export class $CrushingWheelBlock extends $RotatedPillarKineticBlock implements $IBE<$CrushingWheelBlockEntity> {
        updateControllers(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Direction_): void;
        getBlockEntityType(): $BlockEntityType<$CrushingWheelBlockEntity>;
        getBlockEntityClass(): $Class<$CrushingWheelBlockEntity>;
        getRenderShape(arg0: $BlockState_): $RenderShape;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        entityInside(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CrushingWheelBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CrushingWheelBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$CrushingWheelBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($CrushingWheelBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $CrushingWheelBlockEntity;
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
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$CrushingWheelBlockEntity>;
        get blockEntityClass(): $Class<$CrushingWheelBlockEntity>;
    }
    export class $AbstractCrushingRecipe extends $StandardProcessingRecipe<$RecipeInput> {
        constructor(arg0: $IRecipeTypeInfo, arg1: $ProcessingRecipeParams);
    }
    export class $CrushingWheelControllerBlock extends $DirectionalBlock implements $IBE<$CrushingWheelControllerBlockEntity> {
        checkEntityForProcessing(arg0: $Level_, arg1: $BlockPos_, arg2: $Entity): void;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        canBeReplaced(arg0: $BlockState_, arg1: $BlockPlaceContext): boolean;
        updateSpeed(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        getBlockEntityType(): $BlockEntityType<$CrushingWheelControllerBlockEntity>;
        getBlockEntityClass(): $Class<$CrushingWheelControllerBlockEntity>;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        entityInside(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): void;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CrushingWheelControllerBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CrushingWheelControllerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$CrushingWheelControllerBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($CrushingWheelControllerBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $CrushingWheelControllerBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$CrushingWheelControllerBlock>;
        static VALID: $BooleanProperty;
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
        get blockEntityType(): $BlockEntityType<$CrushingWheelControllerBlockEntity>;
        get blockEntityClass(): $Class<$CrushingWheelControllerBlockEntity>;
    }
}
