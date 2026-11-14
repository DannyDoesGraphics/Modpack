import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/api/schematic/nbt" {
    export class $PartialSafeNBT {
    }
    export interface $PartialSafeNBT {
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
    }
    /**
     * Values that may be interpreted as {@link $PartialSafeNBT}.
     */
    export type $PartialSafeNBT_ = ((arg0: $CompoundTag, arg1: $HolderLookup$Provider) => void);
    export class $SafeNbtWriterRegistry$SafeNbtWriter {
    }
    export interface $SafeNbtWriterRegistry$SafeNbtWriter {
        writeSafe(arg0: $BlockEntity, arg1: $CompoundTag_, arg2: $HolderLookup$Provider): void;
    }
    /**
     * Values that may be interpreted as {@link $SafeNbtWriterRegistry$SafeNbtWriter}.
     */
    export type $SafeNbtWriterRegistry$SafeNbtWriter_ = ((arg0: $BlockEntity, arg1: $CompoundTag, arg2: $HolderLookup$Provider) => void);
    export class $SafeNbtWriterRegistry {
        static REGISTRY: $SimpleRegistry<$BlockEntityType<never>, $SafeNbtWriterRegistry$SafeNbtWriter>;
    }
}
