import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityVisual, $BlockEntityVisual } from "@package/dev/engine_room/flywheel/api/visual";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/dev/engine_room/flywheel/lib/visualization" {
    export class $SimpleBlockEntityVisualizer$Factory<T extends $BlockEntity> {
    }
    export interface $SimpleBlockEntityVisualizer$Factory<T extends $BlockEntity> {
        create(arg0: $VisualizationContext, arg1: T, arg2: number): $BlockEntityVisual<T>;
    }
    /**
     * Values that may be interpreted as {@link $SimpleBlockEntityVisualizer$Factory}.
     */
    export type $SimpleBlockEntityVisualizer$Factory_<T> = ((arg0: $VisualizationContext, arg1: T, arg2: number) => $BlockEntityVisual<T>);
    export class $SimpleEntityVisualizer$Factory<T extends $Entity> {
    }
    export interface $SimpleEntityVisualizer$Factory<T extends $Entity> {
        create(arg0: $VisualizationContext, arg1: T, arg2: number): $EntityVisual<T>;
    }
    /**
     * Values that may be interpreted as {@link $SimpleEntityVisualizer$Factory}.
     */
    export type $SimpleEntityVisualizer$Factory_<T> = ((arg0: $VisualizationContext, arg1: T, arg2: number) => $EntityVisual<T>);
}
