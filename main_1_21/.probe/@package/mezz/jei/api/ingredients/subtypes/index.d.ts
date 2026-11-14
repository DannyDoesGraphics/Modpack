import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IIngredientTypeWithSubtypes, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $Object, $Enum } from "@package/java/lang";

declare module "@package/mezz/jei/api/ingredients/subtypes" {
    export class $UidContext extends $Enum<$UidContext> {
        static values(): $UidContext[];
        static valueOf(arg0: string): $UidContext;
        static Ingredient: $UidContext;
        static Recipe: $UidContext;
    }
    /**
     * Values that may be interpreted as {@link $UidContext}.
     */
    export type $UidContext_ = "ingredient" | "recipe";
    export class $ISubtypeInterpreter<T> {
    }
    export interface $ISubtypeInterpreter<T> {
        getSubtypeData(arg0: T, arg1: $UidContext_): $Object;
        /**
         * @deprecated
         */
        getLegacyStringSubtypeInfo(arg0: T, arg1: $UidContext_): string;
    }
    export class $ISubtypeManager {
    }
    export interface $ISubtypeManager {
        getSubtypeData<B, T>(arg0: $IIngredientTypeWithSubtypes<B, T>, arg1: $ITypedIngredient<T>, arg2: $UidContext_): $Object;
        getSubtypeData<T>(arg0: $IIngredientTypeWithSubtypes<never, T>, arg1: T, arg2: $UidContext_): $Object;
        getSubtypeData(arg0: $ItemStack_, arg1: $UidContext_): $Object;
        hasSubtypes(arg0: $ItemStack_): boolean;
        hasSubtypes<T, B>(arg0: $IIngredientTypeWithSubtypes<B, T>, arg1: T): boolean;
        /**
         * @deprecated
         */
        getSubtypeInfo<T>(arg0: $IIngredientTypeWithSubtypes<never, T>, arg1: T, arg2: $UidContext_): string;
        /**
         * @deprecated
         */
        getSubtypeInfo(arg0: $ItemStack_, arg1: $UidContext_): string;
    }
    /**
     * @deprecated
     */
    export class $IIngredientSubtypeInterpreter<T> {
        /**
         * @deprecated
         */
        static NONE: string;
    }
    export interface $IIngredientSubtypeInterpreter<T> {
        /**
         * @deprecated
         */
        apply(arg0: T, arg1: $UidContext_): string;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientSubtypeInterpreter}.
     */
    export type $IIngredientSubtypeInterpreter_<T> = ((arg0: T, arg1: $UidContext) => string);
}
