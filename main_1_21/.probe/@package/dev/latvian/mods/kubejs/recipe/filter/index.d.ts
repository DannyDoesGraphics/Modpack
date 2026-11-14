import { $RecipeLikeContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Predicate } from "@package/java/util/function";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { SpecialTypes, RegistryTypes } from "@special/types";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $Context } from "@package/dev/latvian/mods/rhino";

declare module "@package/dev/latvian/mods/kubejs/recipe/filter" {
    export class $RecipeFilterParseEvent extends $Event {
        cx: $Context;
        filters: $List<$RecipeFilter>;
        map: $Map<never, never>;
        constructor(filters: $List_<$RecipeFilter_>, map: $Map_<never, never>);
    }
    export class $RecipeFilter {
        static wrap(o: $Object): $RecipeFilter;
    }
    export interface $RecipeFilter extends $Predicate<$RecipeMatchContext> {
        test(cx: $RecipeMatchContext): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RecipeFilter}.
     */
    export type $RecipeFilter_ = RegExp | "*" | "-" | $RecipeFilter[] | { or?: $RecipeFilter_[], not?: $RecipeFilter_, id?: SpecialTypes.RecipeId, type?: RegistryTypes.RecipeSerializer, group?: string, mod?: SpecialTypes.ModId, input?: $Ingredient_, output?: $ItemStack_,  } | ((cx: $RecipeMatchContext) => boolean);
    export class $RecipeMatchContext {
    }
    export interface $RecipeMatchContext extends $RecipeLikeContext {
    }
}
