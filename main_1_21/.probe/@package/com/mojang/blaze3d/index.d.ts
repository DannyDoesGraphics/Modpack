import { $Annotation } from "@package/java/lang/annotation";
import { $RenderPipeline } from "@package/com/mojang/blaze3d/pipeline";
export * as font from "@package/com/mojang/blaze3d/font";
export * as vertex from "@package/com/mojang/blaze3d/vertex";
export * as platform from "@package/com/mojang/blaze3d/platform";
export * as systems from "@package/com/mojang/blaze3d/systems";
export * as audio from "@package/com/mojang/blaze3d/audio";
export * as shaders from "@package/com/mojang/blaze3d/shaders";
export * as pipeline from "@package/com/mojang/blaze3d/pipeline";
export * as preprocessor from "@package/com/mojang/blaze3d/preprocessor";

declare module "@package/com/mojang/blaze3d" {
    export class $Blaze3D {
        static getTime(): number;
        static process(pipeline: $RenderPipeline, unknown: number): void;
        static render(pipeline: $RenderPipeline, unknown: number): void;
        static youJustLostTheGame(): void;
        constructor();
        static get time(): number;
    }
    export class $DontObfuscate implements $Annotation {
    }
    export class $FieldsAreNonnullByDefault implements $Annotation {
    }
    export class $MethodsReturnNonnullByDefault implements $Annotation {
    }
}
