import { $LevelChunk } from "@package/net/minecraft/world/level/chunk";
import { $Collection, $Collection_ } from "@package/java/util";

declare module "@package/dev/ryanhcode/sable/mixinterface/loaded_chunk_debug" {
    export class $DebugChunkProviderAttachments {
    }
    export interface $DebugChunkProviderAttachments {
        sable$loadedChunks(): $Collection<$LevelChunk>;
    }
    /**
     * Values that may be interpreted as {@link $DebugChunkProviderAttachments}.
     */
    export type $DebugChunkProviderAttachments_ = (() => $Collection_<$LevelChunk>);
    export class $DebugLevelChunkExtension {
    }
    export interface $DebugLevelChunkExtension {
        sable$setUpdated(): void;
        sable$getLastUpdate(): number;
    }
}
