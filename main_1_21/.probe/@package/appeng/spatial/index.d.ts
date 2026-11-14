import { $Level } from "@package/net/minecraft/world/level";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $DimensionSpecialEffects } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Biome_, $Biome } from "@package/net/minecraft/world/level/biome";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $List } from "@package/java/util";
import { $Instant } from "@package/java/time";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $AESavedData } from "@package/appeng/core/worlddata";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Holder_, $HolderGetter } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $IBlockEntityMoveStrategy } from "@package/appeng/api/movable";
import { $LevelStem, $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/appeng/spatial" {
    export class $SpatialStorageHelper$TriggerUpdates implements $ISpatialVisitor {
    }
    export class $CachedPlane$BlockEntityMoveRecord extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CachedPlane$BlockEntityMoveRecord}.
     */
    export type $CachedPlane$BlockEntityMoveRecord_ = { savedData?: $CompoundTag_, pos?: $BlockPos_, strategy?: $IBlockEntityMoveStrategy, state?: $BlockState_, blockEntity?: $BlockEntity,  } | [savedData?: $CompoundTag_, pos?: $BlockPos_, strategy?: $IBlockEntityMoveStrategy, state?: $BlockState_, blockEntity?: $BlockEntity, ];
    export class $CachedPlane$BlockStorageData {
    }
    export class $SpatialStorageHelper$TelDestination {
    }
    export class $CachedPlane {
        constructor(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
    export class $SpatialStoragePlot {
        getLastTransition(): $TransitionInfo;
        getRegionFilename(): string;
        toTag(): $CompoundTag;
        getOrigin(): $BlockPos;
        getId(): number;
        getSize(): $BlockPos;
        getOwner(): number;
        static fromTag(arg0: $CompoundTag_): $SpatialStoragePlot;
        static MAX_SIZE: number;
        constructor(arg0: number, arg1: $BlockPos_, arg2: number);
        get lastTransition(): $TransitionInfo;
        get regionFilename(): string;
        get origin(): $BlockPos;
        get id(): number;
        get size(): $BlockPos;
        get owner(): number;
    }
    export class $TransitionInfo {
        getWorldId(): $ResourceLocation;
        toTag(): $CompoundTag;
        getTimestamp(): $Instant;
        getMin(): $BlockPos;
        getMax(): $BlockPos;
        static fromTag(arg0: $CompoundTag_): $TransitionInfo;
        static TAG_WORLD_ID: string;
        static TAG_MAX: string;
        static TAG_MIN: string;
        static TAG_TIMESTAMP: string;
        constructor(arg0: $ResourceLocation_, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $Instant);
        get worldId(): $ResourceLocation;
        get timestamp(): $Instant;
        get min(): $BlockPos;
        get max(): $BlockPos;
    }
    export class $SpatialStorageDimensionIds {
        static BIOME_KEY: $ResourceKey<$Biome>;
        static DIMENSION_ID: $ResourceKey<$LevelStem>;
        static CHUNK_GENERATOR_ID: $ResourceLocation;
        static WORLD_ID: $ResourceKey<$Level>;
        static DIMENSION_TYPE_ID: $ResourceKey<$DimensionType>;
        static SKY_PROPERTIES_ID: $ResourceLocation;
    }
    export class $SpatialStoragePlotManager {
        getPlots(): $List<$SpatialStoragePlot>;
        allocatePlot(arg0: $BlockPos_, arg1: number): $SpatialStoragePlot;
        setLastTransition(arg0: number, arg1: $TransitionInfo): void;
        freePlot(arg0: number, arg1: boolean): void;
        getLevel(): $ServerLevel;
        getPlot(arg0: number): $SpatialStoragePlot;
        static INSTANCE: $SpatialStoragePlotManager;
        get plots(): $List<$SpatialStoragePlot>;
        get level(): $ServerLevel;
    }
    export class $SpatialStorageSkyProperties {
        static INSTANCE: $DimensionSpecialEffects;
        constructor();
    }
    export class $CachedPlane$Column {
    }
    export class $ISpatialVisitor {
    }
    export interface $ISpatialVisitor {
        visit(arg0: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $ISpatialVisitor}.
     */
    export type $ISpatialVisitor_ = ((arg0: $BlockPos) => void);
    export class $SpatialStorageHelper {
        swapRegions(arg0: $ServerLevel, arg1: number, arg2: number, arg3: number, arg4: $ServerLevel, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        static getInstance(): $SpatialStorageHelper;
        constructor();
        static get instance(): $SpatialStorageHelper;
    }
    export class $SpatialStorageChunkGenerator extends $ChunkGenerator {
        static MIN_Y: number;
        static CODEC: $MapCodec<$SpatialStorageChunkGenerator>;
        static HEIGHT: number;
        constructor(arg0: $HolderGetter<$Biome_>);
    }
    export class $SpatialStorageWorldData extends $AESavedData {
        getPlots(): $List<$SpatialStoragePlot>;
        allocatePlot(arg0: $BlockPos_, arg1: number): $SpatialStoragePlot;
        setLastTransition(arg0: number, arg1: $TransitionInfo): void;
        getPlotById(arg0: number): $SpatialStoragePlot;
        removePlot(arg0: number): void;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $SpatialStorageWorldData;
        static ID: string;
        constructor();
        get plots(): $List<$SpatialStoragePlot>;
    }
    export class $CachedPlane$PoiMoveRecord extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CachedPlane$PoiMoveRecord}.
     */
    export type $CachedPlane$PoiMoveRecord_ = { relativePos?: $BlockPos_, poiType?: $Holder_<$PoiType>,  } | [relativePos?: $BlockPos_, poiType?: $Holder_<$PoiType>, ];
    export class $SpatialStorageHelper$WrapInMatrixFrame implements $ISpatialVisitor {
    }
}
