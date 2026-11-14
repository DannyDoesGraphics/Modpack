import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Registry } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/appeng/sounds" {
    export class $AppEngSounds {
        static register(arg0: $Registry<$SoundEvent_>): void;
        static GUIDE_CLICK_EVENT: $SoundEvent;
        static GUIDE_CLICK_ID: $ResourceLocation;
        constructor();
    }
}
