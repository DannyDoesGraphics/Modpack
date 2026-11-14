import { $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SerializableDataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $Augment$AugmentState_, $Augment } from "@package/rearth/oritech/block/entity/augmenter/api";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $HashMap, $List, $Map_, $ArrayList, $Map, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $AnimatableManager$ControllerRegistrar_ } from "@package/software/bernie/geckolib/animation";
import { $Tuple } from "@package/net/minecraft/util";
import { $Container } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $RegistryAccess, $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $SimpleInventoryStorage } from "@package/rearth/oritech/api/item/containers";
import { $ItemApi$BlockProvider, $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $AnimatableInstanceCache } from "@package/software/bernie/geckolib/animatable/instance";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $Level } from "@package/net/minecraft/world/level";
import { $MultiblockMachineController, $ScreenProvider$ArrowConfiguration, $ScreenProvider, $ScreenProvider$GuiSlot, $ScreenProvider$BarConfiguration, $InventoryInputMode } from "@package/rearth/oritech/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$EnergyStorage, $EnergyApi$BlockProvider } from "@package/rearth/oritech/api/energy";
import { $GeoBlockEntity } from "@package/software/bernie/geckolib/animatable";
import { $FluidApi$SingleSlotStorage } from "@package/rearth/oritech/api/fluid";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $NetworkedBlockEntity } from "@package/rearth/oritech/api/networking";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ExtendedMenuProvider } from "@package/dev/architectury/registry/menu";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as api from "@package/rearth/oritech/block/entity/augmenter/api";

