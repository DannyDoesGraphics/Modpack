import { $Level, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $PalettesColor_, $PalettesColor } from "@package/com/railwayteam/railways/content/palettes";
import { $NonNullFunction } from "@package/com/tterrag/registrate/util/nullness";
import { $Supplier } from "@package/java/util/function";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $DirectionProperty, $DoorHingeSide, $EnumProperty, $BlockSetType, $BooleanProperty, $DoubleBlockHalf } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $SlidingDoorBlockEntity, $SlidingDoorBlock } from "@package/com/simibubi/create/content/decoration/slidingDoor";
import { $IHaveBigOutline } from "@package/com/simibubi/create/foundation/block";
import { $DoorBlock } from "@package/net/minecraft/world/level/block";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/railwayteam/railways/content/palettes/doors" {
    export class $HingedDoorBlock extends $DoorBlock implements $IWrenchable {
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$DoorBlock>;
        static WINDOWED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$DoubleBlockHalf>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static HINGE: $EnumProperty<$DoorHingeSide>;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $PalettesSlidingDoorBlockEntity extends $SlidingDoorBlockEntity {
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $PalettesSlidingDoorBlock extends $SlidingDoorBlock implements $IWrenchable, $IHaveBigOutline {
        static create(arg0: boolean, arg1: $PalettesColor_): $NonNullFunction<$BlockBehaviour$Properties, $PalettesSlidingDoorBlock>;
        color: $PalettesColor;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static VISIBLE: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static TRAIN_SET_TYPE: $Supplier<$BlockSetType>;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$DoubleBlockHalf>;
        static UPDATE_ALL: number;
        static HINGE: $EnumProperty<$DoorHingeSide>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$DoorBlock>;
        static WINDOWED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static STONE_SET_TYPE: $Supplier<$BlockSetType>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static GLASS_SET_TYPE: $Supplier<$BlockSetType>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: boolean, arg2: $PalettesColor_);
    }
}
