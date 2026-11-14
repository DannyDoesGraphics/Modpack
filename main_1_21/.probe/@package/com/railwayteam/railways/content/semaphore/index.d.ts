import { $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SignalBlockEntity, $SignalBlockEntity$SignalState, $SignalBlockEntity$SignalState_ } from "@package/com/simibubi/create/content/trains/signal";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $Map } from "@package/java/util";
import { $CenteredSideValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $InteractionResult, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Predicate, $Function_, $Consumer_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $IdMapper } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IOverridableSignal } from "@package/com/railwayteam/railways/content/distant_signals";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $HorizontalDirectionalBlock, $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/railwayteam/railways/content/semaphore" {
    export class $SemaphoreBlock extends $HorizontalDirectionalBlock implements $IBE<$SemaphoreBlockEntity>, $IWrenchable {
        onPlace(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getBlockEntityType(): $BlockEntityType<$SemaphoreBlockEntity>;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityClass(): $Class<$SemaphoreBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        useItemOn(arg0: $ItemStack_, arg1: $BlockState_, arg2: $Level_, arg3: $BlockPos_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SemaphoreBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SemaphoreBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SemaphoreBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SemaphoreBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SemaphoreBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$SemaphoreBlock>;
        static girderPlacementHelperId: number;
        static UPSIDE_DOWN: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static FLIPPED: $BooleanProperty;
        static UPDATE_INVISIBLE: number;
        static FULL: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static placementHelperId: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$SemaphoreBlockEntity>;
        get blockEntityClass(): $Class<$SemaphoreBlockEntity>;
    }
    export class $SemaphoreBlockEntity extends $SmartBlockEntity implements $IOverridableSignal {
        railways$getOverriddenState(): ($SignalBlockEntity$SignalState) | undefined;
        railways$refresh(arg0: $SignalBlockEntity, arg1: $SignalBlockEntity$SignalState_, arg2: number, arg3: boolean): void;
        wasCachedSearchingUpsideDown(): boolean;
        railways$refresh(arg0: $SignalBlockEntity, arg1: $SignalBlockEntity$SignalState_, arg2: number): void;
        isDistantSignal: boolean;
        level: $Level;
        isValid: boolean;
        armPosition: $LerpedFloat;
        static ATTACHMENTS_NBT_KEY: string;
        signalState: $SignalBlockEntity$SignalState;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $SemaphoreBlockEntity$SearchMode extends $Enum<$SemaphoreBlockEntity$SearchMode> implements $INamedIconOptions {
        getTranslationKey(): string;
        isUpsideDown(): boolean;
        static fromUpsideDown(arg0: boolean): $SemaphoreBlockEntity$SearchMode;
        static values(): $SemaphoreBlockEntity$SearchMode[];
        static valueOf(arg0: string): $SemaphoreBlockEntity$SearchMode;
        getIcon(): $AllIcons;
        static SEARCH_DOWN: $SemaphoreBlockEntity$SearchMode;
        static SEARCH_UP: $SemaphoreBlockEntity$SearchMode;
        get translationKey(): string;
        get upsideDown(): boolean;
        get icon(): $AllIcons;
    }
    /**
     * Values that may be interpreted as {@link $SemaphoreBlockEntity$SearchMode}.
     */
    export type $SemaphoreBlockEntity$SearchMode_ = "search_down" | "search_up";
    export class $SemaphoreBlockEntity$SemaphoreValueBoxTransform extends $CenteredSideValueBoxTransform {
    }
    export class $SemaphoreItem extends $BlockItem {
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
    export class $SemaphoreRenderer extends $SafeBlockEntityRenderer<$SemaphoreBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $SemaphoreBlock$GirderPlacementHelper implements $IPlacementHelper {
        getItemPredicate(): $Predicate<$ItemStack>;
        getStatePredicate(): $Predicate<$BlockState>;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        constructor();
        get itemPredicate(): $Predicate<$ItemStack>;
        get statePredicate(): $Predicate<$BlockState>;
    }
    export class $SemaphoreBlock$PlacementHelper implements $IPlacementHelper {
        getItemPredicate(): $Predicate<$ItemStack>;
        getStatePredicate(): $Predicate<$BlockState>;
        displayGhost(arg0: $PlacementOffset): void;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        constructor();
        get itemPredicate(): $Predicate<$ItemStack>;
        get statePredicate(): $Predicate<$BlockState>;
    }
}
