import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $PoseStack$Pose, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Deque, $Map } from "@package/java/util";

declare module "@package/dev/engine_room/flywheel/impl/mixin" {
    export class $ModelPartAccessor {
    }
    export interface $ModelPartAccessor {
        flywheel$children(): $Map<string, $ModelPart>;
        flywheel$compile(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number): void;
    }
    export class $PoseStackAccessor {
    }
    export interface $PoseStackAccessor {
        flywheel$getPoseStack(): $Deque<$PoseStack$Pose>;
    }
    /**
     * Values that may be interpreted as {@link $PoseStackAccessor}.
     */
    export type $PoseStackAccessor_ = (() => $Deque<$PoseStack$Pose>);
}
