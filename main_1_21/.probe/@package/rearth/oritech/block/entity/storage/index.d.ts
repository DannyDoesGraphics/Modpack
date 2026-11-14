import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $List, $ArrayList } from "@package/java/util";
import { $AnimatableManager$ControllerRegistrar_, $RawAnimation } from "@package/software/bernie/geckolib/animation";
import { $Tuple } from "@package/net/minecraft/util";
import { $Container } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $DynamicStatisticEnergyStorage$EnergyStatistics, $SimpleEnergyStorage, $DynamicStatisticEnergyStorage } from "@package/rearth/oritech/api/energy/containers";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $InOutInventoryStorage, $SimpleInventoryStorage } from "@package/rearth/oritech/api/item/containers";
import { $ItemApi$BlockProvider, $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ExpandableMultiblockEnergyStorageBlockEntity, $ExpandableEnergyStorageBlockEntity } from "@package/rearth/oritech/block/base/entity";
import { $Object } from "@package/java/lang";
import { $Level } from "@package/net/minecraft/world/level";
import { $RedstoneAddonBlockEntity$RedstoneControllable } from "@package/rearth/oritech/block/entity/addons";
import { $MultiblockMachineController, $ScreenProvider$ArrowConfiguration, $ScreenProvider, $ColorableMachine$ColorVariant, $ScreenProvider$GuiSlot, $ColorableMachine$ColorVariant_, $ComparatorOutputProvider, $ScreenProvider$BarConfiguration, $InventoryInputMode, $ColorableMachine } from "@package/rearth/oritech/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $SimpleFluidStorage } from "@package/rearth/oritech/api/fluid/containers";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$EnergyStorage, $EnergyApi$BlockProvider } from "@package/rearth/oritech/api/energy";
import { $GeoBlockEntity } from "@package/software/bernie/geckolib/animatable";
import { $FluidApi$BlockProvider, $FluidApi$FluidStorage, $FluidApi$SingleSlotStorage } from "@package/rearth/oritech/api/fluid";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $NetworkedBlockEntity } from "@package/rearth/oritech/api/networking";
import { $ExtendedMenuProvider } from "@package/dev/architectury/registry/menu";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/rearth/oritech/block/entity/storage" {
    export class $UnstableContainerBlockEntity extends $NetworkedBlockEntity implements $ScreenProvider, $ExtendedMenuProvider, $ColorableMachine, $GeoBlockEntity, $MultiblockMachineController, $EnergyApi$BlockProvider {
        static getCoreOffsets(): $List<$Vec3i>;
        setCapturedBlock(arg0: $BlockState_): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getProgress(): number;
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        saveExtraData(arg0: $FriendlyByteBuf): void;
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
        getGuiSlots(): $List<$ScreenProvider$GuiSlot>;
        getDisplayedEnergyUsage(): number;
        showProgress(): boolean;
        getInventoryInputMode(): $InventoryInputMode;
        inputOptionsEnabled(): boolean;
        getDisplayedInventory(): $Container;
        getDisplayedEnergyTransfer(): number;
        getScreenHandlerType(): $MenuType<never>;
        getCurrentColor(): $ColorableMachine$ColorVariant;
        assignColor(arg0: $ColorableMachine$ColorVariant_): void;
        onCoreBroken(arg0: $BlockPos_): void;
        onControllerBroken(): void;
        showExpansionPanel(): boolean;
        getEnergyConfiguration(): $ScreenProvider$BarConfiguration;
        getDefaultColor(): $ColorableMachine$ColorVariant;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        getDisplayName(): $Component;
        getExtraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        getBlockFacingProperty(): $Property<$Direction>;
        hasRedstoneControlAvailable(): boolean;
        receivedRedstoneSignal(): number;
        currentRedstoneEffect(): string;
        getInteractableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        showEnergy(): boolean;
        showArmor(): boolean;
        showEnergyUsage(): boolean;
        showEnergyTransfer(): boolean;
        getFluidConfiguration(): $ScreenProvider$BarConfiguration;
        getWikiLink(): (string) | undefined;
        getIndicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        addColorToNbt(arg0: $CompoundTag_): void;
        loadColorFromNbt(arg0: $CompoundTag_): void;
        supportRecoloring(): boolean;
        getTick(arg0: $Object): number;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        triggerAnim(arg0: string, arg1: string): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
        addMultiblockToNbt(arg0: $CompoundTag_): void;
        loadMultiblockNbtData(arg0: $CompoundTag_): void;
        getNextMissingCore(): $BlockPos;
        tryPlaceNextCore(arg0: $Player): boolean;
        initMultiblock(arg0: $BlockState_): boolean;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        animatableCacheOverride(): $AnimatableInstanceCache;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        currentStats: $DynamicStatisticEnergyStorage$EnergyStatistics;
        capturedBlock: $BlockState;
        laserInputStorage: $SimpleEnergyStorage;
        level: $Level;
        static IDLE: $RawAnimation;
        qualityMultiplier: number;
        static ATTACHMENTS_NBT_KEY: string;
        currentColor: $ColorableMachine$ColorVariant;
        static BASE_CAPACITY: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static SETUP: $RawAnimation;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        static get coreOffsets(): $List<$Vec3i>;
        get progress(): number;
        get connectedCores(): $ArrayList<$BlockPos>;
        get facingForMultiblock(): $Direction;
        get posForMultiblock(): $BlockPos;
        get worldForMultiblock(): $Level;
        get inventoryForMultiblock(): $ItemApi$InventoryStorage;
        get corePositions(): $List<$Vec3i>;
        get guiSlots(): $List<$ScreenProvider$GuiSlot>;
        get displayedEnergyUsage(): number;
        get inventoryInputMode(): $InventoryInputMode;
        get displayedInventory(): $Container;
        get displayedEnergyTransfer(): number;
        get screenHandlerType(): $MenuType<never>;
        get energyConfiguration(): $ScreenProvider$BarConfiguration;
        get defaultColor(): $ColorableMachine$ColorVariant;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get displayName(): $Component;
        get extraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        get blockFacingProperty(): $Property<$Direction>;
        get interactableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        get fluidConfiguration(): $ScreenProvider$BarConfiguration;
        get wikiLink(): (string) | undefined;
        get indicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        get nextMissingCore(): $BlockPos;
        get boneResetTime(): number;
    }
    export class $SmallTankEntity extends $NetworkedBlockEntity implements $FluidApi$BlockProvider, $ItemApi$BlockProvider, $ComparatorOutputProvider, $ScreenProvider, $ExtendedMenuProvider {
        isGlowingFluid(): boolean;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getComparatorOutput(): number;
        getProgress(): number;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getInventoryStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
        saveExtraData(arg0: $FriendlyByteBuf): void;
        getGuiSlots(): $List<$ScreenProvider$GuiSlot>;
        getDisplayedEnergyUsage(): number;
        getInventoryInputMode(): $InventoryInputMode;
        inputOptionsEnabled(): boolean;
        getDisplayedInventory(): $Container;
        getScreenHandlerType(): $MenuType<never>;
        showEnergy(): boolean;
        showExpansionPanel(): boolean;
        getFluidConfiguration(): $ScreenProvider$BarConfiguration;
        getIndicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        getDisplayName(): $Component;
        getExtraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        showProgress(): boolean;
        getDisplayedEnergyTransfer(): number;
        getBlockFacingProperty(): $Property<$Direction>;
        hasRedstoneControlAvailable(): boolean;
        receivedRedstoneSignal(): number;
        currentRedstoneEffect(): string;
        getInteractableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        showArmor(): boolean;
        showEnergyUsage(): boolean;
        showEnergyTransfer(): boolean;
        getEnergyConfiguration(): $ScreenProvider$BarConfiguration;
        getWikiLink(): (string) | undefined;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        getFluidStorage(arg0: $Direction_): $FluidApi$FluidStorage;
        isCreative: boolean;
        fluidStorage: $SimpleFluidStorage;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $InOutInventoryStorage;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: boolean);
        get glowingFluid(): boolean;
        get comparatorOutput(): number;
        get progress(): number;
        get guiSlots(): $List<$ScreenProvider$GuiSlot>;
        get displayedEnergyUsage(): number;
        get inventoryInputMode(): $InventoryInputMode;
        get displayedInventory(): $Container;
        get screenHandlerType(): $MenuType<never>;
        get fluidConfiguration(): $ScreenProvider$BarConfiguration;
        get indicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        get displayName(): $Component;
        get extraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        get displayedEnergyTransfer(): number;
        get blockFacingProperty(): $Property<$Direction>;
        get interactableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        get energyConfiguration(): $ScreenProvider$BarConfiguration;
        get wikiLink(): (string) | undefined;
    }
    export class $CreativeStorageBlockEntity extends $ExpandableEnergyStorageBlockEntity implements $ComparatorOutputProvider {
        getComparatorOutput(): number;
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
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get comparatorOutput(): number;
    }
    export class $SmallStorageBlockEntity extends $ExpandableEnergyStorageBlockEntity implements $ComparatorOutputProvider {
        getComparatorOutput(): number;
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
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get comparatorOutput(): number;
    }
    export class $LargeStorageBlockEntity extends $ExpandableMultiblockEnergyStorageBlockEntity implements $RedstoneAddonBlockEntity$RedstoneControllable {
        getComparatorEnergyAmount(): number;
        getComparatorSlotAmount(arg0: number): number;
        getComparatorProgress(): number;
        getComparatorActiveState(): number;
        onRedstoneEvent(arg0: boolean): void;
        getComparatorOutput(): number;
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
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get comparatorEnergyAmount(): number;
        get comparatorProgress(): number;
        get comparatorActiveState(): number;
        get comparatorOutput(): number;
    }
}
