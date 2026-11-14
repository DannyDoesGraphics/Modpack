import { $KeyTypeSelection } from "@package/appeng/api/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $Map_, $Map, $List } from "@package/java/util";
import { $AEKeyType, $AEKeyType_ } from "@package/appeng/api/stacks";
import { $PacketWritable } from "@package/appeng/menu/guisync";

declare module "@package/appeng/menu/interfaces" {
    export class $KeyTypeSelectionMenu {
    }
    export interface $KeyTypeSelectionMenu {
        getServerKeyTypeSelection(): $KeyTypeSelection;
        getClientKeyTypeSelection(): $KeyTypeSelectionMenu$SyncedKeyTypes;
        selectKeyType(arg0: $AEKeyType_, arg1: boolean): void;
        get serverKeyTypeSelection(): $KeyTypeSelection;
        get clientKeyTypeSelection(): $KeyTypeSelectionMenu$SyncedKeyTypes;
    }
    export class $KeyTypeSelectionMenu$SyncedKeyTypes extends $Record implements $PacketWritable {
        writeToPacket(arg0: $RegistryFriendlyByteBuf): void;
        enabledSet(): $List<$AEKeyType>;
        keyTypes(): $Map<$AEKeyType, boolean>;
        constructor();
        constructor(keyTypes: $Map_<$AEKeyType_, boolean>);
        constructor(arg0: $RegistryFriendlyByteBuf);
    }
    /**
     * Values that may be interpreted as {@link $KeyTypeSelectionMenu$SyncedKeyTypes}.
     */
    export type $KeyTypeSelectionMenu$SyncedKeyTypes_ = { keyTypes?: $Map_<$AEKeyType_, boolean>,  } | [keyTypes?: $Map_<$AEKeyType_, boolean>, ];
    export class $IProgressProvider {
    }
    export interface $IProgressProvider {
        getMaxProgress(): number;
        getCurrentProgress(): number;
        get maxProgress(): number;
        get currentProgress(): number;
    }
}
