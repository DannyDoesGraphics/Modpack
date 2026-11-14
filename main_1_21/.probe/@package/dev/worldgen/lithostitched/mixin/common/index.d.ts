import { $StructurePoolElement } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $Pair, $Either } from "@package/com/mojang/datafixers/util";
import { $Biome$ClimateSettings, $BiomeSource, $BiomeGenerationSettings, $BiomeSpecialEffects, $Climate$ParameterList, $Biome, $FeatureSorter$StepFeatureData, $MobSpawnSettings, $MobSpawnSettings$SpawnerData, $Biome$ClimateSettings_, $MultiNoiseBiomeSourceParameterList } from "@package/net/minecraft/world/level/biome";
import { $MobCategory_, $MobCategory } from "@package/net/minecraft/world/entity";
import { $StructureProcessorList, $StructureProcessor, $StructureTemplate } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $PoolAliasBinding } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $Supplier_, $Function } from "@package/java/util/function";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $Holder_, $RegistrationInfo, $HolderSet, $HolderSet_, $Holder, $Holder$Reference } from "@package/net/minecraft/core";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WeightedRandomList } from "@package/net/minecraft/util/random";
import { $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $StructureSet$StructureSelectionEntry, $StructureSet$StructureSelectionEntry_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $GenerationStep$Carving, $NoiseGeneratorSettings, $NoiseRouter, $NoiseRouter_, $PositionalRandomFactory, $GenerationStep$Carving_ } from "@package/net/minecraft/world/level/levelgen";
export * as mnbs from "@package/dev/worldgen/lithostitched/mixin/common/mnbs";

