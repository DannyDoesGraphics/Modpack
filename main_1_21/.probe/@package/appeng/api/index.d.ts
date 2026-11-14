import { $MEStorage } from "@package/appeng/api/storage";
import { $Direction } from "@package/net/minecraft/core";
import { $IInWorldGridNodeHost } from "@package/appeng/api/networking";
import { $ICrankable, $ICraftingMachine } from "@package/appeng/api/implementations/blockentities";
import { $GenericInternalInventory } from "@package/appeng/api/behaviors";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
export * as networking from "@package/appeng/api/networking";
export * as ids from "@package/appeng/api/ids";
export * as features from "@package/appeng/api/features";
export * as util from "@package/appeng/api/util";
export * as config from "@package/appeng/api/config";
export * as storage from "@package/appeng/api/storage";
export * as integrations from "@package/appeng/api/integrations";
export * as behaviors from "@package/appeng/api/behaviors";
export * as stacks from "@package/appeng/api/stacks";
export * as orientation from "@package/appeng/api/orientation";
export * as parts from "@package/appeng/api/parts";
export * as implementations from "@package/appeng/api/implementations";
export * as crafting from "@package/appeng/api/crafting";
export * as inventories from "@package/appeng/api/inventories";
export * as movable from "@package/appeng/api/movable";
export * as upgrades from "@package/appeng/api/upgrades";
export * as client from "@package/appeng/api/client";
export * as components from "@package/appeng/api/components";

declare module "@package/appeng/api" {
    export class $AECapabilities {
        static ME_STORAGE: $BlockCapability<$MEStorage, $Direction>;
        static CRAFTING_MACHINE: $BlockCapability<$ICraftingMachine, $Direction>;
        static IN_WORLD_GRID_NODE_HOST: $BlockCapability<$IInWorldGridNodeHost, void>;
        static GENERIC_INTERNAL_INV: $BlockCapability<$GenericInternalInventory, $Direction>;
        static CRANKABLE: $BlockCapability<$ICrankable, $Direction>;
    }
}
