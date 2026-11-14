import { $KnownPack_ } from "@package/net/minecraft/server/packs/repository";
import { $Consumer_ } from "@package/java/util/function";
import { $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $RegistryLayer_, $MinecraftServer$ServerResourcePackInfo_ } from "@package/net/minecraft/server";
import { $ConfigurationTask, $ConfigurationTask$Type } from "@package/net/minecraft/server/network";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $List_ } from "@package/java/util";

declare module "@package/net/minecraft/server/network/config" {
    export class $SynchronizeRegistriesTask implements $ConfigurationTask {
        handleResponse(packs: $List_<$KnownPack_>, packetSender: $Consumer_<$Packet<never>>): void;
        type(): $ConfigurationTask$Type;
        start(task: $Consumer_<$Packet<never>>): void;
        static TYPE: $ConfigurationTask$Type;
        constructor(requestedPacks: $List_<$KnownPack_>, registries: $LayeredRegistryAccess<$RegistryLayer_>);
    }
    export class $JoinWorldTask implements $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(arg0: $Consumer_<$Packet<never>>): void;
        static TYPE: $ConfigurationTask$Type;
        constructor();
    }
    export class $ServerResourcePackConfigurationTask implements $ConfigurationTask {
        type(): $ConfigurationTask$Type;
        start(task: $Consumer_<$Packet<never>>): void;
        static TYPE: $ConfigurationTask$Type;
        constructor(info: $MinecraftServer$ServerResourcePackInfo_);
    }
}
