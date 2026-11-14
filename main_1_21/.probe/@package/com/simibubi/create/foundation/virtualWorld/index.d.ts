import { $Level, $EntityGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $VisualizationLevel } from "@package/dev/engine_room/flywheel/api/visualization";
import { $LevelChunk, $ChunkSource, $LevelChunkSection, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $ArrayList, $Map, $UUID_, $Collection_ } from "@package/java/util";
import { $AbortableIterationConsumer_, $RandomSource } from "@package/net/minecraft/util";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos, $Vec3i } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Runnable_, $Iterable } from "@package/java/lang";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $EntityAccess, $EntityTypeTest, $LevelEntityGetter } from "@package/net/minecraft/world/level/entity";

declare module "@package/com/simibubi/create/foundation/virtualWorld" {
    export class $VirtualChunk extends $LevelChunk {
        loaded: boolean;
        world: $VirtualRenderWorld;
        blockEntities: $Map<$BlockPos, $BlockEntity>;
        static NO_FILLED_SECTION: number;
        constructor(arg0: $VirtualRenderWorld, arg1: number, arg2: number);
    }
    export class $VirtualChunkSource extends $ChunkSource {
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        constructor(arg0: $VirtualRenderWorld);
    }
    export class $VirtualChunkSection extends $LevelChunkSection {
        owner: $VirtualChunk;
        static SECTION_WIDTH: number;
        xStart: number;
        static SECTION_HEIGHT: number;
        yStart: number;
        static BIOME_CONTAINER_BITS: number;
        static SECTION_SIZE: number;
        zStart: number;
        constructor(arg0: $VirtualChunk, arg1: number);
    }
    export class $VirtualRenderWorld extends $Level implements $VisualizationLevel {
        runLightEngine(): void;
        static nextMultipleOf16(arg0: number): number;
        setExternalLight(arg0: number): void;
        resetExternalLight(): void;
        setBlockEntities(arg0: $Collection_<$BlockEntity>): void;
        getChunkAtImmediately(arg0: number, arg1: number): $LevelChunk;
        getAnyChunkImmediately(arg0: number, arg1: number): $ChunkAccess;
        clear(): void;
        getBlockState(arg0: number, arg1: number, arg2: number): $BlockState;
        supportsVisualization(): boolean;
        self(): $EntityGetter;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static MAX_BRIGHTNESS: number;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        rainLevel: number;
        captureBlockSnapshots: boolean;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: $Vec3i, arg4: $Runnable_);
        set externalLight(value: number);
        set blockEntities(value: $Collection_<$BlockEntity>);
    }
    export class $VirtualLevelEntityGetter<T extends $EntityAccess> implements $LevelEntityGetter<T> {
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AABB_, arg2: $AbortableIterationConsumer_<U>): void;
        get<U extends T>(arg0: $EntityTypeTest<T, U>, arg1: $AbortableIterationConsumer_<U>): void;
        get(arg0: $AABB_, arg1: $Consumer_<T>): void;
        get(arg0: $UUID_): T;
        get(arg0: number): T;
        getAll(): $Iterable<T>;
        constructor();
        get all(): $Iterable<T>;
    }
}
