import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BoundingBox3d, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Path_, $Path } from "@package/java/nio/file";
import { $GlobalSavedSubLevelPointer, $GlobalSavedSubLevelPointer_, $SubLevelHoldingChunk, $SavedSubLevelPointer_ } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $AutoCloseable } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";

declare module "@package/dev/ryanhcode/sable/sublevel/storage/serialization" {
    export class $SubLevelData {
        setOriginLoadedChunk(arg0: $ChunkPos): void;
        fullTag(): $CompoundTag;
        getOriginLoadedChunk(): $ChunkPos;
        bounds(): $BoundingBox3d;
        dependencies(): $List<$UUID>;
        uuid(): $UUID;
        pose(): $Pose3d;
        constructor(arg0: $UUID_, arg1: $BoundingBox3d, arg2: $Pose3d, arg3: $List_<$UUID_>, arg4: $CompoundTag_);
    }
    export class $SubLevelStorage implements $AutoCloseable {
        attemptSaveSubLevel(arg0: $GlobalSavedSubLevelPointer_, arg1: $SubLevelData): void;
        attemptSaveSubLevel(arg0: $ChunkPos, arg1: $SubLevelData): $GlobalSavedSubLevelPointer;
        attemptSaveHoldingChunk(arg0: $ChunkPos, arg1: $SubLevelHoldingChunk): void;
        attemptLoadHoldingChunk(arg0: $ChunkPos): $SubLevelHoldingChunk;
        attemptLoadSubLevel(arg0: $ChunkPos, arg1: $SavedSubLevelPointer_): $SubLevelData;
        getFolder(): $Path;
        flush(): void;
        close(): void;
        static MAX_CACHE_SIZE: number;
        constructor(arg0: $Path_);
        get folder(): $Path;
    }
}
