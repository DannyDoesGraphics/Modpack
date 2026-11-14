import { $OreConfiguration$TargetBlockState } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/almostreliable/unified/mixin/neoforge/worldgen" {
    export class $OreConfigurationAccessor {
    }
    export interface $OreConfigurationAccessor {
        almostunified$setTargets(arg0: $List_<$OreConfiguration$TargetBlockState>): void;
    }
    /**
     * Values that may be interpreted as {@link $OreConfigurationAccessor}.
     */
    export type $OreConfigurationAccessor_ = ((arg0: $List<$OreConfiguration$TargetBlockState>) => void);
}
