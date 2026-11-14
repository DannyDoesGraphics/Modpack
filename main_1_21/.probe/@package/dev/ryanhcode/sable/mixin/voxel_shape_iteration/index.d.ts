import { $BitSet } from "@package/java/util";

declare module "@package/dev/ryanhcode/sable/mixin/voxel_shape_iteration" {
    export class $BitSetDiscreteVoxelShapeAccessor {
    }
    export interface $BitSetDiscreteVoxelShapeAccessor extends $DiscreteVoxelShapeAccessor {
        getStorage(): $BitSet;
        invokeIsZStripFull(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        invokeIsXZRectangleFull(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
        invokeClearZStrip(arg0: number, arg1: number, arg2: number, arg3: number): void;
        get storage(): $BitSet;
    }
    export class $DiscreteVoxelShapeAccessor {
    }
    export interface $DiscreteVoxelShapeAccessor {
        getXSize(): number;
        getYSize(): number;
        getZSize(): number;
        get XSize(): number;
        get YSize(): number;
        get ZSize(): number;
    }
}
