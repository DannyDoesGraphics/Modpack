import { $CreativeModeTab_, $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/fabricmc/fabric/api/event";

declare module "@package/io/wispforest/accessories/client/gui/components" {
    export class $ComponentUtils$CreativeScreenExtension {
    }
    export interface $ComponentUtils$CreativeScreenExtension {
        getEvent(): $Event<$ComponentUtils$OnCreativeTabChange>;
        getTab(): $CreativeModeTab;
        get event(): $Event<$ComponentUtils$OnCreativeTabChange>;
        get tab(): $CreativeModeTab;
    }
    export class $ComponentUtils$OnCreativeTabChange {
    }
    export interface $ComponentUtils$OnCreativeTabChange {
        onTabChange(arg0: $CreativeModeTab_): void;
    }
    /**
     * Values that may be interpreted as {@link $ComponentUtils$OnCreativeTabChange}.
     */
    export type $ComponentUtils$OnCreativeTabChange_ = ((arg0: $CreativeModeTab) => void);
}
