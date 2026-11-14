import { $PhysicsPipelineBody } from "@package/dev/ryanhcode/sable/api/physics";
import { $Enum } from "@package/java/lang";
import { $Vector3dc, $Vector3d } from "@package/org/joml";
import { $ServerSubLevelContainer } from "@package/dev/ryanhcode/sable/api/sublevel";

declare module "@package/dev/ryanhcode/sable/api/physics/constraint" {
    export class $PhysicsConstraintHandle {
    }
    export interface $PhysicsConstraintHandle {
        getJointImpulses(arg0: $Vector3d, arg1: $Vector3d): void;
        setMotor(arg0: $ConstraintJointAxis_, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: number): void;
        setContactsEnabled(arg0: boolean): void;
        remove(): void;
        isValid(): boolean;
        set contactsEnabled(value: boolean);
        get valid(): boolean;
    }
    export class $ConstraintJointAxis extends $Enum<$ConstraintJointAxis> {
        static values(): $ConstraintJointAxis[];
        static valueOf(arg0: string): $ConstraintJointAxis;
        static ALL: $ConstraintJointAxis[];
        static ANGULAR_Z: $ConstraintJointAxis;
        static ANGULAR_Y: $ConstraintJointAxis;
        static ANGULAR_X: $ConstraintJointAxis;
        static LINEAR_Z: $ConstraintJointAxis;
        static LINEAR_Y: $ConstraintJointAxis;
        static LINEAR_X: $ConstraintJointAxis;
        static LINEAR: $ConstraintJointAxis[];
        static ANGULAR: $ConstraintJointAxis[];
    }
    /**
     * Values that may be interpreted as {@link $ConstraintJointAxis}.
     */
    export type $ConstraintJointAxis_ = "linear_x" | "linear_y" | "linear_z" | "angular_x" | "angular_y" | "angular_z";
    export class $PhysicsConstraintConfiguration<T extends $PhysicsConstraintHandle> {
        static validateAnchors(arg0: $ServerSubLevelContainer, arg1: $PhysicsPipelineBody, arg2: $PhysicsPipelineBody, arg3: $Vector3dc, arg4: $Vector3dc): void;
    }
    export interface $PhysicsConstraintConfiguration<T extends $PhysicsConstraintHandle> {
        validate(arg0: $ServerSubLevelContainer, arg1: $PhysicsPipelineBody, arg2: $PhysicsPipelineBody): void;
    }
}
