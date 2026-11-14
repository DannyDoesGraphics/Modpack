import { $PonderSceneRegistrationHelper, $PonderTagRegistrationHelper } from "@package/net/createmod/ponder/api/registration";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
export * as scenes from "@package/com/simibubi/create/infrastructure/ponder/scenes";

declare module "@package/com/simibubi/create/infrastructure/ponder" {
    export class $AllCreatePonderTags {
        static register(arg0: $PonderTagRegistrationHelper<$ResourceLocation_>): void;
        static KINETIC_APPLIANCES: $ResourceLocation;
        static FLUIDS: $ResourceLocation;
        static DISPLAY_TARGETS: $ResourceLocation;
        static LOGISTICS: $ResourceLocation;
        static KINETIC_SOURCES: $ResourceLocation;
        static CONTRAPTION_ASSEMBLY: $ResourceLocation;
        static REDSTONE: $ResourceLocation;
        static THRESHOLD_SWITCH_TARGETS: $ResourceLocation;
        static DECORATION: $ResourceLocation;
        static CREATIVE: $ResourceLocation;
        static MOVEMENT_ANCHOR: $ResourceLocation;
        static ARM_TARGETS: $ResourceLocation;
        static TRAIN_RELATED: $ResourceLocation;
        static DISPLAY_SOURCES: $ResourceLocation;
        static CONTRAPTION_ACTOR: $ResourceLocation;
        static SAILS: $ResourceLocation;
        static KINETIC_RELAYS: $ResourceLocation;
        static HIGH_LOGISTICS: $ResourceLocation;
        constructor();
    }
    export class $AllCreatePonderScenes {
        static register(arg0: $PonderSceneRegistrationHelper<$ResourceLocation_>): void;
        constructor();
    }
}
