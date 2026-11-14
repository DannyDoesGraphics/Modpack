import { $ResponseContent_, $ResponseContent } from "@package/dev/latvian/apps/tinyserver/content";

declare module "@package/dev/latvian/apps/tinyserver/http/response/encoding" {
    export class $ResponseContentEncoding {
    }
    export interface $ResponseContentEncoding {
        name(): string;
        encode(body: $ResponseContent_): $ResponseContent;
    }
}
