import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MachineAddonController, $ComparatorOutputProvider, $MachineAddonController$BaseAddonData, $MachineAddonProvider } from "@package/rearth/oritech/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$BlockProvider, $EnergyApi$EnergyStorage } from "@package/rearth/oritech/api/energy";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $HashSet } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $FluidApi$FluidStorage, $FluidApi$BlockProvider } from "@package/rearth/oritech/api/fluid";
import { $BlockPos, $BlockPos_, $Direction_, $RegistryAccess } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ItemApi$BlockProvider, $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $ExtendedMenuProvider } from "@package/dev/architectury/registry/menu";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ShrinkerBlockEntity$ShrunkAddonData } from "@package/rearth/oritech/block/entity/interaction";
import { $Enum, $Record } from "@package/java/lang";
import { $MachineAddonBlock$AddonSettings } from "@package/rearth/oritech/block/blocks/addons";
import { $BlockEntityType, $BlockEntityTicker, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/rearth/oritech/block/entity/addons" {
    export class $InventoryProxyAddonBlockEntity$InventoryProxySlotSelectorPacket extends $Record implements $CustomPacketPayload {
        slot(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$InventoryProxyAddonBlockEntity$InventoryProxySlotSelectorPacket>;
        constructor(position: $BlockPos_, slot: number);
    }
    /**
     * Values that may be interpreted as {@link $InventoryProxyAddonBlockEntity$InventoryProxySlotSelectorPacket}.
     */
    export type $InventoryProxyAddonBlockEntity$InventoryProxySlotSelectorPacket_ = { slot?: number, position?: $BlockPos_,  } | [slot?: number, position?: $BlockPos_, ];
    export class $RedstoneAddonBlockEntity$RedstoneAddonClientUpdate extends $Record implements $CustomPacketPayload {
        controllerPos(): $BlockPos;
        currentOutput(): number;
        targetSlot(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        targetMode(): number;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$RedstoneAddonBlockEntity$RedstoneAddonClientUpdate>;
        constructor(position: $BlockPos_, controllerPos: $BlockPos_, targetSlot: number, targetMode: number, currentOutput: number);
    }
    /**
     * Values that may be interpreted as {@link $RedstoneAddonBlockEntity$RedstoneAddonClientUpdate}.
     */
    export type $RedstoneAddonBlockEntity$RedstoneAddonClientUpdate_ = { position?: $BlockPos_, targetMode?: number, controllerPos?: $BlockPos_, targetSlot?: number, currentOutput?: number,  } | [position?: $BlockPos_, targetMode?: number, controllerPos?: $BlockPos_, targetSlot?: number, currentOutput?: number, ];
    export class $RedstoneAddonBlockEntity$RedstoneAddonServerUpdate extends $Record implements $CustomPacketPayload {
        controllerPos(): $BlockPos;
        currentOutput(): number;
        targetSlot(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        position(): $BlockPos;
        targetMode(): number;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PACKET_ID: $CustomPacketPayload$Type<$RedstoneAddonBlockEntity$RedstoneAddonServerUpdate>;
        constructor(position: $BlockPos_, controllerPos: $BlockPos_, targetSlot: number, targetMode: number, currentOutput: number);
    }
    /**
     * Values that may be interpreted as {@link $RedstoneAddonBlockEntity$RedstoneAddonServerUpdate}.
     */
    export type $RedstoneAddonBlockEntity$RedstoneAddonServerUpdate_ = { position?: $BlockPos_, targetMode?: number, controllerPos?: $BlockPos_, targetSlot?: number, currentOutput?: number,  } | [position?: $BlockPos_, targetMode?: number, controllerPos?: $BlockPos_, targetSlot?: number, currentOutput?: number, ];
    export class $EnergyAcceptorAddonBlockEntity extends $AddonBlockEntity implements $EnergyApi$BlockProvider {
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static pendingInits: $HashSet<$MachineAddonController>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $InventoryProxyAddonBlockEntity extends $AddonBlockEntity implements $ItemApi$BlockProvider, $ExtendedMenuProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        setTargetSlot(arg0: number): void;
        static receiveSlotSelection(arg0: $InventoryProxyAddonBlockEntity$InventoryProxySlotSelectorPacket_, arg1: $Player, arg2: $RegistryAccess): void;
        getInventoryStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
        saveExtraData(arg0: $FriendlyByteBuf): void;
        getDisplayName(): $Component;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static pendingInits: $HashSet<$MachineAddonController>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        set targetSlot(value: number);
        get displayName(): $Component;
    }
    export class $CombiAddonEntity extends $AddonBlockEntity {
        hasFluid(): boolean;
        getAsSettings(): $MachineAddonBlock$AddonSettings;
        getQuarryCount(): number;
        getYieldCount(): number;
        hasCropFilter(): boolean;
        hasSilk(): boolean;
        getBaseData(): $MachineAddonController$BaseAddonData;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static pendingInits: $HashSet<$MachineAddonController>;
        storedData: $ShrinkerBlockEntity$ShrunkAddonData;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get asSettings(): $MachineAddonBlock$AddonSettings;
        get quarryCount(): number;
        get yieldCount(): number;
        get baseData(): $MachineAddonController$BaseAddonData;
    }
    export class $RedstoneAddonBlockEntity extends $AddonBlockEntity implements $BlockEntityTicker<$RedstoneAddonBlockEntity>, $ExtendedMenuProvider, $ComparatorOutputProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getComparatorOutput(): number;
        static receiveOnServer(arg0: $RedstoneAddonBlockEntity$RedstoneAddonServerUpdate_, arg1: $Player, arg2: $RegistryAccess): void;
        static receiveOnClient(arg0: $RedstoneAddonBlockEntity$RedstoneAddonClientUpdate_, arg1: $Level_, arg2: $RegistryAccess): void;
        getCachedController(): $RedstoneAddonBlockEntity$RedstoneControllable;
        setRedstonePowered(arg0: boolean): void;
        saveExtraData(arg0: $FriendlyByteBuf): void;
        sendDataToClient(): void;
        sendDataToServer(): void;
        getDisplayName(): $Component;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $RedstoneAddonBlockEntity): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        level: $Level;
        monitoredSlot: number;
        activeMode: $RedstoneAddonBlockEntity$RedstoneMode;
        currentOutput: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static pendingInits: $HashSet<$MachineAddonController>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get comparatorOutput(): number;
        get cachedController(): $RedstoneAddonBlockEntity$RedstoneControllable;
        set redstonePowered(value: boolean);
        get displayName(): $Component;
    }
    export class $SteamBoilerAddonBlockEntity extends $AddonBlockEntity implements $FluidApi$BlockProvider {
        getFluidStorage(arg0: $Direction_): $FluidApi$FluidStorage;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static pendingInits: $HashSet<$MachineAddonController>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $RedstoneAddonBlockEntity$RedstoneControllable {
    }
    export interface $RedstoneAddonBlockEntity$RedstoneControllable extends $ComparatorOutputProvider {
        getComparatorOutput(): number;
        getComparatorEnergyAmount(): number;
        getComparatorSlotAmount(arg0: number): number;
        getComparatorProgress(): number;
        getComparatorActiveState(): number;
        onRedstoneEvent(arg0: boolean): void;
        get comparatorOutput(): number;
        get comparatorEnergyAmount(): number;
        get comparatorProgress(): number;
        get comparatorActiveState(): number;
    }
    export class $AddonBlockEntity extends $BlockEntity implements $MachineAddonProvider {
        getControllerPos(): $BlockPos;
        setControllerPos(arg0: $BlockPos_): void;
        static completeInits(): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static pendingInits: $HashSet<$MachineAddonController>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $RedstoneAddonBlockEntity$RedstoneMode extends $Enum<$RedstoneAddonBlockEntity$RedstoneMode> {
        static values(): $RedstoneAddonBlockEntity$RedstoneMode[];
        static valueOf(arg0: string): $RedstoneAddonBlockEntity$RedstoneMode;
        static OUTPUT_POWER: $RedstoneAddonBlockEntity$RedstoneMode;
        static OUTPUT_ACTIVE: $RedstoneAddonBlockEntity$RedstoneMode;
        static INPUT_CONTROL: $RedstoneAddonBlockEntity$RedstoneMode;
        static OUTPUT_PROGRESS: $RedstoneAddonBlockEntity$RedstoneMode;
        static OUTPUT_SLOT: $RedstoneAddonBlockEntity$RedstoneMode;
    }
    /**
     * Values that may be interpreted as {@link $RedstoneAddonBlockEntity$RedstoneMode}.
     */
    export type $RedstoneAddonBlockEntity$RedstoneMode_ = "output_power" | "output_slot" | "output_progress" | "output_active" | "input_control";
}
