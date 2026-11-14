import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Event } from "@package/net/neoforged/bus/api";

declare module "@package/net/neoforged/neoforge/event/server" {
    export class $ServerLifecycleEvent extends $Event {
        getServer(): $MinecraftServer;
        constructor(server: $MinecraftServer);
        get server(): $MinecraftServer;
    }
    /**
     * Called after `ServerStoppingEvent` when the server has completely shut down.
     * Called immediately before shutting down, on the dedicated server, and before returning
     * to the main menu on the client.
     */
    export class $ServerStoppedEvent extends $ServerLifecycleEvent {
        constructor(server: $MinecraftServer);
    }
    /**
     * Called after `ServerAboutToStartEvent` and before `ServerStartedEvent`.
     * This event allows for customizations of the server.
     * 
     * If you need to add commands use `RegisterCommandsEvent`.
     */
    export class $ServerStartingEvent extends $ServerLifecycleEvent {
        constructor(server: $MinecraftServer);
    }
    /**
     * Called before the server begins loading anything. Called after `InterModProcessEvent` on the dedicated
     * server, and after the player has hit "Play Selected World" in the client. Called before `ServerStartingEvent`.
     * 
     * You can obtain a reference to the server with this event.
     */
    export class $ServerAboutToStartEvent extends $ServerLifecycleEvent {
        constructor(server: $MinecraftServer);
    }
    /**
     * Called when the server begins an orderly shutdown, before `ServerStoppedEvent`.
     */
    export class $ServerStoppingEvent extends $ServerLifecycleEvent {
        constructor(server: $MinecraftServer);
    }
    /**
     * Called after `ServerStartingEvent` when the server is available and ready to play.
     */
    export class $ServerStartedEvent extends $ServerLifecycleEvent {
        constructor(server: $MinecraftServer);
    }
}
