import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $Function_ } from "@package/java/util/function";
import { $GlyphProviderDefinition, $GlyphProviderType, $GlyphProviderDefinition$Reference, $GlyphProviderDefinition$Loader } from "@package/net/minecraft/client/gui/font/providers";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $FT_Face } from "@package/org/lwjgl/util/freetype";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $FontOption$Filter } from "@package/net/minecraft/client/gui/font";
import { $Map_, $Map } from "@package/java/util";
import { $AutoCloseable, $Record } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/com/mojang/blaze3d/font" {
    export class $GlyphInfo$SpaceGlyphInfo {
    }
    export interface $GlyphInfo$SpaceGlyphInfo extends $GlyphInfo {
        bake(arg0: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
    }
    /**
     * Values that may be interpreted as {@link $GlyphInfo$SpaceGlyphInfo}.
     */
    export type $GlyphInfo$SpaceGlyphInfo_ = (() => void);
    export class $GlyphProvider$Conditional extends $Record implements $AutoCloseable {
        filter(): $FontOption$Filter;
        provider(): $GlyphProvider;
        close(): void;
        constructor(arg0: $GlyphProvider_, arg1: $FontOption$Filter);
    }
    /**
     * Values that may be interpreted as {@link $GlyphProvider$Conditional}.
     */
    export type $GlyphProvider$Conditional_ = { filter?: $FontOption$Filter, provider?: $GlyphProvider_,  } | [filter?: $FontOption$Filter, provider?: $GlyphProvider_, ];
    export class $GlyphInfo {
    }
    export interface $GlyphInfo {
        getShadowOffset(): number;
        getAdvance(bold: boolean): number;
        getAdvance(): number;
        bake(glyphProvider: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        getBoldOffset(): number;
        get shadowOffset(): number;
        get boldOffset(): number;
    }
    export class $TrueTypeGlyphProvider implements $GlyphProvider {
        getSupportedGlyphs(): $IntSet;
        getGlyph(character: number): $GlyphInfo;
        close(): void;
        constructor(fontMemory: $ByteBuffer, face: $FT_Face, size: number, oversample: number, shiftX: number, shiftY: number, skip: string);
        get supportedGlyphs(): $IntSet;
    }
    export class $SpaceProvider$Definition extends $Record implements $GlyphProviderDefinition {
        advances(): $Map<number, number>;
        type(): $GlyphProviderType;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        static CODEC: $MapCodec<$SpaceProvider$Definition>;
        constructor(arg0: $Map_<number, number>);
    }
    /**
     * Values that may be interpreted as {@link $SpaceProvider$Definition}.
     */
    export type $SpaceProvider$Definition_ = { advances?: $Map_<number, number>,  } | [advances?: $Map_<number, number>, ];
    export class $TrueTypeGlyphProvider$Glyph implements $GlyphInfo {
        getShadowOffset(): number;
        getAdvance(bold: boolean): number;
        getBoldOffset(): number;
        get shadowOffset(): number;
        get boldOffset(): number;
    }
    export class $SpaceProvider implements $GlyphProvider {
        getSupportedGlyphs(): $IntSet;
        getGlyph(character: number): $GlyphInfo;
        close(): void;
        constructor(glyphs: $Map_<number, number>);
        get supportedGlyphs(): $IntSet;
    }
    export class $SheetGlyphInfo {
    }
    export interface $SheetGlyphInfo {
        isColored(): boolean;
        getTop(): number;
        getLeft(): number;
        getRight(): number;
        upload(xOffset: number, yOffset: number): void;
        getBottom(): number;
        getPixelWidth(): number;
        getPixelHeight(): number;
        getOversample(): number;
        getBearingLeft(): number;
        getBearingTop(): number;
        get colored(): boolean;
        get top(): number;
        get left(): number;
        get right(): number;
        get bottom(): number;
        get pixelWidth(): number;
        get pixelHeight(): number;
        get oversample(): number;
        get bearingLeft(): number;
        get bearingTop(): number;
    }
    export class $GlyphProvider {
        static BASELINE: number;
    }
    export interface $GlyphProvider extends $AutoCloseable {
        getSupportedGlyphs(): $IntSet;
        getGlyph(character: number): $GlyphInfo;
        close(): void;
        get supportedGlyphs(): $IntSet;
    }
    /**
     * Values that may be interpreted as {@link $GlyphProvider}.
     */
    export type $GlyphProvider_ = (() => $IntSet);
}
