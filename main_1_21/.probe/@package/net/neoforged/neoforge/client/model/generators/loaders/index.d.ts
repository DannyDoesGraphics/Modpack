import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ModelBuilder, $CustomLoaderBuilder } from "@package/net/neoforged/neoforge/client/model/generators";

declare module "@package/net/neoforged/neoforge/client/model/generators/loaders" {
    export class $ObjModelBuilder<T extends $ModelBuilder<T>> extends $CustomLoaderBuilder<T> {
        modelLocation(modelLocation: $ResourceLocation_): $ObjModelBuilder<T>;
        flipV(automaticCulling: boolean): $ObjModelBuilder<T>;
        overrideMaterialLibrary(modelLocation: $ResourceLocation_): $ObjModelBuilder<T>;
        static begin<T extends $ModelBuilder<T>>(arg0: T, arg1: $ExistingFileHelper): $ObjModelBuilder<T>;
        automaticCulling(automaticCulling: boolean): $ObjModelBuilder<T>;
        shadeQuads(automaticCulling: boolean): $ObjModelBuilder<T>;
        emissiveAmbient(automaticCulling: boolean): $ObjModelBuilder<T>;
    }
    export class $SeparateTransformsModelBuilder<T extends $ModelBuilder<T>> extends $CustomLoaderBuilder<T> {
        base(arg0: T): $SeparateTransformsModelBuilder<T>;
        static begin<T extends $ModelBuilder<T>>(arg0: T, arg1: $ExistingFileHelper): $SeparateTransformsModelBuilder<T>;
        perspective(arg0: $ItemDisplayContext_, arg1: T): $SeparateTransformsModelBuilder<T>;
    }
    export class $CompositeModelBuilder<T extends $ModelBuilder<T>> extends $CustomLoaderBuilder<T> {
        itemRenderOrder(...arg0: string[]): $CompositeModelBuilder<T>;
        static begin<T extends $ModelBuilder<T>>(arg0: T, arg1: $ExistingFileHelper): $CompositeModelBuilder<T>;
        child(arg0: string, arg1: T): $CompositeModelBuilder<T>;
    }
    export class $DynamicFluidContainerModelBuilder<T extends $ModelBuilder<T>> extends $CustomLoaderBuilder<T> {
        coverIsMask(flip: boolean): $DynamicFluidContainerModelBuilder<T>;
        applyFluidLuminosity(flip: boolean): $DynamicFluidContainerModelBuilder<T>;
        fluid(fluid: $Fluid_): $DynamicFluidContainerModelBuilder<T>;
        flipGas(flip: boolean): $DynamicFluidContainerModelBuilder<T>;
        applyTint(flip: boolean): $DynamicFluidContainerModelBuilder<T>;
        static begin<T extends $ModelBuilder<T>>(arg0: T, arg1: $ExistingFileHelper): $DynamicFluidContainerModelBuilder<T>;
    }
    export class $ItemLayerModelBuilder<T extends $ModelBuilder<T>> extends $CustomLoaderBuilder<T> {
        renderType(arg0: string, ...arg1: number[]): $ItemLayerModelBuilder<T>;
        renderType(arg0: $ResourceLocation_, ...arg1: number[]): $ItemLayerModelBuilder<T>;
        emissive(arg0: number, arg1: number, ...arg2: number[]): $ItemLayerModelBuilder<T>;
        static begin<T extends $ModelBuilder<T>>(arg0: T, arg1: $ExistingFileHelper): $ItemLayerModelBuilder<T>;
        color(arg0: number, ...arg1: number[]): $ItemLayerModelBuilder<T>;
    }
}
