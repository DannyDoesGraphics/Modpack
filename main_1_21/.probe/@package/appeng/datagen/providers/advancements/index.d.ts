import { $AdvancementHolder } from "@package/net/minecraft/advancements";
import { $Consumer_ } from "@package/java/util/function";
import { $AdvancementProvider$AdvancementGenerator, $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $LocalizationProvider } from "@package/appeng/datagen/providers/localization";
import { $AdvancementSubProvider } from "@package/net/minecraft/data/advancements";

declare module "@package/appeng/datagen/providers/advancements" {
    export class $AdvancementGenerator implements $AdvancementProvider$AdvancementGenerator {
        generate(arg0: $HolderLookup$Provider, arg1: $Consumer_<$AdvancementHolder>, arg2: $ExistingFileHelper): void;
        toSubProvider(arg0: $ExistingFileHelper): $AdvancementSubProvider;
        constructor(arg0: $LocalizationProvider);
    }
}
