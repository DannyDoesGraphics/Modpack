import { $TrialSpawnerState } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Collection_, $Collection } from "@package/java/util";
import { $AccessorBlockSetType } from "@package/com/railwayteam/railways/mixin";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Predicate_ } from "@package/java/util/function";
import { $VaultState } from "@package/net/minecraft/world/level/block/entity/vault";
import { $Holder, $FrontAndTop, $Direction_, $Direction$Axis, $Direction } from "@package/net/minecraft/core";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $Stream } from "@package/java/util/stream";
import { $StateHolder } from "@package/net/minecraft/world/level/block/state";
import { $SoundType_, $SoundType } from "@package/net/minecraft/world/level/block";
import { $Enum, $Record, $Class, $Comparable_, $Comparable } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/block/state/properties" {
    export class $BellAttachType extends $Enum<$BellAttachType> implements $StringRepresentable {
        static values(): $BellAttachType[];
        static valueOf(arg0: string): $BellAttachType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static FLOOR: $BellAttachType;
        static DOUBLE_WALL: $BellAttachType;
        static CEILING: $BellAttachType;
        static SINGLE_WALL: $BellAttachType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BellAttachType}.
     */
    export type $BellAttachType_ = "floor" | "ceiling" | "single_wall" | "double_wall";
    export class $NoteBlockInstrument$Type extends $Enum<$NoteBlockInstrument$Type> {
    }
    /**
     * Values that may be interpreted as {@link $NoteBlockInstrument$Type}.
     */
    export type $NoteBlockInstrument$Type_ = "base_block" | "mob_head" | "custom";
    export class $Property$Value<T extends $Comparable<T>> extends $Record {
        value(): T;
        property(): $Property<T>;
        constructor(property: $Property<T>, value: T);
    }
    /**
     * Values that may be interpreted as {@link $Property$Value}.
     */
    export type $Property$Value_<T> = { value?: $Comparable_<T>, property?: $Property<$Comparable_<T>>,  } | [value?: $Comparable_<T>, property?: $Property<$Comparable_<T>>, ];
    export class $BlockSetType extends $Record implements $AccessorBlockSetType {
        pressurePlateSensitivity(): $BlockSetType$PressurePlateSensitivity;
        pressurePlateClickOff(): $SoundEvent;
        pressurePlateClickOn(): $SoundEvent;
        trapdoorClose(): $SoundEvent;
        buttonClickOn(): $SoundEvent;
        buttonClickOff(): $SoundEvent;
        trapdoorOpen(): $SoundEvent;
        soundType(): $SoundType;
        canButtonBeActivatedByArrows(): boolean;
        canOpenByWindCharge(): boolean;
        canOpenByHand(): boolean;
        doorOpen(): $SoundEvent;
        doorClose(): $SoundEvent;
        static invokeRegister$railways_$md$5c91d2$0(value: $BlockSetType_): $BlockSetType;
        name(): string;
        static values(): $Stream<$BlockSetType>;
        static register(value: $BlockSetType_): $BlockSetType;
        static GOLD: $BlockSetType;
        static MANGROVE: $BlockSetType;
        static CODEC: $Codec<$BlockSetType>;
        static BAMBOO: $BlockSetType;
        static ACACIA: $BlockSetType;
        static JUNGLE: $BlockSetType;
        static CRIMSON: $BlockSetType;
        static IRON: $BlockSetType;
        static COPPER: $BlockSetType;
        static DARK_OAK: $BlockSetType;
        static SPRUCE: $BlockSetType;
        static CHERRY: $BlockSetType;
        static BIRCH: $BlockSetType;
        static WARPED: $BlockSetType;
        static OAK: $BlockSetType;
        static POLISHED_BLACKSTONE: $BlockSetType;
        static STONE: $BlockSetType;
        constructor(arg0: string, arg1: boolean, arg2: boolean, arg3: boolean, arg4: $BlockSetType$PressurePlateSensitivity_, arg5: $SoundType_, arg6: $SoundEvent_, arg7: $SoundEvent_, arg8: $SoundEvent_, arg9: $SoundEvent_, arg10: $SoundEvent_, arg11: $SoundEvent_, arg12: $SoundEvent_, arg13: $SoundEvent_);
        constructor(name: string);
    }
    /**
     * Values that may be interpreted as {@link $BlockSetType}.
     */
    export type $BlockSetType_ = { pressurePlateSensitivity?: $BlockSetType$PressurePlateSensitivity_, buttonClickOff?: $SoundEvent_, canButtonBeActivatedByArrows?: boolean, pressurePlateClickOn?: $SoundEvent_, canOpenByWindCharge?: boolean, trapdoorClose?: $SoundEvent_, doorClose?: $SoundEvent_, pressurePlateClickOff?: $SoundEvent_, canOpenByHand?: boolean, soundType?: $SoundType_, buttonClickOn?: $SoundEvent_, doorOpen?: $SoundEvent_, name?: string, trapdoorOpen?: $SoundEvent_,  } | [pressurePlateSensitivity?: $BlockSetType$PressurePlateSensitivity_, buttonClickOff?: $SoundEvent_, canButtonBeActivatedByArrows?: boolean, pressurePlateClickOn?: $SoundEvent_, canOpenByWindCharge?: boolean, trapdoorClose?: $SoundEvent_, doorClose?: $SoundEvent_, pressurePlateClickOff?: $SoundEvent_, canOpenByHand?: boolean, soundType?: $SoundType_, buttonClickOn?: $SoundEvent_, doorOpen?: $SoundEvent_, name?: string, trapdoorOpen?: $SoundEvent_, ];
    export class $StairsShape extends $Enum<$StairsShape> implements $StringRepresentable {
        static values(): $StairsShape[];
        static valueOf(arg0: string): $StairsShape;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static INNER_LEFT: $StairsShape;
        static INNER_RIGHT: $StairsShape;
        static OUTER_LEFT: $StairsShape;
        static OUTER_RIGHT: $StairsShape;
        static STRAIGHT: $StairsShape;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StairsShape}.
     */
    export type $StairsShape_ = "straight" | "inner_left" | "inner_right" | "outer_left" | "outer_right";
    export class $StructureMode extends $Enum<$StructureMode> implements $StringRepresentable {
        static values(): $StructureMode[];
        static valueOf(arg0: string): $StructureMode;
        getDisplayName(): $Component;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CORNER: $StructureMode;
        static LOAD: $StructureMode;
        static DATA: $StructureMode;
        static SAVE: $StructureMode;
        get displayName(): $Component;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StructureMode}.
     */
    export type $StructureMode_ = "save" | "load" | "corner" | "data";
    export class $RedstoneSide extends $Enum<$RedstoneSide> implements $StringRepresentable {
        static values(): $RedstoneSide[];
        static valueOf(arg0: string): $RedstoneSide;
        getSerializedName(): string;
        isConnected(): boolean;
        getRemappedEnumConstantName(): string;
        static SIDE: $RedstoneSide;
        static UP: $RedstoneSide;
        static NONE: $RedstoneSide;
        get serializedName(): string;
        get connected(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RedstoneSide}.
     */
    export type $RedstoneSide_ = "up" | "side" | "none";
    export class $BooleanProperty extends $Property<boolean> {
        /**
         * @return the name for the given value.
         */
        getName(value: boolean): string;
        static create(name: string): $BooleanProperty;
    }
    export class $DripstoneThickness extends $Enum<$DripstoneThickness> implements $StringRepresentable {
        static values(): $DripstoneThickness[];
        static valueOf(arg0: string): $DripstoneThickness;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TIP_MERGE: $DripstoneThickness;
        static FRUSTUM: $DripstoneThickness;
        static TIP: $DripstoneThickness;
        static MIDDLE: $DripstoneThickness;
        static BASE: $DripstoneThickness;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DripstoneThickness}.
     */
    export type $DripstoneThickness_ = "tip_merge" | "tip" | "frustum" | "middle" | "base";
    export class $BambooLeaves extends $Enum<$BambooLeaves> implements $StringRepresentable {
        static values(): $BambooLeaves[];
        static valueOf(arg0: string): $BambooLeaves;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SMALL: $BambooLeaves;
        static LARGE: $BambooLeaves;
        static NONE: $BambooLeaves;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BambooLeaves}.
     */
    export type $BambooLeaves_ = "none" | "small" | "large";
    export class $SlabType extends $Enum<$SlabType> implements $StringRepresentable {
        static values(): $SlabType[];
        static valueOf(arg0: string): $SlabType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TOP: $SlabType;
        static BOTTOM: $SlabType;
        static DOUBLE: $SlabType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SlabType}.
     */
    export type $SlabType_ = "top" | "bottom" | "double";
    export class $IntegerProperty extends $Property<number> {
        /**
         * @return the name for the given value.
         */
        getName(value: number): string;
        static create(name: string, min: number, max: number): $IntegerProperty;
    }
    export class $DoorHingeSide extends $Enum<$DoorHingeSide> implements $StringRepresentable {
        static values(): $DoorHingeSide[];
        static valueOf(arg0: string): $DoorHingeSide;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static LEFT: $DoorHingeSide;
        static RIGHT: $DoorHingeSide;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DoorHingeSide}.
     */
    export type $DoorHingeSide_ = "left" | "right";
    export class $DirectionProperty extends $EnumProperty<$Direction> {
        static create(name: string, ...values: $Direction_[]): $DirectionProperty;
        /**
         * Create a new DirectionProperty for the given direction values
         */
        static create(name: string, values: $Collection_<$Direction_>): $DirectionProperty;
        static create(name: string): $DirectionProperty;
        /**
         * Create a new DirectionProperty with all directions that match the given Predicate
         */
        static create(name: string, filter: $Predicate_<$Direction>): $DirectionProperty;
    }
    export class $BlockStateProperties {
        static MAX_RESPAWN_ANCHOR_CHARGES: number;
        static BAMBOO_LEAVES: $EnumProperty<$BambooLeaves>;
        static HANGING: $BooleanProperty;
        static WEST_WALL: $EnumProperty<$WallSide>;
        static CHISELED_BOOKSHELF_SLOT_5_OCCUPIED: $BooleanProperty;
        static BOTTOM: $BooleanProperty;
        static DUSTED: $IntegerProperty;
        static EYE: $BooleanProperty;
        static HALF: $EnumProperty<$Half>;
        static DRAG: $BooleanProperty;
        static SOUTH: $BooleanProperty;
        static MIN_RESPAWN_ANCHOR_CHARGES: number;
        static DISTANCE: $IntegerProperty;
        static LOCKED: $BooleanProperty;
        static EXTENDED: $BooleanProperty;
        static BLOOM: $BooleanProperty;
        static SCULK_SENSOR_PHASE: $EnumProperty<$SculkSensorPhase>;
        static LEVEL: $IntegerProperty;
        static DOOR_HINGE: $EnumProperty<$DoorHingeSide>;
        static STAIRS_SHAPE: $EnumProperty<$StairsShape>;
        static EGGS: $IntegerProperty;
        static LAYERS: $IntegerProperty;
        static CONDITIONAL: $BooleanProperty;
        static EAST_WALL: $EnumProperty<$WallSide>;
        static HATCH: $IntegerProperty;
        static ORIENTATION: $EnumProperty<$FrontAndTop>;
        static LEVEL_CAULDRON: $IntegerProperty;
        static RAIL_SHAPE_STRAIGHT: $EnumProperty<$RailShape>;
        static CHISELED_BOOKSHELF_SLOT_0_OCCUPIED: $BooleanProperty;
        static SIGNAL_FIRE: $BooleanProperty;
        static STRUCTUREBLOCK_MODE: $EnumProperty<$StructureMode>;
        static PISTON_TYPE: $EnumProperty<$PistonType>;
        static CAN_SUMMON: $BooleanProperty;
        static MIN_LEVEL: number;
        static HAS_BOOK: $BooleanProperty;
        static OMINOUS: $BooleanProperty;
        static ATTACH_FACE: $EnumProperty<$AttachFace>;
        static WATERLOGGED: $BooleanProperty;
        static SHRIEKING: $BooleanProperty;
        static FALLING: $BooleanProperty;
        static AGE_25: $IntegerProperty;
        static CRAFTING: $BooleanProperty;
        static TRIGGERED: $BooleanProperty;
        static MAX_LEVEL_8: number;
        static CRACKED: $BooleanProperty;
        static CHISELED_BOOKSHELF_SLOT_4_OCCUPIED: $BooleanProperty;
        static UNSTABLE: $BooleanProperty;
        static CHEST_TYPE: $EnumProperty<$ChestType>;
        static AGE_5: $IntegerProperty;
        static SOUTH_WALL: $EnumProperty<$WallSide>;
        static AGE_4: $IntegerProperty;
        static AGE_7: $IntegerProperty;
        static STABILITY_MAX_DISTANCE: number;
        static BELL_ATTACHMENT: $EnumProperty<$BellAttachType>;
        static AGE_1: $IntegerProperty;
        static MAX_LEVEL_3: number;
        static ATTACHED: $BooleanProperty;
        static AGE_3: $IntegerProperty;
        static STAGE: $IntegerProperty;
        static AGE_2: $IntegerProperty;
        static VAULT_STATE: $EnumProperty<$VaultState>;
        static POWER: $IntegerProperty;
        static MAX_DISTANCE: number;
        static HAS_BOTTLE_1: $BooleanProperty;
        static HAS_BOTTLE_0: $BooleanProperty;
        static PICKLES: $IntegerProperty;
        static HAS_BOTTLE_2: $BooleanProperty;
        static OPEN: $BooleanProperty;
        static DRIPSTONE_THICKNESS: $EnumProperty<$DripstoneThickness>;
        static AGE_15: $IntegerProperty;
        static LEVEL_HONEY: $IntegerProperty;
        static CANDLES: $IntegerProperty;
        static LEVEL_COMPOSTER: $IntegerProperty;
        static LIT: $BooleanProperty;
        static EAST_REDSTONE: $EnumProperty<$RedstoneSide>;
        static OCCUPIED: $BooleanProperty;
        static MODE_COMPARATOR: $EnumProperty<$ComparatorMode>;
        static NORTH_REDSTONE: $EnumProperty<$RedstoneSide>;
        static IN_WALL: $BooleanProperty;
        static SNOWY: $BooleanProperty;
        static DOWN: $BooleanProperty;
        static TRIAL_SPAWNER_STATE: $EnumProperty<$TrialSpawnerState>;
        static WEST: $BooleanProperty;
        static CHISELED_BOOKSHELF_SLOT_2_OCCUPIED: $BooleanProperty;
        static NORTH_WALL: $EnumProperty<$WallSide>;
        static MIN_LEVEL_CAULDRON: number;
        static BED_PART: $EnumProperty<$BedPart>;
        static NORTH: $BooleanProperty;
        static LEVEL_FLOWING: $IntegerProperty;
        static TILT: $EnumProperty<$Tilt>;
        static UP: $BooleanProperty;
        static SOUTH_REDSTONE: $EnumProperty<$RedstoneSide>;
        static MAX_AGE_15: number;
        static HORIZONTAL_FACING: $DirectionProperty;
        static BITES: $IntegerProperty;
        static SLAB_TYPE: $EnumProperty<$SlabType>;
        static MAX_AGE_2: number;
        static MAX_AGE_1: number;
        static ROTATION_16: $IntegerProperty;
        static CHISELED_BOOKSHELF_SLOT_1_OCCUPIED: $BooleanProperty;
        static MAX_AGE_7: number;
        static STABILITY_DISTANCE: $IntegerProperty;
        static MAX_AGE_5: number;
        static MAX_AGE_4: number;
        static MAX_AGE_3: number;
        static MAX_AGE_25: number;
        static DELAY: $IntegerProperty;
        static AXIS: $EnumProperty<$Direction$Axis>;
        static MAX_LEVEL_15: number;
        static HORIZONTAL_AXIS: $EnumProperty<$Direction$Axis>;
        static RAIL_SHAPE: $EnumProperty<$RailShape>;
        static MOISTURE: $IntegerProperty;
        static VERTICAL_DIRECTION: $DirectionProperty;
        static FLOWER_AMOUNT: $IntegerProperty;
        static DOUBLE_BLOCK_HALF: $EnumProperty<$DoubleBlockHalf>;
        static NOTE: $IntegerProperty;
        static BERRIES: $BooleanProperty;
        static RESPAWN_ANCHOR_CHARGES: $IntegerProperty;
        static EAST: $BooleanProperty;
        static PERSISTENT: $BooleanProperty;
        static HAS_RECORD: $BooleanProperty;
        static FACING_HOPPER: $DirectionProperty;
        static NOTEBLOCK_INSTRUMENT: $EnumProperty<$NoteBlockInstrument>;
        static POWERED: $BooleanProperty;
        static SHORT: $BooleanProperty;
        static CHISELED_BOOKSHELF_SLOT_3_OCCUPIED: $BooleanProperty;
        static WEST_REDSTONE: $EnumProperty<$RedstoneSide>;
        static ENABLED: $BooleanProperty;
        static INVERTED: $BooleanProperty;
        static FACING: $DirectionProperty;
        static DISARMED: $BooleanProperty;
        constructor();
    }
    export class $RailShape extends $Enum<$RailShape> implements $StringRepresentable {
        getName(): string;
        static values(): $RailShape[];
        static valueOf(arg0: string): $RailShape;
        isAscending(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static NORTH_WEST: $RailShape;
        static ASCENDING_WEST: $RailShape;
        static NORTH_EAST: $RailShape;
        static NORTH_SOUTH: $RailShape;
        static SOUTH_EAST: $RailShape;
        static EAST_WEST: $RailShape;
        static SOUTH_WEST: $RailShape;
        static ASCENDING_EAST: $RailShape;
        static ASCENDING_SOUTH: $RailShape;
        static ASCENDING_NORTH: $RailShape;
        get ascending(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $RailShape}.
     */
    export type $RailShape_ = "north_south" | "east_west" | "ascending_east" | "ascending_west" | "ascending_north" | "ascending_south" | "south_east" | "south_west" | "north_west" | "north_east";
    export class $NoteBlockInstrument extends $Enum<$NoteBlockInstrument> implements $StringRepresentable {
        getSoundEvent(): $Holder<$SoundEvent>;
        isTunable(): boolean;
        hasCustomSound(): boolean;
        worksAboveNoteBlock(): boolean;
        static values(): $NoteBlockInstrument[];
        static valueOf(arg0: string): $NoteBlockInstrument;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static BASS: $NoteBlockInstrument;
        static DIDGERIDOO: $NoteBlockInstrument;
        static BASEDRUM: $NoteBlockInstrument;
        static XYLOPHONE: $NoteBlockInstrument;
        static PIGLIN: $NoteBlockInstrument;
        static IRON_XYLOPHONE: $NoteBlockInstrument;
        static BIT: $NoteBlockInstrument;
        static CHIME: $NoteBlockInstrument;
        static PLING: $NoteBlockInstrument;
        static SNARE: $NoteBlockInstrument;
        static SKELETON: $NoteBlockInstrument;
        static WITHER_SKELETON: $NoteBlockInstrument;
        static GUITAR: $NoteBlockInstrument;
        static CUSTOM_HEAD: $NoteBlockInstrument;
        static BANJO: $NoteBlockInstrument;
        static CREEPER: $NoteBlockInstrument;
        static HARP: $NoteBlockInstrument;
        static ZOMBIE: $NoteBlockInstrument;
        static DRAGON: $NoteBlockInstrument;
        static HAT: $NoteBlockInstrument;
        static BELL: $NoteBlockInstrument;
        static COW_BELL: $NoteBlockInstrument;
        static FLUTE: $NoteBlockInstrument;
        get soundEvent(): $Holder<$SoundEvent>;
        get tunable(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $NoteBlockInstrument}.
     */
    export type $NoteBlockInstrument_ = "harp" | "basedrum" | "snare" | "hat" | "bass" | "flute" | "bell" | "guitar" | "chime" | "xylophone" | "iron_xylophone" | "cow_bell" | "didgeridoo" | "bit" | "banjo" | "pling" | "zombie" | "skeleton" | "creeper" | "dragon" | "wither_skeleton" | "piglin" | "custom_head";
    export class $WallSide extends $Enum<$WallSide> implements $StringRepresentable {
        static values(): $WallSide[];
        static valueOf(arg0: string): $WallSide;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static LOW: $WallSide;
        static TALL: $WallSide;
        static NONE: $WallSide;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $WallSide}.
     */
    export type $WallSide_ = "none" | "low" | "tall";
    export class $EnumProperty<T extends $Enum<T>> extends $Property<T> {
        /**
         * @return the name for the given value.
         */
        getName(value: T): string;
        /**
         * Create a new EnumProperty with all Enum constants of the given class.
         */
        static create<T extends $Enum<T>>(name: string, clazz: $Class<T>): $EnumProperty<T>;
        /**
         * Create a new EnumProperty with the specified values
         */
        static create<T extends $Enum<T>>(name: string, clazz: $Class<T>, values: $Collection_<T>): $EnumProperty<T>;
        /**
         * Create a new EnumProperty with the specified values
         */
        static create<T extends $Enum<T>>(name: string, clazz: $Class<T>, ...values: T[]): $EnumProperty<T>;
        /**
         * Create a new EnumProperty with all Enum constants of the given class that match the given Predicate.
         */
        static create<T extends $Enum<T>>(name: string, clazz: $Class<T>, filter: $Predicate_<T>): $EnumProperty<T>;
    }
    export class $RotationSegment {
        static getMaxSegmentIndex(): number;
        static convertToSegment(direction: $Direction_): number;
        static convertToSegment(angle: number): number;
        static convertToDirection(segment: number): ($Direction) | undefined;
        static convertToDegrees(segment: number): number;
        constructor();
        static get maxSegmentIndex(): number;
    }
    export class $ComparatorMode extends $Enum<$ComparatorMode> implements $StringRepresentable {
        static values(): $ComparatorMode[];
        static valueOf(arg0: string): $ComparatorMode;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static COMPARE: $ComparatorMode;
        static SUBTRACT: $ComparatorMode;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ComparatorMode}.
     */
    export type $ComparatorMode_ = "compare" | "subtract";
    export class $AttachFace extends $Enum<$AttachFace> implements $StringRepresentable {
        static values(): $AttachFace[];
        static valueOf(arg0: string): $AttachFace;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static FLOOR: $AttachFace;
        static WALL: $AttachFace;
        static CEILING: $AttachFace;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AttachFace}.
     */
    export type $AttachFace_ = "floor" | "wall" | "ceiling";
    export class $PistonType extends $Enum<$PistonType> implements $StringRepresentable {
        static values(): $PistonType[];
        static valueOf(arg0: string): $PistonType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static STICKY: $PistonType;
        static DEFAULT: $PistonType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PistonType}.
     */
    export type $PistonType_ = "normal" | "sticky";
    export class $Tilt extends $Enum<$Tilt> implements $StringRepresentable {
        causesVibration(): boolean;
        static values(): $Tilt[];
        static valueOf(arg0: string): $Tilt;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static PARTIAL: $Tilt;
        static NONE: $Tilt;
        static UNSTABLE: $Tilt;
        static FULL: $Tilt;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Tilt}.
     */
    export type $Tilt_ = "none" | "unstable" | "partial" | "full";
    export class $ChestType extends $Enum<$ChestType> implements $StringRepresentable {
        static values(): $ChestType[];
        static valueOf(arg0: string): $ChestType;
        getSerializedName(): string;
        getOpposite(): $ChestType;
        getRemappedEnumConstantName(): string;
        static SINGLE: $ChestType;
        static LEFT: $ChestType;
        static RIGHT: $ChestType;
        get serializedName(): string;
        get opposite(): $ChestType;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChestType}.
     */
    export type $ChestType_ = "single" | "left" | "right";
    export class $SculkSensorPhase extends $Enum<$SculkSensorPhase> implements $StringRepresentable {
        static values(): $SculkSensorPhase[];
        static valueOf(arg0: string): $SculkSensorPhase;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static COOLDOWN: $SculkSensorPhase;
        static ACTIVE: $SculkSensorPhase;
        static INACTIVE: $SculkSensorPhase;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SculkSensorPhase}.
     */
    export type $SculkSensorPhase_ = "inactive" | "active" | "cooldown";
    export class $DoubleBlockHalf extends $Enum<$DoubleBlockHalf> implements $StringRepresentable {
        getDirectionToOther(): $Direction;
        getOtherHalf(): $DoubleBlockHalf;
        static values(): $DoubleBlockHalf[];
        static valueOf(arg0: string): $DoubleBlockHalf;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static UPPER: $DoubleBlockHalf;
        static LOWER: $DoubleBlockHalf;
        get directionToOther(): $Direction;
        get otherHalf(): $DoubleBlockHalf;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DoubleBlockHalf}.
     */
    export type $DoubleBlockHalf_ = "upper" | "lower";
    export class $Property<T extends $Comparable<T>> {
        getAllValues(): $Stream<$Property$Value<T>>;
        getPossibleValues(): $Collection<T>;
        /**
         * @return the class of the values of this property
         */
        getValueClass(): $Class<T>;
        generateHashCode(): number;
        parseValue<U, S extends $StateHolder<never, S>>(ops: $DynamicOps<U>, stateHolder: S, unparsedValue: U): $DataResult<S>;
        getName(): string;
        /**
         * @return the name for the given value.
         */
        getName(value: T): string;
        value(value: T): $Property$Value<T>;
        value(holder: $StateHolder<never, never>): $Property$Value<T>;
        getValue(value: string): (T) | undefined;
        codec(): $Codec<T>;
        valueCodec(): $Codec<$Property$Value<T>>;
        get allValues(): $Stream<$Property$Value<T>>;
        get possibleValues(): $Collection<T>;
        get valueClass(): $Class<T>;
    }
    export class $BlockSetType$PressurePlateSensitivity extends $Enum<$BlockSetType$PressurePlateSensitivity> {
        static values(): $BlockSetType$PressurePlateSensitivity[];
        static valueOf(arg0: string): $BlockSetType$PressurePlateSensitivity;
        static MOBS: $BlockSetType$PressurePlateSensitivity;
        static EVERYTHING: $BlockSetType$PressurePlateSensitivity;
    }
    /**
     * Values that may be interpreted as {@link $BlockSetType$PressurePlateSensitivity}.
     */
    export type $BlockSetType$PressurePlateSensitivity_ = "everything" | "mobs";
    export class $BedPart extends $Enum<$BedPart> implements $StringRepresentable {
        static values(): $BedPart[];
        static valueOf(arg0: string): $BedPart;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HEAD: $BedPart;
        static FOOT: $BedPart;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BedPart}.
     */
    export type $BedPart_ = "head" | "foot";
    export class $Half extends $Enum<$Half> implements $StringRepresentable {
        static values(): $Half[];
        static valueOf(arg0: string): $Half;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TOP: $Half;
        static BOTTOM: $Half;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Half}.
     */
    export type $Half_ = "top" | "bottom";
    export class $WoodType extends $Record {
        fenceGateOpen(): $SoundEvent;
        soundType(): $SoundType;
        fenceGateClose(): $SoundEvent;
        hangingSignSoundType(): $SoundType;
        name(): string;
        static values(): $Stream<$WoodType>;
        static register(woodType: $WoodType_): $WoodType;
        setType(): $BlockSetType;
        static MANGROVE: $WoodType;
        static SPRUCE: $WoodType;
        static CHERRY: $WoodType;
        static CODEC: $Codec<$WoodType>;
        static BAMBOO: $WoodType;
        static BIRCH: $WoodType;
        static ACACIA: $WoodType;
        static JUNGLE: $WoodType;
        static WARPED: $WoodType;
        static OAK: $WoodType;
        static CRIMSON: $WoodType;
        static DARK_OAK: $WoodType;
        constructor(name: string, setType: $BlockSetType_);
        constructor(arg0: string, arg1: $BlockSetType_, arg2: $SoundType_, arg3: $SoundType_, arg4: $SoundEvent_, arg5: $SoundEvent_);
    }
    /**
     * Values that may be interpreted as {@link $WoodType}.
     */
    export type $WoodType_ = { name?: string, hangingSignSoundType?: $SoundType_, setType?: $BlockSetType_, fenceGateOpen?: $SoundEvent_, soundType?: $SoundType_, fenceGateClose?: $SoundEvent_,  } | [name?: string, hangingSignSoundType?: $SoundType_, setType?: $BlockSetType_, fenceGateOpen?: $SoundEvent_, soundType?: $SoundType_, fenceGateClose?: $SoundEvent_, ];
}
