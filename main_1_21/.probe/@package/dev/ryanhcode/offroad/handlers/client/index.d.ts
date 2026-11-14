import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $LevelAccelerator } from "@package/dev/ryanhcode/sable/util";
import { $MultiminingDataTickResult } from "@package/dev/ryanhcode/offroad/handlers";

declare module "@package/dev/ryanhcode/offroad/handlers/client" {
    export class $MultiMiningClientHandler$ClientBlockBreakingData {
        tick(arg0: $Level_, arg1: $LevelAccelerator, arg2: $BlockPos_, arg3: number): $MultiminingDataTickResult;
        invalid: boolean;
        destroyProgress: number;
        constructor();
    }
}
