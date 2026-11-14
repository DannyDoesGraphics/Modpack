import { $Enum } from "@package/java/lang";

declare module "@package/org/slf4j/event" {
    export class $Level extends $Enum<$Level> {
        static values(): $Level[];
        static valueOf(arg0: string): $Level;
        toInt(): number;
        static intToLevel(arg0: number): $Level;
        static TRACE: $Level;
        static ERROR: $Level;
        static INFO: $Level;
        static DEBUG: $Level;
        static WARN: $Level;
    }
    /**
     * Values that may be interpreted as {@link $Level}.
     */
    export type $Level_ = "error" | "warn" | "info" | "debug" | "trace";
}
