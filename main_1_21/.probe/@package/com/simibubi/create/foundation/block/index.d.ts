import { $LevelAccessor, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $DyeColor_, $Item, $DyeColor } from "@package/net/minecraft/world/item";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $RegistrateBlockLootTables } from "@package/com/tterrag/registrate/providers/loot";
import { $Spliterator, $Iterator, $Map } from "@package/java/util";
import { $NonNullBiConsumer_, $NonNullFunction } from "@package/com/tterrag/registrate/util/nullness";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $BlockEntry } from "@package/com/tterrag/registrate/util/entry";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Holder_, $Holder, $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $DirectionProperty, $Half, $EnumProperty, $StairsShape, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistrateRecipeProvider, $DataGenContext, $RegistrateBlockstateProvider } from "@package/com/tterrag/registrate/providers";
import { $Block_, $Rotation_, $WeatheringCopperStairBlock, $DirectionalBlock, $EntityBlock, $Mirror_, $WeatheringCopper$WeatherState_, $WeatheringCopper$WeatherState, $SimpleWaterloggedBlock, $StairBlock, $Block, $SlabBlock } from "@package/net/minecraft/world/level/block";
import { $Class, $Iterable } from "@package/java/lang";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as connected from "@package/com/simibubi/create/foundation/block/connected";
export * as render from "@package/com/simibubi/create/foundation/block/render";

