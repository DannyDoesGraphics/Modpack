import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $RecipeSerializer, $RecipeHolder_, $ShapedRecipePattern, $CraftingInput, $CraftingRecipe, $ShapedRecipe, $CraftingBookCategory_ } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List, $Collection_, $Map } from "@package/java/util";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntity, $HorizontalKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $CrafterAccessor } from "@package/net/pinkcats/createlazytick/mixin/OptElement/crafter";
import { $Enum, $Class } from "@package/java/lang";
import { $BlockAndTintGetter, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ConnectedTextureBehaviour$Base } from "@package/com/simibubi/create/foundation/block/connected";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ICogWheel } from "@package/com/simibubi/create/content/kinetics/simpleRelays";
import { $EnumProperty, $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $ISmartBlockEntityControl } from "@package/net/pinkcats/createlazytick/bridge/Create";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Pointing_, $BlockFace, $Pointing } from "@package/net/createmod/catnip/math";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/kinetics/crafter" {
    export class $RecipeGridHandler {
        static getTargetingCrafter(arg0: $MechanicalCrafterBlockEntity): $MechanicalCrafterBlockEntity;
        static tryToApplyRecipe(arg0: $Level_, arg1: $RecipeGridHandler$GroupedItems): $ItemStack;
        static getAllCraftersOfChain(arg0: $MechanicalCrafterBlockEntity): $List<$MechanicalCrafterBlockEntity>;
        static getAllCraftersOfChainIf(arg0: $MechanicalCrafterBlockEntity, arg1: $Predicate_<$MechanicalCrafterBlockEntity>, arg2: boolean): $List<$MechanicalCrafterBlockEntity>;
        static getAllCraftersOfChainIf(arg0: $MechanicalCrafterBlockEntity, arg1: $Predicate_<$MechanicalCrafterBlockEntity>): $List<$MechanicalCrafterBlockEntity>;
        static getPrecedingCrafters(arg0: $MechanicalCrafterBlockEntity): $List<$MechanicalCrafterBlockEntity>;
        static isRecipeAllowed(arg0: $RecipeHolder_<$CraftingRecipe>, arg1: $CraftingInput): boolean;
        constructor();
    }
    export class $MechanicalCrafterBlockEntity extends $KineticBlockEntity implements $TransformableBlockEntity, $ISmartBlockEntityControl {
        ejectWholeGrid(): void;
        tryInsert(): void;
        blockChanged(): void;
        dropItem(arg0: $Vec3_, arg1: $ItemStack_): void;
        getTargetDirection(): $Direction;
        getTargetFace(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $BlockFace;
        getCountDownSpeed(): number;
        checkCompletedRecipe(arg0: boolean): void;
        eject(): void;
        connectivityChanged(): void;
        craftingItemPresent(): boolean;
        craftingItemOrCoverPresent(): boolean;
        setScriptedResult(arg0: $ItemStack_): void;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getInventory(): $MechanicalCrafterBlockEntity$Inventory;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        getInput(): $ConnectedInputHandler$ConnectedInput;
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
        get targetDirection(): $Direction;
        get countDownSpeed(): number;
        set scriptedResult(value: $ItemStack_);
        get inventory(): $MechanicalCrafterBlockEntity$Inventory;
        get input(): $ConnectedInputHandler$ConnectedInput;
    }
    export class $CrafterCTBehaviour extends $ConnectedTextureBehaviour$Base {
        constructor();
    }
    export class $ConnectedInputHandler$ConnectedInput {
        getInventories(arg0: $Level_, arg1: $BlockPos_): $List<$MechanicalCrafterBlockEntity$Inventory>;
        attachTo(arg0: $BlockPos_, arg1: $BlockPos_): void;
        write(arg0: $CompoundTag_): void;
        read(arg0: $CompoundTag_): void;
        getItemHandler(arg0: $Level_, arg1: $BlockPos_): $IItemHandler;
        constructor();
    }
    export class $MechanicalCrafterBlockEntity$Phase extends $Enum<$MechanicalCrafterBlockEntity$Phase> {
    }
    /**
     * Values that may be interpreted as {@link $MechanicalCrafterBlockEntity$Phase}.
     */
    export type $MechanicalCrafterBlockEntity$Phase_ = "idle" | "accepting" | "assembling" | "exporting" | "waiting" | "crafting" | "inserting";
    export class $CrafterHelper {
        static getCrafter(arg0: $BlockAndTintGetter, arg1: $BlockPos_): $MechanicalCrafterBlockEntity;
        static areCraftersConnected(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        static getInput(arg0: $BlockAndTintGetter, arg1: $BlockPos_): $ConnectedInputHandler$ConnectedInput;
        constructor();
    }
    export class $ConnectedInputHandler {
        static connectControllers(arg0: $Level_, arg1: $MechanicalCrafterBlockEntity, arg2: $MechanicalCrafterBlockEntity): void;
        static initAndAddAll(arg0: $Level_, arg1: $MechanicalCrafterBlockEntity, arg2: $Collection_<$BlockPos_>): void;
        static shouldConnect(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Direction_): boolean;
        static toggleConnection(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockPos_): void;
        constructor();
    }
    export class $MechanicalCrafterRenderer extends $SafeBlockEntityRenderer<$MechanicalCrafterBlockEntity> {
        renderFast(arg0: $MechanicalCrafterBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number): void;
        renderItems(arg0: $MechanicalCrafterBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $RecipeGridHandler$GroupedItems implements $CrafterAccessor {
        calcStats(): void;
        onlyEmptyItems(): boolean;
        mergeOnto(arg0: $RecipeGridHandler$GroupedItems, arg1: $Pointing_): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $RecipeGridHandler$GroupedItems;
        getGrid(): $Map<$Pair<number, number>, $ItemStack>;
        getMinX(): number;
        getMinY(): number;
        constructor();
        constructor(arg0: $ItemStack_);
        get grid(): $Map<$Pair<number, number>, $ItemStack>;
        get minX(): number;
        get minY(): number;
    }
    export class $MechanicalCraftingRecipe$Serializer implements $RecipeSerializer<$MechanicalCraftingRecipe> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $MechanicalCraftingRecipe>;
        codec(): $MapCodec<$MechanicalCraftingRecipe>;
        static CODEC: $MapCodec<$MechanicalCraftingRecipe>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MechanicalCraftingRecipe>;
        constructor();
    }
    export class $MechanicalCrafterBlockEntity$Inventory extends $SmartInventory {
        kjs$self(): $IItemHandler;
        constructor(arg0: $MechanicalCrafterBlockEntity);
    }
    export class $MechanicalCraftingRecipe extends $ShapedRecipe {
        acceptsMirrored(): boolean;
        result: $ItemStack;
        pattern: $ShapedRecipePattern;
        constructor(arg0: string, arg1: $CraftingBookCategory_, arg2: $ShapedRecipePattern, arg3: $ItemStack_, arg4: boolean);
    }
    export class $MechanicalCraftingInput extends $CraftingInput {
        static of(arg0: $RecipeGridHandler$GroupedItems): $MechanicalCraftingInput;
        static EMPTY: $CraftingInput;
    }
    export class $MechanicalCrafterBlock extends $HorizontalKineticBlock implements $IBE<$MechanicalCrafterBlockEntity>, $ICogWheel {
        static pointingFromFacing(arg0: $Direction_, arg1: $Direction_): $Pointing;
        static isValidTarget(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        static getTargetDirection(arg0: $BlockState_): $Direction;
        getBlockEntityType(): $BlockEntityType<$MechanicalCrafterBlockEntity>;
        getBlockEntityClass(): $Class<$MechanicalCrafterBlockEntity>;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalCrafterBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$MechanicalCrafterBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$MechanicalCrafterBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($MechanicalCrafterBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $MechanicalCrafterBlockEntity;
        isLargeCog(): boolean;
        isDedicatedCogWheel(): boolean;
        isSmallCog(): boolean;
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
        static POINTING: $EnumProperty<$Pointing>;
        hasCollision: boolean;
        static HORIZONTAL_FACING: $Property<$Direction>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$MechanicalCrafterBlockEntity>;
        get blockEntityClass(): $Class<$MechanicalCrafterBlockEntity>;
        get largeCog(): boolean;
        get dedicatedCogWheel(): boolean;
        get smallCog(): boolean;
    }
}
