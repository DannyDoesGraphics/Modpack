import { $CommandList } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $GlBuffer } from "@package/net/caffeinemc/mods/sodium/client/gl/buffer";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/net/caffeinemc/mods/sodium/client/gl/arena/staging" {
    export class $StagingBuffer {
    }
    export interface $StagingBuffer {
        enqueueCopy(arg0: $CommandList, arg1: $ByteBuffer, arg2: $GlBuffer, arg3: number): void;
        getUploadSizeLimit(arg0: number): number;
        flush(arg0: $CommandList): void;
        "delete"(arg0: $CommandList): void;
        flip(): void;
    }
}
