import { $InputStream } from "@package/java/io";
import { $Supplier_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $URI } from "@package/java/net";
import { $AccessFlag } from "@package/java/lang/reflect";
import { $Enum, $Comparable } from "@package/java/lang";
import { $List, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/java/lang/module" {
    export class $ModuleDescriptor$Opens implements $Comparable<$ModuleDescriptor$Opens> {
        modifiers(): $Set<$ModuleDescriptor$Opens$Modifier>;
        compareTo(arg0: $ModuleDescriptor$Opens): number;
        accessFlags(): $Set<$AccessFlag>;
        source(): string;
        isQualified(): boolean;
        targets(): $Set<string>;
        get qualified(): boolean;
    }
    export class $ModuleDescriptor$Exports$Modifier extends $Enum<$ModuleDescriptor$Exports$Modifier> {
        static values(): $ModuleDescriptor$Exports$Modifier[];
        static valueOf(arg0: string): $ModuleDescriptor$Exports$Modifier;
        static SYNTHETIC: $ModuleDescriptor$Exports$Modifier;
        static MANDATED: $ModuleDescriptor$Exports$Modifier;
    }
    /**
     * Values that may be interpreted as {@link $ModuleDescriptor$Exports$Modifier}.
     */
    export type $ModuleDescriptor$Exports$Modifier_ = "synthetic" | "mandated";
    export class $Configuration {
        static empty(): $Configuration;
        resolve(arg0: $ModuleFinder, arg1: $ModuleFinder, arg2: $Collection_<string>): $Configuration;
        static resolve(arg0: $ModuleFinder, arg1: $List_<$Configuration>, arg2: $ModuleFinder, arg3: $Collection_<string>): $Configuration;
        modules(): $Set<$ResolvedModule>;
        parents(): $List<$Configuration>;
        findModule(arg0: string): ($ResolvedModule) | undefined;
        static resolveAndBind(arg0: $ModuleFinder, arg1: $List_<$Configuration>, arg2: $ModuleFinder, arg3: $Collection_<string>): $Configuration;
        resolveAndBind(arg0: $ModuleFinder, arg1: $ModuleFinder, arg2: $Collection_<string>): $Configuration;
    }
    export class $ModuleDescriptor$Exports implements $Comparable<$ModuleDescriptor$Exports> {
        modifiers(): $Set<$ModuleDescriptor$Exports$Modifier>;
        compareTo(arg0: $ModuleDescriptor$Exports): number;
        accessFlags(): $Set<$AccessFlag>;
        source(): string;
        isQualified(): boolean;
        targets(): $Set<string>;
        get qualified(): boolean;
    }
    export class $ModuleDescriptor$Modifier extends $Enum<$ModuleDescriptor$Modifier> {
        static values(): $ModuleDescriptor$Modifier[];
        static valueOf(arg0: string): $ModuleDescriptor$Modifier;
        static AUTOMATIC: $ModuleDescriptor$Modifier;
        static SYNTHETIC: $ModuleDescriptor$Modifier;
        static MANDATED: $ModuleDescriptor$Modifier;
        static OPEN: $ModuleDescriptor$Modifier;
    }
    /**
     * Values that may be interpreted as {@link $ModuleDescriptor$Modifier}.
     */
    export type $ModuleDescriptor$Modifier_ = "open" | "automatic" | "synthetic" | "mandated";
    export class $ModuleDescriptor$Version implements $Comparable<$ModuleDescriptor$Version> {
        compareTo(arg0: $ModuleDescriptor$Version): number;
        static parse(arg0: string): $ModuleDescriptor$Version;
    }
    export class $ModuleDescriptor$Opens$Modifier extends $Enum<$ModuleDescriptor$Opens$Modifier> {
        static values(): $ModuleDescriptor$Opens$Modifier[];
        static valueOf(arg0: string): $ModuleDescriptor$Opens$Modifier;
        static SYNTHETIC: $ModuleDescriptor$Opens$Modifier;
        static MANDATED: $ModuleDescriptor$Opens$Modifier;
    }
    /**
     * Values that may be interpreted as {@link $ModuleDescriptor$Opens$Modifier}.
     */
    export type $ModuleDescriptor$Opens$Modifier_ = "synthetic" | "mandated";
    export class $ModuleDescriptor$Requires$Modifier extends $Enum<$ModuleDescriptor$Requires$Modifier> {
        static values(): $ModuleDescriptor$Requires$Modifier[];
        static valueOf(arg0: string): $ModuleDescriptor$Requires$Modifier;
        static TRANSITIVE: $ModuleDescriptor$Requires$Modifier;
        static SYNTHETIC: $ModuleDescriptor$Requires$Modifier;
        static MANDATED: $ModuleDescriptor$Requires$Modifier;
        static STATIC: $ModuleDescriptor$Requires$Modifier;
    }
    /**
     * Values that may be interpreted as {@link $ModuleDescriptor$Requires$Modifier}.
     */
    export type $ModuleDescriptor$Requires$Modifier_ = "transitive" | "static" | "synthetic" | "mandated";
    export class $ModuleDescriptor$Requires implements $Comparable<$ModuleDescriptor$Requires> {
        modifiers(): $Set<$ModuleDescriptor$Requires$Modifier>;
        name(): string;
        compareTo(arg0: $ModuleDescriptor$Requires): number;
        accessFlags(): $Set<$AccessFlag>;
        rawCompiledVersion(): (string) | undefined;
        compiledVersion(): ($ModuleDescriptor$Version) | undefined;
    }
    export class $ModuleFinder {
        static of(...arg0: $Path_[]): $ModuleFinder;
        static compose(...arg0: $ModuleFinder[]): $ModuleFinder;
        static ofSystem(): $ModuleFinder;
    }
    export interface $ModuleFinder {
        find(arg0: string): ($ModuleReference) | undefined;
        findAll(): $Set<$ModuleReference>;
    }
    export class $ModuleDescriptor$Provides implements $Comparable<$ModuleDescriptor$Provides> {
        compareTo(arg0: $ModuleDescriptor$Provides): number;
        service(): string;
        providers(): $List<string>;
    }
    export class $ModuleReference {
        location(): ($URI) | undefined;
        descriptor(): $ModuleDescriptor;
        open(): $ModuleReader;
    }
    export class $ResolvedModule {
        name(): string;
        reads(): $Set<$ResolvedModule>;
        reference(): $ModuleReference;
        configuration(): $Configuration;
    }
    export class $ModuleDescriptor implements $Comparable<$ModuleDescriptor> {
        modifiers(): $Set<$ModuleDescriptor$Modifier>;
        name(): string;
        version(): ($ModuleDescriptor$Version) | undefined;
        compareTo(arg0: $ModuleDescriptor): number;
        packages(): $Set<string>;
        isOpen(): boolean;
        accessFlags(): $Set<$AccessFlag>;
        static read(arg0: $InputStream, arg1: $Supplier_<$Set<string>>): $ModuleDescriptor;
        static read(arg0: $InputStream): $ModuleDescriptor;
        static read(arg0: $ByteBuffer, arg1: $Supplier_<$Set<string>>): $ModuleDescriptor;
        static read(arg0: $ByteBuffer): $ModuleDescriptor;
        exports(): $Set<$ModuleDescriptor$Exports>;
        opens(): $Set<$ModuleDescriptor$Opens>;
        isAutomatic(): boolean;
        uses(): $Set<string>;
        provides(): $Set<$ModuleDescriptor$Provides>;
        requires(): $Set<$ModuleDescriptor$Requires>;
        mainClass(): (string) | undefined;
        toNameAndVersion(): string;
        rawVersion(): (string) | undefined;
        static newModule(arg0: string, arg1: $Set_<$ModuleDescriptor$Modifier_>): $ModuleDescriptor$Builder;
        static newModule(arg0: string): $ModuleDescriptor$Builder;
        static newOpenModule(arg0: string): $ModuleDescriptor$Builder;
        static newAutomaticModule(arg0: string): $ModuleDescriptor$Builder;
        get open(): boolean;
        get automatic(): boolean;
    }
    export class $ModuleDescriptor$Builder {
        version(arg0: string): $ModuleDescriptor$Builder;
        version(arg0: $ModuleDescriptor$Version): $ModuleDescriptor$Builder;
        packages(arg0: $Set_<string>): $ModuleDescriptor$Builder;
        exports(arg0: string): $ModuleDescriptor$Builder;
        exports(arg0: $Set_<$ModuleDescriptor$Exports$Modifier_>, arg1: string, arg2: $Set_<string>): $ModuleDescriptor$Builder;
        exports(arg0: string, arg1: $Set_<string>): $ModuleDescriptor$Builder;
        exports(arg0: $Set_<$ModuleDescriptor$Exports$Modifier_>, arg1: string): $ModuleDescriptor$Builder;
        exports(arg0: $ModuleDescriptor$Exports): $ModuleDescriptor$Builder;
        opens(arg0: string): $ModuleDescriptor$Builder;
        opens(arg0: $Set_<$ModuleDescriptor$Opens$Modifier_>, arg1: string, arg2: $Set_<string>): $ModuleDescriptor$Builder;
        opens(arg0: string, arg1: $Set_<string>): $ModuleDescriptor$Builder;
        opens(arg0: $ModuleDescriptor$Opens): $ModuleDescriptor$Builder;
        opens(arg0: $Set_<$ModuleDescriptor$Opens$Modifier_>, arg1: string): $ModuleDescriptor$Builder;
        uses(arg0: string): $ModuleDescriptor$Builder;
        provides(arg0: $ModuleDescriptor$Provides): $ModuleDescriptor$Builder;
        provides(arg0: string, arg1: $List_<string>): $ModuleDescriptor$Builder;
        build(): $ModuleDescriptor;
        requires(arg0: $ModuleDescriptor$Requires): $ModuleDescriptor$Builder;
        requires(arg0: $Set_<$ModuleDescriptor$Requires$Modifier_>, arg1: string, arg2: $ModuleDescriptor$Version): $ModuleDescriptor$Builder;
        requires(arg0: string): $ModuleDescriptor$Builder;
        requires(arg0: $Set_<$ModuleDescriptor$Requires$Modifier_>, arg1: string): $ModuleDescriptor$Builder;
        mainClass(arg0: string): $ModuleDescriptor$Builder;
    }
}
