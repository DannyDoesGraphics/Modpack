import { $Codec } from "@package/com/mojang/serialization";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $IDrawable, $IDrawableAnimated, $IDrawableStatic } from "@package/mezz/jei/api/gui/drawable";
import { $IRecipeSlotsView_, $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $IJeiConfigManager_ } from "@package/mezz/jei/api/runtime/config";
import { $List, $List_, $Collection } from "@package/java/util";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $Consumer, $Consumer_ } from "@package/java/util/function";
import { $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $IFocusGroup, $IRecipeManager, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $OritechRecipeType, $OritechRecipe } from "@package/rearth/oritech/init/recipes";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $MachineBlockEntity } from "@package/rearth/oritech/block/base/entity";
import { $Record, $Class } from "@package/java/lang";
import { $IVanillaCategoryExtensionRegistration, $IRecipeCategoryRegistration, $IRecipeCatalystRegistration, $IModIngredientRegistration, $IRecipeTransferRegistration, $IIngredientAliasRegistration, $IRecipeRegistration, $IRuntimeRegistration, $ISubtypeRegistration, $IModInfoRegistration_, $IGuiHandlerRegistration, $IAdvancedRegistration, $IAdvancedSearchRegistration, $IExtraIngredientRegistration_ } from "@package/mezz/jei/api/registration";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ScreenProvider$GuiSlot_, $InventorySlotAssignment_ } from "@package/rearth/oritech/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGhostIngredientHandler, $IGuiContainerHandler, $IGuiClickableArea, $IGhostIngredientHandler$Target } from "@package/mezz/jei/api/gui/handlers";
import { $IModPlugin } from "@package/mezz/jei/api";
import { $ItemFilterScreen, $OritechWidgetScreen } from "@package/rearth/oritech/client/ui";
import { $ICodecHelper, $IGuiHelper, $IPlatformFluidHelper } from "@package/mezz/jei/api/helpers";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $IJeiFeatures, $IJeiRuntime, $IClickableIngredient } from "@package/mezz/jei/api/runtime";
import { $IClickableIngredientFactory, $IRecipeLayoutBuilder, $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IRecipeExtrasBuilder } from "@package/mezz/jei/api/gui/widgets";

