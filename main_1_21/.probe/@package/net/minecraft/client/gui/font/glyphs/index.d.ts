import { $GlyphInfo, $SheetGlyphInfo } from "@package/com/mojang/blaze3d/font";
import { $Function_ } from "@package/java/util/function";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $GlyphRenderTypes_ } from "@package/net/minecraft/client/gui/font";
import { $Enum } from "@package/java/lang";
import { $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/gui/font/glyphs" {
    export class $BakedGlyph$Effect {
        constructor(x0: number, y0: number, x1: number, y1: number, depth: number, r: number, g: number, b: number, a: number);
    }
    export class $BakedGlyph {
        renderType(displayMode: $Font$DisplayMode_): $RenderType;
        render(italic: boolean, x: number, y: number, matrix: $Matrix4f, buffer: $VertexConsumer, red: number, green: number, blue: number, alpha: number, packedLight: number): void;
        renderEffect(effect: $BakedGlyph$Effect, matrix: $Matrix4f, buffer: $VertexConsumer, packedLight: number): void;
        constructor(renderTypes: $GlyphRenderTypes_, u0: number, u1: number, v0: number, v1: number, left: number, right: number, up: number, down: number);
    }
    export class $SpecialGlyphs$PixelProvider {
    }
    export interface $SpecialGlyphs$PixelProvider {
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs$PixelProvider}.
     */
    export type $SpecialGlyphs$PixelProvider_ = (() => void);
    export class $EmptyGlyph extends $BakedGlyph {
        static INSTANCE: $EmptyGlyph;
        constructor();
    }
    export class $SpecialGlyphs extends $Enum<$SpecialGlyphs> implements $GlyphInfo {
        getAdvance(): number;
        static values(): $SpecialGlyphs[];
        static valueOf(arg0: string): $SpecialGlyphs;
        bake(glyphProvider: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        getShadowOffset(): number;
        getAdvance(bold: boolean): number;
        getBoldOffset(): number;
        static WHITE: $SpecialGlyphs;
        static MISSING: $SpecialGlyphs;
        get shadowOffset(): number;
        get boldOffset(): number;
    }
    /**
     * Values that may be interpreted as {@link $SpecialGlyphs}.
     */
    export type $SpecialGlyphs_ = "white" | "missing";
}
