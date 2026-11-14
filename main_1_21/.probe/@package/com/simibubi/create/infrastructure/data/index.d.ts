import { $TrainHatInfoProvider } from "@package/com/simibubi/create/api/data";
import { $TagBuilder } from "@package/net/minecraft/tags";
import { $DatapackBuiltinEntriesProvider, $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $RecipeSerializer } from "@package/net/minecraft/world/item/crafting";
import { $IntrinsicHolderTagsProvider, $EnchantmentTagsProvider, $TagsProvider } from "@package/net/minecraft/data/tags";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ContraptionType } from "@package/com/simibubi/create/api/contraption";
import { $Map } from "@package/java/util";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";
import { $BiConsumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $GatherDataEvent } from "@package/net/neoforged/neoforge/data/event";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $MountedItemStorageType } from "@package/com/simibubi/create/api/contraption/storage/item";

declare module "@package/com/simibubi/create/infrastructure/data" {
    export class $CreateRegistrateTags {
        static addGenerators(): void;
        constructor();
    }
    export class $CreateWikiBlockInfoProvider implements $DataProvider {
        getName(): string;
        run(arg0: $CachedOutput_): $CompletableFuture<never>;
        constructor(arg0: $PackOutput);
        get name(): string;
    }
    export class $CreateMountedItemStorageTypeTagsProvider extends $IntrinsicHolderTagsProvider<$MountedItemStorageType<never>> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $CreateContraptionTypeTagsProvider extends $TagsProvider<$ContraptionType> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $GeneratedEntriesProvider extends $DatapackBuiltinEntriesProvider {
        registries: $CompletableFuture<$HolderLookup$Provider>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $TagLangGenerator {
        generate(): void;
        constructor(arg0: $BiConsumer_<string, string>);
    }
    export class $CreateEnchantmentTagsProvider extends $EnchantmentTagsProvider {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
    export class $CreateDatagen {
        static gatherDataHighPriority(arg0: $GatherDataEvent): void;
        static gatherData(arg0: $GatherDataEvent): void;
        constructor();
    }
    export class $VanillaHatOffsetGenerator extends $TrainHatInfoProvider {
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>);
    }
    export class $CreateRecipeSerializerTagsProvider extends $TagsProvider<$RecipeSerializer<never>> {
        builders: $Map<$ResourceLocation, $TagBuilder>;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: $ExistingFileHelper);
    }
}
