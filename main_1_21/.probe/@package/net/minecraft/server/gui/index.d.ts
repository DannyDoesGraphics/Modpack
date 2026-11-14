import { $MinecraftServer } from "@package/net/minecraft/server";
import { $DedicatedServer } from "@package/net/minecraft/server/dedicated";
import { $Runnable_ } from "@package/java/lang";
import { $JList, $JScrollPane, $JComponent, $JTextArea } from "@package/javax/swing";

declare module "@package/net/minecraft/server/gui" {
    export class $PlayerListComponent extends $JList<string> {
        tick(): void;
        static CENTER_ALIGNMENT: number;
        static BOTTOM_ALIGNMENT: number;
        static VERTICAL_WRAP: number;
        static UNDEFINED_CONDITION: number;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static VERTICAL: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static RIGHT_ALIGNMENT: number;
        static HORIZONTAL_WRAP: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        constructor(server: $MinecraftServer);
    }
    export class $MinecraftServerGui extends $JComponent {
        static showFrameFor(server: $DedicatedServer): $MinecraftServerGui;
        addFinalizer(finalizer: $Runnable_): void;
        start(): void;
        print(textArea: $JTextArea, scrollPane: $JScrollPane, line: string): void;
        close(): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
    }
    export class $StatsComponent extends $JComponent {
        close(): void;
        static WHEN_FOCUSED: number;
        static WHEN_ANCESTOR_OF_FOCUSED_COMPONENT: number;
        static CENTER_ALIGNMENT: number;
        static LEFT_ALIGNMENT: number;
        static TOOL_TIP_TEXT_KEY: string;
        static BOTTOM_ALIGNMENT: number;
        static RIGHT_ALIGNMENT: number;
        static TOP_ALIGNMENT: number;
        static WHEN_IN_FOCUSED_WINDOW: number;
        static UNDEFINED_CONDITION: number;
        constructor(server: $MinecraftServer);
    }
}
