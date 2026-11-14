import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnergyApi$ItemProvider, $EnergyApi$EnergyStorage } from "@package/rearth/oritech/api/energy";
import { $Minecraft } from "@package/net/minecraft/client";

declare module "@package/rearth/oritech/item/tools/util" {
    export class $ArmorEventHandler {
        static processEvent(arg0: $LivingEntity, arg1: $EquipmentSlot_, arg2: $ItemStack_, arg3: $ItemStack_): void;
    }
    export interface $ArmorEventHandler {
        onEquipped(arg0: $Player, arg1: $ItemStack_): void;
        onUnequipped(arg0: $Player, arg1: $ItemStack_): void;
    }
    export class $Helpers {
        static onClientTickEvent(arg0: $Minecraft): void;
        constructor();
    }
    export class $OritechEnergyItem {
    }
    export interface $OritechEnergyItem extends $EnergyApi$ItemProvider {
        getEnergyCapacity(arg0: $ItemStack_): number;
        getEnergyMaxInput(arg0: $ItemStack_): number;
        getEnergyMaxOutput(arg0: $ItemStack_): number;
        getStoredEnergy(arg0: $ItemStack_): number;
        getEnergyStorage(arg0: $ItemStack_): $EnergyApi$EnergyStorage;
        tryUseEnergy(arg0: $ItemStack_, arg1: number, arg2: $Player): boolean;
    }
}
