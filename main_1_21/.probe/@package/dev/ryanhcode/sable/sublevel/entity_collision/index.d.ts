import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Record } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $Vector3dc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/sublevel/entity_collision" {
    export class $SubLevelEntityCollision$FirstCollisionInfo extends $Record {
        block(): $BlockState;
        horizontal(): boolean;
        localLocation(): $Vector3dc;
        globalDirection(): $Vector3dc;
        bouncy(): boolean;
        constructor(localLocation: $Vector3dc, globalDirection: $Vector3dc, horizontal: boolean, bouncy: boolean, block: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $SubLevelEntityCollision$FirstCollisionInfo}.
     */
    export type $SubLevelEntityCollision$FirstCollisionInfo_ = { bouncy?: boolean, localLocation?: $Vector3dc, globalDirection?: $Vector3dc, horizontal?: boolean, block?: $BlockState_,  } | [bouncy?: boolean, localLocation?: $Vector3dc, globalDirection?: $Vector3dc, horizontal?: boolean, block?: $BlockState_, ];
    export class $SubLevelEntityCollision$CollisionInfo {
        trackingSubLevel: $SubLevel;
        subLevelHorizontalCollision: boolean;
        inheritedMotion: $Vec3;
        firstCollisions: $Map<$SubLevel, $SubLevelEntityCollision$FirstCollisionInfo>;
        motion: $Vec3;
        preTrackingSubLevel: $SubLevel;
        minorHorizontalCollision: boolean;
        verticalCollision: boolean;
        preDeltaMovement: $Vec3;
        horizontalCollision: boolean;
        verticalCollisionBelow: boolean;
        constructor();
    }
}