declare module "@package/rearth/oritech/init/compat/jei" {
    export class $OritechJeiTaintedRefineryCreation implements $IRecipeCategory<$OritechJeiTaintedRefineryCreation$CreationInfo> {
        getRecipeType(): $RecipeType<$OritechJeiTaintedRefineryCreation$CreationInfo>;
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $OritechJeiTaintedRefineryCreation$CreationInfo_, arg2: $IFocusGroup): void;
        getIcon(): $IDrawable;
        getTitle(): $Component;
        draw(arg0: $OritechJeiTaintedRefineryCreation$CreationInfo_, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getWidth(): number;
        getHeight(): number;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $OritechJeiTaintedRefineryCreation$CreationInfo_, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $OritechJeiTaintedRefineryCreation$CreationInfo_, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        onDisplayedIngredientsUpdate(arg0: $OritechJeiTaintedRefineryCreation$CreationInfo_, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: $OritechJeiTaintedRefineryCreation$CreationInfo_, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        /**
         * @deprecated
         */
        handleInput(arg0: $OritechJeiTaintedRefineryCreation$CreationInfo_, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        isHandled(arg0: $OritechJeiTaintedRefineryCreation$CreationInfo_): boolean;
        needsRecipeBorder(): boolean;
        /**
         * @deprecated
         */
        getBackground(): $IDrawable;
        getRegistryName(arg0: $OritechJeiTaintedRefineryCreation$CreationInfo_): $ResourceLocation;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<$OritechJeiTaintedRefineryCreation$CreationInfo>;
        getTooltip(arg0: $ITooltipBuilder, arg1: $OritechJeiTaintedRefineryCreation$CreationInfo_, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        static RECIPE_TYPE: $RecipeType<$OritechJeiTaintedRefineryCreation$CreationInfo>;
        arrow: $IDrawableAnimated;
        background: $IDrawableStatic;
        icon: $IDrawable;
        constructor(arg0: $IGuiHelper);
        get recipeType(): $RecipeType<$OritechJeiTaintedRefineryCreation$CreationInfo>;
        get title(): $Component;
        get width(): number;
        get height(): number;
    }
    export class $OritechJeiTaintedRefineryBonuses$BonusInfo extends $Record {
        bonusType(): string;
        blocks(): $List<$Block>;
        static fromTag(arg0: $TagKey_<$Block>, arg1: string): $OritechJeiTaintedRefineryBonuses$BonusInfo;
        constructor(bonusType: string, blocks: $List_<$Block_>);
    }
    /**
     * Values that may be interpreted as {@link $OritechJeiTaintedRefineryBonuses$BonusInfo}.
     */
    export type $OritechJeiTaintedRefineryBonuses$BonusInfo_ = { blocks?: $List_<$Block_>, bonusType?: string,  } | [blocks?: $List_<$Block_>, bonusType?: string, ];
    export class $OritechJeiParticleCollisionRecipe implements $IRecipeCategory<$OritechRecipe> {
        getRecipeType(): $RecipeType<$OritechRecipe>;
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $OritechRecipe, arg2: $IFocusGroup): void;
        getIcon(): $IDrawable;
        getTitle(): $Component;
        draw(arg0: $OritechRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getWidth(): number;
        getHeight(): number;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $OritechRecipe, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $OritechRecipe, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        onDisplayedIngredientsUpdate(arg0: $OritechRecipe, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: $OritechRecipe, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        /**
         * @deprecated
         */
        handleInput(arg0: $OritechRecipe, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        isHandled(arg0: $OritechRecipe): boolean;
        needsRecipeBorder(): boolean;
        /**
         * @deprecated
         */
        getBackground(): $IDrawable;
        getRegistryName(arg0: $OritechRecipe): $ResourceLocation;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<$OritechRecipe>;
        getTooltip(arg0: $ITooltipBuilder, arg1: $OritechRecipe, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        arrow: $IDrawableAnimated;
        background: $IDrawableStatic;
        icon: $IDrawable;
        type: $OritechRecipeType;
        constructor(arg0: $IGuiHelper);
        get recipeType(): $RecipeType<$OritechRecipe>;
        get title(): $Component;
        get width(): number;
        get height(): number;
    }
    export class $JeiItemFilterGhostHandler implements $IGhostIngredientHandler<$ItemFilterScreen> {
        shouldHighlightTargets(): boolean;
        quickMove<I>(arg0: $ItemFilterScreen, arg1: $ITypedIngredient<I>): boolean;
    }
    export class $JeiExclusionZoneHandler implements $IGuiContainerHandler<$OritechWidgetScreen<$AbstractContainerMenu>> {
        /**
         * @deprecated
         */
        getClickableIngredientUnderMouse(arg0: $OritechWidgetScreen<$AbstractContainerMenu>, arg1: number, arg2: number): ($IClickableIngredient<never>) | undefined;
        getClickableIngredientUnderMouse(arg0: $IClickableIngredientFactory, arg1: $OritechWidgetScreen<$AbstractContainerMenu>, arg2: number, arg3: number): ($IClickableIngredient<never>) | undefined;
        getGuiExtraAreas(arg0: $OritechWidgetScreen<$AbstractContainerMenu>): $List<$Rect2i>;
        getGuiClickableAreas(arg0: $OritechWidgetScreen<$AbstractContainerMenu>, arg1: number, arg2: number): $Collection<$IGuiClickableArea>;
    }
    export class $OritechJeiTaintedRefineryBonuses implements $IRecipeCategory<$OritechJeiTaintedRefineryBonuses$BonusInfo> {
        getRecipeType(): $RecipeType<$OritechJeiTaintedRefineryBonuses$BonusInfo>;
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $OritechJeiTaintedRefineryBonuses$BonusInfo_, arg2: $IFocusGroup): void;
        getIcon(): $IDrawable;
        getTitle(): $Component;
        draw(arg0: $OritechJeiTaintedRefineryBonuses$BonusInfo_, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getWidth(): number;
        getHeight(): number;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $OritechJeiTaintedRefineryBonuses$BonusInfo_, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $OritechJeiTaintedRefineryBonuses$BonusInfo_, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        onDisplayedIngredientsUpdate(arg0: $OritechJeiTaintedRefineryBonuses$BonusInfo_, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: $OritechJeiTaintedRefineryBonuses$BonusInfo_, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        /**
         * @deprecated
         */
        handleInput(arg0: $OritechJeiTaintedRefineryBonuses$BonusInfo_, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        isHandled(arg0: $OritechJeiTaintedRefineryBonuses$BonusInfo_): boolean;
        needsRecipeBorder(): boolean;
        /**
         * @deprecated
         */
        getBackground(): $IDrawable;
        getRegistryName(arg0: $OritechJeiTaintedRefineryBonuses$BonusInfo_): $ResourceLocation;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<$OritechJeiTaintedRefineryBonuses$BonusInfo>;
        getTooltip(arg0: $ITooltipBuilder, arg1: $OritechJeiTaintedRefineryBonuses$BonusInfo_, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        static RECIPE_TYPE: $RecipeType<$OritechJeiTaintedRefineryBonuses$BonusInfo>;
        background: $IDrawable;
        icon: $IDrawable;
        constructor(arg0: $IGuiHelper);
        get recipeType(): $RecipeType<$OritechJeiTaintedRefineryBonuses$BonusInfo>;
        get title(): $Component;
        get width(): number;
        get height(): number;
    }
    export class $OritechJeiLaserRecipe implements $IRecipeCategory<$OritechRecipe> {
        getRecipeType(): $RecipeType<$OritechRecipe>;
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $OritechRecipe, arg2: $IFocusGroup): void;
        getIcon(): $IDrawable;
        getTitle(): $Component;
        draw(arg0: $OritechRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getWidth(): number;
        getHeight(): number;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $OritechRecipe, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $OritechRecipe, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        onDisplayedIngredientsUpdate(arg0: $OritechRecipe, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: $OritechRecipe, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        /**
         * @deprecated
         */
        handleInput(arg0: $OritechRecipe, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        isHandled(arg0: $OritechRecipe): boolean;
        needsRecipeBorder(): boolean;
        /**
         * @deprecated
         */
        getBackground(): $IDrawable;
        getRegistryName(arg0: $OritechRecipe): $ResourceLocation;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<$OritechRecipe>;
        getTooltip(arg0: $ITooltipBuilder, arg1: $OritechRecipe, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        arrow: $IDrawableAnimated;
        background: $IDrawableStatic;
        laserBackground: $IDrawableStatic;
        icon: $IDrawable;
        type: $OritechRecipeType;
        static LASER_RECIPE_OVERLAY: $ResourceLocation;
        constructor(arg0: $IGuiHelper);
        get recipeType(): $RecipeType<$OritechRecipe>;
        get title(): $Component;
        get width(): number;
        get height(): number;
    }
    export class $OritechJeiPlugin implements $IModPlugin {
        registerCategories(arg0: $IRecipeCategoryRegistration): void;
        registerRecipes(arg0: $IRecipeRegistration): void;
        registerRecipeCatalysts(arg0: $IRecipeCatalystRegistration): void;
        registerGuiHandlers(arg0: $IGuiHandlerRegistration): void;
        getPluginUid(): $ResourceLocation;
        registerRecipe(arg0: $IRecipeRegistration, arg1: $OritechRecipeType): void;
        registerModInfo(arg0: $IModInfoRegistration_): void;
        registerAdvanced(arg0: $IAdvancedRegistration): void;
        registerRuntime(arg0: $IRuntimeRegistration): void;
        onRuntimeAvailable(arg0: $IJeiRuntime): void;
        onRuntimeUnavailable(): void;
        onConfigManagerAvailable(arg0: $IJeiConfigManager_): void;
        registerVanillaCategoryExtensions(arg0: $IVanillaCategoryExtensionRegistration): void;
        registerRecipeTransferHandlers(arg0: $IRecipeTransferRegistration): void;
        configureJei(arg0: $IJeiFeatures): void;
        registerItemSubtypes(arg0: $ISubtypeRegistration): void;
        registerFluidSubtypes<T>(arg0: $ISubtypeRegistration, arg1: $IPlatformFluidHelper<T>): void;
        registerIngredients(arg0: $IModIngredientRegistration): void;
        registerExtraIngredients(arg0: $IExtraIngredientRegistration_): void;
        registerIngredientAliases(arg0: $IIngredientAliasRegistration): void;
        registerAdvancedSearch(arg0: $IAdvancedSearchRegistration): void;
        constructor();
        get pluginUid(): $ResourceLocation;
    }
    export class $OritechJeiTaintedRefineryCreation$CreationInfo extends $Record {
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $OritechJeiTaintedRefineryCreation$CreationInfo}.
     */
    export type $OritechJeiTaintedRefineryCreation$CreationInfo_ = {  } | [];
    export class $JeiItemFilterGhostHandler$ItemFilterTarget<I> implements $IGhostIngredientHandler$Target<I> {
        andThen(arg0: $Consumer_<I>): $Consumer<I>;
    }
    export class $OritechJeiRecipeCategory implements $IRecipeCategory<$OritechRecipe> {
        getRecipeType(): $RecipeType<$OritechRecipe>;
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $OritechRecipe, arg2: $IFocusGroup): void;
        getIcon(): $IDrawable;
        getTitle(): $Component;
        draw(arg0: $OritechRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getWidth(): number;
        getHeight(): number;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $OritechRecipe, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $OritechRecipe, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        onDisplayedIngredientsUpdate(arg0: $OritechRecipe, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: $OritechRecipe, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        /**
         * @deprecated
         */
        handleInput(arg0: $OritechRecipe, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        isHandled(arg0: $OritechRecipe): boolean;
        needsRecipeBorder(): boolean;
        /**
         * @deprecated
         */
        getBackground(): $IDrawable;
        getRegistryName(arg0: $OritechRecipe): $ResourceLocation;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<$OritechRecipe>;
        getTooltip(arg0: $ITooltipBuilder, arg1: $OritechRecipe, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        fluidBackground: $IDrawableStatic;
        arrow: $IDrawableAnimated;
        background: $IDrawableStatic;
        icon: $IDrawable;
        type: $OritechRecipeType;
        constructor(arg0: $OritechRecipeType, arg1: $Class<$MachineBlockEntity>, arg2: $Block_, arg3: $IGuiHelper);
        constructor(arg0: $OritechRecipeType, arg1: $Block_, arg2: $IGuiHelper, arg3: boolean, arg4: $List_<$ScreenProvider$GuiSlot_>, arg5: $InventorySlotAssignment_);
        get recipeType(): $RecipeType<$OritechRecipe>;
        get title(): $Component;
        get width(): number;
        get height(): number;
    }
}
