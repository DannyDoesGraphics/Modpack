import { $GameType } from "@package/net/minecraft/world/level";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $AbstractSliderButton, $ContainerObjectSelectionList, $PopupScreen, $Button, $ObjectSelectionList, $ContainerObjectSelectionList$Entry, $ObjectSelectionList$Entry, $WidgetSprites, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $WorldGenerationInfo } from "@package/com/mojang/realmsclient/util";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $RowButton } from "@package/com/mojang/realmsclient/gui";
import { $LevelSummary } from "@package/net/minecraft/world/level/storage";
import { $List } from "@package/java/util";
import { $RealmsServiceException } from "@package/com/mojang/realmsclient/exception";
import { $WorldTemplate, $Backup, $RealmsServer, $RealmsWorldOptions, $WorldTemplatePaginatedList, $WorldDownload, $RealmsServer$WorldType_ } from "@package/com/mojang/realmsclient/dto";
import { $Difficulty } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $RealmsMainScreen } from "@package/com/mojang/realmsclient";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Record, $Runnable_ } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $LongRunningTask, $RealmCreationTask } from "@package/com/mojang/realmsclient/util/task";
import { $RealmsScreen, $RealmsObjectSelectionList } from "@package/net/minecraft/realms";

declare module "@package/com/mojang/realmsclient/gui/screens" {
    export class $RealmsSettingsScreen extends $RealmsScreen {
        init(): void;
        save(): void;
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
        constructor(configureWorldScreen: $RealmsConfigureWorldScreen, serverData: $RealmsServer);
    }
    export class $RealmsResetWorldScreen$FrameButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
    }
    export class $RealmsSelectFileToUploadScreen extends $RealmsScreen {
        init(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static TITLE: $Component;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(realmCreationTask: $RealmCreationTask | null, realmId: number, arg2: number, slotId: $RealmsResetWorldScreen);
    }
    export class $RealmsPlayerScreen$Entry extends $ContainerObjectSelectionList$Entry<$RealmsPlayerScreen$Entry> {
    }
    export class $UploadResult$Builder {
        withStatusCode(statusCode: number): $UploadResult$Builder;
        withErrorMessage(errorMessage: string | null): $UploadResult$Builder;
        build(): $UploadResult;
        constructor();
    }
    export class $RealmsGenericErrorScreen$ErrorMessage extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RealmsGenericErrorScreen$ErrorMessage}.
     */
    export type $RealmsGenericErrorScreen$ErrorMessage_ = { title?: $Component_, detail?: $Component_,  } | [title?: $Component_, detail?: $Component_, ];
    export class $RealmsParentalConsentScreen extends $RealmsScreen {
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
        constructor(nextScreen: $Screen);
    }
    export class $RealmsTermsScreen extends $RealmsScreen {
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
        constructor(lastScreen: $Screen, realmsServer: $RealmsServer);
    }
    export class $RealmsConfirmScreen extends $RealmsScreen {
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
        constructor(callback: $BooleanConsumer_, title1: $Component_, title2: $Component_);
    }
    export class $RealmsNotificationsScreen extends $RealmsScreen {
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
        constructor();
    }
    export class $RealmsSlotOptionsScreen extends $RealmsScreen {
        init(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static GAME_MODES: $List<$GameType>;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static DIFFICULTIES: $List<$Difficulty>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $RealmsConfigureWorldScreen, options: $RealmsWorldOptions, worldType: $RealmsServer$WorldType_, activeSlot: number);
    }
    export class $RealmsSelectWorldTemplateScreen$WorldTemplateList extends $RealmsObjectSelectionList<$RealmsSelectWorldTemplateScreen$Entry> {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
    }
    export class $RealmsResetWorldScreen extends $RealmsScreen {
        static forEmptySlot(lastScreen: $Screen, slot: number, serverData: $RealmsServer, resetWorldRunnable: $Runnable_): $RealmsResetWorldScreen;
        static forResetSlot(lastScreen: $Screen, serverData: $RealmsServer, resetWorldRunnable: $Runnable_): $RealmsResetWorldScreen;
        static forNewRealm(lastScreen: $Screen, serverData: $RealmsServer, realmCreationTask: $RealmCreationTask, resetWorldRunnable: $Runnable_): $RealmsResetWorldScreen;
        init(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static CREATE_WORLD_RESET_TASK_TITLE: $Component;
        slot: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(lastScreen: $Screen, serverData: $RealmsServer, slot: number, title: $Component_, subtitle: $Component_, subtitleColor: number, resetTaskTitle: $Component_, realmCreationTask: $RealmCreationTask | null, resetWorldRunnable: $Runnable_);
    }
    export class $RealmsSubscriptionInfoScreen extends $RealmsScreen {
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
        constructor(lastScreen: $Screen, serverData: $RealmsServer, mainScreen: $Screen);
    }
    export class $RealmsClientOutdatedScreen extends $RealmsScreen {
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
        constructor(lastScreen: $Screen);
    }
    export class $RealmsGenericErrorScreen extends $RealmsScreen {
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
        constructor(title: $Component_, line2: $Component_, message: $Screen);
        constructor(message: $Component_, nextScreen: $Screen);
        constructor(serviceException: $RealmsServiceException, nextScreen: $Screen);
    }
    export class $RealmsLongRunningMcoTaskScreen extends $RealmsScreen {
        init(): void;
        setTitle(title: $Component_): void;
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
        constructor(lastScreen: $Screen, ...queuedTasks: $LongRunningTask[]);
        set title(value: $Component_);
    }
    export class $RealmsBackupInfoScreen$BackupInfoList extends $ObjectSelectionList<$RealmsBackupInfoScreen$BackupInfoListEntry> {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
    }
    export class $RealmsSlotOptionsScreen$SettingsSlider extends $AbstractSliderButton {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
    }
    export class $RealmsPendingInvitesScreen$Entry extends $ObjectSelectionList$Entry<$RealmsPendingInvitesScreen$Entry> {
    }
    export class $RealmsBackupInfoScreen extends $RealmsScreen {
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
        constructor(lastScreen: $Screen, backup: $Backup);
    }
    export class $AddRealmPopupScreen extends $RealmsScreen {
        static updateCarouselImages(resourceManager: $ResourceManager): void;
        static renderDiamond(guiGraphics: $GuiGraphics, button: $Button): void;
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
        constructor(backgroundScreen: $Screen, trialAvailable: boolean);
    }
    export class $RealmsSelectFileToUploadScreen$Entry extends $ObjectSelectionList$Entry<$RealmsSelectFileToUploadScreen$Entry> {
    }
    export class $RealmsInviteScreen extends $RealmsScreen {
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
        constructor(configureScreen: $RealmsConfigureWorldScreen, lastScreen: $Screen, serverData: $RealmsServer);
    }
    export class $RealmsPlayerScreen extends $RealmsScreen {
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
        constructor(lastScreen: $RealmsConfigureWorldScreen, serverData: $RealmsServer);
    }
    export class $RealmsBackupScreen extends $RealmsScreen {
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
        constructor(lastScreen: $RealmsConfigureWorldScreen, serverData: $RealmsServer, slotId: number);
    }
    export class $RealmsDownloadLatestWorldScreen$DownloadStatus {
        bytesWritten: number;
        totalBytes: number;
        constructor();
    }
    export class $RealmsDownloadLatestWorldScreen extends $RealmsScreen {
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
        constructor(lastScreen: $Screen, worldDownload: $WorldDownload, worldName: string, callback: $BooleanConsumer_);
    }
    export class $RealmsPendingInvitesScreen$Entry$AcceptRowButton extends $RowButton {
        yOffset: number;
        xOffset: number;
        width: number;
        height: number;
    }
    export class $RealmsBackupScreen$BackupObjectSelectionList extends $ContainerObjectSelectionList<$RealmsBackupScreen$Entry> {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
    }
    export class $RealmsPopups {
        static infoPopupScreen(backgroundScreen: $Screen, message: $Component_, onContinue: $Consumer_<$PopupScreen>): $PopupScreen;
        static warningAcknowledgePopupScreen(backgroundScreen: $Screen, message: $Component_, onContinue: $Consumer_<$PopupScreen>): $PopupScreen;
        static warningPopupScreen(backgroundScreen: $Screen, message: $Component_, onContinue: $Consumer_<$PopupScreen>): $PopupScreen;
        constructor();
    }
    export class $UploadResult {
        errorMessage: string;
        statusCode: number;
    }
    export class $RealmsBackupInfoScreen$BackupInfoListEntry extends $ObjectSelectionList$Entry<$RealmsBackupInfoScreen$BackupInfoListEntry> {
    }
    export class $RealmsBackupScreen$Entry extends $ContainerObjectSelectionList$Entry<$RealmsBackupScreen$Entry> {
    }
    export class $RealmsPlayerScreen$InvitedObjectSelectionList extends $ContainerObjectSelectionList<$RealmsPlayerScreen$Entry> {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
    }
    export class $RealmsPendingInvitesScreen$Entry$RejectRowButton extends $RowButton {
        yOffset: number;
        xOffset: number;
        width: number;
        height: number;
    }
    export class $RealmsSelectWorldTemplateScreen$Entry extends $ObjectSelectionList$Entry<$RealmsSelectWorldTemplateScreen$Entry> {
    }
    export class $RealmsCreateRealmScreen extends $RealmsScreen {
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
        constructor(lastScreen: $RealmsMainScreen, realmsServer: $RealmsServer);
        constructor(lastScreen: $RealmsMainScreen, parentId: number);
    }
    export class $RealmsPendingInvitesScreen extends $RealmsScreen {
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
        constructor(lastScreen: $Screen, title: $Component_);
    }
    export class $RealmsLongRunningMcoTickTaskScreen extends $RealmsLongRunningMcoTaskScreen {
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
        constructor(lastScreen: $Screen, task: $LongRunningTask);
    }
    export class $RealmsBrokenWorldScreen extends $RealmsScreen {
        doSwitchOrReset(): void;
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
        constructor(lastScreen: $Screen, serverId: number, arg2: boolean);
    }
    export class $RealmsUploadScreen extends $RealmsScreen {
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
        constructor(realmCreationTask: $RealmCreationTask | null, realmId: number, arg2: number, slotId: $RealmsResetWorldScreen, lastScreen: $LevelSummary);
    }
    export class $RealmsPendingInvitesScreen$PendingInvitationSelectionList extends $RealmsObjectSelectionList<$RealmsPendingInvitesScreen$Entry> {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
    }
    export class $RealmsNotificationsScreen$DataFetcherConfiguration {
    }
    export interface $RealmsNotificationsScreen$DataFetcherConfiguration {
    }
    export class $RealmsConfigureWorldScreen extends $RealmsScreen {
        openTheWorld(join: boolean): void;
        saveSlotSettings(worldOptions: $RealmsWorldOptions): void;
        saveSettings(key: string, value: string): void;
        closeTheWorld(): void;
        init(): void;
        getNewScreen(): $RealmsConfigureWorldScreen;
        stateChanged(): void;
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
        constructor(lastScreen: $RealmsMainScreen, serverId: number);
        get newScreen(): $RealmsConfigureWorldScreen;
    }
    export class $RealmsSelectWorldTemplateScreen extends $RealmsScreen {
        setWarning(...warning: $Component_[]): void;
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
        constructor(title: $Component_, callback: $Consumer_<$WorldTemplate>, worldType: $RealmsServer$WorldType_);
        constructor(title: $Component_, callback: $Consumer_<$WorldTemplate>, worldType: $RealmsServer$WorldType_, worldTemplatePaginatedList: $WorldTemplatePaginatedList | null);
        set warning(value: $Component_[]);
    }
    export class $RealmsResetNormalWorldScreen extends $RealmsScreen {
        init(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static FOOTER_SEPARATOR: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static TITLE: $Component;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(callback: $Consumer_<$WorldGenerationInfo>, buttonTitle: $Component_);
    }
    export class $RealmsSelectFileToUploadScreen$WorldSelectionList extends $RealmsObjectSelectionList<$RealmsSelectFileToUploadScreen$Entry> {
        static UNSET_FG_COLOR: number;
        visible: boolean;
        active: boolean;
        scrollAmount: number;
    }
}
