import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MultiMiningClientHandler$ClientBlockBreakingData } from "@package/dev/ryanhcode/offroad/handlers/client";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/dev/ryanhcode/offroad/mixin_interface/level_renderer" {
    export class $MultiMiningDestructionExtension {
    }
    export interface $MultiMiningDestructionExtension {
        offroad$manuallyAddMultiDestructionProgress(arg0: number, arg1: $Map_<$BlockPos_, $MultiMiningClientHandler$ClientBlockBreakingData>): void;
    }
    /**
     * Values that may be interpreted as {@link $MultiMiningDestructionExtension}.
     */
    export type $MultiMiningDestructionExtension_ = ((arg0: number, arg1: $Map<$BlockPos, $MultiMiningClientHandler$ClientBlockBreakingData>) => void);
}
