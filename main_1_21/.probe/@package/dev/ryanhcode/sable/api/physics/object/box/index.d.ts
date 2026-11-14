import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $MassData } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $ArbitraryPhysicsObject } from "@package/dev/ryanhcode/sable/api/physics/object";
import { $BoundingBox3d, $Pose3dc, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $SubLevelHoldingChunkMap } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $PhysicsPipelineBody } from "@package/dev/ryanhcode/sable/api/physics";
import { $Vector3dc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/object/box" {
    export class $BoxHandle {
    }
    export interface $BoxHandle {
        readPose(arg0: $Pose3d): void;
        wakeUp(): void;
        getRuntimeId(): number;
        remove(): void;
        get runtimeId(): number;
    }
    export class $BoxPhysicsObject implements $ArbitraryPhysicsObject, $PhysicsPipelineBody {
        getHalfExtents(): $Vector3dc;
        onUnloaded(arg0: $SubLevelHoldingChunkMap, arg1: $ChunkPos): void;
        wakeUp(): void;
        getMassTracker(): $MassData;
        getRuntimeId(): number;
        updatePose(): void;
        getMass(): number;
        onAddition(arg0: $SubLevelPhysicsSystem): void;
        onRemoved(): void;
        isActive(): boolean;
        isRemoved(): boolean;
        getBoundingBox(arg0: $BoundingBox3d): void;
        getPose(): $Pose3dc;
        constructor(arg0: $Pose3dc, arg1: $Vector3dc, arg2: number);
        get halfExtents(): $Vector3dc;
        get massTracker(): $MassData;
        get runtimeId(): number;
        get mass(): number;
        get active(): boolean;
        get removed(): boolean;
        get pose(): $Pose3dc;
    }
}
