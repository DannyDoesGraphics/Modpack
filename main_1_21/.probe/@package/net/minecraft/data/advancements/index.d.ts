import { $AdvancementHolder } from "@package/net/minecraft/advancements";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $List_ } from "@package/java/util";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";
export * as packs from "@package/net/minecraft/data/advancements/packs";

declare module "@package/net/minecraft/data/advancements" {
    /**
     * @deprecated
     */
    export class $AdvancementProvider implements $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>, subProviders: $List_<$AdvancementSubProvider_>);
        get name(): string;
    }
    export class $AdvancementSubProvider {
        static createPlaceholder(location: string): $AdvancementHolder;
    }
    export interface $AdvancementSubProvider {
        generate(registries: $HolderLookup$Provider, writer: $Consumer_<$AdvancementHolder>): void;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementSubProvider}.
     */
    export type $AdvancementSubProvider_ = ((arg0: $HolderLookup$Provider, arg1: $Consumer<$AdvancementHolder>) => void);
}
