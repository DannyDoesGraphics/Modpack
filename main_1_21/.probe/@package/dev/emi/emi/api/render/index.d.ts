import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/dev/emi/emi/api/render" {
    export class $EmiRenderable {
    }
    export interface $EmiRenderable extends $GlobalMixin {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): void;
    }
    /**
     * Values that may be interpreted as {@link $EmiRenderable}.
     */
    export type $EmiRenderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $EmiTexture implements $EmiRenderable, $GlobalMixin {
        render(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        static EMPTY_FLAME: $EmiTexture;
        texture: $ResourceLocation;
        textureWidth: number;
        static LARGE_SLOT: $EmiTexture;
        regionWidth: number;
        textureHeight: number;
        static FULL_ARROW: $EmiTexture;
        static EMPTY_ARROW: $EmiTexture;
        u: number;
        v: number;
        static SHAPELESS: $EmiTexture;
        static SLOT: $EmiTexture;
        static FULL_FLAME: $EmiTexture;
        width: number;
        regionHeight: number;
        static PLUS: $EmiTexture;
        height: number;
        constructor(texture: $ResourceLocation_, u: number, v: number, width: number, height: number);
        constructor(texture: $ResourceLocation_, u: number, v: number, width: number, height: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number);
    }
}
