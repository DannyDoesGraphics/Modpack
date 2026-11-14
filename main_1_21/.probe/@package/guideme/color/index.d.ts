import { $Enum } from "@package/java/lang";

declare module "@package/guideme/color" {
    export class $SymbolicColor extends $Enum<$SymbolicColor> implements $ColorValue {
        static values(): $SymbolicColor[];
        static valueOf(arg0: string): $SymbolicColor;
        resolve(arg0: $LightDarkMode_): number;
        static NAVBAR_BG_BOTTOM: $SymbolicColor;
        static TABLE_BORDER: $SymbolicColor;
        static GOLD: $SymbolicColor;
        static GRAY: $SymbolicColor;
        static NAVBAR_ROW_HOVER: $SymbolicColor;
        static BLUE: $SymbolicColor;
        static THEMATIC_BREAK: $SymbolicColor;
        static IN_WORLD_BLOCK_HIGHLIGHT: $SymbolicColor;
        static DARK_AQUA: $SymbolicColor;
        static SCENE_BACKGROUND: $SymbolicColor;
        static GUIDE_SCREEN_BACKGROUND: $SymbolicColor;
        static ERROR_TEXT: $SymbolicColor;
        static DARK_RED: $SymbolicColor;
        static LINK: $SymbolicColor;
        static LIGHT_PURPLE: $SymbolicColor;
        static BLACK: $SymbolicColor;
        static HEADER1_SEPARATOR: $SymbolicColor;
        static BODY_TEXT: $SymbolicColor;
        static CRAFTING_RECIPE_TYPE: $SymbolicColor;
        static AQUA: $SymbolicColor;
        static WHITE: $SymbolicColor;
        static NAVBAR_BG_TOP: $SymbolicColor;
        static BLOCKQUOTE_BACKGROUND: $SymbolicColor;
        static ICON_BUTTON_NORMAL: $SymbolicColor;
        static ICON_BUTTON_DISABLED: $SymbolicColor;
        static DARK_BLUE: $SymbolicColor;
        static GREEN: $SymbolicColor;
        static HEADER2_SEPARATOR: $SymbolicColor;
        static RED: $SymbolicColor;
        static DARK_PURPLE: $SymbolicColor;
        static DARK_GREEN: $SymbolicColor;
        static YELLOW: $SymbolicColor;
        static DARK_GRAY: $SymbolicColor;
        static NAVBAR_EXPAND_ARROW: $SymbolicColor;
        static ICON_BUTTON_HOVER: $SymbolicColor;
    }
    /**
     * Values that may be interpreted as {@link $SymbolicColor}.
     */
    export type $SymbolicColor_ = "link" | "body_text" | "error_text" | "crafting_recipe_type" | "thematic_break" | "header1_separator" | "header2_separator" | "navbar_bg_top" | "navbar_bg_bottom" | "navbar_row_hover" | "navbar_expand_arrow" | "table_border" | "icon_button_normal" | "icon_button_disabled" | "icon_button_hover" | "in_world_block_highlight" | "scene_background" | "guide_screen_background" | "blockquote_background" | "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white";
    export class $LightDarkMode extends $Enum<$LightDarkMode> {
        static values(): $LightDarkMode[];
        static valueOf(arg0: string): $LightDarkMode;
        static current(): $LightDarkMode;
        static LIGHT_MODE: $LightDarkMode;
        static DARK_MODE: $LightDarkMode;
    }
    /**
     * Values that may be interpreted as {@link $LightDarkMode}.
     */
    export type $LightDarkMode_ = "light_mode" | "dark_mode";
    export class $MutableColor implements $ColorValue {
        setGreenByte(arg0: number): $MutableColor;
        static ofArgb32(arg0: number): $MutableColor;
        blueByte(): number;
        toAbgr32(): number;
        setRedByte(arg0: number): $MutableColor;
        setBlueByte(arg0: number): $MutableColor;
        setAlphaByte(arg0: number): $MutableColor;
        redByte(): number;
        greenByte(): number;
        static ofBytes(arg0: number, arg1: number, arg2: number): $MutableColor;
        static ofBytes(arg0: number, arg1: number, arg2: number, arg3: number): $MutableColor;
        lighter(arg0: number): $MutableColor;
        alphaByte(): number;
        static of(arg0: $ColorValue_, arg1: $LightDarkMode_): $MutableColor;
        resolve(arg0: $LightDarkMode_): number;
        copy(): $MutableColor;
        red(): number;
        blue(): number;
        green(): number;
        alpha(): number;
        setAlpha(arg0: number): $MutableColor;
        toArgb32(): number;
        setRed(arg0: number): $MutableColor;
        setGreen(arg0: number): $MutableColor;
        setBlue(arg0: number): $MutableColor;
        darker(arg0: number): $MutableColor;
        constructor();
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $ColorValue {
    }
    export interface $ColorValue {
        resolve(arg0: $LightDarkMode_): number;
    }
    /**
     * Values that may be interpreted as {@link $ColorValue}.
     */
    export type $ColorValue_ = ((arg0: $LightDarkMode) => number);
}
