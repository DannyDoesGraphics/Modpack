import { $IntConsumer_ as $IntConsumer_$1, $IntIterator } from "@package/it/unimi/dsi/fastutil/ints";
import { $Annotation } from "@package/java/lang/annotation";
import { $IntConsumer_, $Consumer_ } from "@package/java/util/function";
import { $Direction_, $Direction$Axis_, $Direction, $FrontAndTop, $FrontAndTop_ } from "@package/net/minecraft/core";
import { $ITransformationExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Codec } from "@package/com/mojang/serialization";
import { $Triple } from "@package/org/apache/commons/lang3/tuple";
import { $Enum, $Record, $Iterable } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Vector4f, $Matrix3f, $Matrix4f, $Quaternionf, $Vector3f } from "@package/org/joml";

declare module "@package/com/mojang/math" {
    export class $OctahedralGroup extends $Enum<$OctahedralGroup> implements $StringRepresentable {
        transformation(): $Matrix3f;
        inverts(axis: $Direction$Axis_): boolean;
        static values(): $OctahedralGroup[];
        static valueOf(arg0: string): $OctahedralGroup;
        compose(other: $OctahedralGroup_): $OctahedralGroup;
        rotate(direction: $Direction_): $Direction;
        rotate(frontAndTop: $FrontAndTop_): $FrontAndTop;
        inverse(): $OctahedralGroup;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ROT_60_REF_PNP: $OctahedralGroup;
        static ROT_180_EDGE_YZ_POS: $OctahedralGroup;
        static ROT_180_FACE_XZ: $OctahedralGroup;
        static ROT_180_FACE_XY: $OctahedralGroup;
        static ROT_90_X_POS: $OctahedralGroup;
        static ROT_60_REF_NPN: $OctahedralGroup;
        static SWAP_NEG_XZ: $OctahedralGroup;
        static ROT_60_REF_NNN: $OctahedralGroup;
        static ROT_60_REF_NPP: $OctahedralGroup;
        static ROT_60_REF_PPN: $OctahedralGroup;
        static SWAP_NEG_XY: $OctahedralGroup;
        static ROT_90_REF_Z_NEG: $OctahedralGroup;
        static ROT_90_X_NEG: $OctahedralGroup;
        static ROT_180_EDGE_YZ_NEG: $OctahedralGroup;
        static ROT_60_REF_NNP: $OctahedralGroup;
        static ROT_60_REF_PNN: $OctahedralGroup;
        static ROT_60_REF_PPP: $OctahedralGroup;
        static ROT_180_EDGE_XZ_NEG: $OctahedralGroup;
        static ROT_120_NNN: $OctahedralGroup;
        static ROT_120_NPP: $OctahedralGroup;
        static ROT_120_PPN: $OctahedralGroup;
        static ROT_120_NPN: $OctahedralGroup;
        static ROT_90_REF_X_POS: $OctahedralGroup;
        static ROT_120_PNP: $OctahedralGroup;
        static SWAP_YZ: $OctahedralGroup;
        static ROT_90_REF_Y_NEG: $OctahedralGroup;
        static ROT_120_NNP: $OctahedralGroup;
        static ROT_120_PNN: $OctahedralGroup;
        static ROT_120_PPP: $OctahedralGroup;
        static ROT_90_Y_POS: $OctahedralGroup;
        static ROT_180_EDGE_XZ_POS: $OctahedralGroup;
        static ROT_90_Y_NEG: $OctahedralGroup;
        static ROT_180_EDGE_XY_NEG: $OctahedralGroup;
        static INVERT_X: $OctahedralGroup;
        static ROT_90_REF_Y_POS: $OctahedralGroup;
        static ROT_90_Z_NEG: $OctahedralGroup;
        static ROT_180_FACE_YZ: $OctahedralGroup;
        static ROT_90_REF_X_NEG: $OctahedralGroup;
        static ROT_180_EDGE_XY_POS: $OctahedralGroup;
        static ROT_90_Z_POS: $OctahedralGroup;
        static INVERSION: $OctahedralGroup;
        static SWAP_NEG_YZ: $OctahedralGroup;
        static IDENTITY: $OctahedralGroup;
        static ROT_90_REF_Z_POS: $OctahedralGroup;
        static SWAP_XY: $OctahedralGroup;
        static SWAP_XZ: $OctahedralGroup;
        static INVERT_Z: $OctahedralGroup;
        static INVERT_Y: $OctahedralGroup;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $OctahedralGroup}.
     */
    export type $OctahedralGroup_ = "identity" | "rot_180_face_xy" | "rot_180_face_xz" | "rot_180_face_yz" | "rot_120_nnn" | "rot_120_nnp" | "rot_120_npn" | "rot_120_npp" | "rot_120_pnn" | "rot_120_pnp" | "rot_120_ppn" | "rot_120_ppp" | "rot_180_edge_xy_neg" | "rot_180_edge_xy_pos" | "rot_180_edge_xz_neg" | "rot_180_edge_xz_pos" | "rot_180_edge_yz_neg" | "rot_180_edge_yz_pos" | "rot_90_x_neg" | "rot_90_x_pos" | "rot_90_y_neg" | "rot_90_y_pos" | "rot_90_z_neg" | "rot_90_z_pos" | "inversion" | "invert_x" | "invert_y" | "invert_z" | "rot_60_ref_nnn" | "rot_60_ref_nnp" | "rot_60_ref_npn" | "rot_60_ref_npp" | "rot_60_ref_pnn" | "rot_60_ref_pnp" | "rot_60_ref_ppn" | "rot_60_ref_ppp" | "swap_xy" | "swap_yz" | "swap_xz" | "swap_neg_xy" | "swap_neg_yz" | "swap_neg_xz" | "rot_90_ref_x_neg" | "rot_90_ref_x_pos" | "rot_90_ref_y_neg" | "rot_90_ref_y_pos" | "rot_90_ref_z_neg" | "rot_90_ref_z_pos";
    export class $Divisor implements $IntIterator {
        static asIterable(numerator: number, denominator: number): $Iterable<number>;
        hasNext(): boolean;
        nextInt(): number;
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        forEachRemaining(arg0: $IntConsumer_$1): void;
        skip(arg0: number): number;
        forEachRemaining(arg0: $IntConsumer_): void;
        remove(): void;
        next(): number;
        constructor(numerator: number, denominator: number);
    }
    export class $Transformation implements $ITransformationExtension {
        getNormalMatrix(): $Matrix3f;
        getLeftRotation(): $Quaternionf;
        getRightRotation(): $Quaternionf;
        getMatrix(): $Matrix4f;
        static identity(): $Transformation;
        compose(other: $Transformation): $Transformation;
        inverse(): $Transformation;
        slerp(transformation: $Transformation, delta: number): $Transformation;
        getTranslation(): $Vector3f;
        getScale(): $Vector3f;
        /**
         * Returns a new transformation with a changed origin by applying the given parameter (which is relative to the
         * current origin). This can be used for switching between coordinate systems.
         */
        applyOrigin(origin: $Vector3f): $Transformation;
        /**
         * Rotates the direction according to this transformation and returns the nearest `Direction` to the
         * resulting direction.
         */
        rotateTransform(facing: $Direction_): $Direction;
        blockCenterToCorner(): $Transformation;
        blockCornerToCenter(): $Transformation;
        /**
         * @return whether this transformation is the identity transformation
         */
        isIdentity(): boolean;
        /**
         * Transforms the normal according to this transformation and normalizes it.
         */
        transformNormal(normal: $Vector3f): void;
        /**
         * Transforms the position according to this transformation.
         */
        transformPosition(position: $Vector4f): void;
        static CODEC: $Codec<$Transformation>;
        static EXTENDED_CODEC: $Codec<$Transformation>;
        constructor(matrix: $Matrix4f | null);
        constructor(translation: $Vector3f | null, leftRotation: $Quaternionf | null, scale: $Vector3f | null, rightRotation: $Quaternionf | null);
        get normalMatrix(): $Matrix3f;
        get leftRotation(): $Quaternionf;
        get rightRotation(): $Quaternionf;
        get matrix(): $Matrix4f;
        get translation(): $Vector3f;
        get scale(): $Vector3f;
    }
    export class $Constants {
        static PI: number;
        static RAD_TO_DEG: number;
        static DEG_TO_RAD: number;
        static EPSILON: number;
        constructor();
    }
    /**
     * The symmetric group S3, also known as all the permutation orders of three elements.
     */
    export class $SymmetricGroup3 extends $Enum<$SymmetricGroup3> {
        transformation(): $Matrix3f;
        permutation(element: number): number;
        static values(): $SymmetricGroup3[];
        static valueOf(arg0: string): $SymmetricGroup3;
        compose(other: $SymmetricGroup3_): $SymmetricGroup3;
        static P213: $SymmetricGroup3;
        static P312: $SymmetricGroup3;
        static P132: $SymmetricGroup3;
        static P231: $SymmetricGroup3;
        static P123: $SymmetricGroup3;
        static P321: $SymmetricGroup3;
    }
    /**
     * Values that may be interpreted as {@link $SymmetricGroup3}.
     */
    export type $SymmetricGroup3_ = "p123" | "p213" | "p132" | "p231" | "p312" | "p321";
    export class $MethodsReturnNonnullByDefault implements $Annotation {
    }
    export class $FieldsAreNonnullByDefault implements $Annotation {
    }
    export class $GivensParameters extends $Record {
        sinHalf(): number;
        cosHalf(): number;
        static fromUnnormalized(sinHalf: number, cosHalf: number): $GivensParameters;
        aroundZ(quaternion: $Quaternionf): $Quaternionf;
        aroundZ(matrix: $Matrix3f): $Matrix3f;
        aroundY(matrix: $Matrix3f): $Matrix3f;
        aroundY(quaternion: $Quaternionf): $Quaternionf;
        aroundX(matrix: $Matrix3f): $Matrix3f;
        aroundX(quaternion: $Quaternionf): $Quaternionf;
        static fromPositiveAngle(angle: number): $GivensParameters;
        sin(): number;
        cos(): number;
        inverse(): $GivensParameters;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $GivensParameters}.
     */
    export type $GivensParameters_ = { sinHalf?: number, cosHalf?: number,  } | [sinHalf?: number, cosHalf?: number, ];
    export class $MatrixUtil {
        static svdDecompose(matrix: $Matrix3f): $Triple<$Quaternionf, $Vector3f, $Quaternionf>;
        static eigenvalueJacobi(input: $Matrix3f, iterations: number): $Quaternionf;
        static isPureTranslation(matrix: $Matrix4f): boolean;
        static isOrthonormal(matrix: $Matrix4f): boolean;
        static mulComponentWise(matrix: $Matrix4f, scalar: number): $Matrix4f;
    }
    export class $Axis {
        static of(axis: $Vector3f): $Axis;
        static ZN: $Axis;
        static YN: $Axis;
        static XN: $Axis;
        static ZP: $Axis;
        static YP: $Axis;
        static XP: $Axis;
    }
    export interface $Axis {
        rotation(radians: number): $Quaternionf;
        rotationDegrees(radians: number): $Quaternionf;
    }
    /**
     * Values that may be interpreted as {@link $Axis}.
     */
    export type $Axis_ = ((arg0: number) => $Quaternionf);
}
