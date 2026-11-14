import { $BlockPos_, $Vec3i, $Direction$Axis_, $SectionPos } from "@package/net/minecraft/core";
import { $Collection_ } from "@package/java/util";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/utility/flywheel/box" {
    export class $Box$CoordinateConsumer {
    }
    export interface $Box$CoordinateConsumer {
        accept(arg0: number, arg1: number, arg2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Box$CoordinateConsumer}.
     */
    export type $Box$CoordinateConsumer_ = ((arg0: number, arg1: number, arg2: number) => void);
    export class $MutableBox implements $Box {
        getMaxX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        setMinX(arg0: number): void;
        setMinZ(arg0: number): $MutableBox;
        setMaxX(arg0: number): void;
        setMaxY(arg0: number): void;
        setMaxZ(arg0: number): void;
        getMaxY(): number;
        static containingAll(arg0: $Collection_<$BlockPos_>): $Box;
        intersectAssign(arg0: $Box): void;
        static ofRadius(arg0: number): $MutableBox;
        unionAssign(arg0: $AABB_): void;
        unionAssign(arg0: $Box): void;
        fixMinMax(): void;
        nextPowerOf2(): void;
        nextPowerOf2Centered(): void;
        mirrorAbout(arg0: $Direction$Axis_): void;
        static from(arg0: $Vec3i): $MutableBox;
        static from(arg0: $Vec3i, arg1: $Vec3i): $MutableBox;
        static from(arg0: $SectionPos): $MutableBox;
        static from(arg0: $AABB_): $MutableBox;
        grow(arg0: number): void;
        grow(arg0: number, arg1: number, arg2: number): void;
        setMin(arg0: number, arg1: number, arg2: number): void;
        setMin(arg0: $Vec3i): void;
        setMax(arg0: number, arg1: number, arg2: number): void;
        setMax(arg0: $Vec3i): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: $Vec3i): void;
        setMinY(arg0: number): void;
        assign(arg0: $Vec3i, arg1: $Vec3i): void;
        assign(arg0: $Box): void;
        assign(arg0: $AABB_): void;
        getMinX(): number;
        getMinY(): number;
        sameAs(arg0: $Box): boolean;
        sameAs(arg0: $AABB_): boolean;
        sameAs(arg0: $Box, arg1: number): boolean;
        sizeX(): number;
        sizeY(): number;
        sizeZ(): number;
        forEachContained(arg0: $Box$CoordinateConsumer_): void;
        hasPowerOf2Sides(): boolean;
        isEmpty(): boolean;
        contains(arg0: number, arg1: number, arg2: number): boolean;
        contains(arg0: $Box): boolean;
        copy(): $MutableBox;
        union(arg0: $Box): $MutableBox;
        volume(): number;
        toAABB(): $AABB;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        intersects(arg0: $Box): boolean;
        intersect(arg0: $Box): $MutableBox;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
        constructor();
        get empty(): boolean;
    }
    export class $Box {
    }
    export interface $Box {
        getMaxX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        sameAs(arg0: $Box): boolean;
        sameAs(arg0: $AABB_): boolean;
        sameAs(arg0: $Box, arg1: number): boolean;
        sizeX(): number;
        sizeY(): number;
        sizeZ(): number;
        getMaxY(): number;
        forEachContained(arg0: $Box$CoordinateConsumer_): void;
        hasPowerOf2Sides(): boolean;
        isEmpty(): boolean;
        contains(arg0: number, arg1: number, arg2: number): boolean;
        contains(arg0: $Box): boolean;
        copy(): $MutableBox;
        union(arg0: $Box): $MutableBox;
        volume(): number;
        toAABB(): $AABB;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        intersects(arg0: $Box): boolean;
        getMinX(): number;
        getMinY(): number;
        intersect(arg0: $Box): $MutableBox;
        get maxX(): number;
        get minZ(): number;
        get maxZ(): number;
        get maxY(): number;
        get empty(): boolean;
        get minX(): number;
        get minY(): number;
    }
}
