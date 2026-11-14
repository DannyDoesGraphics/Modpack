import { $ChatFormatting_ } from "@package/net/minecraft";
import { $MutableComponent, $Component_, $Style, $MutableComponent_ } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List_ } from "@package/java/util";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Object, $Record } from "@package/java/lang";

declare module "@package/net/createmod/catnip/lang" {
    export class $Lang {
        static builder(arg0: string): $LangBuilder;
        static asId(arg0: string): string;
        static nonPluralId(arg0: string): string;
        constructor();
    }
    export class $FontHelper$Palette extends $Record {
        static ofColors(arg0: $ChatFormatting_, arg1: $ChatFormatting_): $FontHelper$Palette;
        highlight(): $Style;
        primary(): $Style;
        static RED: $FontHelper$Palette;
        static GRAY_AND_GOLD: $FontHelper$Palette;
        static GRAY_AND_WHITE: $FontHelper$Palette;
        static GRAY: $FontHelper$Palette;
        static GRAY_AND_RED: $FontHelper$Palette;
        static ALL_GRAY: $FontHelper$Palette;
        static BLUE: $FontHelper$Palette;
        static STANDARD_CREATE: $FontHelper$Palette;
        static YELLOW: $FontHelper$Palette;
        static PURPLE: $FontHelper$Palette;
        static GRAY_AND_BLUE: $FontHelper$Palette;
        static GREEN: $FontHelper$Palette;
        constructor(primary: $Style, highlight: $Style);
    }
    /**
     * Values that may be interpreted as {@link $FontHelper$Palette}.
     */
    export type $FontHelper$Palette_ = { highlight?: $Style, primary?: $Style,  } | [highlight?: $Style, primary?: $Style, ];
    export class $LangBuilder {
        static resolveBuilders(arg0: $Object[]): $Object[];
        sendStatus(arg0: $Player): void;
        forGoggles(arg0: $List_<$MutableComponent_>, arg1: number): void;
        forGoggles(arg0: $List_<$MutableComponent_>): void;
        add(arg0: $Component_): $LangBuilder;
        add(arg0: $MutableComponent_): $LangBuilder;
        add(arg0: $LangBuilder): $LangBuilder;
        component(): $MutableComponent;
        newLine(): $LangBuilder;
        color(arg0: $Color): $LangBuilder;
        color(arg0: number): $LangBuilder;
        string(): string;
        text(arg0: $ChatFormatting_, arg1: string): $LangBuilder;
        text(arg0: number, arg1: string): $LangBuilder;
        text(arg0: string): $LangBuilder;
        space(): $LangBuilder;
        style(arg0: $ChatFormatting_): $LangBuilder;
        addTo(arg0: $List_<$MutableComponent_>): void;
        sendChat(arg0: $Player): void;
        json(): string;
        translate(arg0: string, ...arg1: $Object[]): $LangBuilder;
        static DEFAULT_SPACE_WIDTH: number;
        constructor(arg0: string);
    }
}
