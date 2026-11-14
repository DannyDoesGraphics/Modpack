import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ObjectSelectionList, $ObjectSelectionList$Entry, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ReportReason, $ReportReason_, $ChatReport$Builder, $NameReport$Builder, $SkinReport, $Report$Builder, $ReportingContext, $ChatReport, $NameReport, $SkinReport$Builder } from "@package/net/minecraft/client/multiplayer/chat/report";
import { $Minecraft, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $List, $UUID_ } from "@package/java/util";
import { $LoggedChatMessage$Player, $LoggedChatMessage$Player_ } from "@package/net/minecraft/client/multiplayer/chat";
import { $Consumer_, $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $PlayerSkin } from "@package/net/minecraft/client/resources";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $WarningScreen } from "@package/net/minecraft/client/gui/screens/multiplayer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Record } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $PlayerEntry } from "@package/net/minecraft/client/gui/screens/social";

declare module "@package/net/minecraft/client/gui/screens/reporting" {
    export class $ChatReportScreen extends $AbstractReportScreen<$ChatReport$Builder> {
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
        constructor(lastScreen: $Screen, reportingContext: $ReportingContext, reportId: $UUID_);
        constructor(lastScreen: $Screen, reportContext: $ReportingContext, report: $ChatReport);
    }
    export class $ReportPlayerScreen extends $Screen {
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
        constructor(lastScreen: $Screen, context: $ReportingContext, player: $PlayerEntry);
    }
    export class $ChatSelectionScreen$ChatSelectionList$DividerEntry extends $ChatSelectionScreen$ChatSelectionList$Entry {
        constructor(text: $ChatSelectionScreen$ChatSelectionList, arg1: $Component_);
    }
    export class $SkinReportScreen extends $AbstractReportScreen<$SkinReport$Builder> {
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
        constructor(lastScreen: $Screen, reportingContext: $ReportingContext, reportId: $UUID_, skinGetter: $Supplier_<$PlayerSkin>);
        constructor(lastScreen: $Screen, reportingContext: $ReportingContext, report: $SkinReport);
    }
    export class $ChatSelectionScreen$ChatSelectionList$PaddingEntry extends $ChatSelectionScreen$ChatSelectionList$Entry {
        constructor(arg0: $ChatSelectionScreen$ChatSelectionList);
    }
    export class $ReportReasonSelectionScreen extends $Screen {
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
        constructor(lastScreen: $Screen | null, currentlySelectedReason: $ReportReason_ | null, onSelectedReason: $Consumer_<$ReportReason>);
    }
    export class $AbstractReportScreen<B extends $Report$Builder<never>> extends $Screen {
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
    export class $ChatSelectionLogFiller$Output {
    }
    export interface $ChatSelectionLogFiller$Output {
        acceptMessage(chatId: number, playerMessage: $LoggedChatMessage$Player_): void;
        acceptDivider(text: $Component_): void;
    }
    export class $ChatSelectionScreen$ChatSelectionList$Heading extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatSelectionScreen$ChatSelectionList$Heading}.
     */
    export type $ChatSelectionScreen$ChatSelectionList$Heading_ = { entry?: $ChatSelectionScreen$ChatSelectionList$Entry, sender?: $UUID_,  } | [entry?: $ChatSelectionScreen$ChatSelectionList$Entry, sender?: $UUID_, ];
    export class $ChatSelectionScreen$ChatSelectionList$MessageHeadingEntry extends $ChatSelectionScreen$ChatSelectionList$Entry {
        constructor(profile: $ChatSelectionScreen$ChatSelectionList, heading: $GameProfile, canReport: $Component_, arg3: boolean);
    }
    export class $ChatSelectionLogFiller {
        fillNextPage(maxVisibleEntries: number, output: $ChatSelectionLogFiller$Output): void;
        constructor(reportingContext: $ReportingContext, canReport: $Predicate_<$LoggedChatMessage$Player>);
    }
    export class $ReportReasonSelectionScreen$ReasonSelectionList extends $ObjectSelectionList<$ReportReasonSelectionScreen$ReasonSelectionList$Entry> {
        setSelected(selected: $ReportReasonSelectionScreen$ReasonSelectionList$Entry | null): void;
        findEntry(reason: $ReportReason_): $ReportReasonSelectionScreen$ReasonSelectionList$Entry;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
        constructor(minecraft: $ReportReasonSelectionScreen, arg1: $Minecraft);
        set selected(value: $ReportReasonSelectionScreen$ReasonSelectionList$Entry | null);
    }
    export class $ChatSelectionScreen$ChatSelectionList$Entry extends $ObjectSelectionList$Entry<$ChatSelectionScreen$ChatSelectionList$Entry> {
        canReport(): boolean;
        canSelect(): boolean;
        isSelected(): boolean;
        constructor(arg0: $ChatSelectionScreen$ChatSelectionList);
        get selected(): boolean;
    }
    export class $AbstractReportScreen$DiscardReportWarningScreen extends $WarningScreen {
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
    export class $ChatSelectionScreen$ChatSelectionList extends $ObjectSelectionList<$ChatSelectionScreen$ChatSelectionList$Entry> implements $ChatSelectionLogFiller$Output {
        acceptMessage(chatId: number, playerMessage: $LoggedChatMessage$Player_): void;
        acceptDivider(text: $Component_): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxVisibleEntries(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getFooterTop(): number;
        setSelected(selected: $ChatSelectionScreen$ChatSelectionList$Entry | null): void;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
        constructor(minecraft: $ChatSelectionScreen, height: $Minecraft, arg2: number);
        get maxVisibleEntries(): number;
        get footerTop(): number;
        set selected(value: $ChatSelectionScreen$ChatSelectionList$Entry | null);
    }
    export class $ChatSelectionScreen$ChatSelectionList$MessageEntry extends $ChatSelectionScreen$ChatSelectionList$Entry {
        constructor(chatId: $ChatSelectionScreen$ChatSelectionList, text: number, narration: $Component_, tagIcon: $Component_, canReport: $GuiMessageTag_ | null, playerMessage: boolean, arg6: boolean);
    }
    export class $ReportReasonSelectionScreen$ReasonSelectionList$Entry extends $ObjectSelectionList$Entry<$ReportReasonSelectionScreen$ReasonSelectionList$Entry> {
        getReason(): $ReportReason;
        constructor(reason: $ReportReasonSelectionScreen$ReasonSelectionList, arg1: $ReportReason_);
        get reason(): $ReportReason;
    }
    export class $ChatSelectionScreen extends $Screen {
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
        constructor(lastScreen: $Screen | null, reportingContext: $ReportingContext, report: $ChatReport$Builder, onSelected: $Consumer_<$ChatReport$Builder>);
    }
    export class $NameReportScreen extends $AbstractReportScreen<$NameReport$Builder> {
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
        constructor(lastScreen: $Screen, reportingContext: $ReportingContext, report: $NameReport);
        constructor(lastScreen: $Screen, reportingContext: $ReportingContext, reportedProfileId: $UUID_, reportedName: string);
    }
}
