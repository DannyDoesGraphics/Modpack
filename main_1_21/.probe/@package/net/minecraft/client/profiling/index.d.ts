import { $Supplier_, $LongSupplier_ } from "@package/java/util/function";
import { $MetricsSamplerProvider, $MetricSampler } from "@package/net/minecraft/util/profiling/metrics";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $ProfileCollector } from "@package/net/minecraft/util/profiling";
import { $Set } from "@package/java/util";

declare module "@package/net/minecraft/client/profiling" {
    export class $ClientMetricsSamplersProvider implements $MetricsSamplerProvider {
        samplers(profiles: $Supplier_<$ProfileCollector>): $Set<$MetricSampler>;
        constructor(timeSource: $LongSupplier_, levelRenderer: $LevelRenderer);
    }
}
