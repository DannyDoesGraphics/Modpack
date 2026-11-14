import { $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ScreenProvider$GuiSlot_, $InventorySlotAssignment_ } from "@package/rearth/oritech/util";
import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Widget } from "@package/dev/emi/emi/api/widget";
import { $ItemFilterScreen } from "@package/rearth/oritech/client/ui";
import { $EmiInitRegistry, $EmiPlugin, $EmiDragDropHandler, $EmiRegistry } from "@package/dev/emi/emi/api";
import { $List, $List_ } from "@package/java/util";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $EmiCraftContext, $StandardRecipeHandler } from "@package/dev/emi/emi/api/recipe/handler";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $OritechRecipe } from "@package/rearth/oritech/init/recipes";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MachineBlockEntity } from "@package/rearth/oritech/block/base/entity";
import { $Slot, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $EmiRecipe, $EmiPlayerInventory, $BasicEmiRecipe, $EmiRecipeCategory } from "@package/dev/emi/emi/api/recipe";
import { $Class } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/rearth/oritech/init/compat/emi" {
    export class $OritechEMIPlugin implements $EmiPlugin {
        register(arg0: $EmiRegistry): void;
        initialize(registry: $EmiInitRegistry): void;
        constructor();
    }
    export class $EmiItemFilterDragDropHandler implements $EmiDragDropHandler<$ItemFilterScreen> {
        dropStack(arg0: $ItemFilterScreen, arg1: $EmiIngredient, arg2: number, arg3: number): boolean;
        render(arg0: $ItemFilterScreen, arg1: $EmiIngredient, arg2: $GuiGraphics, arg3: number, arg4: number, arg5: number): void;
        constructor();
    }
    export class $OritechEmiTaintedRefineryCreation extends $BasicEmiRecipe {
        constructor(arg0: $EmiRecipeCategory);
    }
    export class $OritechEMIRecipe extends $BasicEmiRecipe {
        constructor(arg0: $RecipeHolder_<$OritechRecipe>, arg1: $EmiRecipeCategory, arg2: $Class<$MachineBlockEntity>, arg3: $BlockState_);
        constructor(arg0: $RecipeHolder_<$OritechRecipe>, arg1: $EmiRecipeCategory, arg2: boolean, arg3: $List_<$ScreenProvider$GuiSlot_>, arg4: $InventorySlotAssignment_);
    }
    export class $EmiTransferHandler<S extends $AbstractContainerMenu> implements $StandardRecipeHandler<S> {
        supportsRecipe(arg0: $EmiRecipe): boolean;
        getCraftingSlots(arg0: S): $List<$Slot>;
        getInputSources(arg0: S): $List<$Slot>;
        craft(arg0: $EmiRecipe, arg1: $EmiCraftContext<S>): boolean;
        canCraft(arg0: $EmiRecipe, arg1: $EmiCraftContext<S>): boolean;
        getCraftingSlots(recipe: $EmiRecipe, handler: S): $List<$Slot>;
        getOutputSlot(handler: S): $Slot;
        render(recipe: $EmiRecipe, context: $EmiCraftContext<S>, widgets: $List_<$Widget>, draw: $GuiGraphics): void;
        getInventory(screen: $AbstractContainerScreen<S>): $EmiPlayerInventory;
        alwaysDisplaySupport(recipe: $EmiRecipe): boolean;
        getTooltip(recipe: $EmiRecipe, context: $EmiCraftContext<S>): $List<$ClientTooltipComponent>;
        constructor(arg0: $ResourceLocation_);
    }
    export class $OritechEmiLaserRecipe extends $BasicEmiRecipe {
        static LASER_RECIPE_OVERLAY: $ResourceLocation;
        constructor(arg0: $RecipeHolder_<$OritechRecipe>, arg1: $EmiRecipeCategory);
    }
    export class $OritechEmiTaintedRefineryBonuses extends $BasicEmiRecipe {
        constructor(arg0: $EmiRecipeCategory, arg1: $TagKey_<$Block>, arg2: string, arg3: string);
    }
    export class $OritechEMIParticleCollisionRecipe extends $BasicEmiRecipe {
        static PARTICLE_RECIPE_OVERLAY: $ResourceLocation;
        constructor(arg0: $RecipeHolder_<$OritechRecipe>, arg1: $EmiRecipeCategory);
    }
}
