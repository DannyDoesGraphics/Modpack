import { $Direction } from "@package/net/minecraft/core";
import { $IEnergyStorage } from "@package/net/neoforged/neoforge/energy";
import { $BlockCapability, $EntityCapability, $ItemCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/dev/technici4n/grandpower/api" {
    export class $ILongEnergyStorage {
        static of(arg0: $IEnergyStorage): $ILongEnergyStorage;
        static ITEM: $ItemCapability<$ILongEnergyStorage, void>;
        static ENTITY: $EntityCapability<$ILongEnergyStorage, $Direction>;
        static BLOCK: $BlockCapability<$ILongEnergyStorage, $Direction>;
    }
    export interface $ILongEnergyStorage extends $IEnergyStorage {
        /**
         * @deprecated
         */
        receiveEnergy(arg0: number, arg1: boolean): number;
        /**
         * @deprecated
         */
        extractEnergy(arg0: number, arg1: boolean): number;
        /**
         * @deprecated
         */
        getEnergyStored(): number;
        /**
         * @deprecated
         */
        getMaxEnergyStored(): number;
        receive(arg0: number, arg1: boolean): number;
        getCapacity(): number;
        extract(arg0: number, arg1: boolean): number;
        getAmount(): number;
        get energyStored(): number;
        get maxEnergyStored(): number;
        get capacity(): number;
        get amount(): number;
    }
}
