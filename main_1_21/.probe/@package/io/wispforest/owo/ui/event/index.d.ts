import { $EventStream } from "@package/io/wispforest/owo/util";
import { $Component$FocusSource_, $Component$FocusSource } from "@package/io/wispforest/owo/ui/core";

declare module "@package/io/wispforest/owo/ui/event" {
    export class $CharTyped {
        static newStream(): $EventStream<$CharTyped>;
    }
    export interface $CharTyped {
        onCharTyped(arg0: string, arg1: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $CharTyped}.
     */
    export type $CharTyped_ = ((arg0: string, arg1: number) => boolean);
    export class $MouseDown {
        static newStream(): $EventStream<$MouseDown>;
    }
    export interface $MouseDown {
        onMouseDown(arg0: number, arg1: number, arg2: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MouseDown}.
     */
    export type $MouseDown_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $MouseEnter {
        static newStream(): $EventStream<$MouseEnter>;
    }
    export interface $MouseEnter {
        onMouseEnter(): void;
    }
    /**
     * Values that may be interpreted as {@link $MouseEnter}.
     */
    export type $MouseEnter_ = (() => void);
    export class $MouseDrag {
        static newStream(): $EventStream<$MouseDrag>;
    }
    export interface $MouseDrag {
        onMouseDrag(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MouseDrag}.
     */
    export type $MouseDrag_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => boolean);
    export class $FocusLost {
        static newStream(): $EventStream<$FocusLost>;
    }
    export interface $FocusLost {
        onFocusLost(): void;
    }
    /**
     * Values that may be interpreted as {@link $FocusLost}.
     */
    export type $FocusLost_ = (() => void);
    export class $KeyPress {
        static newStream(): $EventStream<$KeyPress>;
    }
    export interface $KeyPress {
        onKeyPress(arg0: number, arg1: number, arg2: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $KeyPress}.
     */
    export type $KeyPress_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $MouseUp {
        static newStream(): $EventStream<$MouseUp>;
    }
    export interface $MouseUp {
        onMouseUp(arg0: number, arg1: number, arg2: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MouseUp}.
     */
    export type $MouseUp_ = ((arg0: number, arg1: number, arg2: number) => boolean);
    export class $FocusGained {
        static newStream(): $EventStream<$FocusGained>;
    }
    export interface $FocusGained {
        onFocusGained(arg0: $Component$FocusSource_): void;
    }
    /**
     * Values that may be interpreted as {@link $FocusGained}.
     */
    export type $FocusGained_ = ((arg0: $Component$FocusSource) => void);
    export class $MouseLeave {
        static newStream(): $EventStream<$MouseLeave>;
    }
    export interface $MouseLeave {
        onMouseLeave(): void;
    }
    /**
     * Values that may be interpreted as {@link $MouseLeave}.
     */
    export type $MouseLeave_ = (() => void);
    export class $MouseScroll {
        static newStream(): $EventStream<$MouseScroll>;
    }
    export interface $MouseScroll {
        onMouseScroll(arg0: number, arg1: number, arg2: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MouseScroll}.
     */
    export type $MouseScroll_ = ((arg0: number, arg1: number, arg2: number) => boolean);
}
