import { $HashCode } from "@package/com/google/common/hash";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Path_, $Path } from "@package/java/nio/file";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Iterable_, $Record, $RuntimeException } from "@package/java/lang";
import { $Collection_ } from "@package/java/util";
import { $DataProvider, $CachedOutput_, $PackOutput } from "@package/net/minecraft/data";

declare module "@package/net/minecraft/data/structures" {
    export class $SnbtDatafixer {
        static main(args: string[]): void;
        constructor();
    }
    export class $NbtToSnbt implements $DataProvider {
        static convertStructure(output: $CachedOutput_, nbtPath: $Path_, name: string, directoryPath: $Path_): $Path;
        static writeSnbt(output: $CachedOutput_, path: $Path_, contents: string): void;
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        constructor(output: $PackOutput, inputFolders: $Collection_<$Path_>);
        get name(): string;
    }
    /**
     * Wraps exceptions thrown while reading structures to include the path of the structure in the exception message.
     */
    export class $SnbtToNbt$StructureConversionException extends $RuntimeException {
    }
    export class $StructureUpdater implements $SnbtToNbt$Filter {
        static update(structureLocationPath: string, tag: $CompoundTag_): $CompoundTag;
        apply(structureLocationPath: string, tag: $CompoundTag_): $CompoundTag;
        constructor();
    }
    export class $SnbtToNbt$Filter {
    }
    export interface $SnbtToNbt$Filter {
        apply(structureLocationPath: string, tag: $CompoundTag_): $CompoundTag;
    }
    /**
     * Values that may be interpreted as {@link $SnbtToNbt$Filter}.
     */
    export type $SnbtToNbt$Filter_ = ((arg0: string, arg1: $CompoundTag) => $CompoundTag_);
    export class $SnbtToNbt implements $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        addFilter(filter: $SnbtToNbt$Filter_): $SnbtToNbt;
        constructor(output: $PackOutput, inputFolders: $Iterable_<$Path>);
        get name(): string;
    }
    export class $SnbtToNbt$TaskResult extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SnbtToNbt$TaskResult}.
     */
    export type $SnbtToNbt$TaskResult_ = { hash?: $HashCode, name?: string, payload?: number[],  } | [hash?: $HashCode, name?: string, payload?: number[], ];
}
