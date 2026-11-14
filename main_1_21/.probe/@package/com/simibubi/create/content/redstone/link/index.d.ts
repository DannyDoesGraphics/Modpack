import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $Map, $Set } from "@package/java/util";
import { $ClipboardCloneable } from "@package/com/simibubi/create/content/equipment/clipboard";
import { $BehaviourType, $BlockEntityBehaviour, $ValueBoxTransform, $ValueBoxTransform$Dual } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_, $IntConsumer_, $Consumer_, $IntSupplier_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FactoryPanelSupportBehaviour } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RedstoneLinkBlockEntityAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
export * as controller from "@package/com/simibubi/create/content/redstone/link/controller";

declare module "@package/com/simibubi/create/content/redstone/link" {
    export class $LinkRenderer {
        static renderOnBlockEntity(arg0: $SmartBlockEntity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        static tick(): void;
        constructor();
    }
    export class $IRedstoneLinkable {
    }
    export interface $IRedstoneLinkable {
        getNetworkKey(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        getTransmittedStrength(): number;
        isListening(): boolean;
        setReceivedStrength(arg0: number): void;
        getLocation(): $BlockPos;
        isAlive(): boolean;
        get networkKey(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        get transmittedStrength(): number;
        get listening(): boolean;
        set receivedStrength(value: number);
        get location(): $BlockPos;
        get alive(): boolean;
    }
    export class $RedstoneLinkNetworkHandler {
        networksIn(arg0: $LevelAccessor): $Map<$Couple<$RedstoneLinkNetworkHandler$Frequency>, $Set<$IRedstoneLinkable>>;
        addToNetwork(arg0: $LevelAccessor, arg1: $IRedstoneLinkable): void;
        updateNetworkOf(arg0: $LevelAccessor, arg1: $IRedstoneLinkable): void;
        removeFromNetwork(arg0: $LevelAccessor, arg1: $IRedstoneLinkable): void;
        static withinRange(arg0: $IRedstoneLinkable, arg1: $IRedstoneLinkable): boolean;
        hasAnyLoadedPower(arg0: $Couple<$RedstoneLinkNetworkHandler$Frequency>): boolean;
        onLoadWorld(arg0: $LevelAccessor): void;
        onUnloadWorld(arg0: $LevelAccessor): void;
        getNetworkOf(arg0: $LevelAccessor, arg1: $IRedstoneLinkable): $Set<$IRedstoneLinkable>;
        globalPowerVersion: $AtomicInteger;
        constructor();
    }
    export class $LinkBehaviour$SlotPositioning {
        scale(arg0: number): $LinkBehaviour$SlotPositioning;
        constructor(arg0: $Function_<$BlockState, $Pair<$Vec3, $Vec3>>, arg1: $Function_<$BlockState, $Vec3>);
    }
    export class $RedstoneLinkBlock extends $WrenchableDirectionalBlock implements $IBE<$RedstoneLinkBlockEntity> {
        toggleMode(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): $InteractionResult;
        getSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        getDirectSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        isSignalSource(arg0: $BlockState_): boolean;
        getBlockEntityType(): $BlockEntityType<$RedstoneLinkBlockEntity>;
        getBlockEntityClass(): $Class<$RedstoneLinkBlockEntity>;
        updateTransmittedSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): void;
        tick(arg0: $BlockState_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: $RandomSource): void;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$RedstoneLinkBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$RedstoneLinkBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$RedstoneLinkBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($RedstoneLinkBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $RedstoneLinkBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
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
        static FACING: $DirectionProperty;
        static RECEIVER: $BooleanProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$RedstoneLinkBlockEntity>;
        get blockEntityClass(): $Class<$RedstoneLinkBlockEntity>;
    }
    export class $RedstoneLinkBlockEntity extends $SmartBlockEntity implements $RedstoneLinkBlockEntityAccessor {
        getSignal(): number;
        getReceivedSignal(): number;
        updateSelfAndAttached(arg0: $BlockState_): void;
        transmit(arg0: number): void;
        setSignal(arg0: number): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getLink(): $LinkBehaviour;
        panelSupport: $FactoryPanelSupportBehaviour;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get receivedSignal(): number;
        get link(): $LinkBehaviour;
    }
    export class $RedstoneLinkFrequencySlot extends $ValueBoxTransform$Dual {
        constructor(arg0: boolean);
    }
    export class $RedstoneLinkNetworkHandler$Frequency {
        static of(arg0: $ItemStack_): $RedstoneLinkNetworkHandler$Frequency;
        getStack(): $ItemStack;
        static EMPTY: $RedstoneLinkNetworkHandler$Frequency;
        get stack(): $ItemStack;
    }
    export class $LinkBehaviour extends $BlockEntityBehaviour implements $IRedstoneLinkable, $ClipboardCloneable {
        static transmitter(arg0: $SmartBlockEntity, arg1: $Pair<$ValueBoxTransform, $ValueBoxTransform>, arg2: $IntSupplier_): $LinkBehaviour;
        getNetworkKey(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        getTransmittedStrength(): number;
        isListening(): boolean;
        setReceivedStrength(arg0: number): void;
        getClipboardKey(): string;
        writeToClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Direction_): boolean;
        readFromClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Player, arg3: $Direction_, arg4: boolean): boolean;
        testHit(arg0: boolean, arg1: $Vec3_): boolean;
        moveText(arg0: $Vec3_): $LinkBehaviour;
        copyItemsFrom(arg0: $LinkBehaviour): void;
        setFrequency(arg0: boolean, arg1: $ItemStack_): void;
        notifySignalChange(): void;
        static receiver(arg0: $SmartBlockEntity, arg1: $Pair<$ValueBoxTransform, $ValueBoxTransform>, arg2: $IntConsumer_): $LinkBehaviour;
        getLocation(): $BlockPos;
        isAlive(): boolean;
        newPosition: boolean;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$LinkBehaviour>;
        get networkKey(): $Couple<$RedstoneLinkNetworkHandler$Frequency>;
        get transmittedStrength(): number;
        get listening(): boolean;
        set receivedStrength(value: number);
        get clipboardKey(): string;
        get location(): $BlockPos;
        get alive(): boolean;
    }
    export class $LinkHandler {
        static onBlockActivated(arg0: $PlayerInteractEvent$RightClickBlock): void;
        constructor();
    }
    export class $RedstoneLinkGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $LinkBehaviour$Mode extends $Enum<$LinkBehaviour$Mode> {
    }
    /**
     * Values that may be interpreted as {@link $LinkBehaviour$Mode}.
     */
    export type $LinkBehaviour$Mode_ = "transmit" | "receive";
}
