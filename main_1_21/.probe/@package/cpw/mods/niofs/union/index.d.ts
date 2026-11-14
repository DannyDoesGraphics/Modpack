import { $Path_, $Path } from "@package/java/nio/file";

declare module "@package/cpw/mods/niofs/union" {
    export class $UnionPathFilter {
    }
    export interface $UnionPathFilter {
        test(arg0: string, arg1: $Path_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $UnionPathFilter}.
     */
    export type $UnionPathFilter_ = ((arg0: string, arg1: $Path) => boolean);
}
