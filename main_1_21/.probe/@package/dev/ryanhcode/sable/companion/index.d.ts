import { $Pose3dc, $BoundingBox3dc } from "@package/dev/ryanhcode/sable/companion/math";
import { $UUID } from "@package/java/util";
export * as math from "@package/dev/ryanhcode/sable/companion/math";

declare module "@package/dev/ryanhcode/sable/companion" {
    export class $SubLevelAccess {
    }
    export interface $SubLevelAccess {
        boundingBox(): $BoundingBox3dc;
        getName(): string;
        logicalPose(): $Pose3dc;
        lastPose(): $Pose3dc;
        getUniqueId(): $UUID;
        get name(): string;
        get uniqueId(): $UUID;
    }
    export class $ClientSubLevelAccess {
    }
    export interface $ClientSubLevelAccess extends $SubLevelAccess {
        renderPose(): $Pose3dc;
        renderPose(arg0: number): $Pose3dc;
    }
}
