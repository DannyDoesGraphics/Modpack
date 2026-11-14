import { $HolderLookup$Provider, $RegistryAccess } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Codec } from "@package/com/mojang/serialization";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";

declare module "@package/net/minecraft/client/player/inventory" {
    export class $Hotbar {
        load(registries: $HolderLookup$Provider): $List<$ItemStack>;
        isEmpty(): boolean;
        storeFrom(inventory: $Inventory, registryAccess: $RegistryAccess): void;
        static CODEC: $Codec<$Hotbar>;
        constructor();
        get empty(): boolean;
    }
}
