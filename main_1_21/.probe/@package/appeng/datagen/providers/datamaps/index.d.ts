import { $IAE2DataProvider } from "@package/appeng/datagen/providers";
import { $DataMapProvider } from "@package/net/neoforged/neoforge/common/data";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $PackOutput } from "@package/net/minecraft/data";

declare module "@package/appeng/datagen/providers/datamaps" {
    export class $RaidHeroGiftsProvider extends $DataMapProvider implements $IAE2DataProvider {
        gather(arg0: $HolderLookup$Provider): void;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
}
