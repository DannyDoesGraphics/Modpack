import { $SequencerInstructions, $SequencerInstructions_ } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $Collection, $Collection_ } from "@package/java/util";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/hlysine/create_connected/mixin/sequencedgearshift" {
    export class $InstructionAccessor {
    }
    export interface $InstructionAccessor {
        getInstruction(): $SequencerInstructions;
        get instruction(): $SequencerInstructions;
    }
    /**
     * Values that may be interpreted as {@link $InstructionAccessor}.
     */
    export type $InstructionAccessor_ = (() => $SequencerInstructions_);
    export class $InstructionSpeedModifiersAccessor {
    }
    export interface $InstructionSpeedModifiersAccessor {
        getValue(): number;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $InstructionSpeedModifiersAccessor}.
     */
    export type $InstructionSpeedModifiersAccessor_ = (() => number);
    export class $AbstractSimiScreenAccessor {
    }
    export interface $AbstractSimiScreenAccessor {
        callRemoveWidgets(arg0: $Collection_<$GuiEventListener>): void;
    }
    /**
     * Values that may be interpreted as {@link $AbstractSimiScreenAccessor}.
     */
    export type $AbstractSimiScreenAccessor_ = ((arg0: $Collection<$GuiEventListener>) => void);
}
