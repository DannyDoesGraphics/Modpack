import { $BlockPileConfiguration, $NoneFeatureConfiguration, $DeltaFeatureConfiguration, $RandomBooleanFeatureConfiguration, $EndGatewayConfiguration, $NetherForestVegetationConfig, $ColumnFeatureConfiguration, $UnderwaterMagmaConfiguration, $RandomFeatureConfiguration, $SpikeConfiguration, $MultifaceGrowthConfiguration, $ReplaceSphereConfiguration, $RootSystemConfiguration, $DiskConfiguration, $TwistingVinesConfig, $LayerConfiguration, $PointedDripstoneConfiguration, $SpringConfiguration, $SimpleRandomFeatureConfiguration, $VegetationPatchConfiguration, $HugeMushroomFeatureConfiguration, $ProbabilityFeatureConfiguration, $SculkPatchConfiguration, $FeatureConfiguration, $LargeDripstoneConfiguration, $GeodeConfiguration, $TreeConfiguration, $RandomPatchConfiguration, $CountConfiguration, $BlockColumnConfiguration, $SimpleBlockConfiguration, $BlockStateConfiguration, $DripstoneClusterConfiguration, $OreConfiguration, $ReplaceBlockConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $Stream } from "@package/java/util/stream";
import { $Codec, $Codec_ } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FossilFeatureConfiguration, $Feature, $ConfiguredFeature, $BonusChestFeature, $HugeFungusConfiguration, $LakeFeature$Configuration, $SeagrassFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $Record } from "@package/java/lang";

declare module "@package/rearth/oritech/init/world/features/uranium" {
    export class $UraniumPatchFeatureConfig extends $Record implements $FeatureConfiguration {
        crystalId(): $ResourceLocation;
        number(): number;
        blockId(): $ResourceLocation;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$UraniumPatchFeatureConfig>;
        constructor(number: number, blockId: $ResourceLocation_, crystalId: $ResourceLocation_);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $UraniumPatchFeatureConfig}.
     */
    export type $UraniumPatchFeatureConfig_ = { crystalId?: $ResourceLocation_, blockId?: $ResourceLocation_, number?: number,  } | [crystalId?: $ResourceLocation_, blockId?: $ResourceLocation_, number?: number, ];
    export class $UraniumPatchFeature extends $Feature<$UraniumPatchFeatureConfig> {
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
        constructor(arg0: $Codec_<$UraniumPatchFeatureConfig_>);
    }
}
