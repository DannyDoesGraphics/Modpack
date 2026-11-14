import { $Instant } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $Supplier_ } from "@package/java/util/function";
import { $ResourceBundle } from "@package/java/util";
import { $Object, $Throwable, $Exception } from "@package/java/lang";

declare module "@package/java/util/logging" {
    export class $LogRecord implements $Serializable {
        getSourceClassName(): string;
        getSourceMethodName(): string;
        /**
         * @deprecated
         */
        getThreadID(): number;
        /**
         * @deprecated
         */
        setThreadID(arg0: number): void;
        getLongThreadID(): number;
        setLongThreadID(arg0: number): $LogRecord;
        getSequenceNumber(): number;
        setSequenceNumber(arg0: number): void;
        getInstant(): $Instant;
        getMessage(): string;
        getParameters(): $Object[];
        setInstant(arg0: $Instant): void;
        getMillis(): number;
        getLevel(): $Level;
        setLevel(arg0: $Level): void;
        getResourceBundleName(): string;
        getLoggerName(): string;
        setLoggerName(arg0: string): void;
        setResourceBundleName(arg0: string): void;
        setResourceBundle(arg0: $ResourceBundle): void;
        setParameters(arg0: $Object[]): void;
        setThrown(arg0: $Throwable): void;
        setSourceClassName(arg0: string): void;
        setSourceMethodName(arg0: string): void;
        getResourceBundle(): $ResourceBundle;
        /**
         * @deprecated
         */
        setMillis(arg0: number): void;
        getThrown(): $Throwable;
        setMessage(arg0: string): void;
        constructor(arg0: $Level, arg1: string);
    }
    export class $Logger {
        getName(): string;
        log(arg0: $Level, arg1: string, arg2: $Object[]): void;
        log(arg0: $LogRecord): void;
        log(arg0: $Level, arg1: string, arg2: $Object): void;
        log(arg0: $Level, arg1: $Supplier_<string>): void;
        log(arg0: $Level, arg1: string): void;
        log(arg0: $Level, arg1: $Throwable, arg2: $Supplier_<string>): void;
        log(arg0: $Level, arg1: string, arg2: $Throwable): void;
        info(arg0: string): void;
        info(arg0: $Supplier_<string>): void;
        getParent(): $Logger;
        static getLogger(arg0: string): $Logger;
        static getLogger(arg0: string, arg1: string): $Logger;
        config(arg0: string): void;
        config(arg0: $Supplier_<string>): void;
        isLoggable(arg0: $Level): boolean;
        getFilter(): $Filter;
        warning(arg0: string): void;
        warning(arg0: $Supplier_<string>): void;
        setParent(arg0: $Logger): void;
        getLevel(): $Level;
        setFilter(arg0: $Filter_): void;
        setLevel(arg0: $Level): void;
        getResourceBundleName(): string;
        addHandler(arg0: $Handler): void;
        getHandlers(): $Handler[];
        removeHandler(arg0: $Handler): void;
        setUseParentHandlers(arg0: boolean): void;
        static getAnonymousLogger(arg0: string): $Logger;
        static getAnonymousLogger(): $Logger;
        getUseParentHandlers(): boolean;
        setResourceBundle(arg0: $ResourceBundle): void;
        logp(arg0: $Level, arg1: string, arg2: string, arg3: string, arg4: $Object): void;
        logp(arg0: $Level, arg1: string, arg2: string, arg3: $Throwable, arg4: $Supplier_<string>): void;
        logp(arg0: $Level, arg1: string, arg2: string, arg3: string, arg4: $Throwable): void;
        logp(arg0: $Level, arg1: string, arg2: string, arg3: string): void;
        logp(arg0: $Level, arg1: string, arg2: string, arg3: string, arg4: $Object[]): void;
        logp(arg0: $Level, arg1: string, arg2: string, arg3: $Supplier_<string>): void;
        getResourceBundle(): $ResourceBundle;
        static getGlobal(): $Logger;
        logrb(arg0: $Level, arg1: string, arg2: string, arg3: $ResourceBundle, arg4: string, ...arg5: $Object[]): void;
        logrb(arg0: $Level, arg1: $ResourceBundle, arg2: string, ...arg3: $Object[]): void;
        /**
         * @deprecated
         */
        logrb(arg0: $Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: $Throwable): void;
        logrb(arg0: $Level, arg1: string, arg2: string, arg3: $ResourceBundle, arg4: string, arg5: $Throwable): void;
        logrb(arg0: $Level, arg1: $ResourceBundle, arg2: string, arg3: $Throwable): void;
        /**
         * @deprecated
         */
        logrb(arg0: $Level, arg1: string, arg2: string, arg3: string, arg4: string): void;
        /**
         * @deprecated
         */
        logrb(arg0: $Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: $Object): void;
        /**
         * @deprecated
         */
        logrb(arg0: $Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: $Object[]): void;
        entering(arg0: string, arg1: string, arg2: $Object): void;
        entering(arg0: string, arg1: string): void;
        entering(arg0: string, arg1: string, arg2: $Object[]): void;
        exiting(arg0: string, arg1: string, arg2: $Object): void;
        exiting(arg0: string, arg1: string): void;
        throwing(arg0: string, arg1: string, arg2: $Throwable): void;
        severe(arg0: $Supplier_<string>): void;
        severe(arg0: string): void;
        fine(arg0: string): void;
        fine(arg0: $Supplier_<string>): void;
        finer(arg0: $Supplier_<string>): void;
        finer(arg0: string): void;
        finest(arg0: string): void;
        finest(arg0: $Supplier_<string>): void;
        /**
         * @deprecated
         */
        static global: $Logger;
        static GLOBAL_LOGGER_NAME: string;
        get name(): string;
        get resourceBundleName(): string;
        get handlers(): $Handler[];
    }
    export class $Level implements $Serializable {
        getName(): string;
        intValue(): number;
        static parse(arg0: string): $Level;
        getResourceBundleName(): string;
        getLocalizedName(): string;
        static CONFIG: $Level;
        static ALL: $Level;
        static SEVERE: $Level;
        static FINER: $Level;
        static FINEST: $Level;
        static FINE: $Level;
        static INFO: $Level;
        static WARNING: $Level;
        static OFF: $Level;
        get name(): string;
        get resourceBundleName(): string;
        get localizedName(): string;
    }
    export class $Handler {
        flush(): void;
        close(): void;
        getEncoding(): string;
        publish(arg0: $LogRecord): void;
        isLoggable(arg0: $LogRecord): boolean;
        getFilter(): $Filter;
        getLevel(): $Level;
        setFormatter(arg0: $Formatter): void;
        getFormatter(): $Formatter;
        setEncoding(arg0: string): void;
        setFilter(arg0: $Filter_): void;
        setErrorManager(arg0: $ErrorManager): void;
        getErrorManager(): $ErrorManager;
        setLevel(arg0: $Level): void;
    }
    export class $Filter {
    }
    export interface $Filter {
        isLoggable(arg0: $LogRecord): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Filter}.
     */
    export type $Filter_ = ((arg0: $LogRecord) => boolean);
    export class $Formatter {
        getHead(arg0: $Handler): string;
        getTail(arg0: $Handler): string;
        formatMessage(arg0: $LogRecord): string;
        format(arg0: $LogRecord): string;
    }
    export class $ErrorManager {
        error(arg0: string, arg1: $Exception, arg2: number): void;
        static GENERIC_FAILURE: number;
        static CLOSE_FAILURE: number;
        static OPEN_FAILURE: number;
        static FORMAT_FAILURE: number;
        static FLUSH_FAILURE: number;
        static WRITE_FAILURE: number;
        constructor();
    }
}
