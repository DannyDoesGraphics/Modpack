import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/control" {
    export class $Control {
    }
    export interface $Control {
    }
    export class $JumpControl implements $Control {
        /**
         * Called to actually make the entity jump if isJumping is true.
         */
        jump(): void;
        /**
         * Called to actually make the entity jump if isJumping is true.
         */
        tick(): void;
        constructor(mob: $Mob);
    }
    export class $MoveControl$Operation extends $Enum<$MoveControl$Operation> {
    }
    /**
     * Values that may be interpreted as {@link $MoveControl$Operation}.
     */
    export type $MoveControl$Operation_ = "wait" | "move_to" | "strafe" | "jumping";
    export class $LookControl implements $Control {
        getWantedX(): number;
        getWantedY(): number;
        getWantedZ(): number;
        isLookingAtTarget(): boolean;
        /**
         * Updates look
         */
        tick(): void;
        /**
         * Sets the controlling mob's look vector to the provided entity's location
         */
        setLookAt(entity: $Entity): void;
        /**
         * Sets position to look at
         */
        setLookAt(x: number, arg1: number, y: number, arg3: number, z: number): void;
        /**
         * Sets the mob's look vector
         */
        setLookAt(lookVector: $Vec3_): void;
        setLookAt(x: number, arg1: number, y: number): void;
        /**
         * Sets position to look at using entity
         */
        setLookAt(entity: $Entity, deltaYaw: number, deltaPitch: number): void;
        constructor(mob: $Mob);
        get wantedX(): number;
        get wantedY(): number;
        get wantedZ(): number;
        get lookingAtTarget(): boolean;
    }
    export class $SmoothSwimmingMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
        constructor(mob: $Mob, maxTurnX: number, maxTurnY: number, inWaterSpeedModifier: number, outsideWaterSpeedModifier: number, applyGravity: boolean);
    }
    export class $FlyingMoveControl extends $MoveControl {
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
        constructor(mob: $Mob, maxTurn: number, hoversInPlace: boolean);
    }
    export class $BodyRotationControl implements $Control {
        /**
         * Update the Head and Body rendering angles
         */
        clientTick(): void;
        constructor(mob: $Mob);
    }
    export class $MoveControl implements $Control {
        /**
         * Sets the speed and location to move to
         */
        setWantedPosition(x: number, arg1: number, y: number, arg3: number): void;
        /**
         * @return If the mob is currently trying to go somewhere
         */
        hasWanted(): boolean;
        strafe(forward: number, strafe: number): void;
        getWantedX(): number;
        getWantedY(): number;
        getWantedZ(): number;
        getSpeedModifier(): number;
        tick(): void;
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
        constructor(mob: $Mob);
        get wantedX(): number;
        get wantedY(): number;
        get wantedZ(): number;
        get speedModifier(): number;
    }
    export class $SmoothSwimmingLookControl extends $LookControl {
        constructor(mob: $Mob, maxYRotFromCenter: number);
    }
}