declare module "@package/com/simibubi/create/foundation/block" {
    export class $DyedBlockList<T extends $Block> implements $Iterable<$BlockEntry<T>> {
        get(arg0: $DyeColor_): $BlockEntry<$BlockEntry<T>>;
        toArray(): $BlockEntry<$BlockEntry<T>>[];
        iterator(): $Iterator<$BlockEntry<$BlockEntry<T>>>;
        contains(arg0: $Block_): boolean;
        spliterator(): $Spliterator<$BlockEntry<T>>;
        forEach(arg0: $Consumer_<$BlockEntry<T>>): void;
        constructor(arg0: $Function_<$DyeColor, $BlockEntry<$BlockEntry<T>>>);
        [Symbol.iterator](): Iterator<$BlockEntry<$BlockEntry<T>>>
    }
    export class $CopperBlockSet$SlabVariant implements $CopperBlockSet$Variant<$SlabBlock> {
        generateBlockState(arg0: $DataGenContext<$Block_, $SlabBlock>, arg1: $RegistrateBlockstateProvider, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        generateLootTable(arg0: $RegistrateBlockLootTables, arg1: $SlabBlock, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        generateRecipes(arg0: $BlockEntry<never>, arg1: $DataGenContext<$Block_, $SlabBlock>, arg2: $RegistrateRecipeProvider): void;
        getFactory(arg0: $CopperBlockSet, arg1: $WeatheringCopper$WeatherState_, arg2: boolean): $NonNullFunction<$BlockBehaviour$Properties, $SlabBlock>;
        getSuffix(): string;
        static INSTANCE: $CopperBlockSet$SlabVariant;
        get suffix(): string;
    }
    export class $WrenchableDirectionalBlock extends $DirectionalBlock implements $IWrenchable {
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
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
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $ProperWaterloggedBlock {
        static withWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): $BlockState;
        static WATERLOGGED: $BooleanProperty;
    }
    export interface $ProperWaterloggedBlock extends $SimpleWaterloggedBlock {
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
    }
    export class $CopperBlockSet$BlockVariant implements $CopperBlockSet$Variant<$Block> {
        generateBlockState(arg0: $DataGenContext<$Block_, $Block_>, arg1: $RegistrateBlockstateProvider, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        generateRecipes(arg0: $BlockEntry<never>, arg1: $DataGenContext<$Block_, $Block_>, arg2: $RegistrateRecipeProvider): void;
        getFactory(arg0: $CopperBlockSet, arg1: $WeatheringCopper$WeatherState_, arg2: boolean): $NonNullFunction<$BlockBehaviour$Properties, $Block>;
        getSuffix(): string;
        generateLootTable(arg0: $RegistrateBlockLootTables, arg1: $Block_, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        static INSTANCE: $CopperBlockSet$BlockVariant;
        get suffix(): string;
    }
    export class $CreateCopperStairBlock extends $StairBlock {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$StairBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$Half>;
        static SHAPE: $EnumProperty<$StairsShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BigOutlines {
        static pick(): void;
        constructor();
    }
    export class $CopperBlockSet$Variant<T extends $Block> {
    }
    export interface $CopperBlockSet$Variant<T extends $Block> {
        generateBlockState(arg0: $DataGenContext<$Block_, T>, arg1: $RegistrateBlockstateProvider, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        generateLootTable(arg0: $RegistrateBlockLootTables, arg1: T, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        generateRecipes(arg0: $BlockEntry<never>, arg1: $DataGenContext<$Block_, T>, arg2: $RegistrateRecipeProvider): void;
        getFactory(arg0: $CopperBlockSet, arg1: $WeatheringCopper$WeatherState_, arg2: boolean): $NonNullFunction<$BlockBehaviour$Properties, T>;
        getSuffix(): string;
        get suffix(): string;
    }
    export class $CopperBlockSet$StairVariant implements $CopperBlockSet$Variant<$StairBlock> {
        generateBlockState(arg0: $DataGenContext<$Block_, $StairBlock>, arg1: $RegistrateBlockstateProvider, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        generateRecipes(arg0: $BlockEntry<never>, arg1: $DataGenContext<$Block_, $StairBlock>, arg2: $RegistrateRecipeProvider): void;
        getFactory(arg0: $CopperBlockSet, arg1: $WeatheringCopper$WeatherState_, arg2: boolean): $NonNullFunction<$BlockBehaviour$Properties, $StairBlock>;
        getSuffix(): string;
        generateLootTable(arg0: $RegistrateBlockLootTables, arg1: $StairBlock, arg2: $CopperBlockSet, arg3: $WeatheringCopper$WeatherState_, arg4: boolean): void;
        static INSTANCE: $CopperBlockSet$StairVariant;
        get suffix(): string;
    }
    export class $ItemUseOverrides {
        static addBlock(arg0: $Block_): void;
        static onBlockActivated(arg0: $PlayerInteractEvent$RightClickBlock): void;
        constructor();
    }
    export class $CopperRegistries {
        static addWaxable(arg0: $Holder_<$Block>, arg1: $Holder_<$Block>): void;
        static getWeatheringView(): $Map<$Holder<$Block>, $Holder<$Block>>;
        static getWaxableView(): $Map<$Holder<$Block>, $Holder<$Block>>;
        static addWeathering(arg0: $Holder_<$Block>, arg1: $Holder_<$Block>): void;
        constructor();
        static get weatheringView(): $Map<$Holder<$Block>, $Holder<$Block>>;
        static get waxableView(): $Map<$Holder<$Block>, $Holder<$Block>>;
    }
    export class $CopperBlockSet {
        static getWeatherStatePrefix(arg0: $WeatheringCopper$WeatherState_): string;
        getEndTextureName(): string;
        hasVariant(arg0: $CopperBlockSet$Variant<never>): boolean;
        getStandard(): $BlockEntry<never>;
        getName(): string;
        get(arg0: $CopperBlockSet$Variant<never>, arg1: $WeatheringCopper$WeatherState_, arg2: boolean): $BlockEntry<never>;
        getVariants(): $CopperBlockSet$Variant<never>[];
        static DEFAULT_VARIANTS: $CopperBlockSet$Variant<never>[];
        constructor(arg0: $AbstractRegistrate<never>, arg1: string, arg2: string, arg3: $CopperBlockSet$Variant<never>[]);
        constructor(arg0: $AbstractRegistrate<never>, arg1: string, arg2: string, arg3: $CopperBlockSet$Variant<never>[], arg4: $NonNullBiConsumer_<$DataGenContext<$Block, never>, $RegistrateRecipeProvider>, arg5: $NonNullBiConsumer_<$WeatheringCopper$WeatherState, $Block>);
        constructor(arg0: $AbstractRegistrate<never>, arg1: string, arg2: string, arg3: $CopperBlockSet$Variant<never>[], arg4: $NonNullBiConsumer_<$DataGenContext<$Block, never>, $RegistrateRecipeProvider>, arg5: string, arg6: $NonNullBiConsumer_<$WeatheringCopper$WeatherState, $Block>);
        constructor(arg0: $AbstractRegistrate<never>, arg1: string, arg2: string, arg3: $CopperBlockSet$Variant<never>[], arg4: string);
        constructor(arg0: $AbstractRegistrate<never>, arg1: string, arg2: string, arg3: $CopperBlockSet$Variant<never>[], arg4: $NonNullBiConsumer_<$DataGenContext<$Block, never>, $RegistrateRecipeProvider>);
        get endTextureName(): string;
        get standard(): $BlockEntry<never>;
        get name(): string;
        get variants(): $CopperBlockSet$Variant<never>[];
    }
    export class $IHaveBigOutline {
    }
    export interface $IHaveBigOutline {
    }
    export class $CreateWeatheringCopperStairBlock extends $WeatheringCopperStairBlock {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$WeatheringCopperStairBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$Half>;
        static SHAPE: $EnumProperty<$StairsShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $WeatheringCopper$WeatherState_, arg1: $BlockBehaviour$Properties);
    }
    export class $IBE<T extends $BlockEntity> {
        static onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): void;
    }
    export interface $IBE<T extends $BlockEntity> extends $EntityBlock {
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntityType(): $BlockEntityType<T>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<T, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<T, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<T>): void;
        getBlockEntityClass(): $Class<T>;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): (T) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): T;
        get blockEntityType(): $BlockEntityType<T>;
        get blockEntityClass(): $Class<T>;
    }
}