declare module "@package/dev/worldgen/lithostitched/mixin/common" {
    export class $NoiseBasedChunkGeneratorAccessor {
    }
    export interface $NoiseBasedChunkGeneratorAccessor {
        setSettings(holder: $Holder_<$NoiseGeneratorSettings>): void;
        set settings(value: $Holder_<$NoiseGeneratorSettings>);
    }
    /**
     * Values that may be interpreted as {@link $NoiseBasedChunkGeneratorAccessor}.
     */
    export type $NoiseBasedChunkGeneratorAccessor_ = ((holder: $Holder<$NoiseGeneratorSettings>) => void);
    export class $StructureTemplatePoolAccessor {
    }
    export interface $StructureTemplatePoolAccessor {
        getRawTemplates(): $List<$Pair<$StructurePoolElement, number>>;
        getVanillaTemplates(): $ObjectArrayList<$StructurePoolElement>;
        setRawTemplates(list: $List_<$Pair<$StructurePoolElement, number>>): void;
        setVanillaTemplates(objectArrayList: $ObjectArrayList<$StructurePoolElement>): void;
    }
    export class $StructureProcessorListAccessor {
    }
    export interface $StructureProcessorListAccessor {
        setProcessors(list: $List_<$StructureProcessor>): void;
        set processors(value: $List_<$StructureProcessor>);
    }
    /**
     * Values that may be interpreted as {@link $StructureProcessorListAccessor}.
     */
    export type $StructureProcessorListAccessor_ = ((list: $List<$StructureProcessor>) => void);
    export class $StructureSetAccessor {
    }
    export interface $StructureSetAccessor {
        setStructures(list: $List_<$StructureSet$StructureSelectionEntry_>): void;
        set structures(value: $List_<$StructureSet$StructureSelectionEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $StructureSetAccessor}.
     */
    export type $StructureSetAccessor_ = ((list: $List<$StructureSet$StructureSelectionEntry>) => void);
    export class $BiomeAccessor {
    }
    export interface $BiomeAccessor {
        getClimateSettings(): $Biome$ClimateSettings;
        setClimateSettings(climateSettings: $Biome$ClimateSettings_): void;
        getSpecialEffects(): $BiomeSpecialEffects;
        setSpecialEffects(biomeSpecialEffects: $BiomeSpecialEffects): void;
        setGenerationSettings(biomeGenerationSettings: $BiomeGenerationSettings): void;
        setMobSettings(mobSpawnSettings: $MobSpawnSettings): void;
        set generationSettings(value: $BiomeGenerationSettings);
        set mobSettings(value: $MobSpawnSettings);
    }
    export class $MultiNoiseBiomeSourceAccessor {
    }
    export interface $MultiNoiseBiomeSourceAccessor {
        getParameters(): $Either<$Climate$ParameterList<$Holder<$Biome>>, $Holder<$MultiNoiseBiomeSourceParameterList>>;
        setParameters(either: $Either<$Climate$ParameterList<$Holder_<$Biome>>, $Holder_<$MultiNoiseBiomeSourceParameterList>>): void;
    }
    export class $MappedRegistryAccessor<T> {
    }
    export interface $MappedRegistryAccessor<T> {
        lithostitched$getRegistrationInfos(): $Map<$ResourceKey<T>, $RegistrationInfo>;
        getByValue(): $Map<T, $Holder$Reference<T>>;
        get byValue(): $Map<T, $Holder$Reference<T>>;
    }
    export class $PlacedFeatureAccessor {
    }
    export interface $PlacedFeatureAccessor {
        setFeature(holder: $Holder_<$ConfiguredFeature<never, never>>): void;
        set feature(value: $Holder_<$ConfiguredFeature<never, never>>);
    }
    /**
     * Values that may be interpreted as {@link $PlacedFeatureAccessor}.
     */
    export type $PlacedFeatureAccessor_ = ((holder: $Holder<$ConfiguredFeature<never, never>>) => void);
    export class $ChunkGeneratorAccessor {
    }
    export interface $ChunkGeneratorAccessor {
        getBiomeSource(): $BiomeSource;
        setBiomeSource(biomeSource: $BiomeSource): void;
        getGetter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
        setFeaturesPerStep(supplier: $Supplier_<$List<$FeatureSorter$StepFeatureData>>): void;
        get getter(): $Function<$Holder<$Biome>, $BiomeGenerationSettings>;
        set featuresPerStep(value: $Supplier_<$List<$FeatureSorter$StepFeatureData>>);
    }
    export class $SinglePoolElementAccessor {
    }
    export interface $SinglePoolElementAccessor {
        setProcessors(holder: $Holder_<$StructureProcessorList>): void;
        getProcessors(): $Holder<$StructureProcessorList>;
        getTemplate(): $Either<$ResourceLocation, $StructureTemplate>;
        get template(): $Either<$ResourceLocation, $StructureTemplate>;
    }
    export class $HolderReferenceAccessor<T> {
    }
    export interface $HolderReferenceAccessor<T> {
        setValue(object: T): void;
        set value(value: T);
    }
    /**
     * Values that may be interpreted as {@link $HolderReferenceAccessor}.
     */
    export type $HolderReferenceAccessor_<T> = ((object: T) => void);
    export class $MobSpawnSettingsAccessor {
    }
    export interface $MobSpawnSettingsAccessor {
        getSpawners(): $Map<$MobCategory, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>;
        setSpawners(map: $Map_<$MobCategory_, $WeightedRandomList<$MobSpawnSettings$SpawnerData>>): void;
    }
    export class $RandomStateAccessor {
    }
    export interface $RandomStateAccessor {
        getRandom(): $PositionalRandomFactory;
        get random(): $PositionalRandomFactory;
    }
    /**
     * Values that may be interpreted as {@link $RandomStateAccessor}.
     */
    export type $RandomStateAccessor_ = (() => $PositionalRandomFactory);
    export class $JigsawStructureAccessor {
    }
    export interface $JigsawStructureAccessor {
        setPoolAliases(list: $List_<$PoolAliasBinding>): void;
        getPoolAliases(): $List<$PoolAliasBinding>;
    }
    export class $BiomeGenerationSettingsAccessor {
        static createGenerationSettings(carvers: $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>, features: $List_<$HolderSet_<$PlacedFeature>>): $BiomeGenerationSettings;
    }
    export interface $BiomeGenerationSettingsAccessor {
        getCarvers(): $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
        get carvers(): $Map<$GenerationStep$Carving, $HolderSet<$ConfiguredWorldCarver<never>>>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeGenerationSettingsAccessor}.
     */
    export type $BiomeGenerationSettingsAccessor_ = (() => $Map_<$GenerationStep$Carving_, $HolderSet_<$ConfiguredWorldCarver<never>>>);
    export class $NoiseGeneratorSettingsAccessor {
    }
    export interface $NoiseGeneratorSettingsAccessor {
        setNoiseRouter(noiseRouter: $NoiseRouter_): void;
        set noiseRouter(value: $NoiseRouter_);
    }
    /**
     * Values that may be interpreted as {@link $NoiseGeneratorSettingsAccessor}.
     */
    export type $NoiseGeneratorSettingsAccessor_ = ((noiseRouter: $NoiseRouter) => void);
    export class $BiomeSourceInvoker {
    }
    export interface $BiomeSourceInvoker {
        getCodec(): $MapCodec<$BiomeSource>;
        get codec(): $MapCodec<$BiomeSource>;
    }
    /**
     * Values that may be interpreted as {@link $BiomeSourceInvoker}.
     */
    export type $BiomeSourceInvoker_ = (() => $MapCodec_<$BiomeSource>);
}
