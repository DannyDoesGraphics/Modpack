import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Supplier_ } from "@package/java/util/function";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";

declare module "@package/dev/architectury/event/events/client" {
    export class $ClientCommandRegistrationEvent$ClientCommandSourceStack {
    }
    export interface $ClientCommandRegistrationEvent$ClientCommandSourceStack extends $SharedSuggestionProvider {
        arch$sendSuccess(arg0: $Supplier_<$Component>, arg1: boolean): void;
        arch$sendFailure(arg0: $Component_): void;
        arch$getPlayer(): $LocalPlayer;
        arch$getPosition(): $Vec3;
        arch$getRotation(): $Vec2;
        arch$getLevel(): $ClientLevel;
    }
}
