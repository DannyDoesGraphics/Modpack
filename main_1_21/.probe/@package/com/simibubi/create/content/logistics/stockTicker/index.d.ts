import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $MenuBase, $AbstractSimiContainerScreen } from "@package/com/simibubi/create/foundation/gui/menu";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Recipe, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Minecraft } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Clearable, $InteractionResult, $MenuProvider, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Slot, $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $IdentifiedInventory_, $InventorySummary } from "@package/com/simibubi/create/content/logistics/packager";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IHaveHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $HorizontalDirectionalBlock } from "@package/net/minecraft/world/level/block";
import { $LogisticallyLinkedBehaviour, $LogisticallyLinkedBehaviour$RequestType_ } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BasePacketPayload$PacketTypeProvider, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List, $List_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $BigItemStack, $AddressEditBox } from "@package/com/simibubi/create/content/logistics";
import { $PlayerInteractEvent$EntityInteractSpecific } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $NonNullList, $IdMapper } from "@package/net/minecraft/core";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $BlockGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $EditBox, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $SlotItemHandler, $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AllGuiTextures } from "@package/com/simibubi/create/foundation/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockEntityType_, $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/stockTicker" {
    export class $StockTickerInteractionHandler {
        static interactWithLogisticsManager(arg0: $PlayerInteractEvent$EntityInteractSpecific): void;
        static getStockTickerPosition(arg0: $Entity): $BlockPos;
        static interactWithLogisticsManagerAt(arg0: $Player, arg1: $Level_, arg2: $BlockPos_): boolean;
        constructor();
    }
    export class $StockTickerBlockEntity extends $StockCheckingBlockEntity implements $IHaveHoveringInformation, $Clearable {
        isKeeperPresent(): boolean;
        clearContent(): void;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        playEffect(): void;
        getTicksSinceLastUpdate(): number;
        refreshClientStockSnapshot(): void;
        getLastClientsideStockSnapshotAsSummary(): $InventorySummary;
        getReceivedPaymentsHandler(): $IItemHandler;
        getClientStockSnapshot(): $List<$List<$BigItemStack>>;
        receiveStockPacket(arg0: $List_<$BigItemStack>, arg1: boolean): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        behaviour: $LogisticallyLinkedBehaviour;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get keeperPresent(): boolean;
        get ticksSinceLastUpdate(): number;
        get lastClientsideStockSnapshotAsSummary(): $InventorySummary;
        get receivedPaymentsHandler(): $IItemHandler;
        get clientStockSnapshot(): $List<$List<$BigItemStack>>;
    }
    export class $StockCheckingBlockEntity extends $SmartBlockEntity {
        getRecentSummary(): $InventorySummary;
        broadcastPackageRequest(arg0: $LogisticallyLinkedBehaviour$RequestType_, arg1: $PackageOrderWithCrafts_, arg2: $IdentifiedInventory_, arg3: string): boolean;
        broadcastPackageRequest(arg0: $LogisticallyLinkedBehaviour$RequestType_, arg1: $PackageOrder_, arg2: $IdentifiedInventory_, arg3: string): boolean;
        getAccurateSummary(): $InventorySummary;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        behaviour: $LogisticallyLinkedBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get recentSummary(): $InventorySummary;
        get accurateSummary(): $InventorySummary;
    }
    export class $StockKeeperRequestScreen extends $AbstractSimiContainerScreen<$StockKeeperRequestMenu> {
        isSchematicListMode(): boolean;
        requestSchematicList(): void;
        requestCraftable(arg0: $CraftableBigItemStack, arg1: number): void;
        getHoveredIngredient(arg0: number, arg1: number): ($Pair<$ItemStack, $Rect2i>) | undefined;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        refreshSearchNextTick: boolean;
        itemScroll: $LerpedFloat;
        clickedSlot: $Slot;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        moveToTopNextTick: boolean;
        isSplittingStack: boolean;
        displayedItems: $List<$List<$BigItemStack>>;
        addressBox: $AddressEditBox;
        categories: $List<$StockKeeperRequestScreen$CategoryEntry>;
        static INVENTORY_LOCATION: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        currentItemSource: $List<$List<$BigItemStack>>;
        static SLOT_ITEM_BLIT_OFFSET: number;
        recipesToOrder: $List<$CraftableBigItemStack>;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        itemsToOrder: $List<$BigItemStack>;
        narratables: $List<$NarratableEntry>;
        width: number;
        topPos: number;
        searchBox: $EditBox;
        font: $Font;
        constructor(arg0: $StockKeeperRequestMenu, arg1: $Inventory, arg2: $Component_);
        get schematicListMode(): boolean;
    }
    export class $CraftableBigItemStack extends $BigItemStack {
        getIngredients(): $List<$Ingredient>;
        getOutputCount(arg0: $Level_): number;
        static INF: number;
        stack: $ItemStack;
        static CODEC: $Codec<$BigItemStack>;
        recipe: $Recipe<never>;
        count: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $BigItemStack>;
        constructor(arg0: $ItemStack_, arg1: $Recipe<never>);
        get ingredients(): $List<$Ingredient>;
    }
    export class $StockKeeperRequestMenu extends $MenuBase<$StockTickerBlockEntity> {
        static create(arg0: number, arg1: $Inventory, arg2: $StockTickerBlockEntity): $AbstractContainerMenu;
        screenReference: $Object;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        contentHolder: $StockTickerBlockEntity;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $StockTickerBlockEntity);
    }
    export class $StockKeeperCategoryRefundPacket extends $BlockEntityConfigurationPacket<$StockTickerBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StockKeeperCategoryRefundPacket>;
        constructor(arg0: $BlockPos_, arg1: $ItemStack_);
    }
    export class $PackageOrderWithCrafts$CraftingEntry extends $Record {
        count(): number;
        pattern(): $PackageOrder;
        static CODEC: $Codec<$PackageOrderWithCrafts$CraftingEntry>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackageOrderWithCrafts$CraftingEntry>;
        constructor(pattern: $PackageOrder_, count: number);
    }
    /**
     * Values that may be interpreted as {@link $PackageOrderWithCrafts$CraftingEntry}.
     */
    export type $PackageOrderWithCrafts$CraftingEntry_ = { pattern?: $PackageOrder_, count?: number,  } | [pattern?: $PackageOrder_, count?: number, ];
    export class $LogisticalStockResponsePacket extends $Record implements $ClientboundPacketPayload {
        lastPacket(): boolean;
        items(): $List<$BigItemStack>;
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $LogisticalStockResponsePacket>;
        constructor(lastPacket: boolean, pos: $BlockPos_, items: $List_<$BigItemStack>);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $LogisticalStockResponsePacket}.
     */
    export type $LogisticalStockResponsePacket_ = { items?: $List_<$BigItemStack>, pos?: $BlockPos_, lastPacket?: boolean,  } | [items?: $List_<$BigItemStack>, pos?: $BlockPos_, lastPacket?: boolean, ];
    export class $StockKeeperLockPacket extends $BlockEntityConfigurationPacket<$StockTickerBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $StockKeeperLockPacket>;
        constructor(arg0: $BlockPos_, arg1: boolean);
    }
    export class $PackageOrder extends $Record {
        isEmpty(): boolean;
        static empty(): $PackageOrder;
        stacks(): $List<$BigItemStack>;
        static CODEC: $Codec<$PackageOrder>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackageOrder>;
        constructor(stacks: $List_<$BigItemStack>);
    }
    /**
     * Values that may be interpreted as {@link $PackageOrder}.
     */
    export type $PackageOrder_ = { stacks?: $List_<$BigItemStack>,  } | [stacks?: $List_<$BigItemStack>, ];
    export class $StockKeeperCategoryHidingPacket extends $BlockEntityConfigurationPacket<$StockTickerBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $StockKeeperCategoryHidingPacket>;
        constructor(arg0: $BlockPos_, arg1: $List_<number>);
    }
    export class $StockKeeperCategoryMenu$InactiveItemHandlerSlot extends $SlotItemHandler {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $StockKeeperCategoryEditPacket extends $BlockEntityConfigurationPacket<$StockTickerBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $StockKeeperCategoryEditPacket>;
        constructor(arg0: $BlockPos_, arg1: $List_<$ItemStack_>);
    }
    export class $StockKeeperRequestScreen$SearchSyncMode extends $Enum<$StockKeeperRequestScreen$SearchSyncMode> implements $StringRepresentable {
        isBothOr(arg0: $StockKeeperRequestScreen$SearchSyncMode_): boolean;
        static cycleConfig(): void;
        static values(): $StockKeeperRequestScreen$SearchSyncMode[];
        static valueOf(arg0: string): $StockKeeperRequestScreen$SearchSyncMode;
        next(): $StockKeeperRequestScreen$SearchSyncMode;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static SYNC_BOTH: $StockKeeperRequestScreen$SearchSyncMode;
        static SYNC_FROM_STOCK_KEEPER: $StockKeeperRequestScreen$SearchSyncMode;
        static NONE: $StockKeeperRequestScreen$SearchSyncMode;
        buttonTexture: $AllGuiTextures;
        static SYNC_FROM_JEI: $StockKeeperRequestScreen$SearchSyncMode;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $StockKeeperRequestScreen$SearchSyncMode}.
     */
    export type $StockKeeperRequestScreen$SearchSyncMode_ = "sync_both" | "sync_from_jei" | "sync_from_stock_keeper" | "none";
    export class $StockKeeperRequestScreen$CategoryEntry {
        constructor(arg0: number, arg1: string, arg2: number);
    }
    export class $StockTickerBlockEntity$CategoryMenuProvider implements $MenuProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getDisplayName(): $Component;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        constructor(arg0: $StockTickerBlockEntity);
        get displayName(): $Component;
    }
    export class $StockKeeperCategoryScreen extends $AbstractSimiContainerScreen<$StockKeeperCategoryMenu> {
        renderScheduleEntry(arg0: $GuiGraphics, arg1: number, arg2: $ItemStack_, arg3: number, arg4: number, arg5: number, arg6: number): number;
        action(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): boolean;
        getFont(): $Font;
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
        constructor(arg0: $StockKeeperCategoryMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $PackageOrderWithCrafts extends $Record {
        orderedStacksMatchOrderedRecipes(): boolean;
        orderedCrafts(): $List<$PackageOrderWithCrafts$CraftingEntry>;
        orderedStacks(): $PackageOrder;
        static singleRecipe(arg0: $List_<$BigItemStack>): $PackageOrderWithCrafts;
        static hasCraftingInformation(arg0: $PackageOrderWithCrafts_): boolean;
        getCraftingInformation(): $List<$BigItemStack>;
        isEmpty(): boolean;
        static empty(): $PackageOrderWithCrafts;
        stacks(): $List<$BigItemStack>;
        static simple(arg0: $List_<$BigItemStack>): $PackageOrderWithCrafts;
        static CODEC: $Codec<$PackageOrderWithCrafts>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackageOrderWithCrafts>;
        constructor(orderedStacks: $PackageOrder_, orderedCrafts: $List_<$PackageOrderWithCrafts$CraftingEntry_>);
        get craftingInformation(): $List<$BigItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $PackageOrderWithCrafts}.
     */
    export type $PackageOrderWithCrafts_ = { orderedCrafts?: $List_<$PackageOrderWithCrafts$CraftingEntry_>, orderedStacks?: $PackageOrder_,  } | [orderedCrafts?: $List_<$PackageOrderWithCrafts$CraftingEntry_>, orderedStacks?: $PackageOrder_, ];
    export class $StockTickerBlockEntity$RequestMenuProvider implements $MenuProvider {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getDisplayName(): $Component;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        constructor(arg0: $StockTickerBlockEntity);
        get displayName(): $Component;
    }
    export class $StockKeeperCategoryMenu extends $MenuBase<$StockTickerBlockEntity> {
        static create(arg0: number, arg1: $Inventory, arg2: $StockTickerBlockEntity): $AbstractContainerMenu;
        playerInventory: $Inventory;
        stateId: number;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        slotsActive: boolean;
        contentHolder: $StockTickerBlockEntity;
        proxyInventory: $ItemStackHandler;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $StockTickerBlockEntity);
    }
    export class $PackageOrderRequestPacket extends $BlockEntityConfigurationPacket<$StockTickerBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackageOrderRequestPacket>;
        constructor(arg0: $BlockPos_, arg1: $PackageOrderWithCrafts_, arg2: string, arg3: boolean);
    }
    export class $LogisticalStockRequestPacket extends $BlockEntityConfigurationPacket<$StockCheckingBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $LogisticalStockRequestPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $StockTickerBlock extends $HorizontalDirectionalBlock implements $IBE<$StockTickerBlockEntity>, $IWrenchable {
        getHat(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $LivingEntity): $PartialModel;
        getBlockEntityType(): $BlockEntityType<$StockTickerBlockEntity>;
        getBlockEntityClass(): $Class<$StockTickerBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$StockTickerBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$StockTickerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$StockTickerBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($StockTickerBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $StockTickerBlockEntity;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$StockTickerBlock>;
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
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityType(): $BlockEntityType<$StockTickerBlockEntity>;
        get blockEntityClass(): $Class<$StockTickerBlockEntity>;
    }
    export class $StockKeeperCategoryMenu$InactiveSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
}
