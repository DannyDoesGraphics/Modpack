import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Set } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Pair } from "@package/net/createmod/catnip/data";
export * as trains from "@package/com/hlysine/create_power_loader/content/trains";

declare module "@package/com/hlysine/create_power_loader/content" {
    export class $ChunkLoadManager$LoadedChunkPos extends $Record {
        chunkPos(): $ChunkPos;
        dimension(): $ResourceLocation;
        x(): number;
        z(): number;
        constructor(dimension: $ResourceLocation_, chunkPos: $ChunkPos);
        constructor(arg0: $Level_, arg1: number);
        constructor(arg0: $Level_, arg1: $BlockPos_);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number);
    }
    /**
     * Values that may be interpreted as {@link $ChunkLoadManager$LoadedChunkPos}.
     */
    export type $ChunkLoadManager$LoadedChunkPos_ = { chunkPos?: $ChunkPos, dimension?: $ResourceLocation_,  } | [chunkPos?: $ChunkPos, dimension?: $ResourceLocation_, ];
    export class $LoaderType extends $Enum<$LoaderType> implements $StringRepresentable {
        static values(): $LoaderType[];
        static valueOf(arg0: string): $LoaderType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static BRASS: $LoaderType;
        static ANDESITE: $LoaderType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LoaderType}.
     */
    export type $LoaderType_ = "andesite" | "brass";
    export class $LoaderMode extends $Enum<$LoaderMode> implements $StringRepresentable {
        static values(): $LoaderMode[];
        static valueOf(arg0: string): $LoaderMode;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static STATION: $LoaderMode;
        static CONTRAPTION: $LoaderMode;
        static TRAIN: $LoaderMode;
        static STATIC: $LoaderMode;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LoaderMode}.
     */
    export type $LoaderMode_ = "static" | "contraption" | "train" | "station";
    export class $ChunkLoader {
    }
    export interface $ChunkLoader {
        getForcedChunks(): $Set<$ChunkLoadManager$LoadedChunkPos>;
        removeFromManager(): void;
        addToManager(): void;
        getLoaderMode(): $LoaderMode;
        getLoaderType(): $LoaderType;
        getLocation(): $Pair<$ResourceLocation, $BlockPos>;
        get forcedChunks(): $Set<$ChunkLoadManager$LoadedChunkPos>;
        get loaderMode(): $LoaderMode;
        get loaderType(): $LoaderType;
        get location(): $Pair<$ResourceLocation, $BlockPos>;
    }
}
