import { $GeoModel } from "@package/software/bernie/geckolib/model";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $BakedGeoModel_ } from "@package/software/bernie/geckolib/cache/object";
import { $GeoBlockRenderer } from "@package/software/bernie/geckolib/renderer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/software/bernie/geckolib/renderer/specialty" {
    export class $DynamicGeoBlockRenderer<T extends $BlockEntity> extends $GeoBlockRenderer<T> {
        postRender(arg0: $PoseStack, arg1: T, arg2: $BakedGeoModel_, arg3: $MultiBufferSource_, arg4: $VertexConsumer, arg5: boolean, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $GeoModel<T>);
    }
}
