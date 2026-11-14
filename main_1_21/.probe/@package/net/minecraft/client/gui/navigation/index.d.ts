import { $IntComparator } from "@package/it/unimi/dsi/fastutil/ints";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/navigation" {
    export class $ScreenRectangle extends $Record {
        overlaps(rectangle: $ScreenRectangle_): boolean;
        bottom(): number;
        getLength(axis: $ScreenAxis_): number;
        position(): $ScreenPosition;
        static of(axis: $ScreenAxis_, primaryPosition: number, secondaryPosition: number, primaryLength: number, secondaryLength: number): $ScreenRectangle;
        static empty(): $ScreenRectangle;
        top(): number;
        step(direction: $ScreenDirection_): $ScreenRectangle;
        left(): number;
        right(): number;
        width(): number;
        height(): number;
        containsPoint(x: number, y: number): boolean;
        getBorder(direction: $ScreenDirection_): $ScreenRectangle;
        getBoundInDirection(direction: $ScreenDirection_): number;
        overlapsInAxis(rectangle: $ScreenRectangle_, axis: $ScreenAxis_): boolean;
        getCenterInAxis(axis: $ScreenAxis_): number;
        intersection(rectangle: $ScreenRectangle_): $ScreenRectangle;
        constructor(x: number, y: number, width: number, height: number);
        constructor(arg0: $ScreenPosition_, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $ScreenRectangle}.
     */
    export type $ScreenRectangle_ = { height?: number, width?: number, position?: $ScreenPosition_,  } | [height?: number, width?: number, position?: $ScreenPosition_, ];
    export class $FocusNavigationEvent$InitialFocus implements $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        constructor();
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    export class $FocusNavigationEvent$ArrowNavigation extends $Record implements $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        direction(): $ScreenDirection;
        constructor(arg0: $ScreenDirection_);
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $FocusNavigationEvent$ArrowNavigation}.
     */
    export type $FocusNavigationEvent$ArrowNavigation_ = { direction?: $ScreenDirection_,  } | [direction?: $ScreenDirection_, ];
    export class $ScreenAxis extends $Enum<$ScreenAxis> {
        getNegative(): $ScreenDirection;
        static values(): $ScreenAxis[];
        static valueOf(arg0: string): $ScreenAxis;
        getDirection(isPositive: boolean): $ScreenDirection;
        orthogonal(): $ScreenAxis;
        getPositive(): $ScreenDirection;
        static VERTICAL: $ScreenAxis;
        static HORIZONTAL: $ScreenAxis;
        get negative(): $ScreenDirection;
        get positive(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $ScreenAxis}.
     */
    export type $ScreenAxis_ = "horizontal" | "vertical";
    export class $ScreenPosition extends $Record {
        static of(axis: $ScreenAxis_, primaryPosition: number, secondaryPosition: number): $ScreenPosition;
        x(): number;
        y(): number;
        step(direction: $ScreenDirection_): $ScreenPosition;
        getCoordinate(axis: $ScreenAxis_): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $ScreenPosition}.
     */
    export type $ScreenPosition_ = { x?: number, y?: number,  } | [x?: number, y?: number, ];
    export class $CommonInputs {
        static selected(key: number): boolean;
        constructor();
    }
    export class $FocusNavigationEvent$TabNavigation extends $Record implements $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        forward(): boolean;
        constructor(arg0: boolean);
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $FocusNavigationEvent$TabNavigation}.
     */
    export type $FocusNavigationEvent$TabNavigation_ = { forward?: boolean,  } | [forward?: boolean, ];
    export class $ScreenDirection extends $Enum<$ScreenDirection> {
        static values(): $ScreenDirection[];
        static valueOf(arg0: string): $ScreenDirection;
        isPositive(): boolean;
        isAfter(first: number, second: number): boolean;
        isBefore(first: number, second: number): boolean;
        getOpposite(): $ScreenDirection;
        getAxis(): $ScreenAxis;
        coordinateValueComparator(): $IntComparator;
        static DOWN: $ScreenDirection;
        static LEFT: $ScreenDirection;
        static RIGHT: $ScreenDirection;
        static UP: $ScreenDirection;
        get positive(): boolean;
        get opposite(): $ScreenDirection;
        get axis(): $ScreenAxis;
    }
    /**
     * Values that may be interpreted as {@link $ScreenDirection}.
     */
    export type $ScreenDirection_ = "up" | "down" | "left" | "right";
    export class $FocusNavigationEvent {
    }
    export interface $FocusNavigationEvent {
        getVerticalDirectionForInitialFocus(): $ScreenDirection;
        get verticalDirectionForInitialFocus(): $ScreenDirection;
    }
    /**
     * Values that may be interpreted as {@link $FocusNavigationEvent}.
     */
    export type $FocusNavigationEvent_ = (() => $ScreenDirection_);
}
