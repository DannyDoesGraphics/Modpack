import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $Object } from "@package/java/lang";

declare module "@package/net/fabricmc/fabric/impl/blockview/client" {
    export class $RenderDataMapConsumer {
    }
    export interface $RenderDataMapConsumer {
        fabric_acceptRenderDataMap(arg0: $Long2ObjectMap<$Object>): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderDataMapConsumer}.
     */
    export type $RenderDataMapConsumer_ = ((arg0: $Long2ObjectMap<$Object>) => void);
}
