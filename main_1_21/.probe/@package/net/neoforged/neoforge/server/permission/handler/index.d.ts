import { $PermissionNode, $PermissionDynamicContext } from "@package/net/neoforged/neoforge/server/permission/nodes";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $UUID_, $Collection, $Set, $Collection_ } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/server/permission/handler" {
    /**
     * This is the Heart of the PermissionAPI, it manages `PermissionNode`s
     * as well as it handles all permission queries.
     * 
     * Note: You do not need to implement a PermissionHandler to query for permissions.
     */
    export class $IPermissionHandler {
    }
    export interface $IPermissionHandler {
        /**
         * @return an unmodifiable view of the collection of registered permission nodes
         */
        getRegisteredNodes(): $Set<$PermissionNode<never>>;
        getOfflinePermission<T>(arg0: $UUID_, arg1: $PermissionNode<T>, ...arg2: $PermissionDynamicContext<never>[]): T;
        getPermission<T>(arg0: $ServerPlayer, arg1: $PermissionNode<T>, ...arg2: $PermissionDynamicContext<never>[]): T;
        /**
         * @return an identifier for the PermissionHandler
         */
        getIdentifier(): $ResourceLocation;
        get registeredNodes(): $Set<$PermissionNode<never>>;
        get identifier(): $ResourceLocation;
    }
    export class $IPermissionHandlerFactory {
    }
    export interface $IPermissionHandlerFactory {
        create(permissions: $Collection_<$PermissionNode<never>>): $IPermissionHandler;
    }
    /**
     * Values that may be interpreted as {@link $IPermissionHandlerFactory}.
     */
    export type $IPermissionHandlerFactory_ = ((arg0: $Collection<$PermissionNode<never>>) => $IPermissionHandler);
    export class $DefaultPermissionHandler implements $IPermissionHandler {
        getRegisteredNodes(): $Set<$PermissionNode<never>>;
        getOfflinePermission<T>(arg0: $UUID_, arg1: $PermissionNode<T>, ...arg2: $PermissionDynamicContext<never>[]): T;
        getPermission<T>(arg0: $ServerPlayer, arg1: $PermissionNode<T>, ...arg2: $PermissionDynamicContext<never>[]): T;
        getIdentifier(): $ResourceLocation;
        static IDENTIFIER: $ResourceLocation;
        constructor(permissions: $Collection_<$PermissionNode<never>>);
        get registeredNodes(): $Set<$PermissionNode<never>>;
        get identifier(): $ResourceLocation;
    }
}
