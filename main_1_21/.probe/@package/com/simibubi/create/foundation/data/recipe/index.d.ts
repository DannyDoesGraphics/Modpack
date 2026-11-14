import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec_ } from "@package/com/mojang/serialization";
import { $RecipeSerializer, $Recipe, $RecipeHolder, $Ingredient, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RecipeOutput, $RecipeProvider } from "@package/net/minecraft/data/recipes";
import { $List, $Set } from "@package/java/util";
import { $PackOutput$PathProvider, $PackOutput, $DataGenerator } from "@package/net/minecraft/data";
import { $ManualApplicationRecipe } from "@package/com/simibubi/create/content/kinetics/deployer";
import { $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record } from "@package/java/lang";
import { $MechanicalCraftingRecipeGen, $BaseRecipeProvider$GeneratedRecipe, $HauntingRecipeGen, $SequencedAssemblyRecipeGen, $BaseRecipeProvider, $EmptyingRecipeGen, $FillingRecipeGen, $DatagenMod, $PressingRecipeGen, $WashingRecipeGen, $DeployingRecipeGen, $CompactingRecipeGen, $CuttingRecipeGen, $PolishingRecipeGen, $MillingRecipeGen, $MixingRecipeGen, $ItemApplicationRecipeGen, $CrushingRecipeGen } from "@package/com/simibubi/create/api/data/recipe";

