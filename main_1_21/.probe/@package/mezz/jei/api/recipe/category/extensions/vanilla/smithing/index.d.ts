import { $IIngredientAcceptor } from "@package/mezz/jei/api/gui/builder";
import { $SmithingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $IFocusGroup } from "@package/mezz/jei/api/recipe";
import { $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $Class } from "@package/java/lang";

declare module "@package/mezz/jei/api/recipe/category/extensions/vanilla/smithing" {
    export class $IExtendableSmithingRecipeCategory {
    }
    export interface $IExtendableSmithingRecipeCategory {
        addExtension<R extends $SmithingRecipe>(arg0: $Class<R>, arg1: $ISmithingCategoryExtension<R>): void;
    }
    /**
     * Values that may be interpreted as {@link $IExtendableSmithingRecipeCategory}.
     */
    export type $IExtendableSmithingRecipeCategory_ = ((arg0: $Class<any>, arg1: $ISmithingCategoryExtension<any>) => void);
    export class $ISmithingCategoryExtension<R extends $SmithingRecipe> {
    }
    export interface $ISmithingCategoryExtension<R extends $SmithingRecipe> {
        setOutput<T extends $IIngredientAcceptor<T>>(arg0: R, arg1: T): void;
        onDisplayedIngredientsUpdate(arg0: R, arg1: $IRecipeSlotDrawable, arg2: $IRecipeSlotDrawable, arg3: $IRecipeSlotDrawable, arg4: $IRecipeSlotDrawable, arg5: $IFocusGroup): void;
        setTemplate<T extends $IIngredientAcceptor<T>>(arg0: R, arg1: T): void;
        setAddition<T extends $IIngredientAcceptor<T>>(arg0: R, arg1: T): void;
        setBase<T extends $IIngredientAcceptor<T>>(arg0: R, arg1: T): void;
    }
}
