import { $BoundingBox3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $Iterator } from "@package/java/util";

declare module "@package/dev/ryanhcode/sable/mixinterface/voxel_shape_iteration" {
    export class $FastVoxelShapeIterable {
    }
    export interface $FastVoxelShapeIterable {
        sable$allBoxes(): $Iterator<$BoundingBox3dc>;
    }
    /**
     * Values that may be interpreted as {@link $FastVoxelShapeIterable}.
     */
    export type $FastVoxelShapeIterable_ = (() => $Iterator<$BoundingBox3dc>);
}
