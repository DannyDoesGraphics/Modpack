import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $List, $List_ } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Tuple } from "@package/net/minecraft/util";
import { $Container } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $RegistryAccess, $Vec3i, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $InOutInventoryStorage } from "@package/rearth/oritech/api/item/containers";
import { $ItemApi$BlockProvider, $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record } from "@package/java/lang";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ScreenProvider$ArrowConfiguration, $ScreenProvider, $ScreenProvider$GuiSlot, $ComparatorOutputProvider, $ScreenProvider$BarConfiguration, $InventoryInputMode } from "@package/rearth/oritech/util";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$EnergyStorage, $EnergyApi$BlockProvider } from "@package/rearth/oritech/api/energy";
import { $FluidApi$SingleSlotStorage } from "@package/rearth/oritech/api/fluid";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $NetworkedBlockEntity, $NetworkedEventHandler } from "@package/rearth/oritech/api/networking";
import { $ExtendedMenuProvider } from "@package/dev/architectury/registry/menu";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/rearth/oritech/block/entity/accelerator" {
    export class $AcceleratorParticleLogic$ActiveParticle {
        position: $Vec3;
        velocity: number;
        lastGate: $BlockPos;
        lastBendDistance2: number;
        nextGate: $BlockPos;
        lastBendDistance: number;
        constructor(arg0: $Vec3_, arg1: number, arg2: $BlockPos_, arg3: $BlockPos_);
    }
    export class $AcceleratorSensorBlockEntity extends $BlockEntity implements $BlockEntityTicker<$AcceleratorSensorBlockEntity>, $ComparatorOutputProvider {
        measureParticle(arg0: $AcceleratorParticleLogic$ActiveParticle): void;
        getComparatorOutput(): number;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $AcceleratorSensorBlockEntity): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get comparatorOutput(): number;
    }
    export class $AcceleratorMotorBlockEntity extends $BlockEntity implements $EnergyApi$BlockProvider {
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $AcceleratorControllerBlockEntity extends $BlockEntity implements $BlockEntityTicker<$AcceleratorControllerBlockEntity>, $ItemApi$BlockProvider, $ExtendedMenuProvider, $ScreenProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getParticle(): $AcceleratorParticleLogic$ActiveParticle;
        getProgress(): number;
        static receiveTrail(arg0: $AcceleratorControllerBlockEntity$ParticleRenderTrail_, arg1: $Level_, arg2: $RegistryAccess): void;
        static receiveEvent(arg0: $AcceleratorControllerBlockEntity$LastEventPacket_, arg1: $Level_, arg2: $RegistryAccess): void;
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
        injectParticle(): void;
        onParticleCollided(arg0: number, arg1: $Vec3_, arg2: $AcceleratorControllerBlockEntity): void;
        onParticleExited(arg0: $Vec3_, arg1: $Vec3_, arg2: $BlockPos_, arg3: $Vec3_, arg4: $AcceleratorControllerBlockEntity$ParticleEvent_): void;
        onParticleMoved(arg0: $List_<$Vec3_>): void;
        handleParticleEntityCollision(arg0: $BlockPos_, arg1: $AcceleratorParticleLogic$ActiveParticle, arg2: number, arg3: $LivingEntity): number;
        handleParticleBlockCollision(arg0: $BlockPos_, arg1: $AcceleratorParticleLogic$ActiveParticle, arg2: number, arg3: $BlockState_): number;
        handleParticleMotorInteraction(arg0: $BlockPos_): void;
        removeParticleDueToCollision(): void;
        getDisplayName(): $Component;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $AcceleratorControllerBlockEntity): void;
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
        getEnergyConfiguration(): $ScreenProvider$BarConfiguration;
        getFluidConfiguration(): $ScreenProvider$BarConfiguration;
        getWikiLink(): (string) | undefined;
        getIndicatorConfiguration(): $ScreenProvider$ArrowConfiguration;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        level: $Level;
        activeItemParticle: $ItemStack;
        lastEvent: $AcceleratorControllerBlockEntity$LastEventPacket;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $InOutInventoryStorage;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        displayTrail: $List<$Vec3>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get particle(): $AcceleratorParticleLogic$ActiveParticle;
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
    export class $AcceleratorControllerBlockEntity$ParticleRenderTrail extends $Record implements $CustomPacketPayload {
        particleTrail(): $List<$Vec3>;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$AcceleratorControllerBlockEntity$ParticleRenderTrail>;
        constructor(position: $BlockPos_, particleTrail: $List_<$Vec3_>);
    }
    /**
     * Values that may be interpreted as {@link $AcceleratorControllerBlockEntity$ParticleRenderTrail}.
     */
    export type $AcceleratorControllerBlockEntity$ParticleRenderTrail_ = { particleTrail?: $List_<$Vec3_>, position?: $BlockPos_,  } | [particleTrail?: $List_<$Vec3_>, position?: $BlockPos_, ];
    export class $AcceleratorParticleLogic$CompPair<A, B> extends $Tuple<A, B> {
        constructor(arg0: A, arg1: B);
    }
    export class $AcceleratorParticleLogic {
        static resetCachedGate(arg0: $BlockPos_): void;
        static resetNearbyCache(arg0: $BlockPos_): void;
        static onTickEnd(): void;
        findNextGate(arg0: $BlockPos_, arg1: $Vec3i, arg2: number): $BlockPos;
        static getParticleBendDist(arg0: number, arg1: number): number;
        static getMaxGateDist(arg0: number): number;
        static getRequiredBendDist(arg0: number): number;
        update(arg0: $AcceleratorParticleLogic$ActiveParticle): void;
        constructor(arg0: $BlockPos_, arg1: $ServerLevel, arg2: $AcceleratorControllerBlockEntity);
    }
    export class $ParticleCollectorBlockEntity extends $BlockEntity implements $BlockEntityTicker<$ParticleCollectorBlockEntity>, $EnergyApi$BlockProvider {
        triggerAnimation(): void;
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        onParticleCollided(): void;
        onParticleCollided(arg0: number): void;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $ParticleCollectorBlockEntity): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $AcceleratorControllerBlockEntity$LastEventPacket extends $Record implements $CustomPacketPayload {
        lastEvent(): $AcceleratorControllerBlockEntity$ParticleEvent;
        lastEventSpeed(): number;
        lastEventPosition(): $BlockPos;
        activeParticle(): $ItemStack;
        minBendDist(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$AcceleratorControllerBlockEntity$LastEventPacket>;
        constructor(position: $BlockPos_, lastEvent: $AcceleratorControllerBlockEntity$ParticleEvent_, lastEventSpeed: number, lastEventPosition: $BlockPos_, minBendDist: number, activeParticle: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $AcceleratorControllerBlockEntity$LastEventPacket}.
     */
    export type $AcceleratorControllerBlockEntity$LastEventPacket_ = { activeParticle?: $ItemStack_, position?: $BlockPos_, lastEventPosition?: $BlockPos_, minBendDist?: number, lastEvent?: $AcceleratorControllerBlockEntity$ParticleEvent_, lastEventSpeed?: number,  } | [activeParticle?: $ItemStack_, position?: $BlockPos_, lastEventPosition?: $BlockPos_, minBendDist?: number, lastEvent?: $AcceleratorControllerBlockEntity$ParticleEvent_, lastEventSpeed?: number, ];
    export class $BlackHoleBlockEntity extends $NetworkedBlockEntity implements $NetworkedEventHandler {
        onNetworkUpdated(): void;
        static basicRaycast(arg0: $Vec3_, arg1: $Vec3_, arg2: number, arg3: $Level_): $BlockPos;
        pullTime: number;
        level: $Level;
        currentlyPullingFrom: $BlockPos;
        static ATTACHMENTS_NBT_KEY: string;
        pullingStartedAt: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        currentlyPulling: $BlockState;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $AcceleratorControllerBlockEntity$ParticleEvent extends $Enum<$AcceleratorControllerBlockEntity$ParticleEvent> {
        static values(): $AcceleratorControllerBlockEntity$ParticleEvent[];
        static valueOf(arg0: string): $AcceleratorControllerBlockEntity$ParticleEvent;
        static EXITED_FAST: $AcceleratorControllerBlockEntity$ParticleEvent;
        static IDLE: $AcceleratorControllerBlockEntity$ParticleEvent;
        static ERROR: $AcceleratorControllerBlockEntity$ParticleEvent;
        static ACCELERATING: $AcceleratorControllerBlockEntity$ParticleEvent;
        static COLLIDED: $AcceleratorControllerBlockEntity$ParticleEvent;
        static EXITED_NO_GATE: $AcceleratorControllerBlockEntity$ParticleEvent;
    }
    /**
     * Values that may be interpreted as {@link $AcceleratorControllerBlockEntity$ParticleEvent}.
     */
    export type $AcceleratorControllerBlockEntity$ParticleEvent_ = "idle" | "error" | "accelerating" | "collided" | "exited_fast" | "exited_no_gate";
}
