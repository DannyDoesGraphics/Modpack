import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $IEventBus, $Event, $EventPriority_ } from "@package/net/neoforged/bus/api";
import { $Path_, $Path } from "@package/java/nio/file";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Throwable, $Runnable_, $Enum, $Record, $Object, $Class } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $IModFile } from "@package/net/neoforged/neoforgespi/locating";
import { $ModConfig$Type_, $IConfigSpec } from "@package/net/neoforged/fml/config";
export * as config from "@package/net/neoforged/fml/config";
export * as common from "@package/net/neoforged/fml/common";
export * as earlydisplay from "@package/net/neoforged/fml/earlydisplay";
export * as event from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/fml" {
    export class $ModContainer {
        getNamespace(): string;
        registerConfig(arg0: $ModConfig$Type_, arg1: $IConfigSpec): void;
        registerConfig(arg0: $ModConfig$Type_, arg1: $IConfigSpec, arg2: string): void;
        getModId(): string;
        getEventBus(): $IEventBus;
        getModInfo(): $IModInfo;
        getCustomExtension<T extends $IExtensionPoint>(arg0: $Class<T>): (T) | undefined;
        registerExtensionPoint<T extends $IExtensionPoint>(arg0: $Class<T>, arg1: $Supplier_<T>): void;
        registerExtensionPoint<T extends $IExtensionPoint>(arg0: $Class<T>, arg1: T): void;
        acceptEvent<T extends $Event>(arg0: $EventPriority_, arg1: T): void;
        acceptEvent<T extends $Event>(arg0: T): void;
        constructor(arg0: $IModInfo);
        get namespace(): string;
        get modId(): string;
        get eventBus(): $IEventBus;
        get modInfo(): $IModInfo;
    }
    export class $ModLoadingIssue extends $Record {
        severity(): $ModLoadingIssue$Severity;
        cause(): $Throwable;
        static error(arg0: string, ...arg1: $Object[]): $ModLoadingIssue;
        static warning(arg0: string, ...arg1: $Object[]): $ModLoadingIssue;
        withCause(arg0: $Throwable): $ModLoadingIssue;
        withAffectedPath(arg0: $Path_): $ModLoadingIssue;
        withSeverity(arg0: $ModLoadingIssue$Severity_): $ModLoadingIssue;
        withAffectedModFile(arg0: $IModFile): $ModLoadingIssue;
        translationKey(): string;
        translationArgs(): $List<$Object>;
        affectedPath(): $Path;
        affectedModFile(): $IModFile;
        affectedMod(): $IModInfo;
        withAffectedMod(arg0: $IModInfo): $ModLoadingIssue;
        constructor(arg0: $ModLoadingIssue$Severity_, arg1: string, arg2: $List_<$Object>);
        constructor(severity: $ModLoadingIssue$Severity_, translationKey: string, translationArgs: $List_<$Object>, cause: $Throwable, affectedPath: $Path_, affectedModFile: $IModFile, affectedMod: $IModInfo);
    }
    /**
     * Values that may be interpreted as {@link $ModLoadingIssue}.
     */
    export type $ModLoadingIssue_ = { affectedModFile?: $IModFile, affectedPath?: $Path_, affectedMod?: $IModInfo, cause?: $Throwable, translationKey?: string, translationArgs?: $List_<$Object>, severity?: $ModLoadingIssue$Severity_,  } | [affectedModFile?: $IModFile, affectedPath?: $Path_, affectedMod?: $IModInfo, cause?: $Throwable, translationKey?: string, translationArgs?: $List_<$Object>, severity?: $ModLoadingIssue$Severity_, ];
    export class $DeferredWorkQueue {
        enqueueWork(arg0: $ModContainer, arg1: $Runnable_): $CompletableFuture<void>;
        enqueueWork<T>(arg0: $ModContainer, arg1: $Supplier_<T>): $CompletableFuture<T>;
        runTasks(): void;
        constructor(arg0: string);
    }
    export class $InterModComms$IMCMessage extends $Record {
        /**
         * @deprecated
         */
        getSenderModId(): string;
        /**
         * @deprecated
         */
        getMessageSupplier<T>(): $Supplier<T>;
        method(): string;
        /**
         * @deprecated
         */
        getMethod(): string;
        messageSupplier(): $Supplier<never>;
        modId(): string;
        /**
         * @deprecated
         */
        getModId(): string;
        senderModId(): string;
        constructor(senderModId: string, modId: string, method: string, messageSupplier: $Supplier_<never>);
    }
    /**
     * Values that may be interpreted as {@link $InterModComms$IMCMessage}.
     */
    export type $InterModComms$IMCMessage_ = { method?: string, senderModId?: string, modId?: string, messageSupplier?: $Supplier_<never>,  } | [method?: string, senderModId?: string, modId?: string, messageSupplier?: $Supplier_<never>, ];
    export class $LogicalSide extends $Enum<$LogicalSide> {
        static values(): $LogicalSide[];
        static valueOf(arg0: string): $LogicalSide;
        isClient(): boolean;
        isServer(): boolean;
        static SERVER: $LogicalSide;
        static CLIENT: $LogicalSide;
        get client(): boolean;
        get server(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $LogicalSide}.
     */
    export type $LogicalSide_ = "client" | "server";
    export class $IExtensionPoint {
    }
    export interface $IExtensionPoint {
    }
    export class $IBindingsProvider {
    }
    export interface $IBindingsProvider {
        getGameBus(): $IEventBus;
        get gameBus(): $IEventBus;
    }
    /**
     * Values that may be interpreted as {@link $IBindingsProvider}.
     */
    export type $IBindingsProvider_ = (() => $IEventBus);
    export class $VersionChecker$Status extends $Enum<$VersionChecker$Status> {
        getSheetOffset(): number;
        shouldDraw(): boolean;
        isAnimated(): boolean;
        static values(): $VersionChecker$Status[];
        static valueOf(arg0: string): $VersionChecker$Status;
        static FAILED: $VersionChecker$Status;
        static AHEAD: $VersionChecker$Status;
        static BETA_OUTDATED: $VersionChecker$Status;
        static UP_TO_DATE: $VersionChecker$Status;
        static OUTDATED: $VersionChecker$Status;
        static PENDING: $VersionChecker$Status;
        static BETA: $VersionChecker$Status;
        get sheetOffset(): number;
        get animated(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $VersionChecker$Status}.
     */
    export type $VersionChecker$Status_ = "pending" | "failed" | "up_to_date" | "outdated" | "ahead" | "beta" | "beta_outdated";
    export class $ModLoadingIssue$Severity extends $Enum<$ModLoadingIssue$Severity> {
        static values(): $ModLoadingIssue$Severity[];
        static valueOf(arg0: string): $ModLoadingIssue$Severity;
        static ERROR: $ModLoadingIssue$Severity;
        static WARNING: $ModLoadingIssue$Severity;
    }
    /**
     * Values that may be interpreted as {@link $ModLoadingIssue$Severity}.
     */
    export type $ModLoadingIssue$Severity_ = "warning" | "error";
    export class $ModLoadingContext {
        getActiveContainer(): $ModContainer;
        static get(): $ModLoadingContext;
        registerExtensionPoint<T extends $IExtensionPoint>(arg0: $Class<T>, arg1: $Supplier_<T>): void;
        setActiveContainer(arg0: $ModContainer): void;
        getActiveNamespace(): string;
        constructor();
        get activeNamespace(): string;
    }
}
