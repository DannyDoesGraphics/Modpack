import { $ItemLike, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $RecordTypeInfo, $TypeInfo_ } from "@package/dev/latvian/mods/rhino/type";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Object, $Iterable_, $Record } from "@package/java/lang";
import { $RecipeComponent } from "@package/dev/latvian/mods/kubejs/recipe/component";

declare module "@package/dev/latvian/mods/kubejs/recipe/match" {
    export class $Replaceable {
    }
    export interface $Replaceable {
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
    }
    export class $ReplacementMatchInfo extends $Record {
        componentType(): ($RecipeComponent<never>) | undefined;
        static wrap(o: $Object, target: $TypeInfo_): $ReplacementMatchInfo;
        match(): $ReplacementMatch;
        exact(): boolean;
        static TYPE_INFO: $RecordTypeInfo;
        static NONE: $ReplacementMatchInfo;
        constructor(match: $ReplacementMatch_, exact: boolean, componentType: ($RecipeComponent<never>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ReplacementMatchInfo}.
     */
    export type $ReplacementMatchInfo_ = $ReplacementMatch_ | { exact?: boolean, componentType?: ($RecipeComponent<never>) | undefined, match?: $ReplacementMatch_,  } | [exact?: boolean, componentType?: ($RecipeComponent<never>) | undefined, match?: $ReplacementMatch_, ];
    export class $FluidMatch {
    }
    export interface $FluidMatch extends $ReplacementMatch {
        matches(cx: $RecipeMatchContext, stack: $FluidStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
    }
    export class $ItemMatch {
    }
    export interface $ItemMatch extends $ReplacementMatch {
        matchesAny(cx: $RecipeMatchContext, itemLikes: $Iterable_<$ItemLike>, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
    }
    export class $ReplacementMatch {
        static wrap(o: $Object): $ReplacementMatch;
        static NONE: $ReplacementMatch;
    }
    export interface $ReplacementMatch {
    }
    /**
     * Values that may be interpreted as {@link $ReplacementMatch}.
     */
    export type $ReplacementMatch_ = $Ingredient_;
}
