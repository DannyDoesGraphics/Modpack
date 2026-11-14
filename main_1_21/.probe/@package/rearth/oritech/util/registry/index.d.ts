import { $Annotation } from "@package/java/lang/annotation";
import { $Registry } from "@package/net/minecraft/core";
import { $RecipeSerializer, $RecipeType_, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $Rarity_, $BlockItem, $Item } from "@package/net/minecraft/world/item";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Field } from "@package/java/lang/reflect";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Class } from "@package/java/lang";
import { $DeferredRegister, $RegistrySupplier } from "@package/dev/architectury/registry/registries";

declare module "@package/rearth/oritech/util/registry" {
    export class $ArchitecturyBlockRegistryContainer {
        static finishItemRegister(): void;
        static ITEM_REGISTRY: $DeferredRegister<$Item>;
    }
    export interface $ArchitecturyBlockRegistryContainer extends $ArchitecturyRegistryContainer<$Block> {
        postProcessField(arg0: string, arg1: $Block_, arg2: string, arg3: $Field, arg4: $RegistrySupplier<$Block_>): void;
        getRegistryType(): $ResourceKey<$Registry<$Block>>;
        createBlockItem(arg0: $Block_, arg1: $Rarity_, arg2: string): $BlockItem;
        getTargetFieldType(): $Class<$Block>;
        get registryType(): $ResourceKey<$Registry<$Block>>;
        get targetFieldType(): $Class<$Block>;
    }
    /**
     * Values that may be interpreted as {@link $ArchitecturyBlockRegistryContainer}.
     */
    export type $ArchitecturyBlockRegistryContainer_ = ((arg0: string, arg1: $Block, arg2: string, arg3: $Field, arg4: $RegistrySupplier<$Block>) => void);
    export class $ArchitecturyRecipeRegistryContainer {
        static finishSerializerRegister(): void;
        static SERIALIZER_REGISTRY: $DeferredRegister<$RecipeSerializer<never>>;
    }
    export interface $ArchitecturyRecipeRegistryContainer extends $ArchitecturyRegistryContainer<$RecipeType<never>> {
        postProcessField(arg0: string, arg1: $RecipeType_<never>, arg2: string, arg3: $Field, arg4: $RegistrySupplier<$RecipeType_<never>>): void;
        getRegistryType(): $ResourceKey<$Registry<$RecipeType<never>>>;
        getTargetFieldType(): $Class<$RecipeType<never>>;
        get registryType(): $ResourceKey<$Registry<$RecipeType<never>>>;
        get targetFieldType(): $Class<$RecipeType<never>>;
    }
    export class $NoBlockItem implements $Annotation {
    }
    export class $ArchitecturyRegistryContainer<T> {
        static register<T>(arg0: $Class<$ArchitecturyRegistryContainer<T>>, arg1: string, arg2: boolean): void;
    }
    export interface $ArchitecturyRegistryContainer<T> {
        postProcessField(arg0: string, arg1: T, arg2: string, arg3: $Field, arg4: $RegistrySupplier<T>): void;
        getRegistryType(): $ResourceKey<$Registry<T>>;
        shouldProcessField(arg0: T, arg1: string, arg2: $Field): boolean;
        afterFieldProcessing(): void;
        getTargetFieldType(): $Class<T>;
        get registryType(): $ResourceKey<$Registry<T>>;
        get targetFieldType(): $Class<T>;
    }
}
