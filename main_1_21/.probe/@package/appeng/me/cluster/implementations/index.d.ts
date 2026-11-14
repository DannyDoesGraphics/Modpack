import { $SpatialPylonBlockEntity } from "@package/appeng/blockentity/spatial";
import { $Level } from "@package/net/minecraft/world/level";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGrid, $IGridNode } from "@package/appeng/api/networking";
import { $CpuSelectionMode, $Actionable_ } from "@package/appeng/api/config";
import { $Iterator } from "@package/java/util";
import { $ICraftingCPU, $ICraftingRequester, $CraftingJobStatus, $ICraftingSubmitResult, $ICraftingPlan } from "@package/appeng/api/networking/crafting";
import { $IActionSource, $IActionHost } from "@package/appeng/api/networking/security";
import { $CraftingBlockEntity } from "@package/appeng/blockentity/crafting";
import { $GenericStack_, $AEKey } from "@package/appeng/api/stacks";
import { $IConfigManager } from "@package/appeng/api/util";
import { $CraftingCpuLogic } from "@package/appeng/crafting/execution";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $QuantumBridgeBlockEntity } from "@package/appeng/blockentity/qnb";
import { $Enum } from "@package/java/lang";
import { $LevelEvent$Unload } from "@package/net/neoforged/neoforge/event/level";
import { $IAECluster, $MBCalculator } from "@package/appeng/me/cluster";

declare module "@package/appeng/me/cluster/implementations" {
    export class $QuantumCluster implements $IAECluster, $IActionHost {
        getBlockEntities(): $Iterator<$QuantumBridgeBlockEntity>;
        onUnload(arg0: $LevelEvent$Unload): void;
        getActionableNode(): $IGridNode;
        getBoundsMax(): $BlockPos;
        getBoundsMin(): $BlockPos;
        updateStatus(arg0: boolean): void;
        setUpdateStatus(arg0: boolean): void;
        isCorner(arg0: $QuantumBridgeBlockEntity): boolean;
        isDestroyed(): boolean;
        destroy(): void;
        getCenter(): $QuantumBridgeBlockEntity;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_);
        get blockEntities(): $Iterator<$QuantumBridgeBlockEntity>;
        get actionableNode(): $IGridNode;
        get boundsMax(): $BlockPos;
        get boundsMin(): $BlockPos;
        get destroyed(): boolean;
        get center(): $QuantumBridgeBlockEntity;
    }
    export class $SpatialPylonCluster$Axis extends $Enum<$SpatialPylonCluster$Axis> {
        static values(): $SpatialPylonCluster$Axis[];
        static valueOf(arg0: string): $SpatialPylonCluster$Axis;
        static UNFORMED: $SpatialPylonCluster$Axis;
        static X: $SpatialPylonCluster$Axis;
        static Y: $SpatialPylonCluster$Axis;
        static Z: $SpatialPylonCluster$Axis;
    }
    /**
     * Values that may be interpreted as {@link $SpatialPylonCluster$Axis}.
     */
    export type $SpatialPylonCluster$Axis_ = "x" | "y" | "z" | "unformed";
    export class $SpatialPylonCalculator extends $MBCalculator<$SpatialPylonBlockEntity, $SpatialPylonCluster> {
        updateBlockEntities(arg0: $SpatialPylonCluster, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockPos_): void;
        constructor(arg0: $SpatialPylonBlockEntity);
    }
    export class $CraftingCPUCluster implements $IAECluster, $ICraftingCPU {
        getSrc(): $IActionSource;
        markDirty(): void;
        getBlockEntities(): $Iterator<$CraftingBlockEntity>;
        getGrid(): $IGrid;
        isBusy(): boolean;
        getAvailableStorage(): number;
        canBeAutoSelectedFor(arg0: $IActionSource): boolean;
        isPreferredFor(arg0: $IActionSource): boolean;
        getCoProcessors(): number;
        getJobStatus(): $CraftingJobStatus;
        cancelJob(): void;
        getSelectionMode(): $CpuSelectionMode;
        getBoundsMax(): $BlockPos;
        getBoundsMin(): $BlockPos;
        updateStatus(arg0: boolean): void;
        submitJob(arg0: $IGrid, arg1: $ICraftingPlan, arg2: $IActionSource, arg3: $ICraftingRequester): $ICraftingSubmitResult;
        getConfigManager(): $IConfigManager;
        breakCluster(): void;
        updateName(): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        updateOutput(arg0: $GenericStack_): void;
        getName(): $Component;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        isDestroyed(): boolean;
        destroy(): void;
        isActive(): boolean;
        getNode(): $IGridNode;
        getLevel(): $Level;
        craftingLogic: $CraftingCpuLogic;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_);
        get src(): $IActionSource;
        get blockEntities(): $Iterator<$CraftingBlockEntity>;
        get grid(): $IGrid;
        get busy(): boolean;
        get availableStorage(): number;
        get coProcessors(): number;
        get jobStatus(): $CraftingJobStatus;
        get selectionMode(): $CpuSelectionMode;
        get boundsMax(): $BlockPos;
        get boundsMin(): $BlockPos;
        get configManager(): $IConfigManager;
        get name(): $Component;
        get destroyed(): boolean;
        get active(): boolean;
        get node(): $IGridNode;
        get level(): $Level;
    }
    export class $QuantumCalculator extends $MBCalculator<$QuantumBridgeBlockEntity, $QuantumCluster> {
        updateBlockEntities(arg0: $QuantumCluster, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockPos_): void;
        constructor(arg0: $QuantumBridgeBlockEntity);
    }
    export class $CraftingCPUCalculator extends $MBCalculator<$CraftingBlockEntity, $CraftingCPUCluster> {
        updateBlockEntities(arg0: $CraftingCPUCluster, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockPos_): void;
        constructor(arg0: $CraftingBlockEntity);
    }
    export class $SpatialPylonCluster implements $IAECluster {
        getBlockEntities(): $Iterator<$SpatialPylonBlockEntity>;
        getBoundsMax(): $BlockPos;
        getBoundsMin(): $BlockPos;
        getCurrentAxis(): $SpatialPylonCluster$Axis;
        setValid(arg0: boolean): void;
        updateStatus(arg0: boolean): void;
        size(): number;
        isDestroyed(): boolean;
        destroy(): void;
        isValid(): boolean;
        setLevel(): $ServerLevel;
        constructor(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockPos_);
        get blockEntities(): $Iterator<$SpatialPylonBlockEntity>;
        get boundsMax(): $BlockPos;
        get boundsMin(): $BlockPos;
        get currentAxis(): $SpatialPylonCluster$Axis;
        get destroyed(): boolean;
    }
}
