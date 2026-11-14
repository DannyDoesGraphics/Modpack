import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Executor, $Executor_ } from "@package/java/util/concurrent";
import { $Runnable_ } from "@package/java/lang";
import { $Task } from "@package/com/ishland/flowsched/executor";

declare module "@package/com/ishland/c2me/base/common/scheduler" {
    export class $SchedulingManager {
        setCurrentSyncLoad(pos: $ChunkPos): void;
        setConsolidatingLevelUpdates(value: boolean): void;
        updatePriorityFromLevel(pos: number, level: number): void;
        updatePriorityFromLevelOnMain(pos: number, level: number): void;
        positionedExecutor(pos: number): $Executor;
        enqueue(task: $AbstractPosAwarePrioritizedTask): void;
        enqueue(pos: number, command: $Runnable_): void;
        getId(): number;
        static MAX_LEVEL: number;
        constructor(executor: $Executor_);
        set currentSyncLoad(value: $ChunkPos);
        set consolidatingLevelUpdates(value: boolean);
        get id(): number;
    }
    export class $AbstractPosAwarePrioritizedTask extends $Task {
        addPostExec(runnable: $Runnable_): void;
        getPos(): number;
        static P_REMOVED: number;
        static TOMBSTONE: $Task;
        static P_UNINITIALIZED: number;
        constructor(pos: number);
        get pos(): number;
    }
    export class $IVanillaChunkManager {
    }
    export interface $IVanillaChunkManager {
        c2me$getSchedulingManager(): $SchedulingManager;
    }
    /**
     * Values that may be interpreted as {@link $IVanillaChunkManager}.
     */
    export type $IVanillaChunkManager_ = (() => $SchedulingManager);
    export class $ISyncLoadManager {
    }
    export interface $ISyncLoadManager {
        getCurrentSyncLoad(): $ChunkPos;
        get currentSyncLoad(): $ChunkPos;
    }
    /**
     * Values that may be interpreted as {@link $ISyncLoadManager}.
     */
    export type $ISyncLoadManager_ = (() => $ChunkPos);
}
