import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $AdditionalItemPlacement } from "@package/net/mehvahdjukaar/moonlight/api/item/additional_placements";
import { $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Activity_ } from "@package/net/minecraft/world/entity/schedule";
import { $List, $Map, $List_ } from "@package/java/util";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $MemoryModuleType, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $CustomMapData$DirtyDataPatch, $CustomMapData$DirtyDataPatch_, $CustomMapData$Type_, $CustomMapData$DirtyCounter } from "@package/net/mehvahdjukaar/moonlight/api/map";
import { $MLMapDecoration } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";

declare module "@package/net/mehvahdjukaar/moonlight/core/misc" {
    export class $IMapDataPacketExtension {
    }
    export interface $IMapDataPacketExtension {
        moonlight$getCustomDecorations(): ($List<$MLMapDecoration>) | undefined;
        moonlight$setCustomDecorations(arg0: ($List_<$MLMapDecoration>) | undefined): void;
        moonlight$setDirtyCustomData(arg0: ($List_<$CustomMapData$DirtyDataPatch_<never, never>>) | undefined): void;
        moonlight$getDimension(): $ResourceLocation;
        moonlight$setDimension(arg0: $ResourceLocation_): void;
        moonlight$getMapCenterX(): number;
        moonlight$getMapCenterZ(): number;
        moonlight$setMapCenter(arg0: number, arg1: number): void;
        moonlight$getDirtyCustomData(): ($List<$CustomMapData$DirtyDataPatch<never, never>>) | undefined;
    }
    export class $VillagerBrainEventInternal {
        getVillager(): $Villager;
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        addOrReplaceActivity(arg0: $Activity_, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>): void;
        scheduleActivity(arg0: $Activity_, arg1: number, arg2: number): void;
        addSensor(arg0: $SensorType_<$Sensor<$Villager>>): void;
        addTaskToActivity<P extends $Pair<number, $Behavior<$Villager>>>(arg0: $Activity_, arg1: P): boolean;
        constructor(arg0: $Brain<$Villager>, arg1: $Villager);
        get villager(): $Villager;
        get memories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
    }
    export class $IExtendedItem {
    }
    export interface $IExtendedItem {
        moonlight$getAdditionalBehavior(): $AdditionalItemPlacement;
        moonlight$setAdditionalBehavior(arg0: $AdditionalItemPlacement): void;
        moonlight$getClientAnimationExtension(): $Object;
        moonlight$setClientAnimationExtension(arg0: $Object): void;
    }
    export class $IExtendedPistonTile {
    }
    export interface $IExtendedPistonTile {
        tickMovedBlock(arg0: $Level_, arg1: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $IExtendedPistonTile}.
     */
    export type $IExtendedPistonTile_ = ((arg0: $Level, arg1: $BlockPos) => void);
    export class $IHoldingPlayerExtension {
    }
    export interface $IHoldingPlayerExtension {
        moonlight$setCustomDataDirty<H extends $CustomMapData$DirtyCounter>(arg0: $CustomMapData$Type_<never, never>, arg1: $Consumer_<H>): void;
        moonlight$setCustomMarkersDirty(): void;
    }
}
