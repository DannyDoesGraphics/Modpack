import { $GenericStackInv } from "@package/appeng/helpers/externalstorage";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $MEInventoryHandler } from "@package/appeng/me/storage";
import { $IGridNode } from "@package/appeng/api/networking";
import { $Setting } from "@package/appeng/api/config";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IPartItem, $IPartModel } from "@package/appeng/api/parts";
import { $IConfigManager } from "@package/appeng/api/util";
import { $MEStorage, $IStorageMounts_, $IStorageProvider } from "@package/appeng/api/storage";
import { $IGridTickable, $TickRateModulation, $TickingRequest } from "@package/appeng/api/networking/ticking";
import { $UpgradeablePart } from "@package/appeng/parts/automation";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $MenuType } from "@package/net/minecraft/world/inventory";
import { $ISubMenu } from "@package/appeng/menu";
import { $Enum } from "@package/java/lang";
import { $IConfigInvHost, $IPriorityHost } from "@package/appeng/helpers";

declare module "@package/appeng/parts/storagebus" {
    export class $StorageBusPart$PendingUpdateStatus extends $Enum<$StorageBusPart$PendingUpdateStatus> {
    }
    /**
     * Values that may be interpreted as {@link $StorageBusPart$PendingUpdateStatus}.
     */
    export type $StorageBusPart$PendingUpdateStatus_ = "fast_update" | "slow_update" | "no_update";
    export class $StorageBusConnectedTo extends $Enum<$StorageBusConnectedTo> {
        static values(): $StorageBusConnectedTo[];
        static valueOf(arg0: string): $StorageBusConnectedTo;
        static ME_NETWORK: $StorageBusConnectedTo;
        static NOTHING: $StorageBusConnectedTo;
        static EXTERNAL_STORAGE: $StorageBusConnectedTo;
        static INTERFACE_LOCAL_STORAGE: $StorageBusConnectedTo;
    }
    /**
     * Values that may be interpreted as {@link $StorageBusConnectedTo}.
     */
    export type $StorageBusConnectedTo_ = "nothing" | "me_network" | "interface_local_storage" | "external_storage";
    export class $StorageBusPart extends $UpgradeablePart implements $IGridTickable, $IStorageProvider, $IPriorityHost, $IConfigInvHost {
        getMenuType(): $MenuType<never>;
        getTickingRequest(arg0: $IGridNode): $TickingRequest;
        tickingRequest(arg0: $IGridNode, arg1: number): $TickRateModulation;
        mountInventories(arg0: $IStorageMounts_): void;
        onSettingChanged(arg0: $IConfigManager, arg1: $Setting<never>): void;
        returnToMainMenu(arg0: $Player, arg1: $ISubMenu): void;
        getMainMenuIcon(): $ItemStack;
        getInternalHandler(): $MEStorage;
        getConnectedToDescription(): $Component;
        setPriority(arg0: number): void;
        getPriority(): number;
        getConfig(): $GenericStackInv;
        static MODELS_HAS_CHANNEL: $IPartModel;
        static MODEL_BASE: $ResourceLocation;
        static MODELS_ON: $IPartModel;
        static MODELS_OFF: $IPartModel;
        constructor(arg0: $IPartItem<never>);
        get menuType(): $MenuType<never>;
        get mainMenuIcon(): $ItemStack;
        get internalHandler(): $MEStorage;
        get connectedToDescription(): $Component;
        get config(): $GenericStackInv;
    }
    export class $StorageBusPart$StorageBusInventory extends $MEInventoryHandler {
    }
}
