import { $Level } from "@package/net/minecraft/world/level";
import { $QnbFormedState } from "@package/appeng/block/qnb";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IAEItemFilter } from "@package/appeng/util/inv/filter";
import { $EnumSet } from "@package/java/util";
import { $AENetworkedInvBlockEntity } from "@package/appeng/blockentity/grid";
import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $InternalInventory } from "@package/appeng/api/inventories";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $QuantumCluster } from "@package/appeng/me/cluster/implementations";
import { $ServerTickingBlockEntity } from "@package/appeng/blockentity";
import { $IAEMultiBlock } from "@package/appeng/me/cluster";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/blockentity/qnb" {
    export class $QuantumBridgeBlockEntity$EntangledSingularityFilter implements $IAEItemFilter {
        allowExtract(arg0: $InternalInventory, arg1: number, arg2: number): boolean;
        allowInsert(arg0: $InternalInventory, arg1: number, arg2: $ItemStack_): boolean;
    }
    export class $QuantumBridgeBlockEntity extends $AENetworkedInvBlockEntity implements $IAEMultiBlock<$QuantumCluster>, $ServerTickingBlockEntity {
        serverTick(): void;
        isPowered(): boolean;
        neighborUpdate(arg0: $BlockPos_): void;
        breakClusterOnRemove(): void;
        updateStatus(arg0: $QuantumCluster, arg1: number, arg2: boolean): void;
        getAdjacentQuantumBridges(): $EnumSet<$Direction>;
        getQEFrequency(): number;
        static isValidEntangledSingularity(arg0: $ItemStack_): boolean;
        static assignFrequency(arg0: $ItemStack_): void;
        isCorner(): boolean;
        isFormed(): boolean;
        hasQES(): boolean;
        getExposedInventoryForSide(arg0: $Direction_): $InternalInventory;
        getCorner(): number;
        isValid(): boolean;
        disconnect(arg0: boolean): void;
        getCluster(): $QuantumCluster;
        static FORMED_STATE: $ModelProperty<$QnbFormedState>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get powered(): boolean;
        get adjacentQuantumBridges(): $EnumSet<$Direction>;
        get QEFrequency(): number;
        get formed(): boolean;
        get valid(): boolean;
        get cluster(): $QuantumCluster;
    }
}
