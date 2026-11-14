import { $DoubleSupplier_ } from "@package/java/util/function";
import { $Item, $ItemStack_, $Item$Properties } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AccessRestriction, $Actionable_ } from "@package/appeng/api/config";
import { $IAEItemPowerStorage } from "@package/appeng/api/implementations/items";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $Map } from "@package/java/util";
import { $AEBaseItem } from "@package/appeng/items";

declare module "@package/appeng/items/tools/powered/powersink" {
    export class $PoweredItemCapabilities implements $IEnergyStorage {
        receiveEnergy(arg0: number, arg1: boolean): number;
        extractEnergy(arg0: number, arg1: boolean): number;
        getEnergyStored(): number;
        getMaxEnergyStored(): number;
        canExtract(): boolean;
        canReceive(): boolean;
        constructor(arg0: $ItemStack_, arg1: $IAEItemPowerStorage);
        get energyStored(): number;
        get maxEnergyStored(): number;
    }
    export class $AEBasePoweredItem extends $AEBaseItem implements $IAEItemPowerStorage {
        getAEMaxPower(arg0: $ItemStack_): number;
        getPowerFlow(arg0: $ItemStack_): $AccessRestriction;
        extractAEPower(arg0: $ItemStack_, arg1: number, arg2: $Actionable_): number;
        getAECurrentPower(arg0: $ItemStack_): number;
        injectAEPower(arg0: $ItemStack_, arg1: number, arg2: $Actionable_): number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $DoubleSupplier_, arg1: $Item$Properties);
    }
}
