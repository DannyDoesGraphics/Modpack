import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Iterator } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as implementations from "@package/appeng/me/cluster/implementations";

declare module "@package/appeng/me/cluster" {
    export class $MBCalculator<TBlockEntity extends $IAEMultiBlock<TCluster>, TCluster extends $IAECluster> {
        updateMultiblockAfterNeighborUpdate(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockPos_): void;
        calculateMultiblock(arg0: $ServerLevel, arg1: $BlockPos_): void;
        updateBlockEntities(arg0: TCluster, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockPos_): void;
        createCluster(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockPos_): TCluster;
        checkMultiblockScale(arg0: $BlockPos_, arg1: $BlockPos_): boolean;
        verifyInternalStructure(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        isValidBlockEntity(arg0: $BlockEntity): boolean;
        static isModificationInProgress(): boolean;
        static setModificationInProgress(arg0: $IAECluster): void;
        disconnect(): void;
        constructor(arg0: TBlockEntity);
    }
    export class $IAEMultiBlock<Cluster extends $IAECluster> {
    }
    export interface $IAEMultiBlock<Cluster extends $IAECluster> {
        getCluster(): Cluster;
        isValid(): boolean;
        disconnect(arg0: boolean): void;
        get cluster(): Cluster;
        get valid(): boolean;
    }
    export class $IAECluster {
    }
    export interface $IAECluster {
        getBlockEntities(): $Iterator<$BlockEntity>;
        getBoundsMax(): $BlockPos;
        getBoundsMin(): $BlockPos;
        updateStatus(arg0: boolean): void;
        isDestroyed(): boolean;
        destroy(): void;
        get blockEntities(): $Iterator<$BlockEntity>;
        get boundsMax(): $BlockPos;
        get boundsMin(): $BlockPos;
        get destroyed(): boolean;
    }
}
