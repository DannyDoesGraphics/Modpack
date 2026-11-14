import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/rearth/oritech/client/renderers/util" {
    export class $BeamRenderer {
        static renderStraightBeam(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $Vec3_, arg3: $Vec3_, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static color(arg0: number, arg1: number, arg2: number, arg3: number): number;
        constructor();
    }
}
