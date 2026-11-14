import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $BlockPileConfiguration, $NoneFeatureConfiguration, $DeltaFeatureConfiguration, $RandomBooleanFeatureConfiguration, $EndGatewayConfiguration, $NetherForestVegetationConfig, $ColumnFeatureConfiguration, $UnderwaterMagmaConfiguration, $OreConfiguration$TargetBlockState, $RandomFeatureConfiguration, $SpikeConfiguration, $MultifaceGrowthConfiguration, $ReplaceSphereConfiguration, $RootSystemConfiguration, $DiskConfiguration, $TwistingVinesConfig, $LayerConfiguration, $PointedDripstoneConfiguration, $SimpleRandomFeatureConfiguration, $SpringConfiguration, $VegetationPatchConfiguration, $HugeMushroomFeatureConfiguration, $ProbabilityFeatureConfiguration, $SculkPatchConfiguration, $FeatureConfiguration, $LargeDripstoneConfiguration, $GeodeConfiguration, $TreeConfiguration, $RandomPatchConfiguration, $CountConfiguration, $BlockColumnConfiguration, $SimpleBlockConfiguration, $BlockStateConfiguration, $DripstoneClusterConfiguration, $OreConfiguration, $ReplaceBlockConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $List, $List_ } from "@package/java/util";
import { $PlacedFeature_, $PlacedFeature, $PlacementModifierType, $PlacementFilter } from "@package/net/minecraft/world/level/levelgen/placement";
import { $NonNullSupplier_, $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $BlockPos, $BlockPos$MutableBlockPos } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $FossilFeatureConfiguration, $Feature, $ConfiguredFeature, $BonusChestFeature, $HugeFungusConfiguration, $LakeFeature$Configuration, $ConfiguredFeature_, $SeagrassFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Record, $Comparable } from "@package/java/lang";
import { $BiomeModifier_, $BiomeModifier } from "@package/net/neoforged/neoforge/common/world";
import { $Couple } from "@package/net/createmod/catnip/data";

