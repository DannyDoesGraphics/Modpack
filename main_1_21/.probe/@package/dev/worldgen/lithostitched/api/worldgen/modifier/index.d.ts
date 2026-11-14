import { $Level } from "@package/net/minecraft/world/level";
import { $BiomeClimate_, $NoiseRouterTarget_, $WeightedSpawnerData_, $BiomeEffects } from "@package/dev/worldgen/lithostitched/api/worldgen/util";
import { $StructurePoolElement, $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $CompositeConfig$Type_ } from "@package/dev/worldgen/lithostitched/worldgen/feature/config";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $AmbientMoodSettings, $AmbientParticleSettings, $BiomeSpecialEffects$GrassColorModifier_, $AmbientAdditionsSettings, $Biome } from "@package/net/minecraft/world/level/biome";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $StructureProcessorList, $StructureProcessor } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $List_ } from "@package/java/util";
import { $PoolAliasBinding } from "@package/net/minecraft/world/level/levelgen/structure/pools/alias";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $UnaryOperator_ } from "@package/java/util/function";
import { $Music, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Holder_, $RegistryAccess, $Registry, $HolderSet_ } from "@package/net/minecraft/core";
import { $InjectionType_ } from "@package/dev/worldgen/lithostitched/api/util";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $LoadPredicate } from "@package/dev/worldgen/lithostitched/api/predicate";
import { $PlacementCondition } from "@package/dev/worldgen/lithostitched/api/worldgen/placementcondition";
import { $Structure, $StructureSet, $StructureSet$StructureSelectionEntry_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $DensityFunction_, $SurfaceRules$RuleSource_, $DensityFunction, $GenerationStep$Decoration_ } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/dev/worldgen/lithostitched/api/worldgen/modifier" {
    export class $WorldgenModifier {
        static resetRegistrationInfo<T>(registry: $Registry<T>, holder: $Holder_<T>): void;
        static builder(predicate: $LoadPredicate): $WorldgenModifier$ModifierBuilder;
        static builder(): $WorldgenModifier$ModifierBuilder;
        static PRIORITY_DEFAULT_CODEC: $MapCodec<number>;
        static CODEC: $Codec<$WorldgenModifier>;
        static REMOVAL_PRIORITY: number;
        static DEFAULT_PRIORITY: number;
        static PRIORITY_REMOVE_CODEC: $MapCodec<number>;
    }
    export interface $WorldgenModifier {
        shouldRecompileSortedFeatures(): boolean;
        priority(): number;
        apply(registryAccess: $RegistryAccess): void;
        predicate(): ($LoadPredicate) | undefined;
        codec(): $MapCodec<$WorldgenModifier>;
    }
    /**
     * Values that may be interpreted as {@link $WorldgenModifier}.
     */
    export type $WorldgenModifier_ = RegistryTypes.LithostitchedWorldgenModifier;
    export class $WorldgenModifier$ModifierBuilder {
        setPoolAliases(structure: $Holder_<$Structure>, append: boolean, ...aliases: $PoolAliasBinding[]): $WorldgenModifier;
        setPoolAliases(structures: $HolderSet_<$Structure>, append: boolean, ...aliases: $PoolAliasBinding[]): $WorldgenModifier;
        addBiomeSpawns(biomes: $HolderSet_<$Biome>, ...spawns: $WeightedSpawnerData_[]): $WorldgenModifier;
        addBiomeSpawns(biome: $Holder_<$Biome>, ...spawns: $WeightedSpawnerData_[]): $WorldgenModifier;
        addFeatures(biome: $Holder_<$Biome>, features: $HolderSet_<$PlacedFeature>, step: $GenerationStep$Decoration_): $WorldgenModifier;
        addFeatures(biomes: $HolderSet_<$Biome>, features: $HolderSet_<$PlacedFeature>, step: $GenerationStep$Decoration_): $WorldgenModifier;
        addFeatures(biome: $Holder_<$Biome>, feature: $Holder_<$PlacedFeature>, step: $GenerationStep$Decoration_): $WorldgenModifier;
        addFeatures(biomes: $HolderSet_<$Biome>, feature: $Holder_<$PlacedFeature>, step: $GenerationStep$Decoration_): $WorldgenModifier;
        addProcessorListProcessors(list: $Holder_<$StructureProcessorList>, ...processors: $StructureProcessor[]): $WorldgenModifier;
        addProcessorListProcessors(lists: $HolderSet_<$StructureProcessorList>, ...processors: $StructureProcessor[]): $WorldgenModifier;
        addStructureSetEntries(set: $Holder_<$StructureSet>, ...entries: $StructureSet$StructureSelectionEntry_[]): $WorldgenModifier;
        addStructureSetEntries(sets: $HolderSet_<$StructureSet>, ...entries: $StructureSet$StructureSelectionEntry_[]): $WorldgenModifier;
        addTemplatePoolElements(pools: $HolderSet_<$StructureTemplatePool>, ...elements: $Pair<$StructurePoolElement, number>[]): $WorldgenModifier;
        addTemplatePoolElements(pool: $Holder_<$StructureTemplatePool>, ...elements: $Pair<$StructurePoolElement, number>[]): $WorldgenModifier;
        addSurfaceRule(dimensions: $List_<$ResourceKey_<$Level>>, injectionType: $InjectionType_, ruleSource: $SurfaceRules$RuleSource_): $WorldgenModifier;
        addSurfaceRule(dimension: $ResourceKey_<$Level>, injectionType: $InjectionType_, ruleSource: $SurfaceRules$RuleSource_): $WorldgenModifier;
        removeBiomeSpawns(biomes: $HolderSet_<$Biome>, mob: $Holder_<$EntityType<never>>): $WorldgenModifier;
        removeBiomeSpawns(biome: $Holder_<$Biome>, mobs: $HolderSet_<$EntityType<never>>): $WorldgenModifier;
        removeBiomeSpawns(biome: $Holder_<$Biome>, mob: $Holder_<$EntityType<never>>): $WorldgenModifier;
        removeBiomeSpawns(biomes: $HolderSet_<$Biome>, mobs: $HolderSet_<$EntityType<never>>): $WorldgenModifier;
        removeFeatures(biome: $Holder_<$Biome>, features: $HolderSet_<$PlacedFeature>, step: $GenerationStep$Decoration_): $WorldgenModifier;
        removeFeatures(biomes: $HolderSet_<$Biome>, features: $HolderSet_<$PlacedFeature>, step: $GenerationStep$Decoration_): $WorldgenModifier;
        removeFeatures(biomes: $HolderSet_<$Biome>, feature: $Holder_<$PlacedFeature>, step: $GenerationStep$Decoration_): $WorldgenModifier;
        removeFeatures(biome: $Holder_<$Biome>, feature: $Holder_<$PlacedFeature>, step: $GenerationStep$Decoration_): $WorldgenModifier;
        removeStructureSetEntries(sets: $HolderSet_<$StructureSet>, ...holders: $Holder_<$Structure>[]): $WorldgenModifier;
        removeStructureSetEntries(set: $Holder_<$StructureSet>, ...holders: $Holder_<$Structure>[]): $WorldgenModifier;
        replaceClimate(biome: $Holder_<$Biome>, climate: $BiomeClimate_): $WorldgenModifier;
        replaceClimate(biomes: $HolderSet_<$Biome>, climate: $BiomeClimate_): $WorldgenModifier;
        replaceEffects(biome: $Holder_<$Biome>, operator: $UnaryOperator_<$BiomeEffectsBuilder>): $WorldgenModifier;
        replaceEffects(biomes: $HolderSet_<$Biome>, operator: $UnaryOperator_<$BiomeEffectsBuilder>): $WorldgenModifier;
        setPoolElementProcessors(pools: $HolderSet_<$StructureTemplatePool>, list: $Holder_<$StructureProcessorList>, append: boolean): $WorldgenModifier;
        setPoolElementProcessors(pool: $Holder_<$StructureTemplatePool>, list: $Holder_<$StructureProcessorList>, append: boolean): $WorldgenModifier;
        setPoolElementProcessors(pool: $Holder_<$StructureTemplatePool>, list: $Holder_<$StructureProcessorList>, append: boolean, ...ids: $ResourceLocation_[]): $WorldgenModifier;
        setPoolElementProcessors(pools: $HolderSet_<$StructureTemplatePool>, list: $Holder_<$StructureProcessorList>, append: boolean, ...ids: $ResourceLocation_[]): $WorldgenModifier;
        setStructureSpawnCondition(structure: $Holder_<$Structure>, spawnCondition: $PlacementCondition, append: boolean): $WorldgenModifier;
        setStructureSpawnCondition(structures: $HolderSet_<$Structure>, spawnCondition: $PlacementCondition, append: boolean): $WorldgenModifier;
        stackFeatures(baseFeatures: $HolderSet_<$ConfiguredFeature<never, never>>, stackedFeature: $Holder_<$PlacedFeature>, placementType: $CompositeConfig$Type_): $WorldgenModifier;
        stackFeatures(baseFeatures: $Holder_<$ConfiguredFeature<never, never>>, stackedFeature: $Holder_<$PlacedFeature>, placementType: $CompositeConfig$Type_): $WorldgenModifier;
        wrapDensityFunction(target: $Holder_<$DensityFunction>, wrapper: $DensityFunction_): $WorldgenModifier;
        wrapDensityFunction(target: $Holder_<$DensityFunction>, wrapper: $Holder_<$DensityFunction>): $WorldgenModifier;
        wrapNoiseRouter(dimension: $ResourceKey_<$Level>, target: $NoiseRouterTarget_, wrapper: $DensityFunction_): $WorldgenModifier;
        wrapNoiseRouter(dimension: $ResourceKey_<$Level>, target: $NoiseRouterTarget_, wrapper: $Holder_<$DensityFunction>): $WorldgenModifier;
        priority(priority: number): $WorldgenModifier$ModifierBuilder;
        noop(): $WorldgenModifier;
    }
    export class $BiomeEffectsBuilder {
        static create(): $BiomeEffectsBuilder;
    }
    export interface $BiomeEffectsBuilder {
        grassColor(integer: number): $BiomeEffectsBuilder;
        foliageColor(integer: number): $BiomeEffectsBuilder;
        fogColor(integer: number): $BiomeEffectsBuilder;
        waterColor(integer: number): $BiomeEffectsBuilder;
        waterFogColor(integer: number): $BiomeEffectsBuilder;
        skyColor(integer: number): $BiomeEffectsBuilder;
        grassColorModifier(grassColorModifier: $BiomeSpecialEffects$GrassColorModifier_): $BiomeEffectsBuilder;
        ambientParticle(ambientParticleSettings: $AmbientParticleSettings): $BiomeEffectsBuilder;
        ambientSound(holder: $Holder_<$SoundEvent>): $BiomeEffectsBuilder;
        additionsSound(ambientAdditionsSettings: $AmbientAdditionsSettings): $BiomeEffectsBuilder;
        musicVolume(float_: number): $BiomeEffectsBuilder;
        dryFoliageColor(integer: number): $BiomeEffectsBuilder;
        moodSound(ambientMoodSettings: $AmbientMoodSettings): $BiomeEffectsBuilder;
        build(): $BiomeEffects;
        music(music: $Music): $BiomeEffectsBuilder;
    }
    export interface $WorldgenModifier extends RegistryMarked<RegistryTypes.LithostitchedWorldgenModifierTag, RegistryTypes.LithostitchedWorldgenModifier> {}
}
