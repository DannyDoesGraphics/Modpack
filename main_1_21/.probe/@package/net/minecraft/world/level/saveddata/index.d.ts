import { $File_ } from "@package/java/io";
import { $Supplier, $Supplier_, $BiFunction, $BiFunction_ } from "@package/java/util/function";
import { $DataFixTypes_, $DataFixTypes } from "@package/net/minecraft/util/datafix";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Record } from "@package/java/lang";
export * as maps from "@package/net/minecraft/world/level/saveddata/maps";

declare module "@package/net/minecraft/world/level/saveddata" {
    export class $SavedData {
        /**
         * Sets the dirty state of this `SavedData`, whether it needs saving to disk.
         */
        setDirty(dirty: boolean): void;
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        setDirty(): void;
        save(tag: $CompoundTag_, registries: $HolderLookup$Provider): $CompoundTag;
        save(file: $File_, registries: $HolderLookup$Provider): void;
        /**
         * Whether this `SavedData` needs saving to disk.
         */
        isDirty(): boolean;
        constructor();
    }
    export class $SavedData$Factory<T extends $SavedData> extends $Record {
        type(): $DataFixTypes;
        "constructor"(): $Supplier<T>;
        deserializer(): $BiFunction<$CompoundTag, $HolderLookup$Provider, T>;
        constructor(arg0: $Supplier_<T>, arg1: $BiFunction_<$CompoundTag, $HolderLookup$Provider, T>);
        constructor(arg0: $Supplier_<T>, deserializer: $BiFunction_<$CompoundTag, $HolderLookup$Provider, T>, type: $DataFixTypes_);
    }
    /**
     * Values that may be interpreted as {@link $SavedData$Factory}.
     */
    export type $SavedData$Factory_<T> = { deserializer?: $BiFunction_<$CompoundTag, $HolderLookup$Provider, $SavedData>, type?: $DataFixTypes_, constructor?: $Supplier_<$SavedData>,  } | [deserializer?: $BiFunction_<$CompoundTag, $HolderLookup$Provider, $SavedData>, type?: $DataFixTypes_, constructor?: $Supplier_<$SavedData>, ];
}
