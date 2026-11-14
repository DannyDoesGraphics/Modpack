import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $SettingsFrom_ } from "@package/appeng/util";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Map_, $Collection_, $List_, $Set } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $InteractionHand_ } from "@package/net/minecraft/world";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentMap_, $DataComponentMap$Builder } from "@package/net/minecraft/core/component";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $ItemLike, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IGridNode } from "@package/appeng/api/networking";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AECableType_, $AEColor, $AECableType, $DimensionalBlockPos } from "@package/appeng/api/util";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ICapabilityProvider_, $RegisterCapabilitiesEvent, $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/appeng/api/parts" {
    export class $IPartCollisionHelper {
    }
    export interface $IPartCollisionHelper {
        getWorldX(): $Direction;
        getWorldY(): $Direction;
        getWorldZ(): $Direction;
        addBox(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        isBBCollision(): boolean;
        get worldX(): $Direction;
        get worldY(): $Direction;
        get worldZ(): $Direction;
        get BBCollision(): boolean;
    }
    export class $IPartItem<P extends $IPart> {
        static getNetworkId(arg0: $IPartItem<never>): number;
        static byNetworkId(arg0: number): $IPartItem<never>;
        static getId(arg0: $IPartItem<never>): $ResourceLocation;
        static byId(arg0: $ResourceLocation_): $IPartItem<never>;
    }
    export interface $IPartItem<P extends $IPart> extends $ItemLike {
        getPartClass(): $Class<P>;
        createPart(): P;
        get partClass(): $Class<P>;
    }
    export class $IPart {
    }
    export interface $IPart extends $ICustomCableConnection, $Clearable {
        canConnectRedstone(): boolean;
        getLightLevel(): number;
        getModelData(): $ModelData;
        onEntityCollision(arg0: $Entity): void;
        isLadder(arg0: $LivingEntity): boolean;
        isSolid(): boolean;
        getBoxes(arg0: $IPartCollisionHelper): void;
        clearContent(): void;
        canBePlacedOn(arg0: $BusSupport_): boolean;
        addEntityCrashInfo(arg0: $CrashReportCategory): void;
        getGridNode(): $IGridNode;
        readFromStream(arg0: $RegistryFriendlyByteBuf): boolean;
        writeToStream(arg0: $RegistryFriendlyByteBuf): void;
        getPartItem(): $IPartItem<never>;
        exportSettings(arg0: $SettingsFrom_, arg1: $DataComponentMap$Builder): void;
        importSettings(arg0: $SettingsFrom_, arg1: $DataComponentMap_, arg2: $Player): void;
        getCableConnectionLength(arg0: $AECableType_): number;
        onUseItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        readVisualStateFromNBT(arg0: $CompoundTag_): void;
        writeVisualStateToNBT(arg0: $CompoundTag_): void;
        removeFromWorld(): void;
        addToWorld(): void;
        setPartHostInfo(arg0: $Direction_, arg1: $IPartHost, arg2: $BlockEntity): void;
        onPlacement(arg0: $Player): void;
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
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        animateTick(arg0: $Level_, arg1: $BlockPos_, arg2: $RandomSource): void;
        get lightLevel(): number;
        get modelData(): $ModelData;
        get solid(): boolean;
        get gridNode(): $IGridNode;
        get partItem(): $IPartItem<never>;
        get providingStrongPower(): number;
        get providingWeakPower(): number;
        get externalFacingNode(): $IGridNode;
        get externalCableConnectionType(): $AECableType;
        get staticModels(): $IPartModel;
        get desiredConnectionType(): $AECableType;
    }
    export class $RegisterPartCapabilitiesEventInternal {
        static register(arg0: $RegisterPartCapabilitiesEvent, arg1: $RegisterCapabilitiesEvent): void;
    }
    export class $PartHelper {
        static setPart<T extends $IPart>(arg0: $ServerLevel, arg1: $BlockPos_, arg2: $Direction_, arg3: $Player, arg4: $IPartItem<T>): T;
        static getPart(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Direction_): $IPart;
        static getPart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): T;
        static usePartItem(arg0: $UseOnContext): $InteractionResult;
        static getPartHost(arg0: $Level_, arg1: $BlockPos_): $IPartHost;
        static placePartHost(arg0: $Player, arg1: $Level_, arg2: $BlockPos_): $IPartHost;
        static getOrPlacePartHost(arg0: $Level_, arg1: $BlockPos_, arg2: boolean, arg3: $Player): $IPartHost;
        static canPlacePartHost(arg0: $Player, arg1: $Level_, arg2: $BlockPos_): boolean;
        static getCableRenderMode(): $CableRenderMode;
        static get cableRenderMode(): $CableRenderMode;
    }
    export class $SelectedPart {
        side: $Direction;
        part: $IPart;
        facade: $IFacadePart;
        constructor();
        constructor(arg0: $IPart, arg1: $Direction_);
        constructor(arg0: $IFacadePart, arg1: $Direction_);
    }
    export class $ICustomCableConnection {
    }
    export interface $ICustomCableConnection {
        getCableConnectionLength(arg0: $AECableType_): number;
    }
    /**
     * Values that may be interpreted as {@link $ICustomCableConnection}.
     */
    export type $ICustomCableConnection_ = ((arg0: $AECableType) => number);
    export class $RegisterPartCapabilitiesEvent$BlockCapabilityRegistration<T, C> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RegisterPartCapabilitiesEvent$BlockCapabilityRegistration}.
     */
    export type $RegisterPartCapabilitiesEvent$BlockCapabilityRegistration_<T, C> = { contextToSide?: $Function_<any, $Direction>, capability?: $BlockCapability<any, any>, parts?: $Map_<$Class<$IPart>, $ICapabilityProvider_<never, any, any>>,  } | [contextToSide?: $Function_<any, $Direction>, capability?: $BlockCapability<any, any>, parts?: $Map_<$Class<$IPart>, $ICapabilityProvider_<never, any, any>>, ];
    export class $IFacadeContainer {
    }
    export interface $IFacadeContainer {
        readFromStream(arg0: $RegistryFriendlyByteBuf): boolean;
        writeToStream(arg0: $RegistryFriendlyByteBuf): void;
        canAddFacade(arg0: $IFacadePart): boolean;
        addFacade(arg0: $IFacadePart): boolean;
        getFacade(arg0: $Direction_): $IFacadePart;
        removeFacade(arg0: $IPartHost, arg1: $Direction_): void;
        writeToNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readFromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        isEmpty(): boolean;
        get empty(): boolean;
    }
    export class $IPartHost {
    }
    export interface $IPartHost extends $ICustomCableConnection {
        notifyNeighbors(): void;
        clearContainer(): void;
        isInWorld(): boolean;
        replacePart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $Direction_, arg2: $Player, arg3: $InteractionHand_): T;
        markForSave(): void;
        markForUpdate(): void;
        getPart(arg0: $Direction_): $IPart;
        partChanged(): void;
        selectPartLocal(arg0: $Vec3_): $SelectedPart;
        getFacadeContainer(): $IFacadeContainer;
        canAddPart(arg0: $ItemStack_, arg1: $Direction_): boolean;
        addPart<T extends $IPart>(arg0: $IPartItem<T>, arg1: $Direction_, arg2: $Player): T;
        removePartFromSide(arg0: $Direction_): void;
        removePart(arg0: $IPart): boolean;
        selectPartWorld(arg0: $Vec3_): $SelectedPart;
        hasRedstone(): boolean;
        notifyNeighborNow(arg0: $Direction_): void;
        isEmpty(): boolean;
        getLocation(): $DimensionalBlockPos;
        cleanup(): void;
        getColor(): $AEColor;
        isBlocked(arg0: $Direction_): boolean;
        getBlockEntity(): $BlockEntity;
        getCollisionShape(arg0: $CollisionContext): $VoxelShape;
        get inWorld(): boolean;
        get facadeContainer(): $IFacadeContainer;
        get empty(): boolean;
        get location(): $DimensionalBlockPos;
        get color(): $AEColor;
        get blockEntity(): $BlockEntity;
    }
    export class $PartModels {
        static registerModels(arg0: $Collection_<$ResourceLocation_>): void;
        static registerModels(...arg0: $ResourceLocation_[]): void;
    }
    export class $CableRenderMode extends $Enum<$CableRenderMode> {
        static values(): $CableRenderMode[];
        static valueOf(arg0: string): $CableRenderMode;
        static CABLE_VIEW: $CableRenderMode;
        transparentFacades: boolean;
        opaqueFacades: boolean;
        static STANDARD: $CableRenderMode;
    }
    /**
     * Values that may be interpreted as {@link $CableRenderMode}.
     */
    export type $CableRenderMode_ = "standard" | "cable_view";
    export class $BusSupport extends $Enum<$BusSupport> {
        static values(): $BusSupport[];
        static valueOf(arg0: string): $BusSupport;
        static DENSE_CABLE: $BusSupport;
        static CABLE: $BusSupport;
    }
    /**
     * Values that may be interpreted as {@link $BusSupport}.
     */
    export type $BusSupport_ = "cable" | "dense_cable";
    export class $IPartModel {
    }
    export interface $IPartModel {
        getModels(): $List<$ResourceLocation>;
        requireCableConnection(): boolean;
        get models(): $List<$ResourceLocation>;
    }
    export class $PartModelsInternal {
        static getModels(): $Set<$ResourceLocation>;
        static freeze(): void;
        static get models(): $Set<$ResourceLocation>;
    }
    export class $IFacadePart {
    }
    export interface $IFacadePart {
        getBoxes(arg0: $IPartCollisionHelper, arg1: boolean): void;
        onUseItemOn(arg0: $ItemStack_, arg1: $Player, arg2: $InteractionHand_, arg3: $Vec3_): boolean;
        getTextureItem(): $ItemStack;
        onClicked(arg0: $Player, arg1: $Vec3_): boolean;
        getItem(): $Item;
        getSide(): $Direction;
        getItemStack(): $ItemStack;
        getBlockState(): $BlockState;
        get textureItem(): $ItemStack;
        get item(): $Item;
        get side(): $Direction;
        get itemStack(): $ItemStack;
        get blockState(): $BlockState;
    }
    export class $RegisterPartCapabilitiesEvent extends $Event implements $IModBusEvent {
        addHostType<T extends $BlockEntity>(arg0: $BlockEntityType_<T>): void;
        registerContext<T, C>(arg0: $BlockCapability<T, C>, arg1: $Function_<C, $Direction>): void;
        register<T, C, P extends $IPart>(arg0: $BlockCapability<T, C>, arg1: $ICapabilityProvider_<P, C, T>, arg2: $Class<P>): void;
        constructor();
    }
}
