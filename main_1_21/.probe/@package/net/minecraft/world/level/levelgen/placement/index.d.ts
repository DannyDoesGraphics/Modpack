import { $WorldGenLevel, $ChunkPos } from "@package/net/minecraft/world/level";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $PlacedFeatureAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $CarvingMask, $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $List, $List_ } from "@package/java/util";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $BlockPredicate } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $BlockPos, $Holder_, $HolderSet, $Holder, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $IntProvider_ } from "@package/net/minecraft/util/valueproviders";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $Enum, $Record } from "@package/java/lang";
import { $Heightmap$Types_, $WorldGenerationContext, $VerticalAnchor_, $GenerationStep$Carving_ } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/placement" {
    export class $BlockPredicateFilter extends $PlacementFilter {
        static forPredicate(predicate: $BlockPredicate): $BlockPredicateFilter;
        static CODEC: $MapCodec<$BlockPredicateFilter>;
    }
    export class $RarityFilter extends $PlacementFilter {
        static onAverageOnceEvery(chance: number): $RarityFilter;
        static CODEC: $MapCodec<$RarityFilter>;
    }
    export class $PlacementFilter extends $PlacementModifier {
        static CODEC: $Codec<$PlacementModifier>;
        constructor();
    }
    export class $PlacedFeature extends $Record implements $PlacedFeatureAccessor {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        placement(): $List<$PlacementModifier>;
        placeWithBiomeCheck(level: $WorldGenLevel, generator: $ChunkGenerator, random: $RandomSource, pos: $BlockPos_): boolean;
        place(level: $WorldGenLevel, generator: $ChunkGenerator, random: $RandomSource, pos: $BlockPos_): boolean;
        feature(): $Holder<$ConfiguredFeature<never, never>>;
        setFeature(holder: $Holder_<$ConfiguredFeature<never, never>>): void;
        static CODEC: $Codec<$Holder<$PlacedFeature>>;
        static DIRECT_CODEC: $Codec<$PlacedFeature>;
        static LIST_CODEC: $Codec<$HolderSet<$PlacedFeature>>;
        static LIST_OF_LISTS_CODEC: $Codec<$List<$HolderSet<$PlacedFeature>>>;
        constructor(arg0: $Holder_<$ConfiguredFeature<never, never>>, arg1: $List_<$PlacementModifier>);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $PlacedFeature}.
     */
    export type $PlacedFeature_ = RegistryTypes.WorldgenPlacedFeature | { feature?: $Holder_<$ConfiguredFeature<never, never>>, placement?: $List_<$PlacementModifier>,  } | [feature?: $Holder_<$ConfiguredFeature<never, never>>, placement?: $List_<$PlacementModifier>, ];
    export class $NoiseBasedCountPlacement extends $RepeatingPlacement {
        static of(noiseToCountRatio: number, noiseFactor: number, arg2: number): $NoiseBasedCountPlacement;
        static CODEC: $MapCodec<$NoiseBasedCountPlacement>;
    }
    export class $CaveSurface extends $Enum<$CaveSurface> implements $StringRepresentable {
        getY(): number;
        static values(): $CaveSurface[];
        static valueOf(arg0: string): $CaveSurface;
        getDirection(): $Direction;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static FLOOR: $CaveSurface;
        static CODEC: $Codec<$CaveSurface>;
        static CEILING: $CaveSurface;
        get y(): number;
        get direction(): $Direction;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CaveSurface}.
     */
    export type $CaveSurface_ = "ceiling" | "floor";
    export class $BiomeFilter extends $PlacementFilter {
        static biome(): $BiomeFilter;
        static CODEC: $MapCodec<$BiomeFilter>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeFilter}.
     */
    export type $BiomeFilter_ = RegistryTypes.WorldgenBiome | RegExp | $BiomeFilter_[] | { or?: $BiomeFilter_, not?: $BiomeFilter_, id?: RegistryTypes.WorldgenBiome, type?: RegistryTypes.WorldgenBiome, tag?: RegistryTypes.WorldgenBiomeTag,  };
    export class $CountPlacement extends $RepeatingPlacement {
        static of(count: number): $CountPlacement;
        static of(count: $IntProvider_): $CountPlacement;
        static CODEC: $MapCodec<$CountPlacement>;
    }
    export class $RandomOffsetPlacement extends $PlacementModifier {
        static vertical(xzSpread: $IntProvider_): $RandomOffsetPlacement;
        static of(xzSpread: $IntProvider_, ySpread: $IntProvider_): $RandomOffsetPlacement;
        static horizontal(xzSpread: $IntProvider_): $RandomOffsetPlacement;
        static CODEC: $MapCodec<$RandomOffsetPlacement>;
    }
    export class $FixedPlacement extends $PlacementModifier {
        static of(...positions: $BlockPos_[]): $FixedPlacement;
        static CODEC: $MapCodec<$FixedPlacement>;
    }
    export interface $PlacedFeature extends RegistryMarked<RegistryTypes.WorldgenPlacedFeatureTag, RegistryTypes.WorldgenPlacedFeature> {}
    export class $CarvingMaskPlacement extends $PlacementModifier {
        static forStep(step: $GenerationStep$Carving_): $CarvingMaskPlacement;
        static CODEC: $MapCodec<$CarvingMaskPlacement>;
    }
    export class $SurfaceRelativeThresholdFilter extends $PlacementFilter {
        static of(heightmap: $Heightmap$Types_, minInclusive: number, maxInclusive: number): $SurfaceRelativeThresholdFilter;
        static CODEC: $MapCodec<$SurfaceRelativeThresholdFilter>;
    }
    export class $SurfaceWaterDepthFilter extends $PlacementFilter {
        static forMaxDepth(maxWaterDepth: number): $SurfaceWaterDepthFilter;
        static CODEC: $MapCodec<$SurfaceWaterDepthFilter>;
    }
    export class $EnvironmentScanPlacement extends $PlacementModifier {
        static scanningFor(directionOfSearch: $Direction_, targetCondition: $BlockPredicate, allowedSearchCondition: $BlockPredicate, maxSteps: number): $EnvironmentScanPlacement;
        static scanningFor(directionOfSearch: $Direction_, targetCondition: $BlockPredicate, maxSteps: number): $EnvironmentScanPlacement;
        static CODEC: $MapCodec<$EnvironmentScanPlacement>;
    }
    export class $NoiseThresholdCountPlacement extends $RepeatingPlacement {
        static of(noiseLevel: number, arg1: number, belowNoise: number): $NoiseThresholdCountPlacement;
        static CODEC: $MapCodec<$NoiseThresholdCountPlacement>;
    }
    export class $RepeatingPlacement extends $PlacementModifier {
        static CODEC: $Codec<$PlacementModifier>;
        constructor();
    }
    export class $HeightRangePlacement extends $PlacementModifier {
        static of(height: $HeightProvider): $HeightRangePlacement;
        static uniform(minInclusive: $VerticalAnchor_, maxInclusive: $VerticalAnchor_): $HeightRangePlacement;
        static triangle(minInclusive: $VerticalAnchor_, maxInclusive: $VerticalAnchor_): $HeightRangePlacement;
        static CODEC: $MapCodec<$HeightRangePlacement>;
    }
    export interface $PlacementModifierType<P> extends RegistryMarked<RegistryTypes.WorldgenPlacementModifierTypeTag, RegistryTypes.WorldgenPlacementModifierType> {}
    /**
     * @deprecated
     */
    export class $CountOnEveryLayerPlacement extends $PlacementModifier {
        static of(count: $IntProvider_): $CountOnEveryLayerPlacement;
        static of(count: number): $CountOnEveryLayerPlacement;
        static CODEC: $MapCodec<$CountOnEveryLayerPlacement>;
    }
    export class $PlacementModifierType<P extends $PlacementModifier> {
        static ENVIRONMENT_SCAN: $PlacementModifierType<$EnvironmentScanPlacement>;
        static HEIGHT_RANGE: $PlacementModifierType<$HeightRangePlacement>;
        static CARVING_MASK_PLACEMENT: $PlacementModifierType<$CarvingMaskPlacement>;
        static RARITY_FILTER: $PlacementModifierType<$RarityFilter>;
        static FIXED_PLACEMENT: $PlacementModifierType<$FixedPlacement>;
        static SURFACE_RELATIVE_THRESHOLD_FILTER: $PlacementModifierType<$SurfaceRelativeThresholdFilter>;
        static NOISE_THRESHOLD_COUNT: $PlacementModifierType<$NoiseThresholdCountPlacement>;
        static BIOME_FILTER: $PlacementModifierType<$BiomeFilter>;
        static HEIGHTMAP: $PlacementModifierType<$HeightmapPlacement>;
        static BLOCK_PREDICATE_FILTER: $PlacementModifierType<$BlockPredicateFilter>;
        static NOISE_BASED_COUNT: $PlacementModifierType<$NoiseBasedCountPlacement>;
        static SURFACE_WATER_DEPTH_FILTER: $PlacementModifierType<$SurfaceWaterDepthFilter>;
        static COUNT_ON_EVERY_LAYER: $PlacementModifierType<$CountOnEveryLayerPlacement>;
        static IN_SQUARE: $PlacementModifierType<$InSquarePlacement>;
        static RANDOM_OFFSET: $PlacementModifierType<$RandomOffsetPlacement>;
        static COUNT: $PlacementModifierType<$CountPlacement>;
    }
    export interface $PlacementModifierType<P extends $PlacementModifier> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $PlacementModifierType}.
     */
    export type $PlacementModifierType_<P> = RegistryTypes.WorldgenPlacementModifierType | (() => $MapCodec_<P>);
    export class $InSquarePlacement extends $PlacementModifier {
        static spread(): $InSquarePlacement;
        static CODEC: $MapCodec<$InSquarePlacement>;
        constructor();
    }
    export class $PlacementModifier {
        getPositions(context: $PlacementContext, random: $RandomSource, pos: $BlockPos_): $Stream<$BlockPos>;
        type(): $PlacementModifierType<never>;
        static CODEC: $Codec<$PlacementModifier>;
        constructor();
    }
    export class $PlacementContext extends $WorldGenerationContext {
        topFeature(): ($PlacedFeature) | undefined;
        getCarvingMask(chunkPos: $ChunkPos, step: $GenerationStep$Carving_): $CarvingMask;
        generator(): $ChunkGenerator;
        getLevel(): $WorldGenLevel;
        getBlockState(pos: $BlockPos_): $BlockState;
        getMinBuildHeight(): number;
        getHeight(heightmapType: $Heightmap$Types_, x: number, z: number): number;
        constructor(level: $WorldGenLevel, generator: $ChunkGenerator, topFeature: ($PlacedFeature_) | undefined);
        get level(): $WorldGenLevel;
        get minBuildHeight(): number;
    }
    export class $HeightmapPlacement extends $PlacementModifier {
        static onHeightmap(heightmap: $Heightmap$Types_): $HeightmapPlacement;
        static CODEC: $MapCodec<$HeightmapPlacement>;
    }
}
