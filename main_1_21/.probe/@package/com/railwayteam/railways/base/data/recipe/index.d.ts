import { $ItemLike } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $DyeColor_, $Item, $DyeColor } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $TrackMaterial } from "@package/com/simibubi/create/content/trains/track";
import { $RecipeProvider, $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $PalettesColor_, $PalettesColor } from "@package/com/railwayteam/railways/content/palettes";
import { $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Function_, $BiFunction_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $EnumFilledList } from "@package/com/railwayteam/railways/base";
import { $Enum, $Class } from "@package/java/lang";
import { $SequencedAssemblyRecipeBuilder } from "@package/com/simibubi/create/content/processing/sequenced";
export * as processing from "@package/com/railwayteam/railways/base/data/recipe/processing";
export * as neoforge from "@package/com/railwayteam/railways/base/data/recipe/neoforge";

declare module "@package/com/railwayteam/railways/base/data/recipe" {
    export class $RailwaysMechanicalCraftingRecipeGen extends $RailwaysRecipeProvider {
        static create(arg0: $PackOutput): $RecipeProvider;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
    }
    export class $RailwaysStandardRecipeGen$GeneratedRecipeBuilder$GeneratedCookingRecipeBuilder {
    }
    export class $RailwaysStandardRecipeGen extends $RailwaysRecipeProvider {
        static create(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>): $RailwaysStandardRecipeGen;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $RailwaysSequencedAssemblyRecipeBuilder extends $SequencedAssemblyRecipeBuilder {
        conditionalMaterial(arg0: $TrackMaterial): $RailwaysSequencedAssemblyRecipeBuilder;
        constructor(arg0: $ResourceLocation_);
    }
    export class $RailwaysSequencedAssemblyRecipeGen extends $RailwaysRecipeProvider {
        static create(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>): $RailwaysSequencedAssemblyRecipeGen;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $RailwaysMechanicalCraftingRecipeGen$GeneratedRecipeBuilder {
    }
    export class $EnumRecipeList$DyedOnlyPalettesRecipeList extends $EnumRecipeList$PalettesRecipeList {
        constructor(arg0: $Function_<$PalettesColor, $RailwaysRecipeProvider$GeneratedRecipe>);
    }
    export class $RailwaysStandardRecipeGen$GeneratedRecipeBuilder {
    }
    export class $EnumRecipeList$VanillaDyedOnlyPalettesRecipeList extends $EnumRecipeList$PalettesRecipeList {
        constructor(arg0: $BiFunction_<$PalettesColor, $DyeColor, $RailwaysRecipeProvider$GeneratedRecipe>);
    }
    export class $EnumRecipeList$PalettesRecipeList extends $EnumRecipeList<$PalettesColor> {
        constructor(arg0: $Function_<$PalettesColor, $RailwaysRecipeProvider$GeneratedRecipe>);
    }
    export class $RailwaysRecipeProvider$GeneratedRecipe {
    }
    export interface $RailwaysRecipeProvider$GeneratedRecipe {
        register(arg0: $RecipeOutput): void;
    }
    /**
     * Values that may be interpreted as {@link $RailwaysRecipeProvider$GeneratedRecipe}.
     */
    export type $RailwaysRecipeProvider$GeneratedRecipe_ = ((arg0: $RecipeOutput) => void);
    export class $RailwaysRecipeProvider extends $RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $RailwaysStandardRecipeGen$GeneratedRecipeBuilder$GeneratedStonecuttingRecipeBuilder {
    }
    export class $EnumRecipeList<E extends $Enum<E>> extends $EnumFilledList<E, $RailwaysRecipeProvider$GeneratedRecipe> {
        constructor(arg0: $Class<E>, arg1: $Function_<E, $RailwaysRecipeProvider$GeneratedRecipe>);
    }
    export class $RailwaysRecipeProvider$Ingredients {
        static contraptionControls(): $ItemLike;
        static copperIngot(): $TagKey<$Item>;
        static ironIngot(): $TagKey<$Item>;
        static andesiteCasing(): $ItemLike;
        static ironBlock(): $ItemLike;
        static brassCasing(): $ItemLike;
        static dye(arg0: $DyeColor_): $TagKey<$Item>;
        static chute(): $ItemLike;
        static propeller(): $ItemLike;
        static redstone(): $ItemLike;
        static stick(): $ItemLike;
        static feather(): $ItemLike;
        static campfire(): $ItemLike;
        static lever(): $ItemLike;
        static girder(): $ItemLike;
        static shaft(): $ItemLike;
        static cogwheel(): $ItemLike;
        static smallBuffer(): $ItemLike;
        static headstock(): $ItemLike;
        static copycatHeadstock(): $ItemLike;
        static smallCog(): $ItemLike;
        static palettesPaint(arg0: $PalettesColor_, arg1: number): $SizedFluidIngredient;
        static bindingAgent(): $TagKey<$Item>;
        static colorlessGlass(): $TagKey<$Item>;
        static railwayCasing(): $ItemLike;
        static sturdySheet(): $ItemLike;
        static brassIngot(): $TagKey<$Item>;
        static woodenTrapdoors(): $TagKey<$Item>;
        static woodenDoors(): $TagKey<$Item>;
        static industrialIron(): $ItemLike;
        static headstockTag(): $TagKey<$Item>;
        static linkPinTag(): $TagKey<$Item>;
        static copycatPanel(): $ItemLike;
        static woodenSlab(): $TagKey<$Item>;
        static ironSheet(): $TagKey<$Item>;
        static ironNugget(): $TagKey<$Item>;
        static andesiteAlloy(): $ItemLike;
        static precisionMechanism(): $ItemLike;
        static electronTube(): $ItemLike;
        static eyeOfEnder(): $ItemLike;
        static brassSheet(): $TagKey<$Item>;
        static brassNugget(): $TagKey<$Item>;
        static linkPin(): $ItemLike;
        static emptyPaintPitcher(): $ItemLike;
        static paintBrush(): $ItemLike;
        static zincNugget(): $TagKey<$Item>;
        static metalBracket(): $ItemLike;
        static phantomMembrane(): $ItemLike;
        static fence(): $TagKey<$Item>;
        static string(): $TagKey<$Item>;
        static flywheel(): $ItemLike;
        constructor();
    }
}
