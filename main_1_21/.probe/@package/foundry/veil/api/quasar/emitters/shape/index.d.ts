import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Vector3dc, $Vector3d, $Vector3fc } from "@package/org/joml";

declare module "@package/foundry/veil/api/quasar/emitters/shape" {
    export interface $EmitterShape extends RegistryMarked<RegistryTypes.VeilQuasarEmitterShapeTag, RegistryTypes.VeilQuasarEmitterShape> {}
    export class $EmitterShape {
        static CODEC: $Codec<$EmitterShape>;
    }
    export interface $EmitterShape {
        getPoint(arg0: $RandomSource, arg1: $Vector3fc, arg2: $Vector3fc, arg3: $Vector3dc, arg4: boolean): $Vector3d;
        renderShape(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $Vector3fc, arg3: $Vector3fc): void;
    }
    /**
     * Values that may be interpreted as {@link $EmitterShape}.
     */
    export type $EmitterShape_ = RegistryTypes.VeilQuasarEmitterShape;
}
