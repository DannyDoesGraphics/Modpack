import { $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CreativeModeTab$ItemDisplayParameters_, $Item$Properties, $BlockItem, $Item, $CreativeModeTab$Output_, $ItemStack_, $Item$TooltipContext, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $MapColor } from "@package/net/minecraft/world/level/material";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $IOrientationStrategy, $BlockOrientation, $IOrientableBlock } from "@package/appeng/api/orientation";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List, $Map, $List_ } from "@package/java/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $IdMapper } from "@package/net/minecraft/core";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundType_, $Block_, $EntityBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $Class } from "@package/java/lang";
import { $AEBaseBlockEntity } from "@package/appeng/blockentity";
import { $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntityType, $BlockEntityTicker, $BlockEntityTicker_, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as misc from "@package/appeng/block/misc";
export * as qnb from "@package/appeng/block/qnb";
export * as networking from "@package/appeng/block/networking";
export * as storage from "@package/appeng/block/storage";
export * as crafting from "@package/appeng/block/crafting";
export * as paint from "@package/appeng/block/paint";
export * as spatial from "@package/appeng/block/spatial";
export * as orientation from "@package/appeng/block/orientation";

declare module "@package/appeng/block" {
    export class $AEBaseBlock extends $Block implements $IOrientableBlock {
        static defaultProps(arg0: $MapColor, arg1: $SoundType_): $BlockBehaviour$Properties;
        addToMainCreativeTab(arg0: $CreativeModeTab$ItemDisplayParameters_, arg1: $CreativeModeTab$Output_): void;
        static metalProps(): $BlockBehaviour$Properties;
        static stoneProps(): $BlockBehaviour$Properties;
        static glassProps(): $BlockBehaviour$Properties;
        getOrientationStrategy(): $IOrientationStrategy;
        static fixtureProps(): $BlockBehaviour$Properties;
        getRegistryName(): $ResourceLocation;
        getOrientation(arg0: $BlockState_): $BlockOrientation;
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
        get orientationStrategy(): $IOrientationStrategy;
        get registryName(): $ResourceLocation;
    }
    export class $AEBaseBlockItem extends $BlockItem {
        addCheckedInformation(arg0: $ItemStack_, arg1: $Item$TooltipContext, arg2: $List_<$Component_>, arg3: $TooltipFlag): void;
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
    export class $AEBaseEntityBlock<T extends $AEBaseBlockEntity> extends $AEBaseBlock implements $EntityBlock {
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        getTicker<T extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<T>): $BlockEntityTicker<T>;
        setBlockEntity(arg0: $Class<$Block_>, arg1: $BlockEntityType_<$Block_>, arg2: $BlockEntityTicker_<$Block>, arg3: $BlockEntityTicker_<$Block>): void;
        triggerEvent(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: number, arg4: number): boolean;
        getDrops(arg0: $BlockState_, arg1: $LootParams$Builder): $List<$ItemStack>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntityBlockState(arg0: $BlockState_, arg1: $BlockEntity): $BlockState;
        getBlockEntityType(): $BlockEntityType<$Block>;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $Block;
        getBlockEntity(arg0: $BlockGetter, arg1: number, arg2: number, arg3: number): $Block;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$Block>;
    }
    export class $IOwnerAwareBlockEntity {
    }
    export interface $IOwnerAwareBlockEntity {
        setOwner(arg0: $Player): void;
        set owner(value: $Player);
    }
    /**
     * Values that may be interpreted as {@link $IOwnerAwareBlockEntity}.
     */
    export type $IOwnerAwareBlockEntity_ = ((arg0: $Player) => void);
}
