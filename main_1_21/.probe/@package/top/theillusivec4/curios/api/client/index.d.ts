import { $EntityModel, $HumanoidModel } from "@package/net/minecraft/client/model";
import { $SlotContext, $SlotContext_ } from "@package/top/theillusivec4/curios/api";
import { $RenderLayerParent } from "@package/net/minecraft/client/renderer/entity";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/top/theillusivec4/curios/api/client" {
    export class $ICurioRenderer {
        static translateIfSneaking(arg0: $PoseStack, arg1: $LivingEntity): void;
        static rotateIfSneaking(arg0: $PoseStack, arg1: $LivingEntity): void;
        static followHeadRotations(arg0: $LivingEntity, ...arg1: $ModelPart[]): void;
        static followBodyRotations(arg0: $LivingEntity, ...arg1: $HumanoidModel<$LivingEntity>[]): void;
    }
    export interface $ICurioRenderer {
        render<T extends $LivingEntity, M extends $EntityModel<T>>(arg0: $ItemStack_, arg1: $SlotContext_, arg2: $PoseStack, arg3: $RenderLayerParent<T, M>, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number): void;
    }
    /**
     * Values that may be interpreted as {@link $ICurioRenderer}.
     */
    export type $ICurioRenderer_ = ((arg0: $ItemStack, arg1: $SlotContext, arg2: $PoseStack, arg3: $RenderLayerParent<any, any>, arg4: $MultiBufferSource, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number) => void);
}
