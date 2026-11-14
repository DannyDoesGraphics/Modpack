import { $BufferedReader } from "@package/java/io";
import { $PathMatcher, $FileSystem, $Path_, $PathMatcher_, $Path } from "@package/java/nio/file";
import { $Exception, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";

declare module "@package/net/minecraft/world/level/validation" {
    export class $ContentValidationException extends $Exception {
        static getMessage(directory: $Path_, entries: $List_<$ForbiddenSymlinkInfo_>): string;
        constructor(directory: $Path_, entries: $List_<$ForbiddenSymlinkInfo_>);
    }
    export class $ForbiddenSymlinkInfo extends $Record {
        target(): $Path;
        link(): $Path;
        constructor(arg0: $Path_, arg1: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $ForbiddenSymlinkInfo}.
     */
    export type $ForbiddenSymlinkInfo_ = { link?: $Path_, target?: $Path_,  } | [link?: $Path_, target?: $Path_, ];
    export class $PathAllowList$EntryType {
        static FILESYSTEM: $PathAllowList$EntryType;
        static PREFIX: $PathAllowList$EntryType;
    }
    export interface $PathAllowList$EntryType {
        compile(fileSystem: $FileSystem, pattern: string): $PathMatcher;
    }
    /**
     * Values that may be interpreted as {@link $PathAllowList$EntryType}.
     */
    export type $PathAllowList$EntryType_ = ((arg0: $FileSystem, arg1: string) => $PathMatcher_);
    export class $DirectoryValidator {
        validateSymlink(directory: $Path_): $List<$ForbiddenSymlinkInfo>;
        validateSymlink(directory: $Path_, forbiddenSymlinkInfos: $List_<$ForbiddenSymlinkInfo_>): void;
        validateDirectory(directory: $Path_, validateSymlinks: boolean): $List<$ForbiddenSymlinkInfo>;
        validateKnownDirectory(directory: $Path_, forbiddenSymlinkInfos: $List_<$ForbiddenSymlinkInfo_>): void;
        constructor(symlinkTargetAllowList: $PathMatcher_);
    }
    export class $PathAllowList implements $PathMatcher {
        getForFileSystem(fileSystem: $FileSystem): $PathMatcher;
        matches(path: $Path_): boolean;
        static readPlain(reader: $BufferedReader): $PathAllowList;
        constructor(entries: $List_<$PathAllowList$ConfigEntry_>);
    }
    export class $PathAllowList$ConfigEntry extends $Record {
        type(): $PathAllowList$EntryType;
        compile(fileSystem: $FileSystem): $PathMatcher;
        pattern(): string;
        constructor(arg0: $PathAllowList$EntryType_, arg1: string);
    }
    /**
     * Values that may be interpreted as {@link $PathAllowList$ConfigEntry}.
     */
    export type $PathAllowList$ConfigEntry_ = { pattern?: string, type?: $PathAllowList$EntryType_,  } | [pattern?: string, type?: $PathAllowList$EntryType_, ];
}
