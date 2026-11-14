import { $SectionRenderDispatcher$RenderSection } from "@package/net/minecraft/client/renderer/chunk";

declare module "@package/dev/ryanhcode/sable/mixinterface/sublevel_render/vanilla" {
    export class $RenderSectionExtension {
    }
    export interface $RenderSectionExtension {
        sable$addDirtyListener(arg0: $RenderSectionExtension$DirtyListener_): void;
        sable$setListening(arg0: boolean): void;
    }
    export class $RenderSectionExtension$DirtyListener {
    }
    export interface $RenderSectionExtension$DirtyListener {
        markDirty(arg0: $SectionRenderDispatcher$RenderSection): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderSectionExtension$DirtyListener}.
     */
    export type $RenderSectionExtension$DirtyListener_ = ((arg0: $SectionRenderDispatcher$RenderSection) => void);
}
