import { $Level, $EntityGetter } from "@package/net/minecraft/world/level";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity$RemovalReason_, $Entity } from "@package/net/minecraft/world/entity";
import { $Iterable, $Record } from "@package/java/lang";
import { $ArrayList, $Set } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/guideme/scene/level" {
    export class $GuidebookLevel extends $Level {
        addEntity(arg0: $Entity): void;
        getBlockEntities(): $Set<$BlockEntity>;
        getEntitiesForRendering(): $Iterable<$Entity>;
        isFilledBlock(arg0: $BlockPos_): boolean;
        prepareLighting(arg0: $BlockPos_): void;
        onRenderFrame(): void;
        hasFilledBlocks(): boolean;
        getFilledBlocks(): $Stream<$BlockPos>;
        getBounds(): $GuidebookLevel$Bounds;
        removeEntity(arg0: number, arg1: $Entity$RemovalReason_): void;
        getPartialTick(): number;
        self(): $EntityGetter;
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
        constructor(arg0: $RegistryAccess);
        constructor();
        get blockEntities(): $Set<$BlockEntity>;
        get entitiesForRendering(): $Iterable<$Entity>;
        get filledBlocks(): $Stream<$BlockPos>;
        get bounds(): $GuidebookLevel$Bounds;
        get partialTick(): number;
    }
    export class $GuidebookLevel$Bounds extends $Record {
        min(): $BlockPos;
        max(): $BlockPos;
        constructor(min: $BlockPos_, max: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $GuidebookLevel$Bounds}.
     */
    export type $GuidebookLevel$Bounds_ = { max?: $BlockPos_, min?: $BlockPos_,  } | [max?: $BlockPos_, min?: $BlockPos_, ];
}