declare module "@package/com/simibubi/create/infrastructure/worldgen" {
    export class $LayeredOreConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        discardChanceOnAirExposure: number;
        static CODEC: $Codec<$LayeredOreConfiguration>;
        layerPatterns: $List<$LayerPattern>;
        size: number;
        constructor(arg0: $List_<$LayerPattern>, arg1: number, arg2: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $LayeredOreFeature$ResolvedLayerEntry extends $Record implements $Comparable<$LayeredOreFeature$ResolvedLayerEntry> {
    }
    /**
     * Values that may be interpreted as {@link $LayeredOreFeature$ResolvedLayerEntry}.
     */
    export type $LayeredOreFeature$ResolvedLayerEntry_ = { rampStartValue?: number, radialThresholdMultiplier?: number, layer?: $LayerPattern$Layer,  } | [rampStartValue?: number, radialThresholdMultiplier?: number, layer?: $LayerPattern$Layer, ];
    export class $AllFeatures {
        static register(arg0: $IEventBus): void;
        static LAYERED_ORE: $DeferredHolder<$Feature<never>, $LayeredOreFeature>;
        constructor();
    }
    export class $LayeredOreFeature extends $Feature<$LayeredOreConfiguration> {
        canPlaceOre(arg0: $BlockState_, arg1: $Function_<$BlockPos, $BlockState>, arg2: $RandomSource, arg3: $LayeredOreConfiguration, arg4: $OreConfiguration$TargetBlockState, arg5: $BlockPos$MutableBlockPos): boolean;
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor();
    }
    export class $LayerPattern {
        rollNext(arg0: $LayerPattern$Layer, arg1: $RandomSource): $LayerPattern$Layer;
        static builder(): $LayerPattern$Builder;
        static CODEC: $Codec<$LayerPattern>;
        layers: $List<$LayerPattern$Layer>;
        constructor(arg0: $List_<$LayerPattern$Layer>);
    }
    export class $LayerPattern$Layer {
        rollBlock(arg0: $RandomSource): $List<$OreConfiguration$TargetBlockState>;
        static CODEC: $Codec<$LayerPattern$Layer>;
        weight: number;
        minSize: number;
        maxSize: number;
        targets: $List<$List<$OreConfiguration$TargetBlockState>>;
        constructor(arg0: $List_<$List_<$OreConfiguration$TargetBlockState>>, arg1: number, arg2: number, arg3: number);
    }
    export class $AllPlacementModifiers {
        static register(arg0: $IEventBus): void;
        static CONFIG_FILTER: $DeferredHolder<$PlacementModifierType<never>, $PlacementModifierType<$ConfigPlacementFilter>>;
        constructor();
    }
    export class $LayeredOreFeature$TemporaryLayerEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $LayeredOreFeature$TemporaryLayerEntry}.
     */
    export type $LayeredOreFeature$TemporaryLayerEntry_ = { layer?: $LayerPattern$Layer, size?: number,  } | [layer?: $LayerPattern$Layer, size?: number, ];
    export class $AllLayerPatterns {
        static CINNABAR: $NonNullSupplier<$LayerPattern>;
        static SCORCHIA_NETHER: $NonNullSupplier<$LayerPattern>;
        static OCHRESTONE: $NonNullSupplier<$LayerPattern>;
        static MALACHITE: $NonNullSupplier<$LayerPattern>;
        static MAGNETITE: $NonNullSupplier<$LayerPattern>;
        static SCORIA: $NonNullSupplier<$LayerPattern>;
        static SCORIA_NETHER: $NonNullSupplier<$LayerPattern>;
        static LIMESTONE: $NonNullSupplier<$LayerPattern>;
        constructor();
    }
    export class $ConfigPlacementFilter extends $PlacementFilter {
        static CODEC: $MapCodec<$ConfigPlacementFilter>;
        static INSTANCE: $ConfigPlacementFilter;
        constructor();
    }
    export class $AllPlacedFeatures {
        static bootstrap(arg0: $BootstrapContext<$PlacedFeature_>): void;
        static ZINC_ORE: $ResourceKey<$PlacedFeature>;
        static STRIATED_ORES_OVERWORLD: $ResourceKey<$PlacedFeature>;
        static STRIATED_ORES_NETHER: $ResourceKey<$PlacedFeature>;
        constructor();
    }
    export class $AllBiomeModifiers {
        static bootstrap(arg0: $BootstrapContext<$BiomeModifier_>): void;
        static ZINC_ORE: $ResourceKey<$BiomeModifier>;
        static STRIATED_ORES_OVERWORLD: $ResourceKey<$BiomeModifier>;
        static STRIATED_ORES_NETHER: $ResourceKey<$BiomeModifier>;
        constructor();
    }
    export class $LayerPattern$Layer$Builder {
        passiveBlock(): $LayerPattern$Layer$Builder;
        blocks(arg0: $Block_, arg1: $Block_): $LayerPattern$Layer$Builder;
        blocks(arg0: $Couple<$NonNullSupplier_<$Block>>): $LayerPattern$Layer$Builder;
        size(arg0: number, arg1: number): $LayerPattern$Layer$Builder;
        block(arg0: $Block_): $LayerPattern$Layer$Builder;
        block(arg0: $NonNullSupplier_<$Block>): $LayerPattern$Layer$Builder;
        build(): $LayerPattern$Layer;
        weight(arg0: number): $LayerPattern$Layer$Builder;
        constructor();
    }
    export class $LayerPattern$Builder {
        inNether(): $LayerPattern$Builder;
        layer(arg0: $Consumer_<$LayerPattern$Layer$Builder>): $LayerPattern$Builder;
        build(): $LayerPattern;
        constructor();
    }
    export class $AllConfiguredFeatures {
        static bootstrap(arg0: $BootstrapContext<$ConfiguredFeature_<never, never>>): void;
        static ZINC_ORE: $ResourceKey<$ConfiguredFeature<never, never>>;
        static STRIATED_ORES_OVERWORLD: $ResourceKey<$ConfiguredFeature<never, never>>;
        static STRIATED_ORES_NETHER: $ResourceKey<$ConfiguredFeature<never, never>>;
        constructor();
    }
}
