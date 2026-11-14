import { $Enum } from "@package/java/lang";

declare module "@package/org/apache/logging/log4j/spi" {
    export class $StandardLevel extends $Enum<$StandardLevel> {
        static values(): $StandardLevel[];
        static valueOf(name: string): $StandardLevel;
        intLevel(): number;
        static getStandardLevel(intLevel: number): $StandardLevel;
        static TRACE: $StandardLevel;
        static ALL: $StandardLevel;
        static ERROR: $StandardLevel;
        static INFO: $StandardLevel;
        static FATAL: $StandardLevel;
        static DEBUG: $StandardLevel;
        static OFF: $StandardLevel;
        static WARN: $StandardLevel;
    }
    /**
     * Values that may be interpreted as {@link $StandardLevel}.
     */
    export type $StandardLevel_ = "off" | "fatal" | "error" | "warn" | "info" | "debug" | "trace" | "all";
}
