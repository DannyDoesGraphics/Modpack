import { $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Item$Properties, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $AEBaseEntityBlock, $AEBaseBlockItem } from "@package/appeng/block";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map } from "@package/java/util";
import { $CraftingMonitorBlockEntity, $PatternProviderBlockEntity, $MolecularAssemblerBlockEntity, $CraftingBlockEntity } from "@package/appeng/blockentity/crafting";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/block/crafting" {
    export class $CraftingBlockItem extends $AEBaseBlockItem {
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
    export class $CraftingUnitType extends $Enum<$CraftingUnitType> implements $ICraftingUnitType {
        getStorageBytes(): number;
        getAcceleratorThreads(): number;
        getItemFromType(): $Item;
        static values(): $CraftingUnitType[];
        static valueOf(arg0: string): $CraftingUnitType;
        static STORAGE_16K: $CraftingUnitType;
        static UNIT: $CraftingUnitType;
        static ACCELERATOR: $CraftingUnitType;
        static MONITOR: $CraftingUnitType;
        static STORAGE_1K: $CraftingUnitType;
        static STORAGE_64K: $CraftingUnitType;
        static STORAGE_256K: $CraftingUnitType;
        static STORAGE_4K: $CraftingUnitType;
        get storageBytes(): number;
        get acceleratorThreads(): number;
        get itemFromType(): $Item;
    }
    /**
     * Values that may be interpreted as {@link $CraftingUnitType}.
     */
    export type $CraftingUnitType_ = "unit" | "accelerator" | "storage_1k" | "storage_4k" | "storage_16k" | "storage_64k" | "storage_256k" | "monitor";
    export class $PatternProviderBlock extends $AEBaseEntityBlock<$PatternProviderBlockEntity> {
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        setSide(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): void;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static PUSH_DIRECTION: $EnumProperty<$PushDirection>;
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
        constructor();
    }
    export class $PushDirection extends $Enum<$PushDirection> implements $StringRepresentable {
        static fromDirection(arg0: $Direction_): $PushDirection;
        static values(): $PushDirection[];
        static valueOf(arg0: string): $PushDirection;
        getDirection(): $Direction;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static ALL: $PushDirection;
        static DOWN: $PushDirection;
        static CODEC: $Codec<$PushDirection>;
        static NORTH: $PushDirection;
        static WEST: $PushDirection;
        static UP: $PushDirection;
        static SOUTH: $PushDirection;
        static EAST: $PushDirection;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $PushDirection>;
        get direction(): $Direction;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $PushDirection}.
     */
    export type $PushDirection_ = "down" | "up" | "north" | "south" | "west" | "east" | "all";
    export class $CraftingUnitBlock extends $AbstractCraftingUnitBlock<$CraftingBlockEntity> {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        type: $ICraftingUnitType;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static FORMED: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $ICraftingUnitType);
    }
    export class $CraftingMonitorBlock extends $AbstractCraftingUnitBlock<$CraftingMonitorBlockEntity> {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        type: $ICraftingUnitType;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static FORMED: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $ICraftingUnitType);
    }
    export class $ICraftingUnitType {
    }
    export interface $ICraftingUnitType {
        getStorageBytes(): number;
        getAcceleratorThreads(): number;
        getItemFromType(): $Item;
        get storageBytes(): number;
        get acceleratorThreads(): number;
        get itemFromType(): $Item;
    }
    export class $AbstractCraftingUnitBlock<T extends $CraftingBlockEntity> extends $AEBaseEntityBlock<T> {
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        upgrade(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $BlockHitResult): boolean;
        removeUpgrade(arg0: $Level_, arg1: $Player, arg2: $BlockPos_, arg3: $BlockState_): $InteractionResult;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        type: $ICraftingUnitType;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static FORMED: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $ICraftingUnitType);
    }
    export class $MolecularAssemblerBlock extends $AEBaseEntityBlock<$MolecularAssemblerBlockEntity> {
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
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
