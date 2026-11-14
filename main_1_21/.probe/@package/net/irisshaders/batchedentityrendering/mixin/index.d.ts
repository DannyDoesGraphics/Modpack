import { $MultiBufferSource$BufferSource, $RenderType, $RenderStateShard$TransparencyStateShard, $RenderStateShard$DepthTestStateShard } from "@package/net/minecraft/client/renderer";
import { $ByteBufferBuilder } from "@package/com/mojang/blaze3d/vertex";
import { $SequencedMap, $Map_, $Map } from "@package/java/util";

declare module "@package/net/irisshaders/batchedentityrendering/mixin" {
    export class $SectionBufferBuilderPackAccessor {
    }
    export interface $SectionBufferBuilderPackAccessor {
        getBuffers(): $Map<$RenderType, $ByteBufferBuilder>;
        get buffers(): $Map<$RenderType, $ByteBufferBuilder>;
    }
    /**
     * Values that may be interpreted as {@link $SectionBufferBuilderPackAccessor}.
     */
    export type $SectionBufferBuilderPackAccessor_ = (() => $Map_<$RenderType, $ByteBufferBuilder>);
    export class $OutlineBufferSourceAccessor {
    }
    export interface $OutlineBufferSourceAccessor {
        getOutlineBufferSource(): $MultiBufferSource$BufferSource;
        get outlineBufferSource(): $MultiBufferSource$BufferSource;
    }
    /**
     * Values that may be interpreted as {@link $OutlineBufferSourceAccessor}.
     */
    export type $OutlineBufferSourceAccessor_ = (() => $MultiBufferSource$BufferSource);
    export class $RenderTypeAccessor {
    }
    export interface $RenderTypeAccessor {
        shouldSortOnUpload(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderTypeAccessor}.
     */
    export type $RenderTypeAccessor_ = (() => boolean);
    export class $BufferSourceAccessor {
    }
    export interface $BufferSourceAccessor {
        getFixedBuffers(): $SequencedMap<$RenderType, $ByteBufferBuilder>;
        get fixedBuffers(): $SequencedMap<$RenderType, $ByteBufferBuilder>;
    }
    /**
     * Values that may be interpreted as {@link $BufferSourceAccessor}.
     */
    export type $BufferSourceAccessor_ = (() => $SequencedMap<$RenderType, $ByteBufferBuilder>);
    export class $RenderStateShardAccessor {
        static getNO_TRANSPARENCY(): $RenderStateShard$TransparencyStateShard;
        static getGLINT_TRANSPARENCY(): $RenderStateShard$TransparencyStateShard;
        static getCRUMBLING_TRANSPARENCY(): $RenderStateShard$TransparencyStateShard;
        static get NO_TRANSPARENCY(): $RenderStateShard$TransparencyStateShard;
        static get GLINT_TRANSPARENCY(): $RenderStateShard$TransparencyStateShard;
        static get CRUMBLING_TRANSPARENCY(): $RenderStateShard$TransparencyStateShard;
    }
    export interface $RenderStateShardAccessor {
    }
    export class $CompositeStateAccessor {
    }
    export interface $CompositeStateAccessor {
        getDepth(): $RenderStateShard$DepthTestStateShard;
        getTransparency(): $RenderStateShard$TransparencyStateShard;
        get depth(): $RenderStateShard$DepthTestStateShard;
        get transparency(): $RenderStateShard$TransparencyStateShard;
    }
}
