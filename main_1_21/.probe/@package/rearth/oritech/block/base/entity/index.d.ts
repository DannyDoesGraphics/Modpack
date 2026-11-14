import { $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $List, $List_, $ArrayList } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $AnimationState, $AnimatableManager$ControllerRegistrar_, $RawAnimation, $PlayState } from "@package/software/bernie/geckolib/animation";
import { $Tuple } from "@package/net/minecraft/util";
import { $Container } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $RegistryAccess, $NonNullList, $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $DynamicStatisticEnergyStorage$EnergyStatistics, $DynamicEnergyStorage, $DynamicStatisticEnergyStorage } from "@package/rearth/oritech/api/energy/containers";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $OritechRecipeType, $OritechRecipe } from "@package/rearth/oritech/init/recipes";
import { $InOutInventoryStorage, $SimpleInventoryStorage } from "@package/rearth/oritech/api/item/containers";
import { $ItemApi$BlockProvider, $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Record, $Runnable_, $Object } from "@package/java/lang";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $RedstoneAddonBlockEntity$RedstoneControllable } from "@package/rearth/oritech/block/entity/addons";
import { $MachineAddonController$AddonBlock, $MultiblockMachineController, $ScreenProvider$ArrowConfiguration, $MachineAddonController$AddonBlock_, $InventorySlotAssignment_, $MachineAddonController$BaseAddonData, $InventorySlotAssignment, $ScreenProvider, $ColorableMachine$ColorVariant, $ScreenProvider$GuiSlot, $ColorableMachine$ColorVariant_, $MachineAddonController$BaseAddonData_, $MachineAddonController, $ScreenProvider$BarConfiguration, $InventoryInputMode, $ColorableMachine } from "@package/rearth/oritech/util";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $SimpleInOutFluidStorage, $SimpleFluidStorage } from "@package/rearth/oritech/api/fluid/containers";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$EnergyStorage, $EnergyApi$BlockProvider } from "@package/rearth/oritech/api/energy";
import { $GeoBlockEntity } from "@package/software/bernie/geckolib/animatable";
import { $FluidApi$BlockProvider, $FluidApi$FluidStorage, $FluidApi$SingleSlotStorage } from "@package/rearth/oritech/api/fluid";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $NetworkedBlockEntity } from "@package/rearth/oritech/api/networking";
import { $ExtendedMenuProvider } from "@package/dev/architectury/registry/menu";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/rearth/oritech/block/base/entity" {
    export class $ItemEnergyFrameInteractionBlockEntity extends $FrameInteractionBlockEntity implements $ItemApi$BlockProvider, $EnergyApi$BlockProvider, $ExtendedMenuProvider, $ScreenProvider, $MachineAddonController, $RedstoneAddonBlockEntity$RedstoneControllable {
        getMoveEnergyUsage(): number;
        getOperationEnergyUsage(): number;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getInventorySize(): number;
        getProgress(): number;
        isActivelyWorking(): boolean;
        getEnergyStorage(): $DynamicEnergyStorage;
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        getInventoryStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
        saveExtraData(arg0: $FriendlyByteBuf): void;
        getDefaultCapacity(): number;
        getDefaultInsertRate(): number;
        getConnectedAddons(): $List<$BlockPos>;
        getOpenAddonSlots(): $List<$BlockPos>;
        getFacingForAddon(): $Direction;
        getStorageForAddon(): $DynamicEnergyStorage;
        getInventoryForAddon(): $ItemApi$InventoryStorage;
        getScreenProvider(): $ScreenProvider;
        getBaseAddonData(): $MachineAddonController$BaseAddonData;
        setBaseAddonData(arg0: $MachineAddonController$BaseAddonData_): void;
        getPosForAddon(): $BlockPos;
        getWorldForAddon(): $Level;
        getGuiSlots(): $List<$ScreenProvider$GuiSlot>;
        getDisplayedEnergyUsage(): number;
        getInventoryInputMode(): $InventoryInputMode;
        inputOptionsEnabled(): boolean;
        getDisplayedInventory(): $Container;
        getDisplayedEnergyTransfer(): number;
        getComparatorEnergyAmount(): number;
        getComparatorSlotAmount(arg0: number): number;
        getComparatorProgress(): number;
        getComparatorActiveState(): number;
        receivedRedstoneSignal(): number;
        currentRedstoneEffect(): string;
        onRedstoneEvent(arg0: boolean): void;
        getDisplayName(): $Component;
        getExtraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        showProgress(): boolean;
        getBlockFacingProperty(): $Property<$Direction>;
        hasRedstoneControlAvailable(): boolean;
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
        gatherAddonStats(arg0: $List_<$MachineAddonController$AddonBlock_>): void;
        getAdditionalStatFromAddon(arg0: $MachineAddonController$AddonBlock_): void;
        writeAddonToNbt(arg0: $CompoundTag_): void;
        loadAddonNbtData(arg0: $CompoundTag_): void;
        updateEnergyContainer(): void;
        getCoreQuality(): number;
        getAllAddons(arg0: $BlockPos_): $List<$MachineAddonController$AddonBlock>;
        writeAddons(arg0: $List_<$MachineAddonController$AddonBlock_>): void;
        initAddons(arg0: $BlockPos_): void;
        initAddons(): void;
        resetAddons(): void;
        getComparatorOutput(): number;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        disabledViaRedstone: boolean;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        lastWorkedAt: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $SimpleInventoryStorage;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lastRenderedPosition: $Vec3;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get moveEnergyUsage(): number;
        get operationEnergyUsage(): number;
        get inventorySize(): number;
        get progress(): number;
        get activelyWorking(): boolean;
        get defaultCapacity(): number;
        get defaultInsertRate(): number;
        get connectedAddons(): $List<$BlockPos>;
        get openAddonSlots(): $List<$BlockPos>;
        get facingForAddon(): $Direction;
        get storageForAddon(): $DynamicEnergyStorage;
        get inventoryForAddon(): $ItemApi$InventoryStorage;
        get screenProvider(): $ScreenProvider;
        get posForAddon(): $BlockPos;
        get worldForAddon(): $Level;
        get guiSlots(): $List<$ScreenProvider$GuiSlot>;
        get displayedEnergyUsage(): number;
        get inventoryInputMode(): $InventoryInputMode;
        get displayedInventory(): $Container;
        get displayedEnergyTransfer(): number;
        get comparatorEnergyAmount(): number;
        get comparatorProgress(): number;
        get comparatorActiveState(): number;
        get displayName(): $Component;
        get extraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        get blockFacingProperty(): $Property<$Direction>;
        get interactableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        get energyConfiguration(): $ScreenProvider$BarConfiguration;
        get fluidConfiguration(): $ScreenProvider$BarConfiguration;
        get wikiLink(): (string) | undefined;
        get indicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        get coreQuality(): number;
        get comparatorOutput(): number;
    }
    export class $MultiblockFrameInteractionEntity extends $ItemEnergyFrameInteractionBlockEntity implements $MultiblockMachineController {
        getConnectedCores(): $ArrayList<$BlockPos>;
        getFacingForMultiblock(): $Direction;
        getPosForMultiblock(): $BlockPos;
        getWorldForMultiblock(): $Level;
        setCoreQuality(arg0: number): void;
        getInventoryForMultiblock(): $ItemApi$InventoryStorage;
        getEnergyStorageForMultiblock(arg0: $Direction_): $EnergyApi$EnergyStorage;
        triggerSetupAnimation(): void;
        addMultiblockToNbt(arg0: $CompoundTag_): void;
        loadMultiblockNbtData(arg0: $CompoundTag_): void;
        getNextMissingCore(): $BlockPos;
        tryPlaceNextCore(arg0: $Player): boolean;
        initMultiblock(arg0: $BlockState_): boolean;
        onCoreBroken(arg0: $BlockPos_): void;
        onControllerBroken(): void;
        disabledViaRedstone: boolean;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        lastWorkedAt: number;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $SimpleInventoryStorage;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lastRenderedPosition: $Vec3;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get connectedCores(): $ArrayList<$BlockPos>;
        get facingForMultiblock(): $Direction;
        get posForMultiblock(): $BlockPos;
        get worldForMultiblock(): $Level;
        set coreQuality(value: number);
        get inventoryForMultiblock(): $ItemApi$InventoryStorage;
        get nextMissingCore(): $BlockPos;
    }
    export class $ExpandableEnergyStorageBlockEntity extends $NetworkedBlockEntity implements $EnergyApi$BlockProvider, $ItemApi$BlockProvider, $MachineAddonController, $ScreenProvider, $ExtendedMenuProvider {
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getProgress(): number;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getFacing(): $Direction;
        static handleLimitPacket(arg0: $ExpandableEnergyStorageBlockEntity$StorageLimitPacket_, arg1: $Player, arg2: $RegistryAccess): void;
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        updateEnergyContainer(): void;
        setRedstonePowered(arg0: boolean): void;
        getInventoryStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
        saveExtraData(arg0: $FriendlyByteBuf): void;
        getConnectedAddons(): $List<$BlockPos>;
        getOpenAddonSlots(): $List<$BlockPos>;
        getFacingForAddon(): $Direction;
        getStorageForAddon(): $DynamicEnergyStorage;
        getInventoryForAddon(): $ItemApi$InventoryStorage;
        getScreenProvider(): $ScreenProvider;
        getBaseAddonData(): $MachineAddonController$BaseAddonData;
        setBaseAddonData(arg0: $MachineAddonController$BaseAddonData_): void;
        getPosForAddon(): $BlockPos;
        getWorldForAddon(): $Level;
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
        getEnergyConfiguration(): $ScreenProvider$BarConfiguration;
        getDefaultExtractionRate(): number;
        static getOutputPosition(arg0: $BlockPos_, arg1: $Direction_): $Tuple<$Direction, $BlockPos>;
        getDisplayName(): $Component;
        gatherAddonStats(arg0: $List_<$MachineAddonController$AddonBlock_>): void;
        getAdditionalStatFromAddon(arg0: $MachineAddonController$AddonBlock_): void;
        writeAddonToNbt(arg0: $CompoundTag_): void;
        loadAddonNbtData(arg0: $CompoundTag_): void;
        getCoreQuality(): number;
        getAllAddons(arg0: $BlockPos_): $List<$MachineAddonController$AddonBlock>;
        writeAddons(arg0: $List_<$MachineAddonController$AddonBlock_>): void;
        initAddons(arg0: $BlockPos_): void;
        initAddons(): void;
        resetAddons(): void;
        getExtraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        getInteractableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        showEnergy(): boolean;
        showArmor(): boolean;
        showExpansionPanel(): boolean;
        showEnergyUsage(): boolean;
        showEnergyTransfer(): boolean;
        getFluidConfiguration(): $ScreenProvider$BarConfiguration;
        getWikiLink(): (string) | undefined;
        getIndicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        currentStats: $DynamicStatisticEnergyStorage$EnergyStatistics;
        rfOutputOverride: number;
        level: $Level;
        energyStorage: $DynamicStatisticEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $SimpleInventoryStorage;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get progress(): number;
        get facing(): $Direction;
        set redstonePowered(value: boolean);
        get connectedAddons(): $List<$BlockPos>;
        get openAddonSlots(): $List<$BlockPos>;
        get facingForAddon(): $Direction;
        get storageForAddon(): $DynamicEnergyStorage;
        get inventoryForAddon(): $ItemApi$InventoryStorage;
        get screenProvider(): $ScreenProvider;
        get posForAddon(): $BlockPos;
        get worldForAddon(): $Level;
        get guiSlots(): $List<$ScreenProvider$GuiSlot>;
        get displayedEnergyUsage(): number;
        get inventoryInputMode(): $InventoryInputMode;
        get displayedInventory(): $Container;
        get displayedEnergyTransfer(): number;
        get screenHandlerType(): $MenuType<never>;
        get blockFacingProperty(): $Property<$Direction>;
        get energyConfiguration(): $ScreenProvider$BarConfiguration;
        get defaultExtractionRate(): number;
        get displayName(): $Component;
        get coreQuality(): number;
        get extraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        get interactableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        get fluidConfiguration(): $ScreenProvider$BarConfiguration;
        get wikiLink(): (string) | undefined;
        get indicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
    }
    export class $UpgradableMachineBlockEntity extends $MachineBlockEntity implements $MachineAddonController {
        getConnectedAddons(): $List<$BlockPos>;
        getOpenAddonSlots(): $List<$BlockPos>;
        getFacingForAddon(): $Direction;
        getStorageForAddon(): $DynamicEnergyStorage;
        getInventoryForAddon(): $ItemApi$InventoryStorage;
        getScreenProvider(): $ScreenProvider;
        getBaseAddonData(): $MachineAddonController$BaseAddonData;
        setBaseAddonData(arg0: $MachineAddonController$BaseAddonData_): void;
        getPosForAddon(): $BlockPos;
        getWorldForAddon(): $Level;
        consumeBurstTicks(): void;
        isBurstThrottled(): boolean;
        addBurstTicks(): void;
        supportExtraChambersAuto(): boolean;
        isBurstAvailable(): boolean;
        getBurstBonus(): number;
        gatherAddonStats(arg0: $List_<$MachineAddonController$AddonBlock_>): void;
        getAdditionalStatFromAddon(arg0: $MachineAddonController$AddonBlock_): void;
        writeAddonToNbt(arg0: $CompoundTag_): void;
        loadAddonNbtData(arg0: $CompoundTag_): void;
        updateEnergyContainer(): void;
        getCoreQuality(): number;
        getAllAddons(arg0: $BlockPos_): $List<$MachineAddonController$AddonBlock>;
        writeAddons(arg0: $List_<$MachineAddonController$AddonBlock_>): void;
        initAddons(arg0: $BlockPos_): void;
        initAddons(): void;
        resetAddons(): void;
        static WORKING: $RawAnimation;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static SETUP: $RawAnimation;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        static PACKAGED: $RawAnimation;
        progress: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_, arg3: number);
        get connectedAddons(): $List<$BlockPos>;
        get openAddonSlots(): $List<$BlockPos>;
        get facingForAddon(): $Direction;
        get storageForAddon(): $DynamicEnergyStorage;
        get inventoryForAddon(): $ItemApi$InventoryStorage;
        get screenProvider(): $ScreenProvider;
        get posForAddon(): $BlockPos;
        get worldForAddon(): $Level;
        get burstThrottled(): boolean;
        get burstAvailable(): boolean;
        get burstBonus(): number;
        get coreQuality(): number;
    }
    export class $MultiblockMachineEntity extends $UpgradableMachineBlockEntity implements $MultiblockMachineController {
        getConnectedCores(): $ArrayList<$BlockPos>;
        getFacingForMultiblock(): $Direction;
        getPosForMultiblock(): $BlockPos;
        getWorldForMultiblock(): $Level;
        setCoreQuality(arg0: number): void;
        getInventoryForMultiblock(): $ItemApi$InventoryStorage;
        getEnergyStorageForMultiblock(arg0: $Direction_): $EnergyApi$EnergyStorage;
        triggerSetupAnimation(): void;
        static worldToRelativePos(arg0: $Vec3i, arg1: $Vec3i, arg2: $Direction_): $Vec3i;
        addMultiblockToNbt(arg0: $CompoundTag_): void;
        loadMultiblockNbtData(arg0: $CompoundTag_): void;
        getNextMissingCore(): $BlockPos;
        tryPlaceNextCore(arg0: $Player): boolean;
        initMultiblock(arg0: $BlockState_): boolean;
        onCoreBroken(arg0: $BlockPos_): void;
        onControllerBroken(): void;
        static WORKING: $RawAnimation;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static SETUP: $RawAnimation;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        static PACKAGED: $RawAnimation;
        progress: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_, arg3: number);
        get connectedCores(): $ArrayList<$BlockPos>;
        get facingForMultiblock(): $Direction;
        get posForMultiblock(): $BlockPos;
        get worldForMultiblock(): $Level;
        set coreQuality(value: number);
        get inventoryForMultiblock(): $ItemApi$InventoryStorage;
        get nextMissingCore(): $BlockPos;
    }
    export class $ExpandableMultiblockEnergyStorageBlockEntity extends $ExpandableEnergyStorageBlockEntity implements $MultiblockMachineController {
        getConnectedCores(): $ArrayList<$BlockPos>;
        getFacingForMultiblock(): $Direction;
        getPosForMultiblock(): $BlockPos;
        getWorldForMultiblock(): $Level;
        setCoreQuality(arg0: number): void;
        getInventoryForMultiblock(): $ItemApi$InventoryStorage;
        getEnergyStorageForMultiblock(arg0: $Direction_): $EnergyApi$EnergyStorage;
        triggerSetupAnimation(): void;
        addMultiblockToNbt(arg0: $CompoundTag_): void;
        loadMultiblockNbtData(arg0: $CompoundTag_): void;
        getNextMissingCore(): $BlockPos;
        tryPlaceNextCore(arg0: $Player): boolean;
        initMultiblock(arg0: $BlockState_): boolean;
        onCoreBroken(arg0: $BlockPos_): void;
        onControllerBroken(): void;
        currentStats: $DynamicStatisticEnergyStorage$EnergyStatistics;
        rfOutputOverride: number;
        level: $Level;
        energyStorage: $DynamicStatisticEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $SimpleInventoryStorage;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get connectedCores(): $ArrayList<$BlockPos>;
        get facingForMultiblock(): $Direction;
        get posForMultiblock(): $BlockPos;
        get worldForMultiblock(): $Level;
        set coreQuality(value: number);
        get inventoryForMultiblock(): $ItemApi$InventoryStorage;
        get nextMissingCore(): $BlockPos;
    }
    export class $FluidMultiblockGeneratorBlockEntity extends $MultiblockGeneratorBlockEntity implements $FluidApi$BlockProvider {
        bucketInputAllowed(): boolean;
        static getRecipe(arg0: $FluidApi$SingleSlotStorage, arg1: $Level_, arg2: $OritechRecipeType): ($RecipeHolder<$OritechRecipe>) | undefined;
        getFluidStorage(arg0: $Direction_): $FluidApi$FluidStorage;
        static WORKING: $RawAnimation;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static SETUP: $RawAnimation;
        fluidStorage: $SimpleFluidStorage;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        boilerStorage: $SimpleInOutFluidStorage;
        isProducingSteam: boolean;
        static PACKAGED: $RawAnimation;
        progress: number;
        currentMaxBurnTime: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_, arg3: number);
    }
    export class $ExpandableEnergyStorageBlockEntity$StorageLimitPacket extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        limit(): number;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$ExpandableEnergyStorageBlockEntity$StorageLimitPacket>;
        constructor(position: $BlockPos_, limit: number);
    }
    /**
     * Values that may be interpreted as {@link $ExpandableEnergyStorageBlockEntity$StorageLimitPacket}.
     */
    export type $ExpandableEnergyStorageBlockEntity$StorageLimitPacket_ = { limit?: number, position?: $BlockPos_,  } | [limit?: number, position?: $BlockPos_, ];
    export class $FrameInteractionBlockEntity$FrameBounds extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FrameInteractionBlockEntity$FrameBounds}.
     */
    export type $FrameInteractionBlockEntity$FrameBounds_ = { minZ?: number, maxZ?: number, minX?: number, maxX?: number,  } | [minZ?: number, maxZ?: number, minX?: number, maxX?: number, ];
    export class $MachineBlockEntity$FilteringInventory extends $InOutInventoryStorage {
        heldStacks: $NonNullList<$ItemStack>;
        constructor(arg0: $MachineBlockEntity, arg1: number, arg2: $Runnable_, arg3: $InventorySlotAssignment_);
    }
    export class $PassiveGeneratorBlockEntity extends $BlockEntity implements $EnergyApi$BlockProvider, $BlockEntityTicker<$PassiveGeneratorBlockEntity> {
        getProductionRate(): number;
        isProducing(): boolean;
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $PassiveGeneratorBlockEntity): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get productionRate(): number;
        get producing(): boolean;
    }
    export class $MachineBlockEntity$InventoryInputModeSelectorPacket extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$MachineBlockEntity$InventoryInputModeSelectorPacket>;
        constructor(position: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $MachineBlockEntity$InventoryInputModeSelectorPacket}.
     */
    export type $MachineBlockEntity$InventoryInputModeSelectorPacket_ = { position?: $BlockPos_,  } | [position?: $BlockPos_, ];
    export class $MultiblockGeneratorBlockEntity extends $UpgradableGeneratorBlockEntity implements $MultiblockMachineController {
        getConnectedCores(): $ArrayList<$BlockPos>;
        getFacingForMultiblock(): $Direction;
        getPosForMultiblock(): $BlockPos;
        getWorldForMultiblock(): $Level;
        setCoreQuality(arg0: number): void;
        getInventoryForMultiblock(): $ItemApi$InventoryStorage;
        getEnergyStorageForMultiblock(arg0: $Direction_): $EnergyApi$EnergyStorage;
        triggerSetupAnimation(): void;
        addMultiblockToNbt(arg0: $CompoundTag_): void;
        loadMultiblockNbtData(arg0: $CompoundTag_): void;
        getNextMissingCore(): $BlockPos;
        tryPlaceNextCore(arg0: $Player): boolean;
        initMultiblock(arg0: $BlockState_): boolean;
        onCoreBroken(arg0: $BlockPos_): void;
        onControllerBroken(): void;
        static WORKING: $RawAnimation;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static SETUP: $RawAnimation;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        boilerStorage: $SimpleInOutFluidStorage;
        isProducingSteam: boolean;
        static PACKAGED: $RawAnimation;
        progress: number;
        currentMaxBurnTime: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_, arg3: number);
        get connectedCores(): $ArrayList<$BlockPos>;
        get facingForMultiblock(): $Direction;
        get posForMultiblock(): $BlockPos;
        get worldForMultiblock(): $Level;
        set coreQuality(value: number);
        get inventoryForMultiblock(): $ItemApi$InventoryStorage;
        get nextMissingCore(): $BlockPos;
    }
    export class $FrameInteractionBlockEntity extends $NetworkedBlockEntity {
        tryFindFrame(): boolean;
        getToolheadAdditionalRender(): $ItemStack;
        finishBlockWork(arg0: $BlockPos_): void;
        getMachineHead(): $BlockState;
        getMoveTime(): number;
        getFrameOffset(): number;
        getAreaMin(): $BlockPos;
        setAreaMin(arg0: $BlockPos_): void;
        getAreaMax(): $BlockPos;
        setAreaMax(arg0: $BlockPos_): void;
        setCurrentTarget(arg0: $BlockPos_): void;
        getLastTarget(): $BlockPos;
        setLastTarget(arg0: $BlockPos_): void;
        setCurrentProgress(arg0: number): void;
        getCurrentDirection(): $Vec3i;
        setCurrentDirection(arg0: $Vec3i): void;
        isMoving(): boolean;
        setMoving(arg0: boolean): void;
        getWorkTime(): number;
        getSpeedMultiplier(): number;
        isActive(arg0: $BlockState_): boolean;
        cleanup(): void;
        getCurrentProgress(): number;
        getCurrentTarget(): $BlockPos;
        disabledViaRedstone: boolean;
        level: $Level;
        lastWorkedAt: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        lastRenderedPosition: $Vec3;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get toolheadAdditionalRender(): $ItemStack;
        get machineHead(): $BlockState;
        get moveTime(): number;
        get frameOffset(): number;
        get workTime(): number;
        get speedMultiplier(): number;
    }
    export class $MachineBlockEntity extends $NetworkedBlockEntity implements $ExtendedMenuProvider, $GeoBlockEntity, $EnergyApi$BlockProvider, $ScreenProvider, $ItemApi$BlockProvider, $RedstoneAddonBlockEntity$RedstoneControllable, $ColorableMachine {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getInventorySize(): number;
        setProgress(arg0: number): void;
        getProgress(): number;
        isActivelyWorking(): boolean;
        getRecipeDuration(): number;
        getAnimationDuration(): number;
        getCurrentRecipe(): $OritechRecipe;
        cycleInputMode(): void;
        canEnergyStorageChangeWhileGUIOpen(): boolean;
        onAnimationUpdate(arg0: $AnimationState<$MachineBlockEntity>): $PlayState;
        setCurrentRecipe(arg0: $OritechRecipe): void;
        setEnergyStored(arg0: number): void;
        getEnergyPerTick(): number;
        getDirectedStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
        static receiveCycleModePacket(arg0: $MachineBlockEntity$InventoryInputModeSelectorPacket_, arg1: $Player, arg2: $RegistryAccess): void;
        getEnergyStorage(): $DynamicEnergyStorage;
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        getInventoryStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
        saveExtraData(arg0: $FriendlyByteBuf): void;
        getDefaultCapacity(): number;
        getDefaultInsertRate(): number;
        getGuiSlots(): $List<$ScreenProvider$GuiSlot>;
        getDisplayedEnergyUsage(): number;
        getInventoryInputMode(): $InventoryInputMode;
        getDisplayedInventory(): $Container;
        getDisplayedEnergyTransfer(): number;
        getComparatorEnergyAmount(): number;
        getComparatorSlotAmount(arg0: number): number;
        getComparatorProgress(): number;
        getComparatorActiveState(): number;
        onRedstoneEvent(arg0: boolean): void;
        getCurrentColor(): $ColorableMachine$ColorVariant;
        assignColor(arg0: $ColorableMachine$ColorVariant_): void;
        getSlotAssignments(): $InventorySlotAssignment;
        getDefaultExtractionRate(): number;
        canOutputRecipe(arg0: $OritechRecipe): boolean;
        getEfficiencyMultiplier(): number;
        getSpeedMultiplier(): number;
        getCraftingResults(arg0: $OritechRecipe): $List<$ItemStack>;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        isActive(arg0: $BlockState_): boolean;
        getDisplayName(): $Component;
        getTick(arg0: $Object): number;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        triggerAnim(arg0: string, arg1: string): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
        getExtraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        showProgress(): boolean;
        inputOptionsEnabled(): boolean;
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
        getComparatorOutput(): number;
        addColorToNbt(arg0: $CompoundTag_): void;
        loadColorFromNbt(arg0: $CompoundTag_): void;
        supportRecoloring(): boolean;
        getDefaultColor(): $ColorableMachine$ColorVariant;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        animatableCacheOverride(): $AnimatableInstanceCache;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        static WORKING: $RawAnimation;
        level: $Level;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        energyStorage: $DynamicEnergyStorage;
        static PACKAGED: $RawAnimation;
        progress: number;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static SETUP: $RawAnimation;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_, arg3: number);
        get inventorySize(): number;
        get activelyWorking(): boolean;
        get recipeDuration(): number;
        get animationDuration(): number;
        set energyStored(value: number);
        get energyPerTick(): number;
        get defaultCapacity(): number;
        get defaultInsertRate(): number;
        get guiSlots(): $List<$ScreenProvider$GuiSlot>;
        get displayedEnergyUsage(): number;
        get inventoryInputMode(): $InventoryInputMode;
        get displayedInventory(): $Container;
        get displayedEnergyTransfer(): number;
        get comparatorEnergyAmount(): number;
        get comparatorProgress(): number;
        get comparatorActiveState(): number;
        get slotAssignments(): $InventorySlotAssignment;
        get defaultExtractionRate(): number;
        get efficiencyMultiplier(): number;
        get speedMultiplier(): number;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get displayName(): $Component;
        get extraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        get blockFacingProperty(): $Property<$Direction>;
        get interactableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        get energyConfiguration(): $ScreenProvider$BarConfiguration;
        get fluidConfiguration(): $ScreenProvider$BarConfiguration;
        get wikiLink(): (string) | undefined;
        get indicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        get comparatorOutput(): number;
        get defaultColor(): $ColorableMachine$ColorVariant;
        get boneResetTime(): number;
    }
    export class $UpgradableGeneratorBlockEntity extends $UpgradableMachineBlockEntity {
        boilerAcceptsInput(arg0: $Fluid_): boolean;
        getCurrentMaxBurnTime(): number;
        setCurrentMaxBurnTime(arg0: number): void;
        static WORKING: $RawAnimation;
        level: $Level;
        energyStorage: $DynamicEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        inventory: $MachineBlockEntity$FilteringInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static SETUP: $RawAnimation;
        static IDLE: $RawAnimation;
        lastWorkedAt: number;
        boilerStorage: $SimpleInOutFluidStorage;
        isProducingSteam: boolean;
        static PACKAGED: $RawAnimation;
        progress: number;
        currentMaxBurnTime: number;
        remainingBurstTicks: number;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_, arg3: number);
    }
}
