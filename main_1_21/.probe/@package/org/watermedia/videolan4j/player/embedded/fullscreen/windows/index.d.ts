import { $FullScreenStrategy } from "@package/org/watermedia/videolan4j/player/embedded/fullscreen";
import { $Window } from "@package/java/awt";
import { $User32 } from "@package/com/sun/jna/platform/win32";

declare module "@package/org/watermedia/videolan4j/player/embedded/fullscreen/windows" {
    export class $ExtendedUser32 {
    }
    export interface $ExtendedUser32 extends $User32 {
    }
    export class $WindowState {
    }
    export class $Win32FullScreenStrategy implements $FullScreenStrategy {
        isFullScreenMode(): boolean;
        enterFullScreenMode(): void;
        exitFullScreenMode(): void;
        constructor(arg0: $Window);
        get fullScreenMode(): boolean;
    }
    export class $Win32FullScreenHandler {
    }
}
