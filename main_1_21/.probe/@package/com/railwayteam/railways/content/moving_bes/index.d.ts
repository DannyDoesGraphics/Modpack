import { $Level_, $Level, $EntityGetter } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ArrayList } from "@package/java/util";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BiFunction_, $BiConsumer_ } from "@package/java/util/function";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $AbstractContraptionEntity, $ContraptionWorld, $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ContainerLevelAccess, $ContainerLevelAccess_ } from "@package/net/minecraft/world/inventory";

declare module "@package/com/railwayteam/railways/content/moving_bes" {
    export class $GuiBlockLevelAccess implements $ContainerLevelAccess {
        evaluate<T>(arg0: $BiFunction_<$Level, $BlockPos, T>): (T) | undefined;
        execute(arg0: $BiConsumer_<$Level, $BlockPos>): void;
        evaluate<T>(arg0: $BiFunction_<$Level, $BlockPos, T>, arg1: T): T;
        constructor(arg0: $Level_, arg1: $AbstractContraptionEntity, arg2: $BlockPos_);
    }
    export class $GuiBlockUtils {
        static createNewGuiContraptionWorld(arg0: $Level_): $GuiBlockLevelAccess;
        static checkAccess(arg0: $ContainerLevelAccess_, arg1: $Player, arg2: $CallbackInfoReturnable<boolean>): void;
        constructor();
    }
    export class $GuiBlockContraptionWorld extends $ContraptionWorld {
        self(): $EntityGetter;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        blockPos: $BlockPos;
        static LONG_PARTICLE_CLIP_RANGE: number;
        contraption: $Contraption;
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
        constructor(arg0: $Level_, arg1: $Contraption, arg2: $BlockPos_);
    }
    export class $GuiBlockMovingInteractionBehaviour extends $MovingInteractionBehaviour {
        static REGISTRY: $SimpleRegistry<$Block, $MovingInteractionBehaviour>;
        constructor();
    }
}
