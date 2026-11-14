import { $GuidePageChange_ } from "@package/guideme";
import { $ParsedGuidePage } from "@package/guideme/compiler";
import { $List_ } from "@package/java/util";
import { $JsonWriter } from "@package/com/google/gson/stream";

declare module "@package/guideme/indices" {
    export class $PageIndex {
    }
    export interface $PageIndex {
        supportsUpdate(): boolean;
        getName(): string;
        update(arg0: $List_<$ParsedGuidePage>, arg1: $List_<$GuidePageChange_>): void;
        "export"(arg0: $JsonWriter): void;
        rebuild(arg0: $List_<$ParsedGuidePage>): void;
        get name(): string;
    }
}
