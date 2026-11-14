import { $ILoader } from "@package/org/watermedia/loaders";
import { $Enum } from "@package/java/lang";
export * as network from "@package/org/watermedia/api/network";
export * as image from "@package/org/watermedia/api/image";
export * as player from "@package/org/watermedia/api/player";
export * as cache from "@package/org/watermedia/api/cache";
export * as render from "@package/org/watermedia/api/render";
export * as math from "@package/org/watermedia/api/math";

declare module "@package/org/watermedia/api" {
    export class $WaterMediaAPI$Priority extends $Enum<$WaterMediaAPI$Priority> {
        static values(): $WaterMediaAPI$Priority[];
        static valueOf(arg0: string): $WaterMediaAPI$Priority;
        static LOWEST: $WaterMediaAPI$Priority;
        static HIGH: $WaterMediaAPI$Priority;
        static LOW: $WaterMediaAPI$Priority;
        static MONITOR: $WaterMediaAPI$Priority;
        static BENCHMARK: $WaterMediaAPI$Priority;
        static HIGHEST: $WaterMediaAPI$Priority;
        static NORMAL: $WaterMediaAPI$Priority;
    }
    /**
     * Values that may be interpreted as {@link $WaterMediaAPI$Priority}.
     */
    export type $WaterMediaAPI$Priority_ = "highest" | "high" | "normal" | "low" | "lowest" | "monitor" | "benchmark";
    export class $WaterInternalAPI extends $WaterMediaAPI {
        constructor();
    }
    export class $WaterMediaAPI {
        priority(): $WaterMediaAPI$Priority;
        start(arg0: $ILoader): void;
        prepare(arg0: $ILoader): boolean;
        release(): void;
        constructor();
    }
}
