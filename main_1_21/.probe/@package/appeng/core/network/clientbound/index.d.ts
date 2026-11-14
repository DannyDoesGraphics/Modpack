import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $IncrementalUpdateHelper, $GridInventoryEntry } from "@package/appeng/menu/me/common";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload$Type } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID, $List, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $PatternContainerGroup_, $PatternContainerGroup } from "@package/appeng/api/implementations/blockentities";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";
import { $CraftingStatus, $CraftingPlanSummary } from "@package/appeng/menu/me/crafting";
import { $KeyCounter, $AEKey } from "@package/appeng/api/stacks";
import { $Consumer_ } from "@package/java/util/function";
import { $ILinkStatus, $AEKeyFilter_ } from "@package/appeng/api/storage";
import { $BlockPos, $BlockPos_, $Direction_, $RegistryAccess, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ClientboundPacket } from "@package/appeng/core/network";
import { $NetworkStatus } from "@package/appeng/menu/me/networktool";
import { $Enum, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/core/network/clientbound" {
    export class $CraftingJobStatusPacket extends $Record implements $ClientboundPacket {
        jobId(): $UUID;
        requestedAmount(): number;
        handleOnClient(arg0: $Player): void;
        remainingAmount(): number;
        type(): $CustomPacketPayload$Type<$CraftingJobStatusPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $CraftingJobStatusPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        status(): $CraftingJobStatusPacket$Status;
        what(): $AEKey;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$CraftingJobStatusPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CraftingJobStatusPacket>;
        constructor(jobId: $UUID_, what: $AEKey, requestedAmount: number, remainingAmount: number, status: $CraftingJobStatusPacket$Status_);
    }
    /**
     * Values that may be interpreted as {@link $CraftingJobStatusPacket}.
     */
    export type $CraftingJobStatusPacket_ = { status?: $CraftingJobStatusPacket$Status_, remainingAmount?: number, jobId?: $UUID_, what?: $AEKey, requestedAmount?: number,  } | [status?: $CraftingJobStatusPacket$Status_, remainingAmount?: number, jobId?: $UUID_, what?: $AEKey, requestedAmount?: number, ];
    export class $CompassResponsePacket extends $Record implements $ClientboundPacket {
        requestedPos(): $ChunkPos;
        closestMeteorite(): ($BlockPos) | undefined;
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CompassResponsePacket>;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$CompassResponsePacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CompassResponsePacket>;
        constructor(requestedPos: $ChunkPos, closestMeteorite: ($BlockPos_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $CompassResponsePacket}.
     */
    export type $CompassResponsePacket_ = { requestedPos?: $ChunkPos, closestMeteorite?: ($BlockPos_) | undefined,  } | [requestedPos?: $ChunkPos, closestMeteorite?: ($BlockPos_) | undefined, ];
    export class $ClearPatternAccessTerminalPacket extends $Record implements $ClientboundPacket {
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$ClearPatternAccessTerminalPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $ClearPatternAccessTerminalPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ClearPatternAccessTerminalPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClearPatternAccessTerminalPacket>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $ClearPatternAccessTerminalPacket}.
     */
    export type $ClearPatternAccessTerminalPacket_ = {  } | [];
    export class $GuiDataSyncPacket extends $Record implements $ClientboundPacket {
        containerId(): number;
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$GuiDataSyncPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $GuiDataSyncPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        syncData(): number[];
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$GuiDataSyncPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GuiDataSyncPacket>;
        constructor(arg0: number, arg1: $Consumer_<$RegistryFriendlyByteBuf>, arg2: $RegistryAccess);
        constructor(containerId: number, syncData: number[]);
    }
    /**
     * Values that may be interpreted as {@link $GuiDataSyncPacket}.
     */
    export type $GuiDataSyncPacket_ = { containerId?: number, syncData?: number[],  } | [containerId?: number, syncData?: number[], ];
    export class $AssemblerAnimationPacket extends $Record implements $ClientboundPacket {
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$AssemblerAnimationPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $AssemblerAnimationPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        pos(): $BlockPos;
        what(): $AEKey;
        rate(): number;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$AssemblerAnimationPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AssemblerAnimationPacket>;
        constructor(pos: $BlockPos_, rate: number, what: $AEKey);
    }
    /**
     * Values that may be interpreted as {@link $AssemblerAnimationPacket}.
     */
    export type $AssemblerAnimationPacket_ = { what?: $AEKey, rate?: number, pos?: $BlockPos_,  } | [what?: $AEKey, rate?: number, pos?: $BlockPos_, ];
    export class $LightningPacket extends $Record implements $ClientboundPacket {
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$LightningPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $LightningPacket;
        x(): number;
        write(arg0: $RegistryFriendlyByteBuf): void;
        z(): number;
        y(): number;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$LightningPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LightningPacket>;
        constructor(x: number, y: number, z: number);
    }
    /**
     * Values that may be interpreted as {@link $LightningPacket}.
     */
    export type $LightningPacket_ = { y?: number, x?: number, z?: number,  } | [y?: number, x?: number, z?: number, ];
    export class $BlockTransitionEffectPacket$SoundMode extends $Enum<$BlockTransitionEffectPacket$SoundMode> {
        static values(): $BlockTransitionEffectPacket$SoundMode[];
        static valueOf(arg0: string): $BlockTransitionEffectPacket$SoundMode;
        static FLUID: $BlockTransitionEffectPacket$SoundMode;
        static BLOCK: $BlockTransitionEffectPacket$SoundMode;
        static NONE: $BlockTransitionEffectPacket$SoundMode;
    }
    /**
     * Values that may be interpreted as {@link $BlockTransitionEffectPacket$SoundMode}.
     */
    export type $BlockTransitionEffectPacket$SoundMode_ = "block" | "fluid" | "none";
    export class $MEInventoryUpdatePacket$Builder {
        addChanges(arg0: $IncrementalUpdateHelper, arg1: $KeyCounter, arg2: $Set_<$AEKey>, arg3: $KeyCounter): void;
        buildAndSend(arg0: $Consumer_<$MEInventoryUpdatePacket>): void;
        addFull(arg0: $IncrementalUpdateHelper, arg1: $KeyCounter, arg2: $Set_<$AEKey>, arg3: $KeyCounter): void;
        add(arg0: $GridInventoryEntry): void;
        build(): $List<$MEInventoryUpdatePacket>;
        setFilter(arg0: $AEKeyFilter_): void;
        constructor(arg0: number, arg1: boolean, arg2: $RegistryAccess);
        set filter(value: $AEKeyFilter_);
    }
    export class $MatterCannonPacket extends $Record implements $ClientboundPacket {
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$MatterCannonPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $MatterCannonPacket;
        x(): number;
        len(): number;
        write(arg0: $RegistryFriendlyByteBuf): void;
        z(): number;
        y(): number;
        dz(): number;
        dx(): number;
        dy(): number;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$MatterCannonPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MatterCannonPacket>;
        constructor(x: number, y: number, z: number, dx: number, dy: number, dz: number, len: number);
    }
    /**
     * Values that may be interpreted as {@link $MatterCannonPacket}.
     */
    export type $MatterCannonPacket_ = { dz?: number, dy?: number, dx?: number, len?: number, z?: number, y?: number, x?: number,  } | [dz?: number, dy?: number, dx?: number, len?: number, z?: number, y?: number, x?: number, ];
    export class $SetLinkStatusPacket extends $Record implements $ClientboundPacket {
        linkStatus(): $ILinkStatus;
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$SetLinkStatusPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $SetLinkStatusPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$SetLinkStatusPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SetLinkStatusPacket>;
        constructor(linkStatus: $ILinkStatus);
    }
    /**
     * Values that may be interpreted as {@link $SetLinkStatusPacket}.
     */
    export type $SetLinkStatusPacket_ = { linkStatus?: $ILinkStatus,  } | [linkStatus?: $ILinkStatus, ];
    export class $ExportedGridContent extends $Record implements $ClientboundPacket {
        compressedData(): number[];
        handleOnClient(arg0: $Player): void;
        serialNumber(): number;
        type(): $CustomPacketPayload$Type<$ExportedGridContent>;
        contentType(): $ExportedGridContent$ContentType;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ExportedGridContent>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ExportedGridContent>;
        constructor(serialNumber: number, contentType: $ExportedGridContent$ContentType_, compressedData: number[]);
    }
    /**
     * Values that may be interpreted as {@link $ExportedGridContent}.
     */
    export type $ExportedGridContent_ = { compressedData?: number[], contentType?: $ExportedGridContent$ContentType_, serialNumber?: number,  } | [compressedData?: number[], contentType?: $ExportedGridContent$ContentType_, serialNumber?: number, ];
    export class $MockExplosionPacket extends $Record implements $ClientboundPacket {
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$MockExplosionPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $MockExplosionPacket;
        x(): number;
        write(arg0: $RegistryFriendlyByteBuf): void;
        z(): number;
        y(): number;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$MockExplosionPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MockExplosionPacket>;
        constructor(x: number, y: number, z: number);
    }
    /**
     * Values that may be interpreted as {@link $MockExplosionPacket}.
     */
    export type $MockExplosionPacket_ = { y?: number, x?: number, z?: number,  } | [y?: number, x?: number, z?: number, ];
    export class $CraftConfirmPlanPacket extends $Record implements $ClientboundPacket {
        plan(): $CraftingPlanSummary;
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CraftConfirmPlanPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $CraftConfirmPlanPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$CraftConfirmPlanPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CraftConfirmPlanPacket>;
        constructor(plan: $CraftingPlanSummary);
    }
    /**
     * Values that may be interpreted as {@link $CraftConfirmPlanPacket}.
     */
    export type $CraftConfirmPlanPacket_ = { plan?: $CraftingPlanSummary,  } | [plan?: $CraftingPlanSummary, ];
    export class $ExportedGridContent$ContentType extends $Enum<$ExportedGridContent$ContentType> {
        static values(): $ExportedGridContent$ContentType[];
        static valueOf(arg0: string): $ExportedGridContent$ContentType;
        static LAST_CHUNK: $ExportedGridContent$ContentType;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ExportedGridContent$ContentType>;
        static FIRST_CHUNK: $ExportedGridContent$ContentType;
        static CHUNK: $ExportedGridContent$ContentType;
    }
    /**
     * Values that may be interpreted as {@link $ExportedGridContent$ContentType}.
     */
    export type $ExportedGridContent$ContentType_ = "first_chunk" | "chunk" | "last_chunk";
    export class $ItemTransitionEffectPacket extends $Record implements $ClientboundPacket {
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$ItemTransitionEffectPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $ItemTransitionEffectPacket;
        x(): number;
        d(): $Direction;
        write(arg0: $RegistryFriendlyByteBuf): void;
        z(): number;
        y(): number;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ItemTransitionEffectPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemTransitionEffectPacket>;
        constructor(x: number, y: number, z: number, d: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $ItemTransitionEffectPacket}.
     */
    export type $ItemTransitionEffectPacket_ = { z?: number, y?: number, x?: number, d?: $Direction_,  } | [z?: number, y?: number, x?: number, d?: $Direction_, ];
    export class $CraftingJobStatusPacket$Status extends $Enum<$CraftingJobStatusPacket$Status> {
        static values(): $CraftingJobStatusPacket$Status[];
        static valueOf(arg0: string): $CraftingJobStatusPacket$Status;
        static CANCELLED: $CraftingJobStatusPacket$Status;
        static STARTED: $CraftingJobStatusPacket$Status;
        static FINISHED: $CraftingJobStatusPacket$Status;
    }
    /**
     * Values that may be interpreted as {@link $CraftingJobStatusPacket$Status}.
     */
    export type $CraftingJobStatusPacket$Status_ = "started" | "cancelled" | "finished";
    export class $PatternAccessTerminalPacket extends $Record implements $ClientboundPacket {
        static fullUpdate(arg0: number, arg1: number, arg2: number, arg3: $PatternContainerGroup_, arg4: $Int2ObjectMap<$ItemStack_>): $PatternAccessTerminalPacket;
        fullUpdate(): boolean;
        static incrementalUpdate(arg0: number, arg1: $Int2ObjectMap<$ItemStack_>): $PatternAccessTerminalPacket;
        handleOnClient(arg0: $Player): void;
        group(): $PatternContainerGroup;
        type(): $CustomPacketPayload$Type<$PatternAccessTerminalPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $PatternAccessTerminalPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        slots(): $Int2ObjectMap<$ItemStack>;
        inventoryId(): number;
        sortBy(): number;
        inventorySize(): number;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$PatternAccessTerminalPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PatternAccessTerminalPacket>;
        constructor(fullUpdate: boolean, inventoryId: number, inventorySize: number, sortBy: number, group: $PatternContainerGroup_, slots: $Int2ObjectMap<$ItemStack_>);
    }
    /**
     * Values that may be interpreted as {@link $PatternAccessTerminalPacket}.
     */
    export type $PatternAccessTerminalPacket_ = { inventoryId?: number, inventorySize?: number, slots?: $Int2ObjectMap<$ItemStack_>, group?: $PatternContainerGroup_, sortBy?: number, fullUpdate?: boolean,  } | [inventoryId?: number, inventorySize?: number, slots?: $Int2ObjectMap<$ItemStack_>, group?: $PatternContainerGroup_, sortBy?: number, fullUpdate?: boolean, ];
    export class $BlockTransitionEffectPacket extends $Record implements $ClientboundPacket {
        soundMode(): $BlockTransitionEffectPacket$SoundMode;
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$BlockTransitionEffectPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $BlockTransitionEffectPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        pos(): $BlockPos;
        direction(): $Direction;
        blockState(): $BlockState;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$BlockTransitionEffectPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BlockTransitionEffectPacket>;
        constructor(pos: $BlockPos_, blockState: $BlockState_, direction: $Direction_, soundMode: $BlockTransitionEffectPacket$SoundMode_);
    }
    /**
     * Values that may be interpreted as {@link $BlockTransitionEffectPacket}.
     */
    export type $BlockTransitionEffectPacket_ = { soundMode?: $BlockTransitionEffectPacket$SoundMode_, direction?: $Direction_, pos?: $BlockPos_, blockState?: $BlockState_,  } | [soundMode?: $BlockTransitionEffectPacket$SoundMode_, direction?: $Direction_, pos?: $BlockPos_, blockState?: $BlockState_, ];
    export class $MEInventoryUpdatePacket extends $Record implements $ClientboundPacket {
        fullUpdate(): boolean;
        encodedEntryCount(): number;
        encodedEntries(): $RegistryFriendlyByteBuf;
        static readEntry(arg0: $RegistryFriendlyByteBuf): $GridInventoryEntry;
        containerId(): number;
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$MEInventoryUpdatePacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $MEInventoryUpdatePacket;
        static builder(arg0: number, arg1: boolean, arg2: $RegistryAccess): $MEInventoryUpdatePacket$Builder;
        write(arg0: $RegistryFriendlyByteBuf): void;
        entries(): $List<$GridInventoryEntry>;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$MEInventoryUpdatePacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MEInventoryUpdatePacket>;
        constructor(fullUpdate: boolean, containerId: number, entries: $List_<$GridInventoryEntry>, encodedEntryCount: number, encodedEntries: $RegistryFriendlyByteBuf);
    }
    /**
     * Values that may be interpreted as {@link $MEInventoryUpdatePacket}.
     */
    export type $MEInventoryUpdatePacket_ = { encodedEntryCount?: number, fullUpdate?: boolean, entries?: $List_<$GridInventoryEntry>, encodedEntries?: $RegistryFriendlyByteBuf, containerId?: number,  } | [encodedEntryCount?: number, fullUpdate?: boolean, entries?: $List_<$GridInventoryEntry>, encodedEntries?: $RegistryFriendlyByteBuf, containerId?: number, ];
    export class $CraftingStatusPacket extends $Record implements $ClientboundPacket {
        containerId(): number;
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CraftingStatusPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $CraftingStatusPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        status(): $CraftingStatus;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$CraftingStatusPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CraftingStatusPacket>;
        constructor(containerId: number, status: $CraftingStatus);
    }
    /**
     * Values that may be interpreted as {@link $CraftingStatusPacket}.
     */
    export type $CraftingStatusPacket_ = { containerId?: number, status?: $CraftingStatus,  } | [containerId?: number, status?: $CraftingStatus, ];
    export class $NetworkStatusPacket extends $Record implements $ClientboundPacket {
        handleOnClient(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$NetworkStatusPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $NetworkStatusPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        status(): $NetworkStatus;
        handleOnClient(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$NetworkStatusPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $NetworkStatusPacket>;
        constructor(status: $NetworkStatus);
    }
    /**
     * Values that may be interpreted as {@link $NetworkStatusPacket}.
     */
    export type $NetworkStatusPacket_ = { status?: $NetworkStatus,  } | [status?: $NetworkStatus, ];
}
