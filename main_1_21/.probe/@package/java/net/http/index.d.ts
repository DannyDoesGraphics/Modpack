import { $Flow$Publisher } from "@package/java/util/concurrent";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/java/net/http" {
    export class $HttpRequest$BodyPublisher {
    }
    export interface $HttpRequest$BodyPublisher extends $Flow$Publisher<$ByteBuffer> {
        contentLength(): number;
    }
}
