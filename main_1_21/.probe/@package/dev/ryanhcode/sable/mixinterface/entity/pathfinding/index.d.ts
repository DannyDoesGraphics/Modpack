import { $Level_, $Level } from "@package/net/minecraft/world/level";

declare module "@package/dev/ryanhcode/sable/mixinterface/entity/pathfinding" {
    export class $PathExtension {
    }
    export interface $PathExtension {
        sable$setLocalPath(arg0: $Level_, arg1: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $PathExtension}.
     */
    export type $PathExtension_ = ((arg0: $Level, arg1: boolean) => void);
}
