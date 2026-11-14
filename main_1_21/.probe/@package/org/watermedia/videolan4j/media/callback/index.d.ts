import { $Pointer } from "@package/com/sun/jna";
import { $libvlc_media_seek_cb, $libvlc_media_read_cb, $libvlc_media_close_cb, $libvlc_media_open_cb } from "@package/org/watermedia/videolan4j/binding/internal";
export * as seekable from "@package/org/watermedia/videolan4j/media/callback/seekable";
export * as nonseekable from "@package/org/watermedia/videolan4j/media/callback/nonseekable";

declare module "@package/org/watermedia/videolan4j/media/callback" {
    export class $AbstractCallbackMedia$Open implements $libvlc_media_open_cb {
    }
    export class $DefaultCallbackMedia extends $AbstractCallbackMedia {
        constructor(arg0: boolean, arg1: number);
        constructor(arg0: boolean);
    }
    export class $AbstractCallbackMedia implements $CallbackMedia {
        isSeekable(): boolean;
        getOpen(): $libvlc_media_open_cb;
        getSeek(): $libvlc_media_seek_cb;
        getClose(): $libvlc_media_close_cb;
        getOpaque(): $Pointer;
        getRead(): $libvlc_media_read_cb;
        constructor(arg0: boolean);
        get seekable(): boolean;
        get open(): $libvlc_media_open_cb;
        get seek(): $libvlc_media_seek_cb;
        get close(): $libvlc_media_close_cb;
        get opaque(): $Pointer;
        get read(): $libvlc_media_read_cb;
    }
    export class $CallbackMedia {
    }
    export interface $CallbackMedia {
        getOpen(): $libvlc_media_open_cb;
        getSeek(): $libvlc_media_seek_cb;
        getClose(): $libvlc_media_close_cb;
        getOpaque(): $Pointer;
        getRead(): $libvlc_media_read_cb;
        get open(): $libvlc_media_open_cb;
        get seek(): $libvlc_media_seek_cb;
        get close(): $libvlc_media_close_cb;
        get opaque(): $Pointer;
        get read(): $libvlc_media_read_cb;
    }
    export class $AbstractCallbackMedia$Read implements $libvlc_media_read_cb {
    }
    export class $AbstractCallbackMedia$Close implements $libvlc_media_close_cb {
    }
    export class $AbstractCallbackMedia$Seek implements $libvlc_media_seek_cb {
    }
}
