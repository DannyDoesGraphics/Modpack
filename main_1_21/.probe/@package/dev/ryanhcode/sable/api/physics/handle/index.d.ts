import { $SubLevelPhysicsSystem } from "@package/dev/ryanhcode/sable/sublevel/system";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $PhysicsPipelineBody } from "@package/dev/ryanhcode/sable/api/physics";
import { $ForceTotal } from "@package/dev/ryanhcode/sable/api/physics/force";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Vector3dc, $Vector3d, $Quaterniondc } from "@package/org/joml";

declare module "@package/dev/ryanhcode/sable/api/physics/handle" {
    export class $RigidBodyHandle {
        addLinearAndAngularVelocity(arg0: $Vector3dc, arg1: $Vector3dc): void;
        applyLinearImpulse(arg0: $Vector3dc): void;
        applyAngularImpulse(arg0: $Vector3dc): void;
        teleport(arg0: $Vector3dc, arg1: $Quaterniondc): void;
        applyImpulseAtPoint(arg0: $Vec3_, arg1: $Vec3_): void;
        applyImpulseAtPoint(arg0: $Vector3dc, arg1: $Vector3dc): void;
        applyLinearAndAngularImpulse(arg0: $Vector3dc, arg1: $Vector3dc, arg2: boolean): void;
        applyLinearAndAngularImpulse(arg0: $Vector3dc, arg1: $Vector3dc): void;
        /**
         * @deprecated
         */
        getLinearVelocity(): $Vector3dc;
        getLinearVelocity(arg0: $Vector3d): $Vector3d;
        /**
         * @deprecated
         */
        getAngularVelocity(): $Vector3dc;
        getAngularVelocity(arg0: $Vector3d): $Vector3d;
        applyForcesAndReset(arg0: $ForceTotal): void;
        applyTorqueImpulse(arg0: $Vector3dc): void;
        static of(arg0: $ServerLevel, arg1: $PhysicsPipelineBody): $RigidBodyHandle;
        static of(arg0: $ServerSubLevel): $RigidBodyHandle;
        isValid(): boolean;
        constructor(arg0: $PhysicsPipelineBody, arg1: $SubLevelPhysicsSystem);
        get valid(): boolean;
    }
}
