import { $PermissionNode } from "@package/net/neoforged/neoforge/server/permission/nodes";
import { $RuntimeException } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/server/permission/exceptions" {
    export class $UnregisteredPermissionException extends $RuntimeException {
        getNode(): $PermissionNode<never>;
        constructor(node: $PermissionNode<never>);
        get node(): $PermissionNode<never>;
    }
}
