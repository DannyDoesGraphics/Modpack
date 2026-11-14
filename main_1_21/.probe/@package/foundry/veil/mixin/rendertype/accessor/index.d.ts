import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ByteBufferBuilder } from "@package/com/mojang/blaze3d/vertex";
import { $SequencedMap } from "@package/java/util";

declare module "@package/foundry/veil/mixin/rendertype/accessor" {
    export class $RenderTypeAccessor {
    }
    export interface $RenderTypeAccessor {
        isSortOnUpload(): boolean;
        get sortOnUpload(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderTypeAccessor}.
     */
    export type $RenderTypeAccessor_ = (() => boolean);
    export class $RenderTypeBufferSourceAccessor {
    }
    export interface $RenderTypeBufferSourceAccessor {
        getFixedBuffers(): $SequencedMap<$RenderType, $ByteBufferBuilder>;
        get fixedBuffers(): $SequencedMap<$RenderType, $ByteBufferBuilder>;
    }
    /**
     * Values that may be interpreted as {@link $RenderTypeBufferSourceAccessor}.
     */
    export type $RenderTypeBufferSourceAccessor_ = (() => $SequencedMap<$RenderType, $ByteBufferBuilder>);
    export class $RenderStateShardAccessor {
    }
    export interface $RenderStateShardAccessor {
        getName(): string;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $RenderStateShardAccessor}.
     */
    export type $RenderStateShardAccessor_ = (() => string);
}
