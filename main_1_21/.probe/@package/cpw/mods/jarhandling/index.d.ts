import { $Manifest, $Attributes } from "@package/java/util/jar";
import { $InputStream, $Closeable } from "@package/java/io";
import { $ModuleDescriptor } from "@package/java/lang/module";
import { $Path_, $Path } from "@package/java/nio/file";
import { $URI } from "@package/java/net";
import { $CodeSigner } from "@package/java/security";
import { $UnionPathFilter_ } from "@package/cpw/mods/niofs/union";
import { $Enum, $Record } from "@package/java/lang";
import { $Collection_, $List, $List_, $Set } from "@package/java/util";
import { $Pattern } from "@package/java/util/regex";

declare module "@package/cpw/mods/jarhandling" {
    export class $SecureJar$ModuleDataProvider {
    }
    export interface $SecureJar$ModuleDataProvider {
        name(): string;
        descriptor(): $ModuleDescriptor;
        uri(): $URI;
        open(arg0: string): ($InputStream) | undefined;
        getManifest(): $Manifest;
        verifyAndGetSigners(arg0: string, arg1: number[]): $CodeSigner[];
        findFile(arg0: string): ($URI) | undefined;
        get manifest(): $Manifest;
    }
    export class $JarMetadata {
        static from(arg0: $JarContents): $JarMetadata;
        static LEADING_DOTS: $Pattern;
        static ILLEGAL_KEYWORDS: $List<string>;
        static NON_ALPHANUM: $Pattern;
        static NUMBERLIKE_PARTS: $Pattern;
        static MODULE_VERSION: $Pattern;
        static TRAILING_DOTS: $Pattern;
        static DASH_VERSION: $Pattern;
        static REPEATING_DOTS: $Pattern;
        static KEYWORD_PARTS: $Pattern;
    }
    export interface $JarMetadata {
        name(): string;
        version(): string;
        descriptor(): $ModuleDescriptor;
        providers(): $List<$SecureJar$Provider>;
    }
    export class $SecureJar {
        static from(arg0: $JarContents, arg1: $JarMetadata): $SecureJar;
        static from(arg0: $JarContents): $SecureJar;
        static from(...arg0: $Path_[]): $SecureJar;
    }
    export interface $SecureJar {
        name(): string;
        close(): void;
        getPath(arg0: string, ...arg1: string[]): $Path;
        moduleDataProvider(): $SecureJar$ModuleDataProvider;
        getPrimaryPath(): $Path;
        getFileStatus(arg0: string): $SecureJar$Status;
        hasSecurityData(): boolean;
        getManifestSigners(): $CodeSigner[];
        verifyPath(arg0: $Path_): $SecureJar$Status;
        getTrustedManifestEntries(arg0: string): $Attributes;
        getRootPath(): $Path;
        get primaryPath(): $Path;
        get manifestSigners(): $CodeSigner[];
        get rootPath(): $Path;
    }
    export class $JarContents {
        static of(arg0: $Path_): $JarContents;
        static of(arg0: $Collection_<$Path_>): $JarContents;
    }
    export interface $JarContents extends $Closeable {
        getPackages(): $Set<string>;
        getManifest(): $Manifest;
        findFile(arg0: string): ($URI) | undefined;
        getPrimaryPath(): $Path;
        getPackagesExcluding(...arg0: string[]): $Set<string>;
        getMetaInfServices(): $List<$SecureJar$Provider>;
        get packages(): $Set<string>;
        get manifest(): $Manifest;
        get primaryPath(): $Path;
        get metaInfServices(): $List<$SecureJar$Provider>;
    }
    export class $SecureJar$Provider extends $Record {
        providers(): $List<string>;
        serviceName(): string;
        static fromPath(arg0: $Path_, arg1: $UnionPathFilter_): $SecureJar$Provider;
        constructor(serviceName: string, providers: $List_<string>);
    }
    /**
     * Values that may be interpreted as {@link $SecureJar$Provider}.
     */
    export type $SecureJar$Provider_ = { serviceName?: string, providers?: $List_<string>,  } | [serviceName?: string, providers?: $List_<string>, ];
    export class $SecureJar$Status extends $Enum<$SecureJar$Status> {
        static values(): $SecureJar$Status[];
        static valueOf(arg0: string): $SecureJar$Status;
        static UNVERIFIED: $SecureJar$Status;
        static NONE: $SecureJar$Status;
        static INVALID: $SecureJar$Status;
        static VERIFIED: $SecureJar$Status;
    }
    /**
     * Values that may be interpreted as {@link $SecureJar$Status}.
     */
    export type $SecureJar$Status_ = "none" | "invalid" | "unverified" | "verified";
}
