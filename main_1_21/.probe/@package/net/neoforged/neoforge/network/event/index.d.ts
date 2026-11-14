import { $Event } from "@package/net/neoforged/bus/api";
import { $PayloadRegistrar } from "@package/net/neoforged/neoforge/network/registration";
import { $ConfigurationTask } from "@package/net/minecraft/server/network";
import { $Queue } from "@package/java/util";
import { $ServerConfigurationPacketListener } from "@package/net/minecraft/network/protocol/configuration";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/neoforge/network/event" {
    /**
     * Fired when the server configuration packet listener collects all the configuration tasks
     * that should be run on the server to configure the client.
     */
    export class $RegisterConfigurationTasksEvent extends $Event implements $IModBusEvent {
        /**
         * Get the configuration tasks that have been registered.
         */
        getConfigurationTasks(): $Queue<$ConfigurationTask>;
        /**
         * Get the server configuration packet listener.
         */
        getListener(): $ServerConfigurationPacketListener;
        /**
         * Register a configuration task to be run on the server.
         * 
         * If you need to send payloads during your task, extend `ICustomConfigurationTask` instead of `ConfigurationTask`.
         */
        register(task: $ConfigurationTask): void;
        constructor(listener: $ServerConfigurationPacketListener);
        get configurationTasks(): $Queue<$ConfigurationTask>;
        get listener(): $ServerConfigurationPacketListener;
    }
    /**
     * Event fired when the `NetworkRegistry` is being set up.
     * 
     * This event is used to collect all the payload types and their handlers that should be used on the network.
     * 
     * There are a few base rules for custom payloads:
     * 
     * Payloads should not write their ids within their `StreamCodec`, as this will be done automatically.
     * Payloads must be registered before they can be sent over the network.
     * Payloads may only be sent over the `ConnectionProtocol` they were registered for.
     * By default, `PayloadRegistrar` will wrap handlers so they execute on the main thread instead of the network thread.
     * Payloads are always serialized, including for memory connections (singleplayer and LAN hosts).
     */
    export class $RegisterPayloadHandlersEvent extends $Event implements $IModBusEvent {
        /**
         * Creates a new `PayloadRegistrar`, a utility for registering payloads using a builder-style format.
         */
        registrar(version: string): $PayloadRegistrar;
        constructor();
    }
}
