import { $CreativeModeTab_, $CreativeModeTab$ItemDisplayParameters_, $CreativeModeTab$Output, $CreativeModeTab$Output_, $CreativeModeTab$ItemDisplayParameters } from "@package/net/minecraft/world/item";
import { $Icon, $Icon_, $OwoItemGroup$ButtonDefinition } from "@package/io/wispforest/owo/itemgroup";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Runnable_, $Runnable, $Record } from "@package/java/lang";

declare module "@package/io/wispforest/owo/itemgroup/gui" {
    export class $ItemGroupButton implements $OwoItemGroup$ButtonDefinition {
        static curseforge(group: $CreativeModeTab_, url: string): $ItemGroupButton;
        static modrinth(group: $CreativeModeTab_, url: string): $ItemGroupButton;
        static discord(group: $CreativeModeTab_, url: string): $ItemGroupButton;
        static github(group: $CreativeModeTab_, url: string): $ItemGroupButton;
        texture(): $ResourceLocation;
        action(): $Runnable;
        static link(group: $CreativeModeTab_, icon: $Icon_, name: string, url: string): $ItemGroupButton;
        icon(): $Icon;
        tooltip(): $Component;
        static ICONS_TEXTURE: $ResourceLocation;
        constructor(group: $CreativeModeTab_, icon: $Icon_, name: string, texture: $ResourceLocation_, action: $Runnable_);
        constructor(group: $CreativeModeTab_, icon: $Icon_, name: string, action: $Runnable_);
    }
    export class $ItemGroupTab extends $Record implements $OwoItemGroup$ButtonDefinition {
        contentSupplier(): $ItemGroupTab$ContentSupplier;
        texture(): $ResourceLocation;
        name(): $Component;
        icon(): $Icon;
        primary(): boolean;
        tooltip(): $Component;
        static DEFAULT_TEXTURE: $ResourceLocation;
        constructor(icon: $Icon_, name: $Component_, contentSupplier: $ItemGroupTab$ContentSupplier_, texture: $ResourceLocation_, primary: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ItemGroupTab}.
     */
    export type $ItemGroupTab_ = { primary?: boolean, name?: $Component_, contentSupplier?: $ItemGroupTab$ContentSupplier_, icon?: $Icon_, texture?: $ResourceLocation_,  } | [primary?: boolean, name?: $Component_, contentSupplier?: $ItemGroupTab$ContentSupplier_, icon?: $Icon_, texture?: $ResourceLocation_, ];
    export class $ItemGroupTab$ContentSupplier {
    }
    export interface $ItemGroupTab$ContentSupplier {
        addItems(arg0: $CreativeModeTab$ItemDisplayParameters_, arg1: $CreativeModeTab$Output_): void;
    }
    /**
     * Values that may be interpreted as {@link $ItemGroupTab$ContentSupplier}.
     */
    export type $ItemGroupTab$ContentSupplier_ = ((arg0: $CreativeModeTab$ItemDisplayParameters, arg1: $CreativeModeTab$Output) => void);
}
