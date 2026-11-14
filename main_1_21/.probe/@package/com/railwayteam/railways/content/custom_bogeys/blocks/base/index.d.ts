import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $Item } from "@package/net/minecraft/world/item";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $AbstractBogeyBlock, $BogeySizes$BogeySize } from "@package/com/simibubi/create/content/trains/bogey";
import { $Direction$Axis, $IdMapper } from "@package/net/minecraft/core";
import { $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $CRBogeyBlockEntity } from "@package/com/railwayteam/railways/content/custom_bogeys/blocks/base/be";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ProperWaterloggedBlock, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as size from "@package/com/railwayteam/railways/content/custom_bogeys/blocks/base/size";
export * as be from "@package/com/railwayteam/railways/content/custom_bogeys/blocks/base/be";

declare module "@package/com/railwayteam/railways/content/custom_bogeys/blocks/base" {
    export class $CRBogeyBlock extends $AbstractBogeyBlock<$CRBogeyBlockEntity> implements $IBE<$CRBogeyBlockEntity>, $ProperWaterloggedBlock, $SpecialBlockItemRequirement {
        getConnectorAnchorOffset(): $Vec3;
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
        get connectorAnchorOffset(): $Vec3;
    }
}
