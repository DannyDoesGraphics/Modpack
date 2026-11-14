import { $StructureManager } from "@package/net/minecraft/world/level";
import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $MobSpawnSettings$SpawnerData } from "@package/net/minecraft/world/level/biome";
import { $MobCategory_, $MobCategory } from "@package/net/minecraft/world/entity";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $Structure_, $Structure } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/net/mehvahdjukaar/moonlight/api/worldgen" {
    export class $SpawnBoxSettings extends $Record {
        spawnOverrides(): $Map<$MobCategory, $Map<string, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>>;
        hasCategory(arg0: $MobCategory_): boolean;
        get(arg0: string, arg1: $MobCategory_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        isEmpty(): boolean;
        static CODEC: $Codec<$SpawnBoxSettings>;
        static EMPTY: $SpawnBoxSettings;
        constructor(spawnOverrides: $Map_<$MobCategory_, $Map_<string, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnBoxSettings}.
     */
    export type $SpawnBoxSettings_ = { spawnOverrides?: $Map_<$MobCategory_, $Map_<string, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>>,  } | [spawnOverrides?: $Map_<$MobCategory_, $Map_<string, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>>, ];
    export class $ISpecialSpawnsStructure {
    }
    export interface $ISpecialSpawnsStructure {
        ml$getSpecialSpawns(arg0: $StructureManager, arg1: $Structure_, arg2: $BlockPos_, arg3: $LongSet, arg4: $MobCategory_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
    }
    /**
     * Values that may be interpreted as {@link $ISpecialSpawnsStructure}.
     */
    export type $ISpecialSpawnsStructure_ = ((arg0: $StructureManager, arg1: $Structure, arg2: $BlockPos, arg3: $LongSet, arg4: $MobCategory) => $WeightedRandomList<$MobSpawnSettings$SpawnerData>);
    export class $ISpawnBoxStructure {
    }
    export interface $ISpawnBoxStructure extends $ISpecialSpawnsStructure {
        ml$getSpawnBoxSettings(): $SpawnBoxSettings;
        ml$setSpawnBoxSettings(arg0: $SpawnBoxSettings_): void;
        ml$getSpecialSpawns(arg0: $StructureManager, arg1: $Structure_, arg2: $BlockPos_, arg3: $LongSet, arg4: $MobCategory_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
    }
    /**
     * Values that may be interpreted as {@link $ISpawnBoxStructure}.
     */
    export type $ISpawnBoxStructure_ = (() => $SpawnBoxSettings_);
}
