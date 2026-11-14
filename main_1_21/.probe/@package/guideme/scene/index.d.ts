import { $GuidebookLevel } from "@package/guideme/scene/level";
import { $SceneAnnotation } from "@package/guideme/scene/annotation";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ExtensionPoint, $Extension } from "@package/guideme/extensions";
export * as level from "@package/guideme/scene/level";
export * as annotation from "@package/guideme/scene/annotation";

declare module "@package/guideme/scene" {
    export class $ImplicitAnnotationStrategy {
        static EXTENSION_POINT: $ExtensionPoint<$ImplicitAnnotationStrategy>;
    }
    export interface $ImplicitAnnotationStrategy extends $Extension {
        getAnnotation(arg0: $GuidebookLevel, arg1: $BlockState_, arg2: $BlockHitResult): $SceneAnnotation;
    }
    /**
     * Values that may be interpreted as {@link $ImplicitAnnotationStrategy}.
     */
    export type $ImplicitAnnotationStrategy_ = ((arg0: $GuidebookLevel, arg1: $BlockState, arg2: $BlockHitResult) => $SceneAnnotation);
}
