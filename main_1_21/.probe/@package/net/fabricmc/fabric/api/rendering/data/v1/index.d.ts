import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Object } from "@package/java/lang";

declare module "@package/net/fabricmc/fabric/api/rendering/data/v1" {
    /**
     * @deprecated
     */
    export class $RenderAttachmentBlockEntity {
    }
    export interface $RenderAttachmentBlockEntity {
        /**
         * @deprecated
         */
        getRenderAttachmentData(): $Object;
        get renderAttachmentData(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $RenderAttachmentBlockEntity}.
     */
    export type $RenderAttachmentBlockEntity_ = (() => $Object);
    /**
     * @deprecated
     */
    export class $RenderAttachedBlockView {
    }
    export interface $RenderAttachedBlockView extends $BlockAndTintGetter {
        /**
         * @deprecated
         */
        getBlockEntityRenderAttachment(arg0: $BlockPos_): $Object;
    }
}
