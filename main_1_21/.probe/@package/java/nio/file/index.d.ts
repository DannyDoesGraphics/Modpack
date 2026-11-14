import { $Closeable, $File } from "@package/java/io";
import { $URI } from "@package/java/net";
import { $TimeUnit_ } from "@package/java/util/concurrent";
import { $UserPrincipalLookupService, $FileStoreAttributeView, $FileAttributeView_ } from "@package/java/nio/file/attribute";
import { $Enum, $Comparable, $Object, $Iterable, $Class } from "@package/java/lang";
import { $Iterator, $List, $Set } from "@package/java/util";
import { $FileSystemProvider } from "@package/java/nio/file/spi";
export * as spi from "@package/java/nio/file/spi";
export * as attribute from "@package/java/nio/file/attribute";

declare module "@package/java/nio/file" {
    export class $PathMatcher {
    }
    export interface $PathMatcher {
        matches(arg0: $Path_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PathMatcher}.
     */
    export type $PathMatcher_ = ((arg0: $Path) => boolean);
    export class $WatchService {
    }
    export interface $WatchService extends $Closeable {
        close(): void;
        poll(arg0: number, arg1: $TimeUnit_): $WatchKey;
        poll(): $WatchKey;
        take(): $WatchKey;
    }
    export class $FileSystem implements $Closeable {
        isOpen(): boolean;
        provider(): $FileSystemProvider;
        close(): void;
        getPath(arg0: string, ...arg1: string[]): $Path;
        isReadOnly(): boolean;
        getSeparator(): string;
        getRootDirectories(): $Iterable<$Path>;
        getFileStores(): $Iterable<$FileStore>;
        supportedFileAttributeViews(): $Set<string>;
        getPathMatcher(arg0: string): $PathMatcher;
        getUserPrincipalLookupService(): $UserPrincipalLookupService;
        newWatchService(): $WatchService;
        get open(): boolean;
        get readOnly(): boolean;
        get separator(): string;
        get rootDirectories(): $Iterable<$Path>;
        get fileStores(): $Iterable<$FileStore>;
        get userPrincipalLookupService(): $UserPrincipalLookupService;
    }
    export class $WatchKey {
    }
    export interface $WatchKey {
        watchable(): $Watchable;
        reset(): boolean;
        cancel(): void;
        isValid(): boolean;
        pollEvents(): $List<$WatchEvent<never>>;
        get valid(): boolean;
    }
    export class $LinkOption extends $Enum<$LinkOption> implements $OpenOption, $CopyOption {
        static values(): $LinkOption[];
        static valueOf(arg0: string): $LinkOption;
        static NOFOLLOW_LINKS: $LinkOption;
    }
    /**
     * Values that may be interpreted as {@link $LinkOption}.
     */
    export type $LinkOption_ = "nofollow_links";
    export class $Path {
        static of(arg0: string, ...arg1: string[]): $Path;
        static of(arg0: $URI): $Path;
        [Symbol.iterator](): Iterator<$Path>
    }
    export interface $Path extends $Comparable<$Path>, $Iterable<$Path>, $Watchable {
        getName(arg0: number): $Path;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $Path_): number;
        startsWith(arg0: string): boolean;
        startsWith(arg0: $Path_): boolean;
        iterator(): $Iterator<$Path>;
        endsWith(arg0: string): boolean;
        endsWith(arg0: $Path_): boolean;
        register(arg0: $WatchService, arg1: $WatchEvent$Kind<never>[], ...arg2: $WatchEvent$Modifier_[]): $WatchKey;
        register(arg0: $WatchService, ...arg1: $WatchEvent$Kind<never>[]): $WatchKey;
        isAbsolute(): boolean;
        resolve(arg0: $Path_): $Path;
        resolve(arg0: string): $Path;
        getParent(): $Path;
        getRoot(): $Path;
        toRealPath(...arg0: $LinkOption_[]): $Path;
        toFile(): $File;
        getFileName(): $Path;
        normalize(): $Path;
        getFileSystem(): $FileSystem;
        relativize(arg0: $Path_): $Path;
        getNameCount(): number;
        toAbsolutePath(): $Path;
        resolveSibling(arg0: $Path_): $Path;
        resolveSibling(arg0: string): $Path;
        subpath(arg0: number, arg1: number): $Path;
        toUri(): $URI;
        [Symbol.iterator](): Iterator<$Path>
        get absolute(): boolean;
        get parent(): $Path;
        get root(): $Path;
        get fileName(): $Path;
        get fileSystem(): $FileSystem;
        get nameCount(): number;
    }
    /**
     * Values that may be interpreted as {@link $Path}.
     */
    export type $Path_ = string;
    export class $Watchable {
    }
    export interface $Watchable {
        register(arg0: $WatchService, arg1: $WatchEvent$Kind<never>[], ...arg2: $WatchEvent$Modifier_[]): $WatchKey;
        register(arg0: $WatchService, ...arg1: $WatchEvent$Kind<never>[]): $WatchKey;
    }
    export class $DirectoryStream<T> {
        [Symbol.iterator](): Iterator<T>
    }
    export interface $DirectoryStream<T> extends $Closeable, $Iterable<T> {
        iterator(): $Iterator<T>;
        [Symbol.iterator](): Iterator<T>
    }
    export class $DirectoryStream$Filter<T> {
    }
    export interface $DirectoryStream$Filter<T> {
        accept(arg0: T): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DirectoryStream$Filter}.
     */
    export type $DirectoryStream$Filter_<T> = ((arg0: T) => boolean);
    export class $CopyOption {
    }
    export interface $CopyOption {
    }
    export class $WatchEvent<T> {
    }
    export interface $WatchEvent<T> {
        context(): T;
        count(): number;
        kind(): $WatchEvent$Kind<T>;
    }
    export class $FileStore {
        getUnallocatedSpace(): number;
        getBlockSize(): number;
        supportsFileAttributeView(arg0: $Class<$FileAttributeView_>): boolean;
        supportsFileAttributeView(arg0: string): boolean;
        getFileStoreAttributeView<V extends $FileStoreAttributeView>(arg0: $Class<V>): V;
        name(): string;
        type(): string;
        isReadOnly(): boolean;
        getTotalSpace(): number;
        getUsableSpace(): number;
        getAttribute(arg0: string): $Object;
        get unallocatedSpace(): number;
        get blockSize(): number;
        get readOnly(): boolean;
        get totalSpace(): number;
        get usableSpace(): number;
    }
    export class $WatchEvent$Kind<T> {
    }
    export interface $WatchEvent$Kind<T> {
        name(): string;
        type(): $Class<T>;
    }
    export class $OpenOption {
    }
    export interface $OpenOption {
    }
    export class $WatchEvent$Modifier {
    }
    export interface $WatchEvent$Modifier {
        name(): string;
    }
    /**
     * Values that may be interpreted as {@link $WatchEvent$Modifier}.
     */
    export type $WatchEvent$Modifier_ = (() => string);
    export class $AccessMode extends $Enum<$AccessMode> {
        static values(): $AccessMode[];
        static valueOf(arg0: string): $AccessMode;
        static READ: $AccessMode;
        static EXECUTE: $AccessMode;
        static WRITE: $AccessMode;
    }
    /**
     * Values that may be interpreted as {@link $AccessMode}.
     */
    export type $AccessMode_ = "read" | "write" | "execute";
}
