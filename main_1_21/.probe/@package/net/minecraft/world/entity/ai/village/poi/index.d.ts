import { $LevelReader, $ChunkPos, $LevelHeightAccessor } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $PointOfInterestSetExtended, $PointOfInterestStorageExtended } from "@package/net/caffeinemc/mods/lithium/common/world/interests";
import { $LevelChunkSection } from "@package/net/minecraft/world/level/chunk";
import { $Set_, $Set, $Optional } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $RandomSource } from "@package/net/minecraft/util";
import { $WorldBorder } from "@package/net/minecraft/world/level/border";
import { $SectionStorage, $RegionStorageInfo_, $ChunkIOErrorReporter } from "@package/net/minecraft/world/level/chunk/storage";
import { $Predicate, $BiConsumer, $Consumer_, $Predicate_, $BiPredicate_, $BooleanSupplier_ } from "@package/java/util/function";
import { $SectionTracker } from "@package/net/minecraft/server/level";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $RegistryAccess, $Registry, $SectionPos } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Path_ } from "@package/java/nio/file";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record, $Runnable_ } from "@package/java/lang";
import { $IPOIUnloading } from "@package/com/ishland/c2me/rewrites/chunksystem/common/ducks";

declare module "@package/net/minecraft/world/entity/ai/village/poi" {
    export class $PoiType extends $Record {
        matchingStates(): $Set<$BlockState>;
        maxTickets(): number;
        validRange(): number;
        is(state: $BlockState_): boolean;
        static NONE: $Predicate<$Holder<$PoiType>>;
        constructor(matchingStates: $Set_<$BlockState_>, maxTickets: number, validRange: number);
    }
    /**
     * Values that may be interpreted as {@link $PoiType}.
     */
    export type $PoiType_ = RegistryTypes.PointOfInterestType | { validRange?: number, maxTickets?: number, matchingStates?: $Set_<$BlockState_>,  } | [validRange?: number, maxTickets?: number, matchingStates?: $Set_<$BlockState_>, ];
    export class $PoiManager extends $SectionStorage<$PoiSection> implements $PointOfInterestStorageExtended, $IPOIUnloading {
        getCountInRange(typePredicate: $Predicate_<any>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): number;
        findAllClosestFirstWithType(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>;
        getInSquare(typePredicate: $Predicate_<$Holder<$PoiType>>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        /**
         * @deprecated
         */
        getFreeTickets(pos: $BlockPos_): number;
        checkConsistencyWithBlocks(sectionPos: $SectionPos, levelChunkSection: $LevelChunkSection): void;
        getInChunk(typePredicate: $Predicate_<any>, posChunk: $ChunkPos, status: $PoiManager$Occupancy_): $Stream<any>;
        lithium$findNearestForPortalLogic(arg0: $BlockPos_, arg1: number, arg2: $Holder_<any>, arg3: $PoiManager$Occupancy_, arg4: $Predicate_<any>, arg5: $WorldBorder): $Optional<any>;
        ensureLoadedAndValid(levelReader: $LevelReader, pos: $BlockPos_, coordinateOffset: number): void;
        findClosestWithType(typePredicate: $Predicate_<$Holder<$PoiType>>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): ($Pair<$Holder<$PoiType>, $BlockPos>) | undefined;
        existsAtPosition(type: $ResourceKey_<$PoiType>, pos: $BlockPos_): boolean;
        sectionsToVillage(sectionPos: $SectionPos): number;
        findClosest(typePredicate: $Predicate_<any>, posPredicate: $Predicate_<any>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Optional<any>;
        findClosest(typePredicate: $Predicate_<any>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Optional<any>;
        getInRange(typePredicate: $Predicate_<any>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<any>;
        findAllWithType(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$Pair<$Holder<$PoiType>, $BlockPos>>;
        remove(pos: $BlockPos_): void;
        add(pos: $BlockPos_, type: $Holder_<$PoiType>): void;
        find(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): ($BlockPos) | undefined;
        getType(pos: $BlockPos_): ($Holder<$PoiType>) | undefined;
        release(pos: $BlockPos_): boolean;
        exists(pos: $BlockPos_, typePredicate: $Predicate_<$Holder<$PoiType>>): boolean;
        findAll(typePredicate: $Predicate_<$Holder<$PoiType>>, posPredicate: $Predicate_<$BlockPos>, pos: $BlockPos_, distance: number, status: $PoiManager$Occupancy_): $Stream<$BlockPos>;
        tick(aheadOfTime: $BooleanSupplier_): void;
        take(typePredicate: $Predicate_<$Holder<$PoiType>>, combinedTypePosPredicate: $BiPredicate_<$Holder<$PoiType>, $BlockPos>, pos: $BlockPos_, distance: number): ($BlockPos) | undefined;
        getRandom(typePredicate: $Predicate_<any>, posPredicate: $Predicate_<any>, status: $PoiManager$Occupancy_, pos: $BlockPos_, distance: number, random: $RandomSource): $Optional<any>;
        static MAX_VILLAGE_DISTANCE: number;
        static VILLAGE_SECTION_SIZE: number;
        constructor(info: $RegionStorageInfo_, folder: $Path_, fixerUpper: $DataFixer, sync: boolean, registryAccess: $RegistryAccess, errorReporter: $ChunkIOErrorReporter, levelHeightAccessor: $LevelHeightAccessor);
    }
    export interface $PoiType extends RegistryMarked<RegistryTypes.PointOfInterestTypeTag, RegistryTypes.PointOfInterestType> {}
    export class $PoiManager$DistanceTracker extends $SectionTracker {
        static SOURCE: number;
    }
    export class $PoiManager$Occupancy extends $Enum<$PoiManager$Occupancy> {
        static values(): $PoiManager$Occupancy[];
        static valueOf(arg0: string): $PoiManager$Occupancy;
        getTest(): $Predicate<$PoiRecord>;
        static IS_OCCUPIED: $PoiManager$Occupancy;
        static HAS_SPACE: $PoiManager$Occupancy;
        static ANY: $PoiManager$Occupancy;
        get test(): $Predicate<$PoiRecord>;
    }
    /**
     * Values that may be interpreted as {@link $PoiManager$Occupancy}.
     */
    export type $PoiManager$Occupancy_ = "has_space" | "is_occupied" | "any";
    export class $PoiRecord {
        /**
         * @deprecated
         */
        getFreeTickets(): number;
        getPoiType(): $Holder<$PoiType>;
        hasSpace(): boolean;
        isOccupied(): boolean;
        getPos(): $BlockPos;
        static codec(executable: $Runnable_): $Codec<$PoiRecord>;
        constructor(pod: $BlockPos_, poiType: $Holder_<$PoiType>, setDirty: $Runnable_);
        get freeTickets(): number;
        get poiType(): $Holder<$PoiType>;
        get occupied(): boolean;
        get pos(): $BlockPos;
    }
    export class $PoiTypes {
        static getBlockStates(block: $Block_): $Set<$BlockState>;
        static registerBlockStates(poi: $Holder_<$PoiType>, states: $Set_<$BlockState_>): void;
        static forState(state: $BlockState_): ($Holder<$PoiType>) | undefined;
        static hasPoi(state: $BlockState_): boolean;
        static bootstrap(registry: $Registry<$PoiType_>): $PoiType;
        static CARTOGRAPHER: $ResourceKey<$PoiType>;
        static MASON: $ResourceKey<$PoiType>;
        static SHEPHERD: $ResourceKey<$PoiType>;
        static ARMORER: $ResourceKey<$PoiType>;
        static TOOLSMITH: $ResourceKey<$PoiType>;
        static MEETING: $ResourceKey<$PoiType>;
        static BEE_NEST: $ResourceKey<$PoiType>;
        static LODESTONE: $ResourceKey<$PoiType>;
        static FARMER: $ResourceKey<$PoiType>;
        static FLETCHER: $ResourceKey<$PoiType>;
        static LEATHERWORKER: $ResourceKey<$PoiType>;
        static LIBRARIAN: $ResourceKey<$PoiType>;
        static CLERIC: $ResourceKey<$PoiType>;
        static FISHERMAN: $ResourceKey<$PoiType>;
        static BUTCHER: $ResourceKey<$PoiType>;
        static BEEHIVE: $ResourceKey<$PoiType>;
        static NETHER_PORTAL: $ResourceKey<$PoiType>;
        static WEAPONSMITH: $ResourceKey<$PoiType>;
        static LIGHTNING_ROD: $ResourceKey<$PoiType>;
        static HOME: $ResourceKey<$PoiType>;
        constructor();
    }
    export class $PoiSection implements $PointOfInterestSetExtended {
        /**
         * @deprecated
         */
        getFreeTickets(pos: $BlockPos_): number;
        getRecords(typePredicate: $Predicate_<$Holder<$PoiType>>, status: $PoiManager$Occupancy_): $Stream<$PoiRecord>;
        lithium$collectMatchingPoints(arg0: $Predicate_<any>, arg1: $PoiManager$Occupancy_, arg2: $Consumer_<any>): void;
        refresh(posToTypeConsumer: $Consumer_<$BiConsumer<$BlockPos, $Holder<$PoiType>>>): void;
        remove(pos: $BlockPos_): void;
        add(pos: $BlockPos_, type: $Holder_<$PoiType>): void;
        getType(pos: $BlockPos_): ($Holder<$PoiType>) | undefined;
        release(pos: $BlockPos_): boolean;
        exists(pos: $BlockPos_, typePredicate: $Predicate_<$Holder<$PoiType>>): boolean;
        isValid(): boolean;
        static codec(executable: $Runnable_): $Codec<$PoiSection>;
        constructor(setDirty: $Runnable_);
        get valid(): boolean;
    }
}
