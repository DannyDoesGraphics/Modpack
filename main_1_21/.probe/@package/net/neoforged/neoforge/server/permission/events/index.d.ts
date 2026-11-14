import { $PermissionNode } from "@package/net/neoforged/neoforge/server/permission/nodes";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IPermissionHandlerFactory, $IPermissionHandlerFactory_ } from "@package/net/neoforged/neoforge/server/permission/handler";
import { $Iterable_ } from "@package/java/lang";
import { $Map, $Collection } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/server/permission/events" {
    /**
     * Used to register a new PermissionHandler, a server config value exists to choose which one to use.
     * Note: Create a new instance when registering a PermissionHandler.
     * If you cache it, make sure that your PermissionHandler is actually used after this event.
     */
    export class $PermissionGatherEvent$Handler extends $PermissionGatherEvent {
        getAvailablePermissionHandlerFactories(): $Map<$ResourceLocation, $IPermissionHandlerFactory>;
        addPermissionHandler(identifier: $ResourceLocation_, handlerFactory: $IPermissionHandlerFactory_): void;
        constructor();
        get availablePermissionHandlerFactories(): $Map<$ResourceLocation, $IPermissionHandlerFactory>;
    }
    /**
     * Fired to gather information for the permissions API, such as the `IPermissionHandler` and `PermissionNode`s.
     * 
     * `Handler` allows to set a new PermissionHandler
     * 
     * `Nodes` allows you to register new PermissionNodes
     * 
     * **Note:** All PermissionNodes that you want to use, **must** be registered!
     */
    export class $PermissionGatherEvent extends $Event {
        constructor();
    }
    /**
     * Used to register your PermissionNodes, **every node that you want to use, must be registered!**
     */
    export class $PermissionGatherEvent$Nodes extends $PermissionGatherEvent {
        getNodes(): $Collection<$PermissionNode<never>>;
        addNodes(nodes: $Iterable_<$PermissionNode<never>>): void;
        addNodes(...arg0: $PermissionNode<never>[]): void;
        constructor();
        get nodes(): $Collection<$PermissionNode<never>>;
    }
}
