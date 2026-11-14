import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $Instance } from "@package/dev/engine_room/flywheel/api/instance";
import { $Consumer_ } from "@package/java/util/function";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Camera } from "@package/net/minecraft/client";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $FrustumIntersection } from "@package/org/joml";

declare module "@package/dev/engine_room/flywheel/api/visual" {
    export class $DynamicVisual$Context {
    }
    export interface $DynamicVisual$Context {
        limiter(): $DistanceUpdateLimiter;
        partialTick(): number;
        camera(): $Camera;
        frustum(): $FrustumIntersection;
    }
    export class $DistanceUpdateLimiter {
    }
    export interface $DistanceUpdateLimiter {
        shouldUpdate(arg0: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DistanceUpdateLimiter}.
     */
    export type $DistanceUpdateLimiter_ = ((arg0: number) => boolean);
    export class $SectionTrackedVisual {
    }
    export interface $SectionTrackedVisual extends $Visual {
        setSectionCollector(arg0: $SectionTrackedVisual$SectionCollector_): void;
        set sectionCollector(value: $SectionTrackedVisual$SectionCollector_);
    }
    export class $BlockEntityVisual<T extends $BlockEntity> {
    }
    export interface $BlockEntityVisual<T extends $BlockEntity> extends $Visual {
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
    }
    export class $Visual {
    }
    export interface $Visual {
        update(arg0: number): void;
        "delete"(): void;
    }
    export class $ShaderLightVisual {
    }
    export interface $ShaderLightVisual extends $SectionTrackedVisual {
    }
    export class $TickableVisual$Context {
    }
    export interface $TickableVisual$Context {
    }
    export class $SectionTrackedVisual$SectionCollector {
    }
    export interface $SectionTrackedVisual$SectionCollector {
        sections(arg0: $LongSet): void;
    }
    /**
     * Values that may be interpreted as {@link $SectionTrackedVisual$SectionCollector}.
     */
    export type $SectionTrackedVisual$SectionCollector_ = ((arg0: $LongSet) => void);
    export class $LightUpdatedVisual {
    }
    export interface $LightUpdatedVisual extends $SectionTrackedVisual {
        updateLight(arg0: number): void;
    }
    export class $TickableVisual {
    }
    export interface $TickableVisual extends $Visual {
        planTick(): $Plan<$TickableVisual$Context>;
    }
    export class $EntityVisual<T extends $Entity> {
    }
    export interface $EntityVisual<T extends $Entity> extends $Visual {
    }
    export class $DynamicVisual {
    }
    export interface $DynamicVisual extends $Visual {
        planFrame(): $Plan<$DynamicVisual$Context>;
    }
}
