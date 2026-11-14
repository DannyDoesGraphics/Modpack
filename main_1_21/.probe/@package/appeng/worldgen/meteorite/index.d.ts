import { $LevelAccessor } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $FalloutMode, $FalloutMode_ } from "@package/appeng/worldgen/meteorite/fallout";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $StructurePieceType$ContextlessType } from "@package/net/minecraft/world/level/levelgen/structure/pieces";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $Structure$StructureSettings_, $StructurePiece, $StructureType, $BoundingBox, $Structure$GenerationStub, $Structure, $StructureSet, $Structure$GenerationContext_ } from "@package/net/minecraft/world/level/levelgen/structure";
export * as fallout from "@package/appeng/worldgen/meteorite/fallout";
export * as debug from "@package/appeng/worldgen/meteorite/debug";

declare module "@package/appeng/worldgen/meteorite" {
    export class $CraterType extends $Enum<$CraterType> {
        static values(): $CraterType[];
        static valueOf(arg0: string): $CraterType;
        getFiller(): $Block;
        static LAVA: $CraterType;
        static OBSIDIAN: $CraterType;
        static SNOW: $CraterType;
        static ICE: $CraterType;
        static NONE: $CraterType;
        static NORMAL: $CraterType;
        static WATER: $CraterType;
        get filler(): $Block;
    }
    /**
     * Values that may be interpreted as {@link $CraterType}.
     */
    export type $CraterType_ = "none" | "normal" | "lava" | "obsidian" | "water" | "snow" | "ice";
    export class $MeteoritePlacer {
        static place(arg0: $LevelAccessor, arg1: $PlacedMeteoriteSettings, arg2: $BoundingBox, arg3: $RandomSource): void;
        place(): void;
    }
    export class $MeteoriteBlockPutter {
        put(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        constructor();
    }
    export class $PlacedMeteoriteSettings {
        getFallout(): $FalloutMode;
        getMeteoriteRadius(): number;
        isPureCrater(): boolean;
        isCraterLake(): boolean;
        shouldPlaceCrater(): boolean;
        getPos(): $BlockPos;
        getCraterType(): $CraterType;
        write(arg0: $CompoundTag_): $CompoundTag;
        static read(arg0: $CompoundTag_): $PlacedMeteoriteSettings;
        constructor(arg0: $BlockPos_, arg1: number, arg2: $CraterType_, arg3: $FalloutMode_, arg4: boolean, arg5: boolean);
        get fallout(): $FalloutMode;
        get meteoriteRadius(): number;
        get pureCrater(): boolean;
        get craterLake(): boolean;
        get pos(): $BlockPos;
        get craterType(): $CraterType;
    }
    export class $MeteoriteStructure extends $Structure {
        findGenerationPoint(arg0: $Structure$GenerationContext_): ($Structure$GenerationStub) | undefined;
        static STRUCTURE_SET_KEY: $ResourceKey<$StructureSet>;
        static CODEC: $MapCodec<$MeteoriteStructure>;
        static DIRECT_CODEC: $Codec<$Structure>;
        static ID: $ResourceLocation;
        static BIOME_TAG_KEY: $TagKey<$Biome>;
        static TYPE: $StructureType<$MeteoriteStructure>;
        static KEY: $ResourceKey<$Structure>;
        constructor(arg0: $Structure$StructureSettings_);
    }
    export class $Constants {
        static TAG_FALLOUT: string;
        static TAG_POS: string;
        static TAG_CRATER: string;
        static TAG_RADIUS: string;
        static TAG_LAKE: string;
        static TAG_PURE: string;
        constructor();
    }
    export class $MeteoriteStructurePiece extends $StructurePiece {
        getSettings(): $PlacedMeteoriteSettings;
        isFinalized(): boolean;
        static TYPE: $StructurePieceType$ContextlessType;
        constructor(arg0: $CompoundTag_);
        get settings(): $PlacedMeteoriteSettings;
        get finalized(): boolean;
    }
}
