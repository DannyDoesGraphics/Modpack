import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IGridNode } from "@package/appeng/api/networking";
import { $IOverlayDataSource } from "@package/appeng/client/render/overlay";
import { $IAEItemFilter } from "@package/appeng/util/inv/filter";
import { $Set } from "@package/java/util";
import { $AENetworkedBlockEntity, $AENetworkedInvBlockEntity } from "@package/appeng/blockentity/grid";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $IConfigManager, $IConfigurableObject, $DimensionalBlockPos } from "@package/appeng/api/util";
import { $IGridTickable, $TickRateModulation, $TickingRequest } from "@package/appeng/api/networking/ticking";
import { $BlockPos_, $Direction$Axis, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $SpatialPylonCluster } from "@package/appeng/me/cluster/implementations";
import { $GridChunkEvent$GridChunkAdded, $GridChunkEvent$GridChunkRemoved } from "@package/appeng/api/networking/events/statistics";
import { $Enum, $Record } from "@package/java/lang";
import { $DefaultBlockEntityMoveStrategy } from "@package/appeng/api/movable";
import { $IAEMultiBlock } from "@package/appeng/me/cluster";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/blockentity/spatial" {
    export class $SpatialPylonBlockEntity$AxisPosition extends $Enum<$SpatialPylonBlockEntity$AxisPosition> {
        static values(): $SpatialPylonBlockEntity$AxisPosition[];
        static valueOf(arg0: string): $SpatialPylonBlockEntity$AxisPosition;
        static START: $SpatialPylonBlockEntity$AxisPosition;
        static END: $SpatialPylonBlockEntity$AxisPosition;
        static NONE: $SpatialPylonBlockEntity$AxisPosition;
        static MIDDLE: $SpatialPylonBlockEntity$AxisPosition;
    }
    /**
     * Values that may be interpreted as {@link $SpatialPylonBlockEntity$AxisPosition}.
     */
    export type $SpatialPylonBlockEntity$AxisPosition_ = "none" | "start" | "middle" | "end";
    export class $SpatialPylonBlockEntity$ClientState extends $Record {
        axisPosition(): $SpatialPylonBlockEntity$AxisPosition;
        online(): boolean;
        static readFromStream(arg0: $FriendlyByteBuf): $SpatialPylonBlockEntity$ClientState;
        writeToStream(arg0: $FriendlyByteBuf): void;
        writeToNbt(arg0: $CompoundTag_): void;
        static readFromNbt(arg0: $CompoundTag_): $SpatialPylonBlockEntity$ClientState;
        axis(): $Direction$Axis;
        powered(): boolean;
        static DEFAULT: $SpatialPylonBlockEntity$ClientState;
        constructor(powered: boolean, online: boolean, axisPosition: $SpatialPylonBlockEntity$AxisPosition_, axis: $Direction$Axis_);
    }
    /**
     * Values that may be interpreted as {@link $SpatialPylonBlockEntity$ClientState}.
     */
    export type $SpatialPylonBlockEntity$ClientState_ = { axisPosition?: $SpatialPylonBlockEntity$AxisPosition_, axis?: $Direction$Axis_, powered?: boolean, online?: boolean,  } | [axisPosition?: $SpatialPylonBlockEntity$AxisPosition_, axis?: $Direction$Axis_, powered?: boolean, online?: boolean, ];
    export class $SpatialAnchorBlockEntity extends $AENetworkedBlockEntity implements $IGridTickable, $IConfigurableObject, $IOverlayDataSource {
        getLoadedChunks(): $Set<$ChunkPos>;
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
        getConfigManager(): $IConfigManager;
        getOverlayChunks(): $Set<$ChunkPos>;
        getOverlayBlockEntity(): $BlockEntity;
        getOverlaySourceLocation(): $DimensionalBlockPos;
        getOverlayColor(): number;
        chunkAdded(arg0: $GridChunkEvent$GridChunkAdded): void;
        chunkRemoved(arg0: $GridChunkEvent$GridChunkRemoved): void;
        countLoadedChunks(): number;
        registerChunk(arg0: $ChunkPos): void;
        isActive(): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get loadedChunks(): $Set<$ChunkPos>;
        get configManager(): $IConfigManager;
        get overlayChunks(): $Set<$ChunkPos>;
        get overlayBlockEntity(): $BlockEntity;
        get overlaySourceLocation(): $DimensionalBlockPos;
        get overlayColor(): number;
        get active(): boolean;
    }
    export class $SpatialIOPortBlockEntity$SpatialIOFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    export class $SpatialPylonBlockEntity extends $AENetworkedBlockEntity implements $IAEMultiBlock<$SpatialPylonCluster> {
        neighborChanged(arg0: $BlockPos_): void;
        getClientState(): $SpatialPylonBlockEntity$ClientState;
        getCluster(): $SpatialPylonCluster;
        updateStatus(arg0: $SpatialPylonCluster): void;
        recalculateDisplay(): void;
        isValid(): boolean;
        disconnect(arg0: boolean): void;
        level: $Level;
        static STATE: $ModelProperty<$SpatialPylonBlockEntity$ClientState>;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get clientState(): $SpatialPylonBlockEntity$ClientState;
        get cluster(): $SpatialPylonCluster;
        get valid(): boolean;
    }
    export class $SpatialAnchorMoveStrategy extends $DefaultBlockEntityMoveStrategy {
        constructor();
    }
    export class $SpatialIOPortBlockEntity extends $AENetworkedInvBlockEntity {
        updateRedstoneState(): void;
        getRedstoneState(): boolean;
        isActive(): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get redstoneState(): boolean;
        get active(): boolean;
    }
}
