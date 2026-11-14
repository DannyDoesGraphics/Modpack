import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $PathType_, $NodeEvaluator, $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $Stream } from "@package/java/util/stream";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set_ } from "@package/java/util";

declare module "@package/net/minecraft/world/entity/ai/navigation" {
    export class $GroundPathNavigation extends $PathNavigation {
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        setAvoidSun(avoidSun: boolean): void;
        setCanWalkOverFences(avoidSun: boolean): void;
        setCanOpenDoors(avoidSun: boolean): void;
        setCanPassDoors(avoidSun: boolean): void;
        constructor(mob: $Mob, level: $Level_);
        set avoidSun(value: boolean);
        set canWalkOverFences(value: boolean);
    }
    export class $AmphibiousPathNavigation extends $PathNavigation {
        constructor(arg0: $Mob, arg1: $Level_);
    }
    export class $PathNavigation {
        shouldRecomputePath(pos: $BlockPos_): boolean;
        /**
         * Sets the active `Path` to `null`.
         */
        recomputePath(): void;
        setMaxVisitedNodesMultiplier(multiplier: number): void;
        getTargetPos(): $BlockPos;
        /**
         * Sets the speed
         */
        setSpeedModifier(speed: number): void;
        canCutCorner(pathType: $PathType_): boolean;
        /**
         * Sets the active `Path` to `null`.
         */
        resetMaxVisitedNodesMultiplier(): void;
        /**
         * If on ground or swimming and can swim
         */
        isStuck(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        isInProgress(): boolean;
        isStableDestination(pos: $BlockPos_): boolean;
        getNodeEvaluator(): $NodeEvaluator;
        getMaxDistanceToWaypoint(): number;
        setCanFloat(canSwim: boolean): void;
        createPath(pos: $BlockPos_, regionOffset: number, accuracy: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(pos: $BlockPos_, accuracy: number): $Path;
        createPath(positions: $Set_<$BlockPos_>, distance: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(x: number, arg1: number, y: number, arg3: number): $Path;
        /**
         * Returns a path to one of the elements of the stream or null
         */
        createPath(targets: $Stream<$BlockPos_>, accuracy: number): $Path;
        /**
         * Returns a path to the given entity or null
         */
        createPath(entity: $Entity, accuracy: number): $Path;
        /**
         * If on ground or swimming and can swim
         */
        canFloat(): boolean;
        /**
         * Sets the active `Path` to `null`.
         */
        stop(): void;
        /**
         * If on ground or swimming and can swim
         */
        isDone(): boolean;
        /**
         * Gets the actively used `Path`.
         */
        getPath(): $Path;
        /**
         * Sets the active `Path` to `null`.
         */
        tick(): void;
        /**
         * Sets a new path. If it's different from the old path. Checks to adjust path for sun avoiding, and stores start coords.
         */
        moveTo(pathentity: $Path | null, speed: number): boolean;
        /**
         * Try to find and set a path to EntityLiving. Returns `true` if successful.
         */
        moveTo(entity: $Entity, speed: number): boolean;
        moveTo(x: number, arg1: number, y: number, arg3: number, z: number): boolean;
        /**
         * Try to find and set a path to XYZ. Returns `true` if successful.
         */
        moveTo(x: number, arg1: number, y: number, arg3: number): boolean;
        constructor(mob: $Mob, level: $Level_);
        set maxVisitedNodesMultiplier(value: number);
        get targetPos(): $BlockPos;
        set speedModifier(value: number);
        get stuck(): boolean;
        get inProgress(): boolean;
        get nodeEvaluator(): $NodeEvaluator;
        get maxDistanceToWaypoint(): number;
        get done(): boolean;
        get path(): $Path;
    }
    export class $WaterBoundPathNavigation extends $PathNavigation {
        constructor(mob: $Mob, level: $Level_);
    }
    export class $WallClimberNavigation extends $GroundPathNavigation {
        constructor(mob: $Mob, level: $Level_);
    }
    export class $FlyingPathNavigation extends $PathNavigation {
        /**
         * If on ground or swimming and can swim
         */
        canPassDoors(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canOpenDoors(): boolean;
        setCanOpenDoors(canOpenDoors: boolean): void;
        setCanPassDoors(canOpenDoors: boolean): void;
        constructor(mob: $Mob, level: $Level_);
    }
}
