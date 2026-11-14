import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $RecipeHolder, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ResourceManagerReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Set_, $List, $Set } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/com/simibubi/create/foundation/recipe/trie" {
    export class $AbstractIngredient$Universal extends $AbstractIngredient {
        static INSTANCE: $AbstractIngredient$Universal;
    }
    export class $RecipeTrie<R extends $Recipe<never>> {
        static builder<R extends $Recipe<never>>(): $RecipeTrie$Builder<R>;
        lookup(arg0: $Set_<$AbstractVariant>): $List<R>;
        static getVariants(arg0: $IItemHandler, arg1: $IFluidHandler): $Set<$AbstractVariant>;
    }
    export class $RecipeTrie$Builder<R extends $Recipe<never>> {
        insert<R1 extends R>(arg0: R1): void;
        build(): $RecipeTrie<R>;
    }
    export class $AbstractVariant$AbstractFluid implements $AbstractVariant {
        constructor(arg0: $Fluid_);
    }
    export class $AbstractIngredient {
        constructor(arg0: $Set_<$AbstractVariant>);
    }
    export class $IntArrayTrie$TrieNode<V> {
    }
    export class $AbstractRecipe<R extends $Recipe<never>> {
        constructor(arg0: R, arg1: $Set_<$AbstractIngredient>);
    }
    export class $AbstractVariant$AbstractItem implements $AbstractVariant {
        constructor(arg0: $Item_);
    }
    export class $AbstractVariant {
    }
    export interface $AbstractVariant {
    }
    export class $IntArrayTrie<V> {
        getNodeCount(): number;
        getValueCount(): number;
        insert(arg0: number[], arg1: V): void;
        lookup(arg0: $IntSet): $List<V>;
        getMaxDepth(): number;
        constructor();
        get nodeCount(): number;
        get valueCount(): number;
        get maxDepth(): number;
    }
    export class $RecipeTrieFinder {
        static get(arg0: $Object, arg1: $Level_, arg2: $Predicate_<$RecipeHolder<$Recipe<never>>>): $RecipeTrie<never>;
        static LISTENER: $ResourceManagerReloadListener;
        constructor();
    }
}
