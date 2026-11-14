import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_ } from "@package/java/util/function";
import { $CancellationToken } from "@package/net/caffeinemc/mods/sodium/client/util/task";
import { $BuilderTaskOutput, $ChunkBuildContext } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
import { $JobEffort_, $JobEffort } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation";
import { $ChunkVertexType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format";
import { $Throwable } from "@package/java/lang";
import { $ChunkBuilderTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor" {
    export class $ChunkJob {
    }
    export interface $ChunkJob extends $CancellationToken {
        getEstimatedUploadDuration(): number;
        getEstimatedSize(): number;
        getEstimatedDuration(): number;
        execute(arg0: $ChunkBuildContext): void;
        isStarted(): boolean;
        isBlocking(): boolean;
        get estimatedUploadDuration(): number;
        get estimatedSize(): number;
        get estimatedDuration(): number;
        get started(): boolean;
        get blocking(): boolean;
    }
    export class $ChunkJobTyped<TASK extends $ChunkBuilderTask<OUTPUT>, OUTPUT extends $BuilderTaskOutput> implements $ChunkJob {
        getEstimatedUploadDuration(): number;
        getEstimatedSize(): number;
        getEstimatedDuration(): number;
        setCancelled(): void;
        execute(arg0: $ChunkBuildContext): void;
        isStarted(): boolean;
        isCancelled(): boolean;
        isBlocking(): boolean;
        get estimatedUploadDuration(): number;
        get estimatedSize(): number;
        get estimatedDuration(): number;
        get started(): boolean;
        get blocking(): boolean;
    }
    export class $ChunkJobResult<OUTPUT> {
        getJobEffort(): $JobEffort;
        static successfully<OUTPUT>(arg0: OUTPUT): $ChunkJobResult<OUTPUT>;
        static successfully<OUTPUT>(arg0: OUTPUT, arg1: $JobEffort_): $ChunkJobResult<OUTPUT>;
        static exceptionally<OUTPUT>(arg0: $Throwable): $ChunkJobResult<OUTPUT>;
        unwrap(): OUTPUT;
        get jobEffort(): $JobEffort;
    }
    export class $ChunkBuilder {
        getTotalRemainingDuration(arg0: number): number;
        scheduleTask<TASK extends $ChunkBuilderTask<OUTPUT>, OUTPUT extends $BuilderTaskOutput>(arg0: TASK, arg1: boolean, arg2: $Consumer_<$ChunkJobResult<OUTPUT>>, arg3: boolean): $ChunkJobTyped<TASK, OUTPUT>;
        getScheduledJobCount(): number;
        getBusyThreadCount(): number;
        getBusyFraction(arg0: number): number;
        tryStealTask(arg0: $ChunkJob): void;
        getTotalThreadCount(): number;
        shutdown(): void;
        isBuildQueueEmpty(): boolean;
        constructor(arg0: $ClientLevel, arg1: $ChunkVertexType);
        get scheduledJobCount(): number;
        get busyThreadCount(): number;
        get totalThreadCount(): number;
        get buildQueueEmpty(): boolean;
    }
}
