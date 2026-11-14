import { $libvlc_instance_t, $libvlc_log_cb } from "@package/org/watermedia/videolan4j/binding/internal";
import { $Enum } from "@package/java/lang";

declare module "@package/org/watermedia/videolan4j/log" {
    export class $NativeLog {
        addLogListener(arg0: $LogEventListener_): void;
        removeLogListener(arg0: $LogEventListener_): void;
        release(): void;
        getLevel(): $LogLevel;
        setLevel(arg0: $LogLevel_): void;
        constructor(arg0: $libvlc_instance_t);
    }
    export class $NativeLog$NativeLogCallback implements $libvlc_log_cb {
    }
    export class $LogEventListener {
    }
    export interface $LogEventListener {
        log(arg0: $LogLevel_, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string, arg6: number, arg7: string): void;
    }
    /**
     * Values that may be interpreted as {@link $LogEventListener}.
     */
    export type $LogEventListener_ = ((arg0: $LogLevel, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string, arg6: number, arg7: string) => void);
    export class $LogLevel extends $Enum<$LogLevel> {
        static values(): $LogLevel[];
        intValue(): number;
        static valueOf(arg0: string): $LogLevel;
        static level(arg0: number): $LogLevel;
        static NOTICE: $LogLevel;
        static ERROR: $LogLevel;
        static DEBUG: $LogLevel;
        static WARNING: $LogLevel;
    }
    /**
     * Values that may be interpreted as {@link $LogLevel}.
     */
    export type $LogLevel_ = "debug" | "notice" | "warning" | "error";
}
