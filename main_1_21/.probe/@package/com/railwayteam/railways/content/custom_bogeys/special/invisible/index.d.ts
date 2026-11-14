import { $Instance } from "@package/dev/engine_room/flywheel/api/instance";
import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Item } from "@package/net/minecraft/world/item";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $AbstractBogeyBlockEntity, $AbstractBogeyBlock, $BogeySizes$BogeySize, $BogeyVisual, $BogeyRenderer } from "@package/com/simibubi/create/content/trains/bogey";
import { $Consumer_ } from "@package/java/util/function";
import { $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction$Axis, $IdMapper } from "@package/net/minecraft/core";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/special/invisible" {
    export class $InvisibleBogeyBlockEntity extends $AbstractBogeyBlockEntity {
        static BOGEY_STYLE_KEY: string;
        static BOGEY_DATA_KEY: string;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $InvisibleBogeyBlock extends $AbstractBogeyBlock<$InvisibleBogeyBlockEntity> implements $IBE<$InvisibleBogeyBlockEntity>, $ProperWaterloggedBlock, $SpecialBlockItemRequirement {
        getConnectorAnchorOffset(): $Vec3;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AbstractBogeyBlock<never>>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        size: $BogeySizes$BogeySize;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
        get connectorAnchorOffset(): $Vec3;
    }
    export class $InvisibleBogeyRenderer implements $BogeyRenderer {
        render(arg0: $CompoundTag_, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number, arg7: boolean): void;
        constructor();
    }
    export class $InvisibleBogeyVisual implements $BogeyVisual {
        hide(): void;
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
        updateLight(arg0: number): void;
        update(arg0: $CompoundTag_, arg1: number, arg2: $PoseStack): void;
        "delete"(): void;
        constructor(arg0: $VisualizationContext, arg1: number, arg2: boolean);
    }
}
