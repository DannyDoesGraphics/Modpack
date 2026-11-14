import { $LevelHeightAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $BiomeSource } from "@package/net/minecraft/world/level/biome";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $Record } from "@package/java/lang";
import { $Structure$GenerationContext_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $RandomState } from "@package/net/minecraft/world/level/levelgen";
import { $PlacementContext } from "@package/net/minecraft/world/level/levelgen/placement";

declare module "@package/dev/worldgen/lithostitched/api/worldgen/placementcondition" {
    export class $PlacementCondition$Context extends $Record {
        randomState(): $RandomState;
        heightAccessor(): $LevelHeightAccessor;
        biomeSource(): $BiomeSource;
        generator(): $ChunkGenerator;
        seed(): number;
        registries(): $RegistryAccess;
        constructor(registries: $RegistryAccess, generator: $ChunkGenerator, heightAccessor: $LevelHeightAccessor, randomState: $RandomState, biomeSource: $BiomeSource, seed: number);
    }
    /**
     * Values that may be interpreted as {@link $PlacementCondition$Context}.
     */
    export type $PlacementCondition$Context_ = { generator?: $ChunkGenerator, registries?: $RegistryAccess, biomeSource?: $BiomeSource, randomState?: $RandomState, seed?: number, heightAccessor?: $LevelHeightAccessor,  } | [generator?: $ChunkGenerator, registries?: $RegistryAccess, biomeSource?: $BiomeSource, randomState?: $RandomState, seed?: number, heightAccessor?: $LevelHeightAccessor, ];
    export class $PlacementCondition {
        static CODEC: $Codec<$PlacementCondition>;
        static BASE_CODEC: $Codec<$PlacementCondition>;
    }
    export interface $PlacementCondition {
        test(context: $PlacementCondition$Context_, blockPos: $BlockPos_): boolean;
        test(context: $PlacementContext, pos: $BlockPos_): boolean;
        test(context: $Structure$GenerationContext_, pos: $BlockPos_): boolean;
        codec(): $MapCodec<$PlacementCondition>;
    }
}
