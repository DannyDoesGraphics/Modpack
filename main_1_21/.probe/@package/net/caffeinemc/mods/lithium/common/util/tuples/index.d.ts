import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $Record } from "@package/java/lang";
import { $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/caffeinemc/mods/lithium/common/util/tuples" {
    export class $WorldSectionBox extends $Record {
        numSections(): number;
        matchesRelevantBlocksBox(arg0: $AABB_): boolean;
        static relevantExpandedBlocksBox(arg0: $Level_, arg1: $AABB_): $WorldSectionBox;
        chunkX1(): number;
        chunkX2(): number;
        chunkZ1(): number;
        chunkZ2(): number;
        chunkY1(): number;
        chunkY2(): number;
        static entityAccessBox(arg0: $Level_, arg1: $AABB_): $WorldSectionBox;
        static relevantFluidBox(arg0: $Level_, arg1: $AABB_): $WorldSectionBox;
        world(): $Level;
        constructor(world: $Level_, chunkX1: number, chunkY1: number, chunkZ1: number, chunkX2: number, chunkY2: number, chunkZ2: number);
    }
    /**
     * Values that may be interpreted as {@link $WorldSectionBox}.
     */
    export type $WorldSectionBox_ = { world?: $Level_, chunkZ2?: number, chunkZ1?: number, chunkY2?: number, chunkY1?: number, chunkX2?: number, chunkX1?: number,  } | [world?: $Level_, chunkZ2?: number, chunkZ1?: number, chunkY2?: number, chunkY1?: number, chunkX2?: number, chunkX1?: number, ];
}
