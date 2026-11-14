import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $List } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/client/resources" {
    export class $NeoForgeSplashHooks {
        static loadSplashes(resourceManager: $ResourceManager): $List<string>;
        constructor();
    }
}
