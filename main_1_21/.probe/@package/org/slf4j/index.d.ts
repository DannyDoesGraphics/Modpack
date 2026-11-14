import { $Serializable } from "@package/java/io";
import { $Level_ } from "@package/org/slf4j/event";
import { $LoggingEventBuilder } from "@package/org/slf4j/spi";
import { $Iterator } from "@package/java/util";
import { $Throwable, $Object } from "@package/java/lang";
export * as event from "@package/org/slf4j/event";
export * as spi from "@package/org/slf4j/spi";

declare module "@package/org/slf4j" {
    export class $Logger {
        static ROOT_LOGGER_NAME: string;
    }
    export interface $Logger {
        getName(): string;
        info(arg0: string, arg1: $Object, arg2: $Object): void;
        info(arg0: string, ...arg1: $Object[]): void;
        info(arg0: string, arg1: $Throwable): void;
        info(arg0: string, arg1: $Object): void;
        info(arg0: string): void;
        info(arg0: $Marker, arg1: string, arg2: $Throwable): void;
        info(arg0: $Marker, arg1: string, ...arg2: $Object[]): void;
        info(arg0: $Marker, arg1: string, arg2: $Object, arg3: $Object): void;
        info(arg0: $Marker, arg1: string, arg2: $Object): void;
        info(arg0: $Marker, arg1: string): void;
        trace(arg0: $Marker, arg1: string, arg2: $Throwable): void;
        trace(arg0: string): void;
        trace(arg0: string, arg1: $Object): void;
        trace(arg0: string, ...arg1: $Object[]): void;
        trace(arg0: string, arg1: $Throwable): void;
        trace(arg0: string, arg1: $Object, arg2: $Object): void;
        trace(arg0: $Marker, arg1: string): void;
        trace(arg0: $Marker, arg1: string, arg2: $Object): void;
        trace(arg0: $Marker, arg1: string, arg2: $Object, arg3: $Object): void;
        trace(arg0: $Marker, arg1: string, ...arg2: $Object[]): void;
        debug(arg0: $Marker, arg1: string, arg2: $Object, arg3: $Object): void;
        debug(arg0: $Marker, arg1: string, arg2: $Object): void;
        debug(arg0: $Marker, arg1: string, ...arg2: $Object[]): void;
        debug(arg0: $Marker, arg1: string, arg2: $Throwable): void;
        debug(arg0: string, ...arg1: $Object[]): void;
        debug(arg0: string, arg1: $Object, arg2: $Object): void;
        debug(arg0: string, arg1: $Object): void;
        debug(arg0: string): void;
        debug(arg0: $Marker, arg1: string): void;
        debug(arg0: string, arg1: $Throwable): void;
        error(arg0: $Marker, arg1: string, ...arg2: $Object[]): void;
        error(arg0: string, arg1: $Throwable): void;
        error(arg0: $Marker, arg1: string, arg2: $Throwable): void;
        error(arg0: string): void;
        error(arg0: string, arg1: $Object, arg2: $Object): void;
        error(arg0: string, ...arg1: $Object[]): void;
        error(arg0: $Marker, arg1: string, arg2: $Object, arg3: $Object): void;
        error(arg0: string, arg1: $Object): void;
        error(arg0: $Marker, arg1: string): void;
        error(arg0: $Marker, arg1: string, arg2: $Object): void;
        warn(arg0: string, arg1: $Object, arg2: $Object): void;
        warn(arg0: $Marker, arg1: string, ...arg2: $Object[]): void;
        warn(arg0: string, ...arg1: $Object[]): void;
        warn(arg0: $Marker, arg1: string, arg2: $Object, arg3: $Object): void;
        warn(arg0: $Marker, arg1: string): void;
        warn(arg0: $Marker, arg1: string, arg2: $Object): void;
        warn(arg0: string, arg1: $Throwable): void;
        warn(arg0: $Marker, arg1: string, arg2: $Throwable): void;
        warn(arg0: string, arg1: $Object): void;
        warn(arg0: string): void;
        isDebugEnabled(arg0: $Marker): boolean;
        isDebugEnabled(): boolean;
        isErrorEnabled(arg0: $Marker): boolean;
        isErrorEnabled(): boolean;
        isInfoEnabled(): boolean;
        isInfoEnabled(arg0: $Marker): boolean;
        isTraceEnabled(): boolean;
        isTraceEnabled(arg0: $Marker): boolean;
        isWarnEnabled(): boolean;
        isWarnEnabled(arg0: $Marker): boolean;
        atTrace(): $LoggingEventBuilder;
        atDebug(): $LoggingEventBuilder;
        atInfo(): $LoggingEventBuilder;
        atWarn(): $LoggingEventBuilder;
        atError(): $LoggingEventBuilder;
        atLevel(arg0: $Level_): $LoggingEventBuilder;
        isEnabledForLevel(arg0: $Level_): boolean;
        makeLoggingEventBuilder(arg0: $Level_): $LoggingEventBuilder;
        get name(): string;
    }
    export class $Marker {
        static ANY_MARKER: string;
        static ANY_NON_NULL_MARKER: string;
    }
    export interface $Marker extends $Serializable {
        getName(): string;
        remove(arg0: $Marker): boolean;
        equals(arg0: $Object): boolean;
        hashCode(): number;
        add(arg0: $Marker): void;
        iterator(): $Iterator<$Marker>;
        contains(arg0: string): boolean;
        contains(arg0: $Marker): boolean;
        /**
         * @deprecated
         */
        hasChildren(): boolean;
        hasReferences(): boolean;
        get name(): string;
    }
}
