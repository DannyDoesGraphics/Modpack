import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $Heightmap$Types_, $RandomState, $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/potionstudios/biomeswevegone/util" {
    export class $GeneratorHeightGetter {
    }
    export interface $GeneratorHeightGetter {
        getHeight(arg0: $ChunkGenerator, arg1: $Heightmap$Types_, arg2: number, arg3: number, arg4: $RandomState, arg5: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $GeneratorHeightGetter}.
     */
    export type $GeneratorHeightGetter_ = ((arg0: $ChunkGenerator, arg1: $Heightmap$Types, arg2: number, arg3: number, arg4: $RandomState, arg5: boolean) => number);
}
