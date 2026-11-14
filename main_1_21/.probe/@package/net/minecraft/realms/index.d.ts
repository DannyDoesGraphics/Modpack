import { $Duration_ } from "@package/java/time";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ObjectSelectionList$Entry, $ObjectSelectionList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft, $GameNarrator } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";

declare module "@package/net/minecraft/realms" {
    export class $RealmsObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $ObjectSelectionList<E> {
        getRowTop(index: number): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxPosition(): number;
        selectItem(index: number): void;
        setSelectedItem(index: number): void;
        clear(): void;
        addEntry(entry: E): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getItemCount(): number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
        get maxPosition(): number;
        set selectedItem(value: number);
        get itemCount(): number;
    }
    export class $RepeatedNarrator$Params {
    }
    export class $RealmsScreen extends $Screen {
        createLabelNarration(): $Component;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(title: $Component_);
    }
    export class $RepeatedNarrator {
        narrate(narrator: $GameNarrator, narration: $Component_): void;
        constructor(duration: $Duration_);
    }
    export class $DisconnectedRealmsScreen extends $RealmsScreen {
        init(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $Screen, title: $Component_, reason: $Component_);
    }
    export class $RealmsLabel implements $Renderable {
        getText(): $Component;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        constructor(text: $Component_, x: number, y: number, color: number);
        get text(): $Component;
    }
    export class $RealmsConnect {
        connect(server: $RealmsServer, address: $ServerAddress): void;
        tick(): void;
        abort(): void;
        constructor(onlineScreen: $Screen);
    }
}
