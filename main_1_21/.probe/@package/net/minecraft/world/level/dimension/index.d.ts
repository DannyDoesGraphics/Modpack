import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Dynamic, $DataResult, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $OptionalLong } from "@package/java/util";
import { $DimensionTypeAccessor } from "@package/dev/worldgen/tectonic/mixin";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $Path_, $Path } from "@package/java/nio/file";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $DimensionTypeAccessor as $DimensionTypeAccessor$1 } from "@package/net/irisshaders/iris/mixin";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as end from "@package/net/minecraft/world/level/dimension/end";

declare module "@package/net/minecraft/world/level/dimension" {
    export class $BuiltinDimensionTypes {
        static OVERWORLD: $ResourceKey<$DimensionType>;
        static END_EFFECTS: $ResourceLocation;
        static NETHER: $ResourceKey<$DimensionType>;
        static NETHER_EFFECTS: $ResourceLocation;
        static END: $ResourceKey<$DimensionType>;
        static OVERWORLD_EFFECTS: $ResourceLocation;
        static OVERWORLD_CAVES: $ResourceKey<$DimensionType>;
        constructor();
    }
    export class $LevelStem extends $Record {
        type(): $Holder<$DimensionType>;
        generator(): $ChunkGenerator;
        static CODEC: $Codec<$LevelStem>;
        static OVERWORLD: $ResourceKey<$LevelStem>;
        static NETHER: $ResourceKey<$LevelStem>;
        static END: $ResourceKey<$LevelStem>;
        constructor(type: $Holder_<$DimensionType>, generator: $ChunkGenerator);
    }
    /**
     * Values that may be interpreted as {@link $LevelStem}.
     */
    export type $LevelStem_ = { generator?: $ChunkGenerator, type?: $Holder_<$DimensionType>,  } | [generator?: $ChunkGenerator, type?: $Holder_<$DimensionType>, ];
    export interface $DimensionType extends RegistryMarked<RegistryTypes.DimensionTypeTag, RegistryTypes.DimensionType> {}
    export class $DimensionType extends $Record implements $DimensionTypeAccessor$1, $DimensionTypeAccessor {
        hasSkyLight(): boolean;
        ambientLight(): number;
        static getTeleportationScale(firstType: $DimensionType_, secondType: $DimensionType_): number;
        ultraWarm(): boolean;
        logicalHeight(): number;
        piglinSafe(): boolean;
        moonPhase(dayTime: number): number;
        coordinateScale(): number;
        hasFixedTime(): boolean;
        hasCeiling(): boolean;
        infiniburn(): $TagKey<$Block>;
        bedWorks(): boolean;
        respawnAnchorWorks(): boolean;
        monsterSpawnBlockLightLimit(): number;
        monsterSpawnLightTest(): $IntProvider;
        fixedTime(): $OptionalLong;
        monsterSettings(): $DimensionType$MonsterSettings;
        static getStorageFolder(dimensionKey: $ResourceKey_<$Level>, levelFolder: $Path_): $Path;
        hasRaids(): boolean;
        timeOfDay(dayTime: number): number;
        /**
         * @deprecated
         */
        static parseLegacy(dynamic: $Dynamic<never>): $DataResult<$ResourceKey<$Level>>;
        height(): number;
        natural(): boolean;
        effectsLocation(): $ResourceLocation;
        minY(): number;
        getFixedTime(): $OptionalLong;
        getAmbientLight(): number;
        setLogicalHeight(arg0: number): void;
        setHeight(arg0: number): void;
        setMinY(arg0: number): void;
        static MIN_Y: number;
        static CODEC: $Codec<$Holder<$DimensionType>>;
        static MIN_HEIGHT: number;
        static MAX_Y: number;
        static Y_SIZE: number;
        static WAY_ABOVE_MAX_Y: number;
        static WAY_BELOW_MIN_Y: number;
        static DIRECT_CODEC: $Codec<$DimensionType>;
        static BITS_FOR_Y: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$DimensionType>>;
        static MOON_BRIGHTNESS_PER_PHASE: number[];
        constructor(fixedTime: $OptionalLong, hasSkyLight: boolean, hasCeiling: boolean, ultraWarm: boolean, natural: boolean, coordinateScale: number, arg6: boolean, bedWorks: boolean, respawnAnchorWorks: number, minY: number, height: number, logicalHeight: $TagKey_<$Block>, infiniburn: $ResourceLocation_, effectsLocation: number, ambientLight: $DimensionType$MonsterSettings_);
    }
    /**
     * Values that may be interpreted as {@link $DimensionType}.
     */
    export type $DimensionType_ = RegistryTypes.DimensionType | { ambientLight?: number, effectsLocation?: $ResourceLocation_, monsterSettings?: $DimensionType$MonsterSettings_, natural?: boolean, fixedTime?: $OptionalLong, coordinateScale?: number, infiniburn?: $TagKey_<$Block>, respawnAnchorWorks?: boolean, minY?: number, ultraWarm?: boolean, bedWorks?: boolean, height?: number, hasCeiling?: boolean, logicalHeight?: number, hasSkyLight?: boolean,  } | [ambientLight?: number, effectsLocation?: $ResourceLocation_, monsterSettings?: $DimensionType$MonsterSettings_, natural?: boolean, fixedTime?: $OptionalLong, coordinateScale?: number, infiniburn?: $TagKey_<$Block>, respawnAnchorWorks?: boolean, minY?: number, ultraWarm?: boolean, bedWorks?: boolean, height?: number, hasCeiling?: boolean, logicalHeight?: number, hasSkyLight?: boolean, ];
    export class $DimensionType$MonsterSettings extends $Record {
        piglinSafe(): boolean;
        monsterSpawnBlockLightLimit(): number;
        monsterSpawnLightTest(): $IntProvider;
        hasRaids(): boolean;
        static CODEC: $MapCodec<$DimensionType$MonsterSettings>;
        constructor(arg0: boolean, arg1: boolean, arg2: $IntProvider_, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $DimensionType$MonsterSettings}.
     */
    export type $DimensionType$MonsterSettings_ = { piglinSafe?: boolean, monsterSpawnBlockLightLimit?: number, hasRaids?: boolean, monsterSpawnLightTest?: $IntProvider_,  } | [piglinSafe?: boolean, monsterSpawnBlockLightLimit?: number, hasRaids?: boolean, monsterSpawnLightTest?: $IntProvider_, ];
    export class $DimensionDefaults {
        static OVERWORLD_MIN_Y: number;
        static OVERWORLD_LEVEL_HEIGHT: number;
        static OVERWORLD_GENERATION_HEIGHT: number;
        static NETHER_GENERATION_HEIGHT: number;
        static NETHER_LOGICAL_HEIGHT: number;
        static OVERWORLD_LOGICAL_HEIGHT: number;
        static NETHER_LEVEL_HEIGHT: number;
        static END_MIN_Y: number;
        static END_GENERATION_HEIGHT: number;
        static NETHER_MIN_Y: number;
        static END_LEVEL_HEIGHT: number;
        static END_LOGICAL_HEIGHT: number;
        constructor();
    }
}
