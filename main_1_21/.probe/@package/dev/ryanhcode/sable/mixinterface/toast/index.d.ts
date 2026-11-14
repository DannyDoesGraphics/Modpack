import { $GlobalSavedSubLevelPointer_ } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $SubLevelData } from "@package/dev/ryanhcode/sable/sublevel/storage/serialization";
import { $ServerSubLevel } from "@package/dev/ryanhcode/sable/sublevel";

declare module "@package/dev/ryanhcode/sable/mixinterface/toast" {
    export class $SableToastableServer {
    }
    export interface $SableToastableServer {
        sable$reportSubLevelLoadFailure(arg0: $GlobalSavedSubLevelPointer_): void;
        sable$reportSubLevelSaveFailure(arg0: $SubLevelData): void;
        sable$reportSubLevelPhysicsFailure(arg0: $ServerSubLevel): void;
    }
}
