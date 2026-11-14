import { $Function_, $Function } from "@package/java/util/function";
import { $LytFlowParent_ } from "@package/guideme/document/flow";
import { $RecipeHolder, $RecipeType_, $RecipeInput, $RecipeType, $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $PageCompiler, $IndexingContext, $TagCompiler, $IndexingSink } from "@package/guideme/compiler";
import { $MdxJsxFlowElement, $MdxJsxTextElement, $MdxJsxElementFields } from "@package/guideme/libs/mdast/mdx/model";
import { $LytBlockContainer_, $LytBlock } from "@package/guideme/document/block";
import { $ExtensionCollection, $ExtensionPoint, $Extension } from "@package/guideme/extensions";

declare module "@package/guideme/compiler/tags" {
    export class $RecipeTypeMappingSupplier$RecipeTypeMappings {
    }
    export interface $RecipeTypeMappingSupplier$RecipeTypeMappings {
        add<T extends $Recipe<C>, C extends $RecipeInput>(arg0: $RecipeType_<T>, arg1: $Function_<$RecipeHolder<T>, $LytBlock>): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeTypeMappingSupplier$RecipeTypeMappings}.
     */
    export type $RecipeTypeMappingSupplier$RecipeTypeMappings_ = ((arg0: $RecipeType<any>, arg1: $Function<$RecipeHolder<any>, $LytBlock>) => void);
    export class $FlowTagCompiler implements $TagCompiler {
        compileBlockContext(arg0: $PageCompiler, arg1: $LytBlockContainer_, arg2: $MdxJsxFlowElement): void;
        compileFlowContext(arg0: $PageCompiler, arg1: $LytFlowParent_, arg2: $MdxJsxTextElement): void;
        index(arg0: $IndexingContext, arg1: $MdxJsxElementFields, arg2: $IndexingSink): void;
        onExtensionsBuilt(arg0: $ExtensionCollection): void;
        constructor();
    }
    export class $RecipeTypeMappingSupplier {
        static EXTENSION_POINT: $ExtensionPoint<$RecipeTypeMappingSupplier>;
    }
    export interface $RecipeTypeMappingSupplier extends $Extension {
        collect(arg0: $RecipeTypeMappingSupplier$RecipeTypeMappings_): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeTypeMappingSupplier}.
     */
    export type $RecipeTypeMappingSupplier_ = ((arg0: $RecipeTypeMappingSupplier$RecipeTypeMappings) => void);
}
