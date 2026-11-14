import { $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $ValueBoxTransform$Sided } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $DirectionProperty, $EnumProperty, $AttachFace, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $HorizontalDirectionalBlock, $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $TransformableBlock } from "@package/com/simibubi/create/api/contraption/transformable";
export * as diodes from "@package/com/simibubi/create/content/redstone/diodes";
export * as displayLink from "@package/com/simibubi/create/content/redstone/displayLink";
export * as thresholdSwitch from "@package/com/simibubi/create/content/redstone/thresholdSwitch";
export * as link from "@package/com/simibubi/create/content/redstone/link";
export * as deskBell from "@package/com/simibubi/create/content/redstone/deskBell";
export * as analogLever from "@package/com/simibubi/create/content/redstone/analogLever";
export * as smartObserver from "@package/com/simibubi/create/content/redstone/smartObserver";
export * as nixieTube from "@package/com/simibubi/create/content/redstone/nixieTube";
export * as contact from "@package/com/simibubi/create/content/redstone/contact";
export * as rail from "@package/com/simibubi/create/content/redstone/rail";

declare module "@package/com/simibubi/create/content/redstone" {
    export class $FilteredDetectorFilterSlot extends $ValueBoxTransform$Sided {
        constructor(arg0: boolean);
    }
    export class $DirectedDirectionalBlock extends $HorizontalDirectionalBlock implements $IWrenchable, $TransformableBlock {
        static getTargetDirection(arg0: $BlockState_): $Direction;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        static TARGET: $EnumProperty<$AttachFace>;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$DirectedDirectionalBlock>;
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
    export class $RoseQuartzLampBlock extends $Block implements $IWrenchable {
        getSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        isSignalSource(arg0: $BlockState_): boolean;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        static UPDATE_IMMEDIATE: number;
        static ACTIVATE: $BooleanProperty;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
        static POWERING: $BooleanProperty;
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
}
