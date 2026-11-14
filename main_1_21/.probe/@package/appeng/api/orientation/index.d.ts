import { $Level_ } from "@package/net/minecraft/world/level";
import { $Property, $IntegerProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_, $Direction$Axis_, $Direction, $Direction$AxisDirection_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Set, $Set_, $Collection_, $Collection } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $Transformation } from "@package/com/mojang/math";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Quaternionf } from "@package/org/joml";

declare module "@package/appeng/api/orientation" {
    export class $BlockOrientation extends $Enum<$BlockOrientation> {
        setOn(arg0: $BlockEntity): void;
        setOn(arg0: $Level_, arg1: $BlockPos_): void;
        resultingRotate(arg0: $Direction_): $Direction;
        getRelativeSide(arg0: $Direction_): $RelativeSide;
        isRedundant(): boolean;
        getRelativeSides(arg0: $Set_<$Direction_>): $Set<$RelativeSide>;
        getSpin(): number;
        getQuaternion(): $Quaternionf;
        rotateClockwiseAround(arg0: $Direction$Axis_, arg1: $Direction$AxisDirection_): $BlockOrientation;
        rotateClockwiseAround(arg0: $Direction_): $BlockOrientation;
        getAngleX(): number;
        getAngleY(): number;
        getAngleZ(): number;
        getTransformation(): $Transformation;
        static get(arg0: $IOrientationStrategy_, arg1: $BlockState_): $BlockOrientation;
        static get(arg0: $BlockState_): $BlockOrientation;
        static get(arg0: $Direction_): $BlockOrientation;
        static get(arg0: $Direction_, arg1: $Direction_): $BlockOrientation;
        static get(arg0: $Direction_, arg1: number): $BlockOrientation;
        static get(arg0: $BlockEntity): $BlockOrientation;
        static values(): $BlockOrientation[];
        static valueOf(arg0: string): $BlockOrientation;
        rotate(arg0: $Direction_): $Direction;
        getSide(arg0: $RelativeSide_): $Direction;
        getSides(arg0: $Set_<$RelativeSide_>): $Set<$Direction>;
        static UP_SOUTH: $BlockOrientation;
        static EAST_SOUTH: $BlockOrientation;
        static SOUTH_DOWN: $BlockOrientation;
        static UP_NORTH: $BlockOrientation;
        static NORTH_UP: $BlockOrientation;
        static NORTH_WEST: $BlockOrientation;
        static EAST_NORTH: $BlockOrientation;
        static DOWN_EAST: $BlockOrientation;
        static DOWN_WEST: $BlockOrientation;
        static UP_WEST: $BlockOrientation;
        static DOWN_SOUTH: $BlockOrientation;
        static EAST_UP: $BlockOrientation;
        static DOWN_NORTH: $BlockOrientation;
        static UP_EAST: $BlockOrientation;
        static EAST_DOWN: $BlockOrientation;
        static WEST_NORTH: $BlockOrientation;
        static NORTH_EAST: $BlockOrientation;
        static SOUTH_UP: $BlockOrientation;
        static SOUTH_EAST: $BlockOrientation;
        static WEST_SOUTH: $BlockOrientation;
        static WEST_DOWN: $BlockOrientation;
        static SOUTH_WEST: $BlockOrientation;
        static NORTH_DOWN: $BlockOrientation;
        static WEST_UP: $BlockOrientation;
        get redundant(): boolean;
        get spin(): number;
        get quaternion(): $Quaternionf;
        get angleX(): number;
        get angleY(): number;
        get angleZ(): number;
        get transformation(): $Transformation;
    }
    /**
     * Values that may be interpreted as {@link $BlockOrientation}.
     */
    export type $BlockOrientation_ = "down_north" | "down_west" | "down_south" | "down_east" | "up_north" | "up_east" | "up_south" | "up_west" | "north_up" | "north_west" | "north_down" | "north_east" | "south_up" | "south_east" | "south_down" | "south_west" | "west_up" | "west_south" | "west_down" | "west_north" | "east_up" | "east_north" | "east_down" | "east_south";
    export class $OrientationStrategies {
        static horizontalFacing(): $IOrientationStrategy;
        static facingNoPlayerRotation(): $IOrientationStrategy;
        static full(): $IOrientationStrategy;
        static none(): $IOrientationStrategy;
        static facing(): $IOrientationStrategy;
        constructor();
    }
    export class $IOrientableBlock {
    }
    export interface $IOrientableBlock {
        getOrientation(arg0: $BlockState_): $BlockOrientation;
        getOrientationStrategy(): $IOrientationStrategy;
        get orientationStrategy(): $IOrientationStrategy;
    }
    /**
     * Values that may be interpreted as {@link $IOrientableBlock}.
     */
    export type $IOrientableBlock_ = (() => $IOrientationStrategy);
    export class $FacingWithSpinStrategy implements $IOrientationStrategy {
        setSpin(arg0: $BlockState_, arg1: number): $BlockState;
        setFacing(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        getStateForPlacement(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        getSpin(arg0: $BlockState_): number;
        getFacing(arg0: $BlockState_): $Direction;
        getProperties(): $Collection<$Property<never>>;
        setOrientation(arg0: $BlockState_, arg1: $Direction_, arg2: $Direction_): $BlockState;
        setOrientation(arg0: $BlockState_, arg1: $Direction_, arg2: number): $BlockState;
        setUp(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        allowsPlayerRotation(): boolean;
        getAllStates(arg0: $BlockState_): $Stream<$BlockState>;
        getSide(arg0: $BlockState_, arg1: $RelativeSide_): $Direction;
        get properties(): $Collection<$Property<never>>;
    }
    export class $NoOrientationStrategy implements $IOrientationStrategy {
        setSpin(arg0: $BlockState_, arg1: number): $BlockState;
        setFacing(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        getStateForPlacement(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        getSpin(arg0: $BlockState_): number;
        setOrientation(arg0: $BlockState_, arg1: $Direction_, arg2: $Direction_): $BlockState;
        setOrientation(arg0: $BlockState_, arg1: $Direction_, arg2: number): $BlockState;
        getFacing(arg0: $BlockState_): $Direction;
        setUp(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        allowsPlayerRotation(): boolean;
        getAllStates(arg0: $BlockState_): $Stream<$BlockState>;
        getSide(arg0: $BlockState_, arg1: $RelativeSide_): $Direction;
    }
    export class $HorizontalFacingStrategy extends $FacingStrategy {
    }
    export class $IOrientationStrategy {
        static get(arg0: $BlockState_): $IOrientationStrategy;
        static SPIN: $IntegerProperty;
    }
    export interface $IOrientationStrategy {
        setSpin(arg0: $BlockState_, arg1: number): $BlockState;
        setFacing(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        getStateForPlacement(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        getSpin(arg0: $BlockState_): number;
        setOrientation(arg0: $BlockState_, arg1: $Direction_, arg2: $Direction_): $BlockState;
        setOrientation(arg0: $BlockState_, arg1: $Direction_, arg2: number): $BlockState;
        getFacing(arg0: $BlockState_): $Direction;
        setUp(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        allowsPlayerRotation(): boolean;
        getAllStates(arg0: $BlockState_): $Stream<$BlockState>;
        getProperties(): $Collection<$Property<never>>;
        getSide(arg0: $BlockState_, arg1: $RelativeSide_): $Direction;
        get properties(): $Collection<$Property<never>>;
    }
    /**
     * Values that may be interpreted as {@link $IOrientationStrategy}.
     */
    export type $IOrientationStrategy_ = (() => $Collection_<$Property<never>>);
    export class $FacingStrategy implements $IOrientationStrategy {
        setFacing(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        getStateForPlacement(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        getFacing(arg0: $BlockState_): $Direction;
        allowsPlayerRotation(): boolean;
        getProperties(): $Collection<$Property<never>>;
        setSpin(arg0: $BlockState_, arg1: number): $BlockState;
        getSpin(arg0: $BlockState_): number;
        setOrientation(arg0: $BlockState_, arg1: $Direction_, arg2: $Direction_): $BlockState;
        setOrientation(arg0: $BlockState_, arg1: $Direction_, arg2: number): $BlockState;
        setUp(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        getAllStates(arg0: $BlockState_): $Stream<$BlockState>;
        getSide(arg0: $BlockState_, arg1: $RelativeSide_): $Direction;
        get properties(): $Collection<$Property<never>>;
    }
    export class $RelativeSide extends $Enum<$RelativeSide> {
        static fromUnrotatedSide(arg0: $Direction_): $RelativeSide;
        getUnrotatedSide(): $Direction;
        static values(): $RelativeSide[];
        static valueOf(arg0: string): $RelativeSide;
        static TOP: $RelativeSide;
        static LEFT: $RelativeSide;
        static FRONT: $RelativeSide;
        static BACK: $RelativeSide;
        static RIGHT: $RelativeSide;
        static BOTTOM: $RelativeSide;
        get unrotatedSide(): $Direction;
    }
    /**
     * Values that may be interpreted as {@link $RelativeSide}.
     */
    export type $RelativeSide_ = "front" | "back" | "top" | "bottom" | "left" | "right";
}
