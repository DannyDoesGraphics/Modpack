import { $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $PlacedMeteoriteSettings, $CraterType_ } from "@package/appeng/worldgen/meteorite";

declare module "@package/appeng/worldgen/meteorite/debug" {
    export class $MeteoriteSpawner {
        trySpawnMeteoriteAtSuitableHeight(arg0: $LevelReader, arg1: $BlockPos_, arg2: number, arg3: $CraterType_, arg4: boolean): $PlacedMeteoriteSettings;
        trySpawnMeteorite(arg0: $LevelReader, arg1: $BlockPos_, arg2: number, arg3: $CraterType_, arg4: boolean): $PlacedMeteoriteSettings;
        constructor();
    }
}
