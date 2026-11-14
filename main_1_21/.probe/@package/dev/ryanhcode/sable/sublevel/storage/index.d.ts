import { $GlobalSavedSubLevelPointer_, $GlobalSavedSubLevelPointer } from "@package/dev/ryanhcode/sable/sublevel/storage/holding";
import { $SubLevelData } from "@package/dev/ryanhcode/sable/sublevel/storage/serialization";
import { $Enum } from "@package/java/lang";
export * as serialization from "@package/dev/ryanhcode/sable/sublevel/storage/serialization";
export * as holding from "@package/dev/ryanhcode/sable/sublevel/storage/holding";

declare module "@package/dev/ryanhcode/sable/sublevel/storage" {
    export class $SubLevelRemovalReason extends $Enum<$SubLevelRemovalReason> {
        static values(): $SubLevelRemovalReason[];
        static valueOf(arg0: string): $SubLevelRemovalReason;
        static UNLOADED: $SubLevelRemovalReason;
        static REMOVED: $SubLevelRemovalReason;
    }
    /**
     * Values that may be interpreted as {@link $SubLevelRemovalReason}.
     */
    export type $SubLevelRemovalReason_ = "unloaded" | "removed";
    export class $HoldingSubLevel {
        pointer(): $GlobalSavedSubLevelPointer;
        data(): $SubLevelData;
        setPointer(arg0: $GlobalSavedSubLevelPointer_): void;
        constructor(arg0: $SubLevelData, arg1: $GlobalSavedSubLevelPointer_);
    }
}
