import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleType, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $ConductorWhistleFlagBlock, $ConductorWhistleFlagBlockEntity } from "@package/com/railwayteam/railways/content/conductor/whistle";
import { $LiteralCommandNode } from "@package/com/mojang/brigadier/tree";
import { $NarrowGaugeBogeyBlock } from "@package/com/railwayteam/railways/content/custom_bogeys/blocks/narrow";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $InvisibleBogeyBlockEntity, $InvisibleBogeyBlock } from "@package/com/railwayteam/railways/content/custom_bogeys/special/invisible";
import { $MinecartWorkbench, $MinecartJukebox } from "@package/com/railwayteam/railways/content/minecarts";
import { $ConductorEntity, $ConductorCapItem } from "@package/com/railwayteam/railways/content/conductor";
import { $Lazy } from "@package/net/neoforged/neoforge/common/util";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $EdgePointType } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Medium202TrailingBogeyBlock, $Medium404TrailingBogeyBlock, $MediumQuadrupleWheelBogeyBlock, $MediumTripleWheelBogeyBlock, $MediumBogeyBlock, $MediumQuintupleWheelBogeyBlock } from "@package/com/railwayteam/railways/content/custom_bogeys/blocks/standard/medium";
import { $AllShapes$Builder } from "@package/com/simibubi/create";
import { $ConnectedTextureBehaviour$ContextRequirement, $CTType, $CTSpriteShiftEntry } from "@package/com/simibubi/create/foundation/block/connected";
import { $Item, $CreativeModeTab$ItemDisplayParameters_, $CreativeModeTab_, $Item_, $CreativeModeTab, $DyeColor, $DyeColor_, $ItemStack_, $CreativeModeTab$DisplayItemsGenerator, $CreativeModeTab$Output_ } from "@package/net/minecraft/world/item";
import { $SemaphoreBlock, $SemaphoreBlockEntity } from "@package/com/railwayteam/railways/content/semaphore";
import { $PaintBrushItem, $PaintPitcherItem } from "@package/com/railwayteam/railways/content/palettes/painting";
import { $MonoBogeyBlockEntity, $InvisibleMonoBogeyBlock, $MonoBogeyBlock, $InvisibleMonoBogeyBlockEntity } from "@package/com/railwayteam/railways/content/custom_bogeys/special/monobogey";
import { $AbstractBogeyBlock, $BogeyStyle$Builder, $BogeyStyle } from "@package/com/simibubi/create/content/trains/bogey";
import { $TrackCouplerBlockEntity, $TrackCoupler, $TrackCouplerBlock } from "@package/com/railwayteam/railways/content/coupling/coupler";
import { $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $TrackCouplerDisplaySource } from "@package/com/railwayteam/railways/content/coupling";
import { $DoubleAxleBogeyBlock, $TripleAxleBogeyBlock, $SingleAxleBogeyBlock } from "@package/com/railwayteam/railways/content/custom_bogeys/blocks/standard";
import { $SharedSuggestionProvider, $CommandBuildContext, $CommandSourceStack } from "@package/net/minecraft/commands";
import { $BlockSetType } from "@package/net/minecraft/world/level/block/state/properties";
import { $TrackSwitchBlock$SwitchState_, $SwitchDisplaySource, $TrackSwitchBlock, $TrackSwitchBlockEntity, $TrackSwitch } from "@package/com/railwayteam/railways/content/switches";
import { $HandcarBlock } from "@package/com/railwayteam/railways/content/handcar";
import { $CasingCollisionBlock, $CasingCollisionBlockEntity } from "@package/com/railwayteam/railways/content/custom_tracks/casing";
import { $SemaphoreDisplayTarget } from "@package/com/railwayteam/railways/content/distant_signals";
import { $CRBogeyBlockEntity } from "@package/com/railwayteam/railways/content/custom_bogeys/blocks/base/be";
import { $ScreenElement } from "@package/net/createmod/catnip/gui/element";
import { $VoxelShaper } from "@package/net/createmod/catnip/math";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $SmokestackStyle, $SmokestackStyle$Context } from "@package/com/railwayteam/railways/content/smokestack";
import { $MountedToolboxContainer } from "@package/com/railwayteam/railways/content/conductor/toolbox";
import { $LargeCreateStyle0100BogeyBlock, $LargeCreateStyle080BogeyBlock, $LargeCreateStyle040BogeyBlock, $LargeCreateStyle060BogeyBlock, $LargeCreateStyle0120BogeyBlock } from "@package/com/railwayteam/railways/content/custom_bogeys/blocks/standard/large";
import { $VariableSmokeStackBlock, $SmokeStackExtenderBlock } from "@package/com/railwayteam/railways/content/smokestack/block/variable";
import { $WideGaugeComicallyLargeBogeyBlock, $WideGaugeBogeyBlock } from "@package/com/railwayteam/railways/content/custom_bogeys/blocks/wide";
import { $TrackMaterial, $TrackBlock, $TrackMaterial$TrackType, $TrackShape, $TrackMaterial$TrackType$TrackBlockFactory_ } from "@package/com/simibubi/create/content/trains/track";
import { $HashMap, $Map, $Spliterator, $List, $Set, $Iterator, $EnumMap } from "@package/java/util";
import { $HeadstockBlock, $HeadstockStyle, $CopycatHeadstockBlockEntity, $CopycatHeadstockBlock, $HeadstockBlockEntity, $CopycatHeadstockBarsBlock } from "@package/com/railwayteam/railways/content/buffer/headstock";
import { $BiConsumer_, $Supplier, $Consumer_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $BlockEntry, $MenuEntry, $BlockEntityEntry, $FluidEntry, $EntityEntry, $RegistryEntry, $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Registry } from "@package/net/minecraft/core";
import { $GenericCrossingBlockEntity, $GenericCrossingBlock } from "@package/com/railwayteam/railways/content/custom_tracks/generic_crossing";
import { $SmokeStackBlock, $DieselSmokeStackBlock } from "@package/com/railwayteam/railways/content/smokestack/block";
import { $Enum, $Iterable, $Record, $Object } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $EnumFilledList } from "@package/com/railwayteam/railways/base";
import { $SequencedAssemblyItem } from "@package/com/simibubi/create/content/processing/sequenced";
import { $Couple, $Pair } from "@package/net/createmod/catnip/data";
import { $PalettesSlidingDoorBlockEntity } from "@package/com/railwayteam/railways/content/palettes/doors";
import { $TagKey } from "@package/net/minecraft/tags";
import { $VentBlock } from "@package/com/railwayteam/railways/content/conductor/vent";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $PalettesColor, $PalettesColor_ } from "@package/com/railwayteam/railways/content/palettes";
import { $LinkPinBlock$Style, $GenericDyeableSingleBufferBlock, $LinkPinBlock } from "@package/com/railwayteam/railways/content/buffer/single_deco";
import { $CategoryEntry } from "@package/com/railwayteam/railways/api/bogeymenu/v0/entry";
import { $PacketSet } from "@package/com/railwayteam/railways/multiloader";
import { $PonderTagRegistrationHelper } from "@package/net/createmod/ponder/api/registration";
import { $RemoteLensItem } from "@package/com/railwayteam/railways/content/conductor/remote_lens";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DieselSmokeStackBlockEntity, $SmokeStackBlockEntity } from "@package/com/railwayteam/railways/content/smokestack/block/be";
import { $DisplaySource, $DisplayTarget } from "@package/com/simibubi/create/api/behaviour/display";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $TrackBuffer, $NarrowTrackBufferBlock, $BlockStateBlockItemGroup, $TrackBufferBlockEntity, $StandardTrackBufferBlock, $WideTrackBufferBlock, $MonoTrackBufferBlock, $DyeableBlockEntity, $WoodVariantTrackBufferBlockEntity } from "@package/com/railwayteam/railways/content/buffer";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $VirtualFluid } from "@package/com/simibubi/create/content/fluids";
import { $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
export * as neoforge from "@package/com/railwayteam/railways/registry/neoforge";
export * as commands from "@package/com/railwayteam/railways/registry/commands";

declare module "@package/com/railwayteam/railways/registry" {
    export class $CRPalettes$TransformerProvider {
    }
    export interface $CRPalettes$TransformerProvider {
    }
    /**
     * Values that may be interpreted as {@link $CRPalettes$TransformerProvider}.
     */
    export type $CRPalettes$TransformerProvider_ = (() => void);
    export class $CRKeys extends $Enum<$CRKeys> {
        static altDown(): boolean;
        static isMouseButtonDown(arg0: number): boolean;
        static ctrlDown(): boolean;
        isPressed(): boolean;
        getBoundKey(): string;
        static shiftDown(): boolean;
        getBoundCode(): number;
        getKeybind(): $KeyMapping;
        static fixBinds(): void;
        static values(): $CRKeys[];
        static valueOf(arg0: string): $CRKeys;
        static register(): void;
        static isKeyDown(arg0: number): boolean;
        static CYCLE_MENU: $CRKeys;
        static NON_CONFLICTING_KEYMAPPINGS: $Set<$KeyMapping>;
        static BOGEY_MENU: $CRKeys;
        get pressed(): boolean;
        get boundKey(): string;
        get boundCode(): number;
        get keybind(): $KeyMapping;
    }
    /**
     * Values that may be interpreted as {@link $CRKeys}.
     */
    export type $CRKeys_ = "bogey_menu" | "cycle_menu";
    export class $CRPalettes$WindowTypeList<T> extends $EnumFilledList<$CRPalettes$WindowType, T> {
        constructor(arg0: $Function_<$CRPalettes$WindowType, T>);
    }
    export class $CRFluids {
        static paintSource(): $Fluid;
        static register(): void;
        static PAINT: $FluidEntry<$VirtualFluid>;
        constructor();
    }
    export class $CRCreativeModeTabs$Tabs extends $Enum<$CRCreativeModeTabs$Tabs> {
        static values(): $CRCreativeModeTabs$Tabs[];
        static valueOf(arg0: string): $CRCreativeModeTabs$Tabs;
        getKey(): $ResourceKey<$CreativeModeTab>;
        static MAIN: $CRCreativeModeTabs$Tabs;
        static TRACK: $CRCreativeModeTabs$Tabs;
        static PALETTES: $CRCreativeModeTabs$Tabs;
        get key(): $ResourceKey<$CreativeModeTab>;
    }
    /**
     * Values that may be interpreted as {@link $CRCreativeModeTabs$Tabs}.
     */
    export type $CRCreativeModeTabs$Tabs_ = "main" | "track" | "palettes";
    export class $CRPalettes$DyedOnlyPalettesColorList<T> extends $CRPalettes$PalettesColorList<T> {
        constructor(arg0: $Function_<$PalettesColor, T>);
    }
    export class $CRTags {
        static optionalTag<T>(arg0: $Registry<T>, arg1: $ResourceLocation_): $TagKey<T>;
        static provideLangEntries(arg0: $BiConsumer_<string, string>): void;
        static register(): void;
        constructor();
    }
    export class $CRPalettes$PalettesColorList<T> extends $EnumFilledList<$PalettesColor, T> {
        constructor(arg0: $Function_<$PalettesColor, T>);
    }
    export class $CRPalettes$CyclingStyleList<T> implements $Iterable<T> {
        iterator(): $Iterator<T>;
        spliterator(): $Spliterator<T>;
        forEach(arg0: $Consumer_<T>): void;
        constructor(arg0: $Function_<$CRPalettes$Styles, T>);
        constructor(arg0: $CRPalettes$CycleGroupCategory_, arg1: $Function_<$CRPalettes$Styles, T>);
        [Symbol.iterator](): Iterator<T>
    }
    export class $CRCreativeModeTabs$TabInfo extends $Record {
        key(): $ResourceKey<$CreativeModeTab>;
        tab(): $CreativeModeTab;
        constructor(key: $ResourceKey_<$CreativeModeTab>, tab: $CreativeModeTab_);
    }
    /**
     * Values that may be interpreted as {@link $CRCreativeModeTabs$TabInfo}.
     */
    export type $CRCreativeModeTabs$TabInfo_ = { key?: $ResourceKey_<$CreativeModeTab>, tab?: $CreativeModeTab_,  } | [key?: $ResourceKey_<$CreativeModeTab>, tab?: $CreativeModeTab_, ];
    export class $CRBogeyStyles {
        static styleFitsTrack(arg0: $BogeyStyle, arg1: $TrackMaterial$TrackType): boolean;
        static getMapped(arg0: $BogeyStyle, arg1: $TrackMaterial$TrackType): ($BogeyStyle) | undefined;
        static getMapped(arg0: $BogeyStyle, arg1: $TrackMaterial$TrackType, arg2: boolean): ($BogeyStyle) | undefined;
        static getNextBlock(arg0: $BogeyStyle): $AbstractBogeyBlock<never>;
        static mapReverse(arg0: $BogeyStyle, arg1: $BogeyStyle): void;
        static registerCategory(arg0: string, arg1: string): $CategoryEntry;
        static registerCategory(arg0: $ResourceLocation_): $CategoryEntry;
        static registerCategory(arg0: string): $CategoryEntry;
        static listUnder(arg0: $BogeyStyle, arg1: $BogeyStyle): void;
        static hideInSelectionMenu(arg0: $BogeyStyle): boolean;
        static getSubStyles(arg0: $BogeyStyle): $List<$BogeyStyle>;
        static map(arg0: $BogeyStyle, arg1: $TrackMaterial$TrackType, arg2: $BogeyStyle, arg3: boolean): void;
        static map(arg0: $BogeyStyle, arg1: $TrackMaterial$TrackType, arg2: $BogeyStyle): void;
        static register(): void;
        static create(arg0: string, arg1: string): $BogeyStyle$Builder;
        static create(arg0: string, arg1: $ResourceLocation_): $BogeyStyle$Builder;
        static create(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $BogeyStyle$Builder;
        static MODERN: $BogeyStyle;
        static MEDIUM_10_0_10_TENDER: $BogeyStyle;
        static MONOBOGEY: $BogeyStyle;
        static LARGE_CREATE_STYLED_0_10_0: $BogeyStyle;
        static LARGE_CREATE_STYLED_0_12_0: $BogeyStyle;
        static COILSPRING: $BogeyStyle;
        static QUINTUPLEAXLE_CYCLE_GROUP: string;
        static DOUBLEAXLE_CYCLE_GROUP: string;
        static QUINTUPLEAXLE_CATEGORY: $CategoryEntry;
        static WIDE_DEFAULT: $BogeyStyle;
        static MEDIUM_STANDARD: $BogeyStyle;
        static MEDIUM_QUINTUPLE_WHEEL: $BogeyStyle;
        static MEDIUM_8_0_8_TENDER: $BogeyStyle;
        static HEAVYWEIGHT: $BogeyStyle;
        static MEDIUM_2_0_2_TRAILING: $BogeyStyle;
        static INVISIBLE_MONOBOGEY: $BogeyStyle;
        static SINGLEAXLE_CYCLE_GROUP: string;
        static NARROW_DOUBLE_SCOTCH: $BogeyStyle;
        static MEDIUM_QUADRUPLE_WHEEL: $BogeyStyle;
        static SINGLEAXLE: $BogeyStyle;
        static MEDIUM_SINGLE_WHEEL: $BogeyStyle;
        static Y25: $BogeyStyle;
        static LARGE_CREATE_STYLED_0_6_0: $BogeyStyle;
        static MEDIUM_TRIPLE_WHEEL: $BogeyStyle;
        static LARGE_CREATE_STYLED_0_4_0: $BogeyStyle;
        static QUADRUPLEAXLE_CATEGORY: $CategoryEntry;
        static MEDIUM_4_0_4_TRAILING: $BogeyStyle;
        static NARROW_DEFAULT: $BogeyStyle;
        static LARGE_CREATE_STYLED_0_8_0: $BogeyStyle;
        static SINGLEAXLE_CATEGORY: $CategoryEntry;
        static TRIPLEAXLE_CATEGORY: $CategoryEntry;
        static ARCHBAR: $BogeyStyle;
        static SEXTUPLEAXLE_CATEGORY: $CategoryEntry;
        static WIDE_COMICALLY_LARGE: $BogeyStyle;
        static MEDIUM_6_0_6_TENDER: $BogeyStyle;
        static INVISIBLE: $BogeyStyle;
        static BLOMBERG: $BogeyStyle;
        static TRIPLEAXLE_CYCLE_GROUP: string;
        static QUADRUPLEAXLE_CYCLE_GROUP: string;
        static STANDARD_CATEGORY: $CategoryEntry;
        static FREIGHT: $BogeyStyle;
        static HANDCAR: $BogeyStyle;
        static DOUBLEAXLE_CATEGORY: $CategoryEntry;
        static LEAFSPRING: $BogeyStyle;
        static MEDIUM_6_0_6_TRAILING: $BogeyStyle;
        static SEXTUPLEAXLE_CYCLE_GROUP: string;
        static PASSENGER: $BogeyStyle;
        static RADIAL: $BogeyStyle;
        constructor();
    }
    export class $CRDataFixers {
        static register(): void;
        constructor();
    }
    export class $CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering}.
     */
    export type $CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering_ = { anchor?: $Item_, type?: $CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type_, item?: $Item_,  } | [anchor?: $Item_, type?: $CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type_, item?: $Item_, ];
    export class $CRExtraRegistration {
        static platformSpecificRegistration(): void;
        static addVentAsCopycat(arg0: $BlockEntityType_<never>): void;
        static addSignalSource(arg0: $Block_): void;
        static registeredVentAsCopycat: boolean;
        static registeredSignalSource: boolean;
        constructor();
    }
    export class $CRGuiTextures extends $Enum<$CRGuiTextures> implements $ScreenElement {
        static getForSwitch(arg0: $TrackSwitchBlock$SwitchState_, arg1: boolean): $CRGuiTextures;
        static values(): $CRGuiTextures[];
        static valueOf(arg0: string): $CRGuiTextures;
        bind(): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        render(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        static BOGEY_MENU_SCROLL_BAR_DISABLED: $CRGuiTextures;
        static TRAIN_HUD_SWITCH_LOCKED: $CRGuiTextures;
        static TRAIN_HUD_SWITCH_LEFT: $CRGuiTextures;
        static TRAIN_HUD_SWITCH_RIGHT: $CRGuiTextures;
        static BOGEY_MENU_SCROLL_BAR: $CRGuiTextures;
        static TRAIN_HUD_SWITCH_STRAIGHT_WRONG: $CRGuiTextures;
        static TRAIN_HUD_SWITCH_RIGHT_WRONG: $CRGuiTextures;
        static TRAIN_HUD_SWITCH_LEFT_WRONG: $CRGuiTextures;
        static TRAIN_HUD_SWITCH_ANDESITE: $CRGuiTextures;
        static FONT_COLOR: number;
        width: number;
        location: $ResourceLocation;
        startY: number;
        static TRAIN_HUD_SWITCH_BRASS: $CRGuiTextures;
        startX: number;
        static TRAIN_HUD_SWITCH_STRAIGHT: $CRGuiTextures;
        static BOGEY_MENU: $CRGuiTextures;
        height: number;
    }
    /**
     * Values that may be interpreted as {@link $CRGuiTextures}.
     */
    export type $CRGuiTextures_ = "train_hud_switch_brass" | "train_hud_switch_andesite" | "train_hud_switch_left" | "train_hud_switch_straight" | "train_hud_switch_right" | "train_hud_switch_left_wrong" | "train_hud_switch_straight_wrong" | "train_hud_switch_right_wrong" | "train_hud_switch_locked" | "bogey_menu" | "bogey_menu_scroll_bar" | "bogey_menu_scroll_bar_disabled";
    export class $CRItems {
        static makeItemTag(arg0: string, arg1: string): $TagKey<$Item>;
        static woolByColor(arg0: $DyeColor_): $Item;
        static register(): void;
        static REMOTE_LENS: $ItemEntry<$RemoteLensItem>;
        static ITEM_INCOMPLETE_CONDUCTOR_CAP: $EnumMap<$DyeColor, $ItemEntry<$SequencedAssemblyItem>>;
        static ITEM_INCOMPLETE_TRACK: $Map<$TrackMaterial, $ItemEntry<$SequencedAssemblyItem>>;
        static PAINT_BRUSH: $ItemEntry<$PaintBrushItem>;
        static CONDUCTOR_CAPS: $TagKey<$Item>;
        static SANDY_PITCHER: $ItemEntry<$PaintPitcherItem>;
        static FILLED_PITCHERS: $List<$ItemEntry<$PaintPitcherItem>>;
        static ITEM_BENCHCART: $ItemEntry<$Item>;
        static ITEM_JUKEBOXCART: $ItemEntry<$Item>;
        static EMPTY_PAINT_PITCHER: $ItemEntry<$Item>;
        static ITEM_CONDUCTOR_CAP: $EnumMap<$DyeColor, $ItemEntry<$ConductorCapItem>>;
        constructor();
    }
    export class $CRSpriteShifts {
        static getSmokebox(arg0: $CRPalettes$Wrapping_): $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static register(): void;
        static IRON_WRAPPED_LOCOMETAL: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static BOILER_SIDE: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static SLASHED_LOCOMETAL: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static BRASS_WRAPPED_BOILER_SIDE: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static BRASS_WRAPPED_SMOKEBOX: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static BRASS_WRAPPED_LOCOMETAL: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static FUEL_TANK: $CTSpriteShiftEntry;
        static FUEL_TANK_TOP: $CTSpriteShiftEntry;
        static SMOKEBOX: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static IRON_WRAPPED_SMOKEBOX: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static IRON_WRAPPED_BOILER_SIDE: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static LOCOMETAL_VENT: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static COPPER_WRAPPED_SMOKEBOX: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static COPPER_WRAPPED_LOCOMETAL: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static FUEL_TANK_INNER: $CTSpriteShiftEntry;
        static RIVETED_LOCOMETAL_PILLAR: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static WINDOWS: $CRPalettes$WindowTypeList<$CRPalettes$PalettesColorList<$CTSpriteShiftEntry>>;
        static COPPER_WRAPPED_BOILER_SIDE: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        static RIVETED_LOCOMETAL: $EnumMap<$PalettesColor, $CTSpriteShiftEntry>;
        constructor();
    }
    export class $CRPonderTags {
        static register(arg0: $PonderTagRegistrationHelper<$ResourceLocation_>): void;
        constructor();
    }
    export class $CRPalettes$StyledList<T> extends $EnumFilledList<$CRPalettes$Styles, T> {
        constructor(arg0: $Function_<$CRPalettes$Styles, T>);
    }
    export class $CRPalettes$CycleGroupCategory extends $Enum<$CRPalettes$CycleGroupCategory> {
        static values(): $CRPalettes$CycleGroupCategory[];
        static valueOf(arg0: string): $CRPalettes$CycleGroupCategory;
        getTag(arg0: $PalettesColor_): $TagKey<$Item>;
        getSerializedName(): string;
        static WRAPPED_COPPER: $CRPalettes$CycleGroupCategory;
        baseStyle: $Supplier<$CRPalettes$Styles>;
        static LADDERS: $CRPalettes$CycleGroupCategory;
        static WRAPPED_BRASS: $CRPalettes$CycleGroupCategory;
        static DOORS: $CRPalettes$CycleGroupCategory;
        static WINDOWS: $CRPalettes$CycleGroupCategory;
        static WRAPPED_IRON: $CRPalettes$CycleGroupCategory;
        static HAZARD_STRIPES_WHITE: $CRPalettes$CycleGroupCategory;
        langName: string;
        static HAZARD_STRIPES_BLACK: $CRPalettes$CycleGroupCategory;
        static BASE: $CRPalettes$CycleGroupCategory;
        get serializedName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CRPalettes$CycleGroupCategory}.
     */
    export type $CRPalettes$CycleGroupCategory_ = "base" | "wrapped_brass" | "wrapped_copper" | "wrapped_iron" | "ladders" | "doors" | "windows" | "hazard_stripes_black" | "hazard_stripes_white";
    export class $CRDisplayTargets {
        static register(): void;
        static SEMAPHORE: $RegistryEntry<$DisplayTarget, $SemaphoreDisplayTarget>;
        constructor();
    }
    export class $CRPackets {
        static PACKETS: $PacketSet;
        constructor();
    }
    export class $CRFluids$PaintFluidType extends $FluidType {
        static SIZE: $Lazy<number>;
        static BUCKET_VOLUME: number;
    }
    export class $CRPonderIndex {
        static register(arg0: $Object): void;
        constructor();
    }
    export class $CRPalettes$Wrapping extends $Enum<$CRPalettes$Wrapping> {
        static values(): $CRPalettes$Wrapping[];
        static valueOf(arg0: string): $CRPalettes$Wrapping;
        prefix(arg0: string): string;
        static BRASS: $CRPalettes$Wrapping;
        static COPPER: $CRPalettes$Wrapping;
        static IRON: $CRPalettes$Wrapping;
    }
    /**
     * Values that may be interpreted as {@link $CRPalettes$Wrapping}.
     */
    export type $CRPalettes$Wrapping_ = "brass" | "copper" | "iron";
    export class $CRPalettes$Styles extends $Enum<$CRPalettes$Styles> {
        get(arg0: $DyeColor_): $BlockEntry<never>;
        get(arg0: $PalettesColor_): $BlockEntry<never>;
        static values(): $CRPalettes$Styles[];
        static valueOf(arg0: string): $CRPalettes$Styles;
        contains(arg0: $Block_): boolean;
        static RUNG_LADDER: $CRPalettes$Styles;
        static FLAT_SLASHED: $CRPalettes$Styles;
        static SLIDING_DOOR: $CRPalettes$Styles;
        static PILLAR: $CRPalettes$Styles;
        static BOILER: $CRPalettes$Styles;
        static FLAT_RIVETED: $CRPalettes$Styles;
        static BRASS_WRAPPED_SLASHED: $CRPalettes$Styles;
        static IRON_WRAPPED_BOILER: $CRPalettes$Styles;
        static FOLDING_DOOR: $CRPalettes$Styles;
        static TRAPDOOR: $CRPalettes$Styles;
        static FOUR_PANE_WINDOW: $CRPalettes$Styles;
        static HAZARD_STRIPES_DIAGONAL_BLACK: $CRPalettes$Styles;
        static HINGED_DOOR: $CRPalettes$Styles;
        dyeGroupBlockTag: $TagKey<$Block>;
        static VENT: $CRPalettes$Styles;
        static ROUND_PANE_WINDOW: $CRPalettes$Styles;
        static PLATED: $CRPalettes$Styles;
        static RIVETED: $CRPalettes$Styles;
        static BRASS_WRAPPED_SMOKEBOX: $CRPalettes$Styles;
        static SINGLE_PANE_WINDOW: $CRPalettes$Styles;
        static TWO_PANE_WINDOW: $CRPalettes$Styles;
        static BRASS_WRAPPED_BOILER: $CRPalettes$Styles;
        static COPPER_WRAPPED_SLASHED: $CRPalettes$Styles;
        static HAZARD_STRIPES_CHEVRON_WHITE: $CRPalettes$Styles;
        static SLASHED: $CRPalettes$Styles;
        static SMOKEBOX: $CRPalettes$Styles;
        static IRON_WRAPPED_SMOKEBOX: $CRPalettes$Styles;
        static END_LADDER: $CRPalettes$Styles;
        static COPPER_WRAPPED_SMOKEBOX: $CRPalettes$Styles;
        static COPPER_WRAPPED_BOILER: $CRPalettes$Styles;
        static HAZARD_STRIPES_DIAGONAL_WHITE: $CRPalettes$Styles;
        static HAZARD_STRIPES_CHEVRON_BLACK: $CRPalettes$Styles;
        static IRON_WRAPPED_SLASHED: $CRPalettes$Styles;
        dyeGroupLang: string;
        static FLYWHEEL: $CRPalettes$Styles;
        dyeGroupTag: $TagKey<$Item>;
        cycleGroupCategory: $CRPalettes$CycleGroupCategory;
    }
    /**
     * Values that may be interpreted as {@link $CRPalettes$Styles}.
     */
    export type $CRPalettes$Styles_ = "riveted" | "slashed" | "brass_wrapped_slashed" | "copper_wrapped_slashed" | "iron_wrapped_slashed" | "vent" | "flat_riveted" | "flat_slashed" | "plated" | "pillar" | "smokebox" | "brass_wrapped_smokebox" | "copper_wrapped_smokebox" | "iron_wrapped_smokebox" | "boiler" | "brass_wrapped_boiler" | "copper_wrapped_boiler" | "iron_wrapped_boiler" | "flywheel" | "end_ladder" | "rung_ladder" | "trapdoor" | "hinged_door" | "sliding_door" | "folding_door" | "round_pane_window" | "single_pane_window" | "two_pane_window" | "four_pane_window" | "hazard_stripes_diagonal_black" | "hazard_stripes_chevron_black" | "hazard_stripes_diagonal_white" | "hazard_stripes_chevron_white";
    export class $CRBlockPartials$TrackCasingSpec {
        getFor(arg0: $TrackMaterial$TrackType | null): $CRBlockPartials$TrackCasingSpec;
        getXShift(arg0: $TrackMaterial$TrackType | null): number;
        getXShift(): number;
        getTopSurfacePixelHeight(arg0: $TrackMaterial$TrackType | null, arg1: boolean): number;
        getTopSurfacePixelHeight(arg0: boolean): number;
        getZShift(): number;
        getZShift(arg0: $TrackMaterial$TrackType | null): number;
        addTransform(arg0: number, arg1: number): $CRBlockPartials$TrackCasingSpec;
        addTransform(arg0: $CRBlockPartials$ModelTransform_): $CRBlockPartials$TrackCasingSpec;
        withTrackType(arg0: $TrackMaterial$TrackType, arg1: $CRBlockPartials$TrackCasingSpec | null): $CRBlockPartials$TrackCasingSpec;
        withAltSpec(arg0: $CRBlockPartials$TrackCasingSpec | null): $CRBlockPartials$TrackCasingSpec;
        overlayShift(arg0: number, arg1: number): $CRBlockPartials$TrackCasingSpec;
        getAltSpec(): $CRBlockPartials$TrackCasingSpec;
        getAltSpec(arg0: $TrackMaterial$TrackType | null): $CRBlockPartials$TrackCasingSpec;
        getNonNullAltSpec(arg0: $TrackMaterial$TrackType | null): $CRBlockPartials$TrackCasingSpec;
        copy(): $CRBlockPartials$TrackCasingSpec;
        transform: $CRBlockPartials$ModelTransform;
        model: $PartialModel;
        additionalTransforms: $List<$CRBlockPartials$ModelTransform>;
        constructor(arg0: $PartialModel, arg1: number);
        constructor(arg0: $PartialModel, arg1: $CRBlockPartials$ModelTransform_, arg2: number);
    }
    export class $CRCommands {
        static register(arg0: $CommandDispatcher<$CommandSourceStack>, arg1: $CommandBuildContext): void;
        constructor();
    }
    export class $CRCTTypes extends $Enum<$CRCTTypes> implements $CTType {
        getSheetSize(): number;
        getContextRequirement(): $ConnectedTextureBehaviour$ContextRequirement;
        static values(): $CRCTTypes[];
        static valueOf(arg0: string): $CRCTTypes;
        getId(): $ResourceLocation;
        static VERTICAL_PINKMACHINE: $CRCTTypes;
        get sheetSize(): number;
        get contextRequirement(): $ConnectedTextureBehaviour$ContextRequirement;
        get id(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $CRCTTypes}.
     */
    export type $CRCTTypes_ = "vertical_pinkmachine";
    export class $CRBlocks$Holder<T> {
    }
    export class $CRPalettes$Styles$ChildTransformer implements $CRPalettes$TransformerProvider {
    }
    export class $CRTags$NameSpace extends $Enum<$CRTags$NameSpace> {
        static values(): $CRTags$NameSpace[];
        static valueOf(arg0: string): $CRTags$NameSpace;
        static MOD: $CRTags$NameSpace;
        alwaysDatagenDefault: boolean;
        optionalDefault: boolean;
        id: string;
    }
    /**
     * Values that may be interpreted as {@link $CRTags$NameSpace}.
     */
    export type $CRTags$NameSpace_ = "mod";
    export class $CRBlockEntities {
        static register(): void;
        static BRASS_SWITCH: $BlockEntityEntry<$TrackSwitchBlockEntity>;
        static TRACK_BUFFER: $BlockEntityEntry<$TrackBufferBlockEntity>;
        static COPYCAT_HEADSTOCK: $BlockEntityEntry<$CopycatHeadstockBlockEntity>;
        static DIESEL_SMOKE_STACK: $BlockEntityEntry<$DieselSmokeStackBlockEntity>;
        static GENERIC_CROSSING: $BlockEntityEntry<$GenericCrossingBlockEntity>;
        static BOGEY: $BlockEntityEntry<$CRBogeyBlockEntity>;
        static ANDESITE_SWITCH: $BlockEntityEntry<$TrackSwitchBlockEntity>;
        static INVISIBLE_BOGEY: $BlockEntityEntry<$InvisibleBogeyBlockEntity>;
        static PALETTES_SLIDING_DOOR: $BlockEntityEntry<$PalettesSlidingDoorBlockEntity>;
        static SMOKE_STACK: $BlockEntityEntry<$SmokeStackBlockEntity>;
        static TRACK_BUFFER_WOOD_VARIANT: $BlockEntityEntry<$WoodVariantTrackBufferBlockEntity>;
        static TRACK_COUPLER: $BlockEntityEntry<$TrackCouplerBlockEntity>;
        static SEMAPHORE: $BlockEntityEntry<$SemaphoreBlockEntity>;
        static HEADSTOCK: $BlockEntityEntry<$HeadstockBlockEntity>;
        static MONO_BOGEY: $BlockEntityEntry<$MonoBogeyBlockEntity>;
        static CASING_COLLISION: $BlockEntityEntry<$CasingCollisionBlockEntity>;
        static INVISIBLE_MONO_BOGEY: $BlockEntityEntry<$InvisibleMonoBogeyBlockEntity>;
        static DYEABLE: $BlockEntityEntry<$DyeableBlockEntity>;
        static CONDUCTOR_WHISTLE_FLAG: $BlockEntityEntry<$ConductorWhistleFlagBlockEntity>;
        constructor();
    }
    export class $CRBlockSetTypes {
        static register(): void;
        static LOCOMETAL: $BlockSetType;
        constructor();
    }
    export class $CRSounds {
        static register(): void;
        static HANDCAR_COGS: $RegistryEntry<$SoundEvent, never>;
        static CONDUCTOR_WHISTLE: $RegistryEntry<$SoundEvent, never>;
        constructor();
    }
    export class $CRIcons extends $AllIcons {
        static I_SKIP_BLOCK_ENTITIES: $AllIcons;
        static I_PARTIAL_REQUESTS: $AllIcons;
        static I_RESPECT_NBT: $AllIcons;
        static I_FULL_REQUESTS: $AllIcons;
        static I_SEQ_REPEAT: $AllIcons;
        static I_3x3: $AllIcons;
        static I_INSERTED: $AllIcons;
        static I_CONFIG_SAVE: $AllIcons;
        static I_FOLLOW_DIAGONAL: $AllIcons;
        static I_FX_SURFACE_OFF: $AllIcons;
        static I_COUPLING_COUPLE: $CRIcons;
        static I_CART_ROTATE: $AllIcons;
        static I_DONT_REPLACE: $AllIcons;
        static I_FX_SURFACE_ON: $AllIcons;
        static VALUE_BOX_HOVER_8PX: $AllIcons;
        static I_TUNNEL_RANDOMIZE: $AllIcons;
        static I_MTD_SLOW_MODE: $AllIcons;
        static I_ADD_INVERTED_ATTRIBUTE: $AllIcons;
        static I_TOOL_DEPLOY: $AllIcons;
        static VALUE_BOX_HOVER_4PX: $AllIcons;
        static I_ROTATE_CCW: $AllIcons;
        static I_PATTERN_SOLID: $AllIcons;
        static I_CLEAR: $AllIcons;
        static I_WHITELIST_AND: $AllIcons;
        static I_REPLACE_EMPTY: $AllIcons;
        static I_CONFIRM: $AllIcons;
        static I_ROLLER_PAVE: $AllIcons;
        static I_PATTERN_CHANCE_75: $AllIcons;
        static I_WHITELIST_NOT: $AllIcons;
        static I_MTD_CLOSE: $AllIcons;
        static I_PAUSE: $AllIcons;
        static I_PRIORITY_VERY_HIGH: $AllIcons;
        static I_TRASH: $AllIcons;
        static I_MOVE_PLACE_RETURNED: $AllIcons;
        static I_OPEN_FOLDER: $AllIcons;
        static I_DICE: $AllIcons;
        static I_MTD_SCAN: $AllIcons;
        static I_MOVE_GAUGE: $AllIcons;
        static I_SWAP_TRACKS: $CRIcons;
        static I_CONFIG_DISCARD: $AllIcons;
        static I_PLACE: $AllIcons;
        static I_TOOL_ROTATE: $AllIcons;
        static I_RMB: $AllIcons;
        static I_CLEAR_CHECKED: $AllIcons;
        static I_TUNNEL_FORCED_ROUND_ROBIN: $AllIcons;
        static I_FAVORITE: $CRIcons;
        static I_WHITELIST: $AllIcons;
        static I_FLIP: $AllIcons;
        static I_DOOR_SPECIAL_INVERTED: $CRIcons;
        static I_ROTATE_PLACE: $AllIcons;
        static I_PLACEMENT_SETTINGS: $AllIcons;
        static I_REFRESH: $AllIcons;
        static I_FILL: $AllIcons;
        static I_FX_BLEND: $AllIcons;
        static I_DOOR_NORMAL: $CRIcons;
        static I_SKIP_MISSING: $AllIcons;
        static I_CONFIG_OPEN: $AllIcons;
        static I_PATTERN_CHANCE_50: $AllIcons;
        static I_SEND_ONLY: $AllIcons;
        static I_PRIORITY_HIGH: $AllIcons;
        static I_NARROW: $CRIcons;
        static I_CART_ROTATE_PAUSED: $AllIcons;
        static I_SWITCH_MANUAL: $CRIcons;
        static I_TUNNEL_ROUND_ROBIN: $AllIcons;
        static ICON_ATLAS: $ResourceLocation;
        static I_CONFIG_PREV: $AllIcons;
        static I_ROLLER_FILL: $AllIcons;
        static I_TUNNEL_PREFER_NEAREST: $AllIcons;
        static I_MTD_USER_MODE: $AllIcons;
        static I_WHITELIST_OR: $AllIcons;
        static I_ARM_FORCED_ROUND_ROBIN: $AllIcons;
        static I_ROLLER_WIDE_FILL: $AllIcons;
        static I_CONFIG_LOCKED: $AllIcons;
        static I_COUPLING_BOTH: $CRIcons;
        static I_TUNNEL_FORCED_SPLIT: $AllIcons;
        static I_COUPLING_DECOUPLE: $CRIcons;
        static I_BLACKLIST: $AllIcons;
        static I_REPLACE_SOLID: $AllIcons;
        static I_REPLACE: $AllIcons;
        static I_FX_FIELD_ON: $AllIcons;
        static I_ROTATE_NEVER_PLACE: $AllIcons;
        static I_TOOL_MOVE_XZ: $AllIcons;
        static I_SEARCH_UP: $CRIcons;
        static I_FAVORITED: $CRIcons;
        static VALUE_BOX_HOVER_6PX: $AllIcons;
        static I_FX_FIELD_OFF: $AllIcons;
        static I_PLAY: $AllIcons;
        static I_MOVE_NEVER_PLACE: $AllIcons;
        static I_FLATTEN: $AllIcons;
        static I_SCROLL: $AllIcons;
        static I_MTD_RIGHT: $AllIcons;
        static I_NONE: $AllIcons;
        static I_TUNNEL_SYNCHRONIZE: $AllIcons;
        static I_PRIORITY_VERY_LOW: $AllIcons;
        static I_TOOL_MIRROR: $AllIcons;
        static I_SWITCH_AUTO: $CRIcons;
        static I_TUNNEL_SPLIT: $AllIcons;
        static I_FX_BLEND_OFF: $AllIcons;
        static I_CART_ROTATE_LOCKED: $AllIcons;
        static ICON_ATLAS_SIZE: number;
        static I_PRIORITY_LOW: $AllIcons;
        static I_CONFIG_BACK: $AllIcons;
        static I_MTD_REPLAY: $AllIcons;
        static I_DISABLE: $AllIcons;
        static I_CONFIG_NEXT: $AllIcons;
        static I_CONFIG_UNLOCKED: $AllIcons;
        static I_TOOL_MOVE_Y: $AllIcons;
        static I_PASSIVE: $AllIcons;
        static I_MOVE_PLACE: $AllIcons;
        static I_ADD: $AllIcons;
        static I_MTD_LEFT: $AllIcons;
        static I_PATTERN_CHECKERED_INVERSED: $AllIcons;
        static I_ATTACHED: $AllIcons;
        static I_ROTATE_PLACE_RETURNED: $AllIcons;
        static I_SCHEMATIC: $AllIcons;
        static I_CENTERED: $AllIcons;
        static I_PATTERN_CHANCE_25: $AllIcons;
        static I_STANDARD: $CRIcons;
        static I_PATTERN_CHECKERED: $AllIcons;
        static I_STOP: $AllIcons;
        static I_ARM_ROUND_ROBIN: $AllIcons;
        static I_ACTIVE: $AllIcons;
        static I_SEARCH_DOWN: $CRIcons;
        static I_LMB: $AllIcons;
        static I_MINUTE_HAND_FIRST: $AllIcons;
        static I_SEND_AND_RECEIVE: $AllIcons;
        static I_ARM_PREFER_FIRST: $AllIcons;
        static I_DOOR_SPECIAL: $CRIcons;
        static I_HOUR_HAND_FIRST: $AllIcons;
        static I_IGNORE_NBT: $AllIcons;
        static I_OVERLAY: $AllIcons;
        static I_VIEW_SCHEDULE: $AllIcons;
        static I_TARGET: $AllIcons;
        static I_FOLLOW_MATERIAL: $AllIcons;
        static I_TOOLBOX: $AllIcons;
        static I_WIDE: $CRIcons;
        static I_DOOR_MANUAL: $CRIcons;
        static I_HOUR_HAND_FIRST_24: $AllIcons;
        static I_CONFIG_RESET: $AllIcons;
        static I_REPLACE_ANY: $AllIcons;
        constructor(arg0: number, arg1: number);
    }
    export class $CREntities {
        static register(): void;
        static CART_JUKEBOX: $EntityEntry<$MinecartJukebox>;
        static CONDUCTOR: $EntityEntry<$ConductorEntity>;
        static CART_BLOCK: $EntityEntry<$MinecartWorkbench>;
        constructor();
    }
    export class $CRTags$AllItemTags extends $Enum<$CRTags$AllItemTags> {
        static values(): $CRTags$AllItemTags[];
        static valueOf(arg0: string): $CRTags$AllItemTags;
        matches(arg0: $ItemStack_): boolean;
        matches(arg0: $Item_): boolean;
        static register(): void;
        alwaysDatagen: boolean;
        static NOT_TRAIN_FUEL: $CRTags$AllItemTags;
        static PAINT_DRINK_BLOCKERS: $CRTags$AllItemTags;
        static CONDUCTOR_CAPS: $CRTags$AllItemTags;
        static BINDING_AGENTS: $CRTags$AllItemTags;
        static COALBURNER_STACK: $CRTags$AllItemTags;
        static WOODEN_HEADSTOCKS: $CRTags$AllItemTags;
        static STREAMLINED_STACK: $CRTags$AllItemTags;
        static FILLED_PAINT_PITCHERS: $CRTags$AllItemTags;
        static OILBURNER_STACK: $CRTags$AllItemTags;
        static PAINT_BRUSH_REPAIR_ITEMS: $CRTags$AllItemTags;
        static PHANTOM_TRACK_REVEALING: $CRTags$AllItemTags;
        static CABOOSESTYLE_STACK: $CRTags$AllItemTags;
        static LONG_STACK: $CRTags$AllItemTags;
        static DECO_COUPLERS: $CRTags$AllItemTags;
        static WOODBURNER_STACK: $CRTags$AllItemTags;
        tag: $TagKey<$Item>;
        static COPYCAT_HEADSTOCKS: $CRTags$AllItemTags;
    }
    /**
     * Values that may be interpreted as {@link $CRTags$AllItemTags}.
     */
    export type $CRTags$AllItemTags_ = "conductor_caps" | "phantom_track_revealing" | "deco_couplers" | "wooden_headstocks" | "copycat_headstocks" | "filled_paint_pitchers" | "binding_agents" | "paint_drink_blockers" | "paint_brush_repair_items" | "caboosestyle_stack" | "long_stack" | "coalburner_stack" | "oilburner_stack" | "streamlined_stack" | "woodburner_stack" | "not_train_fuel";
    export class $CRCreativeModeTabs {
        static getBaseTabKey(): $ResourceKey<$CreativeModeTab>;
        static getTracksTabKey(): $ResourceKey<$CreativeModeTab>;
        static getPalettesTabKey(): $ResourceKey<$CreativeModeTab>;
        static devLogTabCounts(): void;
        static register(): void;
        constructor();
        static get baseTabKey(): $ResourceKey<$CreativeModeTab>;
        static get tracksTabKey(): $ResourceKey<$CreativeModeTab>;
        static get palettesTabKey(): $ResourceKey<$CreativeModeTab>;
    }
    export class $CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type extends $Enum<$CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type> {
        static values(): $CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type[];
        static valueOf(arg0: string): $CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type;
        static BEFORE: $CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type;
        static AFTER: $CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type;
    }
    /**
     * Values that may be interpreted as {@link $CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type}.
     */
    export type $CRCreativeModeTabs$RegistrateDisplayItemsGenerator$ItemOrdering$Type_ = "before" | "after";
    export class $CRPalettes$CycleCategoryList<T> extends $EnumFilledList<$CRPalettes$CycleGroupCategory, T> {
        constructor(arg0: $Function_<$CRPalettes$CycleGroupCategory, T>);
    }
    export class $CRTags$AllBlockTags extends $Enum<$CRTags$AllBlockTags> {
        static values(): $CRTags$AllBlockTags[];
        static valueOf(arg0: string): $CRTags$AllBlockTags;
        matches(arg0: $BlockState_): boolean;
        matches(arg0: $Block_): boolean;
        matches(arg0: $ItemStack_): boolean;
        static register(): void;
        alwaysDatagen: boolean;
        static LOCOMETAL_BOILERS: $CRTags$AllBlockTags;
        static SEMAPHORE_POLES: $CRTags$AllBlockTags;
        static LOCOMETAL: $CRTags$AllBlockTags;
        static TRACK_CASING_BLACKLIST: $CRTags$AllBlockTags;
        static TRACK_CASING_WHITELIST: $CRTags$AllBlockTags;
        tag: $TagKey<$Block>;
        static CONDUCTOR_SPY_USABLE: $CRTags$AllBlockTags;
    }
    /**
     * Values that may be interpreted as {@link $CRTags$AllBlockTags}.
     */
    export type $CRTags$AllBlockTags_ = "semaphore_poles" | "track_casing_blacklist" | "track_casing_whitelist" | "conductor_spy_usable" | "locometal" | "locometal_boilers";
    export class $CRPortalTracks {
        static register(): void;
        constructor();
    }
    export class $CREdgePointTypes {
        static register(): void;
        static COUPLER: $EdgePointType<$TrackCoupler>;
        static SWITCH: $EdgePointType<$TrackSwitch>;
        static BUFFER: $EdgePointType<$TrackBuffer>;
        constructor();
    }
    export class $CRDevCaps {
        static register(): void;
        constructor();
    }
    export class $CRPalettes$PaletteBlockRegistrar {
    }
    export interface $CRPalettes$PaletteBlockRegistrar {
    }
    /**
     * Values that may be interpreted as {@link $CRPalettes$PaletteBlockRegistrar}.
     */
    export type $CRPalettes$PaletteBlockRegistrar_ = (() => void);
    export class $CRParticleTypes extends $Enum<$CRParticleTypes> {
        get(): $ParticleType<never>;
        static values(): $CRParticleTypes[];
        static valueOf(arg0: string): $CRParticleTypes;
        static init(): void;
        parameter(): string;
        static registerFactories(arg0: $RegisterParticleProvidersEvent): void;
        static CHIMNEYPUSH_MEDIUM: $CRParticleTypes;
        static CHIMNEYPUSH_SMALL: $CRParticleTypes;
        static SMOKE: $CRParticleTypes;
        static SMOKE_PUFF_MEDIUM: $CRParticleTypes;
        static SMOKE_PUFF_SMALL: $CRParticleTypes;
    }
    /**
     * Values that may be interpreted as {@link $CRParticleTypes}.
     */
    export type $CRParticleTypes_ = "smoke" | "smoke_puff_small" | "smoke_puff_medium" | "chimneypush_small" | "chimneypush_medium";
    export class $CRBlocks {
        static register(): void;
        static DIESEL_STACK: $BlockEntry<$DieselSmokeStackBlock>;
        static OAK_TRACK: $BlockEntry<$TrackBlock>;
        static COPYCAT_HEADSTOCK: $BlockEntry<$CopycatHeadstockBlock>;
        static WARPED_TRACK: $BlockEntry<$TrackBlock>;
        static CONDUCTOR_VENT: $BlockEntry<$VentBlock>;
        static SMALL_BUFFER: $BlockEntry<$GenericDyeableSingleBufferBlock>;
        static NARROW_GAUGE_TRACKS: $Map<$TrackMaterial, $NonNullSupplier<$TrackBlock>>;
        static LARGE_CREATE_STYLE_0_10_0: $BlockEntry<$LargeCreateStyle0100BogeyBlock>;
        static LARGE_CREATE_STYLE_0_12_0: $BlockEntry<$LargeCreateStyle0120BogeyBlock>;
        static CABOOSESTYLE_STACK: $BlockEntry<$SmokeStackBlock>;
        static CHERRY_TRACK: $BlockEntry<$TrackBlock>;
        static INVISIBLE_MONO_BOGEY: $BlockEntry<$InvisibleMonoBogeyBlock>;
        static WIDE_COMICALLY_LARGE_BOGEY: $BlockEntry<$WideGaugeComicallyLargeBogeyBlock>;
        static ACACIA_TRACK: $BlockEntry<$TrackBlock>;
        static SINGLEAXLE_BOGEY: $BlockEntry<$SingleAxleBogeyBlock>;
        static TRACK_BUFFER_NARROW: $BlockEntry<$NarrowTrackBufferBlock>;
        static CONDUCTOR_WHISTLE_FLAG: $BlockEntry<$ConductorWhistleFlagBlock>;
        static LINK_AND_PIN_GROUP: $BlockStateBlockItemGroup<void, $LinkPinBlock$Style>;
        static CRIMSON_TRACK: $BlockEntry<$TrackBlock>;
        static LARGE_CREATE_STYLE_0_4_0: $BlockEntry<$LargeCreateStyle040BogeyBlock>;
        static LONG_STACKS: $Pair<$BlockEntry<$VariableSmokeStackBlock>, $BlockEntry<$SmokeStackExtenderBlock>>;
        static LARGE_CREATE_STYLE_0_6_0: $BlockEntry<$LargeCreateStyle060BogeyBlock>;
        static TRACK_BUFFER: $BlockEntry<$StandardTrackBufferBlock>;
        static BAMBOO_TRACK: $BlockEntry<$TrackBlock>;
        static LARGE_CREATE_STYLE_0_8_0: $BlockEntry<$LargeCreateStyle080BogeyBlock>;
        static MANGROVE_TRACK: $BlockEntry<$TrackBlock>;
        static HEADSTOCK_GROUP: $BlockStateBlockItemGroup<boolean, $HeadstockStyle>;
        static TRIPLEAXLE_BOGEY: $BlockEntry<$TripleAxleBogeyBlock>;
        static SEMAPHORE: $BlockEntry<$SemaphoreBlock>;
        static HEADSTOCK: $BlockEntry<$HeadstockBlock>;
        static MONO_BOGEY: $BlockEntry<$MonoBogeyBlock>;
        static WIDE_SCOTCH_BOGEY: $BlockEntry<$WideGaugeBogeyBlock>;
        static PHANTOM_TRACK: $BlockEntry<$TrackBlock>;
        static SMOKESTACK_GROUP: $HashMap<string, $BlockStateBlockItemGroup<$SmokestackStyle$Context, $SmokestackStyle>>;
        static BIG_BUFFER: $BlockEntry<$GenericDyeableSingleBufferBlock>;
        static BLACKSTONE_TRACK: $BlockEntry<$TrackBlock>;
        static NARROW_SMALL_BOGEY: $BlockEntry<$NarrowGaugeBogeyBlock>;
        static STREAMLINED_STACKS: $Pair<$BlockEntry<$VariableSmokeStackBlock>, $BlockEntry<$SmokeStackExtenderBlock>>;
        static SPRUCE_TRACK: $BlockEntry<$TrackBlock>;
        static BRASS_SWITCH: $BlockEntry<$TrackSwitchBlock>;
        static LINK_AND_PIN: $BlockEntry<$LinkPinBlock>;
        static JUNGLE_TRACK: $BlockEntry<$TrackBlock>;
        static GENERIC_CROSSING: $BlockEntry<$GenericCrossingBlock>;
        static ANDESITE_SWITCH: $BlockEntry<$TrackSwitchBlock>;
        static INVISIBLE_BOGEY: $BlockEntry<$InvisibleBogeyBlock>;
        static WIDE_DOUBLEAXLE_BOGEY: $BlockEntry<$WideGaugeBogeyBlock>;
        static MEDIUM_QUINTUPLE_WHEEL: $BlockEntry<$MediumQuintupleWheelBogeyBlock>;
        static TRACK_COUPLER: $BlockEntry<$TrackCouplerBlock>;
        static ENDER_TRACK: $BlockEntry<$TrackBlock>;
        static NARROW_DOUBLE_SCOTCH_BOGEY: $BlockEntry<$NarrowGaugeBogeyBlock>;
        static MEDIUM_2_0_2_TRAILING: $BlockEntry<$Medium202TrailingBogeyBlock>;
        static MONORAIL_TRACK: $BlockEntry<$TrackBlock>;
        static CASING_COLLISION: $BlockEntry<$CasingCollisionBlock>;
        static STRIPPED_BAMBOO_TRACK: $BlockEntry<$TrackBlock>;
        static WIDE_GAUGE_TRACKS: $Map<$TrackMaterial, $NonNullSupplier<$TrackBlock>>;
        static BIRCH_TRACK: $BlockEntry<$TrackBlock>;
        static TRACK_BUFFER_WIDE: $BlockEntry<$WideTrackBufferBlock>;
        static COALBURNER_STACKS: $Pair<$BlockEntry<$VariableSmokeStackBlock>, $BlockEntry<$SmokeStackExtenderBlock>>;
        static COPYCAT_HEADSTOCK_BARS: $BlockEntry<$CopycatHeadstockBarsBlock>;
        static MEDIUM_QUADRUPLE_WHEEL: $BlockEntry<$MediumQuadrupleWheelBogeyBlock>;
        static NARROW_SCOTCH_BOGEY: $BlockEntry<$NarrowGaugeBogeyBlock>;
        static MEDIUM_TRIPLE_WHEEL: $BlockEntry<$MediumTripleWheelBogeyBlock>;
        static WOODBURNER_STACKS: $Pair<$BlockEntry<$VariableSmokeStackBlock>, $BlockEntry<$SmokeStackExtenderBlock>>;
        static TIELESS_TRACK: $BlockEntry<$TrackBlock>;
        static MEDIUM_4_0_4_TRAILING: $BlockEntry<$Medium404TrailingBogeyBlock>;
        static DOUBLEAXLE_BOGEY: $BlockEntry<$DoubleAxleBogeyBlock>;
        static OILBURNER_STACKS: $Pair<$BlockEntry<$VariableSmokeStackBlock>, $BlockEntry<$SmokeStackExtenderBlock>>;
        static DARK_OAK_TRACK: $BlockEntry<$TrackBlock>;
        static TRACK_BUFFER_MONO: $BlockEntry<$MonoTrackBufferBlock>;
        static HANDCAR: $BlockEntry<$HandcarBlock>;
        static COPYCAT_HEADSTOCK_GROUP: $BlockStateBlockItemGroup<boolean, $HeadstockStyle>;
        static MEDIUM_BOGEY: $BlockEntry<$MediumBogeyBlock>;
        /**
         * @deprecated
         */
        static LARGE_PLATFORM_DOUBLEAXLE_BOGEY: $BlockEntry<$DoubleAxleBogeyBlock>;
        constructor();
    }
    export class $CRBlocks$SmokeStackFunction<T extends $SmokeStackBlock> {
    }
    export interface $CRBlocks$SmokeStackFunction<T extends $SmokeStackBlock> {
    }
    /**
     * Values that may be interpreted as {@link $CRBlocks$SmokeStackFunction}.
     */
    export type $CRBlocks$SmokeStackFunction_<T> = (() => void);
    export class $CRDisplaySources {
        static register(): void;
        static TRACK_COUPLER_INFO: $RegistryEntry<$DisplaySource, $TrackCouplerDisplaySource>;
        static TRACK_SWITCH: $RegistryEntry<$DisplaySource, $SwitchDisplaySource>;
        constructor();
    }
    export class $CRBlockPartials {
        static getCustomConductorCapForName(arg0: string): $PartialModel;
        static registerCasingSpecs(): void;
        static normalizeCustomCapName(arg0: string): string;
        static registerCustomCap(arg0: string, arg1: string, arg2: boolean): void;
        static registerCustomCap(arg0: string, arg1: string): void;
        static registerCustomConductorOnlyCap(arg0: string, arg1: string): void;
        static registerCustomConductorOnlyCap(arg0: string, arg1: string, arg2: boolean): void;
        static shouldPreventTiltingCap(arg0: string): boolean;
        static getCustomConductorSkinForName(arg0: string): $ResourceLocation;
        static getCustomConductorNameSkin(arg0: string): $ResourceLocation;
        static registerCustomSkin(arg0: string, arg1: string): void;
        static registerCustomConductorNameBasedSkin(arg0: string, arg1: string): void;
        static init(): void;
        static registerAdditionalModels(arg0: $Consumer_<$ResourceLocation>): void;
        static WIDE_COMICALLY_LARGE_WHEELS: $PartialModel;
        static CONDUCTOR_WHISTLE_FLAGS: $Map<$DyeColor, $PartialModel>;
        static COUPLER_BOTH: $PartialModel;
        static WIDE_DEFAULT_FRAME: $PartialModel;
        static SEMAPHORE_ARM_YELLOW_FLIPPED: $PartialModel;
        static NARROW_FRAME: $PartialModel;
        static SEMAPHORE_LAMP_RED: $PartialModel;
        static COILSPRING_FRAME: $PartialModel;
        static HANDCAR_HANDLE_FIRST_PERSON: $PartialModel;
        static HEAVYWEIGHT_FRAME: $PartialModel;
        static Y25_FRAME: $PartialModel;
        static CUSTOM_CONDUCTOR_ONLY_CAPS: $Map<string, $PartialModel>;
        static HANDCAR_WHEELS: $PartialModel;
        static SWITCH_2WAY_RIGHT: $PartialModel;
        static PORTABLE_FUEL_INTERFACE_MIDDLE_POWERED: $PartialModel;
        static ARCHBAR_FRAME: $PartialModel;
        static MEDIUM_8_0_8_TENDER_FRAME: $PartialModel;
        static SEMAPHORE_ARM_YELLOW_UPSIDE_DOWN: $PartialModel;
        static MEDIUM_2_0_2_TRAILING_FRAME: $PartialModel;
        static LARGE_CREATE_STYLED_0_8_0_PISTON: $PartialModel;
        static WIDE_SCOTCH_BELT: $PartialModel;
        static PORTABLE_FUEL_INTERFACE_MIDDLE: $PartialModel;
        static MONOBOGEY_WHEEL: $PartialModel;
        static WIDE_SCOTCH_FRAME: $PartialModel;
        static SEMAPHORE_ARM_RED: $PartialModel;
        static MEDIUM_4_0_4_TRAILING_FRAME: $PartialModel;
        static TRACK_CASINGS: $EnumMap<$TrackShape, $CRBlockPartials$TrackCasingSpec>;
        static SWITCH_3WAY_LEFT: $PartialModel;
        static SWITCH_3WAY_RIGHT: $PartialModel;
        static TRACK_CASING_FLAT: $PartialModel;
        static NARROW_SCOTCH_WHEELS: $PartialModel;
        static LARGE_CREATE_STYLED_0_8_0_FRAME: $PartialModel;
        static SEMAPHORE_LAMP_WHITE: $PartialModel;
        static MEDIUM_6_0_6_TRAILING_FRAME: $PartialModel;
        static HANDCAR_FRAME: $PartialModel;
        static MEDIUM_10_0_10_TENDER_FRAME: $PartialModel;
        static ANDESITE_SWITCH_FLAG: $PartialModel;
        static SEMAPHORE_ARM_YELLOW_FLIPPED_UPSIDE_DOWN: $PartialModel;
        static WIDE_COMICALLY_LARGE_PISTONS: $PartialModel;
        static MEDIUM_STANDARD_FRAME: $PartialModel;
        static MODERN_FRAME: $PartialModel;
        static SEMAPHORE_LAMP_YELLOW: $PartialModel;
        static MONOBOGEY_FRAME: $PartialModel;
        static ANDESITE_SWITCH_HANDLE: $PartialModel;
        static FREIGHT_FRAME: $PartialModel;
        static LC_STYLE_SEMI_BLIND_WHEELS: $PartialModel;
        static CUSTOM_CONDUCTOR_SKINS: $Map<string, $ResourceLocation>;
        static MONORAIL_TRACK_ASSEMBLING_OVERLAY: $PartialModel;
        static LARGE_CREATE_STYLED_0_4_0_FRAME: $PartialModel;
        static LARGE_CREATE_STYLED_0_10_0_FRAME: $PartialModel;
        static MEDIUM_TRIPLE_WHEEL_FRAME: $PartialModel;
        static MEDIUM_QUINTUPLE_WHEEL_FRAME: $PartialModel;
        static SWITCH_LEFT_STRAIGHT: $PartialModel;
        static HANDCAR_HANDLE: $PartialModel;
        static MONORAIL_SEGMENT_TOP: $PartialModel;
        static MONORAIL_SEGMENT_BOTTOM: $PartialModel;
        static WIDE_SCOTCH_WHEELS: $PartialModel;
        static HANDCAR_LARGE_COG: $PartialModel;
        static MEDIUM_SHARED_WHEELS: $PartialModel;
        static TOOLBOX_BODIES: $Map<$DyeColor, $PartialModel>;
        static MONORAIL_SEGMENT_MIDDLE: $PartialModel;
        static BLOMBERG_FRAME: $PartialModel;
        static NO_TILT_CAPS: $Set<string>;
        static RADIAL_FRAME: $PartialModel;
        static CONDUCTOR_ANTENNA: $PartialModel;
        static LARGE_CREATE_STYLED_0_10_0_PISTON: $PartialModel;
        static MEDIUM_6_0_6_TENDER_FRAME: $PartialModel;
        static COUPLER_COUPLE: $PartialModel;
        static MEDIUM_QUADRUPLE_WHEEL_FRAME: $PartialModel;
        static SWITCH_NONE: $PartialModel;
        static LARGE_CREATE_STYLED_0_4_0_PISTON: $PartialModel;
        static SWITCH_2WAY_LEFT: $PartialModel;
        static NARROW_SCOTCH_FRAME: $PartialModel;
        static CR_WIDE_BOGEY_WHEELS: $PartialModel;
        static FLYWHEELS: $CRPalettes$PalettesColorList<$PartialModel>;
        static SEMAPHORE_ARM_RED_UPSIDE_DOWN: $PartialModel;
        static NARROW_DOUBLE_SCOTCH_FRAME: $PartialModel;
        static WIDE_SCOTCH_PISTONS: $PartialModel;
        static SWITCH_LEFT_TURN: $PartialModel;
        static NARROW_WHEELS: $PartialModel;
        static SEMAPHORE_ARM_YELLOW: $PartialModel;
        static DIESEL_STACK_FAN: $PartialModel;
        static LEAFSPRING_FRAME: $PartialModel;
        static WIDE_COMICALLY_LARGE_PINS: $PartialModel;
        static LC_STYLE_FULL_BLIND_WHEELS: $PartialModel;
        static HANDCAR_COUPLING: $PartialModel;
        static PAINT_BLOBS: $CRPalettes$PalettesColorList<$PartialModel>;
        static FOLDING_DOORS: $CRPalettes$PalettesColorList<$Couple<$Couple<$PartialModel>>>;
        static UNUSED_PAINT_BLOBS: $EnumMap<$PalettesColor, $PartialModel>;
        static NARROW_SCOTCH_PISTONS: $PartialModel;
        static PASSENGER_FRAME: $PartialModel;
        static NARROW_DOUBLE_SCOTCH_PISTONS: $PartialModel;
        static COUPLER_NONE: $PartialModel;
        static HANDCAR_SMALL_COG: $PartialModel;
        static SINGLEAXLE_FRAME: $PartialModel;
        static CUSTOM_CONDUCTOR_CAPS: $Map<string, $PartialModel>;
        static PAINT_STRIPPER_BLOB: $PartialModel;
        static WIDE_COMICALLY_LARGE_FRAME: $PartialModel;
        static MEDIUM_SINGLE_WHEEL_FRAME: $PartialModel;
        static SWITCH_RIGHT_TURN: $PartialModel;
        static SEMAPHORE_ARM_RED_FLIPPED: $PartialModel;
        static LONG_SHAFTED_WHEELS: $PartialModel;
        static SWITCH_3WAY_STRAIGHT: $PartialModel;
        static SEMAPHORE_ARM_RED_FLIPPED_UPSIDE_DOWN: $PartialModel;
        static NARROW_SCOTCH_WHEEL_PINS: $PartialModel;
        static SWITCH_RIGHT_STRAIGHT: $PartialModel;
        static LARGE_CREATE_STYLED_0_6_0_FRAME: $PartialModel;
        static LARGE_CREATE_STYLED_0_6_0_PISTON: $PartialModel;
        static BRASS_SWITCH_FLAG: $PartialModel;
        static LARGE_CREATE_STYLED_0_12_0_FRAME: $PartialModel;
        static TRACK_CASING_FLAT_THICK: $PartialModel;
        static COUPLER_DECOUPLE: $PartialModel;
        static LARGE_CREATE_STYLED_0_12_0_PISTON: $PartialModel;
        static CUSTOM_CONDUCTOR_SKINS_FOR_NAME: $Map<string, $ResourceLocation>;
        static WIDE_SCOTCH_PINS: $PartialModel;
        static PORTABLE_FUEL_INTERFACE_TOP: $PartialModel;
        constructor();
    }
    export class $CRCommandsClient {
        static buildRedirect<T>(arg0: string, arg1: $LiteralCommandNode<T>): $LiteralCommandNode<T>;
        static register(arg0: $CommandDispatcher<$SharedSuggestionProvider>): void;
        constructor();
    }
    export class $CRShapes {
        static boiler(arg0: number): $VoxelShape;
        static narrowDiagonal(): $VoxelShape;
        static shape(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $AllShapes$Builder;
        static DIESEL_STACK: $VoxelShaper;
        static BOTTOM_SLAB: $VoxelShape;
        static SMALL_BUFFER: $VoxelShaper;
        static MONORAIL_TRACK_ORTHO_LONG: $VoxelShaper;
        static NARROW_TRACK_CROSS_DIAG_ORTHO: $VoxelShaper;
        static HEADSTOCK_PLAIN: $VoxelShaper;
        static OIL_STACK: $VoxelShape;
        static MONORAIL_TRACK_CROSS_DIAG: $VoxelShape;
        static NARROW_TRACK_ORTHO_LONG: $VoxelShaper;
        static OIL_STACK_SINGLE: $VoxelShape;
        static STREAMLINED_STACK_SEGMENT: $VoxelShaper;
        static CONDUCTOR_WHISTLE_FLAG: $VoxelShape;
        static MONORAIL_TRACK_CROSS: $VoxelShape;
        static COAL_STACK_SEGMENT: $VoxelShape;
        static ANDESITE_SWITCH_PROJECTILE: $VoxelShaper;
        static MONORAIL_TRACK_FALLBACK: $VoxelShape;
        static NARROW_TRACK_CROSS_DIAG: $VoxelShape;
        static MONORAIL_TRACK_CROSS_DIAG_ORTHO: $VoxelShaper;
        static SCREWLINK: $VoxelShaper;
        static STREAMLINED_STACK_DOUBLE: $VoxelShaper;
        static BLOCK: $VoxelShape;
        static STREAMLINED_STACK: $VoxelShaper;
        static COAL_STACK_SINGLE: $VoxelShape;
        static SEMAPHORE: $VoxelShaper;
        static LONG_STACK_SINGLE: $VoxelShaper;
        static HEADSTOCK_KNUCKLE: $VoxelShaper;
        static MONORAIL_TRACK_ORTHO: $VoxelShaper;
        static CABOOSE_STACK: $VoxelShaper;
        static BIG_BUFFER: $VoxelShaper;
        static HEADSTOCK_LINK_PIN: $VoxelShaper;
        static BRASS_SWITCH: $VoxelShaper;
        static OIL_STACK_DOUBLE: $VoxelShape;
        static BOILER: $VoxelShaper;
        static NARROW_TRACK_ORTHO: $VoxelShaper;
        static LONG_STACK_SEGMENT: $VoxelShaper;
        static ANDESITE_SWITCH: $VoxelShaper;
        static INVISIBLE_BOGEY: $VoxelShape;
        static BRASS_SWITCH_PROJECTILE: $VoxelShaper;
        static MONORAIL_TRACK_ASC: $VoxelShaper;
        static MONORAIL_TRACK_CROSS_ORTHO_DIAG: $VoxelShaper;
        static NARROW_TRACK_CROSS_ORTHO_DIAG: $VoxelShaper;
        static TOP_SLAB: $VoxelShape;
        static LONG_STACK: $VoxelShaper;
        static LINK_PIN: $VoxelShaper;
        static WOOD_STACK: $VoxelShape;
        static HEADSTOCK_BUFFER: $VoxelShaper;
        static BOILER_RAISED: $VoxelShaper;
        static MONORAIL_COLLISION: $VoxelShape;
        static NARROW_TRACK_CROSS: $VoxelShape;
        static KNUCKLE: $VoxelShaper;
        static MONORAIL_TRACK_DIAG: $VoxelShaper;
        static NARROW_TRACK_DIAG: $VoxelShaper;
        static COAL_STACK: $VoxelShape;
        static HANDCAR: $VoxelShape;
        static NARROW_TRACK_ASC: $VoxelShaper;
        static LONG_STACK_DOUBLE: $VoxelShaper;
        static HEADSTOCK_SCREWLINK: $VoxelShaper;
        static COAL_STACK_DOUBLE: $VoxelShape;
        static OIL_STACK_SEGMENT: $VoxelShape;
        static STREAMLINED_STACK_SINGLE: $VoxelShaper;
        constructor();
    }
    export class $CRBlockPartials$ModelTransform extends $Record {
        static of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $CRBlockPartials$ModelTransform;
        static of(arg0: number, arg1: number, arg2: number): $CRBlockPartials$ModelTransform;
        static of(arg0: number, arg1: number): $CRBlockPartials$ModelTransform;
        x(): number;
        z(): number;
        y(): number;
        rx(): number;
        ry(): number;
        rz(): number;
        static ZERO: $CRBlockPartials$ModelTransform;
        constructor(x: number, y: number, z: number, rx: number, ry: number, rz: number);
    }
    /**
     * Values that may be interpreted as {@link $CRBlockPartials$ModelTransform}.
     */
    export type $CRBlockPartials$ModelTransform_ = { z?: number, y?: number, x?: number, rz?: number, ry?: number, rx?: number,  } | [z?: number, y?: number, x?: number, rz?: number, ry?: number, rx?: number, ];
    export class $CRParticleTypes$ParticleEntry<D extends $ParticleOptions> {
    }
    export class $CRSchedule {
        static register(): void;
        constructor();
    }
    export class $CRPalettes$WindowType extends $Enum<$CRPalettes$WindowType> {
        getLangName(): string;
        getTextureName(): string;
        static values(): $CRPalettes$WindowType[];
        static valueOf(arg0: string): $CRPalettes$WindowType;
        getSerializedName(): string;
        static ROUND_PANE: $CRPalettes$WindowType;
        static SINGLE_PANE: $CRPalettes$WindowType;
        static FOUR_PANE: $CRPalettes$WindowType;
        static TWO_PANE: $CRPalettes$WindowType;
        get langName(): string;
        get textureName(): string;
        get serializedName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CRPalettes$WindowType}.
     */
    export type $CRPalettes$WindowType_ = "round_pane" | "single_pane" | "two_pane" | "four_pane";
    export class $CRCreativeModeTabs$RegistrateDisplayItemsGenerator implements $CreativeModeTab$DisplayItemsGenerator {
        accept(arg0: $CreativeModeTab$ItemDisplayParameters_, arg1: $CreativeModeTab$Output_): void;
        constructor(arg0: $CRCreativeModeTabs$Tabs_);
    }
    export class $CRInteractionBehaviours {
        static register(): void;
        constructor();
    }
    export class $CRTrackMaterials$CRTrackType extends $TrackMaterial$TrackType {
        static UNIVERSAL: $TrackMaterial$TrackType;
        static MONORAIL: $TrackMaterial$TrackType;
        static WIDE_GAUGE: $TrackMaterial$TrackType;
        static NARROW_GAUGE: $TrackMaterial$TrackType;
        id: $ResourceLocation;
        static STANDARD: $TrackMaterial$TrackType;
        constructor(arg0: $ResourceLocation_, arg1: $TrackMaterial$TrackType$TrackBlockFactory_);
    }
    export class $CRContainerTypes {
        static register(): void;
        static MOUNTED_TOOLBOX: $MenuEntry<$MountedToolboxContainer>;
        constructor();
    }
    export class $CRTrackMaterials {
        static getNarrow(arg0: $TrackMaterial): $TrackMaterial;
        static getWide(arg0: $TrackMaterial): $TrackMaterial;
        static getBaseFromWide(arg0: $TrackMaterial): $TrackMaterial;
        static getBaseFromNarrow(arg0: $TrackMaterial): $TrackMaterial;
        static addToBlockEntityType(arg0: $TrackBlock): void;
        static register(): void;
        static STRIPPED_BAMBOO: $TrackMaterial;
        static NARROW_GAUGE_PHANTOM: $TrackMaterial;
        static TIELESS: $TrackMaterial;
        static WIDE_GAUGE_ANDESITE: $TrackMaterial;
        static NARROW_GAUGE_REVERSE: $Map<$TrackMaterial, $TrackMaterial>;
        static DARK_OAK: $TrackMaterial;
        static BIRCH: $TrackMaterial;
        static MONORAIL: $TrackMaterial;
        static WARPED: $TrackMaterial;
        static WIDE_GAUGE: $Map<$TrackMaterial, $TrackMaterial>;
        static ENDER: $TrackMaterial;
        static MANGROVE: $TrackMaterial;
        static BAMBOO: $TrackMaterial;
        static BLACKSTONE: $TrackMaterial;
        static NARROW_GAUGE_ANDESITE: $TrackMaterial;
        static ACACIA: $TrackMaterial;
        static JUNGLE: $TrackMaterial;
        static PHANTOM: $TrackMaterial;
        static WIDE_GAUGE_PHANTOM: $TrackMaterial;
        static CRIMSON: $TrackMaterial;
        static SPRUCE: $TrackMaterial;
        static CHERRY: $TrackMaterial;
        static NARROW_GAUGE: $Map<$TrackMaterial, $TrackMaterial>;
        static OAK: $TrackMaterial;
        static WIDE_GAUGE_REVERSE: $Map<$TrackMaterial, $TrackMaterial>;
        constructor();
    }
    export class $CRPalettes {
        static getStyleForBlock(arg0: $Block_): $Pair<$CRPalettes$Styles, $PalettesColor>;
        static provideLangEntries(arg0: $BiConsumer_<string, string>): void;
        static getPaintedState(arg0: $BlockState_, arg1: $PalettesColor_): $BlockState;
        static register(): void;
        static CYCLE_GROUPS: $Map<$Pair<$PalettesColor, $CRPalettes$CycleGroupCategory>, $TagKey<$Item>>;
        constructor();
    }
    export class $CRPalettes$VanillaDyedOnlyPalettesColorList<T> extends $CRPalettes$PalettesColorList<T> {
        constructor(arg0: $BiFunction_<$PalettesColor, $DyeColor, T>);
    }
}
