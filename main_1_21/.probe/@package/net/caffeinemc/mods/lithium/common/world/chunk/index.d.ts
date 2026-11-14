import { $EntityClassGroup } from "@package/net/caffeinemc/mods/lithium/common/entity";
import { $Palette } from "@package/net/minecraft/world/level/chunk";
import { $Collection, $Collection_ } from "@package/java/util";

declare module "@package/net/caffeinemc/mods/lithium/common/world/chunk" {
    export class $CompactingPackedIntegerArray {
    }
    export interface $CompactingPackedIntegerArray {
        lithium$compact<T>(arg0: $Palette<T>, arg1: $Palette<T>, arg2: number[]): void;
    }
    /**
     * Values that may be interpreted as {@link $CompactingPackedIntegerArray}.
     */
    export type $CompactingPackedIntegerArray_ = ((arg0: $Palette<any>, arg1: $Palette<any>, arg2: number[]) => void);
    export class $ClassGroupFilterableList<T> {
    }
    export interface $ClassGroupFilterableList<T> {
        lithium$getAllOfGroupType(arg0: $EntityClassGroup): $Collection<T>;
    }
    /**
     * Values that may be interpreted as {@link $ClassGroupFilterableList}.
     */
    export type $ClassGroupFilterableList_<T> = ((arg0: $EntityClassGroup) => $Collection_<T>);
}
