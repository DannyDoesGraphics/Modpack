import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $MenuBase, $AbstractSimiContainerScreen } from "@package/com/simibubi/create/foundation/gui/menu";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CraftingInput, $CraftingBookCategory_, $CustomRecipe } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Minecraft, $DeltaTracker } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $AccessorToolboxHandlerClient } from "@package/com/railwayteam/railways/mixin/client";
import { $AccessorToolboxBlockEntity, $AccessorToolboxInventory } from "@package/com/railwayteam/railways/mixin";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $InteractionResult, $MenuProvider, $Nameable, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Slot, $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Item, $DyeColor, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $PlayerMainInvWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $AbstractBlockEntityVisual, $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $Block, $HorizontalDirectionalBlock, $SimpleWaterloggedBlock } from "@package/net/minecraft/world/level/block";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $Map, $UUID, $List, $List_, $WeakHashMap } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Holder$Reference, $HolderLookup$Provider, $Direction_, $NonNullList, $IdMapper } from "@package/net/minecraft/core";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $WorldAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $SlotItemHandler, $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font, $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $MountedItemStorageType, $WrapperMountedItemStorage, $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/toolbox" {
    export class $ToolboxHandler {
        static withinRange(arg0: $Player, arg1: $ToolboxBlockEntity): boolean;
        static playerLogin(arg0: $Player): void;
        static unequip(arg0: $Player, arg1: number, arg2: boolean): void;
        static getMaxRange(arg0: $Player): number;
        static onUnload(arg0: $ToolboxBlockEntity): void;
        static entityTick(arg0: $Entity, arg1: $Level_): void;
        static distance(arg0: $Vec3_, arg1: $BlockPos_): number;
        static onLoad(arg0: $ToolboxBlockEntity): void;
        static getNearest(arg0: $LevelAccessor, arg1: $Player, arg2: number): $List<$ToolboxBlockEntity>;
        static syncData(arg0: $Player): void;
        static toolboxes: $WorldAttached<$WeakHashMap<$BlockPos, $ToolboxBlockEntity>>;
        constructor();
    }
    export class $ToolBoxVisual extends $AbstractBlockEntityVisual<$ToolboxBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $ToolboxBlockEntity, arg2: number);
    }
    export class $ToolboxEquipPacket extends $Record implements $ServerboundPacketPayload {
        hotbarSlot(): number;
        toolboxPos(): $BlockPos;
        slot(): number;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ToolboxEquipPacket>;
        constructor(toolboxPos: $BlockPos_, slot: number, hotbarSlot: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ToolboxEquipPacket}.
     */
    export type $ToolboxEquipPacket_ = { slot?: number, hotbarSlot?: number, toolboxPos?: $BlockPos_,  } | [slot?: number, hotbarSlot?: number, toolboxPos?: $BlockPos_, ];
    export class $ToolboxSlot extends $SlotItemHandler {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $ToolboxMenu, arg1: $IItemHandler, arg2: number, arg3: number, arg4: number, arg5: boolean);
    }
    export class $ToolboxDyeingRecipe extends $CustomRecipe {
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        matches(arg0: $CraftingInput, arg1: $Level_): boolean;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $ToolboxBlockEntity extends $SmartBlockEntity implements $MenuProvider, $Nameable, $AccessorToolboxBlockEntity {
        readInventory(arg0: $ToolboxInventory): void;
        unequipTracked(): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        unequip(arg0: number, arg1: $Player, arg2: number, arg3: boolean): void;
        connectPlayer(arg0: number, arg1: $Player, arg2: number): void;
        isFullyInitialized(): boolean;
        setUniqueId(arg0: $UUID_): void;
        getName(): $Component;
        getDisplayName(): $Component;
        getColor(): $DyeColor;
        hasCustomName(): boolean;
        getCustomName(): $Component;
        setCustomName(arg0: $Component_): void;
        getUniqueId(): $UUID;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        getConnectedPlayers(): $Map<number, $WeakHashMap<$Player, number>>;
        getInventory(): $ToolboxInventory;
        drawers: $LerpedFloat;
        level: $Level;
        lid: $LerpedFloat;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get fullyInitialized(): boolean;
        get name(): $Component;
        get displayName(): $Component;
        get color(): $DyeColor;
        get connectedPlayers(): $Map<number, $WeakHashMap<$Player, number>>;
        get inventory(): $ToolboxInventory;
    }
    export class $ToolboxDisposeAllPacket extends $Record implements $ServerboundPacketPayload {
        toolboxPos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ToolboxDisposeAllPacket>;
        constructor(toolboxPos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ToolboxDisposeAllPacket}.
     */
    export type $ToolboxDisposeAllPacket_ = { toolboxPos?: $BlockPos_,  } | [toolboxPos?: $BlockPos_, ];
    export class $ToolboxInventory extends $ItemStackHandler implements $AccessorToolboxInventory {
        static canItemsShareCompartment(arg0: $ItemStack_, arg1: $ItemStack_): boolean;
        takeFromCompartment(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        distributeToCompartment(arg0: $ItemStack_, arg1: number, arg2: boolean): $ItemStack;
        static cleanItemNBT(arg0: $ItemStack_): $ItemStack;
        inLimitedMode(arg0: $Consumer_<$ToolboxInventory>): void;
        settle(arg0: number): void;
        getFilters(): $List<$ItemStack>;
        /**
         * @deprecated
         */
        static BACKWARDS_COMPAT_CODEC: $Codec<$ToolboxInventory>;
        static CODEC: $Codec<$ToolboxInventory>;
        static STACKS_PER_COMPARTMENT: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ToolboxInventory>;
        constructor(arg0: $ToolboxBlockEntity);
        set tle(value: number);
        get filters(): $List<$ItemStack>;
    }
    export class $ToolboxScreen extends $AbstractSimiContainerScreen<$ToolboxMenu> {
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
        constructor(arg0: $ToolboxMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $ToolboxMenu extends $MenuBase<$ToolboxBlockEntity> {
        totalCountInCompartment(arg0: number): number;
        static create(arg0: number, arg1: $Inventory, arg2: $ToolboxBlockEntity): $ToolboxMenu;
        getFilter(arg0: number): $ItemStack;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        renderPass: boolean;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        contentHolder: $ToolboxBlockEntity;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $ToolboxBlockEntity);
    }
    export class $RadialToolboxMenu extends $AbstractSimiScreen {
        prevSlot(arg0: number): void;
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
        constructor(arg0: $List_<$ToolboxBlockEntity>, arg1: $RadialToolboxMenu$State_, arg2: $ToolboxBlockEntity);
    }
    export class $ToolboxHandlerClient implements $AccessorToolboxHandlerClient {
        static getCOOLDOWN$railways_$md$5c91d2$0(): number;
        static setCOOLDOWN$railways_$md$5c91d2$1(arg0: number): void;
        static onPickItem(): boolean;
        static renderOverlay(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static clientTick(): void;
        static onKeyInput(arg0: number, arg1: boolean): void;
        static OVERLAY: $LayeredDraw$Layer;
        constructor();
        static get COOLDOWN$railways_$md$5c91d2$0(): number;
        static set COOLDOWN$railways_$md$5c91d2$1(value: number);
    }
    export class $ItemReturnInvWrapper extends $PlayerMainInvWrapper {
        constructor(arg0: $Inventory);
    }
    export class $RadialToolboxMenu$State extends $Enum<$RadialToolboxMenu$State> {
        static values(): $RadialToolboxMenu$State[];
        static valueOf(arg0: string): $RadialToolboxMenu$State;
        static SELECT_BOX: $RadialToolboxMenu$State;
        static SELECT_ITEM_UNEQUIP: $RadialToolboxMenu$State;
        static DETACH: $RadialToolboxMenu$State;
        static SELECT_ITEM: $RadialToolboxMenu$State;
    }
    /**
     * Values that may be interpreted as {@link $RadialToolboxMenu$State}.
     */
    export type $RadialToolboxMenu$State_ = "select_box" | "select_item" | "select_item_unequip" | "detach";
    export class $ToolboxMountedStorage extends $WrapperMountedItemStorage<$ToolboxInventory> {
        static fromToolbox(arg0: $ToolboxBlockEntity): $ToolboxMountedStorage;
        static fromLegacy(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ToolboxMountedStorage;
        static CODEC: $MapCodec<$ToolboxMountedStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
    }
    export class $ToolboxMountedStorageType extends $MountedItemStorageType<$ToolboxMountedStorage> {
        mount(arg0: $Level_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): $ToolboxMountedStorage;
        codec: $MapCodec<$ToolboxMountedStorage>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
        constructor();
    }
    export class $ToolboxBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock, $IBE<$ToolboxBlockEntity> {
        hasAnalogOutputSignal(arg0: $BlockState_): boolean;
        getAnalogOutputSignal(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_): number;
        updateShape(arg0: $BlockState_, arg1: $Direction_, arg2: $BlockState_, arg3: $LevelAccessor, arg4: $BlockPos_, arg5: $BlockPos_): $BlockState;
        getBlockEntityType(): $BlockEntityType<$ToolboxBlockEntity>;
        getBlockEntityClass(): $Class<$ToolboxBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getColor(): $DyeColor;
        attack(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Player): void;
        getFluidState(arg0: $BlockState_): $FluidState;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getPickupSound(): ($SoundEvent) | undefined;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ToolboxBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ToolboxBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ToolboxBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ToolboxBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ToolboxBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$ToolboxBlock>;
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
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $DyeColor_);
        get blockEntityType(): $BlockEntityType<$ToolboxBlockEntity>;
        get blockEntityClass(): $Class<$ToolboxBlockEntity>;
        get color(): $DyeColor;
    }
    export class $ToolboxRenderer extends $SmartBlockEntityRenderer<$ToolboxBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
