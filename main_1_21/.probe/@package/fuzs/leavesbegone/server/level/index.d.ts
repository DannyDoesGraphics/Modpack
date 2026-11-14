import { $LevelTicks } from "@package/net/minecraft/world/ticks";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";

declare module "@package/fuzs/leavesbegone/server/level" {
    export class $RandomBlockTickerLevel {
    }
    export interface $RandomBlockTickerLevel {
        leavesbegone$getRandomBlockTicks(): $LevelTicks<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $RandomBlockTickerLevel}.
     */
    export type $RandomBlockTickerLevel_ = (() => $LevelTicks<$Block_>);
}
