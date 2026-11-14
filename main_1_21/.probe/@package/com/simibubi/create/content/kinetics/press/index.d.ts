import { $MapCodec } from "@package/com/mojang/serialization";
import { $SingleRecipeInput_, $Recipe, $RecipeHolder, $Ingredient_, $SingleRecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $DeferralBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/simple";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Set_, $List_ } from "@package/java/util";
import { $BehaviourType } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Function_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntityRenderer, $HorizontalKineticBlock, $ShaftVisual } from "@package/com/simibubi/create/content/kinetics/base";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SequencedAssemblySubCategory } from "@package/com/simibubi/create/compat/jei/category/sequencedAssembly";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $IAssemblyRecipe } from "@package/com/simibubi/create/content/processing/sequenced";
import { $ItemLike_, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $BeltProcessingBehaviour } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $ProcessingRecipeParams, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BasinOperatingBlockEntity } from "@package/com/simibubi/create/content/processing/basin";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $TransportedItemStack } from "@package/com/simibubi/create/content/kinetics/belt/transport";

declare module "@package/com/simibubi/create/content/kinetics/press" {
    export class $PressingBehaviour$Mode extends $Enum<$PressingBehaviour$Mode> {
        static values(): $PressingBehaviour$Mode[];
        static valueOf(arg0: string): $PressingBehaviour$Mode;
        headOffset: number;
        static BELT: $PressingBehaviour$Mode;
        static BASIN: $PressingBehaviour$Mode;
        static WORLD: $PressingBehaviour$Mode;
    }
    /**
     * Values that may be interpreted as {@link $PressingBehaviour$Mode}.
     */
    export type $PressingBehaviour$Mode_ = "world" | "belt" | "basin";
    export class $BeltPressingCallbacks {
        constructor();
    }
    export class $MechanicalPressRenderer extends $KineticBlockEntityRenderer<$MechanicalPressBlockEntity> {
        shouldRenderOffScreen(arg0: $MechanicalPressBlockEntity): boolean;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $PressingRecipe extends $StandardProcessingRecipe<$SingleRecipeInput> implements $IAssemblyRecipe {
        getDescriptionForAssembly(): $Component;
        addRequiredMachines(arg0: $Set_<$ItemLike_>): void;
        addAssemblyIngredients(arg0: $List_<$Ingredient_>): void;
        getJEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        matches(arg0: $SingleRecipeInput_, arg1: $Level_): boolean;
        supportsAssembly(): boolean;
        addAssemblyFluidIngredients(arg0: $List_<$SizedFluidIngredient>): void;
        constructor(arg0: $ProcessingRecipeParams);
        get descriptionForAssembly(): $Component;
        get JEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
    }
    export class $MechanicalPressBlockEntity extends $BasinOperatingBlockEntity implements $PressingBehaviour$PressingBehaviourSpecifics {
        getParticleAmount(): number;
        getRecipe(arg0: $ItemStack_): ($RecipeHolder<$PressingRecipe>) | undefined;
        static canCompress(arg0: $Recipe<never>): boolean;
        canProcessInBulk(): boolean;
        onItemPressed(arg0: $ItemStack_): void;
        getPressingBehaviour(): $PressingBehaviour;
        tryProcessInBasin(arg0: boolean): boolean;
        tryProcessInWorld(arg0: $ItemEntity, arg1: boolean): boolean;
        tryProcessOnBelt(arg0: $TransportedItemStack, arg1: $List_<$ItemStack_>, arg2: boolean): boolean;
        onPressingCompleted(): void;
        getKineticSpeed(): number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        basinRemoved: boolean;
        networkDirty: boolean;
        pressingBehaviour: $PressingBehaviour;
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
        get particleAmount(): number;
        get kineticSpeed(): number;
    }
    export class $PressingBehaviour$PressingBehaviourSpecifics {
    }
    export interface $PressingBehaviour$PressingBehaviourSpecifics {
        getParticleAmount(): number;
        canProcessInBulk(): boolean;
        tryProcessInBasin(arg0: boolean): boolean;
        tryProcessInWorld(arg0: $ItemEntity, arg1: boolean): boolean;
        tryProcessOnBelt(arg0: $TransportedItemStack, arg1: $List_<$ItemStack_>, arg2: boolean): boolean;
        onPressingCompleted(): void;
        getKineticSpeed(): number;
        get particleAmount(): number;
        get kineticSpeed(): number;
    }
    export class $PressingBehaviour extends $BeltProcessingBehaviour {
        getRunningTickSpeed(): number;
        makePressingParticleEffect(arg0: $Vec3_, arg1: $ItemStack_): void;
        makePressingParticleEffect(arg0: $Vec3_, arg1: $ItemStack_, arg2: number): void;
        makeCompactingParticleEffect(arg0: $Vec3_, arg1: $ItemStack_): void;
        getRenderedHeadOffset(arg0: number): number;
        onBasin(): boolean;
        start(arg0: $PressingBehaviour$Mode_): void;
        inWorld(): boolean;
        running: boolean;
        mode: $PressingBehaviour$Mode;
        prevRunningTicks: number;
        static ENTITY_SCAN: number;
        runningTicks: number;
        particleItems: $List<$ItemStack>;
        blockEntity: $SmartBlockEntity;
        finished: boolean;
        static TYPE: $BehaviourType<$BeltProcessingBehaviour>;
        static CYCLE: number;
        specifics: $PressingBehaviour$PressingBehaviourSpecifics;
        constructor<T extends $SmartBlockEntity>(arg0: T);
        get runningTickSpeed(): number;
    }
    export class $MechanicalPressBlock extends $HorizontalKineticBlock implements $IBE<$MechanicalPressBlockEntity> {
        getBlockEntityType(): $BlockEntityType<$MechanicalPressBlockEntity>;
        getBlockEntityClass(): $Class<$MechanicalPressBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalPressBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalPressBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$MechanicalPressBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($MechanicalPressBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $MechanicalPressBlockEntity;
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
        static HORIZONTAL_FACING: $Property<$Direction>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$MechanicalPressBlockEntity>;
        get blockEntityClass(): $Class<$MechanicalPressBlockEntity>;
    }
    export class $PressVisual extends $ShaftVisual<$MechanicalPressBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $MechanicalPressBlockEntity, arg2: number);
    }
}
