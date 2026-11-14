import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Holder, $RegistryAccess } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Map_ } from "@package/java/util";
import { $WorldDimensions, $WorldDimensions_ } from "@package/net/minecraft/world/level/levelgen";
import { $LevelStem_, $LevelStem } from "@package/net/minecraft/world/level/dimension";

declare module "@package/net/minecraft/world/level/levelgen/presets" {
    export class $WorldPresets {
        static fromSettings(worldDimensions: $WorldDimensions_): ($ResourceKey<$WorldPreset>) | undefined;
        static getNormalOverworld(registry: $RegistryAccess): $LevelStem;
        static bootstrap(context: $BootstrapContext<$WorldPreset_>): void;
        static createNormalWorldDimensions(registry: $RegistryAccess): $WorldDimensions;
        static AMPLIFIED: $ResourceKey<$WorldPreset>;
        static FLAT: $ResourceKey<$WorldPreset>;
        static SINGLE_BIOME_SURFACE: $ResourceKey<$WorldPreset>;
        static LARGE_BIOMES: $ResourceKey<$WorldPreset>;
        static DEBUG: $ResourceKey<$WorldPreset>;
        static NORMAL: $ResourceKey<$WorldPreset>;
        constructor();
    }
    export class $WorldPresets$Bootstrap {
    }
    export class $WorldPreset {
        overworld(): ($LevelStem) | undefined;
        createWorldDimensions(): $WorldDimensions;
        static CODEC: $Codec<$Holder<$WorldPreset>>;
        static DIRECT_CODEC: $Codec<$WorldPreset>;
        constructor(dimensions: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>);
    }
    /**
     * Values that may be interpreted as {@link $WorldPreset}.
     */
    export type $WorldPreset_ = RegistryTypes.WorldgenWorldPreset;
    export interface $WorldPreset extends RegistryMarked<RegistryTypes.WorldgenWorldPresetTag, RegistryTypes.WorldgenWorldPreset> {}
}
