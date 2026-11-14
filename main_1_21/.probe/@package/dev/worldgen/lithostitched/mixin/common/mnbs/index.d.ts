import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Climate$ParameterPoint_, $Climate$RTree } from "@package/net/minecraft/world/level/biome";
import { $List_ } from "@package/java/util";

declare module "@package/dev/worldgen/lithostitched/mixin/common/mnbs" {
    export class $ParameterListAccessor<T> {
    }
    export interface $ParameterListAccessor<T> {
        lithostitched$setValues(list: $List_<$Pair<$Climate$ParameterPoint_, T>>): void;
        lithostitched$index(rTree: $Climate$RTree<T>): void;
    }
}
