import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Either, $Pair } from "@package/com/mojang/datafixers/util";
import { $PerlinSimplexNoise } from "@package/net/minecraft/world/level/levelgen/synth";
import { $BiomeAccessor, $BiomeSourceInvoker, $BiomeGenerationSettingsAccessor, $MultiNoiseBiomeSourceAccessor, $MobSpawnSettingsAccessor } from "@package/dev/worldgen/lithostitched/mixin/common";
import { $EntityType_, $MobCategory_, $EntityType, $MobCategory } from "@package/net/minecraft/world/entity";
import { $ParameterListAccessor } from "@package/dev/worldgen/lithostitched/mixin/common/mnbs";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $Map, $Set, $List, $Map_, $List_, $Optional } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $Region, $RegionType_ } from "@package/terrablender/api";
import { $Consumer_, $Predicate_, $ToIntFunction, $Function_, $ToIntFunction_ } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $SoundEvent, $Music } from "@package/net/minecraft/sounds";
import { $ExtendedBiome } from "@package/net/irisshaders/iris/mixinterface";
import { $BlockPos, $HolderSet_, $BlockPos_, $RegistryAccess, $Registry, $HolderGetter, $Holder_, $HolderSet, $Holder } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $Weight, $WeightedRandomList, $WeightedEntry$IntrusiveBase } from "@package/net/minecraft/util/random";
import { $ConfiguredWorldCarver_, $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $BiomeManagerAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $Enum, $Iterable, $Record, $Object } from "@package/java/lang";
import { $IMultiNoiseUtilSearchTreeTreeNode, $IMultiNoiseUtilSearchTreeTreeBranchNode, $IMultiNoiseBiomeSource, $IMultiNoiseUtilEntries, $IMultiNoiseUtilSearchTree, $IMultiNoiseUtilSearchTreeTreeLeafNode } from "@package/com/ishland/c2me/base/mixin/access";
import { $GenerationStep$Carving, $DensityFunction, $GenerationStep$Carving_, $DensityFunction$FunctionContext, $GenerationStep$Decoration_, $DensityFunction_ } from "@package/net/minecraft/world/level/levelgen";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $LevelReader } from "@package/net/minecraft/world/level";
import { $MobSpawnSettingsBuilderNeoForgeAccessor, $BiomeSpecialEffectsBuilderNeoForgeAccessor } from "@package/fuzs/puzzleslib/neoforge/mixin/accessor";
import { $MNBSPLDuck, $MNBSDuck } from "@package/dev/worldgen/lithostitched/duck/mnbs";
import { $MultiNoiseBiomeSourceAccess } from "@package/terrablender/mixin";
import { $IExtendedMultiNoiseBiomeSource, $IExtendedBiomeSource, $IExtendedParameterList, $IExtendedTheEndBiomeSource } from "@package/terrablender/worldgen";
import { $PlacedFeature, $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Stream } from "@package/java/util/stream";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModifiableBiomeInfo } from "@package/net/neoforged/neoforge/common/world";
import { $MultiNoiseBiomeSourceExtension } from "@package/net/werdei/biome_replacer/replacer";

