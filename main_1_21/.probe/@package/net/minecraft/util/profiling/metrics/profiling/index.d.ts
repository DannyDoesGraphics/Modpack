import { $Supplier_, $Consumer_, $LongSupplier_ } from "@package/java/util/function";
import { $MetricsPersister } from "@package/net/minecraft/util/profiling/metrics/storage";
import { $MetricsSamplerProvider, $MetricSampler, $MetricsSamplerProvider_ } from "@package/net/minecraft/util/profiling/metrics";
import { $Path } from "@package/java/nio/file";
import { $ProfilerFiller, $ProfileResults, $ProfileCollector } from "@package/net/minecraft/util/profiling";
import { $Executor_ } from "@package/java/util/concurrent";
import { $Set } from "@package/java/util";

declare module "@package/net/minecraft/util/profiling/metrics/profiling" {
    export class $ServerMetricsSamplersProvider$CpuStats {
    }
    export class $InactiveMetricsRecorder implements $MetricsRecorder {
        end(): void;
        cancel(): void;
        getProfiler(): $ProfilerFiller;
        startTick(): void;
        endTick(): void;
        isRecording(): boolean;
        static INSTANCE: $MetricsRecorder;
        constructor();
        get profiler(): $ProfilerFiller;
        get recording(): boolean;
    }
    export class $ActiveMetricsRecorder implements $MetricsRecorder {
        static registerGlobalCompletionCallback(globalOnReportFinished: $Consumer_<$Path>): void;
        end(): void;
        cancel(): void;
        getProfiler(): $ProfilerFiller;
        startTick(): void;
        endTick(): void;
        isRecording(): boolean;
        static createStarted(metricsSamplerProvider: $MetricsSamplerProvider_, wallTimeSource: $LongSupplier_, ioExecutor: $Executor_, metricsPersister: $MetricsPersister, onProfilerEnd: $Consumer_<$ProfileResults>, onReportFinished: $Consumer_<$Path>): $ActiveMetricsRecorder;
        static PROFILING_MAX_DURATION_SECONDS: number;
        get profiler(): $ProfilerFiller;
        get recording(): boolean;
    }
    export class $ServerMetricsSamplersProvider implements $MetricsSamplerProvider {
        static tickTimeSampler(timeSource: $LongSupplier_): $MetricSampler;
        static runtimeIndependentSamplers(): $Set<$MetricSampler>;
        samplers(profiles: $Supplier_<$ProfileCollector>): $Set<$MetricSampler>;
        constructor(timeSource: $LongSupplier_, dedicatedServer: boolean);
    }
    export class $ProfilerSamplerAdapter {
        newSamplersFoundInProfiler(profiles: $Supplier_<$ProfileCollector>): $Set<$MetricSampler>;
        constructor();
    }
    export class $MetricsRecorder {
    }
    export interface $MetricsRecorder {
        end(): void;
        cancel(): void;
        getProfiler(): $ProfilerFiller;
        startTick(): void;
        endTick(): void;
        isRecording(): boolean;
        get profiler(): $ProfilerFiller;
        get recording(): boolean;
    }
}
