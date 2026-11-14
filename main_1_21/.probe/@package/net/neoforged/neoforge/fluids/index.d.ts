import { $DynamicOps, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $IClientFluidTypeExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $Unit_ } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Lazy } from "@package/net/neoforged/neoforge/common/util";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { RegistryMarked, RegistryTypes, DataComponentTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $DataComponentType, $PatchedDataComponentMap, $DataComponentHolder_, $DataComponentHolder, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $SoundAction, $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $Item, $Rarity, $Rarity_, $Item$TooltipContext, $TooltipFlag, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $LiquidBlock, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $FluidStackKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $JsonElement } from "@package/com/google/gson";
import { $FluidInteractionRegistryAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID_, $Map, $Set, $List, $Map_, $List_ } from "@package/java/util";
import { $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $IFluidHandler$FluidAction_, $IFluidHandler, $IFluidHandlerItem } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_, $Consumer_, $Predicate_, $Function_, $UnaryOperator_, $BiFunction_ } from "@package/java/util/function";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $HolderSet_, $BlockPos_, $Registry, $HolderLookup$Provider, $Holder_, $Holder, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $Record, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockAndTintGetter, $LevelReader, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Event } from "@package/net/neoforged/bus/api";
import { $FluidState, $Fluid_, $FlowingFluid, $Fluid } from "@package/net/minecraft/world/level/material";
import { $DefaultDispenseItemBehavior, $BlockSource_ } from "@package/net/minecraft/core/dispenser";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $Stream } from "@package/java/util/stream";
import { $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as capability from "@package/net/neoforged/neoforge/fluids/capability";
export * as crafting from "@package/net/neoforged/neoforge/fluids/crafting";

declare module "@package/net/neoforged/neoforge/fluids" {
    /**
     * Event to register `CauldronFluidContent` for modded cauldrons.
     * 
     * Registering cauldrons is done by calling `CauldronFluidContent#register`
     * and allows all cauldrons registered in this way to interoperate with each other
     * when accessed via the `FluidHandler#BLOCK` capability.
     */
    export class $RegisterCauldronFluidContentEvent extends $Event implements $IModBusEvent {
        /**
         * Register a new cauldron, allowing it to be filled and emptied through the standard capability.
         * In both cases, return the content of the cauldron, either the existing one, or the newly registered one.
         * 
         * If the block is not a subclass of `AbstractCauldronBlock`,
         * `BlockBehaviour#onPlace(BlockState, Level, BlockPos, BlockState, boolean)`
         * and `BlockBehaviour#onRemove(BlockState, Level, BlockPos, BlockState, boolean)`
         * must be overridden to invalidate capabilities when the block changes!
         * See how NeoForge patches `AbstractCauldronBlock` for reference.
         */
        register(block: $Block_, fluid: $Fluid_, totalAmount: number, levelProperty: $IntegerProperty): void;
    }
    export class $FluidInteractionRegistry$InteractionInformation extends $Record {
        interaction(): $FluidInteractionRegistry$FluidInteraction;
        predicate(): $FluidInteractionRegistry$HasFluidInteraction;
        constructor(predicate: $FluidInteractionRegistry$HasFluidInteraction_, interaction: $FluidInteractionRegistry$FluidInteraction_);
        constructor(arg0: $FluidInteractionRegistry$HasFluidInteraction_, arg1: $Function_<$FluidState, $BlockState>);
        constructor(arg0: $FluidType_, arg1: $BlockState_);
        constructor(arg0: $FluidInteractionRegistry$HasFluidInteraction_, arg1: $BlockState_);
        constructor(arg0: $FluidType_, arg1: $Function_<$FluidState, $BlockState>);
    }
    /**
     * Values that may be interpreted as {@link $FluidInteractionRegistry$InteractionInformation}.
     */
    export type $FluidInteractionRegistry$InteractionInformation_ = { predicate?: $FluidInteractionRegistry$HasFluidInteraction_, interaction?: $FluidInteractionRegistry$FluidInteraction_,  } | [predicate?: $FluidInteractionRegistry$HasFluidInteraction_, interaction?: $FluidInteractionRegistry$FluidInteraction_, ];
    export interface $FluidType extends RegistryMarked<RegistryTypes.NeoforgeFluidTypeTag, RegistryTypes.NeoforgeFluidType> {}
    /**
     * Stock data component class to hold a `FluidStack`.
     * 
     * A corresponding `DataComponentType` must be registered to use this class.
     */
    export class $SimpleFluidContent implements $DataComponentHolder {
        getFluid(): $Fluid;
        getFluidHolder(): $Holder<$Fluid>;
        isSameFluid(other: $FluidStack_): boolean;
        isSameFluidSameComponents(content: $SimpleFluidContent): boolean;
        isSameFluidSameComponents(other: $FluidStack_): boolean;
        static copyOf(fluidStack: $FluidStack_): $SimpleFluidContent;
        isEmpty(): boolean;
        matches(other: $FluidStack_): boolean;
        copy(): $FluidStack;
        is(fluid: $Fluid_): boolean;
        is(predicate: $Predicate_<$Holder<$Fluid>>): boolean;
        is(holder: $Holder_<$Fluid>): boolean;
        is(holders: $HolderSet_<$Fluid>): boolean;
        is(tag: $TagKey_<$Fluid>): boolean;
        is(fluidType: $FluidType_): boolean;
        getComponents(): $DataComponentMap;
        getAmount(): number;
        getFluidType(): $FluidType;
        get<T>(component: $DataComponentType_<T>): T;
        getOrDefault<T>(component: $DataComponentType_<T>, defaultValue: T): T;
        has(component: $DataComponentType_<never>): boolean;
        addToTooltip<T extends $TooltipProvider>(type: $DataComponentType_<T>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        addToTooltip<T extends $TooltipProvider>(type: $Supplier_<$DataComponentType<T>>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        get<T>(arg0: $Supplier_<$DataComponentType<T>>): T;
        getOrDefault<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T): T;
        has(type: $Supplier_<$DataComponentType<never>>): boolean;
        static CODEC: $Codec<$SimpleFluidContent>;
        static EMPTY: $SimpleFluidContent;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SimpleFluidContent>;
        get fluid(): $Fluid;
        get fluidHolder(): $Holder<$Fluid>;
        get empty(): boolean;
        get components(): $DataComponentMap;
        get amount(): number;
        get fluidType(): $FluidType;
    }
    /**
     * An interface which performs an interaction for a source.
     */
    export class $FluidInteractionRegistry$FluidInteraction {
    }
    export interface $FluidInteractionRegistry$FluidInteraction {
        /**
         * Performs the interaction between the source and the surrounding data.
         */
        interact(level: $Level_, currentPos: $BlockPos_, relativePos: $BlockPos_, currentState: $FluidState): void;
    }
    /**
     * Values that may be interpreted as {@link $FluidInteractionRegistry$FluidInteraction}.
     */
    export type $FluidInteractionRegistry$FluidInteraction_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockPos, arg3: $FluidState) => void);
    export class $FluidUtil {
        /**
         * Takes an Fluid Container Item and tries to fill it from the given tank.
         * If the player is in creative mode, the container will not be modified on success, and no additional items created.
         * If the input itemstack has a stacksize > 1 it will stow the filled container in the given inventory.
         * If the inventory does not accept it, it will be given to the player or dropped at the players feet.
         * If player is null in this case, the action will be aborted.
         */
        static tryEmptyContainerAndStow(container: $ItemStack_, fluidSource: $IFluidHandler, inventory: $IItemHandler, maxAmount: number, player: $Player, doFill: boolean): $FluidActionResult;
        /**
         * Fill a container from the given fluidSource.
         */
        static tryFillContainer(container: $ItemStack_, fluidSource: $IFluidHandler, maxAmount: number, player: $Player, doFill: boolean): $FluidActionResult;
        /**
         * Fill a container from the given fluidSource.
         */
        static tryEmptyContainer(container: $ItemStack_, fluidSource: $IFluidHandler, maxAmount: number, player: $Player, doFill: boolean): $FluidActionResult;
        /**
         * Fill a destination fluid handler from a source fluid handler with a max amount.
         * To specify a fluid to transfer instead of max amount, use `#tryFluidTransfer(IFluidHandler, IFluidHandler, FluidStack, boolean)`
         * To transfer as much as possible, use `Integer#MAX_VALUE` for maxAmount.
         */
        static tryFluidTransfer(fluidDestination: $IFluidHandler, fluidSource: $IFluidHandler, maxAmount: number, doTransfer: boolean): $FluidStack;
        /**
         * Fill a destination fluid handler from a source fluid handler using a specific fluid.
         * To specify a max amount to transfer instead of specific fluid, use `#tryFluidTransfer(IFluidHandler, IFluidHandler, int, boolean)`
         * To transfer as much as possible, use `Integer#MAX_VALUE` for resource.amount.
         */
        static tryFluidTransfer(fluidDestination: $IFluidHandler, fluidSource: $IFluidHandler, resource: $FluidStack_, doTransfer: boolean): $FluidStack;
        /**
         * ItemStack version of `#tryPlaceFluid(Player, Level, InteractionHand, BlockPos, IFluidHandler, FluidStack)`.
         * Use the returned `FluidActionResult` to update the container ItemStack.
         */
        static tryPlaceFluid(player: $Player, level: $Level_, hand: $InteractionHand_, pos: $BlockPos_, container: $ItemStack_, resource: $FluidStack_): $FluidActionResult;
        /**
         * Tries to place a fluid resource into the level as a block and drains the fluidSource.
         * Makes a fluid emptying or vaporization sound when successful.
         * Honors the amount of fluid contained by the used container.
         * Checks if water-like fluids should vaporize like in the nether.
         * 
         * Modeled after `BucketItem#emptyContents(Player, Level, BlockPos, BlockHitResult)`
         */
        static tryPlaceFluid(player: $Player, level: $Level_, hand: $InteractionHand_, pos: $BlockPos_, fluidSource: $IFluidHandler, resource: $FluidStack_): boolean;
        static getFilledBucket(fluidStack: $FluidStack_): $ItemStack;
        /**
         * Takes an Fluid Container Item and tries to fill it from the given tank.
         * If the player is in creative mode, the container will not be modified on success, and no additional items created.
         * If the input itemstack has a stacksize > 1 it will stow the filled container in the given inventory.
         * If the inventory does not accept it, it will be given to the player or dropped at the players feet.
         * If player is null in this case, the action will be aborted.
         */
        static tryFillContainerAndStow(container: $ItemStack_, fluidSource: $IFluidHandler, inventory: $IItemHandler, maxAmount: number, player: $Player, doFill: boolean): $FluidActionResult;
        /**
         * Attempts to pick up a fluid in the level and put it in an empty container item.
         */
        static tryPickUpFluid(emptyContainer: $ItemStack_, playerIn: $Player, level: $Level_, pos: $BlockPos_, side: $Direction_): $FluidActionResult;
        /**
         * Destroys a block when a fluid is placed in the same position.
         * Modeled after `BucketItem#emptyContents(Player, Level, BlockPos, BlockHitResult)`
         */
        static destroyBlockOnFluidPlacement(level: $Level_, pos: $BlockPos_): void;
        /**
         * Helper method to get an `IFluidHandlerItem` for an itemStack.
         * 
         * The itemStack passed in here WILL be modified, the `IFluidHandlerItem` acts on it directly.
         * Some `IFluidHandlerItem` will change the item entirely, always use `IFluidHandlerItem#getContainer()`
         * after using the fluid handler to get the resulting item back.
         * 
         * Note that the itemStack MUST have a stackSize of 1 if you want to fill or drain it.
         * You can't fill or drain multiple items at once, if you do then liquid is multiplied or destroyed.
         * 
         * Vanilla buckets will be converted to universal buckets if they are enabled.
         */
        static getFluidContained(itemStack: $ItemStack_): ($FluidStack) | undefined;
        /**
         * Used to handle the common case of a player holding a fluid item and right-clicking on a fluid handler block.
         * First it tries to fill the item from the block,
         * if that action fails then it tries to drain the item into the block.
         * Automatically updates the item in the player's hand and stashes any extra items created.
         */
        static interactWithFluidHandler(player: $Player, hand: $InteractionHand_, level: $Level_, pos: $BlockPos_, side: $Direction_): boolean;
        /**
         * Used to handle the common case of a player holding a fluid item and right-clicking on a fluid handler.
         * First it tries to fill the item from the handler,
         * if that action fails then it tries to drain the item into the handler.
         * Automatically updates the item in the player's hand and stashes any extra items created.
         */
        static interactWithFluidHandler(player: $Player, hand: $InteractionHand_, handler: $IFluidHandler): boolean;
        /**
         * Helper method to get an `IFluidHandlerItem` for an itemStack.
         * 
         * The itemStack passed in here WILL be modified, the `IFluidHandlerItem` acts on it directly.
         * Some `IFluidHandlerItem` will change the item entirely, always use `IFluidHandlerItem#getContainer()`
         * after using the fluid handler to get the resulting item back.
         * 
         * Note that the itemStack MUST have a stackSize of 1 if you want to fill or drain it.
         * You can't fill or drain multiple items at once, if you do then liquid is multiplied or destroyed.
         * 
         * Vanilla buckets will be converted to universal buckets if they are enabled.
         */
        static getFluidHandler(itemStack: $ItemStack_): ($IFluidHandlerItem) | undefined;
        /**
         * Helper method to get an IFluidHandler for at a block position.
         */
        static getFluidHandler(level: $Level_, blockPos: $BlockPos_, side: $Direction_): ($IFluidHandler) | undefined;
    }
    /**
     * An interface which tests whether a source fluid can interact with its
     * surroundings.
     */
    export class $FluidInteractionRegistry$HasFluidInteraction {
    }
    export interface $FluidInteractionRegistry$HasFluidInteraction {
        /**
         * Returns whether the interaction can occur.
         */
        test(level: $Level_, currentPos: $BlockPos_, relativePos: $BlockPos_, currentState: $FluidState): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FluidInteractionRegistry$HasFluidInteraction}.
     */
    export type $FluidInteractionRegistry$HasFluidInteraction_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockPos, arg3: $FluidState) => boolean);
    export class $FluidType$DripstoneDripInfo extends $Record {
        chance(): number;
        filledCauldron(): $Block;
        dripParticle(): $ParticleOptions;
        constructor(chance: number, dripParticle: $ParticleOptions_, filledCauldron: $Block_);
    }
    /**
     * Values that may be interpreted as {@link $FluidType$DripstoneDripInfo}.
     */
    export type $FluidType$DripstoneDripInfo_ = { chance?: number, dripParticle?: $ParticleOptions_, filledCauldron?: $Block_,  } | [chance?: number, dripParticle?: $ParticleOptions_, filledCauldron?: $Block_, ];
    /**
     * `ItemStack` equivalent for fluids.
     * The main difference is that a fluid stack is always required to have an amount, while an item stack defaults to 1.
     * Another difference is that the component prototype of a fluid stack is currently always empty, while an item stack gets its component prototype from the item.
     * 
     * Most methods in this class are adapted from `ItemStack`.
     */
    export class $FluidStack implements $MutableDataComponentHolder, $FluidStackKJS {
        /**
         * Tries to parse a fluid stack, defaulting to `#EMPTY` on parsing failure.
         */
        static parseOptional(lookupProvider: $HolderLookup$Provider, tag: $CompoundTag_): $FluidStack;
        /**
         * Creates a copy of this stack with `0` amount.
         */
        copyAndClear(): $FluidStack;
        /**
         * Returns the fluid in this stack, or `Fluids#EMPTY` if this stack is empty.
         */
        getFluid(): $Fluid;
        /**
         * Sets the amount of this stack.
         */
        setAmount(amount: number): void;
        /**
         * Returns the hover name of this stack.
         */
        getHoverName(): $Component;
        isComponentsPatchEmpty(): boolean;
        /**
         * Saves this stack to a new tag.
         */
        saveOptional(lookupProvider: $HolderLookup$Provider): $Tag;
        getComponentsPatch(): $DataComponentPatch;
        /**
         * @deprecated
         * Returns the description id of this stack.
         */
        getTranslationKey(): string;
        /**
         * A standard codec for fluid stacks that always deserializes with a fixed amount,
         * and does not accept empty stacks.
         * 
         * Fluid equivalent of `ItemStack#SINGLE_ITEM_CODEC`.
         */
        static fixedAmountCodec(amount: number): $Codec<$FluidStack>;
        /**
         * Splits off a stack of the given amount of this stack and reduces this stack by the amount.
         */
        copyWithAmount(amount: number): $FluidStack;
        getFluidHolder(): $Holder<$Fluid>;
        /**
         * Checks if the two fluid stacks are equal. This checks the fluid, amount, and components.
         */
        static isSameFluid(first: $FluidStack_, second: $FluidStack_): boolean;
        static lenientOtionalFieldOf(fieldName: string): $MapCodec<$FluidStack>;
        /**
         * Hashes the fluid and components of this stack, ignoring the amount.
         */
        static hashFluidAndComponents(stack: $FluidStack_): number;
        /**
         * @deprecated
         * Determines if the fluid and the components are equal. This does not check amounts.
         */
        isFluidEqual(other: $FluidStack_): boolean;
        /**
         * @deprecated
         * Determines if the FluidIDs and components are equal compared to a container item stack. This does not check amounts.
         */
        isFluidEqual(other: $ItemStack_): boolean;
        /**
         * @deprecated
         * Checks if the two fluid stacks are equal. This checks the fluid, amount, and components.
         */
        static areFluidStackTagsEqual(first: $FluidStack_, second: $FluidStack_): boolean;
        /**
         * @deprecated
         * Determines if the fluid and the components are equal. This does not check amounts.
         */
        containsFluid(other: $FluidStack_): boolean;
        /**
         * @deprecated
         * Determines if the fluid and the components are equal. This does not check amounts.
         */
        isFluidStackIdentical(other: $FluidStack_): boolean;
        /**
         * Checks if the two fluid stacks are equal. This checks the fluid, amount, and components.
         */
        static isSameFluidSameComponents(first: $FluidStack_, second: $FluidStack_): boolean;
        isEmpty(): boolean;
        /**
         * Checks if the two fluid stacks are equal. This checks the fluid, amount, and components.
         */
        static matches(first: $FluidStack_, second: $FluidStack_): boolean;
        /**
         * Splits off a stack of the given amount of this stack and reduces this stack by the amount.
         */
        split(amount: number): $FluidStack;
        /**
         * Saves this stack to a tag, directly writing the keys into the passed tag.
         */
        save(lookupProvider: $HolderLookup$Provider, prefix: $Tag_): $Tag;
        /**
         * Saves this stack to a new tag.
         */
        save(lookupProvider: $HolderLookup$Provider): $Tag;
        /**
         * Tries to parse a fluid stack. Empty stacks cannot be parsed with this method.
         */
        static parse(lookupProvider: $HolderLookup$Provider, tag: $Tag_): ($FluidStack) | undefined;
        /**
         * Creates a copy of this stack with `0` amount.
         */
        copy(): $FluidStack;
        is(holder: $Holder_<$Fluid>): boolean;
        is(tag: $TagKey_<$Fluid>): boolean;
        is(fluid: $Fluid_): boolean;
        is(holderSet: $HolderSet_<$Fluid>): boolean;
        /**
         * Check if the fluid type of this stack is equal to the given fluid type.
         */
        is(fluidType: $FluidType_): boolean;
        is(holderPredicate: $Predicate_<$Holder<$Fluid>>): boolean;
        /**
         * Sets the amount of this stack.
         */
        grow(amount: number): void;
        /**
         * @deprecated
         * Returns the hover name of this stack.
         */
        getDisplayName(): $Component;
        /**
         * Sets the amount of this stack.
         */
        limitSize(amount: number): void;
        getComponents(): $PatchedDataComponentMap;
        /**
         * Returns the description id of this stack.
         */
        getDescriptionId(): string;
        /**
         * Sets the amount of this stack.
         */
        shrink(amount: number): void;
        /**
         * Returns the amount of this stack.
         */
        getAmount(): number;
        /**
         * Returns the fluid type of this stack.
         */
        getFluidType(): $FluidType;
        getTags(): $Stream<$TagKey<$Fluid>>;
        update<T>(arg0: $DataComponentType_<T>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T, U>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        update<T, U>(arg0: $DataComponentType_<T>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $Supplier_<$DataComponentType<never>>[]): void;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $DataComponentType_<never>[]): void;
        /**
         * Returns the fluid in this stack, or `Fluids#EMPTY` if this stack is empty.
         */
        kjs$getFluid(): $Fluid;
        /**
         * Returns the amount of this stack.
         */
        kjs$getAmount(): number;
        kjs$copy(amount: number): $FluidLike;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        /**
         * Determines if the fluid and the components are equal. This does not check amounts.
         */
        kjs$equalsIgnoringCount(other: $FluidStack_): boolean;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        kjs$getRegistry(): $Registry<$Fluid>;
        kjs$asHolder(): $Holder<$Fluid>;
        kjs$getIdLocation(): $ResourceLocation;
        /**
         * Returns the description id of this stack.
         */
        kjs$getMod(): string;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        /**
         * Creates a copy of this stack with `0` amount.
         */
        kjs$self(): $FluidStack;
        kjs$getKey(): $ResourceKey<$Fluid>;
        getCodec(): $Codec<never>;
        kjs$isEmpty(): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        /**
         * Returns the description id of this stack.
         */
        kjs$getId(): string;
        has(component: $DataComponentType_<never>): boolean;
        getComponentHolder(): $MutableDataComponentHolder;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        getComponentMap(): $DataComponentMap;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        getTagKeys(): $List<$TagKey<$Fluid>>;
        getTags(): $List<$ResourceLocation>;
        hasTag(tag: $ResourceLocation_): boolean;
        addToTooltip<T extends $TooltipProvider>(type: $DataComponentType_<T>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        addToTooltip<T extends $TooltipProvider>(type: $Supplier_<$DataComponentType<T>>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        has(type: $Supplier_<$DataComponentType<never>>): boolean;
        resetComponents(): $ComponentFunctions;
        remove(type: $DataComponentType_<never>): $ComponentFunctions;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        getComponentString(): string;
        setCustomData(tag: $CompoundTag_): void;
        getCustomData(): $CompoundTag;
        setRarity(rarity: $Rarity_): void;
        setCustomName(name: $Component_): void;
        /**
         * Returns the hover name of this stack.
         */
        getCustomName(): $Component;
        setLore(lines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        /**
         * Sets the amount of this stack.
         */
        setCustomModelData(amount: number): void;
        setAdditionalTooltipHidden(): void;
        setTooltipHidden(): void;
        setGlintOverride(override: boolean): void;
        setDyedColor(color: $KubeColor_): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setPotionContents(contents: $PotionContents_): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        setEntityData(tag: $CompoundTag_): void;
        setProfile(name: string, uuid: $UUID_): void;
        setProfile(profile: $GameProfile): void;
        setBaseColor(color: $DyeColor_): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        setLockCode(lock: string): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        static CODEC: $Codec<$FluidStack>;
        static FLUID_NON_EMPTY_CODEC: $Codec<$Holder<$Fluid>>;
        static OPTIONAL_CODEC: $Codec<$FluidStack>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidStack>;
        static EMPTY: $FluidStack;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidStack>;
        constructor(fluid: $Holder_<$Fluid>, amount: number, patch: $DataComponentPatch_);
        constructor(fluid: $Fluid_, amount: number);
        constructor(fluid: $Holder_<$Fluid>, amount: number);
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get fluid(): $Fluid;
        get hoverName(): $Component;
        get componentsPatchEmpty(): boolean;
        get componentsPatch(): $DataComponentPatch;
        get translationKey(): string;
        get fluidHolder(): $Holder<$Fluid>;
        get empty(): boolean;
        get displayName(): $Component;
        get components(): $PatchedDataComponentMap;
        get descriptionId(): string;
        get fluidType(): $FluidType;
        get codec(): $Codec<never>;
        get componentHolder(): $MutableDataComponentHolder;
        get componentMap(): $DataComponentMap;
        get tagKeys(): $List<$TagKey<$Fluid>>;
        set unit(value: $DataComponentType_<$Unit_>);
        get componentString(): string;
        set rarity(value: $Rarity_);
        set customModelData(value: number);
        set glintOverride(value: boolean);
        set dyedColor(value: $KubeColor_);
        set dyedColorWithTooltip(value: $KubeColor_);
        set potionContents(value: $PotionContents_);
        set potionId(value: $Holder_<$Potion>);
        set entityData(value: $CompoundTag_);
        set baseColor(value: $DyeColor_);
        set blockStateProperties(value: $Map_<string, string>);
        set lockCode(value: string);
    }
    /**
     * Values that may be interpreted as {@link $FluidStack}.
     */
    export type $FluidStack_ = $Fluid_ | "-" | { fluid: RegistryTypes.Fluid, amount?: number,  };
    /**
     * Base implementation of a `FlowingFluid` for mods to use.
     */
    export class $BaseFlowingFluid extends $FlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
    }
    /**
     * This interface represents a Fluid Tank. IT IS NOT REQUIRED but is provided for convenience.
     * You are free to handle Fluids in any way that you wish - this is simply an easy default way.
     * DO NOT ASSUME that these objects are used internally in all cases.
     */
    export class $IFluidTank {
    }
    export interface $IFluidTank {
        getFluid(): $FluidStack;
        getFluidAmount(): number;
        isFluidValid(stack: $FluidStack_): boolean;
        getCapacity(): number;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        get fluid(): $FluidStack;
        get fluidAmount(): number;
        get capacity(): number;
    }
    /**
     * A definition of common attributes, properties, and methods that is applied
     * to a `Fluid`. This is used to link a flowing and source fluid together
     * without relying on tags. Most accessors do not correlate to in-game features;
     * they are provided for mods to take advantage of.
     * 
     * Accessors are typically implemented in a method call chain. As such, it
     * can provide a general implementation while more specific implementations
     * can be implemented by overriding methods further in the call chain (on fluids,
     * entities, etc.).
     */
    export class $FluidType {
        getDripInfo(): $FluidType$DripstoneDripInfo;
        /**
         * Returns the rarity of the fluid.
         * 
         * Note: If not specified, the rarity of the fluid is `Rarity#COMMON`.
         */
        getRarity(stack: $FluidStack_): $Rarity;
        /**
         * Returns the rarity of the fluid.
         * 
         * Note: If not specified, the rarity of the fluid is `Rarity#COMMON`.
         */
        getRarity(): $Rarity;
        /**
         * Returns the associated `BlockState` for a `FluidState`.
         */
        getBlockForFluidState(getter: $BlockAndTintGetter, pos: $BlockPos_, state: $FluidState): $BlockState;
        /**
         * Returns the `FluidState` when a `FluidStack` is trying to
         * place it.
         */
        getStateForPlacement(getter: $BlockAndTintGetter, pos: $BlockPos_, stack: $FluidStack_): $FluidState;
        /**
         * Returns whether the fluid can be placed in the level.
         */
        canBePlacedInLevel(getter: $BlockAndTintGetter, pos: $BlockPos_, state: $FluidState): boolean;
        /**
         * Returns whether the fluid can be placed in the level.
         */
        canBePlacedInLevel(getter: $BlockAndTintGetter, pos: $BlockPos_, stack: $FluidStack_): boolean;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(state: $FluidState, reader: $LevelReader, pos: $BlockPos_): boolean;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(stack: $FluidStack_): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(boat: $Boat): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(state: $FluidState, boat: $Boat): boolean;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getLightLevel(stack: $FluidStack_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getLightLevel(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         * 
         * Implementation: This is used by the bucket model to determine whether the fluid
         * should render full-bright when `applyFluidLuminosity` is `true`.
         */
        getLightLevel(): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         * 
         * Implementation: This is used by the bucket model to determine whether the fluid
         * should render full-bright when `applyFluidLuminosity` is `true`.
         */
        getDensity(): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getDensity(stack: $FluidStack_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getDensity(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getTemperature(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getTemperature(stack: $FluidStack_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         * 
         * Implementation: This is used by the bucket model to determine whether the fluid
         * should render full-bright when `applyFluidLuminosity` is `true`.
         */
        getTemperature(): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getViscosity(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         * 
         * Implementation: This is used by the bucket model to determine whether the fluid
         * should render full-bright when `applyFluidLuminosity` is `true`.
         */
        getViscosity(): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getViscosity(stack: $FluidStack_): number;
        /**
         * Performs what to do when an item is in a fluid.
         */
        setItemMovement(entity: $ItemEntity): void;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Returns whether a fluid above a pointed dripstone block can successfully fill a cauldron below.
         * 
         * If this will return `true`, this method will also do 3 things:
         * 
         * - Set the cauldron below to the proper filled state as defined by the FluidType's `DripstoneDripInfo`
         * - Send the BLOCK_CHANGE `GameEvent`
         * - Play a sound as defined by the FluidType's `DripstoneDripInfo`
         */
        handleCauldronDrip(fluid: $Fluid_, level: $Level_, cauldronPos: $BlockPos_): boolean;
        /**
         * Returns whether the fluid type represents air.
         */
        isLighterThanAir(): boolean;
        /**
         * Determines if this fluid should be vaporized when placed into a level.
         * 
         * Note: Fluids that can turn lava into obsidian should vaporize within
         * the nether to preserve the intentions of vanilla.
         */
        isVaporizedOnPlacement(level: $Level_, pos: $BlockPos_, stack: $FluidStack_): boolean;
        /**
         * Performs an action when a fluid can be vaporized when placed into a level.
         * 
         * Note: The fluid will already have been drained from the stack.
         */
        onVaporize(player: $Player, level: $Level_, pos: $BlockPos_, stack: $FluidStack_): void;
        /**
         * @deprecated
         */
        initializeClient(consumer: $Consumer_<$IClientFluidTypeExtensions>): void;
        /**
         * Returns the component representing the name of the fluid type.
         */
        getDescription(stack: $FluidStack_): $Component;
        /**
         * Returns the component representing the name of the fluid type.
         */
        getDescription(): $Component;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(state: $FluidState, entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns the bucket containing the fluid.
         */
        getBucket(stack: $FluidStack_): $ItemStack;
        /**
         * Returns whether the fluid type represents air.
         */
        isAir(): boolean;
        /**
         * Returns the identifier representing the name of the fluid.
         * If no identifier was specified, then the identifier will be defaulted
         * to `fluid_type..`.
         */
        getDescriptionId(stack: $FluidStack_): string;
        /**
         * Returns the identifier representing the name of the fluid type.
         * If no identifier was specified, then the identifier will be defaulted
         * to `fluid_type..`.
         */
        getDescriptionId(): string;
        /**
         * Returns whether the entity can drown in the fluid.
         */
        canDrownIn(entity: $LivingEntity): boolean;
        /**
         * Returns whether the entity can ride in this vehicle under the fluid.
         */
        canRideVehicleUnder(vehicle: $Entity, rider: $Entity): boolean;
        /**
         * Returns how much the velocity of the fluid should be scaled by
         * when applied to an entity.
         */
        motionScale(entity: $Entity): number;
        /**
         * Returns whether the fluid can push an entity.
         */
        canPushEntity(entity: $Entity): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canSwim(entity: $Entity): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canExtinguish(entity: $Entity): boolean;
        /**
         * Returns whether the block can be extinguished by this fluid.
         */
        canExtinguish(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns how much the fluid should scale the damage done to a falling
         * entity when hitting the ground per tick.
         * 
         * Implementation: If the entity is in many fluids, the smallest modifier
         * is applied.
         */
        getFallDistanceModifier(entity: $Entity): number;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        /**
         * Returns whether the fluid can create a source.
         */
        canHydrate(stack: $FluidStack_): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canHydrate(entity: $Entity): boolean;
        /**
         * Returns a sound to play when a certain action is performed. If no
         * sound is present, then the sound will be `null`.
         */
        getSound(action: $SoundAction): $SoundEvent;
        /**
         * Returns a sound to play when a certain action is performed at a
         * position. If no sound is present, then the sound will be `null`.
         */
        getSound(player: $Player, getter: $BlockGetter, pos: $BlockPos_, action: $SoundAction): $SoundEvent;
        /**
         * Returns a sound to play when a certain action is performed by the
         * entity in the fluid. If no sound is present, then the sound will be
         * `null`.
         */
        getSound(entity: $Entity, action: $SoundAction): $SoundEvent;
        /**
         * Returns a sound to play when a certain action is performed. If no
         * sound is present, then the sound will be `null`.
         */
        getSound(stack: $FluidStack_, action: $SoundAction): $SoundEvent;
        /**
         * Returns whether the fluid type represents air.
         */
        isVanilla(): boolean;
        static SIZE: $Lazy<number>;
        static BUCKET_VOLUME: number;
        constructor(arg0: $FluidType$Properties);
        get dripInfo(): $FluidType$DripstoneDripInfo;
        set itemMovement(value: $ItemEntity);
        get lighterThanAir(): boolean;
        get air(): boolean;
        get vanilla(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FluidType}.
     */
    export type $FluidType_ = RegistryTypes.NeoforgeFluidType;
    export class $BaseFlowingFluid$Source extends $BaseFlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor(arg0: $BaseFlowingFluid$Properties);
    }
    /**
     * Fluid content information for cauldrons.
     * 
     * Empty, water and lava cauldrons are registered by default,
     * and additional cauldrons must be registered with `RegisterCauldronFluidContentEvent`.
     * Contents can be queried with `#getForBlock` and `#getForFluid`.
     * 
     * The `CauldronFluidContent` itself defines:
     * 
     * - The block of the cauldron.
     * - The fluid that can be accepted by the cauldron. NBT is discarded when entering the cauldron.
     * - Which fluid amounts can be stored in the cauldron, and how they map to the level property of the cauldron.
     * If `#levelProperty` is `null`, then `maxLevel = 1`, and there is only one level.
     * Otherwise, the levels are all the integer values between `1` and `#maxLevel` (included).
     * - `#totalAmount` defines how much fluid (in millibuckets) there is in one level of the cauldron.
     */
    export class $CauldronFluidContent {
        /**
         * Get the cauldron fluid content for a cauldron block, or `null` if none was registered (yet).
         */
        static getForBlock(block: $Block_): $CauldronFluidContent;
        /**
         * Get the cauldron fluid content for a fluid, or `null` if no cauldron was registered for that fluid (yet).
         */
        static getForFluid(fluid: $Fluid_): $CauldronFluidContent;
        static init(): void;
        /**
         * Return the current level of the cauldron given its block state, or 0 if it's an empty cauldron.
         */
        currentLevel(state: $BlockState_): number;
        static registerCapabilities(event: $RegisterCapabilitiesEvent): void;
        maxLevel: number;
        totalAmount: number;
        levelProperty: $IntegerProperty;
        block: $Block;
        fluid: $Fluid;
    }
    /**
     * Utility class for creating linked set for `FluidStack`
     * with specific hash strategy as `FluidStack` does not override `#hashCode()` and `#equals(Object)`.
     */
    export class $FluidStackLinkedSet {
        static createTypeAndComponentsSet(): $Set<$FluidStack>;
        static TYPE_AND_COMPONENTS: $Hash$Strategy<$FluidStack>;
        constructor();
    }
    /**
     * A registry which defines the interactions a source fluid can have with its
     * surroundings. Each possible flow direction is checked for all interactions with
     * the source.
     * 
     * Fluid interactions mimic the behavior of `LiquidBlock#shouldSpreadLiquid`.
     * As such, all directions, besides `Direction#DOWN` is tested and then replaced.
     * Any fluids which cause a change in the down interaction must be handled in
     * `FlowingFluid#spreadTo` and not by this interaction manager.
     */
    export class $FluidInteractionRegistry implements $FluidInteractionRegistryAccessor {
        static getInteractions$create_$md$5c91d2$0(): $Map<any, any>;
        /**
         * Performs all potential fluid interactions at a given position.
         * 
         * Note: Only the first interaction check that succeeds will occur.
         */
        static canInteract(level: $Level_, pos: $BlockPos_): boolean;
        static addInteraction(arg0: $FluidType_, arg1: $FluidInteractionRegistry$InteractionInformation_): void;
        constructor();
        static get interactions$create_$md$5c91d2$0(): $Map<any, any>;
    }
    export class $BaseFlowingFluid$Flowing extends $BaseFlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor(arg0: $BaseFlowingFluid$Properties);
    }
    /**
     * Fills or drains a fluid container item using a Dispenser.
     */
    export class $DispenseFluidContainer extends $DefaultDispenseItemBehavior {
        static getInstance(): $DispenseFluidContainer;
        execute(source: $BlockSource_, stack: $ItemStack_): $ItemStack;
        static get instance(): $DispenseFluidContainer;
    }
    /**
     * The properties of the fluid. The simple forms of each property can
     * be specified while more complex logic can be overridden in the `FluidType`.
     */
    export class $FluidType$Properties {
        canDrown(arg0: boolean): $FluidType$Properties;
        fallDistanceModifier(arg0: number): $FluidType$Properties;
        canConvertToSource(arg0: boolean): $FluidType$Properties;
        supportsBoating(arg0: boolean): $FluidType$Properties;
        pathType(arg0: $PathType_): $FluidType$Properties;
        adjacentPathType(arg0: $PathType_): $FluidType$Properties;
        lightLevel(arg0: number): $FluidType$Properties;
        density(arg0: number): $FluidType$Properties;
        viscosity(arg0: number): $FluidType$Properties;
        temperature(arg0: number): $FluidType$Properties;
        rarity(arg0: $Rarity_): $FluidType$Properties;
        descriptionId(arg0: string): $FluidType$Properties;
        static create(): $FluidType$Properties;
        sound(arg0: $SoundAction, arg1: $SoundEvent_): $FluidType$Properties;
        motionScale(arg0: number): $FluidType$Properties;
        canPushEntity(arg0: boolean): $FluidType$Properties;
        canSwim(arg0: boolean): $FluidType$Properties;
        canExtinguish(arg0: boolean): $FluidType$Properties;
        canHydrate(arg0: boolean): $FluidType$Properties;
        addDripstoneDripping(arg0: number, arg1: $ParticleOptions_, arg2: $Block_, arg3: $SoundEvent_): $FluidType$Properties;
    }
    export class $BaseFlowingFluid$Properties {
        tickRate(arg0: number): $BaseFlowingFluid$Properties;
        explosionResistance(arg0: number): $BaseFlowingFluid$Properties;
        levelDecreasePerBlock(arg0: number): $BaseFlowingFluid$Properties;
        slopeFindDistance(arg0: number): $BaseFlowingFluid$Properties;
        bucket(arg0: $Supplier_<$Item>): $BaseFlowingFluid$Properties;
        block(arg0: $Supplier_<$LiquidBlock>): $BaseFlowingFluid$Properties;
        constructor(fluidType: $Supplier_<$FluidType>, still: $Supplier_<$Fluid>, flowing: $Supplier_<$Fluid>);
    }
    /**
     * Holds the result of a fluid action from `FluidUtil`.
     * 
     * Failed actions will always have `#isSuccess()` == false and an empty ItemStack result. See `#FAILURE`.
     * 
     * Successful actions will always have `#isSuccess()` == true.
     * Successful actions may have an empty ItemStack result in some cases,
     * for example the action succeeded and the resulting item was consumed.
     */
    export class $FluidActionResult {
        getResult(): $ItemStack;
        isSuccess(): boolean;
        result: $ItemStack;
        success: boolean;
        static FAILURE: $FluidActionResult;
        constructor(result: $ItemStack_);
    }
}
