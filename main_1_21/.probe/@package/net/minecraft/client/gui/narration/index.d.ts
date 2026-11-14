import { $Consumer_ } from "@package/java/util/function";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $TabOrderedElement } from "@package/net/minecraft/client/gui/components";
import { $Enum } from "@package/java/lang";
import { $List_ } from "@package/java/util";

declare module "@package/net/minecraft/client/gui/narration" {
    export class $NarrationThunk<T> {
        static from(text: string): $NarrationThunk<never>;
        static from(component: $Component_): $NarrationThunk<never>;
        static from(components: $List_<$Component_>): $NarrationThunk<never>;
        getText(consumer: $Consumer_<string>): void;
        static EMPTY: $NarrationThunk<never>;
    }
    export class $NarrationElementOutput {
    }
    export interface $NarrationElementOutput {
        add(type: $NarratedElementType_, contents: $NarrationThunk<never>): void;
        add(type: $NarratedElementType_, ...contents: $Component_[]): void;
        add(type: $NarratedElementType_, contents: string): void;
        add(type: $NarratedElementType_, contents: $Component_): void;
        nest(): $NarrationElementOutput;
    }
    /**
     * The narration priority levels.
     */
    export class $NarratableEntry$NarrationPriority extends $Enum<$NarratableEntry$NarrationPriority> {
        static values(): $NarratableEntry$NarrationPriority[];
        static valueOf(arg0: string): $NarratableEntry$NarrationPriority;
        /**
         * Checks if the narration priority is terminal, indicating that no further narration will occur after this.
         * 
         * @return `true` if the narration priority is terminal, `false` otherwise.
         */
        isTerminal(): boolean;
        static HOVERED: $NarratableEntry$NarrationPriority;
        static NONE: $NarratableEntry$NarrationPriority;
        static FOCUSED: $NarratableEntry$NarrationPriority;
        get terminal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NarratableEntry$NarrationPriority}.
     */
    export type $NarratableEntry$NarrationPriority_ = "none" | "hovered" | "focused";
    export class $ScreenNarrationCollector$EntryKey {
    }
    /**
     * An interface for GUI elements that can provide narration information.
     */
    export class $NarratableEntry {
    }
    export interface $NarratableEntry extends $TabOrderedElement, $NarrationSupplier {
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isActive(): boolean;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        get active(): boolean;
    }
    export class $NarratedElementType extends $Enum<$NarratedElementType> {
        static values(): $NarratedElementType[];
        static valueOf(arg0: string): $NarratedElementType;
        static POSITION: $NarratedElementType;
        static USAGE: $NarratedElementType;
        static HINT: $NarratedElementType;
        static TITLE: $NarratedElementType;
    }
    /**
     * Values that may be interpreted as {@link $NarratedElementType}.
     */
    export type $NarratedElementType_ = "title" | "position" | "hint" | "usage";
    export class $ScreenNarrationCollector {
        update(updater: $Consumer_<$NarrationElementOutput>): void;
        collectNarrationText(collectAll: boolean): string;
        constructor();
    }
    export class $ScreenNarrationCollector$NarrationEntry {
    }
    /**
     * An interface for providing narration information.
     */
    export class $NarrationSupplier {
    }
    export interface $NarrationSupplier {
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
    }
    /**
     * Values that may be interpreted as {@link $NarrationSupplier}.
     */
    export type $NarrationSupplier_ = ((arg0: $NarrationElementOutput) => void);
    export class $ScreenNarrationCollector$Output implements $NarrationElementOutput {
        add(type: $NarratedElementType_, ...contents: $Component_[]): void;
        add(type: $NarratedElementType_, contents: string): void;
        add(type: $NarratedElementType_, contents: $Component_): void;
    }
}
