import { $Container } from "@package/net/minecraft/world";
import { $Consumer_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Slot, $ClickType, $ClickType_ } from "@package/net/minecraft/world/inventory";
import { $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $List, $Map } from "@package/java/util";
import { $Object, $Runnable, $Record } from "@package/java/lang";

declare module "@package/dev/latvian/mods/kubejs/gui/chest" {
    export class $ChestMenuClickHandler extends $Record {
        autoHandle(): boolean;
        type(): $ClickType;
        test(event: $ChestMenuClickEvent): boolean;
        button(): number;
        callback(): $ChestMenuClickEvent$Callback;
        constructor(type: $ClickType_, button: number, callback: $ChestMenuClickEvent$Callback_, autoHandle: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ChestMenuClickHandler}.
     */
    export type $ChestMenuClickHandler_ = { button?: number, autoHandle?: boolean, callback?: $ChestMenuClickEvent$Callback_, type?: $ClickType_,  } | [button?: number, autoHandle?: boolean, callback?: $ChestMenuClickEvent$Callback_, type?: $ClickType_, ];
    export class $ChestMenuInventoryClickEvent$Callback {
    }
    export interface $ChestMenuInventoryClickEvent$Callback {
        onClick(event: $ChestMenuInventoryClickEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $ChestMenuInventoryClickEvent$Callback}.
     */
    export type $ChestMenuInventoryClickEvent$Callback_ = ((event: $ChestMenuInventoryClickEvent) => void);
    export class $ChestMenuClickEvent {
        setHandled(): void;
        button: number;
        slot: $ChestMenuSlot;
        type: $ClickType;
        constructor(slot: $ChestMenuSlot, type: $ClickType_, button: number);
    }
    export class $ChestMenuInventoryClickEvent {
        setItem(item: $ItemStack_): void;
        getIndex(): number;
        getItem(): $ItemStack;
        button: number;
        type: $ClickType;
        constructor(slot: $Slot, type: $ClickType_, button: number);
        get index(): number;
    }
    export class $ChestMenuClickEvent$Callback {
    }
    export interface $ChestMenuClickEvent$Callback {
        onClick(event: $ChestMenuClickEvent): void;
    }
    /**
     * Values that may be interpreted as {@link $ChestMenuClickEvent$Callback}.
     */
    export type $ChestMenuClickEvent$Callback_ = ((event: $ChestMenuClickEvent) => void);
    export class $ChestMenuSlot {
        setItem(stack: $ItemStack_): void;
        clicked(type: $ClickType_, button: number, callback: $ChestMenuClickEvent$Callback_, autoHandle: boolean): void;
        setLeftClicked(callback: $ChestMenuClickEvent$Callback_): void;
        resetClickHandlers(): void;
        setRightClicked(callback: $ChestMenuClickEvent$Callback_): void;
        setMiddleClicked(callback: $ChestMenuClickEvent$Callback_): void;
        setSwapped(callback: $ChestMenuClickEvent$Callback_): void;
        setShiftLeftClicked(callback: $ChestMenuClickEvent$Callback_): void;
        setShiftRightClicked(callback: $ChestMenuClickEvent$Callback_): void;
        setDoubleClicked(callback: $ChestMenuClickEvent$Callback_): void;
        setThrown(callback: $ChestMenuClickEvent$Callback_): void;
        getItem(): $ItemStack;
        data: $Map<string, $Object>;
        clickHandlers: $List<$ChestMenuClickHandler>;
        x: number;
        index: number;
        y: number;
        inventorySlot: number;
        gui: $ChestMenuData;
        inventory: $InventoryKJS;
        constructor(gui: $ChestMenuData, index: number);
        set leftClicked(value: $ChestMenuClickEvent$Callback_);
        set rightClicked(value: $ChestMenuClickEvent$Callback_);
        set middleClicked(value: $ChestMenuClickEvent$Callback_);
        set swapped(value: $ChestMenuClickEvent$Callback_);
        set shiftLeftClicked(value: $ChestMenuClickEvent$Callback_);
        set shiftRightClicked(value: $ChestMenuClickEvent$Callback_);
        set doubleClicked(value: $ChestMenuClickEvent$Callback_);
        set thrown(value: $ChestMenuClickEvent$Callback_);
    }
    export class $ChestMenuData {
        handleClick(index: number, type: $ClickType_, button: number): void;
        slot(x: number, y: number, slot: $Consumer_<$ChestMenuSlot>): void;
        slot(x0: number, y0: number, x1: number, y1: number, slot: $Consumer_<$ChestMenuSlot>): void;
        getSlot(x: number, y: number): $ChestMenuSlot;
        sync(): void;
        button(x: number, y: number, stack: $ItemStack_, displayName: $Component_, leftClicked: $ChestMenuClickEvent$Callback_): void;
        capturedInventory: $Container;
        slots: $ChestMenuSlot[];
        mouseItem: $ItemStack;
        anyClicked: $ChestMenuClickEvent$Callback;
        closed: $Runnable;
        inventoryClicked: $ChestMenuInventoryClickEvent$Callback;
        title: $Component;
        rows: number;
        playerSlots: boolean;
        player: $ServerPlayer;
        constructor(player: $ServerPlayer, title: $Component_, rows: number);
    }
}
