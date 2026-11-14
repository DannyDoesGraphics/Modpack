import { $File_ } from "@package/java/io";
import { $DefaultCallbackMedia } from "@package/org/watermedia/videolan4j/media/callback";

declare module "@package/org/watermedia/videolan4j/media/callback/seekable" {
    export class $SeekableCallbackMedia extends $DefaultCallbackMedia {
        constructor();
        constructor(arg0: number, ...arg1: string[]);
    }
    export class $RandomAccessFileMedia extends $SeekableCallbackMedia {
        constructor(arg0: $File_);
        constructor(arg0: $File_, arg1: number);
    }
}
