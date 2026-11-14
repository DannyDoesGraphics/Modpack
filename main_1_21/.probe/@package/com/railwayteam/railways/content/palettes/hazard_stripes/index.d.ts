import { $InteractionResult } from "@package/net/minecraft/world";
import { $Direction_, $Direction$Axis, $IdMapper } from "@package/net/minecraft/core";
import { $DirectionProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $Item } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Mirror_, $Rotation_, $Block } from "@package/net/minecraft/world/level/block";
import { $PalettesColor_, $PalettesColor } from "@package/com/railwayteam/railways/content/palettes";
import { $NonNullFunction } from "@package/com/tterrag/registrate/util/nullness";

declare module "@package/com/railwayteam/railways/content/palettes/hazard_stripes" {
    export class $DirectionalHazardStripesBlock extends $HazardStripesBlock {
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
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
        constructor(arg0: $BlockBehaviour$Properties, arg1: $PalettesColor_, arg2: $PalettesColor_);
    }
    export class $AxialHazardStripesBlock extends $HazardStripesBlock {
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
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
        constructor(arg0: $BlockBehaviour$Properties, arg1: $PalettesColor_, arg2: $PalettesColor_);
    }
    export class $HazardStripesBlock extends $Block implements $IWrenchable {
        getBaseColor(): $PalettesColor;
        static directional(arg0: $PalettesColor_, arg1: $PalettesColor_): $NonNullFunction<$BlockBehaviour$Properties, $HazardStripesBlock>;
        getMainColor(): $PalettesColor;
        static axial(arg0: $PalettesColor_, arg1: $PalettesColor_): $NonNullFunction<$BlockBehaviour$Properties, $HazardStripesBlock>;
        static create(arg0: boolean, arg1: $PalettesColor_, arg2: $PalettesColor_): $NonNullFunction<$BlockBehaviour$Properties, $HazardStripesBlock>;
        getYRot(arg0: $BlockState_): number;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
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
        constructor(arg0: $BlockBehaviour$Properties, arg1: $PalettesColor_, arg2: $PalettesColor_);
        get baseColor(): $PalettesColor;
        get mainColor(): $PalettesColor;
    }
}
