import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $AdvancementHolder_ } from "@package/net/minecraft/advancements";
import { $SoundManager } from "@package/net/minecraft/client/sounds";
import { $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";
import { $Object, $Enum, $Class } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/components/toasts" {
    export class $ToastComponent {
        clear(): void;
        getMinecraft(): $Minecraft;
        addToast(toast: $Toast_): void;
        render(guiGraphics: $GuiGraphics): void;
        freeSlots(): number;
        getToast<T extends $Toast>(toastClass: $Class<T>, token: $Object): T;
        handler$zea000$sodium_extra$goodByeToasts(arg0: $Toast_, arg1: $CallbackInfo): void;
        getNotificationDisplayTimeMultiplier(): number;
        visible: $List<$ToastComponent$ToastInstance<never>>;
        constructor(minecraft: $Minecraft);
        get minecraft(): $Minecraft;
        get notificationDisplayTimeMultiplier(): number;
    }
    export class $RecipeToast implements $Toast {
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        static addOrUpdate(toastComponent: $ToastComponent, recipe: $RecipeHolder_<never>): void;
        width(): number;
        slotCount(): number;
        height(): number;
        getToken(): $Object;
        constructor(recipe: $RecipeHolder_<never>);
        get token(): $Object;
    }
    export class $SystemToast$SystemToastId {
        static WORLD_ACCESS_FAILURE: $SystemToast$SystemToastId;
        static CHUNK_LOAD_FAILURE: $SystemToast$SystemToastId;
        static WORLD_BACKUP: $SystemToast$SystemToastId;
        static FILE_DROP_FAILURE: $SystemToast$SystemToastId;
        static PERIODIC_NOTIFICATION: $SystemToast$SystemToastId;
        static PACK_LOAD_FAILURE: $SystemToast$SystemToastId;
        static UNSECURE_SERVER_WARNING: $SystemToast$SystemToastId;
        static CHUNK_SAVE_FAILURE: $SystemToast$SystemToastId;
        static PACK_COPY_FAILURE: $SystemToast$SystemToastId;
        static LOW_DISK_SPACE: $SystemToast$SystemToastId;
        static NARRATOR_TOGGLE: $SystemToast$SystemToastId;
        constructor(displayTime: number);
        constructor();
    }
    export class $AdvancementToast implements $Toast {
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        width(): number;
        slotCount(): number;
        height(): number;
        getToken(): $Object;
        static DISPLAY_TIME: number;
        constructor(advancement: $AdvancementHolder_);
        get token(): $Object;
    }
    export class $Toast$Visibility extends $Enum<$Toast$Visibility> {
        static values(): $Toast$Visibility[];
        static valueOf(arg0: string): $Toast$Visibility;
        playSound(handler: $SoundManager): void;
        static HIDE: $Toast$Visibility;
        static SHOW: $Toast$Visibility;
    }
    /**
     * Values that may be interpreted as {@link $Toast$Visibility}.
     */
    export type $Toast$Visibility_ = "show" | "hide";
    export class $Toast {
        static NO_TOKEN: $Object;
        static SLOT_HEIGHT: number;
    }
    export interface $Toast {
        width(): number;
        slotCount(): number;
        height(): number;
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        getToken(): $Object;
        get token(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Toast}.
     */
    export type $Toast_ = ((arg0: $GuiGraphics, arg1: $ToastComponent, arg2: number) => $Toast$Visibility_);
    export class $TutorialToast$Icons extends $Enum<$TutorialToast$Icons> {
        static values(): $TutorialToast$Icons[];
        static valueOf(arg0: string): $TutorialToast$Icons;
        render(guiGraphics: $GuiGraphics, x: number, y: number): void;
        static MOUSE: $TutorialToast$Icons;
        static WOODEN_PLANKS: $TutorialToast$Icons;
        static MOVEMENT_KEYS: $TutorialToast$Icons;
        static RIGHT_CLICK: $TutorialToast$Icons;
        static TREE: $TutorialToast$Icons;
        static SOCIAL_INTERACTIONS: $TutorialToast$Icons;
        static RECIPE_BOOK: $TutorialToast$Icons;
    }
    /**
     * Values that may be interpreted as {@link $TutorialToast$Icons}.
     */
    export type $TutorialToast$Icons_ = "movement_keys" | "mouse" | "tree" | "recipe_book" | "wooden_planks" | "social_interactions" | "right_click";
    export class $ToastComponent$ToastInstance<T extends $Toast> {
        render(screenWidth: number, guiGraphics: $GuiGraphics): boolean;
        getToast(): T;
        get toast(): T;
    }
    export class $SystemToast implements $Toast {
        static onPackCopyFailure(minecraft: $Minecraft, message: string): void;
        static onChunkSaveFailure(minecraft: $Minecraft, chunkPos: $ChunkPos): void;
        static onChunkLoadFailure(minecraft: $Minecraft, chunkPos: $ChunkPos): void;
        static onLowDiskSpace(minecraft: $Minecraft): void;
        forceHide(): void;
        static forceHide(toastComponent: $ToastComponent, id: $SystemToast$SystemToastId): void;
        reset(title: $Component_, message: $Component_ | null): void;
        static add(toastComponent: $ToastComponent, id: $SystemToast$SystemToastId, title: $Component_, message: $Component_ | null): void;
        width(): number;
        static multiline(minecraft: $Minecraft, id: $SystemToast$SystemToastId, title: $Component_, message: $Component_): $SystemToast;
        height(): number;
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        getToken(): $SystemToast$SystemToastId;
        static addOrUpdate(toastComponent: $ToastComponent, id: $SystemToast$SystemToastId, title: $Component_, message: $Component_ | null): void;
        static onWorldAccessFailure(minecraft: $Minecraft, message: string): void;
        static onWorldDeleteFailure(minecraft: $Minecraft, message: string): void;
        static onFileDropFailure(minecraft: $Minecraft, failedFileCount: number): void;
        slotCount(): number;
        constructor(id: $SystemToast$SystemToastId, title: $Component_, message: $Component_ | null);
        get token(): $SystemToast$SystemToastId;
    }
    export class $TutorialToast implements $Toast {
        hide(): void;
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        updateProgress(progress: number): void;
        width(): number;
        slotCount(): number;
        height(): number;
        getToken(): $Object;
        static PROGRESS_BAR_HEIGHT: number;
        static PROGRESS_BAR_X: number;
        static PROGRESS_BAR_WIDTH: number;
        static PROGRESS_BAR_Y: number;
        constructor(icon: $TutorialToast$Icons_, title: $Component_, message: $Component_ | null, progressable: boolean);
        get token(): $Object;
    }
}
