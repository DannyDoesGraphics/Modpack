import { $ItemLike } from "@package/net/minecraft/world/level";
import { $TagBuilder } from "@package/net/minecraft/tags";
import { $SoundDefinitionsProvider, $ExistingFileHelper, $AdvancementProvider, $DataMapProvider, $LanguageProvider, $AdvancementProvider$AdvancementGenerator, $BlockTagsProvider, $SpriteSourceProvider } from "@package/net/neoforged/neoforge/common/data";
import { $Item, $Tier, $AxeItem } from "@package/net/minecraft/world/item";
import { $BiomeTagsProvider, $ItemTagsProvider, $StructureTagsProvider, $TagsProvider$TagLookup_, $DamageTypeTagsProvider, $EnchantmentTagsProvider, $FluidTagsProvider, $EntityTypeTagsProvider } from "@package/net/minecraft/data/tags";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Map, $List_ } from "@package/java/util";
import { $CachedOutput_, $DataProvider, $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";
import { $Criterion } from "@package/net/minecraft/advancements";
import { $BiFunction_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootTableProvider } from "@package/net/minecraft/data/loot";
import { $VanillaRecipeProvider } from "@package/net/minecraft/data/recipes/packs";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $AdvancementSubProvider, $AdvancementSubProvider_ } from "@package/net/minecraft/data/advancements";

declare module "@package/net/neoforged/neoforge/common/data/internal" {
    export class $NeoForgeEnchantmentTagsProvider extends $EnchantmentTagsProvider {
        addTags(lookupProvider: $HolderLookup$Provider): void;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, existingFileHelper: $ExistingFileHelper);
    }
    /**
     * Currently used only for replacing shears item to shears_dig item ability
     */
    export class $NeoForgeLootTableProvider extends $LootTableProvider {
        constructor(packOutput: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $NeoForgeAdvancementProvider$NeoForgeAdvancementGenerator extends $Record implements $AdvancementProvider$AdvancementGenerator {
        toSubProvider(arg0: $ExistingFileHelper): $AdvancementSubProvider;
    }
    /**
     * Values that may be interpreted as {@link $NeoForgeAdvancementProvider$NeoForgeAdvancementGenerator}.
     */
    export type $NeoForgeAdvancementProvider$NeoForgeAdvancementGenerator_ = { vanillaProvider?: $AdvancementSubProvider_, criteriaReplacers?: $List_<$BiFunction_<$Criterion<never>, $HolderLookup$Provider, $Criterion<never>>>,  } | [vanillaProvider?: $AdvancementSubProvider_, criteriaReplacers?: $List_<$BiFunction_<$Criterion<never>, $HolderLookup$Provider, $Criterion<never>>>, ];
    export class $NeoForgeFluidTagsProvider extends $FluidTagsProvider {
        addTags(lookupProvider: $HolderLookup$Provider): void;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, existingFileHelper: $ExistingFileHelper);
    }
    export class $NeoForgeBiomeTagsProvider extends $BiomeTagsProvider {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, existingFileHelper: $ExistingFileHelper);
    }
    export class $NeoForgeRegistryOrderReportProvider implements $DataProvider {
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        constructor(output: $PackOutput);
        get name(): string;
    }
    export class $NeoForgeStructureTagsProvider extends $StructureTagsProvider {
        addTags(lookupProvider: $HolderLookup$Provider): void;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, existingFileHelper: $ExistingFileHelper);
    }
    export class $NeoForgeAdvancementProvider extends $AdvancementProvider {
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>, existingFileHelper: $ExistingFileHelper);
    }
    export class $NeoForgeDamageTypeTagsProvider extends $DamageTypeTagsProvider {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, existingFileHelper: $ExistingFileHelper);
    }
    export class $VanillaSoundDefinitionsProvider extends $SoundDefinitionsProvider {
        constructor(output: $PackOutput, helper: $ExistingFileHelper);
    }
    export class $NeoForgeDataMapsProvider$StrippablesAccess extends $AxeItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        tier: $Tier;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        /**
         * @deprecated
         */
        static STRIPPABLES: $Map<$Block, $Block>;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
    }
    export class $NeoForgeItemTagsProvider extends $ItemTagsProvider {
        addTags(lookupProvider: $HolderLookup$Provider): void;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, blockTagProvider: $CompletableFuture<$TagsProvider$TagLookup_<$Block>>, existingFileHelper: $ExistingFileHelper);
    }
    export class $NeoForgeSpriteSourceProvider extends $SpriteSourceProvider {
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, fileHelper: $ExistingFileHelper);
    }
    export class $NeoForgeBlockTagsProvider extends $BlockTagsProvider {
        addTags(p_256380_: $HolderLookup$Provider): void;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, existingFileHelper: $ExistingFileHelper);
    }
    export class $NeoForgeEntityTypeTagsProvider extends $EntityTypeTagsProvider {
        addTags(lookupProvider: $HolderLookup$Provider): void;
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(output: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>, existingFileHelper: $ExistingFileHelper);
    }
    export class $NeoForgeRecipeProvider extends $VanillaRecipeProvider {
        static LAPIS_SMELTABLES: $ImmutableList<$ItemLike>;
        advancementPathProvider: $PackOutput$PathProvider;
        static EMERALD_SMELTABLES: $ImmutableList<$ItemLike>;
        static COPPER_SMELTABLES: $ImmutableList<$ItemLike>;
        static REDSTONE_SMELTABLES: $ImmutableList<$ItemLike>;
        static COAL_SMELTABLES: $ImmutableList<$ItemLike>;
        static GOLD_SMELTABLES: $ImmutableList<$ItemLike>;
        static IRON_SMELTABLES: $ImmutableList<$ItemLike>;
        recipePathProvider: $PackOutput$PathProvider;
        static DIAMOND_SMELTABLES: $ImmutableList<$ItemLike>;
        constructor(packOutput: $PackOutput, provider: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $NeoForgeLanguageProvider extends $LanguageProvider {
        constructor(gen: $PackOutput);
    }
    export class $NeoForgeDataMapsProvider extends $DataMapProvider {
        constructor(packOutput: $PackOutput, lookupProvider: $CompletableFuture<$HolderLookup$Provider>);
    }
}