declare module "@package/com/simibubi/create/foundation/data/recipe" {
    export class $CreateMixingRecipeGen extends $MixingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateDeployingRecipeGen extends $DeployingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreatePressingRecipeGen extends $PressingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateMechanicalCraftingRecipeGen extends $MechanicalCraftingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateStandardRecipeGen extends $BaseRecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateStandardRecipeGen$GeneratedRecipeBuilder {
    }
    export class $CommonMetal extends $Enum<$CommonMetal> {
        getName(arg0: $Mods_): string;
        static values(): $CommonMetal[];
        static valueOf(arg0: string): $CommonMetal;
        static of(arg0: $Mods_): $Set<$CommonMetal>;
        static URANIUM: $CommonMetal;
        static GOLD: $CommonMetal;
        mods: $Set<$Mods>;
        static SILVER: $CommonMetal;
        static PLATINUM: $CommonMetal;
        static COPPER: $CommonMetal;
        static ZINC: $CommonMetal;
        static STEEL: $CommonMetal;
        static BRASS: $CommonMetal;
        static OSMIUM: $CommonMetal;
        isNatural: boolean;
        plates: $TagKey<$Item>;
        ores: $CommonMetal$ItemLikeTag;
        rawOres: $TagKey<$Item>;
        ingots: $TagKey<$Item>;
        static IRON: $CommonMetal;
        nuggets: $TagKey<$Item>;
        static ALUMINUM: $CommonMetal;
        rawStorageBlocks: $CommonMetal$ItemLikeTag;
        static NICKEL: $CommonMetal;
        static QUICKSILVER: $CommonMetal;
        static CONSTANTAN: $CommonMetal;
        static TIN: $CommonMetal;
        static ELECTRUM: $CommonMetal;
        storageBlocks: $CommonMetal$ItemLikeTag;
        static LEAD: $CommonMetal;
    }
    /**
     * Values that may be interpreted as {@link $CommonMetal}.
     */
    export type $CommonMetal_ = "iron" | "gold" | "copper" | "zinc" | "brass" | "aluminum" | "lead" | "nickel" | "osmium" | "platinum" | "quicksilver" | "silver" | "tin" | "uranium" | "constantan" | "electrum" | "steel";
    export class $CreateFillingRecipeGen extends $FillingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateStandardRecipeGen$ModdedCookingRecipeOutput extends $Record implements $RecipeOutput {
        accept(arg0: $ResourceLocation_, arg1: $Recipe<never>, arg2: $AdvancementHolder_ | null): void;
        withConditions(...arg0: $ICondition[]): $RecipeOutput;
    }
    /**
     * Values that may be interpreted as {@link $CreateStandardRecipeGen$ModdedCookingRecipeOutput}.
     */
    export type $CreateStandardRecipeGen$ModdedCookingRecipeOutput_ = { wrapped?: $RecipeOutput, outputOverride?: $ResourceLocation_,  } | [wrapped?: $RecipeOutput, outputOverride?: $ResourceLocation_, ];
    export class $LogStrippingFakeRecipes {
        static createRecipes(): $List<$RecipeHolder<$ManualApplicationRecipe>>;
        constructor();
    }
    export class $CreateStandardRecipeGen$Marker {
    }
    export class $CommonMetal$ItemLikeTag extends $Record {
        items(): $TagKey<$Item>;
        blocks(): $TagKey<$Block>;
        constructor(items: $TagKey_<$Item>, blocks: $TagKey_<$Block>);
    }
    /**
     * Values that may be interpreted as {@link $CommonMetal$ItemLikeTag}.
     */
    export type $CommonMetal$ItemLikeTag_ = { items?: $TagKey_<$Item>, blocks?: $TagKey_<$Block>,  } | [items?: $TagKey_<$Item>, blocks?: $TagKey_<$Block>, ];
    export class $CreateStandardRecipeGen$ModdedCookingRecipeOutputShim$FakeItemStack extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CreateStandardRecipeGen$ModdedCookingRecipeOutputShim$FakeItemStack}.
     */
    export type $CreateStandardRecipeGen$ModdedCookingRecipeOutputShim$FakeItemStack_ = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export class $CreateMillingRecipeGen extends $MillingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateItemApplicationRecipeGen extends $ItemApplicationRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateHauntingRecipeGen extends $HauntingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateRecipeProvider extends $RecipeProvider {
        static registerAllProcessing(arg0: $DataGenerator, arg1: $PackOutput, arg2: $CompletableFuture<$HolderLookup$Provider>): void;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreatePolishingRecipeGen extends $PolishingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateCrushingRecipeGen extends $CrushingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateRecipeProvider$I {
    }
    export class $CreateWashingRecipeGen extends $WashingRecipeGen {
        moddedCrushedOre(arg0: $ItemEntry<$Item_>, arg1: $CommonMetal_): $BaseRecipeProvider$GeneratedRecipe;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateCuttingRecipeGen extends $CuttingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateStandardRecipeGen$ModdedCookingRecipeOutputShim implements $Recipe<$RecipeInput> {
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        isSpecial(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        showNotification(): boolean;
        getGroup(): string;
        get special(): boolean;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
        get ingredients(): $NonNullList<$Ingredient>;
        get group(): string;
    }
    export class $CreateEmptyingRecipeGen extends $EmptyingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $Mods$Builder {
    }
    export class $CreateCompactingRecipeGen extends $CompactingRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateStandardRecipeGen$ModdedCookingRecipeOutputShim$Serializer extends $Record implements $RecipeSerializer<$CreateStandardRecipeGen$ModdedCookingRecipeOutputShim> {
    }
    /**
     * Values that may be interpreted as {@link $CreateStandardRecipeGen$ModdedCookingRecipeOutputShim$Serializer}.
     */
    export type $CreateStandardRecipeGen$ModdedCookingRecipeOutputShim$Serializer_ = { wrappedCodec?: $MapCodec_<$Recipe<never>>,  } | [wrappedCodec?: $MapCodec_<$Recipe<never>>, ];
    export class $Mods extends $Enum<$Mods> implements $DatagenMod {
        reversedMetalPrefix(): boolean;
        strippedIsSuffix(): boolean;
        omitWoodSuffix(): boolean;
        static values(): $Mods[];
        static valueOf(arg0: string): $Mods;
        getId(): string;
        recipeId(arg0: string): string;
        ingotOf(arg0: string): $ResourceLocation;
        nuggetOf(arg0: string): $ResourceLocation;
        oreOf(arg0: string): $ResourceLocation;
        deepslateOreOf(arg0: string): $ResourceLocation;
        asResource(arg0: string): $ResourceLocation;
        static HH: $Mods;
        static DD: $Mods;
        static JNE: $Mods;
        static AUTUM: $Mods;
        static CREATE: $Mods;
        static PVJ: $Mods;
        static UA: $Mods;
        static AE2: $Mods;
        static UG: $Mods;
        static BWG: $Mods;
        static ATM_2: $Mods;
        static MC: $Mods;
        static BSK: $Mods;
        static ID: $Mods;
        static IE: $Mods;
        static GOOD: $Mods;
        static IF: $Mods;
        static BOP: $Mods;
        static UUE: $Mods;
        static EO: $Mods;
        static ARS_N: $Mods;
        static AM: $Mods;
        static AP: $Mods;
        static SUP: $Mods;
        static IX: $Mods;
        static AET: $Mods;
        static MEK: $Mods;
        static VH: $Mods;
        static ARS_E: $Mods;
        static NE: $Mods;
        static AET_R: $Mods;
        static FA: $Mods;
        static OREGANIZED: $Mods;
        static BTN: $Mods;
        static FD: $Mods;
        static BB: $Mods;
        static RU: $Mods;
        static ENS: $Mods;
        static ENV: $Mods;
        static Q: $Mods;
        static SF: $Mods;
        static SG: $Mods;
        static ENDER: $Mods;
        static IC2: $Mods;
        static SILENT_GEMS: $Mods;
        static D_AET: $Mods;
        static BMK: $Mods;
        static BEF: $Mods;
        static DRUIDCRAFT: $Mods;
        static VANILLA: $Mods;
        static NEA: $Mods;
        static GS: $Mods;
        static TIC: $Mods;
        static ECO: $Mods;
        static TF: $Mods;
        static A_AET: $Mods;
        static TH: $Mods;
        static WSP: $Mods;
        static VMP: $Mods;
        static GOTD: $Mods;
        static HEX: $Mods;
        static ATM: $Mods;
        get id(): string;
    }
    /**
     * Values that may be interpreted as {@link $Mods}.
     */
    export type $Mods_ = "vanilla" | "create" | "mek" | "th" | "ie" | "fd" | "ars_n" | "bsk" | "btn" | "fa" | "hex" | "id" | "bwg" | "sg" | "tic" | "ap" | "q" | "bop" | "tf" | "eco" | "ic2" | "atm" | "atm_2" | "autum" | "druidcraft" | "ender" | "pvj" | "ua" | "bef" | "env" | "sup" | "am" | "nea" | "ae2" | "mc" | "bb" | "silent_gems" | "sf" | "oreganized" | "gs" | "vh" | "ix" | "good" | "bmk" | "ne" | "ru" | "eo" | "if" | "ens" | "aet" | "hh" | "vmp" | "wsp" | "d_aet" | "a_aet" | "aet_r" | "gotd" | "uue" | "ug" | "dd" | "ars_e" | "jne";
    export class $CreateStandardRecipeGen$GeneratedRecipeBuilder$GeneratedCookingRecipeBuilder {
    }
    export class $CreateSequencedAssemblyRecipeGen extends $SequencedAssemblyRecipeGen {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
}
