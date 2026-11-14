import { $TagKey } from "@package/net/minecraft/tags";
import { $Item } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Map, $List } from "@package/java/util";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/com/railwayteam/railways/base/data/compat/emi" {
    export class $EmiExcludedTagGen implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput);
        get name(): string;
    }
    export class $EmiRecipeDefaultsGen implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        static DEFAULT_RECIPES: $List<$ResourceLocation>;
        static TAG_DEFAULTS: $Map<$TagKey<$Item>, $ResourceLocation>;
        constructor(arg0: $PackOutput);
        get name(): string;
    }
}
