import { $StructureTemplatePool, $StructureTemplatePool_ } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Lifecycle } from "@package/com/mojang/serialization";
import { $MobSpawnSettings$Builder, $BiomeGenerationSettings$Builder } from "@package/net/minecraft/world/level/biome";
import { $NormalNoise$NoiseParameters, $NormalNoise$NoiseParameters_ } from "@package/net/minecraft/world/level/levelgen/synth";
import { $StructureProcessorList_, $StructureProcessorList } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $PoolAliasBinding } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $List } from "@package/java/util";
import { $ToFloatFunction, $CubicSpline } from "@package/net/minecraft/util";
import { $Holder$Reference, $Registry, $HolderGetter, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ConfiguredWorldCarver_, $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $StructureSet_, $Structure_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $SurfaceRules$ConditionSource, $SurfaceRules$RuleSource } from "@package/net/minecraft/world/level/levelgen";
import { $DimensionType_ } from "@package/net/minecraft/world/level/dimension";
export * as features from "@package/net/minecraft/data/worldgen/features";
export * as biome from "@package/net/minecraft/data/worldgen/biome";
export * as placement from "@package/net/minecraft/data/worldgen/placement";

declare module "@package/net/minecraft/data/worldgen" {
    export class $ProcessorLists {
        static bootstrap(context: $BootstrapContext<$StructureProcessorList_>): void;
        static STREET_SAVANNA: $ResourceKey<$StructureProcessorList>;
        static FOSSIL_ROT: $ResourceKey<$StructureProcessorList>;
        static FOSSIL_DIAMONDS: $ResourceKey<$StructureProcessorList>;
        static ZOMBIE_SNOWY: $ResourceKey<$StructureProcessorList>;
        static OUTPOST_ROT: $ResourceKey<$StructureProcessorList>;
        static FARM_PLAINS: $ResourceKey<$StructureProcessorList>;
        static HIGH_WALL: $ResourceKey<$StructureProcessorList>;
        static ANCIENT_CITY_GENERIC_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static FARM_SNOWY: $ResourceKey<$StructureProcessorList>;
        static BRIDGE: $ResourceKey<$StructureProcessorList>;
        static STREET_PLAINS: $ResourceKey<$StructureProcessorList>;
        static RAMPART_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static BOTTOM_RAMPART: $ResourceKey<$StructureProcessorList>;
        static TRAIL_RUINS_TOWER_TOP_ARCHAEOLOGY: $ResourceKey<$StructureProcessorList>;
        static STREET_SNOWY_OR_TAIGA: $ResourceKey<$StructureProcessorList>;
        static ANCIENT_CITY_START_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static ENTRANCE_REPLACEMENT: $ResourceKey<$StructureProcessorList>;
        static MOSSIFY_20_PERCENT: $ResourceKey<$StructureProcessorList>;
        static HOUSING: $ResourceKey<$StructureProcessorList>;
        static ZOMBIE_TAIGA: $ResourceKey<$StructureProcessorList>;
        static EMPTY: $ResourceKey<$StructureProcessorList>;
        static TRAIL_RUINS_ROADS_ARCHAEOLOGY: $ResourceKey<$StructureProcessorList>;
        static ZOMBIE_SAVANNA: $ResourceKey<$StructureProcessorList>;
        static FARM_SAVANNA: $ResourceKey<$StructureProcessorList>;
        static TREASURE_ROOMS: $ResourceKey<$StructureProcessorList>;
        static MOSSIFY_70_PERCENT: $ResourceKey<$StructureProcessorList>;
        static TRAIL_RUINS_HOUSES_ARCHAEOLOGY: $ResourceKey<$StructureProcessorList>;
        static ZOMBIE_DESERT: $ResourceKey<$StructureProcessorList>;
        static BASTION_GENERIC_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static ROOF: $ResourceKey<$StructureProcessorList>;
        static ZOMBIE_PLAINS: $ResourceKey<$StructureProcessorList>;
        static HIGH_RAMPART: $ResourceKey<$StructureProcessorList>;
        static SIDE_WALL_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static ANCIENT_CITY_WALLS_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static STABLE_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        static FARM_TAIGA: $ResourceKey<$StructureProcessorList>;
        static MOSSIFY_10_PERCENT: $ResourceKey<$StructureProcessorList>;
        static FARM_DESERT: $ResourceKey<$StructureProcessorList>;
        static FOSSIL_COAL: $ResourceKey<$StructureProcessorList>;
        static TRIAL_CHAMBERS_COPPER_BULB_DEGRADATION: $ResourceKey<$StructureProcessorList>;
        constructor();
    }
    export class $BastionBridgePools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
    export class $AncientCityStructurePools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
    export class $TerrainProvider {
        static overworldFactor<C, I extends $ToFloatFunction<C>>(continents: I, erosion: I, ridges: I, ridgesFolded: I, amplified: boolean): $CubicSpline<C, I>;
        static overworldJaggedness<C, I extends $ToFloatFunction<C>>(continents: I, erosion: I, ridges: I, ridgesFolded: I, amplified: boolean): $CubicSpline<C, I>;
        static buildErosionOffsetSpline<C, I extends $ToFloatFunction<C>>(erosion: I, ridgesFolded: I, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: boolean, transform: $ToFloatFunction<number>): $CubicSpline<C, I>;
        static overworldOffset<C, I extends $ToFloatFunction<C>>(continents: I, erosion: I, ridgesFolded: I, amplified: boolean): $CubicSpline<C, I>;
        constructor();
    }
    export class $SnowyVillagePools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $Pools {
        static createKey(name: string): $ResourceKey<$StructureTemplatePool>;
        static parseKey(name: string): $ResourceKey<$StructureTemplatePool>;
        static register(context: $BootstrapContext<$StructureTemplatePool_>, name: string, pool: $StructureTemplatePool_): void;
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        static EMPTY: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $BastionHousingUnitsPools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
    export class $PillagerOutpostPools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $StructureSets {
        static bootstrap(context: $BootstrapContext<$StructureSet_>): void;
    }
    export interface $StructureSets {
    }
    export class $TrialChambersStructurePools {
        static spawner(name: string): string;
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        static HALLWAY_FALLBACK: $ResourceKey<$StructureTemplatePool>;
        static START: $ResourceKey<$StructureTemplatePool>;
        static ALIAS_BINDINGS: $List<$PoolAliasBinding>;
        static CHAMBER_CAP_FALLBACK: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $BootstrapContext<T> {
    }
    export interface $BootstrapContext<T> {
        registryLookup<S>(arg0: $ResourceKey_<$Registry<S>>): ($HolderLookup$RegistryLookup<S>) | undefined;
        lookup<S>(registryKey: $ResourceKey_<$Registry<S>>): $HolderGetter<S>;
        register(key: $ResourceKey_<T>, value: T): $Holder$Reference<T>;
        register(key: $ResourceKey_<T>, value: T, registryLifecycle: $Lifecycle): $Holder$Reference<T>;
    }
    export class $SavannaVillagePools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $TaigaVillagePools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $SurfaceRuleData {
        static surfaceNoiseAbove(value: number): $SurfaceRules$ConditionSource;
        static overworld(): $SurfaceRules$RuleSource;
        static nether(): $SurfaceRules$RuleSource;
        static overworldLike(aboveGround: boolean, bedrockRoof: boolean, bedrockFloor: boolean): $SurfaceRules$RuleSource;
        static end(): $SurfaceRules$RuleSource;
        static air(): $SurfaceRules$RuleSource;
        constructor();
    }
    export class $BastionPieces {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $BastionHoglinStablePools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
    export class $BastionTreasureRoomPools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
    export class $VillagePools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
    export class $PlainVillagePools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $Carvers {
        static bootstrap(context: $BootstrapContext<$ConfiguredWorldCarver_<never>>): void;
        static CAVE: $ResourceKey<$ConfiguredWorldCarver<never>>;
        static CANYON: $ResourceKey<$ConfiguredWorldCarver<never>>;
        static CAVE_EXTRA_UNDERGROUND: $ResourceKey<$ConfiguredWorldCarver<never>>;
        static NETHER_CAVE: $ResourceKey<$ConfiguredWorldCarver<never>>;
        constructor();
    }
    export class $AncientCityStructurePieces {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $DesertVillagePools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $Structures {
        static bootstrap(context: $BootstrapContext<$Structure_>): void;
        constructor();
    }
    export class $DimensionTypes {
        static bootstrap(context: $BootstrapContext<$DimensionType_>): void;
        constructor();
    }
    export class $NoiseData {
        static bootstrap(context: $BootstrapContext<$NormalNoise$NoiseParameters_>): void;
        /**
         * @deprecated
         */
        static DEFAULT_SHIFT: $NormalNoise$NoiseParameters;
        constructor();
    }
    export class $BiomeDefaultFeatures {
        static addDefaultOres(builder: $BiomeGenerationSettings$Builder): void;
        static addDefaultOres(builder: $BiomeGenerationSettings$Builder, largeOres: boolean): void;
        static addDefaultSoftDisks(builder: $BiomeGenerationSettings$Builder): void;
        static addDefaultCrystalFormations(builder: $BiomeGenerationSettings$Builder): void;
        static addDefaultMonsterRoom(builder: $BiomeGenerationSettings$Builder): void;
        static addDefaultUndergroundVariety(builder: $BiomeGenerationSettings$Builder): void;
        static addDefaultSprings(builder: $BiomeGenerationSettings$Builder): void;
        static addSurfaceFreezing(builder: $BiomeGenerationSettings$Builder): void;
        static addSavannaExtraGrass(builder: $BiomeGenerationSettings$Builder): void;
        static addDefaultMushrooms(builder: $BiomeGenerationSettings$Builder): void;
        static plainsSpawns(builder: $MobSpawnSettings$Builder): void;
        static addSavannaTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addDefaultGrass(builder: $BiomeGenerationSettings$Builder): void;
        static addWarmFlowers(builder: $BiomeGenerationSettings$Builder): void;
        static addDefaultExtraVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addForestFlowers(builder: $BiomeGenerationSettings$Builder): void;
        static addForestGrass(builder: $BiomeGenerationSettings$Builder): void;
        static farmAnimals(builder: $MobSpawnSettings$Builder): void;
        static commonSpawns(builder: $MobSpawnSettings$Builder): void;
        static commonSpawns(builder: $MobSpawnSettings$Builder, skeletonWeight: number): void;
        static addSavannaGrass(builder: $BiomeGenerationSettings$Builder): void;
        static addSwampClayDisk(builder: $BiomeGenerationSettings$Builder): void;
        static addJungleGrass(builder: $BiomeGenerationSettings$Builder): void;
        static addSwampExtraVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addMossyStoneBlock(builder: $BiomeGenerationSettings$Builder): void;
        static addFerns(builder: $BiomeGenerationSettings$Builder): void;
        static addDefaultFlowers(builder: $BiomeGenerationSettings$Builder): void;
        static addGiantTaigaVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addRareBerryBushes(builder: $BiomeGenerationSettings$Builder): void;
        static monsters(builder: $MobSpawnSettings$Builder, zombieWeight: number, zombieVillagerWeight: number, skeletonWeight: number, isUnderwater: boolean): void;
        static addCherryGroveVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static baseJungleSpawns(builder: $MobSpawnSettings$Builder): void;
        static addLushCavesVegetationFeatures(builder: $BiomeGenerationSettings$Builder): void;
        static warmOceanSpawns(builder: $MobSpawnSettings$Builder, squidWeight: number, squidMinCount: number): void;
        static addFossilDecoration(builder: $BiomeGenerationSettings$Builder): void;
        static addDesertVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addDesertExtraVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addDesertExtraDecoration(builder: $BiomeGenerationSettings$Builder): void;
        static desertSpawns(builder: $MobSpawnSettings$Builder): void;
        static addLightBambooVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addSparseJungleTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addSparseJungleMelons(builder: $BiomeGenerationSettings$Builder): void;
        static addTaigaGrass(builder: $BiomeGenerationSettings$Builder): void;
        static addPlainGrass(builder: $BiomeGenerationSettings$Builder): void;
        static addDripstone(builder: $BiomeGenerationSettings$Builder): void;
        static addDefaultCarversAndLakes(builder: $BiomeGenerationSettings$Builder): void;
        static addExtraGold(builder: $BiomeGenerationSettings$Builder): void;
        static addExtraEmeralds(builder: $BiomeGenerationSettings$Builder): void;
        static addBadlandGrass(builder: $BiomeGenerationSettings$Builder): void;
        static addBadlandExtraVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static endSpawns(builder: $MobSpawnSettings$Builder): void;
        static addNetherDefaultOres(builder: $BiomeGenerationSettings$Builder): void;
        static addAncientDebris(builder: $BiomeGenerationSettings$Builder): void;
        static addColdOceanExtraVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addSculk(builder: $BiomeGenerationSettings$Builder): void;
        static addInfestedStone(builder: $BiomeGenerationSettings$Builder): void;
        static addMangroveSwampDisks(builder: $BiomeGenerationSettings$Builder): void;
        static addCommonBerryBushes(builder: $BiomeGenerationSettings$Builder): void;
        static addBambooVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addTaigaTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addGroveTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addWaterTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addBirchTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addOtherBirchTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addTallBirchTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addShatteredSavannaTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addLushCavesSpecialOres(builder: $BiomeGenerationSettings$Builder): void;
        static addMountainTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addMountainForestTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addJungleTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addBadlandsTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addSnowyTrees(builder: $BiomeGenerationSettings$Builder): void;
        static addShatteredSavannaGrass(builder: $BiomeGenerationSettings$Builder): void;
        static addSwampVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addMangroveSwampVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addMushroomFieldVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addPlainVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addMeadowVegetation(builder: $BiomeGenerationSettings$Builder): void;
        static addJungleMelons(builder: $BiomeGenerationSettings$Builder): void;
        static addJungleVines(builder: $BiomeGenerationSettings$Builder): void;
        static addDefaultSeagrass(builder: $BiomeGenerationSettings$Builder): void;
        static addLukeWarmKelp(builder: $BiomeGenerationSettings$Builder): void;
        static addFrozenSprings(builder: $BiomeGenerationSettings$Builder): void;
        static addIcebergs(builder: $BiomeGenerationSettings$Builder): void;
        static addBlueIce(builder: $BiomeGenerationSettings$Builder): void;
        static caveSpawns(builder: $MobSpawnSettings$Builder): void;
        static oceanSpawns(builder: $MobSpawnSettings$Builder, squidWeight: number, squidMaxCount: number, codWeight: number): void;
        static snowySpawns(builder: $MobSpawnSettings$Builder): void;
        static dripstoneCavesSpawns(builder: $MobSpawnSettings$Builder): void;
        static mooshroomSpawns(builder: $MobSpawnSettings$Builder): void;
        constructor();
    }
    export class $TrailRuinsStructurePools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        static START: $ResourceKey<$StructureTemplatePool>;
        constructor();
    }
    export class $BastionSharedPools {
        static bootstrap(context: $BootstrapContext<$StructureTemplatePool_>): void;
        constructor();
    }
}
