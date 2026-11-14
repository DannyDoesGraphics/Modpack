import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $BlockSubLevelCollisionCallback_, $BlockSubLevelCollisionCallback } from "@package/dev/ryanhcode/sable/api/physics/callback";
import { $Record, $Iterable } from "@package/java/lang";
import { $ServerSubLevel, $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $List, $Set, $Set_, $Collection_ } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Vector3dc, $Vector3d } from "@package/org/joml";
export * as propeller from "@package/dev/ryanhcode/sable/api/block/propeller";

declare module "@package/dev/ryanhcode/sable/api/block" {
    export class $BlockSubLevelLiftProvider {
        static groupLiftProviders(arg0: $Collection_<$BlockSubLevelLiftProvider$LiftProviderContext_>): $List<$BlockSubLevelLiftProvider$LiftProviderGroup>;
        static resetVectors(): void;
        static LIFT_NORMAL: $Vector3d;
        static LIFT_VELO: $Vector3d;
        static TEMP: $Vector3d;
        static DRAG: $Vector3d;
        static LIFT_FORCE: $Vector3d;
        static DIRECTIONS: $Direction[];
        static LIFT_POS: $Vector3d;
    }
    export interface $BlockSubLevelLiftProvider {
        sable$contributeLiftAndDrag(arg0: $BlockSubLevelLiftProvider$LiftProviderContext_, arg1: $ServerSubLevel, arg2: $Pose3d, arg3: number, arg4: $Vector3dc, arg5: $Vector3dc, arg6: $Vector3d, arg7: $Vector3d, arg8: $BlockSubLevelLiftProvider$LiftProviderGroup): void;
        sable$getDirectionlessDragScalar(): number;
        sable$getLiftScalar(): number;
        sable$getNormal(arg0: $BlockState_): $Direction;
        sable$getParallelDragScalar(): number;
    }
    /**
     * Values that may be interpreted as {@link $BlockSubLevelLiftProvider}.
     */
    export type $BlockSubLevelLiftProvider_ = ((arg0: $BlockState) => $Direction_);
    export class $BlockEntitySubLevelReactionWheel {
    }
    export interface $BlockEntitySubLevelReactionWheel {
        sable$getAngularVelocity(arg0: $Vector3d): void;
        getBlockState(): $BlockState;
        get blockState(): $BlockState;
    }
    export class $BlockSubLevelLiftProvider$LiftProviderContext extends $Record {
        state(): $BlockState;
        pos(): $BlockPos;
        dir(): $Vec3;
        constructor(pos: $BlockPos_, state: $BlockState_, dir: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $BlockSubLevelLiftProvider$LiftProviderContext}.
     */
    export type $BlockSubLevelLiftProvider$LiftProviderContext_ = { dir?: $Vec3_, state?: $BlockState_, pos?: $BlockPos_,  } | [dir?: $Vec3_, state?: $BlockState_, pos?: $BlockPos_, ];
    export class $BlockSubLevelAssemblyListener {
    }
    export interface $BlockSubLevelAssemblyListener {
        beforeMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
        afterMove(arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockSubLevelAssemblyListener}.
     */
    export type $BlockSubLevelAssemblyListener_ = ((arg0: $ServerLevel, arg1: $ServerLevel, arg2: $BlockState, arg3: $BlockPos, arg4: $BlockPos) => void);
    export class $BlockSubLevelCustomCenterOfMass {
    }
    export interface $BlockSubLevelCustomCenterOfMass {
        getCenterOfMass(arg0: $BlockGetter, arg1: $BlockState_): $Vector3dc;
    }
    /**
     * Values that may be interpreted as {@link $BlockSubLevelCustomCenterOfMass}.
     */
    export type $BlockSubLevelCustomCenterOfMass_ = ((arg0: $BlockGetter, arg1: $BlockState) => $Vector3dc);
    export class $BlockEntitySubLevelActor {
    }
    export interface $BlockEntitySubLevelActor {
        sable$physicsTick(arg0: $ServerSubLevel, arg1: $RigidBodyHandle, arg2: number): void;
        sable$getConnectionDependencies(): $Iterable<$SubLevel>;
        sable$tick(arg0: $ServerSubLevel): void;
        sable$getLoadingDependencies(): $Iterable<$SubLevel>;
    }
    export class $BlockSubLevelLiftProvider$LiftProviderGroup {
        liftCenter(): $Vector3d;
        totalDrag(): $Vector3d;
        dragCenter(): $Vector3d;
        totalLift(): $Vector3d;
        positions(): $Set<$BlockPos>;
        totalLiftStrength: number;
        totalDragStrength: number;
        constructor(arg0: $Set_<$BlockPos_>);
    }
    export class $BlockWithSubLevelCollisionCallback {
        static sable$getCallback(arg0: $BlockState_): $BlockSubLevelCollisionCallback;
        static hasCallback(arg0: $BlockState_): boolean;
    }
    export interface $BlockWithSubLevelCollisionCallback {
        sable$getCallback(): $BlockSubLevelCollisionCallback;
    }
    /**
     * Values that may be interpreted as {@link $BlockWithSubLevelCollisionCallback}.
     */
    export type $BlockWithSubLevelCollisionCallback_ = (() => $BlockSubLevelCollisionCallback_);
}