declare module "@package/rearth/oritech/block/entity/augmenter" {
    export class $PlayerAugments {
        static loadAllAugments(arg0: $RecipeManager): void;
        static serverTickAugments(arg0: $ServerPlayer): void;
        static receiveInstallTrigger(arg0: $PlayerAugments$AugmentInstallTriggerPacket_, arg1: $Player, arg2: $RegistryAccess): void;
        static receivePlayerLoadMachine(arg0: $PlayerAugments$LoadPlayerAugmentsToMachinePacket_, arg1: $Player, arg2: $RegistryAccess): void;
        static receiveOpenAugmentScreen(arg0: $PlayerAugments$OpenAugmentScreenPacket_, arg1: $Player, arg2: $RegistryAccess): void;
        static receiveToggleAugment(arg0: $PlayerAugments$AugmentPlayerTogglePacket_, arg1: $Player, arg2: $RegistryAccess): void;
        static refreshActiveAugments(arg0: $ServerPlayer): void;
        static allAugments: $Map<$ResourceLocation, $Augment>;
        constructor();
    }
    export class $PlayerAugments$AugmentPlayerTogglePacket extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        id(): $ResourceLocation;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$PlayerAugments$AugmentPlayerTogglePacket>;
        constructor(id: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $PlayerAugments$AugmentPlayerTogglePacket}.
     */
    export type $PlayerAugments$AugmentPlayerTogglePacket_ = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export class $PlayerAugments$LoadPlayerAugmentsToMachinePacket extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$PlayerAugments$LoadPlayerAugmentsToMachinePacket>;
        constructor(position: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $PlayerAugments$LoadPlayerAugmentsToMachinePacket}.
     */
    export type $PlayerAugments$LoadPlayerAugmentsToMachinePacket_ = { position?: $BlockPos_,  } | [position?: $BlockPos_, ];
    export class $AugmentApplicationEntity extends $NetworkedBlockEntity implements $MultiblockMachineController, $GeoBlockEntity, $ExtendedMenuProvider, $ItemApi$BlockProvider, $EnergyApi$BlockProvider, $ScreenProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getProgress(): number;
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        getInventoryStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
        saveExtraData(arg0: $FriendlyByteBuf): void;
        researchAugment(arg0: $ResourceLocation_, arg1: boolean, arg2: $Player): void;
        installAugmentToPlayer(arg0: $ResourceLocation_, arg1: $Player): void;
        removeAugmentFromPlayer(arg0: $ResourceLocation_, arg1: $Player): void;
        static toggleAugmentForPlayer(arg0: $ResourceLocation_, arg1: $Player): void;
        hasPlayerAugment(arg0: $ResourceLocation_, arg1: $Player): boolean;
        loadResearchesFromPlayer(arg0: $Player): void;
        loadAvailableStations(arg0: $Player): void;
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
        getDisplayedInventory(): $Container;
        getScreenHandlerType(): $MenuType<never>;
        showExpansionPanel(): boolean;
        showEnergyUsage(): boolean;
        showEnergyTransfer(): boolean;
        registerControllers(arg0: $AnimatableManager$ControllerRegistrar_): void;
        getAnimatableInstanceCache(): $AnimatableInstanceCache;
        getDisplayName(): $Component;
        addMultiblockToNbt(arg0: $CompoundTag_): void;
        loadMultiblockNbtData(arg0: $CompoundTag_): void;
        getNextMissingCore(): $BlockPos;
        tryPlaceNextCore(arg0: $Player): boolean;
        initMultiblock(arg0: $BlockState_): boolean;
        onCoreBroken(arg0: $BlockPos_): void;
        onControllerBroken(): void;
        getTick(arg0: $Object): number;
        getAnimData<D>(arg0: $SerializableDataTicket<D>): D;
        setAnimData<D>(arg0: $SerializableDataTicket<D>, arg1: D): void;
        triggerAnim(arg0: string, arg1: string): void;
        stopTriggeredAnim(arg0: string, arg1: string): void;
        getExtraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        inputOptionsEnabled(): boolean;
        getDisplayedEnergyTransfer(): number;
        getBlockFacingProperty(): $Property<$Direction>;
        hasRedstoneControlAvailable(): boolean;
        receivedRedstoneSignal(): number;
        currentRedstoneEffect(): string;
        getInteractableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        showEnergy(): boolean;
        showArmor(): boolean;
        getEnergyConfiguration(): $ScreenProvider$BarConfiguration;
        getFluidConfiguration(): $ScreenProvider$BarConfiguration;
        getWikiLink(): (string) | undefined;
        getIndicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        getBoneResetTime(): number;
        shouldPlayAnimsWhileGamePaused(): boolean;
        animatableCacheOverride(): $AnimatableInstanceCache;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        static maxEnergyStored: number;
        researchedAugments: $Set<$ResourceLocation>;
        level: $Level;
        screenInvOverride: boolean;
        availableStations: $HashMap<number, $AugmentApplicationEntity$ResearchState>;
        static ATTACHMENTS_NBT_KEY: string;
        static maxEnergyTransfer: number;
        inventory: $SimpleInventoryStorage;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
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
        get screenHandlerType(): $MenuType<never>;
        get animatableInstanceCache(): $AnimatableInstanceCache;
        get displayName(): $Component;
        get nextMissingCore(): $BlockPos;
        get extraExtensionLabels(): $List<$Tuple<$Component, $Component>>;
        get displayedEnergyTransfer(): number;
        get blockFacingProperty(): $Property<$Direction>;
        get interactableFluidStorages(): $List<$FluidApi$SingleSlotStorage>;
        get energyConfiguration(): $ScreenProvider$BarConfiguration;
        get fluidConfiguration(): $ScreenProvider$BarConfiguration;
        get wikiLink(): (string) | undefined;
        get indicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        get boneResetTime(): number;
    }
    export class $PlayerAugments$AugmentApplicatorOperation extends $Enum<$PlayerAugments$AugmentApplicatorOperation> {
        static values(): $PlayerAugments$AugmentApplicatorOperation[];
        static valueOf(arg0: string): $PlayerAugments$AugmentApplicatorOperation;
        static RESEARCH: $PlayerAugments$AugmentApplicatorOperation;
        static ADD: $PlayerAugments$AugmentApplicatorOperation;
        static NEEDS_INIT: $PlayerAugments$AugmentApplicatorOperation;
        static REMOVE: $PlayerAugments$AugmentApplicatorOperation;
        static NONE: $PlayerAugments$AugmentApplicatorOperation;
    }
    /**
     * Values that may be interpreted as {@link $PlayerAugments$AugmentApplicatorOperation}.
     */
    export type $PlayerAugments$AugmentApplicatorOperation_ = "research" | "add" | "remove" | "none" | "needs_init";
    export class $AugmentResearchStationBlockEntity extends $BlockEntity implements $MultiblockMachineController {
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
        addMultiblockToNbt(arg0: $CompoundTag_): void;
        loadMultiblockNbtData(arg0: $CompoundTag_): void;
        getNextMissingCore(): $BlockPos;
        tryPlaceNextCore(arg0: $Player): boolean;
        initMultiblock(arg0: $BlockState_): boolean;
        onCoreBroken(arg0: $BlockPos_): void;
        onControllerBroken(): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get connectedCores(): $ArrayList<$BlockPos>;
        get facingForMultiblock(): $Direction;
        get posForMultiblock(): $BlockPos;
        get worldForMultiblock(): $Level;
        get inventoryForMultiblock(): $ItemApi$InventoryStorage;
        get corePositions(): $List<$Vec3i>;
        get nextMissingCore(): $BlockPos;
    }
    export class $AugmentApplicationEntity$ResearchState {
        getWorkTime(): number;
        getSelectedResearch(): $ResourceLocation;
        getResearchStartedAt(): number;
        getWorking(): boolean;
        getType(): $Block;
        researchStartedAt: number;
        selectedResearch: $ResourceLocation;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AugmentApplicationEntity$ResearchState>;
        working: boolean;
        type: $Block;
        workTime: number;
        constructor(arg0: $Block_, arg1: boolean, arg2: $ResourceLocation_, arg3: number, arg4: number);
    }
    export class $PlayerAugments$OpenAugmentScreenPacket extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$PlayerAugments$OpenAugmentScreenPacket>;
        constructor(position: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $PlayerAugments$OpenAugmentScreenPacket}.
     */
    export type $PlayerAugments$OpenAugmentScreenPacket_ = { position?: $BlockPos_,  } | [position?: $BlockPos_, ];
    export class $PlayerAugmentsClient {
        static receiveAugmentState(arg0: $Map_<$ResourceLocation_, $Augment$AugmentState_>): void;
        constructor();
    }
    export class $PlayerAugments$AugmentInstallTriggerPacket extends $Record implements $CustomPacketPayload {
        operationId(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        id(): $ResourceLocation;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$PlayerAugments$AugmentInstallTriggerPacket>;
        constructor(position: $BlockPos_, id: $ResourceLocation_, operationId: number);
    }
    /**
     * Values that may be interpreted as {@link $PlayerAugments$AugmentInstallTriggerPacket}.
     */
    export type $PlayerAugments$AugmentInstallTriggerPacket_ = { id?: $ResourceLocation_, position?: $BlockPos_, operationId?: number,  } | [id?: $ResourceLocation_, position?: $BlockPos_, operationId?: number, ];
}
