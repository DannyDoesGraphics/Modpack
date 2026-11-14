import { $IStorageProvider_, $MEStorage } from "@package/appeng/api/storage";
import { $IStackWatcher, $IGridNode, $IGridNodeService, $IGridService } from "@package/appeng/api/networking";
import { $KeyCounter, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/networking/storage" {
    export class $IStorageService {
    }
    export interface $IStorageService extends $IGridService {
        invalidateCache(): void;
        getCachedInventory(): $KeyCounter;
        addGlobalStorageProvider(arg0: $IStorageProvider_): void;
        removeGlobalStorageProvider(arg0: $IStorageProvider_): void;
        refreshNodeStorageProvider(arg0: $IGridNode): void;
        refreshGlobalStorageProvider(arg0: $IStorageProvider_): void;
        getInventory(): $MEStorage;
        get cachedInventory(): $KeyCounter;
        get inventory(): $MEStorage;
    }
    export class $IStorageWatcherNode {
    }
    export interface $IStorageWatcherNode extends $IGridNodeService {
        onStackChange(arg0: $AEKey, arg1: number): void;
        updateWatcher(arg0: $IStackWatcher): void;
    }
}
