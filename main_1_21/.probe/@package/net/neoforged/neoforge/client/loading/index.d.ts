import { $Supplier_, $IntConsumer_, $IntSupplier_, $Consumer_, $Supplier, $LongSupplier_, $LongSupplier } from "@package/java/util/function";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $LoadingOverlay } from "@package/net/minecraft/client/gui/screens";
import { $Minecraft } from "@package/net/minecraft/client";
import { $ReloadInstance, $ReloadableResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Monitor } from "@package/com/mojang/blaze3d/platform";
import { $Throwable, $Runnable_, $Runnable } from "@package/java/lang";
import { $DisplayWindow } from "@package/net/neoforged/fml/earlydisplay";
import { $VersionChecker$Status } from "@package/net/neoforged/fml";
import { $CommonModLoader } from "@package/net/neoforged/neoforge/internal";

declare module "@package/net/neoforged/neoforge/client/loading" {
    export class $ClientModLoader extends $CommonModLoader {
        static begin(minecraft: $Minecraft, defaultResourcePacks: $PackRepository, mcResourceManager: $ReloadableResourceManager): void;
        static isLoading(): boolean;
        static completeModLoading(initialScreensTask: $Runnable_): $Runnable;
        static checkForUpdates(): $VersionChecker$Status;
        constructor();
        static get loading(): boolean;
    }
    /**
     * This is an implementation of the LoadingOverlay that calls back into the early window rendering, as part of the
     * game loading cycle. We completely replace the `#render(GuiGraphics, int, int, float)` call from the parent
     * with one of our own, that allows us to blend our early loading screen into the main window, in the same manner as
     * the Mojang screen. It also allows us to see and tick appropriately as the later stages of the loading system run.
     * 
     * It is somewhat a copy of the superclass render method.
     */
    export class $NeoForgeLoadingOverlay extends $LoadingOverlay {
        static newInstance(mc: $Supplier_<$Minecraft>, ri: $Supplier_<$ReloadInstance>, handler: $Consumer_<($Throwable) | undefined>, window: $DisplayWindow): $Supplier<$LoadingOverlay>;
        reload: $ReloadInstance;
        static FADE_OUT_TIME: number;
        static FADE_IN_TIME: number;
        fadeOutStart: number;
        constructor(mc: $Minecraft, reloader: $ReloadInstance, errorConsumer: $Consumer_<($Throwable) | undefined>, displayWindow: $DisplayWindow);
    }
    export class $NoVizFallback {
        static loadingOverlay(mc: $Supplier_<$Minecraft>, ri: $Supplier_<$ReloadInstance>, ex: $Consumer_<($Throwable) | undefined>, fadein: boolean): $Supplier<$LoadingOverlay>;
        static windowPositioning(monitor: ($Monitor) | undefined, widthSetter: $IntConsumer_, heightSetter: $IntConsumer_, xSetter: $IntConsumer_, ySetter: $IntConsumer_): boolean;
        static windowHandoff(width: $IntSupplier_, height: $IntSupplier_, title: $Supplier_<string>, monitor: $LongSupplier_): $LongSupplier;
        static glVersion(): string;
        constructor();
    }
}
