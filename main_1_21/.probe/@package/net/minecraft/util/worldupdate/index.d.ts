import { $SimpleRegionStorage, $ChunkStorage, $RegionFile } from "@package/net/minecraft/world/level/chunk/storage";
import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $AutoCloseable, $Record } from "@package/java/lang";
import { $ListIterator, $List_, $Set } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";

declare module "@package/net/minecraft/util/worldupdate" {
    export class $WorldUpgrader$SimpleRegionStorageUpgrader extends $WorldUpgrader$AbstractUpgrader<$SimpleRegionStorage> {
    }
    export class $WorldUpgrader$ChunkUpgrader extends $WorldUpgrader$AbstractUpgrader<$ChunkStorage> {
    }
    export class $WorldUpgrader$EntityUpgrader extends $WorldUpgrader$SimpleRegionStorageUpgrader {
    }
    export class $WorldUpgrader$AbstractUpgrader<T extends $AutoCloseable> {
    }
    export class $WorldUpgrader$PoiUpgrader extends $WorldUpgrader$SimpleRegionStorageUpgrader {
    }
    export class $WorldUpgrader {
        getProgress(): number;
        isFinished(): boolean;
        getTotalChunks(): number;
        getConverted(): number;
        getSkipped(): number;
        dimensionProgress(level: $ResourceKey_<$Level>): number;
        cancel(): void;
        levels(): $Set<$ResourceKey<$Level>>;
        getStatus(): $Component;
        constructor(levelStorage: $LevelStorageSource$LevelStorageAccess, dataFixer: $DataFixer, registryAccess: $RegistryAccess, eraseCache: boolean, recreateRegionFiles: boolean);
        get progress(): number;
        get finished(): boolean;
        get totalChunks(): number;
        get converted(): number;
        get skipped(): number;
        get status(): $Component;
    }
    export class $WorldUpgrader$FileToUpgrade extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WorldUpgrader$FileToUpgrade}.
     */
    export type $WorldUpgrader$FileToUpgrade_ = { file?: $RegionFile, chunksToUpgrade?: $List_<$ChunkPos>,  } | [file?: $RegionFile, chunksToUpgrade?: $List_<$ChunkPos>, ];
    export class $WorldUpgrader$DimensionToUpgrade<T> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $WorldUpgrader$DimensionToUpgrade}.
     */
    export type $WorldUpgrader$DimensionToUpgrade_<T> = { dimensionKey?: $ResourceKey_<$Level>, storage?: any, files?: $ListIterator<$WorldUpgrader$FileToUpgrade_>,  } | [dimensionKey?: $ResourceKey_<$Level>, storage?: any, files?: $ListIterator<$WorldUpgrader$FileToUpgrade_>, ];
}
