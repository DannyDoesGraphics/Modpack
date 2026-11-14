import { $RenderAttachedBlockView } from "@package/net/fabricmc/fabric/api/rendering/data/v1";

declare module "@package/net/fabricmc/fabric/mixin/rendering/data" {
    export class $WorldViewMixin {
    }
    export interface $WorldViewMixin extends $RenderAttachedBlockView {
    }
}
