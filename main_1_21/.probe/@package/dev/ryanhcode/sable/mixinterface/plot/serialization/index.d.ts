import { $LevelChunkTicks } from "@package/net/minecraft/world/ticks";

declare module "@package/dev/ryanhcode/sable/mixinterface/plot/serialization" {
    export class $LevelChunkTicksExtension<T> {
    }
    export interface $LevelChunkTicksExtension<T> {
        sable$copy(arg0: $LevelChunkTicks<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $LevelChunkTicksExtension}.
     */
    export type $LevelChunkTicksExtension_<T> = ((arg0: $LevelChunkTicks<T>) => void);
}
