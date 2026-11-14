import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $GlassPaneCTBehaviour, $CTType, $ConnectedTextureBehaviour, $ConnectedTextureBehaviour$Base } from "@package/com/simibubi/create/foundation/block/connected";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $NonNullSupplier_, $NonNullFunction, $NonNullBiConsumer, $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $BlockBuilder } from "@package/com/tterrag/registrate/builders";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Supplier, $Function } from "@package/java/util/function";
import { $BlockEntry } from "@package/com/tterrag/registrate/util/entry";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Direction$Axis_, $BlockPos_, $Direction_, $Direction$Axis, $IdMapper } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $CreateRegistrate } from "@package/com/simibubi/create/foundation/data";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistrateRecipeProvider, $DataGenContext, $RegistrateBlockstateProvider } from "@package/com/tterrag/registrate/providers";
import { $IronBarsBlock, $Block_, $TransparentBlock, $WallBlock, $RotatedPillarBlock, $StairBlock, $Block, $SlabBlock } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";

declare module "@package/com/simibubi/create/content/decoration/palettes" {
    export class $ConnectedGlassBlock extends $TransparentBlock {
        skipRendering(arg0: $BlockState_, arg1: $BlockState_, arg2: $Direction_): boolean;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$TransparentBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $AllPaletteBlocks {
        static register(): void;
        static SPRUCE_WINDOW: $BlockEntry<$WindowBlock>;
        static INDUSTRIAL_IRON_WINDOW: $BlockEntry<$WindowBlock>;
        static WARPED_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static VERTICAL_FRAMED_GLASS_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static HORIZONTAL_FRAMED_GLASS: $BlockEntry<$ConnectedGlassBlock>;
        static JUNGLE_WINDOW: $BlockEntry<$WindowBlock>;
        static ORNATE_IRON_WINDOW: $BlockEntry<$WindowBlock>;
        static VERTICAL_FRAMED_GLASS: $BlockEntry<$ConnectedGlassBlock>;
        static CRIMSON_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static DARK_OAK_WINDOW: $BlockEntry<$WindowBlock>;
        static WEATHERED_IRON_WINDOW: $BlockEntry<$WindowBlock>;
        static OAK_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static BIRCH_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static TILED_GLASS_PANE: $BlockEntry<$GlassPaneBlock>;
        static MANGROVE_WINDOW: $BlockEntry<$WindowBlock>;
        static BAMBOO_WINDOW: $BlockEntry<$WindowBlock>;
        static ORNATE_IRON_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static DARK_OAK_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static WEATHERED_IRON_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static FRAMED_GLASS: $BlockEntry<$ConnectedGlassBlock>;
        static INDUSTRIAL_IRON_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static OAK_WINDOW: $BlockEntry<$WindowBlock>;
        static BIRCH_WINDOW: $BlockEntry<$WindowBlock>;
        static SPRUCE_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static FRAMED_GLASS_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static ACACIA_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static WARPED_WINDOW: $BlockEntry<$WindowBlock>;
        static MANGROVE_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static CHERRY_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static ACACIA_WINDOW: $BlockEntry<$WindowBlock>;
        static CHERRY_WINDOW: $BlockEntry<$WindowBlock>;
        static HORIZONTAL_FRAMED_GLASS_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static TILED_GLASS: $BlockEntry<$TransparentBlock>;
        static JUNGLE_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static BAMBOO_WINDOW_PANE: $BlockEntry<$ConnectedGlassPaneBlock>;
        static CRIMSON_WINDOW: $BlockEntry<$WindowBlock>;
        constructor();
    }
    export class $PaletteBlockPartial$Slab extends $PaletteBlockPartial<$SlabBlock> {
        static STAIR: $PaletteBlockPartial<$StairBlock>;
        static FOR_POLISHED: $PaletteBlockPartial<never>[];
        static WALL: $PaletteBlockPartial<$WallBlock>;
        static ALL_PARTIALS: $PaletteBlockPartial<never>[];
        static SLAB: $PaletteBlockPartial<$SlabBlock>;
        static UNIQUE_SLAB: $PaletteBlockPartial<$SlabBlock>;
    }
    export class $ConnectedGlassPaneBlock extends $GlassPaneBlock {
        skipRendering(arg0: $BlockState_, arg1: $BlockState_, arg2: $Direction_): boolean;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$IronBarsBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST: $BooleanProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static SOUTH: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static EAST: $BooleanProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $PaletteBlockPartial$Stairs extends $PaletteBlockPartial<$StairBlock> {
        static STAIR: $PaletteBlockPartial<$StairBlock>;
        static FOR_POLISHED: $PaletteBlockPartial<never>[];
        static WALL: $PaletteBlockPartial<$WallBlock>;
        static ALL_PARTIALS: $PaletteBlockPartial<never>[];
        static SLAB: $PaletteBlockPartial<$SlabBlock>;
        static UNIQUE_SLAB: $PaletteBlockPartial<$SlabBlock>;
    }
    export class $WindowBlock extends $ConnectedGlassBlock {
        isTranslucent(): boolean;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$TransparentBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: boolean);
        get translucent(): boolean;
    }
    export class $LayeredBlock extends $RotatedPillarBlock {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$RotatedPillarBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $GlassPaneBlock extends $IronBarsBlock {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$IronBarsBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST: $BooleanProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static SOUTH: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static EAST: $BooleanProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $PalettesVariantEntry {
        registeredPartials: $ImmutableList<$BlockEntry<$Block>>;
        registeredBlocks: $ImmutableList<$BlockEntry<$Block>>;
        constructor(arg0: string, arg1: $AllPaletteStoneTypes_);
    }
    export class $WeatheredIronWindowPaneCTBehaviour extends $GlassPaneCTBehaviour {
        constructor();
    }
    export class $PaletteBlockPartial<B extends $Block> {
        create(arg0: string, arg1: $PaletteBlockPattern, arg2: $BlockEntry<$Block_>, arg3: $AllPaletteStoneTypes_): $BlockBuilder<B, $CreateRegistrate>;
        static STAIR: $PaletteBlockPartial<$StairBlock>;
        static FOR_POLISHED: $PaletteBlockPartial<never>[];
        static WALL: $PaletteBlockPartial<$WallBlock>;
        static ALL_PARTIALS: $PaletteBlockPartial<never>[];
        static SLAB: $PaletteBlockPartial<$SlabBlock>;
        static UNIQUE_SLAB: $PaletteBlockPartial<$SlabBlock>;
    }
    export class $ConnectedPillarBlock extends $LayeredBlock {
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        static setConnection(arg0: $BlockState_, arg1: $Direction_, arg2: boolean): $BlockState;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        static connection(arg0: $Direction$Axis_, arg1: $Direction_): $BooleanProperty;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        static getConnection(arg0: $BlockState_, arg1: $Direction_): boolean;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$RotatedPillarBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST: $BooleanProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static SOUTH: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static EAST: $BooleanProperty;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $PaletteBlockPartial$Wall extends $PaletteBlockPartial<$WallBlock> {
        static STAIR: $PaletteBlockPartial<$StairBlock>;
        static FOR_POLISHED: $PaletteBlockPartial<never>[];
        static WALL: $PaletteBlockPartial<$WallBlock>;
        static ALL_PARTIALS: $PaletteBlockPartial<never>[];
        static SLAB: $PaletteBlockPartial<$SlabBlock>;
        static UNIQUE_SLAB: $PaletteBlockPartial<$SlabBlock>;
    }
    export class $PaletteBlockPattern$CTs extends $Enum<$PaletteBlockPattern$CTs> {
        static values(): $PaletteBlockPattern$CTs[];
        static valueOf(arg0: string): $PaletteBlockPattern$CTs;
        static CAP: $PaletteBlockPattern$CTs;
        static PILLAR: $PaletteBlockPattern$CTs;
        static LAYERED: $PaletteBlockPattern$CTs;
        type: $CTType;
    }
    /**
     * Values that may be interpreted as {@link $PaletteBlockPattern$CTs}.
     */
    export type $PaletteBlockPattern$CTs_ = "pillar" | "cap" | "layered";
    export class $PaletteBlockPattern {
        addRecipes(arg0: $NonNullSupplier_<$Block>, arg1: $DataGenContext<$Block_, $Block_>, arg2: $RegistrateRecipeProvider): void;
        cubeBottomTop(arg0: string): $PaletteBlockPattern$IBlockStateProvider;
        cubeColumn(arg0: string): $PaletteBlockPattern$IBlockStateProvider;
        cubeAll(arg0: string): $PaletteBlockPattern$IBlockStateProvider;
        getBlockStateGenerator(): $PaletteBlockPattern$IPatternBlockStateGenerator;
        getBlockTags(): $TagKey<$Block>[];
        getItemTags(): $TagKey<$Item>[];
        getBlockFactory(): $NonNullFunction<$BlockBehaviour$Properties, $Block>;
        getPartials(): $PaletteBlockPartial<$Block>[];
        createCTBehaviour(arg0: string): ($Supplier<$ConnectedTextureBehaviour>) | undefined;
        pillar(arg0: string): $PaletteBlockPattern$IBlockStateProvider;
        getTexture(arg0: number): string;
        isTranslucent(): boolean;
        static CUT: $PaletteBlockPattern;
        static STANDARD_RANGE: $PaletteBlockPattern[];
        static VANILLA_RANGE: $PaletteBlockPattern[];
        static POLISHED: $PaletteBlockPattern;
        static PILLAR: $PaletteBlockPattern;
        static BRICKS: $PaletteBlockPattern;
        static LAYERED: $PaletteBlockPattern;
        static SMALL_BRICKS: $PaletteBlockPattern;
        constructor();
        get blockStateGenerator(): $PaletteBlockPattern$IPatternBlockStateGenerator;
        get blockTags(): $TagKey<$Block>[];
        get itemTags(): $TagKey<$Item>[];
        get blockFactory(): $NonNullFunction<$BlockBehaviour$Properties, $Block>;
        get partials(): $PaletteBlockPartial<$Block>[];
        get translucent(): boolean;
    }
    export class $PaletteBlockPattern$PatternNameType extends $Enum<$PaletteBlockPattern$PatternNameType> {
    }
    /**
     * Values that may be interpreted as {@link $PaletteBlockPattern$PatternNameType}.
     */
    export type $PaletteBlockPattern$PatternNameType_ = "prefix" | "suffix" | "wrap";
    export class $AllPaletteStoneTypes extends $Enum<$AllPaletteStoneTypes> {
        getBaseBlock(): $NonNullSupplier<$Block>;
        static values(): $AllPaletteStoneTypes[];
        static valueOf(arg0: string): $AllPaletteStoneTypes;
        static register(arg0: $CreateRegistrate): void;
        getVariants(): $PalettesVariantEntry;
        static DRIPSTONE: $AllPaletteStoneTypes;
        static GRANITE: $AllPaletteStoneTypes;
        baseBlock: $NonNullSupplier<$Block>;
        static SCORCHIA: $AllPaletteStoneTypes;
        static TUFF: $AllPaletteStoneTypes;
        static VERIDIUM: $AllPaletteStoneTypes;
        static DEEPSLATE: $AllPaletteStoneTypes;
        static DIORITE: $AllPaletteStoneTypes;
        static LIMESTONE: $AllPaletteStoneTypes;
        variantTypes: $PaletteBlockPattern[];
        static OCHRUM: $AllPaletteStoneTypes;
        static CRIMSITE: $AllPaletteStoneTypes;
        static ANDESITE: $AllPaletteStoneTypes;
        static ASURINE: $AllPaletteStoneTypes;
        materialTag: $TagKey<$Item>;
        static SCORIA: $AllPaletteStoneTypes;
        static CALCITE: $AllPaletteStoneTypes;
        get variants(): $PalettesVariantEntry;
    }
    /**
     * Values that may be interpreted as {@link $AllPaletteStoneTypes}.
     */
    export type $AllPaletteStoneTypes_ = "granite" | "diorite" | "andesite" | "calcite" | "dripstone" | "deepslate" | "tuff" | "asurine" | "crimsite" | "limestone" | "ochrum" | "scoria" | "scorchia" | "veridium";
    export class $WeatheredIronWindowCTBehaviour extends $ConnectedTextureBehaviour$Base {
        constructor();
    }
    export class $PaletteBlockPattern$IPatternBlockStateGenerator {
    }
    export interface $PaletteBlockPattern$IPatternBlockStateGenerator extends $Function<$PaletteBlockPattern, $Function<string, $PaletteBlockPattern$IBlockStateProvider>> {
    }
    /**
     * Values that may be interpreted as {@link $PaletteBlockPattern$IPatternBlockStateGenerator}.
     */
    export type $PaletteBlockPattern$IPatternBlockStateGenerator_ = (() => void);
    export class $PaletteBlockPattern$IBlockStateProvider {
    }
    export interface $PaletteBlockPattern$IBlockStateProvider extends $NonNullBiConsumer<$DataGenContext<$Block, $Block>, $RegistrateBlockstateProvider> {
    }
    /**
     * Values that may be interpreted as {@link $PaletteBlockPattern$IBlockStateProvider}.
     */
    export type $PaletteBlockPattern$IBlockStateProvider_ = (() => void);
}
