import { $BlueprintMenu } from "@package/com/simibubi/create/content/equipment/blueprint";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $AbstractSimiContainerScreen, $GhostItemMenu } from "@package/com/simibubi/create/foundation/gui/menu";
import { $RecipeType_, $RecipeHolder_, $Recipe, $RecipeHolder, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IRecipeSlotsView_ } from "@package/mezz/jei/api/gui/ingredient";
import { $IJeiConfigManager_ } from "@package/mezz/jei/api/runtime/config";
import { $List, $Collection } from "@package/java/util";
import { $StockKeeperRequestMenu, $StockKeeperRequestScreen } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $Consumer, $Supplier_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $RecipeType } from "@package/mezz/jei/api/recipe";
import { $ISubtypeInterpreter, $UidContext_ } from "@package/mezz/jei/api/ingredients/subtypes";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $Record, $Class, $Object } from "@package/java/lang";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $IVanillaCategoryExtensionRegistration, $IRecipeCategoryRegistration, $IRecipeCatalystRegistration, $IModIngredientRegistration, $IRecipeTransferRegistration, $IIngredientAliasRegistration, $IRecipeRegistration, $IRuntimeRegistration, $ISubtypeRegistration, $IModInfoRegistration_, $IGuiHandlerRegistration, $IAdvancedRegistration, $IAdvancedSearchRegistration, $IExtraIngredientRegistration_ } from "@package/mezz/jei/api/registration";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IGhostIngredientHandler, $IGuiContainerHandler, $IGuiClickableArea, $IGhostIngredientHandler$Target } from "@package/mezz/jei/api/gui/handlers";
import { $IModPlugin } from "@package/mezz/jei/api";
import { $IJeiHelpers, $IPlatformFluidHelper } from "@package/mezz/jei/api/helpers";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IRecipeTransferError, $IRecipeTransferHandler, $IUniversalRecipeTransferHandler } from "@package/mezz/jei/api/recipe/transfer";
import { $ProcessingRecipeParams, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $IJeiFeatures, $IJeiRuntime, $IClickableIngredient, $IIngredientManager } from "@package/mezz/jei/api/runtime";
import { $IClickableIngredientFactory } from "@package/mezz/jei/api/gui/builder";
import { $RecipeWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $Stream } from "@package/java/util/stream";
import { $CreateRecipeCategory$Builder } from "@package/com/simibubi/create/compat/jei/category";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AllGuiTextures_ } from "@package/com/simibubi/create/foundation/gui";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as category from "@package/com/simibubi/create/compat/jei/category";

