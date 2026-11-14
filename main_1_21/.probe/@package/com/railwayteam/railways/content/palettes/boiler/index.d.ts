import { $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $IHasCustomOutline } from "@package/com/railwayteam/railways/mixin_interfaces";
import { $CTSpriteShiftEntry, $ConnectedTextureBehaviour } from "@package/com/simibubi/create/foundation/block/connected";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CRPalettes$Wrapping_ } from "@package/com/railwayteam/railways/registry";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $PalettesColor_ } from "@package/com/railwayteam/railways/content/palettes";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionResult, $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_, $Direction$Axis, $Direction$Axis_, $IdMapper } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $PoleHelper } from "@package/com/simibubi/create/foundation/placement";
import { $IHaveBigOutline } from "@package/com/simibubi/create/foundation/block";
import { $Rotation_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
export * as neoforge from "@package/com/railwayteam/railways/content/palettes/boiler/neoforge";

declare module "@package/com/railwayteam/railways/content/palettes/boiler" {
    export class $BoilerGenerator extends $SpecialBlockStateGen {
        static create(arg0: $PalettesColor_, arg1: $CRPalettes$Wrapping_): $BoilerGenerator;
    }
    export class $BoilerBlock extends $Block implements $IWrenchable, $IHasCustomOutline, $IHaveBigOutline {
        getOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getInteractionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getShadeBrightness(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): number;
        skipRendering(arg0: $BlockState_, arg1: $BlockState_, arg2: $Direction_): boolean;
        matrixRotation(arg0: $PoseStack, arg1: $BlockState_): void;
        customOutline(arg0: $PoseStack, arg1: $VertexConsumer, arg2: $BlockState_): void;
        getShapeForState(arg0: $BlockState_): $VoxelShape;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        useItemOn(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        drawLineWithAxisOffset(arg0: $VertexConsumer, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Direction$Axis_): void;
        drawLine(arg0: $VertexConsumer, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static STYLE: $EnumProperty<$BoilerBlock$Style>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static HORIZONTAL_AXIS: $EnumProperty<$Direction$Axis>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static RAISED: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static placementHelperId: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BoilerCTBehaviour extends $ConnectedTextureBehaviour {
        constructor(arg0: $CTSpriteShiftEntry);
    }
    export class $BoilerBlock$PlacementHelper extends $PoleHelper<$Direction$Axis> {
    }
    export class $BoilerBlock$Style extends $Enum<$BoilerBlock$Style> implements $StringRepresentable {
        static values(): $BoilerBlock$Style[];
        static valueOf(arg0: string): $BoilerBlock$Style;
        getTexture(): string;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static GULLET: $BoilerBlock$Style;
        static SMOKEBOX: $BoilerBlock$Style;
        get texture(): string;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BoilerBlock$Style}.
     */
    export type $BoilerBlock$Style_ = "gullet" | "smokebox";
}
