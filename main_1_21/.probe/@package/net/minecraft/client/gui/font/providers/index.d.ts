import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $GlyphProvider, $GlyphInfo } from "@package/com/mojang/blaze3d/font";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $FT_Vector } from "@package/org/lwjgl/util/freetype";
import { $FontOption$Filter } from "@package/net/minecraft/client/gui/font";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";

declare module "@package/net/minecraft/client/gui/font/providers" {
    export class $GlyphProviderDefinition$Reference extends $Record {
        id(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $GlyphProviderDefinition$Reference}.
     */
    export type $GlyphProviderDefinition$Reference_ = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export class $UnihexProvider$IntContents extends $Record implements $UnihexProvider$LineData {
        calculateWidth(): number;
        mask(): number;
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$IntContents}.
     */
    export type $UnihexProvider$IntContents_ = { contents?: number[], bitWidth?: number,  } | [contents?: number[], bitWidth?: number, ];
    export class $UnihexProvider$Glyph extends $Record implements $GlyphInfo {
        getShadowOffset(): number;
        getAdvance(arg0: boolean): number;
        getBoldOffset(): number;
        get shadowOffset(): number;
        get boldOffset(): number;
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$Glyph}.
     */
    export type $UnihexProvider$Glyph_ = { left?: number, contents?: $UnihexProvider$LineData, right?: number,  } | [left?: number, contents?: $UnihexProvider$LineData, right?: number, ];
    export class $GlyphProviderDefinition$Conditional extends $Record {
        definition(): $GlyphProviderDefinition;
        filter(): $FontOption$Filter;
        static CODEC: $Codec<$GlyphProviderDefinition$Conditional>;
        constructor(arg0: $GlyphProviderDefinition, arg1: $FontOption$Filter);
    }
    /**
     * Values that may be interpreted as {@link $GlyphProviderDefinition$Conditional}.
     */
    export type $GlyphProviderDefinition$Conditional_ = { filter?: $FontOption$Filter, definition?: $GlyphProviderDefinition,  } | [filter?: $FontOption$Filter, definition?: $GlyphProviderDefinition, ];
    export class $UnihexProvider$Dimensions extends $Record {
        static left(packedDimensions: number): number;
        left(): number;
        right(): number;
        static right(packedDimensions: number): number;
        pack(): number;
        static pack(left: number, right: number): number;
        static CODEC: $Codec<$UnihexProvider$Dimensions>;
        static MAP_CODEC: $MapCodec<$UnihexProvider$Dimensions>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$Dimensions}.
     */
    export type $UnihexProvider$Dimensions_ = { right?: number, left?: number,  } | [right?: number, left?: number, ];
    export class $UnihexProvider$OverrideRange extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$OverrideRange}.
     */
    export type $UnihexProvider$OverrideRange_ = { dimensions?: $UnihexProvider$Dimensions_, to?: number, from?: number,  } | [dimensions?: $UnihexProvider$Dimensions_, to?: number, from?: number, ];
    export class $BitmapProvider$Definition extends $Record implements $GlyphProviderDefinition {
        codepointGrid(): number[][];
        ascent(): number;
        type(): $GlyphProviderType;
        file(): $ResourceLocation;
        height(): number;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        static CODEC: $MapCodec<$BitmapProvider$Definition>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: number[][]);
    }
    /**
     * Values that may be interpreted as {@link $BitmapProvider$Definition}.
     */
    export type $BitmapProvider$Definition_ = { ascent?: number, codepointGrid?: number[][], height?: number, file?: $ResourceLocation_,  } | [ascent?: number, codepointGrid?: number[][], height?: number, file?: $ResourceLocation_, ];
    export class $ProviderReferenceDefinition extends $Record implements $GlyphProviderDefinition {
        type(): $GlyphProviderType;
        id(): $ResourceLocation;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        static CODEC: $MapCodec<$ProviderReferenceDefinition>;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $ProviderReferenceDefinition}.
     */
    export type $ProviderReferenceDefinition_ = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export class $UnihexProvider$ByteContents extends $Record implements $UnihexProvider$LineData {
        calculateWidth(): number;
        mask(): number;
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$ByteContents}.
     */
    export type $UnihexProvider$ByteContents_ = { contents?: number[],  } | [contents?: number[], ];
    export class $UnihexProvider implements $GlyphProvider {
        getSupportedGlyphs(): $IntSet;
        getGlyph(character: number): $GlyphInfo;
        close(): void;
        get supportedGlyphs(): $IntSet;
    }
    export class $GlyphProviderDefinition$Loader {
    }
    export interface $GlyphProviderDefinition$Loader {
        load(resourceManager: $ResourceManager): $GlyphProvider;
    }
    /**
     * Values that may be interpreted as {@link $GlyphProviderDefinition$Loader}.
     */
    export type $GlyphProviderDefinition$Loader_ = ((arg0: $ResourceManager) => $GlyphProvider);
    export class $BitmapProvider implements $GlyphProvider {
        getSupportedGlyphs(): $IntSet;
        getGlyph(character: number): $GlyphInfo;
        close(): void;
        get supportedGlyphs(): $IntSet;
    }
    export class $UnihexProvider$ShortContents extends $Record implements $UnihexProvider$LineData {
        calculateWidth(): number;
        mask(): number;
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$ShortContents}.
     */
    export type $UnihexProvider$ShortContents_ = { contents?: number[],  } | [contents?: number[], ];
    export class $GlyphProviderType extends $Enum<$GlyphProviderType> implements $StringRepresentable, $IExtensibleEnum {
        static values(): $GlyphProviderType[];
        static valueOf(arg0: string): $GlyphProviderType;
        static getExtensionInfo(): $ExtensionInfo;
        getSerializedName(): string;
        mapCodec(): $MapCodec<$GlyphProviderDefinition>;
        getRemappedEnumConstantName(): string;
        static SPACE: $GlyphProviderType;
        static UNIHEX: $GlyphProviderType;
        static CODEC: $Codec<$GlyphProviderType>;
        static BITMAP: $GlyphProviderType;
        static TTF: $GlyphProviderType;
        static REFERENCE: $GlyphProviderType;
        static get extensionInfo(): $ExtensionInfo;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GlyphProviderType}.
     */
    export type $GlyphProviderType_ = "bitmap" | "ttf" | "space" | "unihex" | "reference";
    export class $TrueTypeGlyphProviderDefinition$Shift extends $Record {
        x(): number;
        y(): number;
        static CODEC: $Codec<$TrueTypeGlyphProviderDefinition$Shift>;
        static NONE: $TrueTypeGlyphProviderDefinition$Shift;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $TrueTypeGlyphProviderDefinition$Shift}.
     */
    export type $TrueTypeGlyphProviderDefinition$Shift_ = { x?: number, y?: number,  } | [x?: number, y?: number, ];
    export class $TrueTypeGlyphProviderDefinition extends $Record implements $GlyphProviderDefinition {
        oversample(): number;
        size(): number;
        type(): $GlyphProviderType;
        location(): $ResourceLocation;
        shift(): $TrueTypeGlyphProviderDefinition$Shift;
        skip(): string;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        static CODEC: $MapCodec<$TrueTypeGlyphProviderDefinition>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number, arg3: $TrueTypeGlyphProviderDefinition$Shift_, arg4: string);
    }
    /**
     * Values that may be interpreted as {@link $TrueTypeGlyphProviderDefinition}.
     */
    export type $TrueTypeGlyphProviderDefinition_ = { shift?: $TrueTypeGlyphProviderDefinition$Shift_, skip?: string, location?: $ResourceLocation_, oversample?: number, size?: number,  } | [shift?: $TrueTypeGlyphProviderDefinition$Shift_, skip?: string, location?: $ResourceLocation_, oversample?: number, size?: number, ];
    export class $GlyphProviderDefinition {
        static MAP_CODEC: $MapCodec<$GlyphProviderDefinition>;
    }
    export interface $GlyphProviderDefinition {
        type(): $GlyphProviderType;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
    }
    export class $FreeTypeUtil {
        static assertError(errorId: number, action: string): void;
        static setVector(vector: $FT_Vector, x: number, y: number): $FT_Vector;
        static x(vector: $FT_Vector): number;
        static destroy(): void;
        static checkError(errorId: number, action: string): boolean;
        static getLibrary(): number;
        static LIBRARY_LOCK: $Object;
        constructor();
        static get library(): number;
    }
    export class $UnihexProvider$LineData {
    }
    export interface $UnihexProvider$LineData {
        calculateWidth(): number;
        line(index: number): number;
        mask(): number;
        bitWidth(): number;
    }
    export class $UnihexProvider$ReaderOutput {
    }
    export interface $UnihexProvider$ReaderOutput {
        accept(arg0: number, arg1: $UnihexProvider$LineData): void;
    }
    /**
     * Values that may be interpreted as {@link $UnihexProvider$ReaderOutput}.
     */
    export type $UnihexProvider$ReaderOutput_ = ((arg0: number, arg1: $UnihexProvider$LineData) => void);
    export class $UnihexProvider$Definition implements $GlyphProviderDefinition {
        type(): $GlyphProviderType;
        unpack(): $Either<$GlyphProviderDefinition$Loader, $GlyphProviderDefinition$Reference>;
        static CODEC: $MapCodec<$UnihexProvider$Definition>;
    }
    export class $BitmapProvider$Glyph extends $Record implements $GlyphInfo {
        getShadowOffset(): number;
        getAdvance(bold: boolean): number;
        getBoldOffset(): number;
        get shadowOffset(): number;
        get boldOffset(): number;
    }
    /**
     * Values that may be interpreted as {@link $BitmapProvider$Glyph}.
     */
    export type $BitmapProvider$Glyph_ = { offsetX?: number, advance?: number, scale?: number, image?: $NativeImage, ascent?: number, height?: number, width?: number, offsetY?: number,  } | [offsetX?: number, advance?: number, scale?: number, image?: $NativeImage, ascent?: number, height?: number, width?: number, offsetY?: number, ];
}