declare module "@package/com/simibubi/create/compat/jei" {
    export class $CreateJEI$CategoryBuilder<T extends $Recipe<never>> extends $CreateRecipeCategory$Builder<T> {
    }
    export class $StockKeeperTransferHandler implements $IUniversalRecipeTransferHandler<$StockKeeperRequestMenu> {
        getContainerClass(): $Class<$StockKeeperRequestMenu>;
        getMenuType(): ($MenuType<$StockKeeperRequestMenu>) | undefined;
        transferRecipe(arg0: $StockKeeperRequestMenu, arg1: $Object, arg2: $IRecipeSlotsView_, arg3: $Player, arg4: boolean, arg5: boolean): $IRecipeTransferError;
        constructor(arg0: $IJeiHelpers);
        get containerClass(): $Class<$StockKeeperRequestMenu>;
        get menuType(): ($MenuType<$StockKeeperRequestMenu>) | undefined;
    }
    export class $SlotMover implements $IGuiContainerHandler<$AbstractSimiContainerScreen<never>> {
        getGuiExtraAreas(arg0: $AbstractSimiContainerScreen<never>): $List<$Rect2i>;
        /**
         * @deprecated
         */
        getClickableIngredientUnderMouse(arg0: $AbstractSimiContainerScreen<never>, arg1: number, arg2: number): ($IClickableIngredient<never>) | undefined;
        getClickableIngredientUnderMouse(arg0: $IClickableIngredientFactory, arg1: $AbstractSimiContainerScreen<never>, arg2: number, arg3: number): ($IClickableIngredient<never>) | undefined;
        getGuiClickableAreas(arg0: $AbstractSimiContainerScreen<never>, arg1: number, arg2: number): $Collection<$IGuiClickableArea>;
        constructor();
    }
    export class $GhostIngredientHandler$GhostTarget<I, T extends $GhostItemMenu<never>> implements $IGhostIngredientHandler$Target<I> {
        andThen(arg0: $Consumer_<I>): $Consumer<I>;
    }
    export class $PotionFluidSubtypeInterpreter implements $ISubtypeInterpreter<$FluidStack> {
        getSubtypeData(arg0: $FluidStack_, arg1: $UidContext_): $Object;
        getLegacyStringSubtypeInfo(arg0: $FluidStack_, arg1: $UidContext_): string;
        constructor();
    }
    export class $ToolboxColoringRecipeMaker {
        static createRecipes(): $Stream<$RecipeHolder<$CraftingRecipe>>;
    }
    export class $ScreenResourceWrapper implements $IDrawable {
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getWidth(): number;
        getHeight(): number;
        draw(arg0: $GuiGraphics): void;
        constructor(arg0: $AllGuiTextures_);
        get width(): number;
        get height(): number;
    }
    export class $BlueprintTransferHandler implements $IRecipeTransferHandler<$BlueprintMenu, $RecipeHolder<$CraftingRecipe>> {
        getRecipeType(): $RecipeType<$RecipeHolder<$CraftingRecipe>>;
        getContainerClass(): $Class<$BlueprintMenu>;
        getMenuType(): ($MenuType<$BlueprintMenu>) | undefined;
        transferRecipe(arg0: $BlueprintMenu, arg1: $RecipeHolder_<$CraftingRecipe>, arg2: $IRecipeSlotsView_, arg3: $Player, arg4: boolean, arg5: boolean): $IRecipeTransferError;
        constructor();
        get recipeType(): $RecipeType<$RecipeHolder<$CraftingRecipe>>;
        get containerClass(): $Class<$BlueprintMenu>;
        get menuType(): ($MenuType<$BlueprintMenu>) | undefined;
    }
    export class $ItemIcon implements $IDrawable {
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getWidth(): number;
        getHeight(): number;
        draw(arg0: $GuiGraphics): void;
        constructor(arg0: $Supplier_<$ItemStack>);
        get width(): number;
        get height(): number;
    }
    export class $ConversionRecipe extends $StandardProcessingRecipe<$RecipeWrapper> {
        matches(arg0: $RecipeWrapper, arg1: $Level_): boolean;
        static create(arg0: $ItemStack_, arg1: $ItemStack_): $RecipeHolder<$ConversionRecipe>;
        constructor(arg0: $ProcessingRecipeParams);
    }
    export class $DoubleItemIcon implements $IDrawable {
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getWidth(): number;
        getHeight(): number;
        draw(arg0: $GuiGraphics): void;
        constructor(arg0: $Supplier_<$ItemStack>, arg1: $Supplier_<$ItemStack>);
        get width(): number;
        get height(): number;
    }
    export class $GhostIngredientHandler<T extends $GhostItemMenu<never>> implements $IGhostIngredientHandler<$AbstractSimiContainerScreen<T>> {
        getTargetsTyped<I>(arg0: $AbstractSimiContainerScreen<$AbstractSimiContainerScreen<T>>, arg1: $ITypedIngredient<I>, arg2: boolean): $List<$IGhostIngredientHandler$Target<I>>;
        onComplete(): void;
        shouldHighlightTargets(): boolean;
        quickMove<I>(arg0: $AbstractSimiContainerScreen<T>, arg1: $ITypedIngredient<I>): boolean;
        constructor();
    }
    export class $StockKeeperGuiContainerHandler extends $Record implements $IGuiContainerHandler<$StockKeeperRequestScreen> {
        getClickableIngredientUnderMouse(arg0: $StockKeeperRequestScreen, arg1: number, arg2: number): ($IClickableIngredient<never>) | undefined;
        ingredientManager(): $IIngredientManager;
        getClickableIngredientUnderMouse(arg0: $IClickableIngredientFactory, arg1: $StockKeeperRequestScreen, arg2: number, arg3: number): ($IClickableIngredient<never>) | undefined;
        getGuiExtraAreas(arg0: $StockKeeperRequestScreen): $List<$Rect2i>;
        getGuiClickableAreas(arg0: $StockKeeperRequestScreen, arg1: number, arg2: number): $Collection<$IGuiClickableArea>;
        constructor(ingredientManager: $IIngredientManager);
    }
    /**
     * Values that may be interpreted as {@link $StockKeeperGuiContainerHandler}.
     */
    export type $StockKeeperGuiContainerHandler_ = { ingredientManager?: $IIngredientManager,  } | [ingredientManager?: $IIngredientManager, ];
    export class $EmptyBackground implements $IDrawable {
        draw(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getWidth(): number;
        getHeight(): number;
        draw(arg0: $GuiGraphics): void;
        constructor(arg0: number, arg1: number);
        get width(): number;
        get height(): number;
    }
    export class $CreateJEI implements $IModPlugin {
        registerCategories(arg0: $IRecipeCategoryRegistration): void;
        registerRecipes(arg0: $IRecipeRegistration): void;
        registerRecipeCatalysts(arg0: $IRecipeCatalystRegistration): void;
        registerGuiHandlers(arg0: $IGuiHandlerRegistration): void;
        onRuntimeAvailable(arg0: $IJeiRuntime): void;
        registerRecipeTransferHandlers(arg0: $IRecipeTransferRegistration): void;
        getPluginUid(): $ResourceLocation;
        registerFluidSubtypes<T>(arg0: $ISubtypeRegistration, arg1: $IPlatformFluidHelper<T>): void;
        registerExtraIngredients(arg0: $IExtraIngredientRegistration_): void;
        static consumeTypedRecipes<T extends $Recipe<never>>(arg0: $Consumer_<$RecipeHolder<never>>, arg1: $RecipeType_<never>): void;
        static getTypedRecipes(arg0: $RecipeType_<never>): $List<$RecipeHolder<never>>;
        static consumeAllRecipes(arg0: $Consumer_<$RecipeHolder<never>>): void;
        static getTypedRecipesExcluding(arg0: $RecipeType_<never>, arg1: $Predicate_<$RecipeHolder<never>>): $List<$RecipeHolder<never>>;
        static doInputsMatch(arg0: $Recipe<never>, arg1: $Recipe<never>): boolean;
        static doOutputsMatch(arg0: $Recipe<never>, arg1: $Recipe<never>): boolean;
        registerModInfo(arg0: $IModInfoRegistration_): void;
        registerAdvanced(arg0: $IAdvancedRegistration): void;
        registerRuntime(arg0: $IRuntimeRegistration): void;
        onRuntimeUnavailable(): void;
        onConfigManagerAvailable(arg0: $IJeiConfigManager_): void;
        registerVanillaCategoryExtensions(arg0: $IVanillaCategoryExtensionRegistration): void;
        configureJei(arg0: $IJeiFeatures): void;
        registerItemSubtypes(arg0: $ISubtypeRegistration): void;
        registerIngredients(arg0: $IModIngredientRegistration): void;
        registerIngredientAliases(arg0: $IIngredientAliasRegistration): void;
        registerAdvancedSearch(arg0: $IAdvancedSearchRegistration): void;
        static runtime: $IJeiRuntime;
        constructor();
        get pluginUid(): $ResourceLocation;
    }
}
