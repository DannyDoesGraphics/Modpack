import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Consumer_ } from "@package/java/util/function";
import { $ConfigFilePayload } from "@package/net/neoforged/neoforge/network/payload";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $InetAddress, $SocketAddress } from "@package/java/net";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ConfigurationTask } from "@package/net/minecraft/server/network";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $MenuType$MenuSupplier, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";
import { $ServerConfigurationPacketListener } from "@package/net/minecraft/network/protocol/configuration";
export * as negotiation from "@package/net/neoforged/neoforge/network/negotiation";
export * as event from "@package/net/neoforged/neoforge/network/event";
export * as payload from "@package/net/neoforged/neoforge/network/payload";
export * as configuration from "@package/net/neoforged/neoforge/network/configuration";
export * as registration from "@package/net/neoforged/neoforge/network/registration";
export * as handling from "@package/net/neoforged/neoforge/network/handling";
export * as codec from "@package/net/neoforged/neoforge/network/codec";
export * as filters from "@package/net/neoforged/neoforge/network/filters";
export * as connection from "@package/net/neoforged/neoforge/network/connection";
export * as handlers from "@package/net/neoforged/neoforge/network/handlers";
export * as bundle from "@package/net/neoforged/neoforge/network/bundle";

declare module "@package/net/neoforged/neoforge/network" {
    export class $ConfigSync {
        static syncConfigs(): $List<$ConfigFilePayload>;
        static receiveSyncedConfig(contents: number[], fileName: string): void;
    }
    export class $DualStackUtils {
        /**
         * Used for the "Open to LAN" feature.
         */
        static getMulticastGroup(): string;
        /**
         * Called by `NeoForge` to load this class so that the initial network
         * property constants are set before any of the other methods in this class are called. This is so we can
         * distinguish what Java's read once on JVM start vs what we've set for Netty.
         */
        static logInitialPreferences(): void;
        /**
         * `SocketAddress#toString()` but with IPv6 address compression support
         */
        static getAddressString(address: $SocketAddress): string;
        /**
         * Checks if an address is an IPv6 one or an IPv4 one, lets Netty know accordingly and returns the result.
         */
        static checkIPv6(inetAddress: $InetAddress): boolean;
        /**
         * Resolve the address and see if Java and the OS return an IPv6 or IPv4 one, then let Netty know
         * accordingly (it doesn't understand the `java.net.preferIPv6Addresses=system` property).
         */
        static checkIPv6(hostAddress: string): boolean;
        /**
         * Called by `NeoForge` to load this class so that the initial network
         * property constants are set before any of the other methods in this class are called. This is so we can
         * distinguish what Java's read once on JVM start vs what we've set for Netty.
         */
        static initialise(): void;
        /**
         * Get the device's local IP address, taking into account scenarios where the client's network adapter
         * supports IPv6 and has it enabled but the router's LAN does not.
         */
        static getLocalAddress(): $InetAddress;
        constructor();
        static get multicastGroup(): string;
        static get localAddress(): $InetAddress;
    }
    export class $ConfigurationInitialization {
        /**
         * Method called to add configuration tasks that should run before all others,
         * and most importantly before vanilla's own `SynchronizeRegistriesTask`.
         */
        static configureEarlyTasks(listener: $ServerConfigurationPacketListener, tasks: $Consumer_<$ConfigurationTask>): void;
        constructor();
    }
    export class $NetworkInitialization {
        constructor();
    }
    /**
     * This extension of `MenuSupplier` allows a mod to handle the extra data it sent to the client
     * when creating the client-side copy of a menu.
     */
    export class $IContainerFactory<T extends $AbstractContainerMenu> {
    }
    export interface $IContainerFactory<T extends $AbstractContainerMenu> extends $MenuType$MenuSupplier<T> {
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
        create(containerId: number, playerInventory: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $IContainerFactory}.
     */
    export type $IContainerFactory_<T> = ((arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf) => T);
    /**
     * Means to distribute packets in various ways
     */
    export class $PacketDistributor {
        static sendToPlayersInDimension(arg0: $ServerLevel, arg1: $CustomPacketPayload_, ...arg2: $CustomPacketPayload_[]): void;
        static sendToPlayer(arg0: $ServerPlayer, arg1: $CustomPacketPayload_, ...arg2: $CustomPacketPayload_[]): void;
        static sendToAllPlayers(arg0: $CustomPacketPayload_, ...arg1: $CustomPacketPayload_[]): void;
        static sendToPlayersTrackingEntity(arg0: $Entity, arg1: $CustomPacketPayload_, ...arg2: $CustomPacketPayload_[]): void;
        static sendToPlayersTrackingChunk(arg0: $ServerLevel, arg1: $ChunkPos, arg2: $CustomPacketPayload_, ...arg3: $CustomPacketPayload_[]): void;
        static sendToPlayersTrackingEntityAndSelf(arg0: $Entity, arg1: $CustomPacketPayload_, ...arg2: $CustomPacketPayload_[]): void;
        static sendToServer(arg0: $CustomPacketPayload_, ...arg1: $CustomPacketPayload_[]): void;
        static sendToPlayersNear(arg0: $ServerLevel, arg1: $ServerPlayer, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CustomPacketPayload_, ...arg7: $CustomPacketPayload_[]): void;
    }
}
