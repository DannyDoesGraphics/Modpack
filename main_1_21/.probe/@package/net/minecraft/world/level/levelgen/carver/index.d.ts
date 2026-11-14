import { $ProbabilityFeatureConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $ChunkPos, $LevelHeightAccessor } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec_, $Codec } from "@package/com/mojang/serialization";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $CarvingMask, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $RegistryAccess, $HolderSet, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $FloatProvider } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $SurfaceRules$RuleSource_, $Aquifer, $RandomState, $VerticalAnchor, $WorldGenerationContext, $NoiseChunk, $VerticalAnchor_, $NoiseBasedChunkGenerator } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/carver" {
    export interface $WorldCarver<C> extends RegistryMarked<RegistryTypes.WorldgenCarverTag, RegistryTypes.WorldgenCarver> {}
    export class $CarverDebugSettings {
        getBarrierState(): $BlockState;
        getAirState(): $BlockState;
        getWaterState(): $BlockState;
        getLavaState(): $BlockState;
        isDebugMode(): boolean;
        static of(debugMode: boolean, airState: $BlockState_, waterState: $BlockState_, lavaState: $BlockState_, barrierState: $BlockState_): $CarverDebugSettings;
        static of(airState: $BlockState_, waterState: $BlockState_, lavaState: $BlockState_, barrierState: $BlockState_): $CarverDebugSettings;
        static of(debugMode: boolean, airState: $BlockState_): $CarverDebugSettings;
        static CODEC: $Codec<$CarverDebugSettings>;
        static DEFAULT: $CarverDebugSettings;
        get barrierState(): $BlockState;
        get airState(): $BlockState;
        get waterState(): $BlockState;
        get lavaState(): $BlockState;
        get debugMode(): boolean;
    }
    /**
     * A carver which creates Minecraft's most common cave types.
     */
    export class $CaveWorldCarver extends $WorldCarver<$CaveCarverConfiguration> {
        /**
         * Carves the given chunk with caves that originate from the given `chunkPos`.
         * This method is invoked 289 times in order to generate each chunk (once for every position in an 8 chunk radius, or 17x17 chunk area, centered around the target chunk).
         * 
         * @see net.minecraft.world.level.chunk.ChunkGenerator#applyCarvers
         */
        carve(context: $CarvingContext, config: $CaveCarverConfiguration, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, random: $RandomSource, aquifer: $Aquifer, chunkPos: $ChunkPos, carvingMask: $CarvingMask): boolean;
        isStartChunk(config: $CaveCarverConfiguration, random: $RandomSource): boolean;
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        constructor(codec: $Codec_<$CaveCarverConfiguration>);
    }
    export class $CarvingContext extends $WorldGenerationContext {
        randomState(): $RandomState;
        /**
         * @deprecated
         */
        topMaterial(biomeMapper: $Function_<$BlockPos, $Holder<$Biome>>, access: $ChunkAccess, pos: $BlockPos_, hasFluid: boolean): ($BlockState) | undefined;
        /**
         * @deprecated
         */
        registryAccess(): $RegistryAccess;
        constructor(generator: $NoiseBasedChunkGenerator, registryAccess: $RegistryAccess, level: $LevelHeightAccessor, noiseChunk: $NoiseChunk, randomState: $RandomState, surfaceRule: $SurfaceRules$RuleSource_);
    }
    /**
     * A carver responsible for creating ravines, or canyons.
     */
    export class $CanyonWorldCarver extends $WorldCarver<$CanyonCarverConfiguration> {
        /**
         * Carves the given chunk with caves that originate from the given `chunkPos`.
         * This method is invoked 289 times in order to generate each chunk (once for every position in an 8 chunk radius, or 17x17 chunk area, centered around the target chunk).
         * 
         * @see net.minecraft.world.level.chunk.ChunkGenerator#applyCarvers
         */
        carve(context: $CarvingContext, config: $CanyonCarverConfiguration, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, random: $RandomSource, aquifer: $Aquifer, chunkPos: $ChunkPos, carvingMask: $CarvingMask): boolean;
        isStartChunk(config: $CanyonCarverConfiguration, random: $RandomSource): boolean;
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        constructor(codec: $Codec_<$CanyonCarverConfiguration>);
    }
    export class $CanyonCarverConfiguration extends $CarverConfiguration {
        verticalRotation: $FloatProvider;
        lavaLevel: $VerticalAnchor;
        debugSettings: $CarverDebugSettings;
        static CODEC: $Codec<$CanyonCarverConfiguration>;
        shape: $CanyonCarverConfiguration$CanyonShapeConfiguration;
        probability: number;
        replaceable: $HolderSet<$Block>;
        y: $HeightProvider;
        yScale: $FloatProvider;
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, debugSettings: $CarverDebugSettings, replaceable: $HolderSet_<$Block>, verticalRotation: $FloatProvider, shape: $CanyonCarverConfiguration$CanyonShapeConfiguration);
        constructor(config: $CarverConfiguration, verticalRotation: $FloatProvider, shape: $CanyonCarverConfiguration$CanyonShapeConfiguration);
    }
    export class $NetherWorldCarver extends $CaveWorldCarver {
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        constructor(arg0: $Codec_<$CaveCarverConfiguration>);
    }
    /**
     * Used to define certain positions to skip or ignore when carving.
     */
    export class $WorldCarver$CarveSkipChecker {
    }
    export interface $WorldCarver$CarveSkipChecker {
        shouldSkip(context: $CarvingContext, relativeX: number, arg2: number, relativeY: number, arg4: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldCarver$CarveSkipChecker}.
     */
    export type $WorldCarver$CarveSkipChecker_ = ((arg0: $CarvingContext, arg1: number, arg2: number, arg3: number, arg4: number) => boolean);
    export class $CarverConfiguration extends $ProbabilityFeatureConfiguration {
        lavaLevel: $VerticalAnchor;
        debugSettings: $CarverDebugSettings;
        static CODEC: $MapCodec<$CarverConfiguration>;
        probability: number;
        replaceable: $HolderSet<$Block>;
        y: $HeightProvider;
        yScale: $FloatProvider;
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, debugSettings: $CarverDebugSettings, replaceable: $HolderSet_<$Block>);
    }
    export interface $ConfiguredWorldCarver<WC> extends RegistryMarked<RegistryTypes.WorldgenConfiguredCarverTag, RegistryTypes.WorldgenConfiguredCarver> {}
    export class $CaveCarverConfiguration extends $CarverConfiguration {
        lavaLevel: $VerticalAnchor;
        debugSettings: $CarverDebugSettings;
        static CODEC: $Codec<$CaveCarverConfiguration>;
        horizontalRadiusMultiplier: $FloatProvider;
        verticalRadiusMultiplier: $FloatProvider;
        probability: number;
        replaceable: $HolderSet<$Block>;
        y: $HeightProvider;
        yScale: $FloatProvider;
        constructor(config: $CarverConfiguration, horizontalRadiusMultiplier: $FloatProvider, verticalRadiusMultiplier: $FloatProvider, floorLevel: $FloatProvider);
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, replaceable: $HolderSet_<$Block>, horizontalRadiusMultiplier: $FloatProvider, verticalRadiusMultiplier: $FloatProvider, floorLevel: $FloatProvider);
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, debugSettings: $CarverDebugSettings, replaceable: $HolderSet_<$Block>, horizontalRadiusMultiplier: $FloatProvider, verticalRadiusMultiplier: $FloatProvider, floorLevel: $FloatProvider);
    }
    export class $WorldCarver<C extends $CarverConfiguration> {
        configuredCodec(): $MapCodec<$ConfiguredWorldCarver<C>>;
        /**
         * Carves the given chunk with caves that originate from the given `chunkPos`.
         * This method is invoked 289 times in order to generate each chunk (once for every position in an 8 chunk radius, or 17x17 chunk area, centered around the target chunk).
         * 
         * @see net.minecraft.world.level.chunk.ChunkGenerator#applyCarvers
         */
        carve(context: $CarvingContext, config: C, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, random: $RandomSource, aquifer: $Aquifer, chunkPos: $ChunkPos, carvingMask: $CarvingMask): boolean;
        isStartChunk(config: C, random: $RandomSource): boolean;
        getRange(): number;
        configured(config: C): $ConfiguredWorldCarver<C>;
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        constructor(codec: $Codec_<C>);
        get range(): number;
    }
    /**
     * Values that may be interpreted as {@link $WorldCarver}.
     */
    export type $WorldCarver_<C> = RegistryTypes.WorldgenCarver;
    export class $CanyonCarverConfiguration$CanyonShapeConfiguration {
        static CODEC: $Codec<$CanyonCarverConfiguration$CanyonShapeConfiguration>;
        thickness: $FloatProvider;
        distanceFactor: $FloatProvider;
        horizontalRadiusFactor: $FloatProvider;
        widthSmoothness: number;
        verticalRadiusDefaultFactor: number;
        verticalRadiusCenterFactor: number;
        constructor(distanceFactor: $FloatProvider, thickness: $FloatProvider, widthSmoothness: number, horizontalRadiusFactor: $FloatProvider, verticalRadiusDefaultFactor: number, verticalRadiusCenterFactor: number);
    }
    export class $ConfiguredWorldCarver<WC extends $CarverConfiguration> extends $Record {
        carve(context: $CarvingContext, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, random: $RandomSource, aquifer: $Aquifer, chunkPos: $ChunkPos, carvingMask: $CarvingMask): boolean;
        isStartChunk(random: $RandomSource): boolean;
        worldCarver(): $WorldCarver<WC>;
        config(): WC;
        static CODEC: $Codec<$Holder<$ConfiguredWorldCarver<never>>>;
        static DIRECT_CODEC: $Codec<$ConfiguredWorldCarver<never>>;
        static LIST_CODEC: $Codec<$HolderSet<$ConfiguredWorldCarver<never>>>;
        constructor(worldCarver: $WorldCarver_<WC>, config: WC);
    }
    /**
     * Values that may be interpreted as {@link $ConfiguredWorldCarver}.
     */
    export type $ConfiguredWorldCarver_<WC> = RegistryTypes.WorldgenConfiguredCarver | { config?: $CarverConfiguration, worldCarver?: $WorldCarver_<$CarverConfiguration>,  } | [config?: $CarverConfiguration, worldCarver?: $WorldCarver_<$CarverConfiguration>, ];
}
