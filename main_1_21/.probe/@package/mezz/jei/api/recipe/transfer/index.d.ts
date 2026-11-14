import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Ingredient, $RecipeHolder_, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $RecipeType } from "@package/mezz/jei/api/recipe";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IRecipeSlotsView_, $IRecipeSlotView, $IRecipeSlotsView } from "@package/mezz/jei/api/gui/ingredient";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Slot, $MenuType_, $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Object, $Class } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $Map, $Collection_, $List_ } from "@package/java/util";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";

declare module "@package/mezz/jei/api/recipe/transfer" {
    export class $IRecipeTransferError$Type extends $Enum<$IRecipeTransferError$Type> {
        static values(): $IRecipeTransferError$Type[];
        static valueOf(arg0: string): $IRecipeTransferError$Type;
        static COSMETIC: $IRecipeTransferError$Type;
        static USER_FACING: $IRecipeTransferError$Type;
        static INTERNAL: $IRecipeTransferError$Type;
        allowsTransfer: boolean;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeTransferError$Type}.
     */
    export type $IRecipeTransferError$Type_ = "internal" | "user_facing" | "cosmetic";
    export class $IRecipeTransferError {
    }
    export interface $IRecipeTransferError {
        showError(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $IRecipeSlotsView_, arg4: number, arg5: number): void;
        getButtonHighlightColor(): number;
        getMissingCountHint(): number;
        getType(): $IRecipeTransferError$Type;
        getTooltip(arg0: $ITooltipBuilder): void;
        /**
         * @deprecated
         */
        getTooltip(): $List<$Component>;
        get buttonHighlightColor(): number;
        get missingCountHint(): number;
        get type(): $IRecipeTransferError$Type;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeTransferError}.
     */
    export type $IRecipeTransferError_ = (() => $IRecipeTransferError$Type_);
    export class $IRecipeTransferHandlerHelper {
    }
    export interface $IRecipeTransferHandlerHelper {
        createInternalError(): $IRecipeTransferError;
        createUserErrorWithTooltip(arg0: $Component_): $IRecipeTransferError;
        createUserErrorForMissingSlots(arg0: $Component_, arg1: $Collection_<$IRecipeSlotView>): $IRecipeTransferError;
        createBasicRecipeTransferInfo<C extends $AbstractContainerMenu, R>(arg0: $Class<C>, arg1: $MenuType_<C>, arg2: $RecipeType<R>, arg3: number, arg4: number, arg5: number, arg6: number): $IRecipeTransferInfo<C, R>;
        createUnregisteredRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferInfo<C, R>): $IRecipeTransferHandler<C, R>;
        createRecipeSlotsView(arg0: $List_<$IRecipeSlotView>): $IRecipeSlotsView;
        recipeTransferHasServerSupport(): boolean;
        getGuiSlotIndexToIngredientMap(arg0: $RecipeHolder_<$CraftingRecipe>): $Map<number, $Ingredient>;
    }
    export class $IRecipeTransferHandler<C extends $AbstractContainerMenu, R> {
    }
    export interface $IRecipeTransferHandler<C extends $AbstractContainerMenu, R> {
        getRecipeType(): $RecipeType<R>;
        getContainerClass(): $Class<C>;
        getMenuType(): ($MenuType<C>) | undefined;
        transferRecipe(arg0: C, arg1: R, arg2: $IRecipeSlotsView_, arg3: $Player, arg4: boolean, arg5: boolean): $IRecipeTransferError;
        get recipeType(): $RecipeType<R>;
        get containerClass(): $Class<C>;
        get menuType(): ($MenuType<C>) | undefined;
    }
    export class $IRecipeTransferManager {
    }
    export interface $IRecipeTransferManager {
        getRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: C, arg1: $IRecipeCategory<R>): ($IRecipeTransferHandler<C, R>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeTransferManager}.
     */
    export type $IRecipeTransferManager_ = ((arg0: any, arg1: $IRecipeCategory<any>) => ($IRecipeTransferHandler<C, R>) | undefined);
    export class $IUniversalRecipeTransferHandler<C extends $AbstractContainerMenu> {
    }
    export interface $IUniversalRecipeTransferHandler<C extends $AbstractContainerMenu> {
        getContainerClass(): $Class<C>;
        getMenuType(): ($MenuType<C>) | undefined;
        transferRecipe(arg0: C, arg1: $Object, arg2: $IRecipeSlotsView_, arg3: $Player, arg4: boolean, arg5: boolean): $IRecipeTransferError;
        get containerClass(): $Class<C>;
        get menuType(): ($MenuType<C>) | undefined;
    }
    export class $IRecipeTransferInfo<C extends $AbstractContainerMenu, R> {
    }
    export interface $IRecipeTransferInfo<C extends $AbstractContainerMenu, R> {
        requireCompleteSets(arg0: C, arg1: R): boolean;
        getHandlingError(arg0: C, arg1: R): $IRecipeTransferError;
        getRecipeType(): $RecipeType<R>;
        getContainerClass(): $Class<C>;
        getMenuType(): ($MenuType<C>) | undefined;
        getRecipeSlots(arg0: C, arg1: R): $List<$Slot>;
        canHandle(arg0: C, arg1: R): boolean;
        getInventorySlots(arg0: C, arg1: R): $List<$Slot>;
        get recipeType(): $RecipeType<R>;
        get containerClass(): $Class<C>;
        get menuType(): ($MenuType<C>) | undefined;
    }
}
