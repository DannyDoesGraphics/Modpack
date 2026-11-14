import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Record } from "@package/java/lang";
import { $Vector3dc, $Vector3d } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/callback" {
    export class $BlockSubLevelCollisionCallback {
    }
    export interface $BlockSubLevelCollisionCallback {
        sable$onCollision(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $Vector3d, arg3: number): $BlockSubLevelCollisionCallback$CollisionResult;
        onCollision(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: boolean): number[];
    }
    /**
     * Values that may be interpreted as {@link $BlockSubLevelCollisionCallback}.
     */
    export type $BlockSubLevelCollisionCallback_ = ((arg0: $BlockPos, arg1: $BlockPos, arg2: $Vector3d, arg3: number) => $BlockSubLevelCollisionCallback$CollisionResult_);
    export class $BlockSubLevelCollisionCallback$CollisionResult extends $Record {
        tangentMotion(): $Vector3dc;
        removeCollision(): boolean;
        static NONE: $BlockSubLevelCollisionCallback$CollisionResult;
        constructor(tangentMotion: $Vector3dc, removeCollision: boolean);
    }
    /**
     * Values that may be interpreted as {@link $BlockSubLevelCollisionCallback$CollisionResult}.
     */
    export type $BlockSubLevelCollisionCallback$CollisionResult_ = { tangentMotion?: $Vector3dc, removeCollision?: boolean,  } | [tangentMotion?: $Vector3dc, removeCollision?: boolean, ];
}
