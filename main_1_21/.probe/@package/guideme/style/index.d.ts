import { $Consumer_ } from "@package/java/util/function";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record } from "@package/java/lang";
import { $ColorValue, $ColorValue_ } from "@package/guideme/color";

declare module "@package/guideme/style" {
    export class $TextStyle extends $Record {
        fontScale(): number;
        toBuilder(): $TextStyle$Builder;
        whiteSpace(): $WhiteSpaceMode;
        static builder(): $TextStyle$Builder;
        color(): $ColorValue;
        font(): $ResourceLocation;
        mergeWith(arg0: $ResolvedTextStyle_): $ResolvedTextStyle;
        dropShadow(): boolean;
        bold(): boolean;
        italic(): boolean;
        underlined(): boolean;
        strikethrough(): boolean;
        obfuscated(): boolean;
        alignment(): $TextAlignment;
        static EMPTY: $TextStyle;
        constructor(fontScale: number, bold: boolean, italic: boolean, underlined: boolean, strikethrough: boolean, obfuscated: boolean, font: $ResourceLocation_, color: $ColorValue_, whiteSpace: $WhiteSpaceMode_, alignment: $TextAlignment_, dropShadow: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TextStyle}.
     */
    export type $TextStyle_ = { italic?: boolean, font?: $ResourceLocation_, whiteSpace?: $WhiteSpaceMode_, underlined?: boolean, obfuscated?: boolean, strikethrough?: boolean, color?: $ColorValue_, fontScale?: number, bold?: boolean, alignment?: $TextAlignment_, dropShadow?: boolean,  } | [italic?: boolean, font?: $ResourceLocation_, whiteSpace?: $WhiteSpaceMode_, underlined?: boolean, obfuscated?: boolean, strikethrough?: boolean, color?: $ColorValue_, fontScale?: number, bold?: boolean, alignment?: $TextAlignment_, dropShadow?: boolean, ];
    export class $TextStyle$Builder {
        fontScale(arg0: number): $TextStyle$Builder;
        whiteSpace(arg0: $WhiteSpaceMode_): $TextStyle$Builder;
        apply(arg0: $TextStyle_): $TextStyle$Builder;
        color(arg0: $ColorValue_): $TextStyle$Builder;
        build(): $TextStyle;
        font(arg0: $ResourceLocation_): $TextStyle$Builder;
        dropShadow(arg0: boolean): $TextStyle$Builder;
        bold(arg0: boolean): $TextStyle$Builder;
        italic(arg0: boolean): $TextStyle$Builder;
        underlined(arg0: boolean): $TextStyle$Builder;
        strikethrough(arg0: boolean): $TextStyle$Builder;
        obfuscated(arg0: boolean): $TextStyle$Builder;
        alignment(arg0: $TextAlignment_): $TextStyle$Builder;
        constructor();
    }
    export class $Styleable {
    }
    export interface $Styleable {
        getHoverStyle(): $TextStyle;
        setHoverStyle(arg0: $TextStyle_): void;
        getStylingParent(): $Styleable;
        modifyStyle(arg0: $Consumer_<$TextStyle$Builder>): void;
        modifyHoverStyle(arg0: $Consumer_<$TextStyle$Builder>): void;
        resolveStyle(): $ResolvedTextStyle;
        resolveHoverStyle(arg0: $ResolvedTextStyle_): $ResolvedTextStyle;
        getStyle(): $TextStyle;
        setStyle(arg0: $TextStyle_): void;
        get stylingParent(): $Styleable;
    }
    export class $BorderStyle extends $Record {
        color(): $ColorValue;
        width(): number;
        static NONE: $BorderStyle;
        constructor(color: $ColorValue_, width: number);
    }
    /**
     * Values that may be interpreted as {@link $BorderStyle}.
     */
    export type $BorderStyle_ = { color?: $ColorValue_, width?: number,  } | [color?: $ColorValue_, width?: number, ];
    export class $TextAlignment extends $Enum<$TextAlignment> {
        static values(): $TextAlignment[];
        static valueOf(arg0: string): $TextAlignment;
        static CENTER: $TextAlignment;
        static LEFT: $TextAlignment;
        static RIGHT: $TextAlignment;
    }
    /**
     * Values that may be interpreted as {@link $TextAlignment}.
     */
    export type $TextAlignment_ = "left" | "center" | "right";
    export class $ResolvedTextStyle extends $Record {
        fontScale(): number;
        whiteSpace(): $WhiteSpaceMode;
        color(): $ColorValue;
        font(): $ResourceLocation;
        dropShadow(): boolean;
        bold(): boolean;
        italic(): boolean;
        underlined(): boolean;
        strikethrough(): boolean;
        obfuscated(): boolean;
        alignment(): $TextAlignment;
        constructor(fontScale: number, bold: boolean, italic: boolean, underlined: boolean, strikethrough: boolean, obfuscated: boolean, font: $ResourceLocation_, color: $ColorValue_, whiteSpace: $WhiteSpaceMode_, alignment: $TextAlignment_, dropShadow: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ResolvedTextStyle}.
     */
    export type $ResolvedTextStyle_ = { italic?: boolean, font?: $ResourceLocation_, whiteSpace?: $WhiteSpaceMode_, underlined?: boolean, obfuscated?: boolean, strikethrough?: boolean, color?: $ColorValue_, fontScale?: number, bold?: boolean, alignment?: $TextAlignment_, dropShadow?: boolean,  } | [italic?: boolean, font?: $ResourceLocation_, whiteSpace?: $WhiteSpaceMode_, underlined?: boolean, obfuscated?: boolean, strikethrough?: boolean, color?: $ColorValue_, fontScale?: number, bold?: boolean, alignment?: $TextAlignment_, dropShadow?: boolean, ];
    export class $WhiteSpaceMode extends $Enum<$WhiteSpaceMode> {
        isCollapseWhitespace(): boolean;
        isCollapseSegmentBreaks(): boolean;
        static values(): $WhiteSpaceMode[];
        static valueOf(arg0: string): $WhiteSpaceMode;
        static PRE: $WhiteSpaceMode;
        static BREAK_SPACES: $WhiteSpaceMode;
        static NOWRAP: $WhiteSpaceMode;
        static PRE_WRAP: $WhiteSpaceMode;
        static PRE_LINE: $WhiteSpaceMode;
        static NORMAL: $WhiteSpaceMode;
        get collapseWhitespace(): boolean;
        get collapseSegmentBreaks(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WhiteSpaceMode}.
     */
    export type $WhiteSpaceMode_ = "normal" | "nowrap" | "pre" | "pre_wrap" | "pre_line" | "break_spaces";
}
