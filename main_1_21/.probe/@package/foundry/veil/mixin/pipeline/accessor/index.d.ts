import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List_, $List } from "@package/java/util";

declare module "@package/foundry/veil/mixin/pipeline/accessor" {
    export class $PipelineBufferSourceAccessor {
    }
    export interface $PipelineBufferSourceAccessor {
        getLastSharedType(): $RenderType;
        get lastSharedType(): $RenderType;
    }
    /**
     * Values that may be interpreted as {@link $PipelineBufferSourceAccessor}.
     */
    export type $PipelineBufferSourceAccessor_ = (() => $RenderType);
    export class $PipelineNativeImageAccessor {
    }
    export interface $PipelineNativeImageAccessor {
        invokeCheckAllocated(): void;
        getPixels(): number;
        get pixels(): number;
    }
    export class $PipelineReloadableResourceManagerAccessor {
    }
    export interface $PipelineReloadableResourceManagerAccessor {
        getListeners(): $List<$PreparableReloadListener>;
        get listeners(): $List<$PreparableReloadListener>;
    }
    /**
     * Values that may be interpreted as {@link $PipelineReloadableResourceManagerAccessor}.
     */
    export type $PipelineReloadableResourceManagerAccessor_ = (() => $List_<$PreparableReloadListener>);
}
