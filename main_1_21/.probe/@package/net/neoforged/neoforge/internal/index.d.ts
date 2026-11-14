import { $BiConsumer_ } from "@package/java/util/function";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $ResourceManagerReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $IBindingsProvider } from "@package/net/neoforged/fml";
export * as versions from "@package/net/neoforged/neoforge/internal/versions";

declare module "@package/net/neoforged/neoforge/internal" {
    export class $RegistrationEvents {
        static canModifyComponents(): boolean;
        static modifyComponents(): void;
        constructor();
    }
    export class $BrandingControl {
        static forEachLine(includeMC: boolean, reverse: boolean, lineConsumer: $BiConsumer_<number, string>): void;
        static forEachAboveCopyrightLine(lineConsumer: $BiConsumer_<number, string>): void;
        static getClientBranding(): string;
        static getServerBranding(): string;
        static resourceManagerReloadListener(): $ResourceManagerReloadListener;
        constructor();
        static get clientBranding(): string;
        static get serverBranding(): string;
    }
    export class $NeoForgeBindings implements $IBindingsProvider {
        getGameBus(): $IEventBus;
        constructor();
        get gameBus(): $IEventBus;
    }
    /**
     * Internal class for handling the steps of mod loading that are common for client, data and server runs.
     * 
     * - Client runs `#begin`, `#load` and `#finish` at different timings, see `ClientModLoader`.
     * - Server runs all 3 consecutively.
     * - Datagen only runs `#begin`.
     */
    export class $CommonModLoader {
        static areRegistriesLoaded(): boolean;
        constructor();
    }
}
