import { $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/corgitaco/corgilib/entity" {
    export class $IsInsideStructureTracker$IsInside {
        setInsideStructure(insideStructure: boolean): $IsInsideStructureTracker$IsInside;
        setInsideStructurePiece(insideStructurePiece: boolean): $IsInsideStructureTracker$IsInside;
        isInsideStructurePiece(): boolean;
        isInsideStructure(): boolean;
        static CODEC: $Codec<$IsInsideStructureTracker$IsInside>;
        constructor(insideStructure: boolean, insideStructurePiece: boolean);
    }
    export class $IsInsideStructureTracker {
        setInside(world: $Level_, entity: $Entity, isInside: $IsInsideStructureTracker$IsInside): void;
        getTracker(): $IsInsideStructureTracker$IsInside;
        constructor();
        get tracker(): $IsInsideStructureTracker$IsInside;
    }
    export class $IsInsideStructureTracker$Access {
    }
    export interface $IsInsideStructureTracker$Access {
        getIsInsideStructureTracker(): $IsInsideStructureTracker;
        get isInsideStructureTracker(): $IsInsideStructureTracker;
    }
    /**
     * Values that may be interpreted as {@link $IsInsideStructureTracker$Access}.
     */
    export type $IsInsideStructureTracker$Access_ = (() => $IsInsideStructureTracker);
}
