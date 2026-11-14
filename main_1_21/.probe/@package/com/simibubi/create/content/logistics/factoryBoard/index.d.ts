import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $AbstractSimiContainerScreen, $GhostItemMenu } from "@package/com/simibubi/create/foundation/gui/menu";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Minecraft } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $WeakReference } from "@package/java/lang/ref";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult, $MenuProvider, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Slot, $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $Item, $Item$Properties, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $PackagerBlockEntity } from "@package/com/simibubi/create/content/logistics/packager";
import { $ModelData } from "@package/net/neoforged/neoforge/client/model/data";
import { $AttachFace, $BooleanProperty, $DirectionProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $FaceAttachedHorizontalDirectionalBlock, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $LogisticallyLinkedBlockItem, $RequestPromiseQueue } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $AdvancementBehaviour } from "@package/com/simibubi/create/foundation/advancement";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $ArrayList, $Map, $Set, $UUID, $List, $SequencedCollection, $EnumMap, $Map_, $List_ } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $BlockEntityBehaviour, $BehaviourType, $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Supplier_, $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $NonNullList, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $BakedModelWrapperWithData } from "@package/com/simibubi/create/foundation/model";
import { $Enum, $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $BlockAndTintGetter, $LevelAccessor, $LevelReader, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/factoryBoard" {
    export class $FactoryPanelConnectionHandler {
        static startRelocating(arg0: $FactoryPanelBehaviour): void;
        static startConnection(arg0: $FactoryPanelBehaviour): void;
        static panelClicked(arg0: $LevelAccessor, arg1: $Player, arg2: $FactoryPanelBehaviour): boolean;
        static onRightClick(): boolean;
        static getBB(arg0: $BlockState_, arg1: $FactoryPanelPosition_): $AABB;
        static clientTick(): void;
        constructor();
    }
    export class $FactoryPanelBlockItem extends $LogisticallyLinkedBlockItem {
        static fixCtrlCopiedStack(arg0: $ItemStack_): $ItemStack;
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
    export class $FactoryPanelScreen extends $AbstractSimiScreen {
        playButtonSound(): void;
        static convertRecipeToPackageOrderContext(arg0: $CraftingRecipe, arg1: $List_<$BigItemStack>, arg2: boolean): $List<$BigItemStack>;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $FactoryPanelBehaviour);
    }
    export class $FactoryPanelModel$FactoryPanelModelData {
    }
    export class $FactoryPanelRenderer extends $SmartBlockEntityRenderer<$FactoryPanelBlockEntity> {
        static renderBulb(arg0: $FactoryPanelBehaviour, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: number): void;
        static renderPath(arg0: $FactoryPanelBehaviour, arg1: $FactoryPanelConnection, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $FactoryPanelBlockEntity extends $SmartBlockEntity {
        activePanels(): number;
        removePanel(arg0: $FactoryPanelBlock$PanelSlot_): boolean;
        addPanel(arg0: $FactoryPanelBlock$PanelSlot_, arg1: $UUID_): boolean;
        getRestockedPackager(): $PackagerBlockEntity;
        getShape(): $VoxelShape;
        redraw: boolean;
        advancements: $AdvancementBehaviour;
        level: $Level;
        panels: $EnumMap<$FactoryPanelBlock$PanelSlot, $FactoryPanelBehaviour>;
        restocker: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        lastShape: $VoxelShape;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get restockedPackager(): $PackagerBlockEntity;
        get shape(): $VoxelShape;
    }
    export class $FactoryPanelEffectPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        fromPos(): $FactoryPanelPosition;
        success(): boolean;
        toPos(): $FactoryPanelPosition;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FactoryPanelEffectPacket>;
        constructor(fromPos: $FactoryPanelPosition_, toPos: $FactoryPanelPosition_, success: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelEffectPacket}.
     */
    export type $FactoryPanelEffectPacket_ = { success?: boolean, fromPos?: $FactoryPanelPosition_, toPos?: $FactoryPanelPosition_,  } | [success?: boolean, fromPos?: $FactoryPanelPosition_, toPos?: $FactoryPanelPosition_, ];
    export class $FactoryPanelBlock extends $FaceAttachedHorizontalDirectionalBlock implements $ProperWaterloggedBlock, $IBE<$FactoryPanelBlockEntity>, $IWrenchable, $SpecialBlockItemRequirement {
        static canAttachLenient(arg0: $LevelReader, arg1: $BlockPos_, arg2: $Direction_): boolean;
        static getTargetedSlot(arg0: $BlockPos_, arg1: $BlockState_, arg2: $Vec3_): $FactoryPanelBlock$PanelSlot;
        getSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        getDirectSignal(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $Direction_): number;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        isSignalSource(arg0: $BlockState_): boolean;
        canBeReplaced(arg0: $BlockState_, arg1: $BlockPlaceContext): boolean;
        getBlockEntityType(): $BlockEntityType<$FactoryPanelBlockEntity>;
        static connectedDirection(arg0: $BlockState_): $Direction;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityClass(): $Class<$FactoryPanelBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        static getXRot(arg0: $BlockState_): number;
        static getYRot(arg0: $BlockState_): number;
        getFluidState(arg0: $BlockState_): $FluidState;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        fluidState(arg0: $BlockState_): $FluidState;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FactoryPanelBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$FactoryPanelBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$FactoryPanelBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($FactoryPanelBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $FactoryPanelBlockEntity;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$FactoryPanelBlock>;
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
        static FACE: $EnumProperty<$AttachFace>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$FactoryPanelBlockEntity>;
        get blockEntityClass(): $Class<$FactoryPanelBlockEntity>;
    }
    export class $FactoryPanelBehaviour$ItemStackConnections extends $ArrayList<$FactoryPanelConnection> {
        reversed(): $SequencedCollection<$FactoryPanelConnection>;
        totalAmount: number;
        item: $ItemStack;
        constructor(arg0: $ItemStack_);
    }
    export class $FactoryPanelConfigurationPacket extends $BlockEntityConfigurationPacket<$FactoryPanelBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FactoryPanelConfigurationPacket>;
        constructor(arg0: $FactoryPanelPosition_, arg1: string, arg2: $Map_<$FactoryPanelPosition_, number>, arg3: $List_<$ItemStack_>, arg4: number, arg5: number, arg6: $FactoryPanelPosition_, arg7: boolean, arg8: boolean, arg9: boolean);
    }
    export class $FactoryPanelBlock$PanelState extends $Enum<$FactoryPanelBlock$PanelState> {
        static values(): $FactoryPanelBlock$PanelState[];
        static valueOf(arg0: string): $FactoryPanelBlock$PanelState;
        static PASSIVE: $FactoryPanelBlock$PanelState;
        static ACTIVE: $FactoryPanelBlock$PanelState;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBlock$PanelState}.
     */
    export type $FactoryPanelBlock$PanelState_ = "passive" | "active";
    export class $FactoryPanelBehaviour extends $FilteringBehaviour implements $MenuProvider {
        isMissingAddress(): boolean;
        static linkAt(arg0: $BlockAndTintGetter, arg1: $FactoryPanelConnection): $FactoryPanelSupportBehaviour;
        static linkAt(arg0: $BlockAndTintGetter, arg1: $FactoryPanelPosition_): $FactoryPanelSupportBehaviour;
        panelBE(): $FactoryPanelBlockEntity;
        displayScreen(arg0: $Player): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getPromised(): number;
        getLevelInStorage(): number;
        getIngredientStatusColor(): number;
        disconnectAll(): void;
        getPanelPosition(): $FactoryPanelPosition;
        addConnection(arg0: $FactoryPanelPosition_): void;
        disconnectAllLinks(): void;
        setNetwork(arg0: $UUID_): void;
        resetTimer(): void;
        getFrogAddress(): string;
        checkForRedstoneInput(): void;
        getUnloadedLinks(): number;
        resetTimerSlightly(): void;
        static getTypeForSlot(arg0: $FactoryPanelBlock$PanelSlot_): $BehaviourType<never>;
        static at(arg0: $BlockAndTintGetter, arg1: $FactoryPanelConnection): $FactoryPanelBehaviour;
        static at(arg0: $BlockAndTintGetter, arg1: $FactoryPanelPosition_): $FactoryPanelBehaviour;
        enable(): void;
        getDisplayName(): $Component;
        disable(): void;
        moveTo(arg0: $FactoryPanelPosition_, arg1: $ServerPlayer): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        static TOP_LEFT: $BehaviourType<$FactoryPanelBehaviour>;
        upTo: boolean;
        static BOTTOM_RIGHT: $BehaviourType<$FactoryPanelBehaviour>;
        restockerPromises: $RequestPromiseQueue;
        slot: $FactoryPanelBlock$PanelSlot;
        activeCraftingArrangement: $List<$ItemStack>;
        network: $UUID;
        recipeAddress: string;
        targeting: $Set<$FactoryPanelPosition>;
        redstonePowered: boolean;
        blockEntity: $SmartBlockEntity;
        static TOP_RIGHT: $BehaviourType<$FactoryPanelBehaviour>;
        promisedSatisfied: boolean;
        static BOTTOM_LEFT: $BehaviourType<$FactoryPanelBehaviour>;
        static TYPE: $BehaviourType<$FilteringBehaviour>;
        forceClearPromises: boolean;
        waitingForNetwork: boolean;
        satisfied: boolean;
        targetedByLinks: $Map<$BlockPos, $FactoryPanelConnection>;
        bulb: $LerpedFloat;
        count: number;
        active: boolean;
        targetedBy: $Map<$FactoryPanelPosition, $FactoryPanelConnection>;
        recipeOutput: number;
        customLabel: $MutableComponent;
        promiseClearingInterval: number;
        constructor(arg0: $FactoryPanelBlockEntity, arg1: $FactoryPanelBlock$PanelSlot_);
        get missingAddress(): boolean;
        get promised(): number;
        get levelInStorage(): number;
        get ingredientStatusColor(): number;
        get panelPosition(): $FactoryPanelPosition;
        get frogAddress(): string;
        get unloadedLinks(): number;
        get displayName(): $Component;
    }
    export class $FactoryPanelConnectionPacket extends $BlockEntityConfigurationPacket<$FactoryPanelBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FactoryPanelConnectionPacket>;
        constructor(arg0: $FactoryPanelPosition_, arg1: $FactoryPanelPosition_, arg2: boolean);
    }
    export class $FactoryPanelBlock$PanelType extends $Enum<$FactoryPanelBlock$PanelType> {
        static values(): $FactoryPanelBlock$PanelType[];
        static valueOf(arg0: string): $FactoryPanelBlock$PanelType;
        static NETWORK: $FactoryPanelBlock$PanelType;
        static PACKAGER: $FactoryPanelBlock$PanelType;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBlock$PanelType}.
     */
    export type $FactoryPanelBlock$PanelType_ = "network" | "packager";
    export class $FactoryPanelSlotPositioning extends $ValueBoxTransform {
    }
    export class $FactoryPanelBlock$PanelSlot extends $Enum<$FactoryPanelBlock$PanelSlot> implements $StringRepresentable {
        static values(): $FactoryPanelBlock$PanelSlot[];
        static valueOf(arg0: string): $FactoryPanelBlock$PanelSlot;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TOP_LEFT: $FactoryPanelBlock$PanelSlot;
        yOffset: number;
        static CODEC: $Codec<$FactoryPanelBlock$PanelSlot>;
        xOffset: number;
        static BOTTOM_RIGHT: $FactoryPanelBlock$PanelSlot;
        static TOP_RIGHT: $FactoryPanelBlock$PanelSlot;
        static BOTTOM_LEFT: $FactoryPanelBlock$PanelSlot;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FactoryPanelBlock$PanelSlot>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelBlock$PanelSlot}.
     */
    export type $FactoryPanelBlock$PanelSlot_ = "top_left" | "top_right" | "bottom_left" | "bottom_right";
    export class $FactoryPanelSetItemMenu extends $GhostItemMenu<$FactoryPanelBehaviour> {
        static create(arg0: number, arg1: $Inventory, arg2: $FactoryPanelBehaviour): $FactoryPanelSetItemMenu;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        ghostInventory: $ItemStackHandler;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        contentHolder: $FactoryPanelBehaviour;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $FactoryPanelBehaviour);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
    }
    export class $FactoryPanelConnection {
        calculatePathDiff(arg0: $BlockState_, arg1: $FactoryPanelPosition_): $Vec3;
        getPath(arg0: $Level_, arg1: $BlockState_, arg2: $FactoryPanelPosition_): $List<$Direction>;
        path: $List<$Direction>;
        amount: number;
        static CODEC: $Codec<$FactoryPanelConnection>;
        cachedSource: $WeakReference<$Object>;
        success: boolean;
        from: $FactoryPanelPosition;
        arrowBendMode: number;
        constructor(arg0: $FactoryPanelPosition_, arg1: number);
        constructor(arg0: $FactoryPanelPosition_, arg1: number, arg2: number);
    }
    export class $FactoryPanelPosition extends $Record {
        slot(): $FactoryPanelBlock$PanelSlot;
        pos(): $BlockPos;
        static CODEC: $Codec<$FactoryPanelPosition>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $FactoryPanelPosition>;
        constructor(pos: $BlockPos_, slot: $FactoryPanelBlock$PanelSlot_);
    }
    /**
     * Values that may be interpreted as {@link $FactoryPanelPosition}.
     */
    export type $FactoryPanelPosition_ = { pos?: $BlockPos_, slot?: $FactoryPanelBlock$PanelSlot_,  } | [pos?: $BlockPos_, slot?: $FactoryPanelBlock$PanelSlot_, ];
    export class $FactoryPanelSetItemScreen extends $AbstractSimiContainerScreen<$FactoryPanelSetItemMenu> {
        imageWidth: number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        draggingItem: $ItemStack;
        static SLOT_ITEM_BLIT_OFFSET: number;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $FactoryPanelSetItemMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $FactoryPanelSupportBehaviour extends $BlockEntityBehaviour {
        shouldBePoweredTristate(): boolean;
        getLinkedPanels(): $List<$FactoryPanelPosition>;
        notifyPanels(): void;
        isOutput(): boolean;
        shouldPanelBePowered(): boolean;
        notifyLink(): void;
        connect(arg0: $FactoryPanelBehaviour): void;
        disconnect(arg0: $FactoryPanelBehaviour): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$FactoryPanelSupportBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $Supplier_<boolean>, arg2: $Supplier_<boolean>, arg3: $Runnable_);
        get linkedPanels(): $List<$FactoryPanelPosition>;
        get output(): boolean;
    }
    export class $FactoryPanelModel extends $BakedModelWrapperWithData {
        addPanel(arg0: $List_<$BakedQuad>, arg1: $BlockState_, arg2: $FactoryPanelBlock$PanelSlot_, arg3: $FactoryPanelBlock$PanelType_, arg4: $FactoryPanelBlock$PanelState_, arg5: $RandomSource, arg6: $ModelData, arg7: $RenderType, arg8: boolean): void;
        constructor(arg0: $BakedModel);
    }
}
