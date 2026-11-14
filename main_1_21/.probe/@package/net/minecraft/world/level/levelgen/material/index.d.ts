import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $NoiseChunk$BlockStateFiller_, $NoiseChunk$BlockStateFiller, $DensityFunction$FunctionContext, $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/material" {
    export class $WorldGenMaterialRule {
    }
    export interface $WorldGenMaterialRule {
        apply(chunk: $NoiseChunk, x: number, y: number, z: number): $BlockState;
    }
    /**
     * Values that may be interpreted as {@link $WorldGenMaterialRule}.
     */
    export type $WorldGenMaterialRule_ = ((arg0: $NoiseChunk, arg1: number, arg2: number, arg3: number) => $BlockState_);
    export class $MaterialRuleList extends $Record implements $NoiseChunk$BlockStateFiller {
        calculate(arg0: $DensityFunction$FunctionContext): $BlockState;
        materialRuleList(): $List<$NoiseChunk$BlockStateFiller>;
        constructor(arg0: $List_<$NoiseChunk$BlockStateFiller_>);
    }
    /**
     * Values that may be interpreted as {@link $MaterialRuleList}.
     */
    export type $MaterialRuleList_ = { materialRuleList?: $List_<$NoiseChunk$BlockStateFiller_>,  } | [materialRuleList?: $List_<$NoiseChunk$BlockStateFiller_>, ];
}
