import { $Codec } from "@package/com/mojang/serialization";
import { $RenderTypeLayerRegistry$LayerType } from "@package/foundry/veil/api/client/registry";
import { $Object } from "@package/java/lang";
import { $VeilRenderTypeBuilder } from "@package/foundry/veil/api/client/render/rendertype";

declare module "@package/foundry/veil/api/client/render/rendertype/layer" {
    export class $RenderTypeLayer {
        static CODEC: $Codec<$RenderTypeLayer>;
    }
    export interface $RenderTypeLayer {
        addShard(arg0: $VeilRenderTypeBuilder, ...arg1: $Object[]): void;
        getType(): $RenderTypeLayerRegistry$LayerType<never>;
        get type(): $RenderTypeLayerRegistry$LayerType<never>;
    }
}
