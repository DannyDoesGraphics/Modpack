import { $CompoundTag_, $Tag_ } from "@package/net/minecraft/nbt";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";

declare module "@package/com/simibubi/create/content/contraptions/data" {
    export class $ContraptionSyncLimiting {
        static writeSafe(arg0: $CompoundTag_, arg1: $FriendlyByteBuf): void;
        static SIZE_LIMIT: number;
        static XL_PACKETS_LIMIT: number;
        static PACKET_FIXER_LIMIT: number;
        static LIMIT: number;
        static BUFFER: number;
        constructor();
    }
    export class $ContraptionPickupLimiting {
        static isTooLargeForPickup(arg0: $Tag_): boolean;
        static XL_PACKETS_LIMIT: number;
        static PACKET_FIXER_LIMIT: number;
        static LIMIT: number;
        static NBT_LIMIT: number;
        static BUFFER: number;
        constructor();
    }
}
