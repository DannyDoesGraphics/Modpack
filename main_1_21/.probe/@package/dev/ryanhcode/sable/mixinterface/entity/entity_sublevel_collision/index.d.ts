import { $BlockPos } from "@package/net/minecraft/core";
import { $SubLevelEntityCollision$CollisionInfo } from "@package/dev/ryanhcode/sable/sublevel/entity_collision";
import { $LevelReusedVectors } from "@package/dev/ryanhcode/sable/api/math";
import { $UUID_, $UUID } from "@package/java/util";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/mixinterface/entity/entity_sublevel_collision" {
    export class $LevelExtension {
    }
    export interface $LevelExtension {
        sable$getJOMLSink(): $LevelReusedVectors;
    }
    /**
     * Values that may be interpreted as {@link $LevelExtension}.
     */
    export type $LevelExtension_ = (() => $LevelReusedVectors);
    export class $EntityMovementExtension {
    }
    export interface $EntityMovementExtension {
        sable$getInBlockStatePos(): $BlockPos;
        sable$getCollisionInfo(): $SubLevelEntityCollision$CollisionInfo;
        sable$setTrackingSubLevel(arg0: $SubLevel): void;
        sable$setLastTrackingSubLevelID(arg0: $UUID_): void;
        sable$getTrackingSubLevel(): $SubLevel;
        sable$getLastTrackingSubLevelID(): $UUID;
        sable$setPosField(arg0: $Vec3_): void;
    }
    export class $LivingEntityMovementExtension {
    }
    export interface $LivingEntityMovementExtension {
        sable$getInheritedVelocity(): $Vector3d;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityMovementExtension}.
     */
    export type $LivingEntityMovementExtension_ = (() => $Vector3d);
}
