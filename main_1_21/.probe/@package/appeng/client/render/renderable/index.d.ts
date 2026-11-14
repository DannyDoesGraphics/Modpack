import { $Function_ } from "@package/java/util/function";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Transformation } from "@package/com/mojang/math";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/client/render/renderable" {
    export class $ItemRenderable<T extends $BlockEntity> implements $Renderable<T> {
        renderBlockEntityAt(arg0: T, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        constructor(arg0: $Function_<T, $Pair<$ItemStack, $Transformation>>);
    }
    export class $Renderable<T extends $BlockEntity> {
    }
    export interface $Renderable<T extends $BlockEntity> {
        renderBlockEntityAt(arg0: T, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_<T> = ((arg0: T, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource, arg4: number, arg5: number) => void);
}
