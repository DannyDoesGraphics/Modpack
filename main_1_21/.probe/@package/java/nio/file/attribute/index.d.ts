import { $Instant } from "@package/java/time";
import { $TimeUnit_ } from "@package/java/util/concurrent";
import { $Principal } from "@package/java/security";
import { $Comparable, $Object } from "@package/java/lang";

declare module "@package/java/nio/file/attribute" {
    export class $AttributeView {
    }
    export interface $AttributeView {
        name(): string;
    }
    /**
     * Values that may be interpreted as {@link $AttributeView}.
     */
    export type $AttributeView_ = (() => string);
    export class $FileAttributeView {
    }
    export interface $FileAttributeView extends $AttributeView {
    }
    /**
     * Values that may be interpreted as {@link $FileAttributeView}.
     */
    export type $FileAttributeView_ = (() => void);
    export class $FileAttribute<T> {
    }
    export interface $FileAttribute<T> {
        name(): string;
        value(): T;
    }
    export class $GroupPrincipal {
    }
    export interface $GroupPrincipal extends $UserPrincipal {
    }
    export class $FileStoreAttributeView {
    }
    export interface $FileStoreAttributeView extends $AttributeView {
    }
    /**
     * Values that may be interpreted as {@link $FileStoreAttributeView}.
     */
    export type $FileStoreAttributeView_ = (() => void);
    export class $FileTime implements $Comparable<$FileTime> {
        compareTo(arg0: $FileTime): number;
        static from(arg0: $Instant): $FileTime;
        static from(arg0: number, arg1: $TimeUnit_): $FileTime;
        to(arg0: $TimeUnit_): number;
        toMillis(): number;
        toInstant(): $Instant;
        static fromMillis(arg0: number): $FileTime;
    }
    export class $UserPrincipalLookupService {
        lookupPrincipalByName(arg0: string): $UserPrincipal;
        lookupPrincipalByGroupName(arg0: string): $GroupPrincipal;
    }
    export class $BasicFileAttributes {
    }
    export interface $BasicFileAttributes {
        size(): number;
        isDirectory(): boolean;
        isRegularFile(): boolean;
        isSymbolicLink(): boolean;
        lastModifiedTime(): $FileTime;
        lastAccessTime(): $FileTime;
        creationTime(): $FileTime;
        isOther(): boolean;
        fileKey(): $Object;
        get directory(): boolean;
        get regularFile(): boolean;
        get symbolicLink(): boolean;
        get other(): boolean;
    }
    export class $UserPrincipal {
    }
    export interface $UserPrincipal extends $Principal {
    }
}
