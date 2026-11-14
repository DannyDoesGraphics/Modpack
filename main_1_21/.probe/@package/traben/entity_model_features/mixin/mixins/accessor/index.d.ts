import { $ModelPart$Polygon } from "@package/net/minecraft/client/model/geom";
import { $DeltaTracker$Timer } from "@package/net/minecraft/client";

declare module "@package/traben/entity_model_features/mixin/mixins/accessor" {
    export class $MinecraftClientAccessor {
    }
    export interface $MinecraftClientAccessor {
        getTimer(): $DeltaTracker$Timer;
        get timer(): $DeltaTracker$Timer;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftClientAccessor}.
     */
    export type $MinecraftClientAccessor_ = (() => $DeltaTracker$Timer);
    export class $CuboidAccessor {
    }
    export interface $CuboidAccessor {
        setPolygons(arg0: $ModelPart$Polygon[]): void;
        setMinX(arg0: number): void;
        setMinZ(arg0: number): void;
        setMaxX(arg0: number): void;
        setMaxY(arg0: number): void;
        setMaxZ(arg0: number): void;
        setMinY(arg0: number): void;
        set polygons(value: $ModelPart$Polygon[]);
        set minX(value: number);
        set minZ(value: number);
        set maxX(value: number);
        set maxY(value: number);
        set maxZ(value: number);
        set minY(value: number);
    }
}
