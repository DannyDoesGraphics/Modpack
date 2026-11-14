import { $KeyMapping } from "@package/net/minecraft/client";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/dev/ftb/mods/ftblibrary/ui/input" {
    export class $Key {
        deselectAll(): boolean;
        getInputMapping(): $InputConstants$Key;
        cut(): boolean;
        selectAll(): boolean;
        paste(): boolean;
        escOrInventory(): boolean;
        esc(): boolean;
        backspace(): boolean;
        enter(): boolean;
        matches(keyMapping: $KeyMapping): boolean;
        copy(): boolean;
        is(k: number): boolean;
        keyCode: number;
        modifiers: $KeyModifiers;
        scanCode: number;
        constructor(keyCode: number, scanCode: number, modifiers: number);
        get inputMapping(): $InputConstants$Key;
    }
    export class $KeyModifiers {
        onlyControl(): boolean;
        numLock(): boolean;
        capsLock(): boolean;
        alt(): boolean;
        start(): boolean;
        shift(): boolean;
        control(): boolean;
        static NONE: $KeyModifiers;
        modifiers: number;
        constructor(m: number);
    }
    export class $MouseButton {
        isMiddle(): boolean;
        isRight(): boolean;
        isLeft(): boolean;
        static get(i: number): $MouseButton;
        getId(): number;
        static LEFT: $MouseButton;
        static NEXT: $MouseButton;
        static RIGHT: $MouseButton;
        static BACK: $MouseButton;
        id: number;
        static MIDDLE: $MouseButton;
        get middle(): boolean;
        get right(): boolean;
        get left(): boolean;
    }
}
