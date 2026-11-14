import { $IRecipeLayoutBuilder } from "@package/mezz/jei/api/gui/builder";
import { $IFocusGroup } from "@package/mezz/jei/api/recipe";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $SequencedRecipe } from "@package/com/simibubi/create/content/processing/sequenced";

declare module "@package/com/simibubi/create/compat/jei/category/sequencedAssembly" {
    export class $SequencedAssemblySubCategory$AssemblyCutting extends $SequencedAssemblySubCategory {
        constructor();
    }
    export class $SequencedAssemblySubCategory$AssemblySpouting extends $SequencedAssemblySubCategory {
        constructor();
    }
    export class $SequencedAssemblySubCategory$AssemblyPressing extends $SequencedAssemblySubCategory {
        constructor();
    }
    export class $SequencedAssemblySubCategory$AssemblyDeploying extends $SequencedAssemblySubCategory {
        constructor();
    }
    export class $SequencedAssemblySubCategory {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $SequencedRecipe<never>, arg2: $IFocusGroup, arg3: number): void;
        draw(arg0: $SequencedRecipe<never>, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        getWidth(): number;
        constructor(arg0: number);
        get width(): number;
    }
}
