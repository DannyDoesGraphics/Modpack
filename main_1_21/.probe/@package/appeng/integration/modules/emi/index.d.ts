import { $EmiIngredient, $EmiStack } from "@package/dev/emi/emi/api/stack";
import { $SlotWidget, $Widget } from "@package/dev/emi/emi/api/widget";
import { $RecipeHolder_, $Recipe, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_ } from "@package/net/minecraft/network/chat";
import { $IUpgradeableItem_ } from "@package/appeng/api/upgrades";
import { $ItemListModAdapter } from "@package/appeng/integration/abstraction";
import { $CraftingTermMenu, $PatternEncodingTermMenu } from "@package/appeng/menu/me/items";
import { $EmiExclusionArea, $EmiInitRegistry, $EmiPlugin, $EmiStackProvider, $EmiDragDropHandler, $EmiRegistry } from "@package/dev/emi/emi/api";
import { $List, $List_, $Comparator, $Map } from "@package/java/util";
import { $GenericStack, $GenericStack_ } from "@package/appeng/api/stacks";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $StandardRecipeHandler, $EmiCraftContext } from "@package/dev/emi/emi/api/recipe/handler";
import { $EmiRenderable } from "@package/dev/emi/emi/api/render";
import { $EntropyRecipe } from "@package/appeng/recipes/entropy";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $EmiRecipe, $EmiCraftingRecipe, $EmiPlayerInventory, $EmiRecipeCategory, $BasicEmiRecipe } from "@package/dev/emi/emi/api/recipe";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Enum, $Class, $Object } from "@package/java/lang";
import { $EmiStackConverter } from "@package/appeng/api/integrations/emi";
import { $AEBaseMenu } from "@package/appeng/menu";
import { $LocalizationEnum } from "@package/appeng/core/localization";

declare module "@package/appeng/integration/modules/emi" {
    export class $EmiEntropyRecipe extends $BasicEmiRecipe {
        static CATEGORY: $EmiRecipeCategory;
        constructor(arg0: $RecipeHolder_<$EntropyRecipe>);
    }
    export class $AbstractRecipeHandler$Result$Error extends $AbstractRecipeHandler$Result {
    }
    export class $EmiUseCraftingRecipeHandler<T extends $CraftingTermMenu> extends $AbstractRecipeHandler<T> {
        static getGuiSlotToIngredientMap(arg0: $Recipe<never>): $Map<number, $Ingredient>;
        constructor(arg0: $Class<T>);
    }
    export class $EmiAeBaseScreenExclusionZones implements $EmiExclusionArea<$Screen> {
    }
    export class $EmiItemListModAdapter implements $ItemListModAdapter {
        setSearchText(arg0: string): void;
        getSearchText(): string;
        hasSearchFocus(): boolean;
    }
    export class $EmiFluidBlockSlot extends $SlotWidget {
    }
    export class $EmiInscriberRecipe extends $BasicEmiRecipe {
    }
    export class $EmiFluidStackConverter implements $EmiStackConverter {
    }
    export class $EmiEntropySlot extends $SlotWidget {
    }
    export class $EmiStackHelper {
        static toEmiStack(arg0: $GenericStack_): $EmiStack;
        static toGenericStack(arg0: $EmiStack): $GenericStack;
        static ofInputs(arg0: $EmiRecipe): $List<$List<$GenericStack>>;
        static ofOutputs(arg0: $EmiRecipe): $List<$GenericStack>;
    }
    export class $AbstractRecipeHandler$Result {
    }
    export class $EmiEncodePatternHandler<T extends $PatternEncodingTermMenu> extends $AbstractRecipeHandler<T> {
        constructor(arg0: $Class<T>);
    }
    export class $AbstractRecipeHandler$Result$PartiallyCraftable extends $AbstractRecipeHandler$Result {
    }
    export class $EmiChargerRecipe extends $BasicEmiRecipe {
    }
    export class $AbstractRecipeHandler$Result$Success extends $AbstractRecipeHandler$Result {
    }
    export class $EmiText extends $Enum<$EmiText> implements $LocalizationEnum {
        getTranslationKey(): string;
        getEnglishText(): string;
        static values(): $EmiText[];
        static valueOf(arg0: string): $EmiText;
        withSuffix(arg0: $Component_): $MutableComponent;
        withSuffix(arg0: string): $MutableComponent;
        text(): $MutableComponent;
        text(...arg0: $Object[]): $MutableComponent;
        static CATEGORY_ENTROPY_MANIPULATOR: $EmiText;
        static CATEGORY_CHARGER: $EmiText;
        static CATEGORY_CONDENSER: $EmiText;
        static CATEGORY_INSCRIBER: $EmiText;
        get translationKey(): string;
        get englishText(): string;
    }
    /**
     * Values that may be interpreted as {@link $EmiText}.
     */
    export type $EmiText_ = "category_charger" | "category_condenser" | "category_entropy_manipulator" | "category_inscriber";
    export class $AbstractRecipeHandler$Result$NotApplicable extends $AbstractRecipeHandler$Result {
    }
    export class $EmiP2PAttunementRecipe extends $BasicEmiRecipe {
    }
    export class $EmiAeBaseScreenStackProvider implements $EmiStackProvider<$Screen> {
    }
    export class $EmiItemStackConverter implements $EmiStackConverter {
    }
    export class $AbstractRecipeHandler<T extends $AEBaseMenu> implements $StandardRecipeHandler<T> {
        getCraftingSlots(recipe: $EmiRecipe, handler: T): $List<$Slot>;
        getOutputSlot(handler: T): $Slot;
        craft(recipe: $EmiRecipe, context: $EmiCraftContext<T>): boolean;
        canCraft(recipe: $EmiRecipe, context: $EmiCraftContext<T>): boolean;
        render(recipe: $EmiRecipe, context: $EmiCraftContext<T>, widgets: $List_<$Widget>, draw: $GuiGraphics): void;
        getInventory(screen: $AbstractContainerScreen<T>): $EmiPlayerInventory;
        alwaysDisplaySupport(recipe: $EmiRecipe): boolean;
        getTooltip(recipe: $EmiRecipe, context: $EmiCraftContext<T>): $List<$ClientTooltipComponent>;
    }
    export class $AppEngRecipeCategory extends $EmiRecipeCategory {
        simplified: $EmiRenderable;
        sorter: $Comparator<$EmiRecipe>;
        icon: $EmiRenderable;
        id: $ResourceLocation;
    }
    export class $AbstractRecipeHandler$Result$EncodeWithCraftables extends $AbstractRecipeHandler$Result {
    }
    export class $EmiCondenserRecipe extends $BasicEmiRecipe {
    }
    export class $AppEngEmiPlugin implements $EmiPlugin {
        register(arg0: $EmiRegistry): void;
        initialize(registry: $EmiInitRegistry): void;
        constructor();
    }
    export class $EmiFacadeGenerator {
    }
    export class $EmiAddItemUpgradeRecipe extends $EmiCraftingRecipe {
        shapeless: boolean;
        constructor(arg0: $IUpgradeableItem_, arg1: $Item_);
    }
    export class $EmiAeBaseScreenDragDropHandler implements $EmiDragDropHandler<$Screen> {
        render(screen: $Screen, dragged: $EmiIngredient, draw: $GuiGraphics, mouseX: number, mouseY: number, delta: number): void;
    }
    export class $EmiTransformRecipe extends $BasicEmiRecipe {
    }
}
