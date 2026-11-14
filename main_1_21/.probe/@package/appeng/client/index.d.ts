import { $Consumer_ } from "@package/java/util/function";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $Enum, $Record } from "@package/java/lang";
export * as render from "@package/appeng/client/render";
export * as gui from "@package/appeng/client/gui";
export * as guidebook from "@package/appeng/client/guidebook";
export * as commands from "@package/appeng/client/commands";

declare module "@package/appeng/client" {
    export class $Point {
        static fromTopLeft(arg0: $Rect2i): $Point;
        getY(): number;
        move(arg0: number, arg1: number): $Point;
        getX(): number;
        isIn(arg0: $Rect2i): boolean;
        static ZERO: $Point;
        constructor(arg0: number, arg1: number);
        get y(): number;
        get x(): number;
    }
    export class $EffectType extends $Enum<$EffectType> {
        static values(): $EffectType[];
        static valueOf(arg0: string): $EffectType;
        static Energy: $EffectType;
        static Lightning: $EffectType;
        static Vibrant: $EffectType;
    }
    /**
     * Values that may be interpreted as {@link $EffectType}.
     */
    export type $EffectType_ = "energy" | "lightning" | "vibrant";
    export class $Hotkeys {
        static getHotkeyMapping(arg0: string): $Hotkey;
        static registerHotkey(arg0: string): void;
        static finalizeRegistration(arg0: $Consumer_<$KeyMapping>): void;
        static checkHotkeys(): void;
        constructor();
    }
    export class $Hotkey extends $Record {
        name(): string;
        check(): void;
        mapping(): $KeyMapping;
        constructor(name: string, mapping: $KeyMapping);
    }
    /**
     * Values that may be interpreted as {@link $Hotkey}.
     */
    export type $Hotkey_ = { name?: string, mapping?: $KeyMapping,  } | [name?: string, mapping?: $KeyMapping, ];
}
