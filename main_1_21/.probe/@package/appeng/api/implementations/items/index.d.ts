import { $AEColor_, $AEColor } from "@package/appeng/api/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $AccessRestriction, $Actionable_ } from "@package/appeng/api/config";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum, $Record } from "@package/java/lang";
import { $IFacadePart } from "@package/appeng/api/parts";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/api/implementations/items" {
    export class $IStorageComponent {
    }
    export interface $IStorageComponent {
        isStorageComponent(arg0: $ItemStack_): boolean;
        getBytes(arg0: $ItemStack_): number;
    }
    export class $ISpatialStorageCell {
    }
    export interface $ISpatialStorageCell {
        getMaxStoredDim(arg0: $ItemStack_): number;
        getAllocatedPlotId(arg0: $ItemStack_): number;
        isSpatialStorage(arg0: $ItemStack_): boolean;
        doSpatialTransition(arg0: $ItemStack_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockPos_, arg4: number): boolean;
    }
    export class $IMemoryCard {
    }
    export interface $IMemoryCard {
        notifyUser(arg0: $Player, arg1: $MemoryCardMessages_): void;
    }
    /**
     * Values that may be interpreted as {@link $IMemoryCard}.
     */
    export type $IMemoryCard_ = ((arg0: $Player, arg1: $MemoryCardMessages) => void);
    export class $IFacadeItem {
    }
    export interface $IFacadeItem {
        createPartFromItemStack(arg0: $ItemStack_, arg1: $Direction_): $IFacadePart;
        getTextureItem(arg0: $ItemStack_): $ItemStack;
        getTextureBlockState(arg0: $ItemStack_): $BlockState;
    }
    export class $MemoryCardMessages extends $Enum<$MemoryCardMessages> {
        static values(): $MemoryCardMessages[];
        static valueOf(arg0: string): $MemoryCardMessages;
        static SETTINGS_RESET: $MemoryCardMessages;
        static SETTINGS_CLEARED: $MemoryCardMessages;
        static SETTINGS_SAVED: $MemoryCardMessages;
        static INVALID_MACHINE: $MemoryCardMessages;
        static SETTINGS_LOADED: $MemoryCardMessages;
    }
    /**
     * Values that may be interpreted as {@link $MemoryCardMessages}.
     */
    export type $MemoryCardMessages_ = "invalid_machine" | "settings_loaded" | "settings_saved" | "settings_reset" | "settings_cleared";
    export class $IAEItemPowerStorage {
    }
    export interface $IAEItemPowerStorage {
        getAEMaxPower(arg0: $ItemStack_): number;
        getPowerFlow(arg0: $ItemStack_): $AccessRestriction;
        extractAEPower(arg0: $ItemStack_, arg1: number, arg2: $Actionable_): number;
        getAECurrentPower(arg0: $ItemStack_): number;
        injectAEPower(arg0: $ItemStack_, arg1: number, arg2: $Actionable_): number;
        getChargeRate(arg0: $ItemStack_): number;
    }
    export class $MemoryCardColors extends $Record {
        top1(): $AEColor;
        top2(): $AEColor;
        top3(): $AEColor;
        top4(): $AEColor;
        bottom1(): $AEColor;
        bottom2(): $AEColor;
        bottom3(): $AEColor;
        bottom4(): $AEColor;
        get(arg0: number, arg1: number): $AEColor;
        static CODEC: $Codec<$MemoryCardColors>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $MemoryCardColors>;
        static DEFAULT: $MemoryCardColors;
        constructor(top1: $AEColor_, top2: $AEColor_, top3: $AEColor_, top4: $AEColor_, bottom1: $AEColor_, bottom2: $AEColor_, bottom3: $AEColor_, bottom4: $AEColor_);
    }
    /**
     * Values that may be interpreted as {@link $MemoryCardColors}.
     */
    export type $MemoryCardColors_ = { top4?: $AEColor_, top3?: $AEColor_, top2?: $AEColor_, top1?: $AEColor_, bottom4?: $AEColor_, bottom3?: $AEColor_, bottom2?: $AEColor_, bottom1?: $AEColor_,  } | [top4?: $AEColor_, top3?: $AEColor_, top2?: $AEColor_, top1?: $AEColor_, bottom4?: $AEColor_, bottom3?: $AEColor_, bottom2?: $AEColor_, bottom1?: $AEColor_, ];
}
