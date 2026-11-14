import { $Predicate_, $Supplier_, $ToDoubleFunction_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Mob, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/entity/ai/util" {
    export class $AirAndWaterRandomPos {
        static generateRandomPos(mob: $PathfinderMob, maxDistance: number, yRange: number, y: number, x: number, arg5: number, z: number, arg7: boolean): $BlockPos;
        static getPos(mob: $PathfinderMob, maxDistance: number, yRange: number, y: number, x: number, arg5: number, z: number): $Vec3;
        constructor();
    }
    export class $AirRandomPos {
        static getPosTowards(mob: $PathfinderMob, radius: number, yRange: number, y: number, vectorPosition: $Vec3_, amplifier: number): $Vec3;
        constructor();
    }
    export class $GoalUtils {
        /**
         * @return if the pathfinding malus exists
         */
        static hasMalus(mob: $PathfinderMob, pos: $BlockPos_): boolean;
        /**
         * @return if a mob is stuck, within a certain radius beyond it's restriction radius
         */
        static mobRestricted(mob: $PathfinderMob, radius: number): boolean;
        /**
         * @return if a mob is above or below the map
         */
        static isOutsideLimits(pos: $BlockPos_, mob: $PathfinderMob): boolean;
        /**
         * @return if the destination can't be pathfinded to
         */
        static isNotStable(navigation: $PathNavigation, pos: $BlockPos_): boolean;
        static hasGroundPathNavigation(mob: $Mob): boolean;
        /**
         * @return if the pathfinding malus exists
         */
        static isSolid(mob: $PathfinderMob, pos: $BlockPos_): boolean;
        /**
         * @return if the pathfinding malus exists
         */
        static isWater(mob: $PathfinderMob, pos: $BlockPos_): boolean;
        /**
         * @return if a mob is restricted. The first parameter short circuits the operation.
         */
        static isRestricted(shortCircuit: boolean, mob: $PathfinderMob, pos: $BlockPos_): boolean;
        constructor();
    }
    export class $DefaultRandomPos {
        static getPos(mob: $PathfinderMob, radius: number, verticalDistance: number): $Vec3;
        static getPosTowards(mob: $PathfinderMob, radius: number, yRange: number, vectorPosition: $Vec3_, amplifier: number): $Vec3;
        static getPosAway(mob: $PathfinderMob, radius: number, yRange: number, vectorPosition: $Vec3_): $Vec3;
        constructor();
    }
    export class $LandRandomPos {
        static movePosUpOutOfSolid(mob: $PathfinderMob, pos: $BlockPos_): $BlockPos;
        static generateRandomPosTowardDirection(mob: $PathfinderMob, radius: number, shortCircuit: boolean, pos: $BlockPos_): $BlockPos;
        static getPos(mob: $PathfinderMob, radius: number, verticalRange: number): $Vec3;
        static getPos(mob: $PathfinderMob, radius: number, yRange: number, toDoubleFunction: $ToDoubleFunction_<$BlockPos>): $Vec3;
        static getPosTowards(mob: $PathfinderMob, radius: number, yRange: number, vectorPosition: $Vec3_): $Vec3;
        static getPosAway(mob: $PathfinderMob, radius: number, yRange: number, vectorPosition: $Vec3_): $Vec3;
        constructor();
    }
    export class $RandomPos {
        /**
         * @return the highest above position that is within the provided conditions
         */
        static moveUpOutOfSolid(pos: $BlockPos_, maxY: number, posPredicate: $Predicate_<$BlockPos>): $BlockPos;
        /**
         * Tries 10 times to maximize the return value of the position to double function based on the supplied position
         */
        static generateRandomPos(posSupplier: $Supplier_<$BlockPos>, toDoubleFunction: $ToDoubleFunction_<$BlockPos>): $Vec3;
        static generateRandomPos(mob: $PathfinderMob, posSupplier: $Supplier_<$BlockPos>): $Vec3;
        /**
         * @return a random (x, y, z) coordinate by picking a point (x, z), adding a random angle, up to a difference of `maxAngleDelta`. The y position is randomly chosen from the range `[y - yRange, y + yRange]`. Will be `null` if the chosen coordinate is outside a distance of `maxHorizontalDistance` from the origin.
         */
        static generateRandomDirectionWithinRadians(random: $RandomSource, maxHorizontalDifference: number, yRange: number, y: number, x: number, arg5: number, z: number): $BlockPos;
        /**
         * Gets a random position within a certain distance.
         */
        static generateRandomDirection(random: $RandomSource, horizontalDistance: number, verticalDistance: number): $BlockPos;
        /**
         * @return a random position within range, only if the mob is currently restricted
         */
        static generateRandomPosTowardDirection(mob: $PathfinderMob, range: number, random: $RandomSource, pos: $BlockPos_): $BlockPos;
        /**
         * Finds a position above based on the conditions.
         * 
         * After it finds the position once, it will continue to move up until aboveSolidAmount is reached or the position is no longer valid
         */
        static moveUpToAboveSolid(pos: $BlockPos_, aboveSolidAmount: number, maxY: number, posPredicate: $Predicate_<$BlockPos>): $BlockPos;
        constructor();
    }
    export class $HoverRandomPos {
        /**
         * Tries to generate a random position a couple different ways, and if failing, sees if swimming vertically is an option.
         */
        static getPos(mob: $PathfinderMob, radius: number, yRange: number, x: number, arg4: number, z: number, arg6: number, amplifier: number): $Vec3;
        constructor();
    }
}
