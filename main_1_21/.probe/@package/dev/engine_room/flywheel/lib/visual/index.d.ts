import { $InstancerProvider } from "@package/dev/engine_room/flywheel/api/instance";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $TickableVisual, $TickableVisual$Context, $DynamicVisual$Context, $LightUpdatedVisual, $Visual, $SectionTrackedVisual$SectionCollector_, $EntityVisual, $DynamicVisual, $BlockEntityVisual } from "@package/dev/engine_room/flywheel/api/visual";
import { $AccessorAbstractVisual } from "@package/com/railwayteam/railways/mixin/client";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3f, $FrustumIntersection } from "@package/org/joml";

declare module "@package/dev/engine_room/flywheel/lib/visual" {
    export class $AbstractVisual implements $Visual, $AccessorAbstractVisual {
        update(partialTick: number): void;
        "delete"(): void;
        railways$getInstancerProvider(): $InstancerProvider;
        railways$getLevel(): $Level;
        constructor(ctx: $VisualizationContext, level: $Level_, partialTick: number);
    }
    export class $SimpleTickableVisual {
    }
    export interface $SimpleTickableVisual extends $TickableVisual {
        planTick(): $Plan<$TickableVisual$Context>;
        tick(arg0: $TickableVisual$Context): void;
    }
    export class $AbstractBlockEntityVisual<T extends $BlockEntity> extends $AbstractVisual implements $BlockEntityVisual<T>, $LightUpdatedVisual {
        getVisualPosition(): $BlockPos;
        setSectionCollector(sectionCollector: $SectionTrackedVisual$SectionCollector_): void;
        doDistanceLimitThisFrame(context: $DynamicVisual$Context): boolean;
        isVisible(frustum: $FrustumIntersection): boolean;
        constructor(ctx: $VisualizationContext, blockEntity: T, partialTick: number);
        get visualPosition(): $BlockPos;
        set sectionCollector(value: $SectionTrackedVisual$SectionCollector_);
    }
    export class $SimpleDynamicVisual {
    }
    export interface $SimpleDynamicVisual extends $DynamicVisual {
        planFrame(): $Plan<$DynamicVisual$Context>;
        beginFrame(arg0: $DynamicVisual$Context): void;
    }
    export class $AbstractEntityVisual<T extends $Entity> extends $AbstractVisual implements $EntityVisual<T> {
        getVisualPosition(): $Vector3f;
        getVisualPosition(partialTick: number): $Vector3f;
        distanceSquared(x: number, y: number, z: number): number;
        isVisible(frustum: $FrustumIntersection): boolean;
        constructor(ctx: $VisualizationContext, entity: T, partialTick: number);
    }
}
