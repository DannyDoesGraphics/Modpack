import { $IAE2DataProvider } from "@package/appeng/datagen/providers";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Enum, $Class } from "@package/java/lang";
import { $CachedOutput_, $DataGenerator } from "@package/net/minecraft/data";

declare module "@package/appeng/datagen/providers/localization" {
    export class $LocalizationProvider implements $IAE2DataProvider {
        addEnum<T extends $Enum<T>>(arg0: $Class<T>): void;
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        add(arg0: string, arg1: string): void;
        component(arg0: string, arg1: string): $Component;
        constructor(arg0: $DataGenerator);
        get name(): string;
    }
}
