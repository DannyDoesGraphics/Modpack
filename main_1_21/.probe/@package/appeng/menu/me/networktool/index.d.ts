import { $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $IGrid } from "@package/appeng/api/networking";
import { $NetworkToolMenuHost } from "@package/appeng/items/contents";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ControllerBlockEntity } from "@package/appeng/blockentity/networking";
import { $Slot, $MenuType } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $AEBaseMenu } from "@package/appeng/menu";
import { $Comparator, $List } from "@package/java/util";
import { $AEItemKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/menu/me/networktool" {
    export class $NetworkStatusMenu extends $AEBaseMenu {
        exportGrid(): void;
        canExportGrid(): boolean;
        stateId: number;
        static NETWORK_TOOL_TYPE: $MenuType<$NetworkStatusMenu>;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        static CONTROLLER_TYPE: $MenuType<$NetworkStatusMenu>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $ControllerBlockEntity);
        constructor(arg0: number, arg1: $Inventory, arg2: $NetworkToolMenuHost<any>);
    }
    export class $MachineGroupKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MachineGroupKey}.
     */
    export type $MachineGroupKey_ = { display?: $AEItemKey, missingChannel?: boolean,  } | [display?: $AEItemKey, missingChannel?: boolean, ];
    export class $MachineGroup {
        getIdlePowerUsage(): number;
        isMissingChannel(): boolean;
        setPowerGenerationCapacity(arg0: number): void;
        getCount(): number;
        getDisplay(): $AEItemKey;
        getPowerGenerationCapacity(): number;
        static COMPARATOR: $Comparator<$MachineGroup>;
        get idlePowerUsage(): number;
        get missingChannel(): boolean;
        get count(): number;
        get display(): $AEItemKey;
    }
    export class $NetworkToolMenu extends $AEBaseMenu {
        facadeMode: boolean;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        containerId: number;
        static TYPE: $MenuType<$NetworkToolMenu>;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: number, arg1: $Inventory, arg2: $NetworkToolMenuHost<any>);
    }
    export class $NetworkStatus {
        static fromGrid(arg0: $IGrid): $NetworkStatus;
        getStoredPower(): number;
        getMaxStoredPower(): number;
        write(arg0: $RegistryFriendlyByteBuf): void;
        static read(arg0: $RegistryFriendlyByteBuf): $NetworkStatus;
        getChannelsUsed(): number;
        getAveragePowerInjection(): number;
        getAveragePowerUsage(): number;
        getChannelPower(): number;
        getGroupedMachines(): $List<$MachineGroup>;
        constructor();
        get storedPower(): number;
        get maxStoredPower(): number;
        get channelsUsed(): number;
        get averagePowerInjection(): number;
        get averagePowerUsage(): number;
        get channelPower(): number;
        get groupedMachines(): $List<$MachineGroup>;
    }
}
