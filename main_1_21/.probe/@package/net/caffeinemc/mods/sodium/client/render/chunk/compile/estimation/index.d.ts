import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $RenderSection } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $Record, $Class } from "@package/java/lang";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation" {
    export class $JobEffort extends $Record implements $Abstract2DLinearEstimator$DataPair<$Class<never>> {
        effort(): number;
        static untilNowWithEffort(arg0: $Class<never>, arg1: number, arg2: number): $JobEffort;
        x(): number;
        duration(): number;
        y(): number;
        category(): $Class<never>;
        constructor(category: $Class<never>, duration: number, effort: number);
    }
    /**
     * Values that may be interpreted as {@link $JobEffort}.
     */
    export type $JobEffort_ = { effort?: number, duration?: number, category?: $Class<never>,  } | [effort?: number, duration?: number, category?: $Class<never>, ];
    export class $MeshTaskSizeEstimator extends $Average1DEstimator<$MeshResultSize$SectionCategory> {
        resultForSection(arg0: $RenderSection, arg1: number): $MeshResultSize;
        estimateSize(arg0: $RenderSection): number;
        static NEW_DATA_RATIO: number;
        constructor(arg0: $ClientLevel);
    }
    export class $JobDurationEstimator extends $ExpDecayLinear2DEstimator<$Class<never>> {
        estimateJobDuration(arg0: $Class<never>, arg1: number): number;
        static INITIAL_SAMPLE_TARGET: number;
        static NEW_DATA_RATIO: number;
        constructor();
    }
    export class $UploadDurationEstimator extends $ExpDecayLinear2DEstimator<void> {
        estimateUploadDuration(arg0: number): number;
        static MIN_BATCH_SIZE: number;
        static INITIAL_SAMPLE_TARGET: number;
        static NEW_DATA_RATIO: number;
        constructor();
    }
}
