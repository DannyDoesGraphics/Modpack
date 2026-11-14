import { $RenderStateShard$TransparencyStateShard } from "@package/net/minecraft/client/renderer";

declare module "@package/net/irisshaders/iris/mixin/rendertype" {
    export class $RenderStateShardAccessor {
        static getTranslucentTransparency(): $RenderStateShard$TransparencyStateShard;
        static get translucentTransparency(): $RenderStateShard$TransparencyStateShard;
    }
    export interface $RenderStateShardAccessor {
        getName(): string;
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $RenderStateShardAccessor}.
     */
    export type $RenderStateShardAccessor_ = (() => string);
    export class $RenderTypeAccessor {
    }
    export interface $RenderTypeAccessor {
        shouldSortOnUpload(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderTypeAccessor}.
     */
    export type $RenderTypeAccessor_ = (() => boolean);
}
