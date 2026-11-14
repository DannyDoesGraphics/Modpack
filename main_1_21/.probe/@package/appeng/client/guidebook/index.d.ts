import { $GuidebookLevel } from "@package/guideme/scene/level";
import { $Supplier } from "@package/java/util/function";
import { $SceneAnnotation } from "@package/guideme/scene/annotation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $GuiSprite } from "@package/guideme/render";
import { $LytBlock, $LytBox } from "@package/guideme/document/block";
import { $InscriberRecipe } from "@package/appeng/recipes/handlers";
import { $Map } from "@package/java/util";
import { $ImplicitAnnotationStrategy } from "@package/guideme/scene";
import { $RecipeTypeMappingSupplier, $FlowTagCompiler, $RecipeTypeMappingSupplier$RecipeTypeMappings_ } from "@package/guideme/compiler/tags";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $ExtensionCollection } from "@package/guideme/extensions";

declare module "@package/appeng/client/guidebook" {
    export class $RecipeTypeContributions implements $RecipeTypeMappingSupplier {
        collect(arg0: $RecipeTypeMappingSupplier$RecipeTypeMappings_): void;
        onExtensionsBuilt(arg0: $ExtensionCollection): void;
        constructor();
    }
    export class $LytInscriberRecipe extends $LytBox {
        constructor(arg0: $InscriberRecipe);
    }
    export class $PartAnnotationStrategy implements $ImplicitAnnotationStrategy {
        getAnnotation(arg0: $GuidebookLevel, arg1: $BlockState_, arg2: $BlockHitResult): $SceneAnnotation;
        onExtensionsBuilt(arg0: $ExtensionCollection): void;
        constructor();
    }
    export class $AE2GuideAssets {
        static INSCRIBER_ARROWS: $GuiSprite;
    }
    export class $ConfigValueTagExtension extends $FlowTagCompiler {
        static CONFIG_VALUES: $Map<string, $Supplier<string>>;
        constructor();
    }
    export class $RecipeTypeContributions$FluidIcon extends $LytBlock {
    }
}
