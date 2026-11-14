import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $Predicate, $Predicate_, $Consumer_, $Consumer } from "@package/java/util/function";
import { $PoiType, $PoiManager$Occupancy_, $PoiManager$Occupancy, $PoiRecord } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $BlockPos, $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Iterable } from "@package/java/lang";

declare module "@package/net/caffeinemc/mods/lithium/common/world/interests" {
    export class $RegionBasedStorageSectionExtended<R> {
    }
    export interface $RegionBasedStorageSectionExtended<R> {
        lithium$getWithinChunkColumn(arg0: number, arg1: number): $Stream<R>;
        lithium$getInChunkColumn(arg0: number, arg1: number): $Iterable<R>;
    }
    export class $PointOfInterestSetExtended {
    }
    export interface $PointOfInterestSetExtended {
        lithium$collectMatchingPoints(arg0: $Predicate_<$Holder<$PoiType>>, arg1: $PoiManager$Occupancy_, arg2: $Consumer_<$PoiRecord>): void;
    }
    /**
     * Values that may be interpreted as {@link $PointOfInterestSetExtended}.
     */
    export type $PointOfInterestSetExtended_ = ((arg0: $Predicate<$Holder<$PoiType>>, arg1: $PoiManager$Occupancy, arg2: $Consumer<$PoiRecord>) => void);
    export class $PointOfInterestStorageExtended {
    }
    export interface $PointOfInterestStorageExtended {
        lithium$findNearestForPortalLogic(arg0: $BlockPos_, arg1: number, arg2: $Holder_<$PoiType>, arg3: $PoiManager$Occupancy_, arg4: $Predicate_<$PoiRecord>, arg5: $WorldBorder): ($PoiRecord) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $PointOfInterestStorageExtended}.
     */
    export type $PointOfInterestStorageExtended_ = ((arg0: $BlockPos, arg1: number, arg2: $Holder<$PoiType>, arg3: $PoiManager$Occupancy, arg4: $Predicate<$PoiRecord>, arg5: $WorldBorder) => ($PoiRecord) | undefined);
}
