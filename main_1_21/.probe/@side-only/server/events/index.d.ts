import { $SensorType } from "@package/net/minecraft/world/entity/ai/sensing";
import { $PackagePortTargetType } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $ParticleType } from "@package/net/minecraft/core/particles";
import { $Schedule, $Activity } from "@package/net/minecraft/world/entity/schedule";
import { $ItemPredicate_, $ItemCraftedKubeEvent, $ItemDroppedKubeEvent, $ItemDestroyedKubeEvent, $ItemPickedUpKubeEvent, $ItemSmeltedKubeEvent, $ItemEntityInteractedKubeEvent, $ItemClickedKubeEvent, $ModifyItemTooltipsKubeEvent, $FoodEatenKubeEvent } from "@package/dev/latvian/mods/kubejs/item";
import { $AEKeyType } from "@package/appeng/api/stacks";
import { $HeightProviderType } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $CatVariant, $FrogVariant, $WolfVariant } from "@package/net/minecraft/world/entity/animal";
import { $AttachmentType } from "@package/net/neoforged/neoforge/attachment";
import { $VeilShaderBufferLayout } from "@package/foundry/veil/api/client/render";
import { $WorldCarver, $ConfiguredWorldCarver } from "@package/net/minecraft/world/level/levelgen/carver";
import { $StructureType, $Structure, $StructureSet } from "@package/net/minecraft/world/level/levelgen/structure";
import { $StructurePlacementType } from "@package/net/minecraft/world/level/levelgen/structure/placement";
import { $IngredientType } from "@package/net/neoforged/neoforge/common/crafting";
import { PaintingVariant, JukeboxSong } from "@side-only/server/events/registry";
import { $KubeDataGenerator } from "@package/dev/latvian/mods/kubejs/generator";
import { $ChatType } from "@package/net/minecraft/network/chat";
import { $ContraptionType } from "@package/com/simibubi/create/api/contraption";
import { $BlockStateProviderType } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $LightTypeRegistry$LightType, $PropertyModifierRegistry$PropertyModifierType, $RenderTypeLayerRegistry$LayerType, $PropertyRegistry$PropertyType, $PostPipelineStageRegistry$PipelineType } from "@package/foundry/veil/api/client/registry";
import { $CableType } from "@package/com/drmangotea/tfmg/content/electricity/connection/cable_type";
import { $PlacedFeature, $PlacementModifierType } from "@package/net/minecraft/world/level/levelgen/placement";
import { $BlockPredicateType } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $StructurePieceType } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $StatType } from "@package/net/minecraft/stats";
import { $FastNoiseConfig } from "@package/dev/worldgen/lithostitched/api/worldgen/densityfunction/fastnoise";
import { $RuleBlockEntityModifierType } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity";
import { $NormalNoise$NoiseParameters } from "@package/net/minecraft/world/level/levelgen/synth";
import { $LootPoolEntryType } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $GameEvent, $PositionSourceType } from "@package/net/minecraft/world/level/gameevent";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $RootPlacerType } from "@package/net/minecraft/world/level/levelgen/feature/rootplacers";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $NetworkKubeEvent } from "@package/dev/latvian/mods/kubejs/net";
import { $FluidIngredient_, $FluidIngredientType } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $CustomFilterKubeEvent } from "@package/dev/ftb/mods/ftbxmodcompat/neoforge/ftbfiltersystem/kubejs";
import { $CrystalPropagationContext } from "@package/dev/eriksonn/aeronautics/api/levitite_blend_crystallization";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $RecipeMappingRegistry, $RecipeSchemaRegistry } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $HolderSetType } from "@package/net/neoforged/neoforge/registries/holdersets";
import { $LiftingGasType } from "@package/dev/eriksonn/aeronautics/content/blocks/hot_air/lifting_gas";
import { $Level } from "@package/net/minecraft/world/level";
import { $BlockEntityTickKubeEvent } from "@package/dev/latvian/mods/kubejs/block/entity";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $TagWrapper, $TagKubeEvent } from "@package/dev/latvian/mods/kubejs/server/tag";
import { $TemplateList } from "@package/dev/worldgen/lithostitched/worldgen/modifier/template";
import { $PlayerTeamKubeEvent } from "@package/dev/ftb/mods/ftbxmodcompat/neoforge/ftbteams/kubejs";
import { $ArmInteractionPointType } from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
import { $NavigationTarget } from "@package/dev/simulated_team/simulated/content/blocks/nav_table/navigation_target";
import { $EntitySpawnedKubeEvent, $AfterLivingEntityHurtKubeEvent, $LivingEntityDeathKubeEvent, $CheckLivingEntitySpawnKubeEvent, $LivingEntityDropsKubeEvent, $BeforeLivingEntityHurtKubeEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $ItemSubPredicate$Type } from "@package/net/minecraft/advancements/critereon";
import { $LootNbtProviderType } from "@package/net/minecraft/world/level/storage/loot/providers/nbt";
import { $EntityDataSerializer } from "@package/net/minecraft/network/syncher";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $AddEntriesKubeEvent, $RegisterSubtypesKubeEvent, $RemoveEntriesKubeEvent, $AddInformationKubeEvent, $RemoveRecipesKubeEvent, $GroupEntriesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe/viewer";
import { $LootItemConditionType } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $BlockPropertiesTooltip$Entry } from "@package/dev/simulated_team/simulated/client";
import { $ItemAttributeType } from "@package/com/simibubi/create/content/logistics/item/filter/attribute";
import { $StructureModifier, $BiomeModifier } from "@package/net/neoforged/neoforge/common/world";
import { $MountedItemStorageType } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $DamageType } from "@package/net/minecraft/world/damagesource";
import { $StructureTemplatePool, $StructurePoolElementType } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $RecipeSerializer, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $FluidType, $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $ExplosionKubeEvent$Before, $SimpleLevelKubeEvent, $ExplosionKubeEvent$After } from "@package/dev/latvian/mods/kubejs/level";
import { $NumberFormatType } from "@package/net/minecraft/network/chat/numbers";
import { $CriterionTrigger } from "@package/net/minecraft/advancements";
import { $MountedFluidStorageType } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { RegistryTypes } from "@special/types";
import { $Feature, $ConfiguredFeature } from "@package/net/minecraft/world/level/levelgen/feature";
import { $SpecialRecipeSerializerManager } from "@package/dev/latvian/mods/kubejs/recipe/special";
import { $ForceGroup } from "@package/dev/ryanhcode/sable/api/physics/force";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $FanProcessingType } from "@package/com/simibubi/create/content/kinetics/fan/processing";
import { $CustomMapData$Type } from "@package/net/mehvahdjukaar/moonlight/api/map";
import { $PotatoCannonProjectileType } from "@package/com/simibubi/create/api/equipment/potatoCannon";
import { $TrimPattern, $TrimMaterial } from "@package/net/minecraft/world/item/armortrim";
import { $FlamethrowerFuelType } from "@package/com/drmangotea/tfmg/content/items/weapons/flamethrover";
import { $LootScoreProviderType } from "@package/net/minecraft/world/level/storage/loot/providers/score";
import { $Electrode } from "@package/com/drmangotea/tfmg/content/machinery/vat/electrode_holder/electrode";
import { $Item, $CreativeModeTab, $JukeboxSong, $ArmorMaterial, $ItemStack_, $Instrument } from "@package/net/minecraft/world/item";
import { $TrunkPlacerType } from "@package/net/minecraft/world/level/levelgen/feature/trunkplacers";
import { $Bandlands } from "@package/dev/worldgen/lithostitched/impl/worldgen/bandlands";
import { $MultiNoiseBiomeSourceParameterList, $Biome } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorPreset } from "@package/net/minecraft/world/level/levelgen/flat";
import { $StructureProcessorList, $StructureProcessorType, $PosRuleTestType, $RuleTestType } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ServerKubeEvent, $CommandKubeEvent, $BasicCommandKubeEvent } from "@package/dev/latvian/mods/kubejs/server";
import { $MemoryModuleType } from "@package/net/minecraft/world/entity/ai/memory";
import { $GeneratedDataStage_ } from "@package/dev/latvian/mods/kubejs/script/data";
import { $CompostableRecipesKubeEvent, $ModifyCraftingItemKubeEvent, $AfterRecipesLoadedKubeEvent, $RecipesKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe";
import { $IntProviderType, $FloatProviderType } from "@package/net/minecraft/util/valueproviders";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Region } from "@package/dev/worldgen/lithostitched/impl/worldgen/biomeinjector/region";
import { $MLMapDecorationType } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";
import { $LootNumberProviderType } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $FoliagePlacerType } from "@package/net/minecraft/world/level/levelgen/feature/foliageplacers";
import { $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType } from "@package/dev/ryanhcode/sable/physics/config/block_properties";
import { $CustomSituationalMusic } from "@package/dev/eriksonn/aeronautics/api";
import { $ResourceFileEditor$Factory } from "@package/foundry/veil/api/resource/editor";
import { $ChestKubeEvent, $PlayerClonedKubeEvent, $StageChangedEvent, $SimplePlayerKubeEvent, $PlayerAdvancementKubeEvent, $PlayerRespawnedKubeEvent, $PlayerChatReceivedKubeEvent, $InventoryChangedKubeEvent, $InventoryKubeEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $EmitterShape } from "@package/foundry/veil/api/quasar/emitters/shape";
import { $RenderStyle } from "@package/foundry/veil/api/quasar/particle";
import { $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $SoftFluid } from "@package/net/mehvahdjukaar/moonlight/api/fluids";
import { $DensityFunction, $SurfaceRules$RuleSource, $NoiseGeneratorSettings } from "@package/net/minecraft/world/level/levelgen";
import { $WorldSavedDataType } from "@package/net/mehvahdjukaar/moonlight/api/misc";
import { $CommandRegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/command";
import { $FeatureSizeType } from "@package/net/minecraft/world/level/levelgen/feature/featuresize";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $TreeDecoratorType } from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
import { $QuestObjectStartedKubeEvent, $QuestObjectCompletedKubeEvent, $CustomRewardKubeEvent, $CustomTaskKubeEvent } from "@package/dev/ftb/mods/ftbxmodcompat/neoforge/ftbquests/kubejs";
import { $BlockDropsKubeEvent, $BlockPlacedKubeEvent, $BlockRightClickedKubeEvent, $BlockPickedKubeEvent, $DetectorBlockKubeEvent, $RandomTickKubeEvent, $FarmlandTrampledKubeEvent, $BlockStoppedFallingKubeEvent, $BlockBrokenKubeEvent, $BlockLeftClickedKubeEvent, $BlockStartedFallingKubeEvent } from "@package/dev/latvian/mods/kubejs/block";
import { $WorldgenModifier } from "@package/dev/worldgen/lithostitched/api/worldgen/modifier";
import { $LootItemFunctionType } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $VillagerType, $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $EnchantmentProvider } from "@package/net/minecraft/world/item/enchantment/providers";
import { $ModuleType } from "@package/foundry/veil/api/quasar/data/module";
import { $DisplaySource, $DisplayTarget } from "@package/com/simibubi/create/api/behaviour/display";
import { $ArgumentTypeInfo } from "@package/net/minecraft/commands/synchronization";
import { $BiomeInjector } from "@package/dev/worldgen/lithostitched/api/worldgen/biomeinjector";
import { $BannerPattern, $DecoratedPotPattern, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
export * as registry from "@side-only/server/events/registry";
export * as recipes from "@side-only/server/events/recipes";

declare module "@side-only/server/events" {
    export class TagEvent<T> extends $TagKubeEvent {
        get(tag: RegistryTypes.ResolveTag<T>): TagWrapper<T>;
        removeAll(tag: RegistryTypes.ResolveTag<T>): TagWrapper<T>;
        add(tag: RegistryTypes.ResolveTag<T>, ...values: RegistryTypes.ResolveObject<T>[]): TagWrapper<T>;
        remove(tag: RegistryTypes.ResolveTag<T>, ...values: RegistryTypes.ResolveObject<T>[]): TagWrapper<T>;
        removeAllTagsFrom(...values: RegistryTypes.ResolveObject<T>[]): void;
    }
    export class TagWrapper<T> extends $TagWrapper {
        add(...values: RegistryTypes.ResolveObject<T>[]): T;
        remove(...values: RegistryTypes.ResolveObject<T>[]): T;
        removeAll(): void;
    }
}

export {};

declare global {
    namespace ServerEvents {
        function recipeMappingRegistry(handler: ((event: $RecipeMappingRegistry) => void)): void;
        function recipes(handler: ((event: $RecipesKubeEvent) => void)): void;
        function specialRecipeSerializers(handler: ((event: $SpecialRecipeSerializerManager) => void)): void;
        function compostableRecipes(handler: ((event: $CompostableRecipesKubeEvent) => void)): void;
        function recipeSchemaRegistry(handler: ((event: $RecipeSchemaRegistry) => void)): void;
        function modifyRecipeResult(extra: string, handler: ((event: $ModifyCraftingItemKubeEvent) => void)): void;
        function tick(handler: ((event: $ServerKubeEvent) => void)): void;
        function command(extra: string, handler: ((event: $CommandKubeEvent) => void)): void;
        function command(handler: ((event: $CommandKubeEvent) => void)): void;
        function loaded(handler: ((event: $ServerKubeEvent) => void)): void;
        function commandRegistry(handler: ((event: $CommandRegistryKubeEvent) => void)): void;
        function afterRecipes(handler: ((event: $AfterRecipesLoadedKubeEvent) => void)): void;
        function unloaded(handler: ((event: $ServerKubeEvent) => void)): void;
        function modifyRecipeIngredient(extra: string, handler: ((event: $ModifyCraftingItemKubeEvent) => void)): void;
        function basicCommand(extra: string, handler: ((event: $BasicCommandKubeEvent) => void)): void;
        function generateData(extra: $GeneratedDataStage_, handler: ((event: $KubeDataGenerator) => void)): void;
        function basicPublicCommand(extra: string, handler: ((event: $BasicCommandKubeEvent) => void)): void;
    }
    namespace ServerEvents {
        function registry(type: "painting_variant", handler: ((event: PaintingVariant) => void)): void;
        function registry(type: "jukebox_song", handler: ((event: JukeboxSong) => void)): void;
    }
    namespace FTBTeamsEvents {
        function playerJoinedParty(handler: ((event: $PlayerTeamKubeEvent) => void)): void;
        function playerLeftParty(handler: ((event: $PlayerTeamKubeEvent) => void)): void;
    }
    namespace EntityEvents {
        /**
         * Invoked after an entity is hurt by a damage source.
         */
        function afterHurt(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $AfterLivingEntityHurtKubeEvent) => void)): void;
        /**
         * Invoked after an entity is hurt by a damage source.
         */
        function afterHurt(handler: ((event: $AfterLivingEntityHurtKubeEvent) => void)): void;
        /**
         * Invoked when an entity is about to be added to the world.
         * 
         * This event also fires for existing entities when they are loaded from a save.
         */
        function spawned(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $EntitySpawnedKubeEvent) => void)): void;
        /**
         * Invoked when an entity is about to be added to the world.
         * 
         * This event also fires for existing entities when they are loaded from a save.
         */
        function spawned(handler: ((event: $EntitySpawnedKubeEvent) => void)): void;
        function drops(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $LivingEntityDropsKubeEvent) => void)): void;
        function drops(handler: ((event: $LivingEntityDropsKubeEvent) => void)): void;
        /**
         * Invoked before an entity is spawned into the world.
         * 
         * Only entities from a `BaseSpawner` or world generation will trigger this event.
         */
        function checkSpawn(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $CheckLivingEntitySpawnKubeEvent) => void)): void;
        /**
         * Invoked before an entity is spawned into the world.
         * 
         * Only entities from a `BaseSpawner` or world generation will trigger this event.
         */
        function checkSpawn(handler: ((event: $CheckLivingEntitySpawnKubeEvent) => void)): void;
        /**
         * Invoked before a living entity dies.
         * 
         * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
         */
        function death(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $LivingEntityDeathKubeEvent) => void)): void;
        /**
         * Invoked before a living entity dies.
         * 
         * **NOTE**: You need to set hp to > 0 besides cancelling the event to prevent the entity from dying.
         */
        function death(handler: ((event: $LivingEntityDeathKubeEvent) => void)): void;
        /**
         * Invoked before an entity is hurt by a damage source.
         */
        function beforeHurt(extra: $ResourceKey_<$EntityType<any>>, handler: ((event: $BeforeLivingEntityHurtKubeEvent) => void)): void;
        /**
         * Invoked before an entity is hurt by a damage source.
         */
        function beforeHurt(handler: ((event: $BeforeLivingEntityHurtKubeEvent) => void)): void;
    }
    namespace BlockEvents {
        /**
         * Invoked when a block is destroyed by a player.
         */
        function broken(extra: $ResourceKey_<$Block>, handler: ((event: $BlockBrokenKubeEvent) => void)): void;
        /**
         * Invoked when a block is destroyed by a player.
         */
        function broken(handler: ((event: $BlockBrokenKubeEvent) => void)): void;
        /**
         * Invoked when a block is placed.
         */
        function placed(extra: $ResourceKey_<$Block>, handler: ((event: $BlockPlacedKubeEvent) => void)): void;
        /**
         * Invoked when a block is placed.
         */
        function placed(handler: ((event: $BlockPlacedKubeEvent) => void)): void;
        /**
         * Invoked when a player left clicks on a block.
         */
        function leftClicked(extra: $ResourceKey_<$Block>, handler: ((event: $BlockLeftClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player left clicks on a block.
         */
        function leftClicked(handler: ((event: $BlockLeftClickedKubeEvent) => void)): void;
        function randomTick(extra: $ResourceKey_<$Block>, handler: ((event: $RandomTickKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on a block.
         */
        function rightClicked(extra: $ResourceKey_<$Block>, handler: ((event: $BlockRightClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on a block.
         */
        function rightClicked(handler: ((event: $BlockRightClickedKubeEvent) => void)): void;
        /**
         * Invoked when a falling block starts to fall.
         */
        function startedFalling(extra: $ResourceKey_<$Block>, handler: ((event: $BlockStartedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a falling block starts to fall.
         */
        function startedFalling(handler: ((event: $BlockStartedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorPowered(extra: string, handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorPowered(handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when an entity attempts to trample farmland.
         */
        function farmlandTrampled(extra: $ResourceKey_<$Block>, handler: ((event: $FarmlandTrampledKubeEvent) => void)): void;
        /**
         * Invoked when an entity attempts to trample farmland.
         */
        function farmlandTrampled(handler: ((event: $FarmlandTrampledKubeEvent) => void)): void;
        /**
         * Invoked when a falling block finishes falling.
         */
        function stoppedFalling(extra: $ResourceKey_<$Block>, handler: ((event: $BlockStoppedFallingKubeEvent) => void)): void;
        /**
         * Invoked when a falling block finishes falling.
         */
        function stoppedFalling(handler: ((event: $BlockStoppedFallingKubeEvent) => void)): void;
        /**
         * Modify dropped items and xp from block.
         */
        function drops(extra: $ResourceKey_<$Block>, handler: ((event: $BlockDropsKubeEvent) => void)): void;
        /**
         * Modify dropped items and xp from block.
         */
        function drops(handler: ((event: $BlockDropsKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorUnpowered(extra: string, handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorUnpowered(handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when player middle-clicks on a block.
         */
        function picked(extra: $ResourceKey_<$Block>, handler: ((event: $BlockPickedKubeEvent) => void)): void;
        /**
         * Invoked when player middle-clicks on a block.
         */
        function picked(handler: ((event: $BlockPickedKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorChanged(extra: string, handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        /**
         * Invoked when a detector block registered in KubeJS receives a block update.
         * 
         * `Powered`/`Unpowered` event will be fired when the detector block is powered/unpowered.
         */
        function detectorChanged(handler: ((event: $DetectorBlockKubeEvent) => void)): void;
        function blockEntityTick(extra: $ResourceKey_<$Block>, handler: ((event: $BlockEntityTickKubeEvent) => void)): void;
    }
    namespace FTBQuestsEvents {
        function customReward(extra: string, handler: ((event: $CustomRewardKubeEvent) => void)): void;
        function customReward(handler: ((event: $CustomRewardKubeEvent) => void)): void;
        function started(extra: string, handler: ((event: $QuestObjectStartedKubeEvent) => void)): void;
        function started(handler: ((event: $QuestObjectStartedKubeEvent) => void)): void;
        function completed(extra: string, handler: ((event: $QuestObjectCompletedKubeEvent) => void)): void;
        function completed(handler: ((event: $QuestObjectCompletedKubeEvent) => void)): void;
        function customTask(extra: string, handler: ((event: $CustomTaskKubeEvent) => void)): void;
        function customTask(handler: ((event: $CustomTaskKubeEvent) => void)): void;
    }
    namespace ServerEvents {
        function tags(type: "worldgen/placement_modifier_type", handler: ((event: TagEvent<$PlacementModifierType<any>>) => void)): void;
        function tags(type: "neoforge:biome_modifier_serializers", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "attribute", handler: ((event: TagEvent<$Attribute>) => void)): void;
        function tags(type: "item_sub_predicate_type", handler: ((event: TagEvent<$ItemSubPredicate$Type<any>>) => void)): void;
        function tags(type: "enchantment_value_effect_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "simulated:property_tooltip", handler: ((event: TagEvent<$BlockPropertiesTooltip$Entry>) => void)): void;
        function tags(type: "item", handler: ((event: TagEvent<$Item>) => void)): void;
        function tags(type: "neoforge:fluid_type", handler: ((event: TagEvent<$FluidType>) => void)): void;
        function tags(type: "worldgen/configured_feature", handler: ((event: TagEvent<$ConfiguredFeature<any, any>>) => void)): void;
        function tags(type: "worldgen/feature_size_type", handler: ((event: TagEvent<$FeatureSizeType<any>>) => void)): void;
        function tags(type: "armor_material", handler: ((event: TagEvent<$ArmorMaterial>) => void)): void;
        function tags(type: "worldgen/flat_level_generator_preset", handler: ((event: TagEvent<$FlatLevelGeneratorPreset>) => void)): void;
        function tags(type: "worldgen/multi_noise_biome_source_parameter_list", handler: ((event: TagEvent<$MultiNoiseBiomeSourceParameterList>) => void)): void;
        function tags(type: "lithostitched:processor_condition_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "map_decoration_type", handler: ((event: TagEvent<$MapDecorationType>) => void)): void;
        function tags(type: "aeronautics:levitite_crystal_propagation_context", handler: ((event: TagEvent<$CrystalPropagationContext>) => void)): void;
        function tags(type: "sable:force_groups", handler: ((event: TagEvent<$ForceGroup>) => void)): void;
        function tags(type: "particle_type", handler: ((event: TagEvent<$ParticleType<any>>) => void)): void;
        function tags(type: "worldgen/structure_type", handler: ((event: TagEvent<$StructureType<any>>) => void)): void;
        function tags(type: "lithostitched:biome_injector_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "create:potato_projectile/render_mode", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "veil:quasar/render_style", handler: ((event: TagEvent<$RenderStyle>) => void)): void;
        function tags(type: "int_provider_type", handler: ((event: TagEvent<$IntProviderType<any>>) => void)): void;
        function tags(type: "worldgen/tree_decorator_type", handler: ((event: TagEvent<$TreeDecoratorType<any>>) => void)): void;
        function tags(type: "worldgen/feature", handler: ((event: TagEvent<$Feature<any>>) => void)): void;
        function tags(type: "mob_effect", handler: ((event: TagEvent<$MobEffect>) => void)): void;
        function tags(type: "enchantment_location_based_effect_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "loot_pool_entry_type", handler: ((event: TagEvent<$LootPoolEntryType>) => void)): void;
        function tags(type: "fluid", handler: ((event: TagEvent<$Fluid>) => void)): void;
        function tags(type: "veil:quasar/module_type/render", handler: ((event: TagEvent<$ModuleType<any>>) => void)): void;
        function tags(type: "worldgen/block_state_provider_type", handler: ((event: TagEvent<$BlockStateProviderType<any>>) => void)): void;
        function tags(type: "lithostitched:fast_noise_config_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "loot_score_provider_type", handler: ((event: TagEvent<$LootScoreProviderType>) => void)): void;
        function tags(type: "create:mounted_fluid_storage_type", handler: ((event: TagEvent<$MountedFluidStorageType<any>>) => void)): void;
        function tags(type: "rule_block_entity_modifier", handler: ((event: TagEvent<$RuleBlockEntityModifierType<any>>) => void)): void;
        function tags(type: "lithostitched:template_list", handler: ((event: TagEvent<$TemplateList>) => void)): void;
        function tags(type: "worldgen/structure_set", handler: ((event: TagEvent<$StructureSet>) => void)): void;
        function tags(type: "worldgen/noise_settings", handler: ((event: TagEvent<$NoiseGeneratorSettings>) => void)): void;
        function tags(type: "veil:post_pipeline_stage", handler: ((event: TagEvent<$PostPipelineStageRegistry$PipelineType<any>>) => void)): void;
        function tags(type: "point_of_interest_type", handler: ((event: TagEvent<$PoiType>) => void)): void;
        function tags(type: "schedule", handler: ((event: TagEvent<$Schedule>) => void)): void;
        function tags(type: "command_argument_type", handler: ((event: TagEvent<$ArgumentTypeInfo<any, any>>) => void)): void;
        function tags(type: "create:mounted_item_storage_type", handler: ((event: TagEvent<$MountedItemStorageType<any>>) => void)): void;
        function tags(type: "create:display_target", handler: ((event: TagEvent<$DisplayTarget>) => void)): void;
        function tags(type: "aeronautics:lifting_gas_type", handler: ((event: TagEvent<$LiftingGasType>) => void)): void;
        function tags(type: "trim_pattern", handler: ((event: TagEvent<$TrimPattern>) => void)): void;
        function tags(type: "chat_type", handler: ((event: TagEvent<$ChatType>) => void)): void;
        function tags(type: "instrument", handler: ((event: TagEvent<$Instrument>) => void)): void;
        function tags(type: "veil:render_type_layer", handler: ((event: TagEvent<$RenderTypeLayerRegistry$LayerType<any>>) => void)): void;
        function tags(type: "villager_type", handler: ((event: TagEvent<$VillagerType>) => void)): void;
        function tags(type: "veil:shader_buffer", handler: ((event: TagEvent<$VeilShaderBufferLayout<any>>) => void)): void;
        function tags(type: "veil:light_type", handler: ((event: TagEvent<$LightTypeRegistry$LightType<any>>) => void)): void;
        function tags(type: "veil:property_modifier", handler: ((event: TagEvent<$PropertyModifierRegistry$PropertyModifierType<any, any>>) => void)): void;
        function tags(type: "worldgen/density_function_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "veil:property", handler: ((event: TagEvent<$PropertyRegistry$PropertyType<any, any>>) => void)): void;
        function tags(type: "height_provider_type", handler: ((event: TagEvent<$HeightProviderType<any>>) => void)): void;
        function tags(type: "worldgen/density_function", handler: ((event: TagEvent<$DensityFunction>) => void)): void;
        function tags(type: "damage_type", handler: ((event: TagEvent<$DamageType>) => void)): void;
        function tags(type: "number_format_type", handler: ((event: TagEvent<$NumberFormatType<any>>) => void)): void;
        function tags(type: "create:contraption_type", handler: ((event: TagEvent<$ContraptionType>) => void)): void;
        function tags(type: "lithostitched:biome_injector", handler: ((event: TagEvent<$BiomeInjector>) => void)): void;
        function tags(type: "worldgen/foliage_placer_type", handler: ((event: TagEvent<$FoliagePlacerType<any>>) => void)): void;
        function tags(type: "lithostitched:worldgen_modifier", handler: ((event: TagEvent<$WorldgenModifier>) => void)): void;
        function tags(type: "potion", handler: ((event: TagEvent<$Potion>) => void)): void;
        function tags(type: "jukebox_song", handler: ((event: TagEvent<$JukeboxSong>) => void)): void;
        function tags(type: "enchantment_entity_effect_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/chunk_generator", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "simulated:navigation_target", handler: ((event: TagEvent<$NavigationTarget>) => void)): void;
        function tags(type: "moonlight:custom_map_data_types", handler: ((event: TagEvent<$CustomMapData$Type<any, any>>) => void)): void;
        function tags(type: "worldgen/material_rule", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "neoforge:global_loot_modifier_serializers", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/biome", handler: ((event: TagEvent<$Biome>) => void)): void;
        function tags(type: "enchantment_level_based_value_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "entity_type", handler: ((event: TagEvent<$EntityType<any>>) => void)): void;
        function tags(type: "enchantment_provider", handler: ((event: TagEvent<$EnchantmentProvider>) => void)): void;
        function tags(type: "recipe_type", handler: ((event: TagEvent<$RecipeType<any>>) => void)): void;
        function tags(type: "worldgen/structure_processor", handler: ((event: TagEvent<$StructureProcessorType<any>>) => void)): void;
        function tags(type: "creative_mode_tab", handler: ((event: TagEvent<$CreativeModeTab>) => void)): void;
        function tags(type: "worldgen/structure_placement", handler: ((event: TagEvent<$StructurePlacementType<any>>) => void)): void;
        function tags(type: "sable:physics_block_properties", handler: ((event: TagEvent<$PhysicsBlockPropertyTypes$PhysicsBlockPropertyType<any>>) => void)): void;
        function tags(type: "worldgen/pool_alias_binding", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "loot_function_type", handler: ((event: TagEvent<$LootItemFunctionType<any>>) => void)): void;
        function tags(type: "worldgen/structure_pool_element", handler: ((event: TagEvent<$StructurePoolElementType<any>>) => void)): void;
        function tags(type: "loot_nbt_provider_type", handler: ((event: TagEvent<$LootNbtProviderType>) => void)): void;
        function tags(type: "veil:quasar/module_type/init", handler: ((event: TagEvent<$ModuleType<any>>) => void)): void;
        function tags(type: "veil:quasar/module_type/update", handler: ((event: TagEvent<$ModuleType<any>>) => void)): void;
        function tags(type: "worldgen/material_condition", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "loot_number_provider_type", handler: ((event: TagEvent<$LootNumberProviderType>) => void)): void;
        function tags(type: "recipe_serializer", handler: ((event: TagEvent<$RecipeSerializer<any>>) => void)): void;
        function tags(type: "position_source_type", handler: ((event: TagEvent<$PositionSourceType<any>>) => void)): void;
        function tags(type: "corgilib:condition", handler: ((event: TagEvent<$Codec<any>>) => void)): void;
        function tags(type: "stat_type", handler: ((event: TagEvent<$StatType<any>>) => void)): void;
        function tags(type: "create:display_source", handler: ((event: TagEvent<$DisplaySource>) => void)): void;
        function tags(type: "banner_pattern", handler: ((event: TagEvent<$BannerPattern>) => void)): void;
        function tags(type: "neoforge:ingredient_serializer", handler: ((event: TagEvent<$IngredientType<any>>) => void)): void;
        function tags(type: "neoforge:entity_data_serializers", handler: ((event: TagEvent<$EntityDataSerializer<any>>) => void)): void;
        function tags(type: "lithostitched:surface_rule", handler: ((event: TagEvent<$SurfaceRules$RuleSource>) => void)): void;
        function tags(type: "moonlight:soft_fluid", handler: ((event: TagEvent<$SoftFluid>) => void)): void;
        function tags(type: "moonlight:map_marker", handler: ((event: TagEvent<$MLMapDecorationType<any, any>>) => void)): void;
        function tags(type: "neoforge:attachment_types", handler: ((event: TagEvent<$AttachmentType<any>>) => void)): void;
        function tags(type: "entity_sub_predicate_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/processor_list", handler: ((event: TagEvent<$StructureProcessorList>) => void)): void;
        function tags(type: "worldgen/structure", handler: ((event: TagEvent<$Structure>) => void)): void;
        function tags(type: "painting_variant", handler: ((event: TagEvent<$PaintingVariant>) => void)): void;
        function tags(type: "data_component_type", handler: ((event: TagEvent<$DataComponentType<any>>) => void)): void;
        function tags(type: "create:potato_projectile/block_hit_action", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "corgilib:blending_function", handler: ((event: TagEvent<$Codec<any>>) => void)): void;
        function tags(type: "create:potato_projectile/entity_hit_action", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "create:package_port_target_type", handler: ((event: TagEvent<$PackagePortTargetType>) => void)): void;
        function tags(type: "lithostitched:placement_condition_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "worldgen/placed_feature", handler: ((event: TagEvent<$PlacedFeature>) => void)): void;
        function tags(type: "create:potato_projectile/type", handler: ((event: TagEvent<$PotatoCannonProjectileType>) => void)): void;
        function tags(type: "wolf_variant", handler: ((event: TagEvent<$WolfVariant>) => void)): void;
        function tags(type: "villager_profession", handler: ((event: TagEvent<$VillagerProfession>) => void)): void;
        function tags(type: "tfmg:electrodes", handler: ((event: TagEvent<$Electrode>) => void)): void;
        function tags(type: "rule_test", handler: ((event: TagEvent<$RuleTestType<any>>) => void)): void;
        function tags(type: "sensor_type", handler: ((event: TagEvent<$SensorType<any>>) => void)): void;
        function tags(type: "enchantment_provider_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "create:fan_processing_type", handler: ((event: TagEvent<$FanProcessingType>) => void)): void;
        function tags(type: "worldgen/root_placer_type", handler: ((event: TagEvent<$RootPlacerType<any>>) => void)): void;
        function tags(type: "tfmg:flamethrower_fuel/type", handler: ((event: TagEvent<$FlamethrowerFuelType>) => void)): void;
        function tags(type: "create:item_attribute_type", handler: ((event: TagEvent<$ItemAttributeType>) => void)): void;
        function tags(type: "aeronautics:custom_situational_music", handler: ((event: TagEvent<$CustomSituationalMusic>) => void)): void;
        function tags(type: "create:arm_interaction_point_type", handler: ((event: TagEvent<$ArmInteractionPointType>) => void)): void;
        function tags(type: "veil:quasar/emitter_shape", handler: ((event: TagEvent<$EmitterShape>) => void)): void;
        function tags(type: "activity", handler: ((event: TagEvent<$Activity>) => void)): void;
        function tags(type: "dimension", handler: ((event: TagEvent<$Level>) => void)): void;
        function tags(type: "decorated_pot_pattern", handler: ((event: TagEvent<$DecoratedPotPattern>) => void)): void;
        function tags(type: "tfmg:cable_types", handler: ((event: TagEvent<$CableType>) => void)): void;
        function tags(type: "trigger_type", handler: ((event: TagEvent<$CriterionTrigger<any>>) => void)): void;
        function tags(type: "sound_event", handler: ((event: TagEvent<$SoundEvent>) => void)): void;
        function tags(type: "memory_module_type", handler: ((event: TagEvent<$MemoryModuleType<any>>) => void)): void;
        function tags(type: "block_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "lithostitched:modifier_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "lithostitched:bandlands_band_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "float_provider_type", handler: ((event: TagEvent<$FloatProviderType<any>>) => void)): void;
        function tags(type: "veil:resource_editor", handler: ((event: TagEvent<$ResourceFileEditor$Factory<any>>) => void)): void;
        function tags(type: "enchantment_effect_component_type", handler: ((event: TagEvent<$DataComponentType<any>>) => void)): void;
        function tags(type: "trim_material", handler: ((event: TagEvent<$TrimMaterial>) => void)): void;
        function tags(type: "worldgen/noise", handler: ((event: TagEvent<$NormalNoise$NoiseParameters>) => void)): void;
        function tags(type: "neoforge:structure_modifier", handler: ((event: TagEvent<$StructureModifier>) => void)): void;
        function tags(type: "worldgen/configured_carver", handler: ((event: TagEvent<$ConfiguredWorldCarver<any>>) => void)): void;
        function tags(type: "moonlight:villager_trades", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "game_event", handler: ((event: TagEvent<$GameEvent>) => void)): void;
        function tags(type: "block_predicate_type", handler: ((event: TagEvent<$BlockPredicateType<any>>) => void)): void;
        function tags(type: "neoforge:holder_set_type", handler: ((event: TagEvent<$HolderSetType>) => void)): void;
        function tags(type: "worldgen/world_preset", handler: ((event: TagEvent<$WorldPreset>) => void)): void;
        function tags(type: "neoforge:condition_codecs", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "chunk_status", handler: ((event: TagEvent<$ChunkStatus>) => void)): void;
        function tags(type: "neoforge:fluid_ingredient_type", handler: ((event: TagEvent<$FluidIngredientType<any>>) => void)): void;
        function tags(type: "worldgen/biome_source", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "neoforge:structure_modifier_serializers", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "frog_variant", handler: ((event: TagEvent<$FrogVariant>) => void)): void;
        function tags(type: "lithostitched:load_predicate_type", handler: ((event: TagEvent<$MapCodec<any>>) => void)): void;
        function tags(type: "menu", handler: ((event: TagEvent<$MenuType<any>>) => void)): void;
        function tags(type: "dimension_type", handler: ((event: TagEvent<$DimensionType>) => void)): void;
        function tags(type: "enchantment", handler: ((event: TagEvent<$Enchantment>) => void)): void;
        function tags(type: "loot_condition_type", handler: ((event: TagEvent<$LootItemConditionType>) => void)): void;
        function tags(type: "worldgen/carver", handler: ((event: TagEvent<$WorldCarver<any>>) => void)): void;
        function tags(type: "worldgen/template_pool", handler: ((event: TagEvent<$StructureTemplatePool>) => void)): void;
        function tags(type: "block_entity_type", handler: ((event: TagEvent<$BlockEntityType<any>>) => void)): void;
        function tags(type: "worldgen/trunk_placer_type", handler: ((event: TagEvent<$TrunkPlacerType<any>>) => void)): void;
        function tags(type: "moonlight:world_saved_data_type", handler: ((event: TagEvent<$WorldSavedDataType<any>>) => void)): void;
        function tags(type: "block", handler: ((event: TagEvent<$Block>) => void)): void;
        function tags(type: "ae2:keytypes", handler: ((event: TagEvent<$AEKeyType>) => void)): void;
        function tags(type: "lithostitched:fast_noise_config", handler: ((event: TagEvent<$FastNoiseConfig>) => void)): void;
        function tags(type: "pos_rule_test", handler: ((event: TagEvent<$PosRuleTestType<any>>) => void)): void;
        function tags(type: "worldgen/structure_piece", handler: ((event: TagEvent<$StructurePieceType>) => void)): void;
        function tags(type: "lithostitched:bandlands", handler: ((event: TagEvent<$Bandlands>) => void)): void;
        function tags(type: "neoforge:biome_modifier", handler: ((event: TagEvent<$BiomeModifier>) => void)): void;
        function tags(type: "lithostitched:region", handler: ((event: TagEvent<$Region>) => void)): void;
        function tags(type: "cat_variant", handler: ((event: TagEvent<$CatVariant>) => void)): void;
    }
    export namespace RecipeViewerEvents {
        function addEntries(extra: "item", handler: ((event: $AddEntriesKubeEvent<$ItemStack_>) => void)): void;
        function addInformation(extra: "item", handler: ((event: $AddInformationKubeEvent<$ItemPredicate_>) => void)): void;
        function groupEntries(extra: "item", handler: ((event: $GroupEntriesKubeEvent<$ItemPredicate_>) => void)): void;
        function registerSubtypes(extra: "item", handler: ((event: $RegisterSubtypesKubeEvent<$ItemPredicate_>) => void)): void;
        function removeEntries(extra: "item", handler: ((event: $RemoveEntriesKubeEvent<$ItemPredicate_>) => void)): void;
        function removeEntriesCompletely(extra: "item", handler: ((event: $RemoveEntriesKubeEvent<$ItemPredicate_>) => void)): void;
        function removeRecipes(extra: "item", handler: ((event: $RemoveRecipesKubeEvent) => void)): void;
        function addEntries(extra: "fluid", handler: ((event: $AddEntriesKubeEvent<$FluidStack_>) => void)): void;
        function addInformation(extra: "fluid", handler: ((event: $AddInformationKubeEvent<$FluidIngredient_>) => void)): void;
        function groupEntries(extra: "fluid", handler: ((event: $GroupEntriesKubeEvent<$FluidIngredient_>) => void)): void;
        function registerSubtypes(extra: "fluid", handler: ((event: $RegisterSubtypesKubeEvent<$FluidIngredient_>) => void)): void;
        function removeEntries(extra: "fluid", handler: ((event: $RemoveEntriesKubeEvent<$FluidIngredient_>) => void)): void;
        function removeEntriesCompletely(extra: "fluid", handler: ((event: $RemoveEntriesKubeEvent<$FluidIngredient_>) => void)): void;
        function removeRecipes(extra: "fluid", handler: ((event: $RemoveRecipesKubeEvent) => void)): void;
    }
    namespace FTBFilterSystemEvents {
        function customFilter(extra: string, handler: ((event: $CustomFilterKubeEvent) => void)): void;
        function customFilter(handler: ((event: $CustomFilterKubeEvent) => void)): void;
    }
    namespace NetworkEvents {
        /**
         * Invoked when a network packet is received.
         * 
         * Note that the behaviour of this event is depending on the **script type**.
         * 
         * In `server_scripts`, this event is invoked on the server side when a packet is received from a client.
         * 
         * In `client_scripts`, this event is invoked on the client side when a packet is received from the server.
         */
        function dataReceived(extra: string, handler: ((event: $NetworkKubeEvent) => void)): void;
    }
    namespace LevelEvents {
        function loaded(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function loaded(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function unloaded(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function unloaded(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        /**
         * Invoked right before an explosion happens.
         */
        function beforeExplosion(extra: $ResourceKey_<$Level>, handler: ((event: $ExplosionKubeEvent$Before) => void)): void;
        /**
         * Invoked right before an explosion happens.
         */
        function beforeExplosion(handler: ((event: $ExplosionKubeEvent$Before) => void)): void;
        function saved(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function saved(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function tick(extra: $ResourceKey_<$Level>, handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        function tick(handler: ((event: $SimpleLevelKubeEvent) => void)): void;
        /**
         * Invoked right after an explosion happens.
         */
        function afterExplosion(extra: $ResourceKey_<$Level>, handler: ((event: $ExplosionKubeEvent$After) => void)): void;
        /**
         * Invoked right after an explosion happens.
         */
        function afterExplosion(handler: ((event: $ExplosionKubeEvent$After) => void)): void;
    }
    namespace ItemEvents {
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function rightClicked(extra: $ResourceKey_<$Item>, handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function rightClicked(handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player crafts an item.
         */
        function crafted(extra: $ResourceKey_<$Item>, handler: ((event: $ItemCraftedKubeEvent) => void)): void;
        /**
         * Invoked when a player crafts an item.
         */
        function crafted(handler: ((event: $ItemCraftedKubeEvent) => void)): void;
        /**
         * Invoked when a player drops an item.
         */
        function dropped(extra: $ResourceKey_<$Item>, handler: ((event: $ItemDroppedKubeEvent) => void)): void;
        /**
         * Invoked when a player drops an item.
         */
        function dropped(handler: ((event: $ItemDroppedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstRightClicked(extra: $ResourceKey_<$Item>, handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstRightClicked(handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function pickedUp(extra: $ResourceKey_<$Item>, handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function pickedUp(handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        function destroyed(extra: $ResourceKey_<$Item>, handler: ((event: $ItemDestroyedKubeEvent) => void)): void;
        function destroyed(handler: ((event: $ItemDestroyedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on an entity.
         */
        function entityInteracted(extra: $ResourceKey_<$Item>, handler: ((event: $ItemEntityInteractedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks on an entity.
         */
        function entityInteracted(handler: ((event: $ItemEntityInteractedKubeEvent) => void)): void;
        /**
         * Invoked when an entity eats food.
         */
        function foodEaten(extra: $ResourceKey_<$Item>, handler: ((event: $FoodEatenKubeEvent) => void)): void;
        /**
         * Invoked when an entity eats food.
         */
        function foodEaten(handler: ((event: $FoodEatenKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstLeftClicked(extra: $ResourceKey_<$Item>, handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player right clicks with an item **without targeting anything**.
         * 
         * Not to be confused with `BlockEvents.rightClick` or `ItemEvents.entityInteracted`.
         */
        function firstLeftClicked(handler: ((event: $ItemClickedKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function canPickUp(extra: $ResourceKey_<$Item>, handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        /**
         * Invoked when a player picks up an item. Cancelling (in `ItemEvents.canPickUp`) will prevent the item from being picked up.
         */
        function canPickUp(handler: ((event: $ItemPickedUpKubeEvent) => void)): void;
        /**
         * Invoked when an item is smelted by a player.
         */
        function smelted(extra: $ResourceKey_<$Item>, handler: ((event: $ItemSmeltedKubeEvent) => void)): void;
        /**
         * Invoked when an item is smelted by a player.
         */
        function smelted(handler: ((event: $ItemSmeltedKubeEvent) => void)): void;
        function modifyTooltips(handler: ((event: $ModifyItemTooltipsKubeEvent) => void)): void;
    }
    namespace PlayerEvents {
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestOpened(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $ChestKubeEvent) => void)): void;
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestOpened(handler: ((event: $ChestKubeEvent) => void)): void;
        function loggedOut(handler: ((event: $SimplePlayerKubeEvent) => void)): void;
        function tick(handler: ((event: $SimplePlayerKubeEvent) => void)): void;
        function stageRemoved(extra: string, handler: ((event: $StageChangedEvent) => void)): void;
        function stageRemoved(handler: ((event: $StageChangedEvent) => void)): void;
        /**
         * Invoked when a player respawns.
         * 
         * The reason of respawn can be either death or returning from the end.
         */
        function respawned(handler: ((event: $PlayerRespawnedKubeEvent) => void)): void;
        function decorateChat(handler: ((event: $PlayerChatReceivedKubeEvent) => void)): void;
        /**
         * Invoked when a player respawns.
         * 
         * The reason of respawn can be either death or returning from the end.
         */
        function cloned(handler: ((event: $PlayerClonedKubeEvent) => void)): void;
        function stageAdded(extra: string, handler: ((event: $StageChangedEvent) => void)): void;
        function stageAdded(handler: ((event: $StageChangedEvent) => void)): void;
        /**
         * Invoked when a player gets an advancement.
         */
        function advancement(extra: $ResourceLocation_, handler: ((event: $PlayerAdvancementKubeEvent) => void)): void;
        /**
         * Invoked when a player gets an advancement.
         */
        function advancement(handler: ((event: $PlayerAdvancementKubeEvent) => void)): void;
        function chat(handler: ((event: $PlayerChatReceivedKubeEvent) => void)): void;
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestClosed(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $ChestKubeEvent) => void)): void;
        /**
         * Invoked when a player opens a chest.
         * 
         * Same as `PlayerEvents.inventoryOpened`, but only for chests.
         */
        function chestClosed(handler: ((event: $ChestKubeEvent) => void)): void;
        function loggedIn(handler: ((event: $SimplePlayerKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryClosed(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $InventoryKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryClosed(handler: ((event: $InventoryKubeEvent) => void)): void;
        /**
         * Invoked when a player's inventory changes.
         */
        function inventoryChanged(extra: $ResourceKey_<$Item>, handler: ((event: $InventoryChangedKubeEvent) => void)): void;
        /**
         * Invoked when a player's inventory changes.
         */
        function inventoryChanged(handler: ((event: $InventoryChangedKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryOpened(extra: $ResourceKey_<$MenuType<any>>, handler: ((event: $InventoryKubeEvent) => void)): void;
        /**
         * Invoked when a player opens or closes a container.
         */
        function inventoryOpened(handler: ((event: $InventoryKubeEvent) => void)): void;
    }
}
