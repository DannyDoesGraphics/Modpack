import { $BlazeBurnerBlock$HeatLevel } from "@package/com/simibubi/create/content/processing/burner";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $RecipeHolder_, $Recipe, $RecipeHolder, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $DeferralBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/simple";
import { $SmartFluidTankBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List_, $Map } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $ProcessingRecipeParams, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $IBasinOptimization } from "@package/net/pinkcats/createlazytick/bridge/Basin";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/processing/basin" {
    export class $BasinGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $BasinMovementBehaviour implements $MovementBehaviour {
        getOrReadInventory(arg0: $MovementContext): $Map<string, $ItemStackHandler>;
        tick(arg0: $MovementContext): void;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        startMoving(arg0: $MovementContext): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        cancelStall(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        disableBlockEntityRendering(): boolean;
        stopMoving(arg0: $MovementContext): void;
        writeExtraData(arg0: $MovementContext): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        isActive(arg0: $MovementContext): boolean;
        constructor();
    }
    export class $BasinBlockEntity$BasinValueBox extends $ValueBoxTransform$Sided {
    }
    export class $BasinInventory extends $SmartInventory {
        kjs$self(): $IItemHandler;
        packagerMode: boolean;
        constructor(arg0: number, arg1: $BasinBlockEntity);
    }
    export class $BasinBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $Clearable, $IBasinOptimization {
        static getHeatLevelOf(arg0: $BlockState_): $BlazeBurnerBlock$HeatLevel;
        notifyChangeOfContents(): void;
        wrapOperation$fpp000$sable$accountForSubLevels(arg0: $Level_, arg1: $BlockPos_, arg2: $Operation_<any>): $BlockEntity;
        setAreFluidsMoving(arg0: boolean): boolean;
        acceptOutputs(arg0: $List_<$ItemStack_>, arg1: $List_<$FluidStack_>, arg2: boolean): boolean;
        getOutputInventory(): $SmartInventory;
        canContinueProcessing(): boolean;
        readOnlyItems(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getInvs(): $Couple<$SmartInventory>;
        clt$getHeatLevel(): $BlazeBurnerBlock$HeatLevel;
        clt$isOutputBufferEmpty(): boolean;
        getInputInventory(): $SmartInventory;
        onEmptied(): void;
        areFluidsMoving(): boolean;
        clearContent(): void;
        getTanks(): $Couple<$SmartFluidTankBehaviour>;
        getTotalFluidUnits(arg0: number): number;
        onWrenched(arg0: $Direction_): void;
        isEmpty(): boolean;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getFilter(): $FilteringBehaviour;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        static OUTPUT_ANIMATION_TIME: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inputTank: $SmartFluidTankBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        inputInventory: $BasinInventory;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get outputInventory(): $SmartInventory;
        get invs(): $Couple<$SmartInventory>;
        get tanks(): $Couple<$SmartFluidTankBehaviour>;
        get empty(): boolean;
        get filter(): $FilteringBehaviour;
    }
    export class $BasinBlock extends $Block implements $IBE<$BasinBlockEntity>, $IWrenchable {
        static isBasin(arg0: $LevelReader, arg1: $BlockPos_): boolean;
        static canOutputTo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getInteractionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        getBlockEntityType(): $BlockEntityType<$BasinBlockEntity>;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$BasinBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BasinBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BasinBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$BasinBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($BasinBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $BasinBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
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
        get blockEntityType(): $BlockEntityType<$BasinBlockEntity>;
        get blockEntityClass(): $Class<$BasinBlockEntity>;
    }
    export class $BasinRenderer extends $SmartBlockEntityRenderer<$BasinBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $BasinRecipe extends $StandardProcessingRecipe<$RecipeInput> {
        static convertShapeless(arg0: $RecipeHolder_<never>): $RecipeHolder<$BasinRecipe>;
        static apply(arg0: $BasinBlockEntity, arg1: $Recipe<never>): boolean;
        static match(arg0: $BasinBlockEntity, arg1: $Recipe<never>): boolean;
        constructor(arg0: $ProcessingRecipeParams);
    }
    export class $BasinOperatingBlockEntity extends $KineticBlockEntity {
        continueWithPreviousRecipe(): boolean;
        startProcessingBasin(): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        basinRemoved: boolean;
        networkDirty: boolean;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        basinChecker: $DeferralBehaviour;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
