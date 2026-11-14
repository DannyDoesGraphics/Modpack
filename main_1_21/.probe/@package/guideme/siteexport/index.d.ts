import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LytNode } from "@package/guideme/document/block";

declare module "@package/guideme/siteexport" {
    export class $ResourceExporter {
    }
    export interface $ResourceExporter {
        getOutputFolder(): $Path;
        referenceItem(arg0: $ItemLike_): void;
        referenceItem(arg0: $ItemStack_): void;
        getCurrentPageId(): $ResourceLocation;
        exportTexture(arg0: $ResourceLocation_): string;
        getPageSpecificPathForWriting(arg0: string): $Path;
        referenceFluid(arg0: $Fluid_): void;
        getPathForWriting(arg0: $ResourceLocation_): $Path;
        getPathRelativeFromOutputFolder(arg0: $Path_): string;
        getPageSpecificResourceLocation(arg0: string): $ResourceLocation;
        referenceRecipe(arg0: $RecipeHolder_<never>): void;
        copyResource(arg0: $ResourceLocation_): $Path;
        get outputFolder(): $Path;
        get currentPageId(): $ResourceLocation;
    }
    export class $ExportableResourceProvider {
        static visit(arg0: $LytNode, arg1: $ResourceExporter): void;
    }
    export interface $ExportableResourceProvider {
        exportResources(arg0: $ResourceExporter): void;
    }
    /**
     * Values that may be interpreted as {@link $ExportableResourceProvider}.
     */
    export type $ExportableResourceProvider_ = ((arg0: $ResourceExporter) => void);
}
