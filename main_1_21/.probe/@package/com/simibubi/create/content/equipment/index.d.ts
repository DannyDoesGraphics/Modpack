import { $Level, $EntityGetter } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item$Properties, $Item } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ServerLevelData } from "@package/net/minecraft/world/level/storage";
import { $ArrayList, $HashMap, $Map } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos } from "@package/net/minecraft/core";
import { $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PlacementSimulationServerLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $PersistentEntitySectionManager } from "@package/net/minecraft/world/level/entity";
export * as zapper from "@package/com/simibubi/create/content/equipment/zapper";
export * as symmetryWand from "@package/com/simibubi/create/content/equipment/symmetryWand";
export * as potatoCannon from "@package/com/simibubi/create/content/equipment/potatoCannon";
export * as blueprint from "@package/com/simibubi/create/content/equipment/blueprint";
export * as toolbox from "@package/com/simibubi/create/content/equipment/toolbox";
export * as armor from "@package/com/simibubi/create/content/equipment/armor";
export * as hats from "@package/com/simibubi/create/content/equipment/hats";
export * as clipboard from "@package/com/simibubi/create/content/equipment/clipboard";
export * as bell from "@package/com/simibubi/create/content/equipment/bell";
export * as wrench from "@package/com/simibubi/create/content/equipment/wrench";
export * as sandPaper from "@package/com/simibubi/create/content/equipment/sandPaper";
export * as tool from "@package/com/simibubi/create/content/equipment/tool";
export * as extendoGrip from "@package/com/simibubi/create/content/equipment/extendoGrip";
export * as goggles from "@package/com/simibubi/create/content/equipment/goggles";

declare module "@package/com/simibubi/create/content/equipment" {
    export class $TreeFertilizerItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $TreeFertilizerItem$TreesDreamWorld extends $PlacementSimulationServerLevel {
        self(): $EntityGetter;
        restoringBlockSnapshots: boolean;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static RAIN_DELAY: $IntProvider;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        blocksAdded: $HashMap<$BlockPos, $BlockState>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static THUNDER_DURATION: $IntProvider;
        serverLevelData: $ServerLevelData;
        static RAIN_DURATION: $IntProvider;
        static ATTACHMENTS_NBT_KEY: string;
        entityManager: $PersistentEntitySectionManager<$Entity>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static END_SPAWN_POINT: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        captureBlockSnapshots: boolean;
    }
    export class $BuildersTeaItem extends $Item {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
}
