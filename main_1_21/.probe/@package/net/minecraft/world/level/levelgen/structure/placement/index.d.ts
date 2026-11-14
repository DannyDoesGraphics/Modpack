import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BlockPos, $Holder_, $HolderSet, $Vec3i, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ChunkGeneratorStructureState } from "@package/net/minecraft/world/level/chunk";
import { $Enum, $Record } from "@package/java/lang";
import { $StructureSet } from "@package/net/minecraft/world/level/levelgen/structure";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/structure/placement" {
    export class $StructurePlacement$FrequencyReducer {
    }
    export interface $StructurePlacement$FrequencyReducer {
        shouldGenerate(levelSeed: number, arg1: number, salt: number, regionX: number, regionZ: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $StructurePlacement$FrequencyReducer}.
     */
    export type $StructurePlacement$FrequencyReducer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => boolean);
    export interface $StructurePlacementType<SP> extends RegistryMarked<RegistryTypes.WorldgenStructurePlacementTag, RegistryTypes.WorldgenStructurePlacement> {}
    export class $RandomSpreadType extends $Enum<$RandomSpreadType> implements $StringRepresentable {
        static values(): $RandomSpreadType[];
        static valueOf(arg0: string): $RandomSpreadType;
        evaluate(random: $RandomSource, bound: number): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$RandomSpreadType>;
        static LINEAR: $RandomSpreadType;
        static TRIANGULAR: $RandomSpreadType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RandomSpreadType}.
     */
    export type $RandomSpreadType_ = "linear" | "triangular";
    export class $StructurePlacementType<SP extends $StructurePlacement> {
        static RANDOM_SPREAD: $StructurePlacementType<$RandomSpreadStructurePlacement>;
        static CONCENTRIC_RINGS: $StructurePlacementType<$ConcentricRingsStructurePlacement>;
    }
    export interface $StructurePlacementType<SP extends $StructurePlacement> {
        codec(): $MapCodec<SP>;
    }
    /**
     * Values that may be interpreted as {@link $StructurePlacementType}.
     */
    export type $StructurePlacementType_<SP> = RegistryTypes.WorldgenStructurePlacement | (() => $MapCodec_<SP>);
    export class $StructurePlacement$FrequencyReductionMethod extends $Enum<$StructurePlacement$FrequencyReductionMethod> implements $StringRepresentable {
        shouldGenerate(levelSeed: number, arg1: number, salt: number, regionX: number, regionZ: number): boolean;
        static values(): $StructurePlacement$FrequencyReductionMethod[];
        static valueOf(arg0: string): $StructurePlacement$FrequencyReductionMethod;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$StructurePlacement$FrequencyReductionMethod>;
        static LEGACY_TYPE_3: $StructurePlacement$FrequencyReductionMethod;
        static LEGACY_TYPE_2: $StructurePlacement$FrequencyReductionMethod;
        static LEGACY_TYPE_1: $StructurePlacement$FrequencyReductionMethod;
        static DEFAULT: $StructurePlacement$FrequencyReductionMethod;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructurePlacement$FrequencyReductionMethod}.
     */
    export type $StructurePlacement$FrequencyReductionMethod_ = "default" | "legacy_type_1" | "legacy_type_2" | "legacy_type_3";
    export class $StructurePlacement {
        isStructureChunk(structureState: $ChunkGeneratorStructureState, x: number, z: number): boolean;
        applyAdditionalChunkRestrictions(regionX: number, regionZ: number, levelSeed: number): boolean;
        applyInteractionsWithOtherStructures(structureState: $ChunkGeneratorStructureState, x: number, z: number): boolean;
        getLocatePos(chunkPos: $ChunkPos): $BlockPos;
        type(): $StructurePlacementType<never>;
        static CODEC: $Codec<$StructurePlacement>;
    }
    /**
     * @deprecated
     */
    export class $StructurePlacement$ExclusionZone extends $Record {
        otherSet(): $Holder<$StructureSet>;
        chunkCount(): number;
        static CODEC: $Codec<$StructurePlacement$ExclusionZone>;
        constructor(arg0: $Holder_<$StructureSet>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $StructurePlacement$ExclusionZone}.
     */
    export type $StructurePlacement$ExclusionZone_ = { chunkCount?: number, otherSet?: $Holder_<$StructureSet>,  } | [chunkCount?: number, otherSet?: $Holder_<$StructureSet>, ];
    export class $RandomSpreadStructurePlacement extends $StructurePlacement {
        spreadType(): $RandomSpreadType;
        getPotentialStructureChunk(seed: number, arg1: number, regionX: number): $ChunkPos;
        spacing(): number;
        separation(): number;
        static CODEC: $MapCodec<$RandomSpreadStructurePlacement>;
        constructor(spacing: number, separation: number, spreadType: $RandomSpreadType_, salt: number);
        constructor(locateOffset: $Vec3i, frequencyReductionMethod: $StructurePlacement$FrequencyReductionMethod_, frequency: number, salt: number, exclusionZone: ($StructurePlacement$ExclusionZone_) | undefined, spacing: number, separation: number, spreadType: $RandomSpreadType_);
    }
    export class $ConcentricRingsStructurePlacement extends $StructurePlacement {
        preferredBiomes(): $HolderSet<$Biome>;
        count(): number;
        spread(): number;
        distance(): number;
        static CODEC: $MapCodec<$ConcentricRingsStructurePlacement>;
        constructor(locateOffset: $Vec3i, frequencyReductionMethod: $StructurePlacement$FrequencyReductionMethod_, frequency: number, salt: number, exclusionZone: ($StructurePlacement$ExclusionZone_) | undefined, distance: number, spread: number, count: number, preferredBiomes: $HolderSet_<$Biome>);
        constructor(distance: number, spread: number, count: number, preferrredBiomes: $HolderSet_<$Biome>);
    }
}
