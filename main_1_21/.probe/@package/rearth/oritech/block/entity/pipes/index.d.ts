import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$EnergyStorage, $EnergyApi$BlockProvider } from "@package/rearth/oritech/api/energy";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $BlockLookupCache_ } from "@package/rearth/oritech/api/lookup";
import { $HashSet, $HashMap, $List, $Map_, $List_, $Map, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Tuple } from "@package/net/minecraft/util";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $RegistryAccess, $NonNullList, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $NetworkedBlockEntity } from "@package/rearth/oritech/api/networking";
import { $SimpleInventoryStorage } from "@package/rearth/oritech/api/item/containers";
import { $ItemApi$BlockProvider, $ItemApi$InventoryStorage } from "@package/rearth/oritech/api/item";
import { $ExtendedMenuProvider } from "@package/dev/architectury/registry/menu";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Record, $Runnable_ } from "@package/java/lang";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/rearth/oritech/block/entity/pipes" {
    export class $ExtractablePipeInterfaceEntity extends $GenericPipeInterfaceEntity {
        invalidateTargetCache(): void;
        static MAX_SEARCH_COUNT: number;
        level: $Level;
        connectedBooster: $BlockPos;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $ExtractablePipeInterfaceEntity$CachedTarget<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ExtractablePipeInterfaceEntity$CachedTarget}.
     */
    export type $ExtractablePipeInterfaceEntity$CachedTarget_<T> = { side?: $Direction_, pos?: $BlockPos_, lookup?: $BlockLookupCache_<any>,  } | [side?: $Direction_, pos?: $BlockPos_, lookup?: $BlockLookupCache_<any>, ];
    export class $GenericPipeInterfaceEntity$PipeNetworkData extends $SavedData {
        static fromNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $GenericPipeInterfaceEntity$PipeNetworkData;
        machineInterfaces: $HashMap<$BlockPos, $Set<$BlockPos>>;
        pipeNetworkLinks: $HashMap<$BlockPos, number>;
        pipeNetworks: $HashMap<number, $Set<$BlockPos>>;
        machinePipeNeighbors: $HashMap<$BlockPos, $Set<$Direction>>;
        static TYPE: $SavedData$Factory<$GenericPipeInterfaceEntity$PipeNetworkData>;
        pipes: $HashSet<$BlockPos>;
        pipeNetworkInterfaces: $HashMap<number, $Set<$Tuple<$BlockPos, $Direction>>>;
        constructor();
    }
    export class $GenericPipeInterfaceEntity$FloodFillSearch {
    }
    export class $ItemFilterBlockEntity$FilterBlockInventory extends $SimpleInventoryStorage {
        canInsert(arg0: $ItemStack_): boolean;
        heldStacks: $NonNullList<$ItemStack>;
        constructor(arg0: $ItemFilterBlockEntity, arg1: number, arg2: $Runnable_);
    }
    export class $EnergyPipeInterfaceEntity extends $GenericPipeInterfaceEntity implements $EnergyApi$BlockProvider {
        getEnergyStorage(arg0: $Direction_): $EnergyApi$EnergyStorage;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $GenericPipeInterfaceEntity): void;
        static MAX_SEARCH_COUNT: number;
        level: $Level;
        connectedBooster: $BlockPos;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $ItemFilterBlockEntity$FilterData extends $Record {
        useNbt(): boolean;
        useComponents(): boolean;
        useWhitelist(): boolean;
        items(): $Map<number, $ItemStack>;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemFilterBlockEntity$FilterData>;
        constructor(useNbt: boolean, useWhitelist: boolean, useComponents: boolean, items: $Map_<number, $ItemStack_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterBlockEntity$FilterData}.
     */
    export type $ItemFilterBlockEntity$FilterData_ = { items?: $Map_<number, $ItemStack_>, useNbt?: boolean, useWhitelist?: boolean, useComponents?: boolean,  } | [items?: $Map_<number, $ItemStack_>, useNbt?: boolean, useWhitelist?: boolean, useComponents?: boolean, ];
    export class $GenericPipeInterfaceEntity extends $BlockEntity implements $BlockEntityTicker<$GenericPipeInterfaceEntity> {
        isBoostAvailable(): boolean;
        static findNetworkTargets(arg0: $BlockPos_, arg1: $GenericPipeInterfaceEntity$PipeNetworkData): $Set<$Tuple<$BlockPos, $Direction>>;
        onBoostUsed(): void;
        static removeStaleMachinePipeNeighbors(arg0: $BlockPos_, arg1: $GenericPipeInterfaceEntity$PipeNetworkData): void;
        static removeNode(arg0: $Level_, arg1: $BlockPos_, arg2: boolean, arg3: $BlockState_, arg4: $GenericPipeInterfaceEntity$PipeNetworkData): void;
        static addNode(arg0: $Level_, arg1: $BlockPos_, arg2: boolean, arg3: $BlockState_, arg4: $GenericPipeInterfaceEntity$PipeNetworkData): void;
        static MAX_SEARCH_COUNT: number;
        level: $Level;
        connectedBooster: $BlockPos;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get boostAvailable(): boolean;
    }
    export class $ItemPipeInterfaceEntity$RenderStackData extends $Record implements $CustomPacketPayload {
        startedAt(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        path(): $List<$BlockPos>;
        self(): $BlockPos;
        pathLength(): number;
        rendered(): $ItemStack;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static PIPE_ITEMS_ID: $CustomPacketPayload$Type<$ItemPipeInterfaceEntity$RenderStackData>;
        constructor(self: $BlockPos_, rendered: $ItemStack_, path: $List_<$BlockPos_>, startedAt: number, pathLength: number);
    }
    /**
     * Values that may be interpreted as {@link $ItemPipeInterfaceEntity$RenderStackData}.
     */
    export type $ItemPipeInterfaceEntity$RenderStackData_ = { rendered?: $ItemStack_, path?: $List_<$BlockPos_>, self?: $BlockPos_, pathLength?: number, startedAt?: number,  } | [rendered?: $ItemStack_, path?: $List_<$BlockPos_>, self?: $BlockPos_, pathLength?: number, startedAt?: number, ];
    export class $FluidPipeInterfaceEntity extends $ExtractablePipeInterfaceEntity {
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $GenericPipeInterfaceEntity): void;
        static MAX_SEARCH_COUNT: number;
        level: $Level;
        connectedBooster: $BlockPos;
        static MAX_TRANSFER_RATE: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $ItemFilterBlockEntity extends $NetworkedBlockEntity implements $ItemApi$BlockProvider, $ExtendedMenuProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        static handleClientUpdate(arg0: $ItemFilterBlockEntity$ItemFilterPayload_, arg1: $Player, arg2: $RegistryAccess): void;
        setFilterSettings(arg0: $ItemFilterBlockEntity$FilterData_): void;
        getInventoryStorage(arg0: $Direction_): $ItemApi$InventoryStorage;
        saveExtraData(arg0: $FriendlyByteBuf): void;
        getFilterSettings(): $ItemFilterBlockEntity$FilterData;
        getDisplayName(): $Component;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $ItemFilterBlockEntity$FilterBlockInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get displayName(): $Component;
    }
    export class $ItemPipeInterfaceEntity extends $ExtractablePipeInterfaceEntity {
        static receiveVisualItemsPacket(arg0: $ItemPipeInterfaceEntity$RenderStackData_, arg1: $Level_, arg2: $RegistryAccess): void;
        static calculatePathLength(arg0: number): number;
        tick(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $GenericPipeInterfaceEntity): void;
        static MAX_SEARCH_COUNT: number;
        level: $Level;
        connectedBooster: $BlockPos;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        activeStacks: $Set<$ItemPipeInterfaceEntity$RenderStackData>;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
    }
    export class $ItemFilterBlockEntity$ItemFilterPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        data(): $ItemFilterBlockEntity$FilterData;
        pos(): $BlockPos;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static FILTER_PACKET_ID: $CustomPacketPayload$Type<$ItemFilterBlockEntity$ItemFilterPayload>;
        static PACKET_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemFilterBlockEntity$ItemFilterPayload>;
        constructor(pos: $BlockPos_, data: $ItemFilterBlockEntity$FilterData_);
    }
    /**
     * Values that may be interpreted as {@link $ItemFilterBlockEntity$ItemFilterPayload}.
     */
    export type $ItemFilterBlockEntity$ItemFilterPayload_ = { pos?: $BlockPos_, data?: $ItemFilterBlockEntity$FilterData_,  } | [pos?: $BlockPos_, data?: $ItemFilterBlockEntity$FilterData_, ];
}
