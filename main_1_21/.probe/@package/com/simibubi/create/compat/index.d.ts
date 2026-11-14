import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Supplier, $Supplier_ } from "@package/java/util/function";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Runnable, $Enum } from "@package/java/lang";
export * as computercraft from "@package/com/simibubi/create/compat/computercraft";
export * as dynamictrees from "@package/com/simibubi/create/compat/dynamictrees";
export * as jei from "@package/com/simibubi/create/compat/jei";
export * as trainmap from "@package/com/simibubi/create/compat/trainmap";
export * as curios from "@package/com/simibubi/create/compat/curios";
export * as farmersdelight from "@package/com/simibubi/create/compat/farmersdelight";
export * as thresholdSwitch from "@package/com/simibubi/create/compat/thresholdSwitch";
export * as ftb from "@package/com/simibubi/create/compat/ftb";
export * as inventorySorter from "@package/com/simibubi/create/compat/inventorySorter";
export * as pojav from "@package/com/simibubi/create/compat/pojav";
export * as framedblocks from "@package/com/simibubi/create/compat/framedblocks";
export * as sodium from "@package/com/simibubi/create/compat/sodium";
export * as tconstruct from "@package/com/simibubi/create/compat/tconstruct";

declare module "@package/com/simibubi/create/compat" {
    export class $Mods extends $Enum<$Mods> {
        getBlock(arg0: string): $Block;
        static values(): $Mods[];
        static valueOf(arg0: string): $Mods;
        contains(arg0: $ItemLike_): boolean;
        id(): string;
        rl(arg0: string): $ResourceLocation;
        isLoaded(): boolean;
        getItem(arg0: string): $Item;
        executeIfInstalled(arg0: $Supplier_<$Runnable>): void;
        runIfInstalled<T>(arg0: $Supplier_<$Supplier<T>>): (T) | undefined;
        static BETTEREND: $Mods;
        static FRAMEDBLOCKS: $Mods;
        static COMPUTERCRAFT: $Mods;
        static SODIUM: $Mods;
        static CURIOS: $Mods;
        static OCCULTISM: $Mods;
        static XLPACKETS: $Mods;
        static SOPHISTICATEDBACKPACKS: $Mods;
        static FTBLIBRARY: $Mods;
        static FUNCTIONALSTORAGE: $Mods;
        static TCONSTRUCT: $Mods;
        static JEI: $Mods;
        static FARMERSDELIGHT: $Mods;
        static MODERNUI: $Mods;
        static AETHER_II: $Mods;
        static SOPHISTICATEDSTORAGE: $Mods;
        static JOURNEYMAP: $Mods;
        static DYNAMICTREES: $Mods;
        static PACKETFIXER: $Mods;
        static STORAGEDRAWERS: $Mods;
        static INVENTORYSORTER: $Mods;
        static AETHER: $Mods;
        static FTBCHUNKS: $Mods;
        static XAEROWORLDMAP: $Mods;
        get loaded(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Mods}.
     */
    export type $Mods_ = "aether" | "aether_ii" | "betterend" | "computercraft" | "curios" | "dynamictrees" | "jei" | "functionalstorage" | "occultism" | "packetfixer" | "sophisticatedbackpacks" | "sophisticatedstorage" | "storagedrawers" | "tconstruct" | "framedblocks" | "xlpackets" | "modernui" | "ftbchunks" | "journeymap" | "xaeroworldmap" | "ftblibrary" | "sodium" | "inventorysorter" | "farmersdelight";
}
