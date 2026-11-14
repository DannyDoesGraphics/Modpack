import { $Consumer_ } from "@package/java/util/function";
import { $LinearLayout } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget, $TabButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Iterable_ } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
import { $TabNavigationBarAccessor } from "@package/dev/isxander/yacl3/mixin";

declare module "@package/net/minecraft/client/gui/components/tabs" {
    /**
     * Builder class for creating a TabNavigationBar instance.
     */
    export class $TabNavigationBar$Builder {
        /**
         * Adds multiple tabs to the TabNavigationBar.
         * 
         * @return the `Builder` instance.
         */
        addTabs(...tabs: $Tab[]): $TabNavigationBar$Builder;
        /**
         * Builds and returns a new TabNavigationBar instance.
         * 
         * @return a new TabNavigationBar instance.
         */
        build(): $TabNavigationBar;
    }
    export class $TabManager {
        setTabArea(tabArea: $ScreenRectangle_): void;
        getCurrentTab(): $Tab;
        setCurrentTab(tab: $Tab, playClickSound: boolean): void;
        constructor(addWidget: $Consumer_<$AbstractWidget>, removeWidget: $Consumer_<$AbstractWidget>);
        set tabArea(value: $ScreenRectangle_);
    }
    export class $Tab {
    }
    export interface $Tab {
        getTabTitle(): $Component;
        doLayout(rectangle: $ScreenRectangle_): void;
        visitChildren(consumer: $Consumer_<$AbstractWidget>): void;
        get tabTitle(): $Component;
    }
    export class $GridLayoutTab implements $Tab {
        getTabTitle(): $Component;
        doLayout(rectangle: $ScreenRectangle_): void;
        visitChildren(consumer: $Consumer_<$AbstractWidget>): void;
        constructor(title: $Component_);
        get tabTitle(): $Component;
    }
    export class $TabNavigationBar extends $AbstractContainerEventHandler implements $Renderable, $NarratableEntry, $TabNavigationBarAccessor {
        /**
         * Selects the tab at the specified index.
         */
        selectTab(index: number, playClickSound: boolean): void;
        static builder(tabManager: $TabManager, width: number): $TabNavigationBar$Builder;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        setWidth(width: number): void;
        /**
         * Handles key pressed events.
         * 
         * @return `true` if the key press was handled, `false` otherwise.
         */
        keyPressed(keycode: number): boolean;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * Arranges the elements within the tabbed layout.
         */
        arrangeElements(): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isActive(): boolean;
        yacl$getLayout(): $LinearLayout;
        /**
         * Returns the index of the current tab.
         * 
         * @return the index of the current tab, or -1 if no current tab is set.
         */
        yacl$getWidth(): number;
        yacl$getTabManager(): $TabManager;
        yacl$getTabs(): $ImmutableList<$Tab>;
        yacl$getTabButtons(): $ImmutableList<$TabButton>;
        constructor(width: number, tabManager: $TabManager, tabs: $Iterable_<$Tab>);
        set width(value: number);
        get active(): boolean;
    }
}
