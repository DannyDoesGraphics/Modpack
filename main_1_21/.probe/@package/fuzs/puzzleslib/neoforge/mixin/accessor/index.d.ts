import { $NewRegistryEvent } from "@package/net/neoforged/neoforge/registries";
import { $SoundEvent, $Music } from "@package/net/minecraft/sounds";
import { $Holder_ } from "@package/net/minecraft/core";
import { $AmbientAdditionsSettings, $AmbientParticleSettings, $AmbientMoodSettings, $MobSpawnSettings$MobSpawnCost_, $MobSpawnSettings$MobSpawnCost } from "@package/net/minecraft/world/level/biome";
import { $EntityType, $EntityType_ } from "@package/net/minecraft/world/entity";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/fuzs/puzzleslib/neoforge/mixin/accessor" {
    export class $MobSpawnSettingsBuilderNeoForgeAccessor {
    }
    export interface $MobSpawnSettingsBuilderNeoForgeAccessor {
        puzzleslib$getMobSpawnCosts(): $Map<$EntityType<never>, $MobSpawnSettings$MobSpawnCost>;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnSettingsBuilderNeoForgeAccessor}.
     */
    export type $MobSpawnSettingsBuilderNeoForgeAccessor_ = (() => $Map_<$EntityType_<never>, $MobSpawnSettings$MobSpawnCost_>);
    export class $NewRegistryEventNeoForgeAccessor {
        static puzzleslib$callInit(): $NewRegistryEvent;
    }
    export interface $NewRegistryEventNeoForgeAccessor {
        puzzleslib$callFill(): void;
    }
    /**
     * Values that may be interpreted as {@link $NewRegistryEventNeoForgeAccessor}.
     */
    export type $NewRegistryEventNeoForgeAccessor_ = (() => void);
    export class $BiomeSpecialEffectsBuilderNeoForgeAccessor {
    }
    export interface $BiomeSpecialEffectsBuilderNeoForgeAccessor {
        puzzleslib$setGrassColorOverride(arg0: (number) | undefined): void;
        puzzleslib$setAmbientParticle(arg0: ($AmbientParticleSettings) | undefined): void;
        puzzleslib$setAmbientLoopSoundEvent(arg0: ($Holder_<$SoundEvent>) | undefined): void;
        puzzleslib$setAmbientMoodSettings(arg0: ($AmbientMoodSettings) | undefined): void;
        puzzleslib$setAmbientAdditionsSettings(arg0: ($AmbientAdditionsSettings) | undefined): void;
        puzzleslib$setBackgroundMusic(arg0: ($Music) | undefined): void;
        puzzleslib$setFoliageColorOverride(arg0: (number) | undefined): void;
    }
}
