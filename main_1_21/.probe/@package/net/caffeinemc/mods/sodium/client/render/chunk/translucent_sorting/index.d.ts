import { $SectionPos } from "@package/net/minecraft/core";
import { $DeferMode } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $ChunkVertexEncoder$Vertex } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format";
import { $ModelQuadFacing_ } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $Enum } from "@package/java/lang";
import { $CombinedCameraPos, $TranslucentData } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
export * as quad from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad";
export * as data from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
export * as bsp_tree from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree";
export * as trigger from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting" {
    export class $SortBehavior$SortMode extends $Enum<$SortBehavior$SortMode> {
        static values(): $SortBehavior$SortMode[];
        static valueOf(arg0: string): $SortBehavior$SortMode;
        static NONE: $SortBehavior$SortMode;
        static STATIC: $SortBehavior$SortMode;
        static DYNAMIC: $SortBehavior$SortMode;
    }
    /**
     * Values that may be interpreted as {@link $SortBehavior$SortMode}.
     */
    export type $SortBehavior$SortMode_ = "none" | "static" | "dynamic";
    export class $SortType extends $Enum<$SortType> {
        static values(): $SortType[];
        static valueOf(arg0: string): $SortType;
        static STATIC_TOPO: $SortType;
        static NO_TRANSLUCENT: $SortType;
        static EMPTY_SECTION: $SortType;
        static STATIC_NORMAL_RELATIVE: $SortType;
        needsDirectionMixing: boolean;
        static NONE: $SortType;
        allowSliceReordering: boolean;
        static DYNAMIC: $SortType;
    }
    /**
     * Values that may be interpreted as {@link $SortType}.
     */
    export type $SortType_ = "empty_section" | "no_translucent" | "none" | "static_normal_relative" | "static_topo" | "dynamic";
    export class $SortBehavior extends $Enum<$SortBehavior> {
        getDeferMode(): $DeferMode;
        getSortMode(): $SortBehavior$SortMode;
        getPriorityMode(): $SortBehavior$PriorityMode;
        getShortName(): string;
        static values(): $SortBehavior[];
        static valueOf(arg0: string): $SortBehavior;
        static DYNAMIC_DEFER_NEARBY_ONE_FRAME: $SortBehavior;
        static DYNAMIC_DEFER_ALL_ONE_FRAME: $SortBehavior;
        static DYNAMIC_DEFER_ALWAYS: $SortBehavior;
        static DYNAMIC_DEFER_NEARBY_ZERO_FRAMES: $SortBehavior;
        static OFF: $SortBehavior;
        static STATIC: $SortBehavior;
        static DYNAMIC_DEFER_ALL_ZERO_FRAMES: $SortBehavior;
        get deferMode(): $DeferMode;
        get sortMode(): $SortBehavior$SortMode;
        get priorityMode(): $SortBehavior$PriorityMode;
        get shortName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SortBehavior}.
     */
    export type $SortBehavior_ = "off" | "static" | "dynamic_defer_always" | "dynamic_defer_nearby_one_frame" | "dynamic_defer_nearby_zero_frames" | "dynamic_defer_all_one_frame" | "dynamic_defer_all_zero_frames";
    export class $TranslucentGeometryCollector {
        isSplittingQuads(): boolean;
        getTranslucentData(arg0: $TranslucentData, arg1: $CombinedCameraPos): $TranslucentData;
        finishRendering(): $SortType;
        appendQuad(arg0: $ChunkVertexEncoder$Vertex[], arg1: $ModelQuadFacing_, arg2: number): boolean;
        getQuadHash(): number;
        static STATIC_TOPO_UNKNOWN_FALLBACK_LIMIT: number;
        constructor(arg0: $SectionPos, arg1: $SortBehavior_);
        get splittingQuads(): boolean;
        get quadHash(): number;
    }
    export class $SortBehavior$PriorityMode extends $Enum<$SortBehavior$PriorityMode> {
        static values(): $SortBehavior$PriorityMode[];
        static valueOf(arg0: string): $SortBehavior$PriorityMode;
        static ALL: $SortBehavior$PriorityMode;
        static NEARBY: $SortBehavior$PriorityMode;
        static NONE: $SortBehavior$PriorityMode;
    }
    /**
     * Values that may be interpreted as {@link $SortBehavior$PriorityMode}.
     */
    export type $SortBehavior$PriorityMode_ = "none" | "nearby" | "all";
}
