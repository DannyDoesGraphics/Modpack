import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Setting } from "@package/appeng/api/config";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $List, $List_ } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";
import { $AEKeyType, $AEKeyType_ } from "@package/appeng/api/stacks";
import { $Hotkey_ } from "@package/appeng/client";
import { $AEColor_, $AEColor } from "@package/appeng/api/util";
import { $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ServerboundPacket } from "@package/appeng/core/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MenuType_, $MenuType } from "@package/net/minecraft/world/inventory";
import { $ISubMenu } from "@package/appeng/menu";
import { $Record } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $InventoryAction, $InventoryAction_ } from "@package/appeng/helpers";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/core/network/serverbound" {
    export class $FillCraftingGridFromRecipePacket extends $Record implements $ServerboundPacket {
        ingredientTemplates(): $NonNullList<$ItemStack>;
        craftMissing(): boolean;
        recipeId(): $ResourceLocation;
        handleOnServer(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$FillCraftingGridFromRecipePacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $FillCraftingGridFromRecipePacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$FillCraftingGridFromRecipePacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FillCraftingGridFromRecipePacket>;
        constructor(recipeId: $ResourceLocation_, ingredientTemplates: $NonNullList<$ItemStack_>, craftMissing: boolean);
    }
    /**
     * Values that may be interpreted as {@link $FillCraftingGridFromRecipePacket}.
     */
    export type $FillCraftingGridFromRecipePacket_ = { recipeId?: $ResourceLocation_, ingredientTemplates?: $NonNullList<$ItemStack_>, craftMissing?: boolean,  } | [recipeId?: $ResourceLocation_, ingredientTemplates?: $NonNullList<$ItemStack_>, craftMissing?: boolean, ];
    export class $UpdateHoldingCtrlPacket extends $Record implements $ServerboundPacket {
        handleOnServer(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$UpdateHoldingCtrlPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $UpdateHoldingCtrlPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        keyDown(): boolean;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$UpdateHoldingCtrlPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $UpdateHoldingCtrlPacket>;
        constructor(keyDown: boolean);
    }
    /**
     * Values that may be interpreted as {@link $UpdateHoldingCtrlPacket}.
     */
    export type $UpdateHoldingCtrlPacket_ = { keyDown?: boolean,  } | [keyDown?: boolean, ];
    export class $ConfirmAutoCraftPacket extends $Record implements $ServerboundPacket {
        craftMissingAmount(): boolean;
        autoStart(): boolean;
        handleOnServer(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$ConfirmAutoCraftPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $ConfirmAutoCraftPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        amount(): number;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ConfirmAutoCraftPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ConfirmAutoCraftPacket>;
        constructor(amount: number, craftMissingAmount: boolean, autoStart: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ConfirmAutoCraftPacket}.
     */
    export type $ConfirmAutoCraftPacket_ = { autoStart?: boolean, craftMissingAmount?: boolean, amount?: number,  } | [autoStart?: boolean, craftMissingAmount?: boolean, amount?: number, ];
    export class $ColorApplicatorSelectColorPacket extends $Record implements $ServerboundPacket {
        handleOnServer(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$ColorApplicatorSelectColorPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $ColorApplicatorSelectColorPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        color(): $AEColor;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ColorApplicatorSelectColorPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ColorApplicatorSelectColorPacket>;
        constructor(color: $AEColor_);
    }
    /**
     * Values that may be interpreted as {@link $ColorApplicatorSelectColorPacket}.
     */
    export type $ColorApplicatorSelectColorPacket_ = { color?: $AEColor_,  } | [color?: $AEColor_, ];
    export class $GuiActionPacket extends $Record implements $ServerboundPacket {
        containerId(): number;
        jsonPayload(): string;
        handleOnServer(arg0: $ServerPlayer): void;
        actionName(): string;
        type(): $CustomPacketPayload$Type<$GuiActionPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $GuiActionPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$GuiActionPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GuiActionPacket>;
        constructor(containerId: number, actionName: string, jsonPayload: string);
    }
    /**
     * Values that may be interpreted as {@link $GuiActionPacket}.
     */
    export type $GuiActionPacket_ = { actionName?: string, jsonPayload?: string, containerId?: number,  } | [actionName?: string, jsonPayload?: string, containerId?: number, ];
    export class $ConfigButtonPacket extends $Record implements $ServerboundPacket {
        rotationDirection(): boolean;
        handleOnServer(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$ConfigButtonPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $ConfigButtonPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        option(): $Setting<never>;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$ConfigButtonPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ConfigButtonPacket>;
        constructor(option: $Setting<never>, rotationDirection: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ConfigButtonPacket}.
     */
    export type $ConfigButtonPacket_ = { option?: $Setting<never>, rotationDirection?: boolean,  } | [option?: $Setting<never>, rotationDirection?: boolean, ];
    export class $SwapSlotsPacket extends $Record implements $ServerboundPacket {
        slotA(): number;
        slotB(): number;
        handleOnServer(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$SwapSlotsPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $SwapSlotsPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$SwapSlotsPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SwapSlotsPacket>;
        constructor(slotA: number, slotB: number);
    }
    /**
     * Values that may be interpreted as {@link $SwapSlotsPacket}.
     */
    export type $SwapSlotsPacket_ = { slotB?: number, slotA?: number,  } | [slotB?: number, slotA?: number, ];
    export class $QuickMovePatternPacket extends $Record implements $ServerboundPacket {
        allowedPatternContainers(): $List<number>;
        containerId(): number;
        handleOnServer(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        clickedSlot(): number;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$QuickMovePatternPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $QuickMovePatternPacket>;
        constructor(containerId: number, clickedSlot: number, allowedPatternContainers: $List_<number>);
    }
    /**
     * Values that may be interpreted as {@link $QuickMovePatternPacket}.
     */
    export type $QuickMovePatternPacket_ = { clickedSlot?: number, allowedPatternContainers?: $List_<number>, containerId?: number,  } | [clickedSlot?: number, allowedPatternContainers?: $List_<number>, containerId?: number, ];
    export class $PartLeftClickPacket extends $Record implements $ServerboundPacket {
        alternateUseMode(): boolean;
        handleOnServer(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$PartLeftClickPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $PartLeftClickPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        hitResult(): $BlockHitResult;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$PartLeftClickPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PartLeftClickPacket>;
        constructor(hitResult: $BlockHitResult, alternateUseMode: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PartLeftClickPacket}.
     */
    export type $PartLeftClickPacket_ = { alternateUseMode?: boolean, hitResult?: $BlockHitResult,  } | [alternateUseMode?: boolean, hitResult?: $BlockHitResult, ];
    export class $RequestClosestMeteoritePacket extends $Record implements $ServerboundPacket {
        handleOnServer(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$RequestClosestMeteoritePacket>;
        pos(): $ChunkPos;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$RequestClosestMeteoritePacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RequestClosestMeteoritePacket>;
        constructor(pos: $ChunkPos);
    }
    /**
     * Values that may be interpreted as {@link $RequestClosestMeteoritePacket}.
     */
    export type $RequestClosestMeteoritePacket_ = { pos?: $ChunkPos,  } | [pos?: $ChunkPos, ];
    export class $MEInteractionPacket extends $Record implements $ServerboundPacket {
        containerId(): number;
        handleOnServer(arg0: $ServerPlayer): void;
        serial(): number;
        type(): $CustomPacketPayload$Type<$MEInteractionPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $MEInteractionPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        action(): $InventoryAction;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$MEInteractionPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MEInteractionPacket>;
        constructor(containerId: number, serial: number, action: $InventoryAction_);
    }
    /**
     * Values that may be interpreted as {@link $MEInteractionPacket}.
     */
    export type $MEInteractionPacket_ = { serial?: number, containerId?: number, action?: $InventoryAction_,  } | [serial?: number, containerId?: number, action?: $InventoryAction_, ];
    export class $HotkeyPacket extends $Record implements $ServerboundPacket {
        handleOnServer(arg0: $ServerPlayer): void;
        hotkey(): string;
        type(): $CustomPacketPayload$Type<$HotkeyPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $HotkeyPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$HotkeyPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $HotkeyPacket>;
        constructor(arg0: $Hotkey_);
        constructor(hotkey: string);
    }
    /**
     * Values that may be interpreted as {@link $HotkeyPacket}.
     */
    export type $HotkeyPacket_ = { hotkey?: string,  } | [hotkey?: string, ];
    export class $SelectKeyTypePacket extends $Record implements $ServerboundPacket {
        handleOnServer(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$SelectKeyTypePacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $SelectKeyTypePacket;
        enabled(): boolean;
        write(arg0: $RegistryFriendlyByteBuf): void;
        keyType(): $AEKeyType;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$SelectKeyTypePacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SelectKeyTypePacket>;
        constructor(keyType: $AEKeyType_, enabled: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SelectKeyTypePacket}.
     */
    export type $SelectKeyTypePacket_ = { enabled?: boolean, keyType?: $AEKeyType_,  } | [enabled?: boolean, keyType?: $AEKeyType_, ];
    export class $MouseWheelPacket extends $Record implements $ServerboundPacket {
        wheelUp(): boolean;
        handleOnServer(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$MouseWheelPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $MouseWheelPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$MouseWheelPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MouseWheelPacket>;
        constructor(wheelUp: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MouseWheelPacket}.
     */
    export type $MouseWheelPacket_ = { wheelUp?: boolean,  } | [wheelUp?: boolean, ];
    export class $InventoryActionPacket extends $Record implements $ServerboundPacket {
        extraId(): number;
        handleOnServer(arg0: $ServerPlayer): void;
        slotItem(): $ItemStack;
        slot(): number;
        type(): $CustomPacketPayload$Type<$InventoryActionPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $InventoryActionPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        action(): $InventoryAction;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$InventoryActionPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $InventoryActionPacket>;
        constructor(arg0: $InventoryAction_, arg1: number, arg2: number);
        constructor(action: $InventoryAction_, slot: number, extraId: number, slotItem: $ItemStack_);
        constructor(arg0: $InventoryAction_, arg1: number, arg2: $ItemStack_);
    }
    /**
     * Values that may be interpreted as {@link $InventoryActionPacket}.
     */
    export type $InventoryActionPacket_ = { slotItem?: $ItemStack_, slot?: number, action?: $InventoryAction_, extraId?: number,  } | [slotItem?: $ItemStack_, slot?: number, action?: $InventoryAction_, extraId?: number, ];
    export class $SwitchGuisPacket extends $Record implements $ServerboundPacket {
        newGui(): $MenuType<$ISubMenu>;
        static returnToParentMenu(): $SwitchGuisPacket;
        handleOnServer(arg0: $ServerPlayer): void;
        type(): $CustomPacketPayload$Type<$SwitchGuisPacket>;
        static decode(arg0: $RegistryFriendlyByteBuf): $SwitchGuisPacket;
        write(arg0: $RegistryFriendlyByteBuf): void;
        static openSubMenu(arg0: $MenuType_<$ISubMenu>): $SwitchGuisPacket;
        handleOnServer(arg0: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static TYPE: $CustomPacketPayload$Type<$SwitchGuisPacket>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SwitchGuisPacket>;
        constructor(newGui: $MenuType_<$ISubMenu>);
    }
    /**
     * Values that may be interpreted as {@link $SwitchGuisPacket}.
     */
    export type $SwitchGuisPacket_ = { newGui?: $MenuType_<$ISubMenu>,  } | [newGui?: $MenuType_<$ISubMenu>, ];
}
