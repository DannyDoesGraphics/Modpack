import { $ResourceNodeFeatureConfig } from "@package/rearth/oritech/init/world/features/resourcenode";
import { $UraniumPatchFeatureConfig } from "@package/rearth/oritech/init/world/features/uranium";
import { $Registry } from "@package/net/minecraft/core";
import { $OilSpringFeatureConfig } from "@package/rearth/oritech/init/world/features/oil";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Feature, $Feature_ } from "@package/net/minecraft/world/level/levelgen/feature";
import { $Field } from "@package/java/lang/reflect";
import { $Class } from "@package/java/lang";
import { $RegistrySupplier } from "@package/dev/architectury/registry/registries";
import { $ArchitecturyRegistryContainer } from "@package/rearth/oritech/util/registry";
export * as features from "@package/rearth/oritech/init/world/features";

declare module "@package/rearth/oritech/init/world" {
    export class $FeatureContent implements $ArchitecturyRegistryContainer<$Feature<never>> {
        getRegistryType(): $ResourceKey<$Registry<$Feature<never>>>;
        static initialize(): void;
        getTargetFieldType(): $Class<$Feature<never>>;
        postProcessField(arg0: string, arg1: $Feature_<never>, arg2: string, arg3: $Field, arg4: $RegistrySupplier<$Feature_<never>>): void;
        shouldProcessField(arg0: $Feature_<never>, arg1: string, arg2: $Field): boolean;
        afterFieldProcessing(): void;
        static RESOURCE_NODE: $Feature<$ResourceNodeFeatureConfig>;
        static URANIUM_PATCH: $Feature<$UraniumPatchFeatureConfig>;
        static OIL_SPRING: $Feature<$OilSpringFeatureConfig>;
        constructor();
        get registryType(): $ResourceKey<$Registry<$Feature<never>>>;
        get targetFieldType(): $Class<$Feature<never>>;
    }
}
