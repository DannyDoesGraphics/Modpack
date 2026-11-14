import { $SimpleContainer } from "@package/net/minecraft/world";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component } from "@package/net/minecraft/network/chat";
import { $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
export * as chest from "@package/dev/latvian/mods/kubejs/gui/chest";

declare module "@package/dev/latvian/mods/kubejs/gui" {
    export class $KubeJSGUI {
        setInventory(inv: $InventoryKJS): void;
        write(buf: $FriendlyByteBuf): void;
        playerSlotsY: number;
        playerSlotsX: number;
        inventoryHeight: number;
        width: number;
        inventoryLabelY: number;
        inventoryWidth: number;
        inventoryLabelX: number;
        title: $Component;
        inventory: $InventoryKJS;
        static EMPTY_CONTAINER: $SimpleContainer;
        height: number;
        constructor(buf: $FriendlyByteBuf);
        constructor();
    }
}
