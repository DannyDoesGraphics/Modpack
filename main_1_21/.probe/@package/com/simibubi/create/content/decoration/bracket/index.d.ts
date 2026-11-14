import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item$Properties, $BlockItem, $Item } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Map } from "@package/java/util";
import { $NonNullFunction } from "@package/com/tterrag/registrate/util/nullness";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $ItemBuilder } from "@package/com/tterrag/registrate/builders";
import { $Predicate_ } from "@package/java/util/function";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $DirectionProperty, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $DirectionalAxisBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";

declare module "@package/com/simibubi/create/content/decoration/bracket" {
    export class $BracketBlockItem extends $BlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block_, arg1: $Item$Properties);
    }
    export class $BracketGenerator extends $DirectionalAxisBlockStateGen {
        static itemModel<I extends $BlockItem, P>(arg0: string): $NonNullFunction<$ItemBuilder<I, P>, P>;
        constructor(arg0: string);
    }
    export class $BracketBlock$BracketType extends $Enum<$BracketBlock$BracketType> implements $StringRepresentable {
        static values(): $BracketBlock$BracketType[];
        static valueOf(arg0: string): $BracketBlock$BracketType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SHAFT: $BracketBlock$BracketType;
        static COG: $BracketBlock$BracketType;
        static PIPE: $BracketBlock$BracketType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BracketBlock$BracketType}.
     */
    export type $BracketBlock$BracketType_ = "pipe" | "cog" | "shaft";
    export class $BracketedBlockEntityBehaviour extends $BlockEntityBehaviour {
        isBracketValid(arg0: $BlockState_): boolean;
        isBracketPresent(): boolean;
        removeBracket(arg0: boolean): $BlockState;
        canHaveBracket(): boolean;
        applyBracket(arg0: $BlockState_): void;
        getBracket(): $BlockState;
        transformBracket(arg0: $StructureTransform): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$BracketedBlockEntityBehaviour>;
        constructor(arg0: $SmartBlockEntity);
        constructor(arg0: $SmartBlockEntity, arg1: $Predicate_<$BlockState>);
        get bracketPresent(): boolean;
        get bracket(): $BlockState;
    }
    export class $BracketBlock extends $WrenchableDirectionalBlock {
        getSuitableBracket(arg0: $BlockState_, arg1: $Direction_): ($BlockState) | undefined;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static AXIS_ALONG_FIRST_COORDINATE: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static TYPE: $EnumProperty<$BracketBlock$BracketType>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
}
