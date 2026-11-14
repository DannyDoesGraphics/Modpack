import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/railwayteam/railways/content/cycle_menu" {
    export class $TagCycleHandlerServer {
        static onTagsUpdated(): void;
        static select(arg0: $ServerPlayer, arg1: $Item_): void;
        static CYCLE_TRACKER: $TagCycleTracker;
        constructor();
    }
    export class $TagCycleTracker {
        getCycleTag(arg0: $Item_): $TagKey<$Item>;
        registerCycle(arg0: $TagKey_<$Item>): void;
        scheduleRecompute(): void;
        computeCycles(): void;
        getCycle(arg0: $TagKey_<$Item>): $List<$Item>;
        constructor();
    }
    export class $TagCycleHandlerClient {
        static onTagsUpdated(): void;
        static clientTick(): void;
        static onKeyInput(arg0: number, arg1: boolean): void;
        static COOLDOWN: number;
        static CYCLE_TRACKER: $TagCycleTracker;
        constructor();
    }
    export class $RadialTagCycleMenu extends $AbstractSimiScreen {
        renderBackground(arg0: $GuiGraphics): void;
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
    }
}
