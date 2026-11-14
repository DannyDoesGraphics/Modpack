import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IPowerChannelState } from "@package/appeng/api/implementations";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SettingsFrom_, $IDebugExportable } from "@package/appeng/util";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $CableBusRenderState } from "@package/appeng/client/render/cablebus";
import { $List, $List_ } from "@package/java/util";
import { $IActionHost } from "@package/appeng/api/networking/security";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $InteractionHand_, $Nameable } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $Reference2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentMap, $DataComponentMap_, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $Record, $Runnable_, $Object } from "@package/java/lang";
import { $AEMultiBlockEntity } from "@package/appeng/helpers";
import { $LevelAccessor, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGridNodeListener, $IManagedGridNode, $IGridNode, $IGridNodeListener$State_ } from "@package/appeng/api/networking";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IPartItem, $IPartCollisionHelper, $IPartHost, $BusSupport_, $IFacadeContainer, $IPart, $IPartModel, $IFacadePart, $SelectedPart } from "@package/appeng/api/parts";
import { $ISegmentedInventory, $InternalInventory } from "@package/appeng/api/inventories";
import { $AEColor_, $AECableType_, $AEColor, $AECableType, $DimensionalBlockPos } from "@package/appeng/api/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $JsonWriter } from "@package/com/google/gson/stream";
import { $AABB_, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
export * as automation from "@package/appeng/parts/automation";
export * as p2p from "@package/appeng/parts/p2p";
export * as reporting from "@package/appeng/parts/reporting";
export * as networking from "@package/appeng/parts/networking";
export * as encoding from "@package/appeng/parts/encoding";
export * as misc from "@package/appeng/parts/misc";
export * as storagebus from "@package/appeng/parts/storagebus";
export * as crafting from "@package/appeng/parts/crafting";

declare module "@package/appeng/parts" {
    export class $PartPlacement {
        static getPartPlacement(arg0: $Player, arg1: $Level_, arg2: $ItemStack_, arg3: $BlockPos_, arg4: $Direction_, arg5: $Vec3_): $PartPlacement$Placement;
        static canPlacePartOnBlock(arg0: $Player, arg1: $Level_, arg2: $ItemStack_, arg3: $BlockPos_, arg4: $Direction_): boolean;
        static placePart<T extends $IPart>(arg0: $Player, arg1: $Level_, arg2: $IPartItem<T>, arg3: $DataComponentMap_, arg4: $BlockPos_, arg5: $Direction_): T;
        static place(arg0: $UseOnContext): $InteractionResult;
        constructor();
    }
    export class $BusCollisionHelper implements $IPartCollisionHelper {
        getWorldX(): $Direction;
        getWorldY(): $Direction;
        getWorldZ(): $Direction;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isBBCollision(): boolean;
        constructor(arg0: $List_<$AABB_>, arg1: $Direction_, arg2: boolean);
        constructor(arg0: $List_<$AABB_>, arg1: $Direction_, arg2: $Direction_, arg3: $Direction_, arg4: boolean);
        get worldX(): $Direction;
        get worldY(): $Direction;
        get worldZ(): $Direction;
        get BBCollision(): boolean;
    }
    export class $CableBusStorage {
        getFacade(arg0: $Direction_): $IFacadePart;
        removeFacade(arg0: $Direction_): void;
        setFacade(arg0: $Direction_, arg1: $IFacadePart): void;
        constructor();
    }
    export class $PartAdjacentApi<T> {
        static isPartValid(arg0: $AEBasePart): boolean;
        find(): T;
        constructor(arg0: $AEBasePart, arg1: $BlockCapability<T, $Direction_>);
        constructor(arg0: $AEBasePart, arg1: $BlockCapability<T, $Direction_>, arg2: $Runnable_);
    }
    export class $ICableBusContainer {
    }
    export interface $ICableBusContainer {
        getLightValue(): number;
        canConnectRedstone(arg0: $Direction_): boolean;
        onEntityCollision(arg0: $Entity): void;
        useWithoutItem(arg0: $Player, arg1: $Vec3_): boolean;
        isLadder(arg0: $LivingEntity): boolean;
        onNeighborChanged(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockPos_): void;
        onUpdateShape(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction_): void;
        isProvidingStrongPower(arg0: $Direction_): number;
        isProvidingWeakPower(arg0: $Direction_): number;
        selectPartLocal(arg0: $Vec3_): $SelectedPart;
        recolourBlock(arg0: $Direction_, arg1: $AEColor_, arg2: $Player): boolean;
        getRenderState(): $CableBusRenderState;
        isEmpty(): boolean;
        useItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        get lightValue(): number;
        get renderState(): $CableBusRenderState;
        get empty(): boolean;
    }
    export class $AEBasePart$NodeListener<T extends $AEBasePart> implements $IGridNodeListener<T> {
        onSaveChanges(arg0: T, arg1: $IGridNode): void;
        onStateChanged(arg0: T, arg1: $IGridNode, arg2: $IGridNodeListener$State_): void;
        onInWorldConnectionChanged(arg0: T, arg1: $IGridNode): void;
        onOwnerChanged(arg0: T, arg1: $IGridNode): void;
        onGridChanged(arg0: T, arg1: $IGridNode): void;
        static INSTANCE: $AEBasePart$NodeListener<$AEBasePart>;
        constructor();
    }
    export class $CableBusContainer implements $AEMultiBlockEntity, $ICableBusContainer {
        isRequiresDynamicRender(): boolean;
        getLightValue(): number;
        canConnectRedstone(arg0: $Direction_): boolean;
        onEntityCollision(arg0: $Entity): void;
        useWithoutItem(arg0: $Player, arg1: $Vec3_): boolean;
        isLadder(arg0: $LivingEntity): boolean;
        notifyNeighbors(): void;
        clearContent(): void;
        clearContainer(): void;
        isInWorld(): boolean;
        getGridNode(arg0: $Direction_): $IGridNode;
        readFromStream(arg0: $RegistryFriendlyByteBuf): boolean;
        writeToStream(arg0: $RegistryFriendlyByteBuf): void;
        replacePart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $Direction_, arg2: $Player, arg3: $InteractionHand_): T;
        markForSave(): void;
        markForUpdate(): void;
        getCableConnectionLength(arg0: $AECableType_): number;
        removeFromWorld(): void;
        addToWorld(): void;
        onNeighborChanged(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockPos_): void;
        onUpdateShape(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction_): void;
        isProvidingStrongPower(arg0: $Direction_): number;
        isProvidingWeakPower(arg0: $Direction_): number;
        addAdditionalDrops(arg0: $List_<$ItemStack_>): void;
        updateConnections(): void;
        getCableConnectionType(arg0: $Direction_): $AECableType;
        getPart(arg0: $Direction_): $IPart;
        partChanged(): void;
        selectPartLocal(arg0: $Vec3_): $SelectedPart;
        getFacadeContainer(): $IFacadeContainer;
        canAddPart(arg0: $ItemStack_, arg1: $Direction_): boolean;
        addPart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $Direction_, arg2: $Player): T;
        removePartFromSide(arg0: $Direction_): void;
        removePart(arg0: $IPart): boolean;
        hasRedstone(): boolean;
        notifyNeighborNow(arg0: $Direction_): void;
        recolourBlock(arg0: $Direction_, arg1: $AEColor_, arg2: $Player): boolean;
        addPartDrops(arg0: $List_<$ItemStack_>): $List<$ItemStack>;
        getRenderState(): $CableBusRenderState;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        isEmpty(): boolean;
        getLocation(): $DimensionalBlockPos;
        cleanup(): void;
        getShape(): $VoxelShape;
        static isLoading(): boolean;
        setHost(arg0: $IPartHost): void;
        getColor(): $AEColor;
        useItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        isBlocked(arg0: $Direction_): boolean;
        getBlockEntity(): $BlockEntity;
        getCollisionShape(arg0: $CollisionContext): $VoxelShape;
        selectPartWorld(arg0: $Vec3_): $SelectedPart;
        constructor(arg0: $IPartHost);
        get requiresDynamicRender(): boolean;
        get lightValue(): number;
        get inWorld(): boolean;
        get facadeContainer(): $IFacadeContainer;
        get renderState(): $CableBusRenderState;
        get empty(): boolean;
        get location(): $DimensionalBlockPos;
        get shape(): $VoxelShape;
        static get loading(): boolean;
        set host(value: $IPartHost);
        get color(): $AEColor;
        get blockEntity(): $BlockEntity;
    }
    export class $VoxelShapeCache {
    }
    export class $AEBasePart implements $IPart, $IActionHost, $ISegmentedInventory, $IPowerChannelState, $Nameable, $IDebugExportable {
        isPowered(): boolean;
        addEntityCrashInfo(arg0: $CrashReportCategory): void;
        getGridNode(): $IGridNode;
        getMainNode(): $IManagedGridNode;
        readFromStream(arg0: $RegistryFriendlyByteBuf): boolean;
        writeToStream(arg0: $RegistryFriendlyByteBuf): void;
        getPartItem(): $IPartItem<never>;
        exportSettings(arg0: $SettingsFrom_, arg1: $DataComponentMap$Builder): void;
        exportSettings(arg0: $SettingsFrom_): $DataComponentMap;
        importSettings(arg0: $SettingsFrom_, arg1: $DataComponentMap_, arg2: $Player): void;
        getCableConnectionLength(arg0: $AECableType_): number;
        useStandardMemoryCard(): boolean;
        onUseItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        readVisualStateFromNBT(arg0: $CompoundTag_): void;
        isMissingChannel(): boolean;
        getActionableNode(): $IGridNode;
        writeVisualStateToNBT(arg0: $CompoundTag_): void;
        removeFromWorld(): void;
        addToWorld(): void;
        setPartHostInfo(arg0: $Direction_, arg1: $IPartHost, arg2: $BlockEntity): void;
        onPlacement(arg0: $Player): void;
        getSubInventory(arg0: $ResourceLocation_): $InternalInventory;
        debugExport(arg0: $JsonWriter, arg1: $HolderLookup$Provider, arg2: $Reference2IntMap<$Object>, arg3: $Reference2IntMap<$IGridNode>): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        getName(): $Component;
        getHost(): $IPartHost;
        isActive(): boolean;
        getLevel(): $Level;
        getSide(): $Direction;
        getBlockEntity(): $BlockEntity;
        isClientSide(): boolean;
        getCustomName(): $Component;
        canConnectRedstone(): boolean;
        getLightLevel(): number;
        getModelData(): $ModelData;
        onEntityCollision(arg0: $Entity): void;
        isLadder(arg0: $LivingEntity): boolean;
        isSolid(): boolean;
        clearContent(): void;
        canBePlacedOn(arg0: $BusSupport_): boolean;
        renderDynamic(arg0: number, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: number, arg4: number): void;
        requireDynamicRender(): boolean;
        onNeighborChanged(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockPos_): void;
        onUpdateShape(arg0: $Direction_): void;
        isProvidingStrongPower(): number;
        isProvidingWeakPower(): number;
        getExternalFacingNode(): $IGridNode;
        getExternalCableConnectionType(): $AECableType;
        onUseWithoutItem(arg0: $Player, arg1: $Vec3_): boolean;
        onShiftClicked(arg0: $Player, arg1: $Vec3_): boolean;
        addPartDrop(arg0: $List_<$ItemStack_>, arg1: boolean): void;
        addAdditionalDrops(arg0: $List_<$ItemStack_>, arg1: boolean): void;
        getStaticModels(): $IPartModel;
        getDesiredConnectionType(): $AECableType;
        onClicked(arg0: $Player, arg1: $Vec3_): boolean;
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        getDisplayName(): $Component;
        hasCustomName(): boolean;
        constructor(arg0: $IPartItem<never>);
        get powered(): boolean;
        get gridNode(): $IGridNode;
        get mainNode(): $IManagedGridNode;
        get partItem(): $IPartItem<never>;
        get missingChannel(): boolean;
        get actionableNode(): $IGridNode;
        get name(): $Component;
        get host(): $IPartHost;
        get active(): boolean;
        get level(): $Level;
        get side(): $Direction;
        get blockEntity(): $BlockEntity;
        get clientSide(): boolean;
        get customName(): $Component;
        get lightLevel(): number;
        get modelData(): $ModelData;
        get solid(): boolean;
        get providingStrongPower(): number;
        get providingWeakPower(): number;
        get externalFacingNode(): $IGridNode;
        get externalCableConnectionType(): $AECableType;
        get staticModels(): $IPartModel;
        get desiredConnectionType(): $AECableType;
        get displayName(): $Component;
    }
    export class $PartModel implements $IPartModel {
        getModels(): $List<$ResourceLocation>;
        requireCableConnection(): boolean;
        constructor(arg0: $ResourceLocation_);
        constructor(arg0: boolean, arg1: $List_<$ResourceLocation_>);
        constructor(arg0: $List_<$ResourceLocation_>);
        constructor(arg0: boolean, ...arg1: $ResourceLocation_[]);
        constructor(arg0: boolean, arg1: $ResourceLocation_);
        constructor(...arg0: $ResourceLocation_[]);
        get models(): $List<$ResourceLocation>;
    }
    export class $PartPlacement$Placement extends $Record {
        pos(): $BlockPos;
        side(): $Direction;
        constructor(pos: $BlockPos_, side: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $PartPlacement$Placement}.
     */
    export type $PartPlacement$Placement_ = { pos?: $BlockPos_, side?: $Direction_,  } | [pos?: $BlockPos_, side?: $Direction_, ];
    export class $NullCableBusContainer implements $ICableBusContainer {
        getLightValue(): number;
        canConnectRedstone(arg0: $Direction_): boolean;
        onEntityCollision(arg0: $Entity): void;
        useWithoutItem(arg0: $Player, arg1: $Vec3_): boolean;
        isLadder(arg0: $LivingEntity): boolean;
        onNeighborChanged(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockPos_): void;
        onUpdateShape(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction_): void;
        isProvidingStrongPower(arg0: $Direction_): number;
        isProvidingWeakPower(arg0: $Direction_): number;
        selectPartLocal(arg0: $Vec3_): $SelectedPart;
        recolourBlock(arg0: $Direction_, arg1: $AEColor_, arg2: $Player): boolean;
        getRenderState(): $CableBusRenderState;
        isEmpty(): boolean;
        useItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        constructor();
        get lightValue(): number;
        get renderState(): $CableBusRenderState;
        get empty(): boolean;
    }
}
