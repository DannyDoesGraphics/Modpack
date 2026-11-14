import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties_, $ModelProperties, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix3f, $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        topLevelBones(): $List<$GeoBone>;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        getBone(arg0: string): ($GeoBone) | undefined;
        properties(): $ModelProperties;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_,  } | [topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_, ];
    export class $GeoBone {
        markRotationAsChanged(): void;
        setRotZ(arg0: number): void;
        markPositionAsChanged(): void;
        setPosZ(arg0: number): void;
        markScaleAsChanged(): void;
        setScaleX(arg0: number): void;
        setScaleY(arg0: number): void;
        setScaleZ(arg0: number): void;
        setChildrenHidden(arg0: boolean): void;
        setPivotZ(arg0: number): void;
        saveSnapshot(): $BoneSnapshot;
        setTrackingMatrices(arg0: boolean): void;
        getLocalSpaceMatrix(): $Matrix4f;
        getModelSpaceMatrix(): $Matrix4f;
        getWorldSpaceMatrix(): $Matrix4f;
        getPosZ(): number;
        getRotZ(): number;
        getScaleZ(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getPivotX(): number;
        getPivotY(): number;
        getPivotZ(): number;
        hasScaleChanged(): boolean;
        hasRotationChanged(): boolean;
        hasPositionChanged(): boolean;
        resetStateChanges(): void;
        saveInitialSnapshot(): void;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        getInflate(): number;
        shouldNeverRender(): boolean;
        getReset(): boolean;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        getWorldSpaceNormal(): $Matrix3f;
        getLocalPosition(): $Vector3d;
        getModelPosition(): $Vector3d;
        setModelPosition(arg0: $Vector3d): void;
        getModelRotationMatrix(): $Matrix4f;
        getPositionVector(): $Vector3d;
        getScaleVector(): $Vector3d;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        isTrackingMatrices(): boolean;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        isHidingChildren(): boolean;
        getChildBones(): $List<$GeoBone>;
        setPivotX(arg0: number): void;
        setPivotY(arg0: number): void;
        getInitialSnapshot(): $BoneSnapshot;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getRotY(): number;
        setRotY(arg0: number): void;
        getRotX(): number;
        setRotX(arg0: number): void;
        getWorldPosition(): $Vector3d;
        getCubes(): $List<$GeoCube>;
        getPosX(): number;
        getPosY(): number;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        setPosX(arg0: number): void;
        setPosY(arg0: number): void;
        getScaleX(): number;
        getScaleY(): number;
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        setHidden(arg0: boolean): void;
        getMirror(): boolean;
        getRotationVector(): $Vector3d;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        set childrenHidden(value: boolean);
        get inflate(): number;
        get reset(): boolean;
        get localPosition(): $Vector3d;
        get modelRotationMatrix(): $Matrix4f;
        get positionVector(): $Vector3d;
        get scaleVector(): $Vector3d;
        get hidingChildren(): boolean;
        get childBones(): $List<$GeoBone>;
        get initialSnapshot(): $BoneSnapshot;
        get worldPosition(): $Vector3d;
        get cubes(): $List<$GeoCube>;
        get name(): string;
        get parent(): $GeoBone;
        get mirror(): boolean;
        get rotationVector(): $Vector3d;
    }
    export class $GeoQuad extends $Record {
        vertices(): $GeoVertex[];
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { vertices?: $GeoVertex_[], direction?: $Direction_, normal?: $Vector3f,  } | [vertices?: $GeoVertex_[], direction?: $Direction_, normal?: $Vector3f, ];
    export class $GeoCube extends $Record {
        quads(): $GeoQuad[];
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        mirror(): boolean;
        rotation(): $Vec3;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { mirror?: boolean, pivot?: $Vec3_, quads?: $GeoQuad_[], rotation?: $Vec3_, size?: $Vec3_, inflate?: number,  } | [mirror?: boolean, pivot?: $Vec3_, quads?: $GeoQuad_[], rotation?: $Vec3_, size?: $Vec3_, inflate?: number, ];
    export class $GeoVertex extends $Record {
        withUVs(arg0: number, arg1: number): $GeoVertex;
        texU(): number;
        texV(): number;
        position(): $Vector3f;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { position?: $Vector3f, texV?: number, texU?: number,  } | [position?: $Vector3f, texV?: number, texU?: number, ];
}
