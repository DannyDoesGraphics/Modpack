import { $Duration_ } from "@package/java/time";
import { $HTTPResponse } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $Path_, $Path } from "@package/java/nio/file";

declare module "@package/dev/latvian/apps/tinyserver/http/file" {
    export class $FileResponseHandler {
        static cache(duration: $Duration_, styleAndScriptDuration: $Duration_, gzip: boolean): $FileResponseHandler;
        static cache(duration: $Duration_): $FileResponseHandler;
        static CACHE_5_MIN: $FileResponseHandler;
        static CACHE_1_HOUR: $FileResponseHandler;
    }
    export interface $FileResponseHandler {
        apply(response: $HTTPResponse, directory: boolean, path: $Path_): $HTTPResponse;
    }
    /**
     * Values that may be interpreted as {@link $FileResponseHandler}.
     */
    export type $FileResponseHandler_ = ((response: $HTTPResponse, directory: boolean, path: $Path) => $HTTPResponse);
}
