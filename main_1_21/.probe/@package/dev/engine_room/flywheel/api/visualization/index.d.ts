import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $InstancerProvider } from "@package/dev/engine_room/flywheel/api/instance";
import { $Vec3i } from "@package/net/minecraft/core";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityVisual, $BlockEntityVisual } from "@package/dev/engine_room/flywheel/api/visual";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4fc, $Matrix3fc } from "@package/org/joml";

declare module "@package/dev/engine_room/flywheel/api/visualization" {
    export class $VisualizationContext {
    }
    export interface $VisualizationContext {
        instancerProvider(): $InstancerProvider;
        renderOrigin(): $Vec3i;
        createEmbedding(arg0: $Vec3i): $VisualEmbedding;
    }
    export class $EntityVisualizer<T extends $Entity> {
    }
    export interface $EntityVisualizer<T extends $Entity> {
        skipVanillaRender(arg0: T): boolean;
        createVisual(arg0: $VisualizationContext, arg1: T, arg2: number): $EntityVisual<T>;
    }
    export class $VisualEmbedding {
    }
    export interface $VisualEmbedding extends $VisualizationContext {
        transforms(arg0: $Matrix4fc, arg1: $Matrix3fc): void;
        "delete"(): void;
    }
    export class $VisualizationLevel {
    }
    export interface $VisualizationLevel extends $LevelAccessor {
        supportsVisualization(): boolean;
    }
    export class $BlockEntityVisualizer<T extends $BlockEntity> {
    }
    export interface $BlockEntityVisualizer<T extends $BlockEntity> {
        skipVanillaRender(arg0: T): boolean;
        createVisual(arg0: $VisualizationContext, arg1: T, arg2: number): $BlockEntityVisual<T>;
    }
}
