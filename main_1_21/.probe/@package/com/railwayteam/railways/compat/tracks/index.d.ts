import { $JsonElement } from "@package/com/google/gson";
import { $TrackBlock, $TrackMaterialFactory, $TrackMaterial } from "@package/com/simibubi/create/content/trains/track";
import { $Set } from "@package/java/util";
import { $NonNullConsumer_, $NonNullBiConsumer_ } from "@package/com/tterrag/registrate/util/nullness";
import { $BlockEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Function_ } from "@package/java/util/function";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataGenContext, $RegistrateBlockstateProvider } from "@package/com/tterrag/registrate/providers";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Mods, $Mods_ } from "@package/com/railwayteam/railways/compat";
import { $CustomTrackBlockStateGenerator } from "@package/com/railwayteam/railways/content/custom_tracks";
export * as neoforge from "@package/com/railwayteam/railways/compat/tracks/neoforge";
export * as mods from "@package/com/railwayteam/railways/compat/tracks/mods";

declare module "@package/com/railwayteam/railways/compat/tracks" {
    export class $NarrowGaugeCompatTrackBlockStateGenerator extends $CustomTrackBlockStateGenerator {
        static create(): $NarrowGaugeCompatTrackBlockStateGenerator;
        constructor();
    }
    export class $GenericTrackCompat {
        static isDataGen(): boolean;
        static get(arg0: string): $GenericTrackCompat;
        register(...arg0: string[]): void;
        mod: $Mods;
        modLoaded: boolean;
        modid: string;
        constructor(arg0: $Mods_);
        static get dataGen(): boolean;
    }
    export class $WideGaugeCompatTrackBlockStateGenerator extends $CustomTrackBlockStateGenerator {
        static create(): $WideGaugeCompatTrackBlockStateGenerator;
        constructor();
    }
    export class $CompatTrackBlockStateGenerator extends $SpecialBlockStateGen {
        static create(): $CompatTrackBlockStateGenerator;
        constructor();
    }
    export class $SoftIngredient {
        isEmpty(): boolean;
        static of(arg0: $ResourceLocation_): $SoftIngredient;
        toJson(): $JsonElement;
        item: $ResourceLocation;
        get empty(): boolean;
    }
    export class $TrackCompatUtils {
        static makeTrack(arg0: $TrackMaterial, arg1: $NonNullBiConsumer_<$DataGenContext<$Block, $TrackBlock>, $RegistrateBlockstateProvider>, arg2: $NonNullConsumer_<$TrackBlock>, arg3: $Function_<$BlockBehaviour$Properties, $BlockBehaviour$Properties>): $BlockEntry<$TrackBlock>;
        static makeTrack(arg0: $TrackMaterial, arg1: $NonNullBiConsumer_<$DataGenContext<$Block, $TrackBlock>, $RegistrateBlockstateProvider>, arg2: $NonNullConsumer_<$TrackBlock>): $BlockEntry<$TrackBlock>;
        static makeTrack(arg0: $TrackMaterial, arg1: $NonNullBiConsumer_<$DataGenContext<$Block, $TrackBlock>, $RegistrateBlockstateProvider>): $BlockEntry<$TrackBlock>;
        static makeTrack(arg0: $TrackMaterial): $BlockEntry<$TrackBlock>;
        static makeTrack(arg0: $TrackMaterial, arg1: $NonNullBiConsumer_<$DataGenContext<$Block, $TrackBlock>, $RegistrateBlockstateProvider>, arg2: $Function_<$BlockBehaviour$Properties, $BlockBehaviour$Properties>): $BlockEntry<$TrackBlock>;
        static buildCompatModels(arg0: $GenericTrackCompat, arg1: $TrackMaterialFactory): $TrackMaterial;
        static anyLoaded(): boolean;
        static TRACK_COMPAT_MODS: $Set<string>;
        constructor();
    }
}
