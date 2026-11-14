import { $OutputStream } from "@package/java/io";
import { $HTTPConnection } from "@package/dev/latvian/apps/tinyserver";
import { $HttpRequest$BodyPublisher } from "@package/java/net/http";

declare module "@package/dev/latvian/apps/tinyserver/content" {
    export class $ResponseContent {
    }
    export interface $ResponseContent {
        type(): string;
        length(): number;
        toBytes(): number[];
        write(out: $OutputStream): void;
        transferTo(connection: $HTTPConnection<never>): void;
        hasData(): boolean;
        bodyPublisher(): $HttpRequest$BodyPublisher;
    }
    /**
     * Values that may be interpreted as {@link $ResponseContent}.
     */
    export type $ResponseContent_ = ((out: $OutputStream) => void);
}
