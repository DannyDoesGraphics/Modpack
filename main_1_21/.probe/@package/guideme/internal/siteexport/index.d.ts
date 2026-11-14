import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ResourceExporter } from "@package/guideme/siteexport";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Collection_ } from "@package/java/util";
import { $Guide } from "@package/guideme";
import { $Path_, $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $AutoCloseable, $Runnable_, $Enum } from "@package/java/lang";
import { $Vector3f } from "@package/org/joml";

declare module "@package/guideme/internal/siteexport" {
    export class $ExportFeedbackSink {
    }
    export interface $ExportFeedbackSink {
        sendFeedback(arg0: $Component_): void;
        sendError(arg0: $Component_): void;
    }
    export class $OffScreenRenderer implements $AutoCloseable {
        isAnimated(arg0: $Collection_<$TextureAtlasSprite>): boolean;
        captureAsPng(arg0: $Runnable_, arg1: $Path_): void;
        captureAsPng(arg0: $Runnable_): number[];
        setupOrtographicRendering(): void;
        setupPerspectiveRendering(arg0: number, arg1: number, arg2: $Vector3f, arg3: $Vector3f): void;
        setupItemRendering(): void;
        captureAsWebp(arg0: $Runnable_, arg1: $Collection_<$TextureAtlasSprite>, arg2: $WebPExporter$Format_): number[];
        close(): void;
        constructor(arg0: number, arg1: number);
    }
    export class $WebPExporter$Format extends $Enum<$WebPExporter$Format> {
        static values(): $WebPExporter$Format[];
        static valueOf(arg0: string): $WebPExporter$Format;
        static LOSSLESS: $WebPExporter$Format;
        static LOSSLESS_ALPHA: $WebPExporter$Format;
        static NORMAL: $WebPExporter$Format;
        static NORMAL_ALPHA: $WebPExporter$Format;
    }
    /**
     * Values that may be interpreted as {@link $WebPExporter$Format}.
     */
    export type $WebPExporter$Format_ = "lossless_alpha" | "lossless" | "normal_alpha" | "normal";
    export class $SiteExporter implements $ResourceExporter {
        getOutputFolder(): $Path;
        referenceItem(arg0: $ItemStack_): void;
        getCurrentPageId(): $ResourceLocation;
        exportTexture(arg0: $ResourceLocation_): string;
        getPageSpecificPathForWriting(arg0: string): $Path;
        referenceFluid(arg0: $Fluid_): void;
        getPathForWriting(arg0: $ResourceLocation_): $Path;
        getPageSpecificResourceLocation(arg0: string): $ResourceLocation;
        referenceRecipe(arg0: $RecipeHolder_<never>): void;
        renderAndWrite(arg0: $OffScreenRenderer, arg1: string, arg2: $Runnable_, arg3: $Collection_<$TextureAtlasSprite>, arg4: boolean): $Path;
        "export"(arg0: $ExportFeedbackSink): void;
        copyResource(arg0: $ResourceLocation_): $Path;
        exportOnNextTickAndExit(): void;
        referenceItem(arg0: $ItemLike_): void;
        getPathRelativeFromOutputFolder(arg0: $Path_): string;
        constructor(arg0: $Minecraft, arg1: $Path_, arg2: $Guide);
        get outputFolder(): $Path;
        get currentPageId(): $ResourceLocation;
    }
}
