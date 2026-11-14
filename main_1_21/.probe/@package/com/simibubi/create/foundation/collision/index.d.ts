import { $Matrix3dAccessor } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/contraptions";
import { $Shapes$DoubleLineConsumer } from "@package/net/minecraft/world/phys/shapes";
import { $AABB, $AABB_, $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/collision" {
    export class $ContinuousOBBCollider$ContinuousSeparationManifold {
    }
    export class $CollisionList$Populate implements $Shapes$DoubleLineConsumer {
        append(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        consume(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        appendFrom(arg0: $CollisionList, arg1: number): void;
        offsetX: number;
        offsetZ: number;
        offsetY: number;
        constructor(arg0: $CollisionList);
    }
    export class $Matrix3d implements $Matrix3dAccessor {
        asIdentity(): $Matrix3d;
        asXRotation(arg0: number): $Matrix3d;
        asZRotation(arg0: number): $Matrix3d;
        transformTransposed(arg0: number, arg1: number, arg2: number): $Vec3;
        transformTransposed(arg0: $Vec3_): $Vec3;
        asYRotation(arg0: number): $Matrix3d;
        scale(arg0: number): $Matrix3d;
        transform(arg0: number, arg1: number, arg2: number): $Vec3;
        transform(arg0: $Vec3_): $Vec3;
        multiply(arg0: $Matrix3d): $Matrix3d;
        getM00(): number;
        setM00(arg0: number): void;
        getM01(): number;
        setM01(arg0: number): void;
        getM02(): number;
        setM02(arg0: number): void;
        getM10(): number;
        setM10(arg0: number): void;
        getM11(): number;
        setM11(arg0: number): void;
        getM12(): number;
        setM12(arg0: number): void;
        getM20(): number;
        setM20(arg0: number): void;
        getM21(): number;
        setM21(arg0: number): void;
        getM22(): number;
        setM22(arg0: number): void;
        constructor();
    }
    export class $CollisionList {
        centerY: number[];
        centerZ: number[];
        size: number;
        centerX: number[];
        extentsZ: number[];
        extentsY: number[];
        extentsX: number[];
        static DEFAULT_CAPACITY: number;
        constructor();
    }
    export class $OrientedBB {
        setCenter(arg0: $Vec3_): void;
        setRotation(arg0: $Matrix3d): void;
        getAsAABB(): $AABB;
        copy(): $OrientedBB;
        move(arg0: $Vec3_): void;
        getRotation(): $Matrix3d;
        getCenter(): $Vec3;
        constructor(arg0: $AABB_);
        constructor();
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $Matrix3d);
        get asAABB(): $AABB;
    }
    export class $ContinuousOBBCollider {
        static collideMany(arg0: $CollisionList, arg1: $CollisionList, arg2: $OrientedBB, arg3: $Vec3_, arg4: number, arg5: boolean): $ContinuousOBBCollider$CollisionResponse;
        constructor();
    }
    export class $ContinuousOBBCollider$CollisionResponse {
        normal: $Vec3;
        surfaceCollision: boolean;
        collisionResponse: $Vec3;
        location: $Vec3;
        temporalResponse: number;
        constructor();
    }
}
