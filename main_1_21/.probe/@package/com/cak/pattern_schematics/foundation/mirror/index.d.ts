import { $Level_, $Level, $EntityGetter } from "@package/net/minecraft/world/level";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos, $BlockPos_, $Vec3i } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SchematicLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $StructureTemplate, $StructurePlaceSettings } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ArrayList } from "@package/java/util";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/cak/pattern_schematics/foundation/mirror" {
    export class $PatternSchematicLevel extends $SchematicLevel {
        putExtraData(arg0: $ItemStack_, arg1: $StructureTemplate): void;
        genBounds(arg0: $BoundingBox, arg1: $StructurePlaceSettings): $BoundingBox;
        self(): $EntityGetter;
        restoringBlockSnapshots: boolean;
        static LONG_PARTICLE_CLIP_RANGE: number;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        printBounds: $BoundingBox;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        cloneOffset: $Vec3i;
        rainLevel: number;
        oThunderLevel: number;
        cloneScaleMin: $Vec3i;
        static ATTACHMENTS_NBT_KEY: string;
        sourceBounds: $BoundingBox;
        renderMode: boolean;
        cloneScaleMax: $Vec3i;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        anchor: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        captureBlockSnapshots: boolean;
        constructor(arg0: $BlockPos_, arg1: $Level_);
    }
}
