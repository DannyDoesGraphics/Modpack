import { $FeatureConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $ChunkPos, $LevelHeightAccessor } from "@package/net/minecraft/world/level";
import { $CompoundTag, $ListTag_, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $BiomeSource, $Biome } from "@package/net/minecraft/world/level/biome";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $List, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $RegistryAccess, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Record } from "@package/java/lang";
import { $StructurePiece, $StructurePieceAccessor, $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_, $RandomState, $WorldgenRandom } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/structure/pieces" {
    export class $PiecesContainer extends $Record {
        calculateBoundingBox(): $BoundingBox;
        isInsidePiece(pos: $BlockPos_): boolean;
        static load(tag: $ListTag_, context: $StructurePieceSerializationContext_): $PiecesContainer;
        isEmpty(): boolean;
        save(context: $StructurePieceSerializationContext_): $Tag;
        pieces(): $List<$StructurePiece>;
        constructor(pieces: $List_<$StructurePiece>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PiecesContainer}.
     */
    export type $PiecesContainer_ = { pieces?: $List_<$StructurePiece>,  } | [pieces?: $List_<$StructurePiece>, ];
    export class $PieceGeneratorSupplier<C extends $FeatureConfiguration> {
        static checkForBiomeOnTop<C extends $FeatureConfiguration>(heightmapType: $Heightmap$Types_): $Predicate<$PieceGeneratorSupplier$Context<C>>;
        static simple<C extends $FeatureConfiguration>(predicate: $Predicate_<$PieceGeneratorSupplier$Context<C>>, pieceGenerator: $PieceGenerator_<C>): $PieceGeneratorSupplier<C>;
    }
    export interface $PieceGeneratorSupplier<C extends $FeatureConfiguration> {
        createGenerator(context: $PieceGeneratorSupplier$Context_<C>): ($PieceGenerator<C>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $PieceGeneratorSupplier}.
     */
    export type $PieceGeneratorSupplier_<C> = ((arg0: $PieceGeneratorSupplier$Context<C>) => ($PieceGenerator<C>) | undefined);
    export class $PieceGenerator$Context<C extends $FeatureConfiguration> extends $Record {
        chunkPos(): $ChunkPos;
        chunkGenerator(): $ChunkGenerator;
        heightAccessor(): $LevelHeightAccessor;
        structureTemplateManager(): $StructureTemplateManager;
        seed(): number;
        random(): $WorldgenRandom;
        config(): C;
        constructor(arg0: C, arg1: $ChunkGenerator, arg2: $StructureTemplateManager, arg3: $ChunkPos, arg4: $LevelHeightAccessor, arg5: $WorldgenRandom, arg6: number);
    }
    /**
     * Values that may be interpreted as {@link $PieceGenerator$Context}.
     */
    export type $PieceGenerator$Context_<C> = { chunkPos?: $ChunkPos, structureTemplateManager?: $StructureTemplateManager, chunkGenerator?: $ChunkGenerator, heightAccessor?: $LevelHeightAccessor, config?: $FeatureConfiguration, random?: $WorldgenRandom, seed?: number,  } | [chunkPos?: $ChunkPos, structureTemplateManager?: $StructureTemplateManager, chunkGenerator?: $ChunkGenerator, heightAccessor?: $LevelHeightAccessor, config?: $FeatureConfiguration, random?: $WorldgenRandom, seed?: number, ];
    export class $StructurePiecesBuilder implements $StructurePieceAccessor {
        addPiece(piece: $StructurePiece): void;
        findCollisionPiece(box: $BoundingBox): $StructurePiece;
        moveInsideHeights(random: $RandomSource, minY: number, maxY: number): void;
        /**
         * @deprecated
         */
        offsetPiecesVertically(offset: number): void;
        /**
         * @deprecated
         */
        moveBelowSeaLevel(seaLevel: number, minY: number, random: $RandomSource, amount: number): number;
        clear(): void;
        isEmpty(): boolean;
        build(): $PiecesContainer;
        getBoundingBox(): $BoundingBox;
        constructor();
        get empty(): boolean;
        get boundingBox(): $BoundingBox;
    }
    export class $StructurePieceType {
        static NETHER_FORTRESS_BRIDGE_STRAIGHT: $StructurePieceType;
        static NETHER_FORTRESS_STAIRS_ROOM: $StructurePieceType;
        static STRONGHOLD_LEFT_TURN: $StructurePieceType;
        static STRONGHOLD_FIVE_CROSSING: $StructurePieceType;
        static NETHER_FORTRESS_BRIDGE_END_FILLER: $StructurePieceType;
        static OCEAN_MONUMENT_WING_ROOM: $StructurePieceType;
        static JIGSAW: $StructurePieceType;
        static OCEAN_MONUMENT_DOUBLE_YZ_ROOM: $StructurePieceType;
        static BURIED_TREASURE_PIECE: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_CORRIDOR_STAIRS: $StructurePieceType;
        static OCEAN_MONUMENT_BUILDING: $StructurePieceType;
        static NETHER_FORTRESS_MONSTER_THRONE: $StructurePieceType;
        static STRONGHOLD_LIBRARY: $StructurePieceType;
        static STRONGHOLD_ROOM_CROSSING: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_CROSSING: $StructurePieceType;
        static OCEAN_MONUMENT_ENTRY_ROOM: $StructurePieceType;
        static STRONGHOLD_FILLER_CORRIDOR: $StructurePieceType;
        static JUNGLE_PYRAMID_PIECE: $StructurePieceType;
        static MINE_SHAFT_CROSSING: $StructurePieceType;
        static NETHER_FORTRESS_BRIDGE_CROSSING: $StructurePieceType;
        static RUINED_PORTAL: $StructurePieceType;
        static STRONGHOLD_STRAIGHT_STAIRS_DOWN: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_RIGHT_TURN: $StructurePieceType;
        static STRONGHOLD_PORTAL_ROOM: $StructurePieceType;
        static OCEAN_MONUMENT_CORE_ROOM: $StructurePieceType;
        static WOODLAND_MANSION_PIECE: $StructurePieceType;
        static NETHER_FORTRESS_START: $StructurePieceType;
        static OCEAN_MONUMENT_DOUBLE_X_ROOM: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR: $StructurePieceType;
        static STRONGHOLD_CHEST_CORRIDOR: $StructurePieceType;
        static NETHER_FORTRESS_ROOM_CROSSING: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_ENTRANCE: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_LEFT_TURN: $StructurePieceType;
        static OCEAN_MONUMENT_SIMPLE_ROOM: $StructurePieceType;
        static STRONGHOLD_STRAIGHT: $StructurePieceType;
        static MINE_SHAFT_STAIRS: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_STALK_ROOM: $StructurePieceType;
        static MINE_SHAFT_CORRIDOR: $StructurePieceType;
        static OCEAN_MONUMENT_DOUBLE_XY_ROOM: $StructurePieceType;
        static SHIPWRECK_PIECE: $StructurePieceType;
        static OCEAN_MONUMENT_DOUBLE_Z_ROOM: $StructurePieceType;
        static MINE_SHAFT_ROOM: $StructurePieceType;
        static OCEAN_RUIN: $StructurePieceType;
        static STRONGHOLD_PRISON_HALL: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_CORRIDOR_T_BALCONY: $StructurePieceType;
        static OCEAN_MONUMENT_DOUBLE_Y_ROOM: $StructurePieceType;
        static NETHER_FOSSIL: $StructurePieceType;
        static IGLOO: $StructurePieceType;
        static OCEAN_MONUMENT_SIMPLE_TOP_ROOM: $StructurePieceType;
        static STRONGHOLD_STAIRS_DOWN: $StructurePieceType;
        static SWAMPLAND_HUT: $StructurePieceType;
        static DESERT_PYRAMID_PIECE: $StructurePieceType;
        static END_CITY_PIECE: $StructurePieceType;
        static STRONGHOLD_START: $StructurePieceType;
        static OCEAN_MONUMENT_PENTHOUSE: $StructurePieceType;
        static STRONGHOLD_RIGHT_TURN: $StructurePieceType;
    }
    export interface $StructurePieceType {
        load(context: $StructurePieceSerializationContext_, tag: $CompoundTag_): $StructurePiece;
    }
    /**
     * Values that may be interpreted as {@link $StructurePieceType}.
     */
    export type $StructurePieceType_ = RegistryTypes.WorldgenStructurePiece | ((arg0: $StructurePieceSerializationContext, arg1: $CompoundTag) => $StructurePiece);
    export class $StructurePieceType$ContextlessType {
    }
    export interface $StructurePieceType$ContextlessType extends $StructurePieceType {
        load(tag: $CompoundTag_): $StructurePiece;
        load(context: $StructurePieceSerializationContext_, tag: $CompoundTag_): $StructurePiece;
    }
    /**
     * Values that may be interpreted as {@link $StructurePieceType$ContextlessType}.
     */
    export type $StructurePieceType$ContextlessType_ = ((arg0: $CompoundTag) => $StructurePiece);
    export class $StructurePieceType$StructureTemplateType {
    }
    export interface $StructurePieceType$StructureTemplateType extends $StructurePieceType {
        load(structureTemplateManager: $StructureTemplateManager, tag: $CompoundTag_): $StructurePiece;
        load(context: $StructurePieceSerializationContext_, tag: $CompoundTag_): $StructurePiece;
    }
    /**
     * Values that may be interpreted as {@link $StructurePieceType$StructureTemplateType}.
     */
    export type $StructurePieceType$StructureTemplateType_ = ((arg0: $StructureTemplateManager, arg1: $CompoundTag) => $StructurePiece);
    export class $PieceGeneratorSupplier$Context<C extends $FeatureConfiguration> extends $Record {
        chunkPos(): $ChunkPos;
        randomState(): $RandomState;
        chunkGenerator(): $ChunkGenerator;
        heightAccessor(): $LevelHeightAccessor;
        validBiome(): $Predicate<$Holder<$Biome>>;
        structureTemplateManager(): $StructureTemplateManager;
        biomeSource(): $BiomeSource;
        validBiomeOnTop(heightmapType: $Heightmap$Types_): boolean;
        seed(): number;
        config(): C;
        registryAccess(): $RegistryAccess;
        constructor(arg0: $ChunkGenerator, arg1: $BiomeSource, arg2: $RandomState, arg3: number, arg4: $ChunkPos, arg5: C, arg6: $LevelHeightAccessor, arg7: $Predicate_<$Holder<$Biome>>, arg8: $StructureTemplateManager, arg9: $RegistryAccess);
    }
    /**
     * Values that may be interpreted as {@link $PieceGeneratorSupplier$Context}.
     */
    export type $PieceGeneratorSupplier$Context_<C> = { randomState?: $RandomState, biomeSource?: $BiomeSource, structureTemplateManager?: $StructureTemplateManager, chunkGenerator?: $ChunkGenerator, heightAccessor?: $LevelHeightAccessor, registryAccess?: $RegistryAccess, seed?: number, validBiome?: $Predicate_<$Holder<$Biome>>, config?: $FeatureConfiguration, chunkPos?: $ChunkPos,  } | [randomState?: $RandomState, biomeSource?: $BiomeSource, structureTemplateManager?: $StructureTemplateManager, chunkGenerator?: $ChunkGenerator, heightAccessor?: $LevelHeightAccessor, registryAccess?: $RegistryAccess, seed?: number, validBiome?: $Predicate_<$Holder<$Biome>>, config?: $FeatureConfiguration, chunkPos?: $ChunkPos, ];
    export class $PieceGenerator<C extends $FeatureConfiguration> {
    }
    export interface $PieceGenerator<C extends $FeatureConfiguration> {
        generatePieces(builder: $StructurePiecesBuilder, context: $PieceGenerator$Context_<C>): void;
    }
    /**
     * Values that may be interpreted as {@link $PieceGenerator}.
     */
    export type $PieceGenerator_<C> = ((arg0: $StructurePiecesBuilder, arg1: $PieceGenerator$Context<C>) => void);
    export class $StructurePieceSerializationContext extends $Record {
        structureTemplateManager(): $StructureTemplateManager;
        static fromLevel(level: $ServerLevel): $StructurePieceSerializationContext;
        resourceManager(): $ResourceManager;
        registryAccess(): $RegistryAccess;
        constructor(arg0: $ResourceManager, arg1: $RegistryAccess, arg2: $StructureTemplateManager);
    }
    /**
     * Values that may be interpreted as {@link $StructurePieceSerializationContext}.
     */
    export type $StructurePieceSerializationContext_ = { registryAccess?: $RegistryAccess, structureTemplateManager?: $StructureTemplateManager, resourceManager?: $ResourceManager,  } | [registryAccess?: $RegistryAccess, structureTemplateManager?: $StructureTemplateManager, resourceManager?: $ResourceManager, ];
    export interface $StructurePieceType extends RegistryMarked<RegistryTypes.WorldgenStructurePieceTag, RegistryTypes.WorldgenStructurePiece> {}
}
