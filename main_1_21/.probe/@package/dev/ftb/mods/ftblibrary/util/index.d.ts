import { $ChatFormatting_ } from "@package/net/minecraft";
import { $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component, $Component_, $Style } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as client from "@package/dev/ftb/mods/ftblibrary/util/client";

declare module "@package/dev/ftb/mods/ftblibrary/util" {
    export class $Vec2d extends $Record {
        equals(rhs: $Vec2d_): boolean;
        length(): number;
        scale(s: number): $Vec2d;
        add(rhs: $Vec2d_): $Vec2d;
        add(v: number): $Vec2d;
        x(): number;
        dot(v: $Vec2d_): number;
        y(): number;
        normalized(): $Vec2d;
        sub(rhs: $Vec2d_): $Vec2d;
        negated(): $Vec2d;
        lengthSquared(): number;
        distanceToSqr(p: $Vec2d_): number;
        static ZERO: $Vec2d;
        static NEG_UNIT_Y: $Vec2d;
        static NEG_UNIT_X: $Vec2d;
        static MIN: $Vec2d;
        static CODEC: $Codec<$Vec2d>;
        static UNIT_X: $Vec2d;
        static MAX: $Vec2d;
        static ONE: $Vec2d;
        static UNIT_Y: $Vec2d;
        static PAIR_CODEC: $Codec<$Pair<$Vec2d, $Vec2d>>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Vec2d>;
        constructor(x: number, y: number);
    }
    /**
     * Values that may be interpreted as {@link $Vec2d}.
     */
    export type $Vec2d_ = { x?: number, y?: number,  } | [x?: number, y?: number, ];
    export class $BooleanConsumer {
    }
    export interface $BooleanConsumer {
        accept(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BooleanConsumer}.
     */
    export type $BooleanConsumer_ = ((arg0: boolean) => void);
    export class $TooltipList {
        styledTranslate(key: string, style: $Style, ...objects: $Object[]): void;
        styledString(text: string, color: $ChatFormatting_): void;
        styledString(text: string, style: $Style): void;
        blankLine(): void;
        reset(): void;
        add(component: $Component_): void;
        string(text: string): void;
        getLines(): $List<$Component>;
        translate(key: string, ...objects: $Object[]): void;
        shouldRender(): boolean;
        backgroundColor: number;
        yOffset: number;
        xOffset: number;
        borderColorStart: number;
        borderColorEnd: number;
        maxWidth: number;
        constructor();
        get lines(): $List<$Component>;
    }
}
