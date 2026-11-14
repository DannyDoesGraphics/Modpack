import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $List_, $List } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $RecipeComponent } from "@package/dev/latvian/mods/kubejs/recipe/component";

declare module "@package/dev/latvian/mods/kubejs/recipe/schema/function" {
    export class $RecipeFunctionInstance extends $Record {
        name(): string;
        "function"(): $ResolvedRecipeSchemaFunction;
        "arguments"(): $List<$RecipeComponent<never>>;
        constructor(name: string, arg1: $ResolvedRecipeSchemaFunction_);
        constructor(name: string, arg1: $List_<$RecipeComponent<never>>, arg2: $ResolvedRecipeSchemaFunction_);
    }
    /**
     * Values that may be interpreted as {@link $RecipeFunctionInstance}.
     */
    export type $RecipeFunctionInstance_ = { function?: $ResolvedRecipeSchemaFunction_, name?: string, arguments?: $List_<$RecipeComponent<never>>,  } | [function?: $ResolvedRecipeSchemaFunction_, name?: string, arguments?: $List_<$RecipeComponent<never>>, ];
    export class $ResolvedRecipeSchemaFunction {
    }
    export interface $ResolvedRecipeSchemaFunction {
        execute(cx: $RecipeScriptContext, args: $List_<$Object>): void;
        "arguments"(): $List<$RecipeComponent<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ResolvedRecipeSchemaFunction}.
     */
    export type $ResolvedRecipeSchemaFunction_ = ((cx: $RecipeScriptContext, args: $List<$Object>) => void);
}
