import { $FeatureSize } from "@package/net/minecraft/world/level/levelgen/feature/featuresize";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $TreeDecorator } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $Codec } from "@package/com/mojang/serialization";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $TrunkPlacer } from "@package/net/minecraft/world/level/levelgen/feature/trunkplacers";
import { $FoliagePlacer } from "@package/net/minecraft/world/level/levelgen/feature/foliageplacers";
import { $RuleBasedBlockStateProvider_, $BlockStateProvider, $RuleBasedBlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $RuleTest, $RuleTest_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $RootPlacer } from "@package/net/minecraft/world/level/levelgen/feature/rootplacers";
import { $List, $List_ } from "@package/java/util";
import { $CaveSurface_, $PlacedFeature, $CaveSurface } from "@package/net/minecraft/world/level/levelgen/placement";
import { $BlockPredicate } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BlockPos, $Holder_, $HolderSet, $HolderSet_, $Holder, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $OreConfigurationAccessor } from "@package/com/almostreliable/unified/mixin/neoforge/worldgen";
import { $FloatProvider, $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SpikeFeature$EndSpike, $ConfiguredFeature, $WeightedPlacedFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $MultifaceBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $GeodeLayerSettings, $GeodeBlockSettings, $GeodeCrackSettings } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/feature/configurations" {
    export class $UnderwaterMagmaConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$UnderwaterMagmaConfiguration>;
        floorSearchRange: number;
        placementRadiusAroundFloor: number;
        placementProbabilityPerValidPosition: number;
        constructor(floorSearchRange: number, placementRadiusAroundFloor: number, placementProbabilityPerValidPosition: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $OreConfiguration$TargetBlockState {
        static CODEC: $Codec<$OreConfiguration$TargetBlockState>;
        state: $BlockState;
        target: $RuleTest;
    }
    export class $RandomFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        features: $List<$WeightedPlacedFeature>;
        static CODEC: $Codec<$RandomFeatureConfiguration>;
        defaultFeature: $Holder<$PlacedFeature>;
        constructor(features: $List_<$WeightedPlacedFeature>, defaultFeature: $Holder_<$PlacedFeature>);
    }
    export class $VegetationPatchConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        vegetationFeature: $Holder<$PlacedFeature>;
        extraEdgeColumnChance: number;
        static CODEC: $Codec<$VegetationPatchConfiguration>;
        depth: $IntProvider;
        surface: $CaveSurface;
        vegetationChance: number;
        extraBottomBlockChance: number;
        replaceable: $TagKey<$Block>;
        xzRadius: $IntProvider;
        groundState: $BlockStateProvider;
        verticalRange: number;
        constructor(replaceable: $TagKey_<$Block>, groundState: $BlockStateProvider, vegetationFeature: $Holder_<$PlacedFeature>, surface: $CaveSurface_, depth: $IntProvider_, extraBottomBlockChance: number, verticalRange: number, vegetationChance: number, xzRadius: $IntProvider_, extraEdgeColumnChance: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $RootSystemConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        hangingRootsVerticalSpan: number;
        static CODEC: $Codec<$RootSystemConfiguration>;
        allowedVerticalWaterForTree: number;
        hangingRootPlacementAttempts: number;
        rootReplaceable: $TagKey<$Block>;
        rootStateProvider: $BlockStateProvider;
        requiredVerticalSpaceForTree: number;
        rootPlacementAttempts: number;
        allowedTreePosition: $BlockPredicate;
        hangingRootRadius: number;
        hangingRootStateProvider: $BlockStateProvider;
        rootRadius: number;
        rootColumnMaxHeight: number;
        treeFeature: $Holder<$PlacedFeature>;
        constructor(treeFeature: $Holder_<$PlacedFeature>, requiredVerticalSpaceForTree: number, rootRadius: number, rootReplaceable: $TagKey_<$Block>, rootStateProvider: $BlockStateProvider, rootPlacementAttempts: number, rootColumnMaxHeight: number, hangingRootRadius: number, hangingRootsVerticalSpawn: number, hangingRootStateProvider: $BlockStateProvider, hangingRootPlacementAttempts: number, allowedVerticalWaterForTree: number, allowedTreePosition: $BlockPredicate);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $ReplaceBlockConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$ReplaceBlockConfiguration>;
        targetStates: $List<$OreConfiguration$TargetBlockState>;
        constructor(targetState: $BlockState_, state: $BlockState_);
        constructor(targetStates: $List_<$OreConfiguration$TargetBlockState>);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $TwistingVinesConfig extends $Record implements $FeatureConfiguration {
        maxHeight(): number;
        spreadWidth(): number;
        spreadHeight(): number;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$TwistingVinesConfig>;
        constructor(arg0: number, arg1: number, arg2: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $TwistingVinesConfig}.
     */
    export type $TwistingVinesConfig_ = { maxHeight?: number, spreadHeight?: number, spreadWidth?: number,  } | [maxHeight?: number, spreadHeight?: number, spreadWidth?: number, ];
    export class $LargeDripstoneConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        minRadiusForWind: number;
        static CODEC: $Codec<$LargeDripstoneConfiguration>;
        maxColumnRadiusToCaveHeightRatio: number;
        heightScale: $FloatProvider;
        stalactiteBluntness: $FloatProvider;
        columnRadius: $IntProvider;
        floorToCeilingSearchRange: number;
        stalagmiteBluntness: $FloatProvider;
        windSpeed: $FloatProvider;
        minBluntnessForWind: number;
        constructor(floorToCeilingSearchRange: number, columnRadius: $IntProvider_, heightScale: $FloatProvider, maxColumnRadiusToCaveHeightRatio: number, stalactiteBluntness: $FloatProvider, stalagmiteBluntness: $FloatProvider, windSpeed: $FloatProvider, minRadiusForWind: number, minBluntnessForWind: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $FeatureConfiguration {
        static NONE: $NoneFeatureConfiguration;
    }
    export interface $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $NetherForestVegetationConfig extends $BlockPileConfiguration {
        static CODEC: $Codec<$NetherForestVegetationConfig>;
        spreadHeight: number;
        spreadWidth: number;
        stateProvider: $BlockStateProvider;
        constructor(stateProvider: $BlockStateProvider, spreadWidth: number, spreadHeight: number);
    }
    export class $SculkPatchConfiguration extends $Record implements $FeatureConfiguration {
        spreadRounds(): number;
        growthRounds(): number;
        chargeCount(): number;
        amountPerCharge(): number;
        spreadAttempts(): number;
        catalystChance(): number;
        extraRareGrowths(): $IntProvider;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SculkPatchConfiguration>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $IntProvider_, arg6: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $SculkPatchConfiguration}.
     */
    export type $SculkPatchConfiguration_ = { growthRounds?: number, spreadRounds?: number, spreadAttempts?: number, extraRareGrowths?: $IntProvider_, chargeCount?: number, amountPerCharge?: number, catalystChance?: number,  } | [growthRounds?: number, spreadRounds?: number, spreadAttempts?: number, extraRareGrowths?: $IntProvider_, chargeCount?: number, amountPerCharge?: number, catalystChance?: number, ];
    export class $CountConfiguration implements $FeatureConfiguration {
        count(): $IntProvider;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$CountConfiguration>;
        constructor(count: number);
        constructor(count: $IntProvider_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $HugeMushroomFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        capProvider: $BlockStateProvider;
        static CODEC: $Codec<$HugeMushroomFeatureConfiguration>;
        stemProvider: $BlockStateProvider;
        foliageRadius: number;
        constructor(capProvider: $BlockStateProvider, stemProvider: $BlockStateProvider, foliageRadius: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $TreeConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        foliagePlacer: $FoliagePlacer;
        trunkProvider: $BlockStateProvider;
        static CODEC: $Codec<$TreeConfiguration>;
        trunkPlacer: $TrunkPlacer;
        rootPlacer: ($RootPlacer) | undefined;
        decorators: $List<$TreeDecorator>;
        foliageProvider: $BlockStateProvider;
        ignoreVines: boolean;
        minimumSize: $FeatureSize;
        forceDirt: boolean;
        dirtProvider: $BlockStateProvider;
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $RandomPatchConfiguration extends $Record implements $FeatureConfiguration {
        xzSpread(): number;
        ySpread(): number;
        feature(): $Holder<$PlacedFeature>;
        tries(): number;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$RandomPatchConfiguration>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $Holder_<$PlacedFeature>);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $RandomPatchConfiguration}.
     */
    export type $RandomPatchConfiguration_ = { tries?: number, feature?: $Holder_<$PlacedFeature>, xzSpread?: number, ySpread?: number,  } | [tries?: number, feature?: $Holder_<$PlacedFeature>, xzSpread?: number, ySpread?: number, ];
    export class $BlockStateConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$BlockStateConfiguration>;
        state: $BlockState;
        constructor(state: $BlockState_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $TreeConfiguration$TreeConfigurationBuilder {
        ignoreVines(): $TreeConfiguration$TreeConfigurationBuilder;
        decorators(decorators: $List_<$TreeDecorator>): $TreeConfiguration$TreeConfigurationBuilder;
        forceDirt(): $TreeConfiguration$TreeConfigurationBuilder;
        dirt(dirtProvider: $BlockStateProvider): $TreeConfiguration$TreeConfigurationBuilder;
        build(): $TreeConfiguration;
        trunkProvider: $BlockStateProvider;
        foliageProvider: $BlockStateProvider;
        constructor(trunkProvider: $BlockStateProvider, trunkPlacer: $TrunkPlacer, foliageProvider: $BlockStateProvider, foliagePlacer: $FoliagePlacer, rootPlacer: ($RootPlacer) | undefined, minimumSize: $FeatureSize);
        constructor(trunkProvider: $BlockStateProvider, trunkPlacer: $TrunkPlacer, foliageProvider: $BlockStateProvider, foliagePlacer: $FoliagePlacer, minimumSize: $FeatureSize);
    }
    export class $NoneFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$NoneFeatureConfiguration>;
        static INSTANCE: $NoneFeatureConfiguration;
        constructor();
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $ReplaceSphereConfiguration implements $FeatureConfiguration {
        radius(): $IntProvider;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$ReplaceSphereConfiguration>;
        targetState: $BlockState;
        replaceState: $BlockState;
        constructor(targetState: $BlockState_, replaceState: $BlockState_, radius: $IntProvider_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $SpringConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        holeCount: number;
        static CODEC: $Codec<$SpringConfiguration>;
        rockCount: number;
        requiresBlockBelow: boolean;
        state: $FluidState;
        validBlocks: $HolderSet<$Block>;
        constructor(state: $FluidState, requiresBlockBelow: boolean, rockCount: number, holeCount: number, validBlocks: $HolderSet_<$Block>);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $EndGatewayConfiguration implements $FeatureConfiguration {
        static knownExit(exit: $BlockPos_, exact: boolean): $EndGatewayConfiguration;
        getExit(): ($BlockPos) | undefined;
        isExitExact(): boolean;
        static delayedExitSearch(): $EndGatewayConfiguration;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$EndGatewayConfiguration>;
        get exit(): ($BlockPos) | undefined;
        get exitExact(): boolean;
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $OreConfiguration implements $FeatureConfiguration, $OreConfigurationAccessor {
        static target(target: $RuleTest_, state: $BlockState_): $OreConfiguration$TargetBlockState;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        almostunified$setTargets(arg0: $List_<$OreConfiguration$TargetBlockState>): void;
        discardChanceOnAirExposure: number;
        static CODEC: $Codec<$OreConfiguration>;
        size: number;
        targetStates: $List<$OreConfiguration$TargetBlockState>;
        constructor(targetStates: $List_<$OreConfiguration$TargetBlockState>, size: number, discardChanceOnAirExposure: number);
        constructor(target: $RuleTest_, state: $BlockState_, size: number);
        constructor(targetStates: $List_<$OreConfiguration$TargetBlockState>, size: number);
        constructor(target: $RuleTest_, state: $BlockState_, size: number, discardChanceOnAirExposure: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $LayerConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$LayerConfiguration>;
        state: $BlockState;
        height: number;
        constructor(height: number, state: $BlockState_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $GeodeConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$GeodeConfiguration>;
        geodeLayerSettings: $GeodeLayerSettings;
        useAlternateLayer0Chance: number;
        pointOffset: $IntProvider;
        minGenOffset: number;
        noiseMultiplier: number;
        maxGenOffset: number;
        usePotentialPlacementsChance: number;
        geodeBlockSettings: $GeodeBlockSettings;
        geodeCrackSettings: $GeodeCrackSettings;
        invalidBlocksThreshold: number;
        placementsRequireLayer0Alternate: boolean;
        static CHANCE_RANGE: $Codec<number>;
        distributionPoints: $IntProvider;
        outerWallDistance: $IntProvider;
        constructor(geodeBlockSettings: $GeodeBlockSettings, geodeLayerSettings: $GeodeLayerSettings, geodeCrackSettings: $GeodeCrackSettings, usePotentialPlacementsChance: number, arg4: number, useAlternateLayer0Chance: boolean, arg6: $IntProvider_, placementsRequireLayer0Alternate: $IntProvider_, outerWallDistance: $IntProvider_, distributionPoints: number, pointOffset: number, minGenOffset: number, maxGenOffset: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $DeltaFeatureConfiguration implements $FeatureConfiguration {
        rimSize(): $IntProvider;
        rim(): $BlockState;
        size(): $IntProvider;
        contents(): $BlockState;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$DeltaFeatureConfiguration>;
        constructor(contents: $BlockState_, rim: $BlockState_, size: $IntProvider_, rimSize: $IntProvider_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $DiskConfiguration extends $Record implements $FeatureConfiguration {
        stateProvider(): $RuleBasedBlockStateProvider;
        target(): $BlockPredicate;
        radius(): $IntProvider;
        halfHeight(): number;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$DiskConfiguration>;
        constructor(arg0: $RuleBasedBlockStateProvider_, arg1: $BlockPredicate, arg2: $IntProvider_, arg3: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $DiskConfiguration}.
     */
    export type $DiskConfiguration_ = { halfHeight?: number, target?: $BlockPredicate, radius?: $IntProvider_, stateProvider?: $RuleBasedBlockStateProvider_,  } | [halfHeight?: number, target?: $BlockPredicate, radius?: $IntProvider_, stateProvider?: $RuleBasedBlockStateProvider_, ];
    export class $RandomBooleanFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$RandomBooleanFeatureConfiguration>;
        featureTrue: $Holder<$PlacedFeature>;
        featureFalse: $Holder<$PlacedFeature>;
        constructor(featureTrue: $Holder_<$PlacedFeature>, featureFalse: $Holder_<$PlacedFeature>);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $SimpleRandomFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        features: $HolderSet<$PlacedFeature>;
        static CODEC: $Codec<$SimpleRandomFeatureConfiguration>;
        constructor(features: $HolderSet_<$PlacedFeature>);
    }
    export class $BlockPileConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$BlockPileConfiguration>;
        stateProvider: $BlockStateProvider;
        constructor(stateProvider: $BlockStateProvider);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $MultifaceGrowthConfiguration implements $FeatureConfiguration {
        getShuffledDirectionsExcept(random: $RandomSource, direction: $Direction_): $List<$Direction>;
        getShuffledDirections(random: $RandomSource): $List<$Direction>;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        canPlaceOnWall: boolean;
        chanceOfSpreading: number;
        static CODEC: $Codec<$MultifaceGrowthConfiguration>;
        canPlaceOnCeiling: boolean;
        searchRange: number;
        canPlaceOnFloor: boolean;
        canBePlacedOn: $HolderSet<$Block>;
        placeBlock: $MultifaceBlock;
        constructor(placeBlock: $MultifaceBlock, searchRange: number, canPlaceOnFloor: boolean, canPlaceOnCeiling: boolean, canPlaceOnWall: boolean, chanceOfSpreading: number, canBePlacedOn: $HolderSet_<$Block>);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $ProbabilityFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$ProbabilityFeatureConfiguration>;
        probability: number;
        constructor(probability: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $SimpleBlockConfiguration extends $Record implements $FeatureConfiguration {
        toPlace(): $BlockStateProvider;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SimpleBlockConfiguration>;
        constructor(toPlace: $BlockStateProvider);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $SimpleBlockConfiguration}.
     */
    export type $SimpleBlockConfiguration_ = { toPlace?: $BlockStateProvider,  } | [toPlace?: $BlockStateProvider, ];
    export class $ColumnFeatureConfiguration implements $FeatureConfiguration {
        height(): $IntProvider;
        reach(): $IntProvider;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$ColumnFeatureConfiguration>;
        constructor(reach: $IntProvider_, height: $IntProvider_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $BlockColumnConfiguration extends $Record implements $FeatureConfiguration {
        allowedPlacement(): $BlockPredicate;
        prioritizeTip(): boolean;
        static layer(height: $IntProvider_, state: $BlockStateProvider): $BlockColumnConfiguration$Layer;
        layers(): $List<$BlockColumnConfiguration$Layer>;
        direction(): $Direction;
        static simple(height: $IntProvider_, state: $BlockStateProvider): $BlockColumnConfiguration;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$BlockColumnConfiguration>;
        constructor(arg0: $List_<$BlockColumnConfiguration$Layer_>, arg1: $Direction_, arg2: $BlockPredicate, arg3: boolean);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $BlockColumnConfiguration}.
     */
    export type $BlockColumnConfiguration_ = { layers?: $List_<$BlockColumnConfiguration$Layer_>, direction?: $Direction_, allowedPlacement?: $BlockPredicate, prioritizeTip?: boolean,  } | [layers?: $List_<$BlockColumnConfiguration$Layer_>, direction?: $Direction_, allowedPlacement?: $BlockPredicate, prioritizeTip?: boolean, ];
    export class $DripstoneClusterConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        chanceOfDripstoneColumnAtMaxDistanceFromCenter: number;
        heightDeviation: number;
        static CODEC: $Codec<$DripstoneClusterConfiguration>;
        density: $FloatProvider;
        dripstoneBlockLayerThickness: $IntProvider;
        maxStalagmiteStalactiteHeightDiff: number;
        floorToCeilingSearchRange: number;
        wetness: $FloatProvider;
        radius: $IntProvider;
        maxDistanceFromCenterAffectingHeightBias: number;
        maxDistanceFromEdgeAffectingChanceOfDripstoneColumn: number;
        height: $IntProvider;
        constructor(floorToCeilingSearchRange: number, height: $IntProvider_, radius: $IntProvider_, maxStalagmiteStalactiteHeightDiff: number, heightDeviation: number, dripstoneBlockLayerThickness: $IntProvider_, density: $FloatProvider, wetness: $FloatProvider, chanceOfDripstoneColumnAtMaxDistanceFromCenter: number, maxDistanceFromEdgeAffectingChanceOfDripstoneColumn: number, maxDistanceFromCenterAffectingHeightBias: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $BlockColumnConfiguration$Layer extends $Record {
        state(): $BlockStateProvider;
        height(): $IntProvider;
        static CODEC: $Codec<$BlockColumnConfiguration$Layer>;
        constructor(arg0: $IntProvider_, arg1: $BlockStateProvider);
    }
    /**
     * Values that may be interpreted as {@link $BlockColumnConfiguration$Layer}.
     */
    export type $BlockColumnConfiguration$Layer_ = { height?: $IntProvider_, state?: $BlockStateProvider,  } | [height?: $IntProvider_, state?: $BlockStateProvider, ];
    export class $SpikeConfiguration implements $FeatureConfiguration {
        getCrystalBeamTarget(): $BlockPos;
        isCrystalInvulnerable(): boolean;
        getSpikes(): $List<$SpikeFeature$EndSpike>;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$SpikeConfiguration>;
        constructor(crystalInvulnerable: boolean, spikes: $List_<$SpikeFeature$EndSpike>, crystalBeamTarget: $BlockPos_ | null);
        get crystalBeamTarget(): $BlockPos;
        get crystalInvulnerable(): boolean;
        get spikes(): $List<$SpikeFeature$EndSpike>;
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $PointedDripstoneConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$PointedDripstoneConfiguration>;
        chanceOfTallerDripstone: number;
        chanceOfSpreadRadius3: number;
        chanceOfSpreadRadius2: number;
        chanceOfDirectionalSpread: number;
        constructor(chanceOfTallerDripstone: number, chanceOfDirectionalSpread: number, chanceOfSpreadRadius2: number, chanceOfSpreadRadius3: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
}
