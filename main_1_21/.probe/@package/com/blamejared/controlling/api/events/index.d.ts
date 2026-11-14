import { $IKeyEntry } from "@package/com/blamejared/controlling/api/entries";
import { $Event } from "@package/net/neoforged/bus/api";
import { $List } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/blamejared/controlling/api/events" {
    export class $KeyEntryMouseReleasedEvent extends $Event implements $IKeyEntryMouseReleasedEvent {
        isHandled(): boolean;
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        getEntry(): $IKeyEntry;
        getMouseX(): number;
        getMouseY(): number;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get buttonId(): number;
        get entry(): $IKeyEntry;
        get mouseX(): number;
        get mouseY(): number;
    }
    export class $KeyEntryRenderEvent extends $Event implements $IKeyEntryRenderEvent {
        getSlotIndex(): number;
        getPartialTicks(): number;
        getY(): number;
        getEntry(): $IKeyEntry;
        getX(): number;
        isHovered(): boolean;
        getRowWidth(): number;
        getRowLeft(): number;
        getGuiGraphics(): $GuiGraphics;
        getMouseX(): number;
        getMouseY(): number;
        constructor(arg0: $IKeyEntry, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: number);
        get slotIndex(): number;
        get partialTicks(): number;
        get y(): number;
        get entry(): $IKeyEntry;
        get x(): number;
        get hovered(): boolean;
        get rowWidth(): number;
        get rowLeft(): number;
        get guiGraphics(): $GuiGraphics;
        get mouseX(): number;
        get mouseY(): number;
    }
    export class $KeyEntryMouseClickedEvent extends $Event implements $IKeyEntryMouseClickedEvent {
        isHandled(): boolean;
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        getEntry(): $IKeyEntry;
        getMouseX(): number;
        getMouseY(): number;
        constructor(arg0: $IKeyEntry, arg1: number, arg2: number, arg3: number);
        get buttonId(): number;
        get entry(): $IKeyEntry;
        get mouseX(): number;
        get mouseY(): number;
    }
    export class $IKeyEntryListenersEvent {
    }
    export interface $IKeyEntryListenersEvent {
        getEntry(): $IKeyEntry;
        getListeners(): $List<$GuiEventListener>;
        get entry(): $IKeyEntry;
        get listeners(): $List<$GuiEventListener>;
    }
    export class $KeyEntryListenersEvent extends $Event implements $IKeyEntryListenersEvent {
        getEntry(): $IKeyEntry;
        getListeners(): $List<$GuiEventListener>;
        constructor(arg0: $IKeyEntry);
        get entry(): $IKeyEntry;
        get listeners(): $List<$GuiEventListener>;
    }
    export class $IKeyEntryRenderEvent {
    }
    export interface $IKeyEntryRenderEvent {
        getSlotIndex(): number;
        getPartialTicks(): number;
        getY(): number;
        getEntry(): $IKeyEntry;
        getX(): number;
        isHovered(): boolean;
        getRowWidth(): number;
        getRowLeft(): number;
        getGuiGraphics(): $GuiGraphics;
        getMouseX(): number;
        getMouseY(): number;
        get slotIndex(): number;
        get partialTicks(): number;
        get y(): number;
        get entry(): $IKeyEntry;
        get x(): number;
        get hovered(): boolean;
        get rowWidth(): number;
        get rowLeft(): number;
        get guiGraphics(): $GuiGraphics;
        get mouseX(): number;
        get mouseY(): number;
    }
    export class $IKeyEntryMouseReleasedEvent {
    }
    export interface $IKeyEntryMouseReleasedEvent {
        isHandled(): boolean;
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        getEntry(): $IKeyEntry;
        getMouseX(): number;
        getMouseY(): number;
        get buttonId(): number;
        get entry(): $IKeyEntry;
        get mouseX(): number;
        get mouseY(): number;
    }
    export class $IKeyEntryMouseClickedEvent {
    }
    export interface $IKeyEntryMouseClickedEvent {
        isHandled(): boolean;
        getButtonId(): number;
        setHandled(arg0: boolean): void;
        getEntry(): $IKeyEntry;
        getMouseX(): number;
        getMouseY(): number;
        get buttonId(): number;
        get entry(): $IKeyEntry;
        get mouseX(): number;
        get mouseY(): number;
    }
}
