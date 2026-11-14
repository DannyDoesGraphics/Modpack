import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $Direction_, $Direction$Axis, $Direction } from "@package/net/minecraft/core";
import { $ItemTransforms, $ItemTransform, $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $ThreadLocal } from "@package/java/lang";
import { $List, $Map_, $Collection } from "@package/java/util";
import { $Vector2f, $Vector3f } from "@package/org/joml";

declare module "@package/appeng/thirdparty/fabric" {
    export class $SpriteFinderImpl$Node {
    }
    export class $NormalHelper {
        static packNormal(arg0: $Vector3f, arg1: number): number;
        static packNormal(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static getPackedNormalComponent(arg0: number, arg1: number): number;
        static computeFaceNormal(arg0: $Vector3f, arg1: $QuadView): void;
    }
    export class $SpriteFinderImpl$SpriteFinderAccess {
    }
    export interface $SpriteFinderImpl$SpriteFinderAccess {
        fabric_spriteFinder(): $SpriteFinderImpl;
    }
    /**
     * Values that may be interpreted as {@link $SpriteFinderImpl$SpriteFinderAccess}.
     */
    export type $SpriteFinderImpl$SpriteFinderAccess_ = (() => $SpriteFinderImpl);
    export class $RenderContext$QuadTransform {
    }
    export interface $RenderContext$QuadTransform {
        transform(arg0: $MutableQuadView): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderContext$QuadTransform}.
     */
    export type $RenderContext$QuadTransform_ = ((arg0: $MutableQuadView) => boolean);
    export class $Mesh {
    }
    export interface $Mesh {
        toBakedBlockQuads(): $Collection<$BakedQuad>;
        forEach(arg0: $Consumer_<$QuadView>): void;
    }
    /**
     * Values that may be interpreted as {@link $Mesh}.
     */
    export type $Mesh_ = ((arg0: $Consumer<$QuadView>) => void);
    export class $MeshBuilderImpl$Maker extends $MutableQuadViewImpl implements $QuadEmitter {
        spriteBake(arg0: $TextureAtlasSprite, arg1: number): $MutableQuadView;
        shade(arg0: boolean): $MutableQuadView;
        fromVanilla(arg0: $BakedQuad, arg1: $Direction_): $MutableQuadViewImpl;
        uv(arg0: number, arg1: number, arg2: number): $MutableQuadView;
        pos(arg0: number, arg1: $Vector3f): $MutableQuadView;
        pos(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        normal(arg0: number, arg1: $Vector3f): $MutableQuadView;
        tag(arg0: number): $MutableQuadView;
        lightmap(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        ambientOcclusion(arg0: boolean): $MutableQuadView;
        static THREAD_LOCAL: $ThreadLocal<$MutableQuadView>;
    }
    export class $MeshBuilderImpl implements $MeshBuilder {
        getEmitter(): $QuadEmitter;
        build(): $Mesh;
        constructor();
        get emitter(): $QuadEmitter;
    }
    export class $MeshImpl implements $Mesh {
        data(): number[];
        forEach(arg0: $Consumer_<$QuadView>): void;
        toBakedBlockQuads(): $Collection<$BakedQuad>;
    }
    export class $Renderer {
        static getInstance(): $Renderer;
        static get instance(): $Renderer;
    }
    export interface $Renderer {
        meshBuilder(): $MeshBuilder;
    }
    /**
     * Values that may be interpreted as {@link $Renderer}.
     */
    export type $Renderer_ = (() => $MeshBuilder);
    export class $QuadEmitter {
        static CULL_FACE_EPSILON: number;
    }
    export interface $QuadEmitter extends $MutableQuadView {
        nominalFace(arg0: $Direction_): $QuadEmitter;
        uvUnitSquare(): $QuadEmitter;
        uv(arg0: number, arg1: $Vector2f): $QuadEmitter;
        emit(): $QuadEmitter;
        color(arg0: number, arg1: number, arg2: number, arg3: number): $QuadEmitter;
        color(arg0: number, arg1: number): $QuadEmitter;
        normal(arg0: number, arg1: number, arg2: number, arg3: number): $QuadEmitter;
        square(arg0: $Direction_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $QuadEmitter;
        cullFace(arg0: $Direction_): $QuadEmitter;
        lightmap(arg0: number, arg1: number): $QuadEmitter;
        colorIndex(arg0: number): $QuadEmitter;
        spriteBake(arg0: $TextureAtlasSprite, arg1: number): $MutableQuadView;
        shade(arg0: boolean): $MutableQuadView;
        fromVanilla(arg0: $BakedQuad, arg1: $Direction_): $MutableQuadView;
        uv(arg0: number, arg1: number, arg2: number): $MutableQuadView;
        pos(arg0: number, arg1: $Vector3f): $MutableQuadView;
        pos(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        normal(arg0: number, arg1: $Vector3f): $MutableQuadView;
        tag(arg0: number): $MutableQuadView;
        lightmap(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        ambientOcclusion(arg0: boolean): $MutableQuadView;
    }
    export class $GeometryHelper {
        static computeShapeFlags(arg0: $QuadView): number;
        static isParallelQuadOnFace(arg0: $Direction_, arg1: $QuadView): boolean;
        static isQuadCubic(arg0: $Direction_, arg1: $QuadView): boolean;
        static longestAxis(arg0: $Vector3f): $Direction$Axis;
        static longestAxis(arg0: number, arg1: number, arg2: number): $Direction$Axis;
        static isQuadParallelToFace(arg0: $Direction_, arg1: $QuadView): boolean;
        static min(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static max(arg0: number, arg1: number, arg2: number, arg3: number): number;
        static lightFace(arg0: $QuadView): $Direction;
        static FLAG_BIT_COUNT: number;
        static CUBIC_FLAG: number;
        static AXIS_ALIGNED_FLAG: number;
        static LIGHT_FACE_FLAG: number;
    }
    export class $TextureHelper$VertexModifier {
    }
    export interface $TextureHelper$VertexModifier {
    }
    /**
     * Values that may be interpreted as {@link $TextureHelper$VertexModifier}.
     */
    export type $TextureHelper$VertexModifier_ = (() => void);
    export class $QuadViewImpl implements $QuadView {
        nominalFace(): $Direction;
        normalFlags(): number;
        geometryFlags(): number;
        posByIndex(arg0: number, arg1: number): number;
        copyNormal(arg0: number, arg1: $Vector3f): $Vector3f;
        hasVertexNormals(): boolean;
        vertexStart(): number;
        toVanilla(arg0: number[], arg1: number): void;
        copyPos(arg0: number, arg1: $Vector3f): $Vector3f;
        faceNormal(): $Vector3f;
        hasShade(): boolean;
        hasAmbientOcclusion(): boolean;
        copyTo(arg0: $MutableQuadView): void;
        load(): void;
        x(arg0: number): number;
        data(): number[];
        v(arg0: number): number;
        z(arg0: number): number;
        u(arg0: number): number;
        y(arg0: number): number;
        color(arg0: number): number;
        tag(): number;
        normalX(arg0: number): number;
        normalY(arg0: number): number;
        cullFace(): $Direction;
        lightmap(arg0: number): number;
        normalZ(arg0: number): number;
        hasNormal(arg0: number): boolean;
        colorIndex(): number;
        lightFace(): $Direction;
        toBakedQuad(arg0: $TextureAtlasSprite): $BakedQuad;
        copyUv(arg0: number, arg1: $Vector2f): $Vector2f;
        toBlockBakedQuad(): $BakedQuad;
        constructor();
    }
    export class $MutableQuadViewImpl extends $QuadViewImpl implements $QuadEmitter {
        spriteBake(arg0: $TextureAtlasSprite, arg1: number): $MutableQuadViewImpl;
        populateMissingNormals(): void;
        fromVanilla(arg0: $BakedQuad, arg1: $Direction_): $MutableQuadViewImpl;
        uv(arg0: number, arg1: number, arg2: number): $MutableQuadViewImpl;
        clear(): void;
        begin(arg0: number[], arg1: number): void;
        normal(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadViewImpl;
        ambientOcclusion(arg0: boolean): $MutableQuadViewImpl;
        uvUnitSquare(): $QuadEmitter;
        uv(arg0: number, arg1: $Vector2f): $QuadEmitter;
        color(arg0: number, arg1: number, arg2: number, arg3: number): $QuadEmitter;
        square(arg0: $Direction_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $QuadEmitter;
        nominalFace(arg0: $Direction_): $QuadEmitter;
        shade(arg0: boolean): $MutableQuadView;
        pos(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        color(arg0: number, arg1: number): $QuadEmitter;
        tag(arg0: number): $MutableQuadView;
        cullFace(arg0: $Direction_): $QuadEmitter;
        lightmap(arg0: number, arg1: number): $QuadEmitter;
        colorIndex(arg0: number): $QuadEmitter;
        pos(arg0: number, arg1: $Vector3f): $MutableQuadView;
        normal(arg0: number, arg1: $Vector3f): $MutableQuadView;
        lightmap(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        static THREAD_LOCAL: $ThreadLocal<$MutableQuadView>;
        constructor();
    }
    export class $ColorHelper {
        static fromVanillaColor(arg0: number): number;
        static toVanillaColor(arg0: number): number;
    }
    export class $SpriteFinderImpl implements $SpriteFinder {
        static get(arg0: $TextureAtlas): $SpriteFinderImpl;
        find(arg0: $QuadView): $TextureAtlasSprite;
        find(arg0: number, arg1: number): $TextureAtlasSprite;
        constructor(arg0: $Map_<$ResourceLocation_, $TextureAtlasSprite>, arg1: $TextureAtlas);
    }
    export class $ModelHelper {
        static toFaceIndex(arg0: $Direction_): number;
        static toQuadLists(arg0: $Mesh_): $List<$BakedQuad>[];
        static faceFromIndex(arg0: number): $Direction;
        static TRANSFORM_BLOCK_GROUND: $ItemTransform;
        static TRANSFORM_BLOCK_3RD_PERSON_RIGHT: $ItemTransform;
        static TRANSFORM_BLOCK_1ST_PERSON_RIGHT: $ItemTransform;
        static TRANSFORM_BLOCK_1ST_PERSON_LEFT: $ItemTransform;
        static MODEL_TRANSFORM_BLOCK: $ItemTransforms;
        static TRANSFORM_BLOCK_FIXED: $ItemTransform;
        static NULL_FACE_ID: number;
        static TRANSFORM_BLOCK_GUI: $ItemTransform;
    }
    export class $EncodingFormat {
        static HEADER_STRIDE: number;
        static VERTEX_STRIDE: number;
        static QUAD_STRIDE: number;
        static TOTAL_STRIDE: number;
        static QUAD_STRIDE_BYTES: number;
    }
    export class $SpriteFinder {
        static get(arg0: $TextureAtlas): $SpriteFinder;
    }
    export interface $SpriteFinder {
        find(arg0: $QuadView): $TextureAtlasSprite;
        find(arg0: number, arg1: number): $TextureAtlasSprite;
    }
    export class $QuadView {
        static VANILLA_QUAD_STRIDE: number;
        static VANILLA_VERTEX_STRIDE: number;
    }
    export interface $QuadView {
        nominalFace(): $Direction;
        toBakedQuad(arg0: $TextureAtlasSprite): $BakedQuad;
        posByIndex(arg0: number, arg1: number): number;
        copyUv(arg0: number, arg1: $Vector2f): $Vector2f;
        copyNormal(arg0: number, arg1: $Vector3f): $Vector3f;
        toBlockBakedQuad(): $BakedQuad;
        toVanilla(arg0: number[], arg1: number): void;
        copyPos(arg0: number, arg1: $Vector3f): $Vector3f;
        faceNormal(): $Vector3f;
        hasShade(): boolean;
        hasAmbientOcclusion(): boolean;
        copyTo(arg0: $MutableQuadView): void;
        x(arg0: number): number;
        v(arg0: number): number;
        z(arg0: number): number;
        u(arg0: number): number;
        y(arg0: number): number;
        color(arg0: number): number;
        tag(): number;
        normalX(arg0: number): number;
        normalY(arg0: number): number;
        cullFace(): $Direction;
        lightmap(arg0: number): number;
        normalZ(arg0: number): number;
        hasNormal(arg0: number): boolean;
        colorIndex(): number;
        lightFace(): $Direction;
    }
    export class $RenderContext {
    }
    export interface $RenderContext {
    }
    export class $MutableQuadView {
        static getInstance(): $MutableQuadView;
        static BAKE_LOCK_UV: number;
        static BAKE_NORMALIZED: number;
        static BAKE_FLIP_V: number;
        static BAKE_ROTATE_90: number;
        static BAKE_FLIP_U: number;
        static BAKE_ROTATE_NONE: number;
        static BAKE_ROTATE_180: number;
        static BAKE_ROTATE_270: number;
        static get instance(): $MutableQuadView;
    }
    export interface $MutableQuadView extends $QuadView {
        nominalFace(arg0: $Direction_): $MutableQuadView;
        spriteBake(arg0: $TextureAtlasSprite, arg1: number): $MutableQuadView;
        shade(arg0: boolean): $MutableQuadView;
        fromVanilla(arg0: $BakedQuad, arg1: $Direction_): $MutableQuadView;
        fromVanilla(arg0: number[], arg1: number): $MutableQuadView;
        uv(arg0: number, arg1: $Vector2f): $MutableQuadView;
        uv(arg0: number, arg1: number, arg2: number): $MutableQuadView;
        pos(arg0: number, arg1: $Vector3f): $MutableQuadView;
        pos(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        color(arg0: number, arg1: number): $MutableQuadView;
        color(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        normal(arg0: number, arg1: $Vector3f): $MutableQuadView;
        normal(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        tag(arg0: number): $MutableQuadView;
        cullFace(arg0: $Direction_): $MutableQuadView;
        lightmap(arg0: number, arg1: number, arg2: number, arg3: number): $MutableQuadView;
        lightmap(arg0: number, arg1: number): $MutableQuadView;
        ambientOcclusion(arg0: boolean): $MutableQuadView;
        colorIndex(arg0: number): $MutableQuadView;
    }
    export class $MeshBuilder {
    }
    export interface $MeshBuilder {
        getEmitter(): $QuadEmitter;
        build(): $Mesh;
        get emitter(): $QuadEmitter;
    }
    export class $TextureHelper {
        static bakeSprite(arg0: $MutableQuadView, arg1: $TextureAtlasSprite, arg2: number): void;
    }
}
