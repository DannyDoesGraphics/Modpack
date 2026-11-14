import { $CancellationToken } from "@package/net/caffeinemc/mods/sodium/client/util/task";
import { $RenderSection } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $BuilderTaskOutput, $ChunkBuildOutput, $ChunkBuildContext, $ChunkSortOutput } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
import { $JobDurationEstimator, $MeshTaskSizeEstimator, $UploadDurationEstimator } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation";
import { $SortBehavior_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
import { $ChunkRenderContext } from "@package/net/caffeinemc/mods/sodium/client/world/cloned";
import { $DynamicSorter, $CombinedCameraPos } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
import { $Vector3dc, $Vector3fc } from "@package/org/joml";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks" {
    export class $ChunkBuilderSortingTask extends $ChunkBuilderTask<$ChunkSortOutput> {
        static createTask(arg0: $RenderSection, arg1: number, arg2: $Vector3dc): $ChunkBuilderSortingTask;
        execute(arg0: $ChunkBuildContext, arg1: $CancellationToken): $ChunkSortOutput;
        constructor(arg0: $RenderSection, arg1: number, arg2: $Vector3dc, arg3: $DynamicSorter);
    }
    export class $ChunkBuilderMeshingTask extends $ChunkBuilderTask<$ChunkBuildOutput> {
        constructor(arg0: $RenderSection, arg1: number, arg2: $Vector3dc, arg3: $ChunkRenderContext, arg4: $SortBehavior_, arg5: boolean);
    }
    export class $ChunkBuilderTask<OUTPUT extends $BuilderTaskOutput> implements $CombinedCameraPos {
        getEstimatedUploadDuration(): number;
        getEstimatedSize(): number;
        calculateEstimations(arg0: $JobDurationEstimator, arg1: $MeshTaskSizeEstimator, arg2: $UploadDurationEstimator): void;
        estimateTaskSizeWith(arg0: $MeshTaskSizeEstimator): number;
        getEstimatedDuration(): number;
        getRelativeCameraPos(): $Vector3fc;
        getAbsoluteCameraPos(): $Vector3dc;
        execute(arg0: $ChunkBuildContext, arg1: $CancellationToken): OUTPUT;
        constructor(arg0: $RenderSection, arg1: number, arg2: $Vector3dc);
        get estimatedUploadDuration(): number;
        get estimatedSize(): number;
        get estimatedDuration(): number;
        get relativeCameraPos(): $Vector3fc;
        get absoluteCameraPos(): $Vector3dc;
    }
}
