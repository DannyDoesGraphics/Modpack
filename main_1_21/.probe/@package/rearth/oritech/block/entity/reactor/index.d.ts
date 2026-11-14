import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ScreenProvider$GuiSlot, $ScreenProvider$ArrowConfiguration, $ScreenProvider$BarConfiguration, $InventoryInputMode, $ScreenProvider } from "@package/rearth/oritech/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$BlockProvider, $EnergyApi$EnergyStorage } from "@package/rearth/oritech/api/energy";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $HashMap, $List } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Tuple } from "@package/net/minecraft/util";
import { $FluidApi$SingleSlotStorage } from "@package/rearth/oritech/api/fluid";
import { $Container } from "@package/net/minecraft/world";
import { $SimpleEnergyStorage } from "@package/rearth/oritech/api/energy/containers";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Direction_, $RegistryAccess, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $NetworkedBlockEntity } from "@package/rearth/oritech/api/networking";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $InOutInventoryStorage } from "@package/rearth/oritech/api/item/containers";
import { $ItemApi$BlockProvider, $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $ExtendedMenuProvider } from "@package/dev/architectury/registry/menu";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $BlockEntityType, $BlockEntityTicker, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector2i } from "@package/org/joml";

declare module "@package/rearth/oritech/block/entity/reactor" {
    export class $ReactorControllerBlockEntity$WarningThresholdPacket extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        threshold(): number;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$ReactorControllerBlockEntity$WarningThresholdPacket>;
        constructor(position: $BlockPos_, threshold: number);
    }
    /**
     * Values that may be interpreted as {@link $ReactorControllerBlockEntity$WarningThresholdPacket}.
     */
    export type $ReactorControllerBlockEntity$WarningThresholdPacket_ = { threshold?: number, position?: $BlockPos_,  } | [threshold?: number, position?: $BlockPos_, ];
    export class $ReactorAbsorberPortEntity extends $BlockEntity implements $ExtendedMenuProvider, $ScreenProvider, $ItemApi$BlockProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getProgress(): number;
        getInventoryStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
        saveExtraData(arg0: $FriendlyByteBuf): void;
        getGuiSlots(): $List<$ScreenProvider$GuiSlot>;
        getDisplayedEnergyUsage(): number;
        showProgress(): boolean;
        getInventoryInputMode(): $InventoryInputMode;
        inputOptionsEnabled(): boolean;
        getDisplayedInventory(): $Container;
        getScreenHandlerType(): $MenuType<never>;
        showEnergy(): boolean;
        showExpansionPanel(): boolean;
        getAvailableFuel(): number;
        consumeFuel(arg0: number): void;
        updateNetwork(): void;
        getDisplayName(): $Component;
        getExtraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
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
        getFluidConfiguration(): $ScreenProvider$BarConfiguration;
        getWikiLink(): (string) | undefined;
        getIndicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        currentFuelOriginalCapacity: number;
        availableFuel: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $InOutInventoryStorage;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get guiSlots(): $List<$ScreenProvider$GuiSlot>;
        get displayedEnergyUsage(): number;
        get inventoryInputMode(): $InventoryInputMode;
        get displayedInventory(): $Container;
        get screenHandlerType(): $MenuType<never>;
        get displayName(): $Component;
        get extraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        get displayedEnergyTransfer(): number;
        get blockFacingProperty(): $Property<$Direction>;
        get interactableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        get energyConfiguration(): $ScreenProvider$BarConfiguration;
        get fluidConfiguration(): $ScreenProvider$BarConfiguration;
        get wikiLink(): (string) | undefined;
        get indicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
    }
    export class $ReactorControllerBlockEntity$ComponentStatistics extends $Record {
        receivedPulses(): number;
        storedHeat(): number;
        heatChanged(): number;
        static EMPTY: $ReactorControllerBlockEntity$ComponentStatistics;
        constructor(receivedPulses: number, storedHeat: number, heatChanged: number);
    }
    /**
     * Values that may be interpreted as {@link $ReactorControllerBlockEntity$ComponentStatistics}.
     */
    export type $ReactorControllerBlockEntity$ComponentStatistics_ = { heatChanged?: number, storedHeat?: number, receivedPulses?: number,  } | [heatChanged?: number, storedHeat?: number, receivedPulses?: number, ];
    export class $ReactorControllerBlockEntity extends $NetworkedBlockEntity implements $EnergyApi$BlockProvider, $ExtendedMenuProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        static handleWarningThresholdPacket(arg0: $ReactorControllerBlockEntity$WarningThresholdPacket_, arg1: $Player, arg2: $RegistryAccess): void;
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        saveExtraData(arg0: $FriendlyByteBuf): void;
        init(arg0: $Player): void;
        getDisplayName(): $Component;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        static RF_PER_PULSE: number;
        areaMin: $BlockPos;
        level: $Level;
        static VENT_RELATIVE_RATE: number;
        componentStats: $HashMap<$Vector2i, $ReactorControllerBlockEntity$ComponentStatistics>;
        energyStorage: $SimpleEnergyStorage;
        static MAX_SIZE: number;
        active: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        disabledUntil: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static VENT_BASE_RATE: number;
        static MAX_UNSTABLE_TICKS: number;
        static ABSORBER_RATE: number;
        areaMax: $BlockPos;
        warningHeatThreshold: number;
        static DEFAULT_WARNING_HEAT_THRESHOLD: number;
        static MAX_HEAT: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get displayName(): $Component;
    }
    export class $NuclearExplosionEntity extends $BlockEntity implements $BlockEntityTicker<$NuclearExplosionEntity> {
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $NuclearExplosionEntity): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_, arg2: number);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $ReactorEnergyPortEntity extends $BlockEntity implements $EnergyApi$BlockProvider {
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $NuclearExplosionEntity$DirectionExplosionWave {
    }
    export class $ReactorFuelPortEntity extends $BlockEntity implements $ExtendedMenuProvider, $ScreenProvider, $ItemApi$BlockProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getProgress(): number;
        getInventoryStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
        saveExtraData(arg0: $FriendlyByteBuf): void;
        getGuiSlots(): $List<$ScreenProvider$GuiSlot>;
        getDisplayedEnergyUsage(): number;
        showProgress(): boolean;
        getInventoryInputMode(): $InventoryInputMode;
        inputOptionsEnabled(): boolean;
        getDisplayedInventory(): $Container;
        getScreenHandlerType(): $MenuType<never>;
        showEnergy(): boolean;
        showExpansionPanel(): boolean;
        tryConsumeFuel(arg0: number, arg1: boolean): boolean;
        updateNetwork(): void;
        getDisplayName(): $Component;
        getExtraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
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
        getFluidConfiguration(): $ScreenProvider$BarConfiguration;
        getWikiLink(): (string) | undefined;
        getIndicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        currentFuelOriginalCapacity: number;
        availableFuel: number;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $InOutInventoryStorage;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get progress(): number;
        get guiSlots(): $List<$ScreenProvider$GuiSlot>;
        get displayedEnergyUsage(): number;
        get inventoryInputMode(): $InventoryInputMode;
        get displayedInventory(): $Container;
        get screenHandlerType(): $MenuType<never>;
        get displayName(): $Component;
        get extraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        get displayedEnergyTransfer(): number;
        get blockFacingProperty(): $Property<$Direction>;
        get interactableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        get energyConfiguration(): $ScreenProvider$BarConfiguration;
        get fluidConfiguration(): $ScreenProvider$BarConfiguration;
        get wikiLink(): (string) | undefined;
        get indicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
    }
}
