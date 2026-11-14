import { $InputStream, $OutputStream } from "@package/java/io";
import { $Path_, $CopyOption, $FileStore, $DirectoryStream$Filter_, $DirectoryStream, $AccessMode_, $LinkOption_, $OpenOption, $FileSystem, $Path } from "@package/java/nio/file";
import { $URI } from "@package/java/net";
import { $ExecutorService } from "@package/java/util/concurrent";
import { $BasicFileAttributes, $FileAttribute, $FileAttributeView } from "@package/java/nio/file/attribute";
import { $Object, $Class } from "@package/java/lang";
import { $List, $Map_, $Map, $Set_ } from "@package/java/util";
import { $AsynchronousFileChannel, $SeekableByteChannel, $FileChannel } from "@package/java/nio/channels";

declare module "@package/java/nio/file/spi" {
    export class $FileSystemProvider {
        isHidden(arg0: $Path_): boolean;
        "delete"(arg0: $Path_): void;
        checkAccess(arg0: $Path_, ...arg1: $AccessMode_[]): void;
        copy(arg0: $Path_, arg1: $Path_, ...arg2: $CopyOption[]): void;
        getScheme(): string;
        getPath(arg0: $URI): $Path;
        exists(arg0: $Path_, ...arg1: $LinkOption_[]): boolean;
        createDirectory(arg0: $Path_, ...arg1: $FileAttribute<never>[]): void;
        getFileSystem(arg0: $URI): $FileSystem;
        static installedProviders(): $List<$FileSystemProvider>;
        newFileSystem(arg0: $URI, arg1: $Map_<string, never>): $FileSystem;
        newFileSystem(arg0: $Path_, arg1: $Map_<string, never>): $FileSystem;
        newInputStream(arg0: $Path_, ...arg1: $OpenOption[]): $InputStream;
        newOutputStream(arg0: $Path_, ...arg1: $OpenOption[]): $OutputStream;
        newByteChannel(arg0: $Path_, arg1: $Set_<$OpenOption>, ...arg2: $FileAttribute<never>[]): $SeekableByteChannel;
        newDirectoryStream(arg0: $Path_, arg1: $DirectoryStream$Filter_<$Path>): $DirectoryStream<$Path>;
        createSymbolicLink(arg0: $Path_, arg1: $Path_, ...arg2: $FileAttribute<never>[]): void;
        createLink(arg0: $Path_, arg1: $Path_): void;
        deleteIfExists(arg0: $Path_): boolean;
        move(arg0: $Path_, arg1: $Path_, ...arg2: $CopyOption[]): void;
        readSymbolicLink(arg0: $Path_): $Path;
        getFileStore(arg0: $Path_): $FileStore;
        isSameFile(arg0: $Path_, arg1: $Path_): boolean;
        getFileAttributeView<V extends $FileAttributeView>(arg0: $Path_, arg1: $Class<V>, ...arg2: $LinkOption_[]): V;
        readAttributes<A extends $BasicFileAttributes>(arg0: $Path_, arg1: $Class<A>, ...arg2: $LinkOption_[]): A;
        readAttributes(arg0: $Path_, arg1: string, ...arg2: $LinkOption_[]): $Map<string, $Object>;
        setAttribute(arg0: $Path_, arg1: string, arg2: $Object, ...arg3: $LinkOption_[]): void;
        readAttributesIfExists<A extends $BasicFileAttributes>(arg0: $Path_, arg1: $Class<A>, ...arg2: $LinkOption_[]): A;
        newFileChannel(arg0: $Path_, arg1: $Set_<$OpenOption>, ...arg2: $FileAttribute<never>[]): $FileChannel;
        newAsynchronousFileChannel(arg0: $Path_, arg1: $Set_<$OpenOption>, arg2: $ExecutorService, ...arg3: $FileAttribute<never>[]): $AsynchronousFileChannel;
        get scheme(): string;
    }
}
