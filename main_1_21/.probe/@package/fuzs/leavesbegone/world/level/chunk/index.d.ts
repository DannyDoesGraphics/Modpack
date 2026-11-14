import { $LevelChunkTicks } from "@package/net/minecraft/world/ticks";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/fuzs/leavesbegone/world/level/chunk" {
    export class $RandomBlockTickerChunk {
        static KEY_RANDOM_BLOCK_TICKS: string;
    }
    export interface $RandomBlockTickerChunk {
        leavesbegone$getRandomBlockTicks(): $LevelChunkTicks<$Block>;
        leavesbegone$setRandomBlockTicks(arg0: $LevelChunkTicks<$Block_>): void;
    }
}
