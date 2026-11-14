import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $GameEventListener, $PositionSource, $GameEvent, $GameEvent$Context_, $GameEventListener$Provider, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $List } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $AnimatableManager$ControllerRegistrar_, $RawAnimation } from "@package/software/bernie/geckolib/animation";
import { $Tuple } from "@package/net/minecraft/util";
import { $Container } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $SimpleEnergyStorage } from "@package/rearth/oritech/api/energy/containers";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $RegistryAccess, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $InOutInventoryStorage, $SimpleInventoryStorage } from "@package/rearth/oritech/api/item/containers";
import { $ItemApi$BlockProvider, $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Record, $Object } from "@package/java/lang";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ScreenProvider$ArrowConfiguration, $ScreenProvider, $ScreenProvider$GuiSlot, $ComparatorOutputProvider, $ScreenProvider$BarConfiguration, $InventoryInputMode } from "@package/rearth/oritech/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$EnergyStorage, $EnergyApi$BlockProvider } from "@package/rearth/oritech/api/energy";
import { $GeoBlockEntity } from "@package/software/bernie/geckolib/animatable";
import { $FluidApi$SingleSlotStorage } from "@package/rearth/oritech/api/fluid";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $NetworkedBlockEntity } from "@package/rearth/oritech/api/networking";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ExtendedMenuProvider } from "@package/dev/architectury/registry/menu";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/rearth/oritech/block/entity/arcane" {
    export class $EnchantmentCatalystBlockEntity$CatalystSyncPacket extends $Record implements $CustomPacketPayload {
        storedSouls(): number;
        isHyperEnchanting(): boolean;
        maxSouls(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        progress(): number;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$EnchantmentCatalystBlockEntity$CatalystSyncPacket>;
        constructor(position: $BlockPos_, storedSouls: number, progress: number, isHyperEnchanting: boolean, maxSouls: number);
        get hyperEnchanting(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentCatalystBlockEntity$CatalystSyncPacket}.
     */
    export type $EnchantmentCatalystBlockEntity$CatalystSyncPacket_ = { isHyperEnchanting?: boolean, position?: $BlockPos_, storedSouls?: number, maxSouls?: number, progress?: number,  } | [isHyperEnchanting?: boolean, position?: $BlockPos_, storedSouls?: number, maxSouls?: number, progress?: number, ];
    export class $EnchanterBlockEntity$EnchanterStatistics extends $Record {
        requiredCatalysts(): number;
        availableCatalysts(): number;
        static EMPTY: $EnchanterBlockEntity$EnchanterStatistics;
        constructor(requiredCatalysts: number, availableCatalysts: number);
    }
    /**
     * Values that may be interpreted as {@link $EnchanterBlockEntity$EnchanterStatistics}.
     */
    export type $EnchanterBlockEntity$EnchanterStatistics_ = { requiredCatalysts?: number, availableCatalysts?: number,  } | [requiredCatalysts?: number, availableCatalysts?: number, ];
    export class $EnchanterBlockEntity extends $NetworkedBlockEntity implements $ItemApi$BlockProvider, $EnergyApi$BlockProvider, $GeoBlockEntity, $ScreenProvider, $ExtendedMenuProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getProgress(): number;
        static receiveEnchantmentSelection(arg0: $EnchanterBlockEntity$SelectEnchantingPacket_, arg1: $Player, arg2: $RegistryAccess): void;
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        getInventoryStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
        saveExtraData(arg0: $FriendlyByteBuf): void;
        getSelectedEnchantment(): $Holder<$Enchantment>;
        getGuiSlots(): $List<$ScreenProvider$GuiSlot>;
        getDisplayedEnergyUsage(): number;
        getInventoryInputMode(): $InventoryInputMode;
        inputOptionsEnabled(): boolean;
        getDisplayedInventory(): $Container;
        getScreenHandlerType(): $MenuType<never>;
        getEnergyConfiguration(): $ScreenProvider$BarConfiguration;
        getIndicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        getDisplayName(): $Component;
        getTick(arg0: $Object): number;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        triggerAnim(arg0: string, arg1: string): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
        getExtraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        showProgress(): boolean;
        getDisplayedEnergyTransfer(): number;
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
        getFluidConfiguration(): $ScreenProvider$BarConfiguration;
        getWikiLink(): (string) | undefined;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        animatableCacheOverride(): $AnimatableInstanceCache;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        static WORKING: $RawAnimation;
        selectedEnchantment: $ResourceLocation;
        level: $Level;
        static IDLE: $RawAnimation;
        maxProgress: number;
        progress: number;
        static ATTACHMENTS_NBT_KEY: string;
        static UNPOWERED: $RawAnimation;
        static NONE_SELECTED: $ResourceLocation;
        inventory: $InOutInventoryStorage;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        statistics: $EnchanterBlockEntity$EnchanterStatistics;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get guiSlots(): $List<$ScreenProvider$GuiSlot>;
        get displayedEnergyUsage(): number;
        get inventoryInputMode(): $InventoryInputMode;
        get displayedInventory(): $Container;
        get screenHandlerType(): $MenuType<never>;
        get energyConfiguration(): $ScreenProvider$BarConfiguration;
        get indicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get displayName(): $Component;
        get extraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        get displayedEnergyTransfer(): number;
        get blockFacingProperty(): $Property<$Direction>;
        get interactableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        get fluidConfiguration(): $ScreenProvider$BarConfiguration;
        get wikiLink(): (string) | undefined;
        get boneResetTime(): number;
    }
    export class $BaseSoulCollectionEntity$DeathListener implements $GameEventListener {
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        getListenerRadius(): number;
        getListenerSource(): $PositionSource;
        handleGameEvent(arg0: $ServerLevel, arg1: $Holder_<$GameEvent>, arg2: $GameEvent$Context_, arg3: $Vec3_): boolean;
        static resetEvents(): void;
        constructor(arg0: $BaseSoulCollectionEntity, arg1: $BlockPos_);
        get deliveryMode(): $GameEventListener$DeliveryMode;
        get listenerRadius(): number;
        get listenerSource(): $PositionSource;
    }
    export class $EnchantmentCatalystBlockEntity extends $BaseSoulCollectionEntity implements $ItemApi$BlockProvider, $EnergyApi$BlockProvider, $ScreenProvider, $ComparatorOutputProvider, $GeoBlockEntity, $BlockEntityTicker<$EnchantmentCatalystBlockEntity>, $ExtendedMenuProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getComparatorOutput(): number;
        getProgress(): number;
        static receiveUpdatePacket(arg0: $EnchantmentCatalystBlockEntity$CatalystSyncPacket_, arg1: $Level_, arg2: $RegistryAccess): void;
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
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
        getEnergyConfiguration(): $ScreenProvider$BarConfiguration;
        doExplosion(): void;
        getDisplayedCost(): number;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        getDisplayName(): $Component;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $EnchantmentCatalystBlockEntity): void;
        getExtraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        getDisplayedEnergyTransfer(): number;
        getBlockFacingProperty(): $Property<$Direction>;
        hasRedstoneControlAvailable(): boolean;
        receivedRedstoneSignal(): number;
        currentRedstoneEffect(): string;
        getInteractableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        showArmor(): boolean;
        showExpansionPanel(): boolean;
        showEnergyUsage(): boolean;
        showEnergyTransfer(): boolean;
        getFluidConfiguration(): $ScreenProvider$BarConfiguration;
        getWikiLink(): (string) | undefined;
        getIndicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        getTick(arg0: $Object): number;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        triggerAnim(arg0: string, arg1: string): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        animatableCacheOverride(): $AnimatableInstanceCache;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        level: $Level;
        maxProgress: number;
        energyStorage: $SimpleEnergyStorage;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $SimpleInventoryStorage;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        collectedSouls: number;
        baseSoulCapacity: number;
        static IDLE: $RawAnimation;
        static STABILIZED: $RawAnimation;
        maxSouls: number;
        static EMPTY: $RawAnimation;
        static UNSTABLE: $RawAnimation;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get comparatorOutput(): number;
        get progress(): number;
        get guiSlots(): $List<$ScreenProvider$GuiSlot>;
        get displayedEnergyUsage(): number;
        get inventoryInputMode(): $InventoryInputMode;
        get displayedInventory(): $Container;
        get screenHandlerType(): $MenuType<never>;
        get energyConfiguration(): $ScreenProvider$BarConfiguration;
        get displayedCost(): number;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get displayName(): $Component;
        get extraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        get displayedEnergyTransfer(): number;
        get blockFacingProperty(): $Property<$Direction>;
        get interactableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        get fluidConfiguration(): $ScreenProvider$BarConfiguration;
        get wikiLink(): (string) | undefined;
        get indicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        get boneResetTime(): number;
    }
    export class $BaseSoulCollectionEntity extends $BlockEntity implements $GameEventListener$Provider<$BaseSoulCollectionEntity$DeathListener> {
        static getSoulTravelDuration(arg0: number): number;
        onSoulIncoming(arg0: $Vec3_): void;
        canAcceptSoul(): boolean;
        getListener(): $BaseSoulCollectionEntity$DeathListener;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get listener(): $BaseSoulCollectionEntity$DeathListener;
    }
    export class $SpawnerControllerBlockEntity$SpawnerSyncPacket extends $Record implements $CustomPacketPayload {
        collectedSouls(): number;
        maxSouls(): number;
        spawnedMob(): $CompoundTag;
        hasCage(): boolean;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$SpawnerControllerBlockEntity$SpawnerSyncPacket>;
        constructor(position: $BlockPos_, spawnedMob: $CompoundTag_, hasCage: boolean, collectedSouls: number, maxSouls: number);
    }
    /**
     * Values that may be interpreted as {@link $SpawnerControllerBlockEntity$SpawnerSyncPacket}.
     */
    export type $SpawnerControllerBlockEntity$SpawnerSyncPacket_ = { hasCage?: boolean, position?: $BlockPos_, spawnedMob?: $CompoundTag_, maxSouls?: number, collectedSouls?: number,  } | [hasCage?: boolean, position?: $BlockPos_, spawnedMob?: $CompoundTag_, maxSouls?: number, collectedSouls?: number, ];
    export class $SpawnerControllerBlockEntity extends $BaseSoulCollectionEntity implements $BlockEntityTicker<$SpawnerControllerBlockEntity>, $ComparatorOutputProvider {
        getComparatorOutput(): number;
        static receiveUpdatePacket(arg0: $SpawnerControllerBlockEntity$SpawnerSyncPacket_, arg1: $Level_, arg2: $RegistryAccess): void;
        setRedstonePowered(arg0: boolean): void;
        onEntitySteppedOn(arg0: $Entity): void;
        onBlockInteracted(arg0: $Player): void;
        loadRendererFromUpdate(): void;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $SpawnerControllerBlockEntity): void;
        renderedEntity: $Entity;
        hasCage: boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        mobNbt: $CompoundTag;
        maxSouls: number;
        lastProgress: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        collectedSouls: number;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get comparatorOutput(): number;
        set redstonePowered(value: boolean);
    }
    export class $EnchanterBlockEntity$SelectEnchantingPacket extends $Record implements $CustomPacketPayload {
        enchantmentId(): $ResourceLocation;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        self(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$EnchanterBlockEntity$SelectEnchantingPacket>;
        constructor(self: $BlockPos_, enchantmentId: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $EnchanterBlockEntity$SelectEnchantingPacket}.
     */
    export type $EnchanterBlockEntity$SelectEnchantingPacket_ = { self?: $BlockPos_, enchantmentId?: $ResourceLocation_,  } | [self?: $BlockPos_, enchantmentId?: $ResourceLocation_, ];
}
