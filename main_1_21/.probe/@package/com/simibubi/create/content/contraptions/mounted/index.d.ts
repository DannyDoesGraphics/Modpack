import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $List_, $Map } from "@package/java/util";
import { $CenteredSideValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$EntityInteract } from "@package/net/neoforged/neoforge/event/entity/player";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $AssemblyException, $OrientedContraptionEntity, $IDisplayAssemblyExceptions, $AbstractContraptionEntity, $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $RailShape, $Property, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $Block_, $Rotation_, $BaseRailBlock, $Mirror_, $Block } from "@package/net/minecraft/world/level/block";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $AbstractMinecart$Type_, $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/contraptions/mounted" {
    export class $MinecartContraptionItem extends $Item {
        static rideable(arg0: $Item$Properties): $MinecartContraptionItem;
        static addContraptionToMinecart(arg0: $Level_, arg1: $ItemStack_, arg2: $AbstractMinecart, arg3: $Direction_): void;
        static wrenchCanBeUsedToPickUpMinecartContraptions(arg0: $PlayerInteractEvent$EntityInteract): void;
        static chest(arg0: $Item$Properties): $MinecartContraptionItem;
        static furnace(arg0: $Item$Properties): $MinecartContraptionItem;
        static create(arg0: $AbstractMinecart$Type_, arg1: $OrientedContraptionEntity): $ItemStack;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
    }
    export class $CartAssembleRailType extends $Enum<$CartAssembleRailType> implements $StringRepresentable {
        getBlock(): $Block;
        static values(): $CartAssembleRailType[];
        static valueOf(arg0: string): $CartAssembleRailType;
        matches(arg0: $BlockState_): boolean;
        getItem(): $Item;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static DETECTOR_RAIL: $CartAssembleRailType;
        static REGULAR: $CartAssembleRailType;
        static CONTROLLER_RAIL: $CartAssembleRailType;
        static ACTIVATOR_RAIL: $CartAssembleRailType;
        static POWERED_RAIL: $CartAssembleRailType;
        get block(): $Block;
        get item(): $Item;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CartAssembleRailType}.
     */
    export type $CartAssembleRailType_ = "regular" | "powered_rail" | "detector_rail" | "activator_rail" | "controller_rail";
    export class $CartAssemblerBlock$CartAssemblerAction extends $Enum<$CartAssemblerBlock$CartAssemblerAction> {
        shouldAssemble(): boolean;
        shouldDisassemble(): boolean;
        static values(): $CartAssemblerBlock$CartAssemblerAction[];
        static valueOf(arg0: string): $CartAssemblerBlock$CartAssemblerAction;
        static ASSEMBLE_ACCELERATE_DIRECTIONAL: $CartAssemblerBlock$CartAssemblerAction;
        static DISASSEMBLE: $CartAssemblerBlock$CartAssemblerAction;
        static PASS: $CartAssemblerBlock$CartAssemblerAction;
        static ASSEMBLE: $CartAssemblerBlock$CartAssemblerAction;
        static DISASSEMBLE_BRAKE: $CartAssemblerBlock$CartAssemblerAction;
        static ASSEMBLE_ACCELERATE: $CartAssemblerBlock$CartAssemblerAction;
    }
    /**
     * Values that may be interpreted as {@link $CartAssemblerBlock$CartAssemblerAction}.
     */
    export type $CartAssemblerBlock$CartAssemblerAction_ = "assemble" | "disassemble" | "assemble_accelerate" | "disassemble_brake" | "assemble_accelerate_directional" | "pass";
    export class $CartAssemblerBlock extends $BaseRailBlock implements $IBE<$CartAssemblerBlockEntity>, $IWrenchable, $SpecialBlockItemRequirement {
        static canAssembleTo(arg0: $AbstractMinecart): boolean;
        static getRailBlock(arg0: $BlockState_): $BlockState;
        getDropsNoRail(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $BlockEntity, arg4: $Entity, arg5: $ItemStack_): $List<$ItemStack>;
        static createAnchor(arg0: $BlockState_): $BlockState;
        static getActionForCart(arg0: $BlockState_, arg1: $AbstractMinecart): $CartAssemblerBlock$CartAssemblerAction;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        getDrops(arg0: $BlockState_, arg1: $LootParams$Builder): $List<$ItemStack>;
        static getHorizontalDirection(arg0: $BlockState_): $Direction;
        getBlockEntityType(): $BlockEntityType<$CartAssemblerBlockEntity>;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$CartAssemblerBlockEntity>;
        rotate(arg0: $BlockState_, arg1: $Rotation_): $BlockState;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        mirror(arg0: $BlockState_, arg1: $Mirror_): $BlockState;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CartAssemblerBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CartAssemblerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$CartAssemblerBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($CartAssemblerBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $CartAssemblerBlockEntity;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$CartAssemblerBlock>;
        static BACKWARDS: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static RAIL_SHAPE: $Property<$RailShape>;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static RAIL_TYPE: $Property<$CartAssembleRailType>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$CartAssemblerBlockEntity>;
        get blockEntityClass(): $Class<$CartAssemblerBlockEntity>;
    }
    export class $CartAssemblerBlockEntity extends $SmartBlockEntity implements $IDisplayAssemblyExceptions {
        tryAssemble(arg0: $AbstractMinecart): void;
        assembleNextTick(arg0: $AbstractMinecart): void;
        getLastAssemblyException(): $AssemblyException;
        isMinecartUpdateValid(): boolean;
        resetTicksSinceMinecartUpdate(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        addExceptionToTooltip(arg0: $List_<$Component_>): boolean;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get lastAssemblyException(): $AssemblyException;
        get minecartUpdateValid(): boolean;
    }
    export class $CartAssemblerBlockItem extends $BlockItem {
        tryPlaceAssembler(arg0: $UseOnContext): boolean;
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
    export class $MountedContraption extends $Contraption {
        addExtraInventories(arg0: $Entity): void;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        rotationMode: $CartAssemblerBlockEntity$CartMovementMode;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        connectedCart: $AbstractMinecart;
        entity: $AbstractContraptionEntity;
        constructor();
        constructor(arg0: $CartAssemblerBlockEntity$CartMovementMode_);
    }
    export class $CartAssemblerBlockEntity$CartAssemblerValueBoxTransform extends $CenteredSideValueBoxTransform {
    }
    export class $CartAssemblerBlock$MinecartAnchorBlock extends $Block {
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
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
    }
    export class $CartAssemblerBlockEntity$CartMovementMode extends $Enum<$CartAssemblerBlockEntity$CartMovementMode> implements $INamedIconOptions {
        getTranslationKey(): string;
        static values(): $CartAssemblerBlockEntity$CartMovementMode[];
        static valueOf(arg0: string): $CartAssemblerBlockEntity$CartMovementMode;
        getIcon(): $AllIcons;
        static ROTATE: $CartAssemblerBlockEntity$CartMovementMode;
        static ROTATION_LOCKED: $CartAssemblerBlockEntity$CartMovementMode;
        static ROTATE_PAUSED: $CartAssemblerBlockEntity$CartMovementMode;
        get translationKey(): string;
        get icon(): $AllIcons;
    }
    /**
     * Values that may be interpreted as {@link $CartAssemblerBlockEntity$CartMovementMode}.
     */
    export type $CartAssemblerBlockEntity$CartMovementMode_ = "rotate" | "rotate_paused" | "rotation_locked";
}
