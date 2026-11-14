import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $Widget } from "@package/dev/emi/emi/api/widget";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Slot, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $EmiRecipe, $EmiPlayerInventory } from "@package/dev/emi/emi/api/recipe";
import { $Enum } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $List_ } from "@package/java/util";

declare module "@package/dev/emi/emi/api/recipe/handler" {
    export class $EmiCraftContext$Destination extends $Enum<$EmiCraftContext$Destination> implements $GlobalMixin {
        static values(): $EmiCraftContext$Destination[];
        static valueOf(name: string): $EmiCraftContext$Destination;
        static INVENTORY: $EmiCraftContext$Destination;
        static NONE: $EmiCraftContext$Destination;
        static CURSOR: $EmiCraftContext$Destination;
    }
    /**
     * Values that may be interpreted as {@link $EmiCraftContext$Destination}.
     */
    export type $EmiCraftContext$Destination_ = "none" | "cursor" | "inventory";
    export class $EmiCraftContext<T extends $AbstractContainerMenu> implements $GlobalMixin {
        getScreenHandler(): T;
        getDestination(): $EmiCraftContext$Destination;
        getType(): $EmiCraftContext$Type;
        getInventory(): $EmiPlayerInventory;
        getScreen(): $AbstractContainerScreen<T>;
        getAmount(): number;
        constructor(screen: $AbstractContainerScreen<T>, inventory: $EmiPlayerInventory, type: $EmiCraftContext$Type_, destination: $EmiCraftContext$Destination_, amount: number);
        constructor(screen: $AbstractContainerScreen<T>, inventory: $EmiPlayerInventory, type: $EmiCraftContext$Type_);
        get screenHandler(): T;
        get destination(): $EmiCraftContext$Destination;
        get type(): $EmiCraftContext$Type;
        get inventory(): $EmiPlayerInventory;
        get screen(): $AbstractContainerScreen<T>;
        get amount(): number;
    }
    export class $EmiCraftContext$Type extends $Enum<$EmiCraftContext$Type> implements $GlobalMixin {
        static values(): $EmiCraftContext$Type[];
        static valueOf(name: string): $EmiCraftContext$Type;
        static CRAFTABLE: $EmiCraftContext$Type;
        static FILL_BUTTON: $EmiCraftContext$Type;
    }
    /**
     * Values that may be interpreted as {@link $EmiCraftContext$Type}.
     */
    export type $EmiCraftContext$Type_ = "fill_button" | "craftable";
    export class $EmiRecipeHandler<T extends $AbstractContainerMenu> {
        static NOT_ENOUGH_INGREDIENTS: $Component;
    }
    export interface $EmiRecipeHandler<T extends $AbstractContainerMenu> extends $GlobalMixin {
        supportsRecipe(arg0: $EmiRecipe): boolean;
        alwaysDisplaySupport(recipe: $EmiRecipe): boolean;
        craft(arg0: $EmiRecipe, arg1: $EmiCraftContext<T>): boolean;
        canCraft(arg0: $EmiRecipe, arg1: $EmiCraftContext<T>): boolean;
        render(recipe: $EmiRecipe, context: $EmiCraftContext<T>, widgets: $List_<$Widget>, draw: $GuiGraphics): void;
        getInventory(arg0: $AbstractContainerScreen<T>): $EmiPlayerInventory;
        getTooltip(recipe: $EmiRecipe, context: $EmiCraftContext<T>): $List<$ClientTooltipComponent>;
    }
    export class $StandardRecipeHandler<T extends $AbstractContainerMenu> {
        static renderMissing(recipe: $EmiRecipe, inv: $EmiPlayerInventory, widgets: $List_<$Widget>, draw: $GuiGraphics): void;
    }
    export interface $StandardRecipeHandler<T extends $AbstractContainerMenu> extends $EmiRecipeHandler<T>, $GlobalMixin {
        getCraftingSlots(recipe: $EmiRecipe, handler: T): $List<$Slot>;
        getCraftingSlots(arg0: T): $List<$Slot>;
        getOutputSlot(handler: T): $Slot;
        getInputSources(arg0: T): $List<$Slot>;
        craft(recipe: $EmiRecipe, context: $EmiCraftContext<T>): boolean;
        canCraft(recipe: $EmiRecipe, context: $EmiCraftContext<T>): boolean;
        render(recipe: $EmiRecipe, context: $EmiCraftContext<T>, widgets: $List_<$Widget>, draw: $GuiGraphics): void;
        getInventory(screen: $AbstractContainerScreen<T>): $EmiPlayerInventory;
    }
}
