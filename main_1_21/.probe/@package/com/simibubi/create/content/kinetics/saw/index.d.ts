import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $RecipeType, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $AbstractBlockBreakQueue } from "@package/com/simibubi/create/foundation/utility";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $Set_, $List_ } from "@package/java/util";
import { $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $DirectionalAxisKineticBlock, $BlockBreakingKineticBlockEntity, $RotatingInstance, $KineticBlockEntityVisual, $BlockBreakingMovementBehaviour } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SequencedAssemblySubCategory } from "@package/com/simibubi/create/compat/jei/category/sequencedAssembly";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $IAssemblyRecipe } from "@package/com/simibubi/create/content/processing/sequenced";
import { $InstancerProvider_ } from "@package/dev/engine_room/flywheel/api/instance";
import { $ItemLike_, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ProcessingRecipeParams, $ProcessingInventory, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $RecipeWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $ISmartBlockEntityControl } from "@package/net/pinkcats/createlazytick/bridge/Create";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/kinetics/saw" {
    export class $TreeCutter {
        static findDynamicTree(arg0: $Block_, arg1: $BlockPos_): ($AbstractBlockBreakQueue) | undefined;
        static findTree(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $TreeCutter$Tree;
        static canDynamicTreeCutFrom(arg0: $Block_): boolean;
        static isChorus(arg0: $BlockState_): boolean;
        static isVerticalPlant(arg0: $BlockState_): boolean;
        static isRoot(arg0: $BlockState_): boolean;
        static isLog(arg0: $BlockState_): boolean;
        static NO_TREE: $TreeCutter$Tree;
        constructor();
    }
    export class $SawBlock extends $DirectionalAxisKineticBlock implements $IBE<$SawBlockEntity> {
        wrapOperation$gai000$sable$fixBlockBreakerDamage(arg0: $AABB_, arg1: $AABB_, arg2: $Operation_<any>, arg3: $Level_): boolean;
        wrapOperation$gai000$sable$fixBlockBreakerDamage$mixinextras$bridge$24(arg0: $AABB_, arg1: $AABB_, arg2: $Operation_<any>, arg3: $LocalRef<any>): boolean;
        static isHorizontal(arg0: $BlockState_): boolean;
        getBlockEntityType(): $BlockEntityType<$SawBlockEntity>;
        getBlockEntityClass(): $Class<$SawBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        entityInside(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Entity): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SawBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SawBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SawBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SawBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SawBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static FLIPPED: $BooleanProperty;
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
        get blockEntityType(): $BlockEntityType<$SawBlockEntity>;
        get blockEntityClass(): $Class<$SawBlockEntity>;
    }
    export class $TreeCutter$SearchDirection extends $Enum<$TreeCutter$SearchDirection> {
    }
    /**
     * Values that may be interpreted as {@link $TreeCutter$SearchDirection}.
     */
    export type $TreeCutter$SearchDirection_ = "up" | "down" | "both";
    export class $SawRenderer extends $SafeBlockEntityRenderer<$SawBlockEntity> {
        static renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $SawFilterSlot extends $ValueBoxTransform {
        constructor();
    }
    export class $SawGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $SawMovementBehaviour extends $BlockBreakingMovementBehaviour {
        dropItemFromCutTree(arg0: $MovementContext, arg1: $BlockPos_, arg2: $ItemStack_): void;
        redirect$gad000$sable$fixSpeed$mixinextras$bridge$16(arg0: $Vec3_, arg1: $Vec3_, arg2: $LocalRef<any>): number;
        redirect$gad000$sable$fixRelativeMotion$mixinextras$bridge$17(arg0: $MovementContext, arg1: $LocalRef<any>, arg2: $LocalRef<any>): $Vec3;
        redirect$gad000$sable$fixRelativeMotion(arg0: $MovementContext, arg1: $MovementContext, arg2: $Vec3_): $Vec3;
        redirect$gad000$sable$fixSpeed(arg0: $Vec3_, arg1: $Vec3_, arg2: $MovementContext): number;
        constructor();
    }
    export class $CuttingRecipe extends $StandardProcessingRecipe<$RecipeWrapper> implements $IAssemblyRecipe {
        getDescriptionForAssembly(): $Component;
        addRequiredMachines(arg0: $Set_<$ItemLike_>): void;
        addAssemblyIngredients(arg0: $List_<$Ingredient_>): void;
        getJEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        matches(arg0: $RecipeWrapper, arg1: $Level_): boolean;
        supportsAssembly(): boolean;
        addAssemblyFluidIngredients(arg0: $List_<$SizedFluidIngredient>): void;
        constructor(arg0: $ProcessingRecipeParams);
        get descriptionForAssembly(): $Component;
        get JEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
    }
    export class $SawActorVisual extends $ActorVisual {
        constructor(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext);
    }
    export class $SawVisual extends $KineticBlockEntityVisual<$SawBlockEntity> {
        static shaft(arg0: $InstancerProvider_, arg1: $BlockState_): $RotatingInstance;
        constructor(arg0: $VisualizationContext, arg1: $SawBlockEntity, arg2: number);
    }
    export class $SawBlock$PlacementHelper implements $IPlacementHelper {
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
    }
    export class $TreeCutter$Tree extends $AbstractBlockBreakQueue {
        constructor(arg0: $List_<$BlockPos_>, arg1: $List_<$BlockPos_>, arg2: $List_<$BlockPos_>);
    }
    export class $SawBlockEntity extends $BlockBreakingKineticBlockEntity implements $Clearable, $ISmartBlockEntityControl {
        static isSawable(arg0: $BlockState_): boolean;
        dropItemFromCutTree(arg0: $BlockPos_, arg1: $ItemStack_): void;
        clearContent(): void;
        handler$cib000$createlazytick$tick_Head(arg0: $CallbackInfo): void;
        handler$cib000$createlazytick$createLazyTick$gateEmptyInputIdle(arg0: $CallbackInfo): void;
        handler$cib000$createlazytick$createLazyTick$onOutputFail(arg0: $CallbackInfo): void;
        handler$cib000$createlazytick$createLazyTick$gateBlockedOutputRetry(arg0: $CallbackInfo): void;
        getItemMovementVec(): $Vec3;
        handler$cib000$createlazytick$createLazyTick$onInventoryChange(arg0: $CallbackInfo): void;
        handler$cib000$createlazytick$createLazyTick$wakeOnInput(arg0: $ItemStack_, arg1: $CallbackInfo): void;
        start(arg0: $ItemStack_): void;
        insertItem(arg0: $ItemEntity): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        static woodcuttingRecipeType: $Supplier<$RecipeType<never>>;
        level: $Level;
        updateSpeed: boolean;
        static NEXT_BREAKER_ID: $AtomicInteger;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        inventory: $ProcessingInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get itemMovementVec(): $Vec3;
    }
}
