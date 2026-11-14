import { $Ingredient_, $Ingredient, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $EntityType_, $Entity$RemovalReason, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Tuple } from "@package/net/minecraft/util";
import { $Container } from "@package/net/minecraft/world";
import { $DynamicEnergyStorage } from "@package/rearth/oritech/api/energy/containers";
import { $SlotFilter_ } from "@package/dev/latvian/mods/kubejs/util";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $SoundKeyframeEvent } from "@package/software/bernie/geckolib/animation/keyframe/event";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $MachineAddonBlock } from "@package/rearth/oritech/block/blocks/addons";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GeoAnimatable, $GeoEntity } from "@package/software/bernie/geckolib/animatable";
import { $FluidStack } from "@package/dev/architectury/fluid";
import { $MachineCoreBlock } from "@package/rearth/oritech/block/blocks/processing";
import { $AttachFace_, $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $EntityBlock_, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $ArrayList, $List, $List_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $AnimationController$SoundKeyframeHandler, $AnimatableManager$ControllerRegistrar_ } from "@package/software/bernie/geckolib/animation";
import { $Supplier_, $Consumer_, $Predicate_, $Predicate } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $GlobalPos, $BlockPos_, $RegistryAccess, $Vec3i, $HolderLookup$Provider, $Direction_, $NonNullList, $Direction } from "@package/net/minecraft/core";
import { $SimpleInventoryStorage } from "@package/rearth/oritech/api/item/containers";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $AddonBlockEntity } from "@package/rearth/oritech/block/entity/addons";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $EnergyApi$EnergyStorage } from "@package/rearth/oritech/api/energy";
import { $LootItemConditionalFunction$Builder, $LootItemConditionalFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $Attachment } from "@package/rearth/oritech/api/attachment";
import { $FluidApi$SingleSlotStorage } from "@package/rearth/oritech/api/fluid";
import { $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as registry from "@package/rearth/oritech/util/registry";
export * as neoforge from "@package/rearth/oritech/util/neoforge";

declare module "@package/rearth/oritech/util" {
    export class $SizedIngredient extends $Record implements $Predicate<$ItemStack> {
        ingredient(): $Ingredient;
        test(arg0: $ItemStack_): boolean;
        count(): number;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $MapCodec<$SizedIngredient>;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedIngredient>;
        constructor(count: number, ingredient: $Ingredient_);
    }
    /**
     * Values that may be interpreted as {@link $SizedIngredient}.
     */
    export type $SizedIngredient_ = { count?: number, ingredient?: $Ingredient_,  } | [count?: number, ingredient?: $Ingredient_, ];
    export class $ScreenProvider$GuiSlot extends $Record {
        index(): number;
        x(): number;
        y(): number;
        output(): boolean;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(index: number, x: number, y: number, output: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ScreenProvider$GuiSlot}.
     */
    export type $ScreenProvider$GuiSlot_ = { index?: number, output?: boolean, x?: number, y?: number,  } | [index?: number, output?: boolean, x?: number, y?: number, ];
    export class $ColorHelper {
        static makeOpaque(arg0: number): number;
        static argb(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static argb(arg0: number, arg1: number, arg2: number): number;
        static WHITE: number;
    }
    export class $MachineAddonProvider {
    }
    export interface $MachineAddonProvider {
        getControllerPos(): $BlockPos;
        setControllerPos(arg0: $BlockPos_): void;
    }
    export class $ScreenProvider {
    }
    export interface $ScreenProvider {
        getProgress(): number;
        getExtraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        getGuiSlots(): $List<$ScreenProvider$GuiSlot>;
        getDisplayedEnergyUsage(): number;
        showProgress(): boolean;
        getInventoryInputMode(): $InventoryInputMode;
        inputOptionsEnabled(): boolean;
        getDisplayedInventory(): $Container;
        getDisplayedEnergyTransfer(): number;
        getScreenHandlerType(): $MenuType<never>;
        getBlockFacingProperty(): $Property<$Direction>;
        hasRedstoneControlAvailable(): boolean;
        receivedRedstoneSignal(): number;
        currentRedstoneEffect(): string;
        getInteractableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        showEnergy(): boolean;
        showArmor(): boolean;
        showExpansionPanel(): boolean;
        showEnergyUsage(): boolean;
        showEnergyTransfer(): boolean;
        getEnergyConfiguration(): $ScreenProvider$BarConfiguration;
        getFluidConfiguration(): $ScreenProvider$BarConfiguration;
        getWikiLink(): (string) | undefined;
        getIndicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        get progress(): number;
        get extraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        get guiSlots(): $List<$ScreenProvider$GuiSlot>;
        get displayedEnergyUsage(): number;
        get inventoryInputMode(): $InventoryInputMode;
        get displayedInventory(): $Container;
        get displayedEnergyTransfer(): number;
        get screenHandlerType(): $MenuType<never>;
        get blockFacingProperty(): $Property<$Direction>;
        get interactableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        get energyConfiguration(): $ScreenProvider$BarConfiguration;
        get fluidConfiguration(): $ScreenProvider$BarConfiguration;
        get wikiLink(): (string) | undefined;
        get indicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
    }
    export class $ScreenProvider$BarConfiguration extends $Record {
        x(): number;
        y(): number;
        width(): number;
        height(): number;
        constructor(x: number, y: number, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $ScreenProvider$BarConfiguration}.
     */
    export type $ScreenProvider$BarConfiguration_ = { y?: number, x?: number, height?: number, width?: number,  } | [y?: number, x?: number, height?: number, width?: number, ];
    export class $ComparatorOutputProvider {
        static getItemStackComparatorOutput(arg0: $ItemStack_): number;
        static getFluidStorageComparatorOutput(arg0: $FluidApi$SingleSlotStorage): number;
    }
    export interface $ComparatorOutputProvider {
        getComparatorOutput(): number;
        get comparatorOutput(): number;
    }
    /**
     * Values that may be interpreted as {@link $ComparatorOutputProvider}.
     */
    export type $ComparatorOutputProvider_ = (() => number);
    export class $ColorableMachine$ColorVariant extends $Enum<$ColorableMachine$ColorVariant> {
        static values(): $ColorableMachine$ColorVariant[];
        static valueOf(arg0: string): $ColorableMachine$ColorVariant;
        static WHITE: $ColorableMachine$ColorVariant;
        static NETHERITE: $ColorableMachine$ColorVariant;
        static REDSTONE: $ColorableMachine$ColorVariant;
        static DIAMOND: $ColorableMachine$ColorVariant;
        static SCULK: $ColorableMachine$ColorVariant;
        static FLUXITE: $ColorableMachine$ColorVariant;
        static INDUSTRIAL: $ColorableMachine$ColorVariant;
        static ORANGE: $ColorableMachine$ColorVariant;
        static CAMO: $ColorableMachine$ColorVariant;
    }
    /**
     * Values that may be interpreted as {@link $ColorableMachine$ColorVariant}.
     */
    export type $ColorableMachine$ColorVariant_ = "orange" | "diamond" | "camo" | "fluxite" | "white" | "industrial" | "netherite" | "redstone" | "sculk";
    export class $ServerZiplineHandler {
        static registerAttachments(): void;
        static onPlayerTick(arg0: $Player): void;
        static onZipLineTickUseEvent(arg0: $ServerZiplineHandler$ZiplinePlayerUsePacket_, arg1: $Player, arg2: $RegistryAccess): void;
        static ZIPLINING_STATE: $Attachment<boolean>;
        constructor();
    }
    export class $InventorySlotAssignment extends $Record {
        inputToRealSlot(arg0: number): number;
        outputToRealSlot(arg0: number): number;
        isInput(arg0: number): boolean;
        outputStart(): number;
        outputCount(): number;
        inputStart(): number;
        inputCount(): number;
        isOutput(arg0: number): boolean;
        constructor(inputStart: number, inputCount: number, outputStart: number, outputCount: number);
    }
    /**
     * Values that may be interpreted as {@link $InventorySlotAssignment}.
     */
    export type $InventorySlotAssignment_ = { outputStart?: number, inputStart?: number, outputCount?: number, inputCount?: number,  } | [outputStart?: number, inputStart?: number, outputCount?: number, inputCount?: number, ];
    export class $TooltipHelper {
        static getFormattedValueChangeTooltip(arg0: number): $Component;
        static getFormattedEnergyChangeTooltip(arg0: number, arg1: string): $Component;
        static getEnergyText(arg0: number): string;
        static addMachineTooltip(arg0: $List_<$Component_>, arg1: $Block_, arg2: $EntityBlock_): void;
        constructor();
    }
    export class $FluidIngredient extends $Record implements $Predicate<$FluidStack> {
        hasTag(): boolean;
        getFluid(): $Fluid;
        fluidContent(): $Either<$TagKey<$Fluid>, $ResourceLocation>;
        matchesFluid(arg0: $Fluid_): boolean;
        matchesFluid(arg0: $FluidStack): boolean;
        withSpecificAmount(arg0: number): $FluidIngredient;
        static ofStack(arg0: $FluidStack): $FluidIngredient;
        getFluidStacks(): $List<$FluidStack>;
        withAmount(arg0: number): $FluidIngredient;
        withAmount(arg0: number): $FluidIngredient;
        withContent(arg0: $TagKey_<$Fluid>): $FluidIngredient;
        withContent(arg0: $ResourceLocation_): $FluidIngredient;
        withContent(arg0: $Fluid_): $FluidIngredient;
        withContent(arg0: $ResourceKey_<$Fluid>): $FluidIngredient;
        name(): $Component;
        test(arg0: $FluidStack): boolean;
        isEmpty(): boolean;
        amount(): number;
        getTag(): $TagKey<$Fluid>;
        or(arg0: $Predicate_<$FluidStack>): $Predicate<$FluidStack>;
        negate(): $Predicate<$FluidStack>;
        and(arg0: $Predicate_<$FluidStack>): $Predicate<$FluidStack>;
        static FLUID_TAG_KEY_CODEC: $StreamCodec<$ByteBuf, $TagKey<$Fluid>>;
        static FLUID_CONTENT_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Either<$TagKey<$Fluid>, $ResourceLocation>>;
        static CODEC: $Codec<$FluidIngredient>;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static EMPTY: $FluidIngredient;
        constructor(fluidContent: $Either<$TagKey_<$Fluid>, $ResourceLocation_>, amount: number);
        constructor();
        get fluid(): $Fluid;
        get fluidStacks(): $List<$FluidStack>;
        get empty(): boolean;
        get tag(): $TagKey<$Fluid>;
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredient}.
     */
    export type $FluidIngredient_ = { amount?: number, fluidContent?: $Either<$TagKey_<$Fluid>, $ResourceLocation_>,  } | [amount?: number, fluidContent?: $Either<$TagKey_<$Fluid>, $ResourceLocation_>, ];
    export class $FakePlayerMarker {
    }
    export interface $FakePlayerMarker {
    }
    export class $MachineAddonController$AddonBlock extends $Record {
        addonEntity(): $AddonBlockEntity;
        addonBlock(): $MachineAddonBlock;
        state(): $BlockState;
        pos(): $BlockPos;
        constructor(addonBlock: $MachineAddonBlock, state: $BlockState_, pos: $BlockPos_, addonEntity: $AddonBlockEntity);
    }
    /**
     * Values that may be interpreted as {@link $MachineAddonController$AddonBlock}.
     */
    export type $MachineAddonController$AddonBlock_ = { state?: $BlockState_, addonBlock?: $MachineAddonBlock, pos?: $BlockPos_, addonEntity?: $AddonBlockEntity,  } | [state?: $BlockState_, addonBlock?: $MachineAddonBlock, pos?: $BlockPos_, addonEntity?: $AddonBlockEntity, ];
    export class $InventoryInputMode extends $Enum<$InventoryInputMode> {
        static values(): $InventoryInputMode[];
        static valueOf(arg0: string): $InventoryInputMode;
        static FILL_LEFT_TO_RIGHT: $InventoryInputMode;
        static FILL_EVENLY: $InventoryInputMode;
        static SIDED: $InventoryInputMode;
    }
    /**
     * Values that may be interpreted as {@link $InventoryInputMode}.
     */
    export type $InventoryInputMode_ = "fill_left_to_right" | "fill_evenly" | "sided";
    export class $NbtBlockLootFunction extends $LootItemConditionalFunction {
        run(arg0: $ItemStack_, arg1: $LootContext): $ItemStack;
        static builder(): $LootItemConditionalFunction$Builder<never>;
        static CODEC: $MapCodec<$NbtBlockLootFunction>;
        static NAME: string;
        constructor(arg0: $List_<$LootItemCondition>);
    }
    export class $ColorableMachine {
    }
    export interface $ColorableMachine {
        addColorToNbt(arg0: $CompoundTag_): void;
        loadColorFromNbt(arg0: $CompoundTag_): void;
        getCurrentColor(): $ColorableMachine$ColorVariant;
        assignColor(arg0: $ColorableMachine$ColorVariant_): void;
        supportRecoloring(): boolean;
        getDefaultColor(): $ColorableMachine$ColorVariant;
        get currentColor(): $ColorableMachine$ColorVariant;
        get defaultColor(): $ColorableMachine$ColorVariant;
    }
    export class $MultiblockMachineController$MultiBlockElement extends $Record {
        coreBlock(): $MachineCoreBlock;
        state(): $BlockState;
        pos(): $BlockPos;
        constructor(state: $BlockState_, coreBlock: $MachineCoreBlock, pos: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $MultiblockMachineController$MultiBlockElement}.
     */
    export type $MultiblockMachineController$MultiBlockElement_ = { coreBlock?: $MachineCoreBlock, state?: $BlockState_, pos?: $BlockPos_,  } | [coreBlock?: $MachineCoreBlock, state?: $BlockState_, pos?: $BlockPos_, ];
    export class $Geometry {
        static rotateVoxelShape(arg0: $VoxelShape, arg1: $Direction_, arg2: $AttachFace_): $VoxelShape;
        static worldToOffsetPosition(arg0: $Direction_, arg1: $Vec3_, arg2: $Vec3_): $Vec3;
        static getUp(arg0: $Direction_): $Vec3i;
        static offsetToWorldPosition(arg0: $Direction_, arg1: $Vec3i, arg2: $Vec3i): $Vec3i;
        static rotatePosition(arg0: $Vec3_, arg1: $Direction_): $Vec3;
        static rotatePosition(arg0: $Vec3i, arg1: $Direction_): $Vec3i;
        static getBackward(arg0: $Direction_): $Vec3i;
        static fromVector(arg0: $Vec3i): $Direction;
        static getLeft(arg0: $Direction_): $Vec3i;
        static getRight(arg0: $Direction_): $Vec3i;
        static getForward(arg0: $Direction_): $Vec3i;
        static DEG_TO_RAD: number;
        constructor();
    }
    export class $ServerZiplineHandler$ZiplinePlayerUsePacket extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$ServerZiplineHandler$ZiplinePlayerUsePacket>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $ServerZiplineHandler$ZiplinePlayerUsePacket}.
     */
    export type $ServerZiplineHandler$ZiplinePlayerUsePacket_ = {  } | [];
    export class $MachineAddonController$BaseAddonData extends $Record {
        energyBonusCapacity(): number;
        energyBonusTransfer(): number;
        extraChambers(): number;
        maxBurstTicks(): number;
        speed(): number;
        efficiency(): number;
        static CODEC: $Codec<$MachineAddonController$BaseAddonData>;
        static DEFAULT_ADDON_DATA: $MachineAddonController$BaseAddonData;
        constructor(speed: number, efficiency: number, energyBonusCapacity: number, energyBonusTransfer: number, extraChambers: number, maxBurstTicks: number);
    }
    /**
     * Values that may be interpreted as {@link $MachineAddonController$BaseAddonData}.
     */
    export type $MachineAddonController$BaseAddonData_ = { maxBurstTicks?: number, energyBonusTransfer?: number, extraChambers?: number, efficiency?: number, speed?: number, energyBonusCapacity?: number,  } | [maxBurstTicks?: number, energyBonusTransfer?: number, extraChambers?: number, efficiency?: number, speed?: number, energyBonusCapacity?: number, ];
    export class $FakeMachinePlayer {
        static create(arg0: $ServerLevel, arg1: $GameProfile, arg2: $SimpleInventoryStorage): $ServerPlayer;
        constructor();
    }
    export class $AutoPlayingSoundKeyframeHandler<A extends $GeoAnimatable> implements $AnimationController$SoundKeyframeHandler<A> {
        handle(arg0: $SoundKeyframeEvent<A>): void;
        constructor();
        constructor(arg0: $Supplier_<number>);
    }
    export class $PortalEntity extends $Entity implements $GeoEntity {
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        getTick(arg0: $Object): number;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        triggerAnim(arg0: string, arg1: string): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        animatableCacheOverride(): $AnimatableInstanceCache;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        target: $GlobalPos;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get boneResetTime(): number;
    }
    export class $StackContext {
        getValue(): $ItemStack;
        setValue(arg0: $ItemStack_): void;
        sync(): void;
        constructor(arg0: $ItemStack_, arg1: $Consumer_<$ItemStack>);
    }
    export class $Geometry$BlockDirection extends $Enum<$Geometry$BlockDirection> {
        static values(): $Geometry$BlockDirection[];
        static valueOf(arg0: string): $Geometry$BlockDirection;
        static BACKWARD: $Geometry$BlockDirection;
        static LEFT: $Geometry$BlockDirection;
        pos: $BlockPos;
        static RIGHT: $Geometry$BlockDirection;
        static FORWARD: $Geometry$BlockDirection;
    }
    /**
     * Values that may be interpreted as {@link $Geometry$BlockDirection}.
     */
    export type $Geometry$BlockDirection_ = "forward" | "backward" | "left" | "right";
    export class $SimpleCraftingInventory implements $RecipeInput {
        getItems(): $NonNullList<$ItemStack>;
        size(): number;
        getItem(arg0: number): $ItemStack;
        isEmpty(): boolean;
        findAll(): $List<$ItemStack>;
        findAll(filter: $SlotFilter_): $List<$ItemStack>;
        find(filter: $SlotFilter_, skip: number): $ItemStack;
        find(filter: $SlotFilter_): $ItemStack;
        self(): $RecipeInput;
        constructor(...arg0: $ItemStack_[]);
        get items(): $NonNullList<$ItemStack>;
        get empty(): boolean;
    }
    export class $ScreenProvider$ArrowConfiguration extends $Record {
        x(): number;
        empty(): $ResourceLocation;
        full(): $ResourceLocation;
        y(): number;
        width(): number;
        height(): number;
        horizontal(): boolean;
        constructor(empty: $ResourceLocation_, full: $ResourceLocation_, x: number, y: number, width: number, height: number, horizontal: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ScreenProvider$ArrowConfiguration}.
     */
    export type $ScreenProvider$ArrowConfiguration_ = { horizontal?: boolean, empty?: $ResourceLocation_, full?: $ResourceLocation_, y?: number, width?: number, x?: number, height?: number,  } | [horizontal?: boolean, empty?: $ResourceLocation_, full?: $ResourceLocation_, y?: number, width?: number, x?: number, height?: number, ];
    export class $MultiblockMachineController {
    }
    export interface $MultiblockMachineController {
        addMultiblockToNbt(arg0: $CompoundTag_): void;
        loadMultiblockNbtData(arg0: $CompoundTag_): void;
        getConnectedCores(): $ArrayList<$BlockPos>;
        getFacingForMultiblock(): $Direction;
        getPosForMultiblock(): $BlockPos;
        getWorldForMultiblock(): $Level;
        getCoreQuality(): number;
        setCoreQuality(arg0: number): void;
        getInventoryForMultiblock(): $ItemApi$InventoryStorage;
        getEnergyStorageForMultiblock(arg0: $Direction_): $EnergyApi$EnergyStorage;
        getCorePositions(): $List<$Vec3i>;
        triggerSetupAnimation(): void;
        getNextMissingCore(): $BlockPos;
        tryPlaceNextCore(arg0: $Player): boolean;
        initMultiblock(arg0: $BlockState_): boolean;
        onCoreBroken(arg0: $BlockPos_): void;
        onControllerBroken(): void;
        get connectedCores(): $ArrayList<$BlockPos>;
        get facingForMultiblock(): $Direction;
        get posForMultiblock(): $BlockPos;
        get worldForMultiblock(): $Level;
        get inventoryForMultiblock(): $ItemApi$InventoryStorage;
        get corePositions(): $List<$Vec3i>;
        get nextMissingCore(): $BlockPos;
    }
    export class $MachineAddonController {
    }
    export interface $MachineAddonController {
        gatherAddonStats(arg0: $List_<$MachineAddonController$AddonBlock_>): void;
        getAdditionalStatFromAddon(arg0: $MachineAddonController$AddonBlock_): void;
        writeAddonToNbt(arg0: $CompoundTag_): void;
        loadAddonNbtData(arg0: $CompoundTag_): void;
        updateEnergyContainer(): void;
        getDefaultCapacity(): number;
        getDefaultInsertRate(): number;
        getCoreQuality(): number;
        getConnectedAddons(): $List<$BlockPos>;
        getOpenAddonSlots(): $List<$BlockPos>;
        getFacingForAddon(): $Direction;
        getStorageForAddon(): $DynamicEnergyStorage;
        getInventoryForAddon(): $ItemApi$InventoryStorage;
        getScreenProvider(): $ScreenProvider;
        getAddonSlots(): $List<$Vec3i>;
        getBaseAddonData(): $MachineAddonController$BaseAddonData;
        setBaseAddonData(arg0: $MachineAddonController$BaseAddonData_): void;
        getPosForAddon(): $BlockPos;
        getWorldForAddon(): $Level;
        getAllAddons(arg0: $BlockPos_): $List<$MachineAddonController$AddonBlock>;
        writeAddons(arg0: $List_<$MachineAddonController$AddonBlock_>): void;
        initAddons(arg0: $BlockPos_): void;
        initAddons(): void;
        resetAddons(): void;
        get defaultCapacity(): number;
        get defaultInsertRate(): number;
        get coreQuality(): number;
        get connectedAddons(): $List<$BlockPos>;
        get openAddonSlots(): $List<$BlockPos>;
        get facingForAddon(): $Direction;
        get storageForAddon(): $DynamicEnergyStorage;
        get inventoryForAddon(): $ItemApi$InventoryStorage;
        get screenProvider(): $ScreenProvider;
        get addonSlots(): $List<$Vec3i>;
        get posForAddon(): $BlockPos;
        get worldForAddon(): $Level;
    }
    export class $TagUtils {
        static cItemTag(arg0: string): $TagKey<$Item>;
        static cBlockTag(arg0: string): $TagKey<$Block>;
        static oritechItemTag(arg0: string): $TagKey<$Item>;
        static oritechBlockTag(arg0: string): $TagKey<$Block>;
        static cFluidTag(arg0: string): $TagKey<$Fluid>;
        static getStorageBlockTag(arg0: string): $TagKey<$Item>;
        static getStorageBlockyTag(arg0: string): $TagKey<$Block>;
        static getIngotTag(arg0: string): $TagKey<$Item>;
        static getClumpTag(arg0: string): $TagKey<$Item>;
        static getDustTag(arg0: string): $TagKey<$Item>;
        static oritechFluidTag(arg0: string): $TagKey<$Fluid>;
        static fluidTag(arg0: string, arg1: string): $TagKey<$Fluid>;
        static itemTag(arg0: string, arg1: string): $TagKey<$Item>;
        static C_TAG_NAMESPACE: string;
        constructor();
    }
}
