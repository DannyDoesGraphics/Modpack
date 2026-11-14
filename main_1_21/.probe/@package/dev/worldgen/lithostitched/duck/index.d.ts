import { $BlockPos, $BlockPos_, $Holder_, $HolderSet_, $RegistryAccess, $HolderSet } from "@package/net/minecraft/core";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $LithostitchedTemplates } from "@package/dev/worldgen/lithostitched/worldgen/structure";
import { $NormalNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Set_ } from "@package/java/util";
import { $PositionalRandomFactory, $SurfaceSystem, $SurfaceRules$Condition, $SurfaceRules$Context } from "@package/net/minecraft/world/level/levelgen";
import { $RandomSource } from "@package/net/minecraft/util";
export * as mnbs from "@package/dev/worldgen/lithostitched/duck/mnbs";

declare module "@package/dev/worldgen/lithostitched/duck" {
    export class $MansionRoomDuck {
    }
    export interface $MansionRoomDuck extends $RegistryHolder {
        lithostitched$getRandom(name: string, random: $RandomSource): string;
        lithostitched$floorNumber(): number;
    }
    export class $ContextBiomeAccessor {
        static canNeverMatch(biomes: $HolderSet_<$Biome>, possibleBiomes: $Set_<$Holder_<$Biome>>): boolean;
        static willAlwaysMatch(biomes: $HolderSet_<$Biome>, possibleBiomes: $Set_<$Holder_<$Biome>>): boolean;
        static cast(context: $SurfaceRules$Context): $ContextBiomeAccessor;
    }
    export interface $ContextBiomeAccessor {
        biomeMatches(holderSet: $HolderSet_<$Biome>): $SurfaceRules$Condition;
    }
    /**
     * Values that may be interpreted as {@link $ContextBiomeAccessor}.
     */
    export type $ContextBiomeAccessor_ = ((holderSet: $HolderSet<$Biome>) => $SurfaceRules$Condition);
    export class $SurfaceSystemAccessor {
    }
    export interface $SurfaceSystemAccessor {
        getNoiseRandom(): $PositionalRandomFactory;
        getBandOffsetNoise(): $NormalNoise;
        get noiseRandom(): $PositionalRandomFactory;
        get bandOffsetNoise(): $NormalNoise;
    }
    export class $RegistryHolder {
    }
    export interface $RegistryHolder {
        setRegistries(registryAccess: $RegistryAccess): void;
        getRegistries(): $RegistryAccess;
    }
    export class $StructurePoolAccess {
    }
    export interface $StructurePoolAccess {
        getLithostitchedTemplates(): $LithostitchedTemplates;
        compileRawTemplates(): void;
        get lithostitchedTemplates(): $LithostitchedTemplates;
    }
    export class $ReferencePosDuck {
    }
    export interface $ReferencePosDuck {
        setReferencePos(blockPos: $BlockPos_): void;
        set referencePos(value: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $ReferencePosDuck}.
     */
    export type $ReferencePosDuck_ = ((blockPos: $BlockPos) => void);
    export class $ContextAccessor {
    }
    export interface $ContextAccessor {
        getSystem(): $SurfaceSystem;
        getStoneDepthBelow(): number;
        getY(): number;
        getX(): number;
        getZ(): number;
        getChunk(): $ChunkAccess;
        get system(): $SurfaceSystem;
        get stoneDepthBelow(): number;
        get y(): number;
        get x(): number;
        get z(): number;
        get chunk(): $ChunkAccess;
    }
}
