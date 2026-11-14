import { $EntityModel } from "@package/net/minecraft/client/model";
import { $EntityRenderDispatcher, $RenderLayerParent, $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";

declare module "@package/com/simibubi/create/content/equipment/hats" {
    export class $CreateHatArmorLayer<T extends $LivingEntity, M extends $EntityModel<T>> extends $RenderLayer<T, M> {
        static registerOn(arg0: $EntityRenderer<never>): void;
        static registerOnAll(arg0: $EntityRenderDispatcher): void;
        render(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: number, arg3: $LivingEntity, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
        constructor(arg0: $RenderLayerParent<T, M>);
    }
    export class $EntityHats {
        static shouldRenderTrainHat(arg0: $LivingEntity): boolean;
        static getLogisticsHatFor(arg0: $LivingEntity): $PartialModel;
        static getHatFor(arg0: $LivingEntity): $PartialModel;
        constructor();
    }
}