declare module "@package/net/minecraft/world/level/biome" {
    export class $AmbientMoodSettings {
        getTickDelay(): number;
        getSoundEvent(): $Holder<$SoundEvent>;
        getBlockSearchExtent(): number;
        getSoundPositionOffset(): number;
        static CODEC: $Codec<$AmbientMoodSettings>;
        static LEGACY_CAVE_SETTINGS: $AmbientMoodSettings;
        constructor(soundEvent: $Holder_<$SoundEvent>, tickDelay: number, blockSearchExtent: number, soundPositionOffset: number);
        get tickDelay(): number;
        get soundEvent(): $Holder<$SoundEvent>;
        get blockSearchExtent(): number;
        get soundPositionOffset(): number;
    }
    export interface $Biome extends RegistryMarked<RegistryTypes.WorldgenBiomeTag, RegistryTypes.WorldgenBiome> {}
    export class $Biome$Precipitation extends $Enum<$Biome$Precipitation> implements $StringRepresentable {
        static values(): $Biome$Precipitation[];
        static valueOf(arg0: string): $Biome$Precipitation;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static RAIN: $Biome$Precipitation;
        static CODEC: $Codec<$Biome$Precipitation>;
        static SNOW: $Biome$Precipitation;
        static NONE: $Biome$Precipitation;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Biome$Precipitation}.
     */
    export type $Biome$Precipitation_ = "none" | "rain" | "snow";
    export class $MobSpawnSettings implements $MobSpawnSettingsAccessor {
        getMobs(category: $MobCategory_): $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        getSpawnerTypes(): $Set<$MobCategory>;
        getMobSpawnCost(entityType: $EntityType_<never>): $MobSpawnSettings$MobSpawnCost;
        getEntityTypes(): $Set<$EntityType<never>>;
        getCreatureProbability(): number;
        getSpawners(): $Map<$MobCategory, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>;
        setSpawners(map: $Map_<$MobCategory_, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>): void;
        static CODEC: $MapCodec<$MobSpawnSettings>;
        static EMPTY: $MobSpawnSettings;
        static EMPTY_MOB_LIST: $WeightedRandomList<$MobSpawnSettings$SpawnerData>;
        get spawnerTypes(): $Set<$MobCategory>;
        get entityTypes(): $Set<$EntityType<never>>;
        get creatureProbability(): number;
    }
    export class $BiomeResolver {
    }
    export interface $BiomeResolver {
        getNoiseBiome(x: number, y: number, z: number, sampler: $Climate$Sampler_): $Holder<$Biome>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeResolver}.
     */
    export type $BiomeResolver_ = ((arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler) => $Holder_<$Biome>);
    export class $Climate$RTree$Node<T> implements $IMultiNoiseUtilSearchTreeTreeNode {
        search(searchedValues: number[], leaf: $Climate$RTree$Leaf<T> | null, metric: $Climate$DistanceMetric_<T>): $Climate$RTree$Leaf<T>;
        distance(values: number[]): number;
        getParameters(): $Climate$Parameter[];
        constructor(parameters: $List_<$Climate$Parameter_>);
        get parameters(): $Climate$Parameter[];
    }
    export class $BiomeManager$NoiseBiomeSource {
    }
    export interface $BiomeManager$NoiseBiomeSource {
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeManager$NoiseBiomeSource}.
     */
    export type $BiomeManager$NoiseBiomeSource_ = ((arg0: number, arg1: number, arg2: number) => $Holder_<$Biome>);
    export class $MultiNoiseBiomeSourceParameterList implements $MNBSPLDuck {
        lithostitched$getMigrationBiome(): $Optional<any>;
        static knownPresets(): $Map<$MultiNoiseBiomeSourceParameterList$Preset, $Climate$ParameterList<$ResourceKey<$Biome>>>;
        lithostitched$setParameters(parameters: $Climate$ParameterList<any>): void;
        lithostitched$setMigrationBiome(biome: $Optional<any>): void;
        parameters(): $Climate$ParameterList<$Holder<$Biome>>;
        static CODEC: $Codec<$Holder<$MultiNoiseBiomeSourceParameterList>>;
        static DIRECT_CODEC: $Codec<$MultiNoiseBiomeSourceParameterList>;
        constructor(preset: $MultiNoiseBiomeSourceParameterList$Preset_, biomes: $HolderGetter<$Biome_>);
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList}.
     */
    export type $MultiNoiseBiomeSourceParameterList_ = RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterList;
    export class $BiomeSources {
        static bootstrap(registry: $Registry<$MapCodec_<$BiomeSource>>): $MapCodec<$BiomeSource>;
        constructor();
    }
    export class $FeatureSorter$1FeatureData extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FeatureSorter$1FeatureData}.
     */
    export type $FeatureSorter$1FeatureData_ = { step?: number, feature?: $PlacedFeature_, featureIndex?: number,  } | [step?: number, feature?: $PlacedFeature_, featureIndex?: number, ];
    export class $Climate$SpawnFinder {
    }
    export class $Biome$TemperatureModifier extends $Enum<$Biome$TemperatureModifier> implements $StringRepresentable {
        modifyTemperature(pos: $BlockPos_, temperature: number): number;
        getName(): string;
        static values(): $Biome$TemperatureModifier[];
        static valueOf(arg0: string): $Biome$TemperatureModifier;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$Biome$TemperatureModifier>;
        static NONE: $Biome$TemperatureModifier;
        static FROZEN: $Biome$TemperatureModifier;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Biome$TemperatureModifier}.
     */
    export type $Biome$TemperatureModifier_ = "none" | "frozen";
    export class $BiomeSpecialEffects$Builder implements $BiomeSpecialEffectsBuilderNeoForgeAccessor {
        fogColor(fogColor: number): $BiomeSpecialEffects$Builder;
        waterColor(fogColor: number): $BiomeSpecialEffects$Builder;
        waterFogColor(fogColor: number): $BiomeSpecialEffects$Builder;
        skyColor(fogColor: number): $BiomeSpecialEffects$Builder;
        foliageColorOverride(fogColor: number): $BiomeSpecialEffects$Builder;
        grassColorOverride(fogColor: number): $BiomeSpecialEffects$Builder;
        grassColorModifier(grassColorModifier: $BiomeSpecialEffects$GrassColorModifier_): $BiomeSpecialEffects$Builder;
        backgroundMusic(backgroundMusic: $Music | null): $BiomeSpecialEffects$Builder;
        ambientParticle(ambientParticle: $AmbientParticleSettings): $BiomeSpecialEffects$Builder;
        ambientLoopSound(ambientLoopSoundEvent: $Holder_<$SoundEvent>): $BiomeSpecialEffects$Builder;
        ambientMoodSound(ambientMoodSettings: $AmbientMoodSettings): $BiomeSpecialEffects$Builder;
        ambientAdditionsSound(ambientAdditionsSettings: $AmbientAdditionsSettings): $BiomeSpecialEffects$Builder;
        build(): $BiomeSpecialEffects;
        puzzleslib$setGrassColorOverride(arg0: (number) | undefined): void;
        puzzleslib$setAmbientParticle(arg0: ($AmbientParticleSettings) | undefined): void;
        puzzleslib$setAmbientLoopSoundEvent(arg0: ($Holder_<$SoundEvent>) | undefined): void;
        puzzleslib$setAmbientMoodSettings(arg0: ($AmbientMoodSettings) | undefined): void;
        puzzleslib$setAmbientAdditionsSettings(arg0: ($AmbientAdditionsSettings) | undefined): void;
        puzzleslib$setBackgroundMusic(arg0: ($Music) | undefined): void;
        puzzleslib$setFoliageColorOverride(arg0: (number) | undefined): void;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
        constructor();
    }
    export class $Climate$RTree$Leaf<T> extends $Climate$RTree$Node<T> implements $IMultiNoiseUtilSearchTreeTreeLeafNode<any> {
        getValue(): $Object;
        constructor(point: $Climate$ParameterPoint_, value: $Object);
        get value(): $Object;
    }
    export class $Climate$RTree$SubTree<T> extends $Climate$RTree$Node<T> implements $IMultiNoiseUtilSearchTreeTreeBranchNode<any> {
        getSubTree(): $Climate$RTree$Node<$Object>[];
        constructor(parameters: $List_<$Climate$RTree$Node<$Object>>);
        constructor(parameters: $List_<$Climate$Parameter_>, children: $List_<$Climate$RTree$Node<$Object>>);
        get subTree(): $Climate$RTree$Node<$Object>[];
    }
    export class $Climate$TargetPoint extends $Record {
        temperature(): number;
        humidity(): number;
        continentalness(): number;
        erosion(): number;
        weirdness(): number;
        depth(): number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $Climate$TargetPoint}.
     */
    export type $Climate$TargetPoint_ = { humidity?: number, depth?: number, continentalness?: number, weirdness?: number, erosion?: number, temperature?: number,  } | [humidity?: number, depth?: number, continentalness?: number, weirdness?: number, erosion?: number, temperature?: number, ];
    export class $Biome$BiomeBuilder {
        temperature(downfall: number): $Biome$BiomeBuilder;
        downfall(downfall: number): $Biome$BiomeBuilder;
        generationSettings(generationSettings: $BiomeGenerationSettings): $Biome$BiomeBuilder;
        mobSpawnSettings(mobSpawnSettings: $MobSpawnSettings): $Biome$BiomeBuilder;
        hasPrecipitation(hasPercipitation: boolean): $Biome$BiomeBuilder;
        temperatureAdjustment(temperatureSettings: $Biome$TemperatureModifier_): $Biome$BiomeBuilder;
        build(): $Biome;
        specialEffects(effects: $BiomeSpecialEffects): $Biome$BiomeBuilder;
        constructor();
    }
    export class $BiomeSpecialEffects$GrassColorModifier extends $Enum<$BiomeSpecialEffects$GrassColorModifier> implements $StringRepresentable, $IExtensibleEnum {
        modifyColor(x: number, arg1: number, z: number): number;
        getName(): string;
        static values(): $BiomeSpecialEffects$GrassColorModifier[];
        static valueOf(arg0: string): $BiomeSpecialEffects$GrassColorModifier;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$BiomeSpecialEffects$GrassColorModifier>;
        static SWAMP: $BiomeSpecialEffects$GrassColorModifier;
        static NONE: $BiomeSpecialEffects$GrassColorModifier;
        static DARK_FOREST: $BiomeSpecialEffects$GrassColorModifier;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BiomeSpecialEffects$GrassColorModifier}.
     */
    export type $BiomeSpecialEffects$GrassColorModifier_ = "none" | "dark_forest" | "swamp";
    export class $BiomeGenerationSettings$Builder extends $BiomeGenerationSettings$PlainBuilder {
        addCarver(carving: $GenerationStep$Carving_, carver: $ResourceKey_<$ConfiguredWorldCarver<never>>): $BiomeGenerationSettings$Builder;
        addFeature(decoration: $GenerationStep$Decoration_, feature: $ResourceKey_<$PlacedFeature>): $BiomeGenerationSettings$Builder;
        features: $List<$List<$Holder<$PlacedFeature>>>;
        constructor(placedFeatures: $HolderGetter<$PlacedFeature_>, worldCarvers: $HolderGetter<$ConfiguredWorldCarver_<never>>);
    }
    export class $FeatureSorter {
        static buildFeaturesPerStep<T>(featureSetSources: $List_<T>, toFeatueSetFunction: $Function_<T, $List<$HolderSet<$PlacedFeature>>>, notRecursiveFlag: boolean): $List<$FeatureSorter$StepFeatureData>;
        constructor();
    }
    export class $MobSpawnSettings$Builder implements $MobSpawnSettingsBuilderNeoForgeAccessor {
        creatureGenerationProbability(probability: number): $MobSpawnSettings$Builder;
        addSpawn(classification: $MobCategory_, spawner: $MobSpawnSettings$SpawnerData): $MobSpawnSettings$Builder;
        addMobCharge(entityType: $EntityType_<never>, charge: number, arg2: number): $MobSpawnSettings$Builder;
        build(): $MobSpawnSettings;
        puzzleslib$getMobSpawnCosts(): $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        mobSpawnCosts: $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
        spawners: $Map<$MobCategory, $List<$MobSpawnSettings$SpawnerData>>;
        constructor();
    }
    export class $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
    }
    export interface $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider {
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider}.
     */
    export type $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_ = (() => void);
    export class $BiomeGenerationSettings implements $BiomeGenerationSettingsAccessor {
        getFlowerFeatures(): $List<$ConfiguredFeature<never, never>>;
        getCarvers(step: $GenerationStep$Carving_): $Iterable<$Holder<$ConfiguredWorldCarver<never>>>;
        getCarvingStages(): $Set<$GenerationStep$Carving>;
        static createGenerationSettings$lithostitched_$md$5c91d2$0(arg0: $Map_<any, any>, arg1: $List_<any>): $BiomeGenerationSettings;
        features(): $List<$HolderSet<$PlacedFeature>>;
        hasFeature(feature: $PlacedFeature_): boolean;
        getCarvers(): $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        static CODEC: $MapCodec<$BiomeGenerationSettings>;
        static EMPTY: $BiomeGenerationSettings;
        constructor(carvers: $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>, features: $List_<$HolderSet_<$PlacedFeature>>);
        get flowerFeatures(): $List<$ConfiguredFeature<never, never>>;
        get carvingStages(): $Set<$GenerationStep$Carving>;
    }
    export class $BiomeGenerationSettings$PlainBuilder {
        addCarver(carving: $GenerationStep$Carving_, carver: $Holder_<$ConfiguredWorldCarver<never>>): $BiomeGenerationSettings$PlainBuilder;
        addFeature(decoration: $GenerationStep$Decoration_, feature: $Holder_<$PlacedFeature>): $BiomeGenerationSettings$PlainBuilder;
        addFeature(step: number, feature: $Holder_<$PlacedFeature>): $BiomeGenerationSettings$PlainBuilder;
        build(): $BiomeGenerationSettings;
        features: $List<$List<$Holder<$PlacedFeature>>>;
        constructor();
    }
    export class $MobSpawnSettings$SpawnerData extends $WeightedEntry$IntrusiveBase {
        static CODEC: $Codec<$MobSpawnSettings$SpawnerData>;
        minCount: number;
        type: $EntityType<never>;
        maxCount: number;
        constructor(type: $EntityType_<never>, weight: number, minCount: number, maxCount: number);
        constructor(type: $EntityType_<never>, weight: $Weight, minCount: number, maxCount: number);
    }
    /**
     * @param energyBudget Determines the total amount of entities that can spawn in a location based on their current cost (e.g. a cost of 0.1 and a max total of 1 means at most ten entities can spawn in the given location).
     * @param charge Determines the cost per entity towards the maximum spawn cap.
     */
    export class $MobSpawnSettings$MobSpawnCost extends $Record {
        charge(): number;
        energyBudget(): number;
        static CODEC: $Codec<$MobSpawnSettings$MobSpawnCost>;
        constructor(energyBudget: number, charge: number);
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnSettings$MobSpawnCost}.
     */
    export type $MobSpawnSettings$MobSpawnCost_ = { charge?: number, energyBudget?: number,  } | [charge?: number, energyBudget?: number, ];
    export class $Climate {
        static quantizeCoord(coord: number): number;
        static findSpawnPosition(points: $List_<$Climate$ParameterPoint_>, sampler: $Climate$Sampler_): $BlockPos;
        static unquantizeCoord(coord: number): number;
        static target(temperature: number, humidity: number, continentalness: number, erosion: number, depth: number, weirdness: number): $Climate$TargetPoint;
        static empty(): $Climate$Sampler;
        static parameters(temperature: $Climate$Parameter_, humidity: $Climate$Parameter_, continentalness: $Climate$Parameter_, erosion: $Climate$Parameter_, depth: $Climate$Parameter_, weirdness: $Climate$Parameter_, offset: number): $Climate$ParameterPoint;
        static parameters(temperature: number, humidity: number, continentalness: number, erosion: number, depth: number, weirdness: number, offset: number): $Climate$ParameterPoint;
        constructor();
    }
    export class $MultiNoiseBiomeSourceParameterLists {
        static bootstrap(context: $BootstrapContext<$MultiNoiseBiomeSourceParameterList_>): void;
        static OVERWORLD: $ResourceKey<$MultiNoiseBiomeSourceParameterList>;
        static NETHER: $ResourceKey<$MultiNoiseBiomeSourceParameterList>;
        constructor();
    }
    export class $AmbientParticleSettings {
        canSpawn(random: $RandomSource): boolean;
        getOptions(): $ParticleOptions;
        static CODEC: $Codec<$AmbientParticleSettings>;
        constructor(options: $ParticleOptions_, probability: number);
        get options(): $ParticleOptions;
    }
    export class $TheEndBiomeSource extends $BiomeSource implements $IExtendedTheEndBiomeSource {
        initializeForTerraBlender(arg0: $RegistryAccess, arg1: number): void;
        handler$ejd000$terrablender$onGetNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_, arg4: $CallbackInfoReturnable<any>): void;
        static create(biomeGetter: $HolderGetter<$Biome_>): $TheEndBiomeSource;
        static CODEC: $MapCodec<$TheEndBiomeSource>;
    }
    export class $BiomeSpecialEffects {
        getFogColor(): number;
        getWaterColor(): number;
        getWaterFogColor(): number;
        getAmbientParticleSettings(): ($AmbientParticleSettings) | undefined;
        getAmbientLoopSoundEvent(): ($Holder<$SoundEvent>) | undefined;
        getAmbientMoodSettings(): ($AmbientMoodSettings) | undefined;
        getGrassColorOverride(): (number) | undefined;
        getFoliageColorOverride(): (number) | undefined;
        getGrassColorModifier(): $BiomeSpecialEffects$GrassColorModifier;
        getSkyColor(): number;
        getAmbientAdditionsSettings(): ($AmbientAdditionsSettings) | undefined;
        getBackgroundMusic(): ($Music) | undefined;
        skyColor: number;
        static CODEC: $Codec<$BiomeSpecialEffects>;
        waterFogColor: number;
        ambientLoopSoundEvent: ($Holder<$SoundEvent>) | undefined;
        foliageColorOverride: (number) | undefined;
        grassColorOverride: (number) | undefined;
        ambientAdditionsSettings: ($AmbientAdditionsSettings) | undefined;
        ambientParticleSettings: ($AmbientParticleSettings) | undefined;
        waterColor: number;
        backgroundMusic: ($Music) | undefined;
        grassColorModifier: $BiomeSpecialEffects$GrassColorModifier;
        fogColor: number;
        ambientMoodSettings: ($AmbientMoodSettings) | undefined;
    }
    export class $Climate$Parameter extends $Record {
        static point(value: number): $Climate$Parameter;
        min(): number;
        max(): number;
        distance(pointValue: number): number;
        distance(parameter: $Climate$Parameter_): number;
        static span(min: $Climate$Parameter_, max: $Climate$Parameter_): $Climate$Parameter;
        span(param: $Climate$Parameter_ | null): $Climate$Parameter;
        static span(min: number, max: number): $Climate$Parameter;
        static CODEC: $Codec<$Climate$Parameter>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Climate$Parameter}.
     */
    export type $Climate$Parameter_ = { max?: number, min?: number,  } | [max?: number, min?: number, ];
    export class $Climate$ParameterList<T> implements $ParameterListAccessor<any>, $IExtendedParameterList<any>, $IMultiNoiseUtilEntries<any> {
        findValuePositional(arg0: $Climate$TargetPoint_, arg1: number, arg2: number, arg3: number): $Object;
        getUniqueness(arg0: number, arg1: number, arg2: number): number;
        findValueIndex(targetPoint: $Climate$TargetPoint_): $Object;
        findValueBruteForce(targetPoint: $Climate$TargetPoint_): $Object;
        initializeForTerraBlender(arg0: $RegistryAccess, arg1: $RegionType_, arg2: number): void;
        getTreeCount(): number;
        recreateUniqueness(): void;
        values(): $List<$Pair<$Climate$ParameterPoint, $Object>>;
        clone(): $Climate$ParameterList<any>;
        getTree(arg0: number): $Climate$RTree<any>;
        getRegion(arg0: number): $Region;
        findValue(targetPoint: $Climate$TargetPoint_): $Object;
        isInitialized(): boolean;
        static codec<T>(codec: $MapCodec_<T>): $Codec<$Climate$ParameterList<T>>;
        lithostitched$setValues(values: $List_<$Pair<$Climate$ParameterPoint_, $Object>>): void;
        lithostitched$index(rTree: $Climate$RTree<$Object>): void;
        getTree(): $Climate$RTree<$Object>;
        constructor(values: $List_<$Pair<$Climate$ParameterPoint_, $Object>>);
        get treeCount(): number;
        get initialized(): boolean;
    }
    export class $Biome$ClimateSettings extends $Record {
        temperature(): number;
        temperatureModifier(): $Biome$TemperatureModifier;
        downfall(): number;
        hasPrecipitation(): boolean;
        static CODEC: $MapCodec<$Biome$ClimateSettings>;
        constructor(hasPrecipitation: boolean, temperature: number, temperatureModifier: $Biome$TemperatureModifier_, downfall: number);
    }
    /**
     * Values that may be interpreted as {@link $Biome$ClimateSettings}.
     */
    export type $Biome$ClimateSettings_ = { hasPrecipitation?: boolean, downfall?: number, temperature?: number, temperatureModifier?: $Biome$TemperatureModifier_,  } | [hasPrecipitation?: boolean, downfall?: number, temperature?: number, temperatureModifier?: $Biome$TemperatureModifier_, ];
    export class $FixedBiomeSource extends $BiomeSource implements $BiomeManager$NoiseBiomeSource {
        /**
         * Gets the biome at the given quart positions.
         * Note that the coordinates passed into this method are 1/4 the scale of block coordinates.
         */
        getNoiseBiome(x: number, y: number, z: number): $Holder<$Biome>;
        static CODEC: $MapCodec<$FixedBiomeSource>;
        constructor(biome: $Holder_<$Biome>);
    }
    export class $OverworldBiomeBuilder {
        pickBeachBiome(temperature: number, humidity: number): $ResourceKey<$Biome>;
        pickPeakBiome(temperature: number, humidity: number, param: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickSlopeBiome(temperature: number, humidity: number, param: $Climate$Parameter_): $ResourceKey<$Biome>;
        addDebugBiomes(key: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        addOffCoastBiomes(key: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        addInlandBiomes(key: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        addUndergroundBiomes(key: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        addSurfaceBiome(consumer: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, temerature: $Climate$Parameter_, humidity: $Climate$Parameter_, continentalness: $Climate$Parameter_, erosion: $Climate$Parameter_, depth: $Climate$Parameter_, weirdness: number, key: $ResourceKey_<$Biome>): void;
        addMidSlice(consumer: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, param: $Climate$Parameter_): void;
        addHighSlice(consumer: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, param: $Climate$Parameter_): void;
        addPeaks(consumer: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, param: $Climate$Parameter_): void;
        addLowSlice(consumer: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, param: $Climate$Parameter_): void;
        addValleys(consumer: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, param: $Climate$Parameter_): void;
        pickMiddleBiome(temperature: number, humidity: number, param: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickMiddleBiomeOrBadlandsIfHot(temperature: number, humidity: number, param: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickMiddleBiomeOrBadlandsIfHotOrSlopeIfCold(temperature: number, humidity: number, param: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickPlateauBiome(temperature: number, humidity: number, param: $Climate$Parameter_): $ResourceKey<$Biome>;
        pickShatteredBiome(temperature: number, humidity: number, param: $Climate$Parameter_): $ResourceKey<$Biome>;
        maybePickWindsweptSavannaBiome(temperature: number, humidity: number, param: $Climate$Parameter_, key: $ResourceKey_<$Biome>): $ResourceKey<$Biome>;
        pickShatteredCoastBiome(temperature: number, humidity: number, param: $Climate$Parameter_): $ResourceKey<$Biome>;
        addUndergroundBiome(consumer: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, temerature: $Climate$Parameter_, humidity: $Climate$Parameter_, continentalness: $Climate$Parameter_, erosion: $Climate$Parameter_, depth: $Climate$Parameter_, weirdness: number, key: $ResourceKey_<$Biome>): void;
        addBottomBiome(consumer: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>, temerature: $Climate$Parameter_, humidity: $Climate$Parameter_, continentalness: $Climate$Parameter_, erosion: $Climate$Parameter_, depth: $Climate$Parameter_, weirdness: number, key: $ResourceKey_<$Biome>): void;
        pickBadlandsBiome(humidity: number, param: $Climate$Parameter_): $ResourceKey<$Biome>;
        static isDeepDarkRegion(erosionFunction: $DensityFunction_, depthFunction: $DensityFunction_, functionContext: $DensityFunction$FunctionContext): boolean;
        static getDebugStringForNoiseValue(depth: number, arg1: $Climate$Parameter_[]): string;
        getTemperatureThresholds(): $Climate$Parameter[];
        getHumidityThresholds(): $Climate$Parameter[];
        getErosionThresholds(): $Climate$Parameter[];
        getContinentalnessThresholds(): $Climate$Parameter[];
        getPeaksAndValleysThresholds(): $Climate$Parameter[];
        getWeirdnessThresholds(): $Climate$Parameter[];
        spawnTarget(): $List<$Climate$ParameterPoint>;
        static getDebugStringForPeaksAndValleys(continentalness: number): string;
        getDebugStringForContinentalness(continentalness: number): string;
        getDebugStringForErosion(continentalness: number): string;
        getDebugStringForTemperature(continentalness: number): string;
        getDebugStringForHumidity(continentalness: number): string;
        addBiomes(key: $Consumer_<$Pair<$Climate$ParameterPoint, $ResourceKey<$Biome>>>): void;
        nearInlandContinentalness: $Climate$Parameter;
        static PEAK_SIZE: number;
        static FAR_INLAND_START: number;
        static NEAR_INLAND_START: number;
        PLATEAU_BIOMES: $ResourceKey<$Biome>[][];
        MIDDLE_BIOMES_VARIANT: $ResourceKey<$Biome>[][];
        static EROSION_INDEX_1_START: number;
        static HIGH_START: number;
        FULL_RANGE: $Climate$Parameter;
        farInlandContinentalness: $Climate$Parameter;
        static VALLEY_SIZE: number;
        temperatures: $Climate$Parameter[];
        static LOW_START: number;
        static HIGH_END: number;
        static EROSION_INDEX_2_START: number;
        midInlandContinentalness: $Climate$Parameter;
        static MID_INLAND_START: number;
        humidities: $Climate$Parameter[];
        FROZEN_RANGE: $Climate$Parameter;
        coastContinentalness: $Climate$Parameter;
        deepOceanContinentalness: $Climate$Parameter;
        inlandContinentalness: $Climate$Parameter;
        UNFROZEN_RANGE: $Climate$Parameter;
        SHATTERED_BIOMES: $ResourceKey<$Biome>[][];
        OCEANS: $ResourceKey<$Biome>[][];
        erosions: $Climate$Parameter[];
        MIDDLE_BIOMES: $ResourceKey<$Biome>[][];
        PLATEAU_BIOMES_VARIANT: $ResourceKey<$Biome>[][];
        static EROSION_DEEP_DARK_DRYNESS_THRESHOLD: number;
        static PEAK_START: number;
        mushroomFieldsContinentalness: $Climate$Parameter;
        static DEPTH_DEEP_DARK_DRYNESS_THRESHOLD: number;
        oceanContinentalness: $Climate$Parameter;
        static PEAK_END: number;
        constructor();
        get temperatureThresholds(): $Climate$Parameter[];
        get humidityThresholds(): $Climate$Parameter[];
        get erosionThresholds(): $Climate$Parameter[];
        get continentalnessThresholds(): $Climate$Parameter[];
        get peaksAndValleysThresholds(): $Climate$Parameter[];
        get weirdnessThresholds(): $Climate$Parameter[];
    }
    export class $MultiNoiseBiomeSourceParameterList$Preset extends $Record {
        usedBiomes(): $Stream<$ResourceKey<$Biome>>;
        id(): $ResourceLocation;
        provider(): $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider;
        static OVERWORLD: $MultiNoiseBiomeSourceParameterList$Preset;
        static CODEC: $Codec<$MultiNoiseBiomeSourceParameterList$Preset>;
        static NETHER: $MultiNoiseBiomeSourceParameterList$Preset;
        constructor(arg0: $ResourceLocation_, arg1: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_);
    }
    /**
     * Values that may be interpreted as {@link $MultiNoiseBiomeSourceParameterList$Preset}.
     */
    export type $MultiNoiseBiomeSourceParameterList$Preset_ = { id?: $ResourceLocation_, provider?: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_,  } | [id?: $ResourceLocation_, provider?: $MultiNoiseBiomeSourceParameterList$Preset$SourceProvider_, ];
    export class $Biome implements $ExtendedBiome, $BiomeAccessor {
        /**
         * @deprecated
         */
        getTemperature(pos: $BlockPos_): number;
        shouldFreeze(level: $LevelReader, pos: $BlockPos_): boolean;
        shouldFreeze(level: $LevelReader, water: $BlockPos_, mustBeAtEdge: boolean): boolean;
        shouldSnow(level: $LevelReader, pos: $BlockPos_): boolean;
        getGenerationSettings(): $BiomeGenerationSettings;
        getPrecipitationAt(pos: $BlockPos_): $Biome$Precipitation;
        getHeightAdjustedTemperature(pos: $BlockPos_): number;
        coldEnoughToSnow(pos: $BlockPos_): boolean;
        getBaseTemperature(): number;
        wrapMethod$flb000$sable$preventFreezing(arg0: $LevelReader, arg1: $BlockPos_, arg2: boolean, arg3: $Operation_<any>): boolean;
        warmEnoughToRain(pos: $BlockPos_): boolean;
        shouldMeltFrozenOceanIcebergSlightly(pos: $BlockPos_): boolean;
        getFogColor(): number;
        getWaterColor(): number;
        getWaterFogColor(): number;
        getAmbientParticle(): ($AmbientParticleSettings) | undefined;
        getAmbientLoop(): ($Holder<$SoundEvent>) | undefined;
        getAmbientMood(): ($AmbientMoodSettings) | undefined;
        getAmbientAdditions(): ($AmbientAdditionsSettings) | undefined;
        getBiomeCategory(): number;
        setBiomeCategory(arg0: number): void;
        getDownfall(): number;
        getGrassColor(posX: number, arg1: number): number;
        getFoliageColor(): number;
        modifiableBiomeInfo(): $ModifiableBiomeInfo;
        getSkyColor(): number;
        getMobSettings(): $MobSpawnSettings;
        hasPrecipitation(): boolean;
        getModifiedClimateSettings(): $Biome$ClimateSettings;
        getModifiedSpecialEffects(): $BiomeSpecialEffects;
        getBackgroundMusic(): ($Music) | undefined;
        getClimateSettings(): $Biome$ClimateSettings;
        setClimateSettings(climateSettings: $Biome$ClimateSettings_): void;
        getSpecialEffects(): $BiomeSpecialEffects;
        setSpecialEffects(biomeSpecialEffects: $BiomeSpecialEffects): void;
        setGenerationSettings(biomeGenerationSettings: $BiomeGenerationSettings): void;
        setMobSettings(mobSpawnSettings: $MobSpawnSettings): void;
        static CODEC: $Codec<$Holder<$Biome>>;
        static NETWORK_CODEC: $Codec<$Biome>;
        /**
         * @deprecated
         */
        static BIOME_INFO_NOISE: $PerlinSimplexNoise;
        static DIRECT_CODEC: $Codec<$Biome>;
        static LIST_CODEC: $Codec<$HolderSet<$Biome>>;
        get baseTemperature(): number;
        get fogColor(): number;
        get waterColor(): number;
        get waterFogColor(): number;
        get ambientParticle(): ($AmbientParticleSettings) | undefined;
        get ambientLoop(): ($Holder<$SoundEvent>) | undefined;
        get ambientMood(): ($AmbientMoodSettings) | undefined;
        get ambientAdditions(): ($AmbientAdditionsSettings) | undefined;
        get downfall(): number;
        get foliageColor(): number;
        get skyColor(): number;
        get modifiedClimateSettings(): $Biome$ClimateSettings;
        get modifiedSpecialEffects(): $BiomeSpecialEffects;
        get backgroundMusic(): ($Music) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $Biome}.
     */
    export type $Biome_ = RegistryTypes.WorldgenBiome;
    export interface $MultiNoiseBiomeSourceParameterList extends RegistryMarked<RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterListTag, RegistryTypes.WorldgenMultiNoiseBiomeSourceParameterList> {}
    export class $Climate$DistanceMetric<T> {
    }
    export interface $Climate$DistanceMetric<T> {
        distance(node: $Climate$RTree$Node<T>, searchedValues: number[]): number;
    }
    /**
     * Values that may be interpreted as {@link $Climate$DistanceMetric}.
     */
    export type $Climate$DistanceMetric_<T> = ((arg0: $Climate$RTree$Node<T>, arg1: number[]) => number);
    export class $Climate$RTree<T> implements $IMultiNoiseUtilSearchTree<any> {
        static create<T>(nodes: $List_<$Pair<$Climate$ParameterPoint_, T>>): $Climate$RTree<T>;
        search(targetPoint: $Climate$TargetPoint_, distanceMetric: $Climate$DistanceMetric_<$Object>): $Object;
        getFirstNode(): $Climate$RTree$Node<$Object>;
        get firstNode(): $Climate$RTree$Node<$Object>;
    }
    export class $BiomeManager implements $BiomeManagerAccessor {
        getNoiseBiomeAtPosition(x: number, arg1: number, y: number): $Holder<$Biome>;
        getNoiseBiomeAtPosition(pos: $BlockPos_): $Holder<$Biome>;
        static obfuscateSeed(seed: number): number;
        withDifferentSource(newSource: $BiomeManager$NoiseBiomeSource_): $BiomeManager;
        getBiome(pos: $BlockPos_): $Holder<$Biome>;
        getNoiseBiomeAtQuart(x: number, y: number, z: number): $Holder<$Biome>;
        catnip$getBiomeZoomSeed(): number;
        biomeZoomSeed: number;
        static CHUNK_CENTER_QUART: number;
        constructor(noiseBiomeSource: $BiomeManager$NoiseBiomeSource_, biomeZoomSeed: number);
    }
    export class $Climate$Sampler extends $Record {
        temperature(): $DensityFunction;
        humidity(): $DensityFunction;
        spawnTarget(): $List<$Climate$ParameterPoint>;
        findSpawnPosition(): $BlockPos;
        continentalness(): $DensityFunction;
        erosion(): $DensityFunction;
        weirdness(): $DensityFunction;
        depth(): $DensityFunction;
        sample(x: number, y: number, z: number): $Climate$TargetPoint;
        constructor(arg0: $DensityFunction_, arg1: $DensityFunction_, arg2: $DensityFunction_, arg3: $DensityFunction_, arg4: $DensityFunction_, arg5: $DensityFunction_, arg6: $List_<$Climate$ParameterPoint_>);
    }
    /**
     * Values that may be interpreted as {@link $Climate$Sampler}.
     */
    export type $Climate$Sampler_ = { weirdness?: $DensityFunction_, erosion?: $DensityFunction_, temperature?: $DensityFunction_, depth?: $DensityFunction_, spawnTarget?: $List_<$Climate$ParameterPoint_>, humidity?: $DensityFunction_, continentalness?: $DensityFunction_,  } | [weirdness?: $DensityFunction_, erosion?: $DensityFunction_, temperature?: $DensityFunction_, depth?: $DensityFunction_, spawnTarget?: $List_<$Climate$ParameterPoint_>, humidity?: $DensityFunction_, continentalness?: $DensityFunction_, ];
    export class $Climate$SpawnFinder$Result extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Climate$SpawnFinder$Result}.
     */
    export type $Climate$SpawnFinder$Result_ = { fitness?: number, location?: $BlockPos_,  } | [fitness?: number, location?: $BlockPos_, ];
    export class $AmbientAdditionsSettings {
        getSoundEvent(): $Holder<$SoundEvent>;
        getTickChance(): number;
        static CODEC: $Codec<$AmbientAdditionsSettings>;
        constructor(soundEvent: $Holder_<$SoundEvent>, tickChance: number);
        get soundEvent(): $Holder<$SoundEvent>;
        get tickChance(): number;
    }
    export class $Climate$ParameterPoint extends $Record {
        temperature(): $Climate$Parameter;
        humidity(): $Climate$Parameter;
        continentalness(): $Climate$Parameter;
        erosion(): $Climate$Parameter;
        weirdness(): $Climate$Parameter;
        offset(): number;
        depth(): $Climate$Parameter;
        static CODEC: $Codec<$Climate$ParameterPoint>;
        constructor(arg0: $Climate$Parameter_, arg1: $Climate$Parameter_, arg2: $Climate$Parameter_, arg3: $Climate$Parameter_, arg4: $Climate$Parameter_, arg5: $Climate$Parameter_, arg6: number);
    }
    /**
     * Values that may be interpreted as {@link $Climate$ParameterPoint}.
     */
    export type $Climate$ParameterPoint_ = { offset?: number, weirdness?: $Climate$Parameter_, erosion?: $Climate$Parameter_, temperature?: $Climate$Parameter_, depth?: $Climate$Parameter_, humidity?: $Climate$Parameter_, continentalness?: $Climate$Parameter_,  } | [offset?: number, weirdness?: $Climate$Parameter_, erosion?: $Climate$Parameter_, temperature?: $Climate$Parameter_, depth?: $Climate$Parameter_, humidity?: $Climate$Parameter_, continentalness?: $Climate$Parameter_, ];
    export class $FeatureSorter$StepFeatureData extends $Record {
        indexMapping(): $ToIntFunction<$PlacedFeature>;
        features(): $List<$PlacedFeature>;
        constructor(arg0: $List_<$PlacedFeature_>, arg1: $ToIntFunction_<$PlacedFeature>);
    }
    /**
     * Values that may be interpreted as {@link $FeatureSorter$StepFeatureData}.
     */
    export type $FeatureSorter$StepFeatureData_ = { indexMapping?: $ToIntFunction_<$PlacedFeature>, features?: $List_<$PlacedFeature_>,  } | [indexMapping?: $ToIntFunction_<$PlacedFeature>, features?: $List_<$PlacedFeature_>, ];
    export class $CheckerboardColumnBiomeSource extends $BiomeSource {
        static CODEC: $MapCodec<$CheckerboardColumnBiomeSource>;
        constructor(allowedBiomes: $HolderSet_<$Biome>, size: number);
    }
    export class $Biomes {
        static BEACH: $ResourceKey<$Biome>;
        static SAVANNA: $ResourceKey<$Biome>;
        static SUNFLOWER_PLAINS: $ResourceKey<$Biome>;
        static THE_VOID: $ResourceKey<$Biome>;
        static BIRCH_FOREST: $ResourceKey<$Biome>;
        static FROZEN_OCEAN: $ResourceKey<$Biome>;
        static WINDSWEPT_HILLS: $ResourceKey<$Biome>;
        static DEEP_LUKEWARM_OCEAN: $ResourceKey<$Biome>;
        static OLD_GROWTH_SPRUCE_TAIGA: $ResourceKey<$Biome>;
        static DEEP_FROZEN_OCEAN: $ResourceKey<$Biome>;
        static END_HIGHLANDS: $ResourceKey<$Biome>;
        static END_MIDLANDS: $ResourceKey<$Biome>;
        static FLOWER_FOREST: $ResourceKey<$Biome>;
        static CHERRY_GROVE: $ResourceKey<$Biome>;
        static ERODED_BADLANDS: $ResourceKey<$Biome>;
        static END_BARRENS: $ResourceKey<$Biome>;
        static SNOWY_TAIGA: $ResourceKey<$Biome>;
        static DEEP_DARK: $ResourceKey<$Biome>;
        static JUNGLE: $ResourceKey<$Biome>;
        static ICE_SPIKES: $ResourceKey<$Biome>;
        static OCEAN: $ResourceKey<$Biome>;
        static SMALL_END_ISLANDS: $ResourceKey<$Biome>;
        static FROZEN_RIVER: $ResourceKey<$Biome>;
        static DARK_FOREST: $ResourceKey<$Biome>;
        static THE_END: $ResourceKey<$Biome>;
        static SNOWY_PLAINS: $ResourceKey<$Biome>;
        static COLD_OCEAN: $ResourceKey<$Biome>;
        static SNOWY_SLOPES: $ResourceKey<$Biome>;
        static WINDSWEPT_SAVANNA: $ResourceKey<$Biome>;
        static LUSH_CAVES: $ResourceKey<$Biome>;
        static DRIPSTONE_CAVES: $ResourceKey<$Biome>;
        static MEADOW: $ResourceKey<$Biome>;
        static STONY_SHORE: $ResourceKey<$Biome>;
        static WINDSWEPT_FOREST: $ResourceKey<$Biome>;
        static PLAINS: $ResourceKey<$Biome>;
        static OLD_GROWTH_BIRCH_FOREST: $ResourceKey<$Biome>;
        static SAVANNA_PLATEAU: $ResourceKey<$Biome>;
        static SPARSE_JUNGLE: $ResourceKey<$Biome>;
        static STONY_PEAKS: $ResourceKey<$Biome>;
        static JAGGED_PEAKS: $ResourceKey<$Biome>;
        static RIVER: $ResourceKey<$Biome>;
        static MANGROVE_SWAMP: $ResourceKey<$Biome>;
        static WARPED_FOREST: $ResourceKey<$Biome>;
        static WOODED_BADLANDS: $ResourceKey<$Biome>;
        static NETHER_WASTES: $ResourceKey<$Biome>;
        static LUKEWARM_OCEAN: $ResourceKey<$Biome>;
        static WINDSWEPT_GRAVELLY_HILLS: $ResourceKey<$Biome>;
        static BAMBOO_JUNGLE: $ResourceKey<$Biome>;
        static DEEP_COLD_OCEAN: $ResourceKey<$Biome>;
        static OLD_GROWTH_PINE_TAIGA: $ResourceKey<$Biome>;
        static BADLANDS: $ResourceKey<$Biome>;
        static MUSHROOM_FIELDS: $ResourceKey<$Biome>;
        static DEEP_OCEAN: $ResourceKey<$Biome>;
        static TAIGA: $ResourceKey<$Biome>;
        static DESERT: $ResourceKey<$Biome>;
        static SNOWY_BEACH: $ResourceKey<$Biome>;
        static WARM_OCEAN: $ResourceKey<$Biome>;
        static BASALT_DELTAS: $ResourceKey<$Biome>;
        static FOREST: $ResourceKey<$Biome>;
        static SWAMP: $ResourceKey<$Biome>;
        static SOUL_SAND_VALLEY: $ResourceKey<$Biome>;
        static GROVE: $ResourceKey<$Biome>;
        static FROZEN_PEAKS: $ResourceKey<$Biome>;
        static CRIMSON_FOREST: $ResourceKey<$Biome>;
        constructor();
    }
    export class $MultiNoiseBiomeSource extends $BiomeSource implements $MultiNoiseBiomeSourceExtension, $MNBSDuck, $MultiNoiseBiomeSourceAccessor, $IExtendedMultiNoiseBiomeSource, $MultiNoiseBiomeSourceAccess, $IMultiNoiseBiomeSource {
        getNoiseBiome(targetPoint: $Climate$TargetPoint_): $Holder<$Biome>;
        static createFromPreset(parameters: $Holder_<$MultiNoiseBiomeSourceParameterList>): $MultiNoiseBiomeSource;
        handler$eip000$terrablender$getNoiseBiome(arg0: number, arg1: number, arg2: number, arg3: $Climate$Sampler_, arg4: $CallbackInfoReturnable<any>): void;
        handler$eip000$terrablender$addDebugInfo(arg0: $List_<any>, arg1: $BlockPos_, arg2: $Climate$Sampler_, arg3: $CallbackInfo): void;
        biome_replacer$getParameters(): $Climate$ParameterList<any>;
        biome_replacer$setParameters(newParameters: $Climate$ParameterList<any>): void;
        lithostitched$getEntries(): $Either<any, any>;
        lithostitched$setEntries(parameters: $Either<any, any>): void;
        clone(): $MultiNoiseBiomeSource;
        parameters(): $Climate$ParameterList<$Holder<$Biome>>;
        stable(resourceKey: $ResourceKey_<$MultiNoiseBiomeSourceParameterList>): boolean;
        static createFromList(parameters: $Climate$ParameterList<$Holder_<$Biome>>): $MultiNoiseBiomeSource;
        invokeGetBiomeEntries(): $Climate$ParameterList<$Holder<$Biome>>;
        getParameters(): $Either<$Climate$ParameterList<$Holder<$Biome>>, $Holder<$MultiNoiseBiomeSourceParameterList>>;
        setParameters(parameters: $Either<$Climate$ParameterList<$Holder_<$Biome>>, $Holder_<$MultiNoiseBiomeSourceParameterList>>): void;
        static CODEC: $MapCodec<$MultiNoiseBiomeSource>;
        static DIRECT_CODEC: $MapCodec<$Climate$ParameterList<$Holder<$Biome>>>;
    }
    export class $BiomeSource implements $BiomeResolver, $BiomeSourceInvoker, $IExtendedBiomeSource {
        getNoiseBiome(x: number, y: number, z: number, sampler: $Climate$Sampler_): $Holder<$Biome>;
        findClosestBiome3d(pos: $BlockPos_, radius: number, horizontalStep: number, verticalStep: number, biomePredicate: $Predicate_<$Holder<$Biome>>, sampler: $Climate$Sampler_, level: $LevelReader): $Pair<$BlockPos, $Holder<$Biome>>;
        getBiomesWithin(x: number, y: number, z: number, radius: number, sampler: $Climate$Sampler_): $Set<$Holder<$Biome>>;
        findBiomeHorizontal(x: number, y: number, z: number, radius: number, biomePredicate: $Predicate_<$Holder<$Biome>>, random: $RandomSource, sampler: $Climate$Sampler_): $Pair<$BlockPos, $Holder<$Biome>>;
        findBiomeHorizontal(x: number, y: number, z: number, radius: number, increment: number, biomePredicate: $Predicate_<$Holder<$Biome>>, random: $RandomSource, findClosest: boolean, sampler: $Climate$Sampler_): $Pair<$BlockPos, $Holder<$Biome>>;
        possibleBiomes(): $Set<$Holder<$Biome>>;
        addDebugInfo(info: $List_<string>, pos: $BlockPos_, sampler: $Climate$Sampler_): void;
        appendDeferredBiomesList(arg0: $List_<any>): void;
        getCodec(): $MapCodec<$BiomeSource>;
        static CODEC: $Codec<$BiomeSource>;
        get codec(): $MapCodec<$BiomeSource>;
    }
}
