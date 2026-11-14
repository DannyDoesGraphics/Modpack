import { $File_ } from "@package/java/io";
import { $DefaultCallbackMedia } from "@package/org/watermedia/videolan4j/media/callback";

declare module "@package/org/watermedia/videolan4j/media/callback/nonseekable" {
    export class $FileInputStreamMedia extends $NonSeekableInputStreamMedia {
        constructor(arg0: $File_, arg1: number);
        constructor(arg0: $File_);
    }
    export class $NonSeekableInputStreamMedia extends $NonSeekableCallbackMedia {
        constructor(arg0: number);
        constructor();
    }
    export class $NonSeekableCallbackMedia extends $DefaultCallbackMedia {
        constructor(arg0: number);
        constructor();
    }
}
