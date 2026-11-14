import { $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/net/minecraft/data/metadata" {
    export class $PackMetadataGenerator implements $DataProvider {
        static forFeaturePack(output: $PackOutput, description: $Component_): $PackMetadataGenerator;
        static forFeaturePack(output: $PackOutput, description: $Component_, flags: $FeatureFlagSet): $PackMetadataGenerator;
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        add<T>(type: $MetadataSectionType<T>, value: T): $PackMetadataGenerator;
        constructor(output: $PackOutput);
        get name(): string;
    }
}
