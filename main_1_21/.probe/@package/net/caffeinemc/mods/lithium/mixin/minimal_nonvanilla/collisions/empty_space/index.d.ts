import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $ArrayVoxelShape, $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $BitSet } from "@package/java/util";

declare module "@package/net/caffeinemc/mods/lithium/mixin/minimal_nonvanilla/collisions/empty_space" {
    export class $ArrayVoxelShapeInvoker {
        static init(arg0: $DiscreteVoxelShape, arg1: $DoubleList, arg2: $DoubleList, arg3: $DoubleList): $ArrayVoxelShape;
    }
    export interface $ArrayVoxelShapeInvoker {
    }
    export class $BitSetDiscreteVoxelShapeAccessor {
    }
    export interface $BitSetDiscreteVoxelShapeAccessor {
        getStorage(): $BitSet;
        get storage(): $BitSet;
    }
    /**
     * Values that may be interpreted as {@link $BitSetDiscreteVoxelShapeAccessor}.
     */
    export type $BitSetDiscreteVoxelShapeAccessor_ = (() => $BitSet);
}
