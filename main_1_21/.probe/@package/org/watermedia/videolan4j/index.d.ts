import { $File_ } from "@package/java/io";
import { $Pointer } from "@package/com/sun/jna";
import { $libvlc_instance_t, $libvlc_media_player_t, $libvlc_media_t } from "@package/org/watermedia/videolan4j/binding/internal";
import { $Consumer_, $BiFunction_ } from "@package/java/util/function";
import { $URI } from "@package/java/net";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $ClassLoader } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";
import { $Version } from "@package/org/watermedia/videolan4j/tools";
export * as player from "@package/org/watermedia/videolan4j/player";
export * as binding from "@package/org/watermedia/videolan4j/binding";
export * as media from "@package/org/watermedia/videolan4j/media";
export * as factory from "@package/org/watermedia/videolan4j/factory";
export * as tools from "@package/org/watermedia/videolan4j/tools";
export * as medialist from "@package/org/watermedia/videolan4j/medialist";
export * as waiter from "@package/org/watermedia/videolan4j/waiter";
export * as log from "@package/org/watermedia/videolan4j/log";
export * as support from "@package/org/watermedia/videolan4j/support";
export * as discovery from "@package/org/watermedia/videolan4j/discovery";

declare module "@package/org/watermedia/videolan4j" {
    export class $VideoLan4J {
        static isLibSupported(): boolean;
        static discoveryPath(): string;
        static releaseMediaInstance(arg0: $libvlc_media_t): void;
        static checkClassLoader(arg0: $ClassLoader): void;
        static copyAndFreeNativeString(arg0: $Pointer): string;
        static releaseInstance(arg0: $libvlc_instance_t): void;
        static setBufferAllocator(arg0: $BiFunction_<number, number, $ByteBuffer>): void;
        static setBufferDeallocator(arg0: $Consumer_<$ByteBuffer>): void;
        static freeNativeString(arg0: $Pointer): void;
        static isDiscovered(): boolean;
        static createMediaPlayer(arg0: $libvlc_instance_t): $libvlc_media_player_t;
        static releaseMediaPlayer(arg0: $libvlc_media_player_t): void;
        static createMediaInstance(arg0: $libvlc_instance_t, arg1: $URI): $libvlc_media_t;
        static createMediaInstance(arg0: $libvlc_instance_t, arg1: $File_): $libvlc_media_t;
        static copyNativeString(arg0: $Pointer): string;
        static getLibVersion(): $Version;
        static load(): boolean;
        static createInstance(...arg0: string[]): $libvlc_instance_t;
        static LIBVLC_MIN_VERSION: $Version;
        static LIBVLC_MAX_VERSION: $Version;
        static LIBVLCCORE_NAME: string;
        static LIBVLC_BUFFER_ALIGNMENT: number;
        static VLC4J_USER_DISCOVERY_PATH: string;
        static LOGGER: $Logger;
        static LIBVLC_PLUGIN_ENV_NAME: string;
        static LIBVLC_NAME: string;
        constructor();
        static get libSupported(): boolean;
        static set bufferAllocator(value: $BiFunction_<number, number, $ByteBuffer>);
        static set bufferDeallocator(value: $Consumer_<$ByteBuffer>);
        static get discovered(): boolean;
        static get libVersion(): $Version;
    }
}
