import { $BlockAndTintGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockColorsExtension } from "@package/net/caffeinemc/mods/sodium/client/model/color/interop";
import { $ToIntFunction_ } from "@package/java/util/function";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Reference2ReferenceMap, $ReferenceSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockColorsNeoForgeAccessor } from "@package/fuzs/puzzleslib/neoforge/mixin/client/accessor";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Map, $Set } from "@package/java/util";

declare module "@package/net/minecraft/client/color/block" {
    export class $BlockTintCache$LatestCacheInfo {
    }
    export class $BlockColor {
    }
    export interface $BlockColor {
        getColor(state: $BlockState_, level: $BlockAndTintGetter | null, pos: $BlockPos_ | null, tintIndex: number): number;
    }
    /**
     * Values that may be interpreted as {@link $BlockColor}.
     */
    export type $BlockColor_ = ((arg0: $BlockState, arg1: $BlockAndTintGetter, arg2: $BlockPos, arg3: number) => number);
    export class $BlockColors implements $BlockColorsExtension, $BlockColorsNeoForgeAccessor {
        sodium$getOverridenVanillaBlocks(): $ReferenceSet<any>;
        getColoringProperties(block: $Block_): $Set<$Property<never>>;
        sodium$getProviders(): $Reference2ReferenceMap<any, any>;
        /**
         * @deprecated
         */
        register(blockColor: $BlockColor_, ...blocks: $Block_[]): void;
        static createDefault(): $BlockColors;
        getColor(state: $BlockState_, level: $Level_, pos: $BlockPos_): number;
        getColor(state: $BlockState_, level: $BlockAndTintGetter | null, pos: $BlockPos_ | null, tintIndex: number): number;
        puzzleslib$getBlockColors(): $Map<$Block, $BlockColor>;
        constructor();
    }
    export class $BlockTintCache$CacheData {
    }
    export class $BlockTintCache {
        invalidateAll(): void;
        getColor(pos: $BlockPos_): number;
        invalidateForChunk(chunkX: number, chunkZ: number): void;
        constructor(source: $ToIntFunction_<$BlockPos>);
    }
}
