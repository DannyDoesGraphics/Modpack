import { $Map, $List } from "@package/java/util";

declare module "@package/dev/engine_room/flywheel/api/layout" {
    export class $ElementType {
    }
    export interface $ElementType {
        byteSize(): number;
        byteAlignment(): number;
    }
    export class $Layout {
        static MAX_ELEMENT_NAME_LENGTH: number;
    }
    export interface $Layout {
        byteSize(): number;
        byteAlignment(): number;
        elements(): $List<$Layout$Element>;
        asMap(): $Map<string, $Layout$Element>;
    }
    export class $Layout$Element {
    }
    export interface $Layout$Element {
        paddingByteSize(): number;
        paddedByteSize(): number;
        name(): string;
        type(): $ElementType;
        byteOffset(): number;
    }
}
