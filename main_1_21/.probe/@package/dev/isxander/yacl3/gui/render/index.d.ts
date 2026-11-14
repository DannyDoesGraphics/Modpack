import { $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/dev/isxander/yacl3/gui/render" {
    export class $GuiRenderStateSink {
        static bufferSource(arg0: $GuiGraphics): $MultiBufferSource;
    }
    export interface $GuiRenderStateSink {
        yacl$bufferSource(): $MultiBufferSource;
    }
    /**
     * Values that may be interpreted as {@link $GuiRenderStateSink}.
     */
    export type $GuiRenderStateSink_ = (() => $MultiBufferSource);
}
