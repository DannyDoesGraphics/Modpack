import { $Block_, $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/net/caffeinemc/mods/lithium/common/world/block_pattern_matching" {
    export class $BlockPatternExtended {
    }
    export interface $BlockPatternExtended {
        lithium$setRequiredBlock(arg0: $Block_, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockPatternExtended}.
     */
    export type $BlockPatternExtended_ = ((arg0: $Block, arg1: number) => void);
}
