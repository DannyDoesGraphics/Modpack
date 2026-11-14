import { $MenuProvider } from "@package/net/minecraft/world";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";

declare module "@package/dev/architectury/registry/menu" {
    export class $ExtendedMenuProvider {
    }
    export interface $ExtendedMenuProvider extends $MenuProvider {
        saveExtraData(arg0: $FriendlyByteBuf): void;
    }
}
