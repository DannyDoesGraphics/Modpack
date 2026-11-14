import { $List } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $JsonWriter } from "@package/com/google/gson/stream";

declare module "@package/guideme/libs/unist" {
    export class $UnistPosition {
    }
    export interface $UnistPosition {
        end(): $UnistPoint;
        indent(): number[];
        start(): $UnistPoint;
    }
    export class $UnistPoint {
    }
    export interface $UnistPoint {
        writeJson(arg0: $JsonWriter): void;
        offset(): number;
        line(): number;
        column(): number;
    }
    export class $UnistParent {
    }
    export interface $UnistParent extends $UnistNode {
        children(): $List<$UnistNode>;
    }
    export class $UnistNode {
    }
    export interface $UnistNode {
        type(): string;
        position(): $UnistPosition;
        data(): $Object;
    }
}
