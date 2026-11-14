import { $Event } from "@package/net/neoforged/bus/api";
import { $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/dev/latvian/mods/kubejs/recipe/special" {
    export class $SpecialRecipeSerializerManager implements $KubeEvent {
        addSpecialFlag(id: $ResourceLocation_): void;
        ignoreSpecialFlag(id: $ResourceLocation_): void;
        ignoreSpecialMod(modid: string): void;
        addSpecialMod(modid: string): void;
        isSpecial(recipe: $Recipe<never>): boolean;
        reset(): void;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        static INSTANCE: $SpecialRecipeSerializerManager;
        constructor();
    }
    export class $SpecialRecipeSerializerManager$AfterPost extends $Event {
        constructor();
    }
}
