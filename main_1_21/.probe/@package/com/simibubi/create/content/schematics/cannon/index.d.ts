import { $CSchematics } from "@package/com/simibubi/create/infrastructure/config";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $AbstractSimiContainerScreen, $MenuBase } from "@package/com/simibubi/create/foundation/gui/menu";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft } from "@package/net/minecraft/client";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $LinkedHashSet, $List } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $MenuProvider, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $NonNullList, $HolderGetter, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $BeltBlockEntity$CasingType_, $BeltBlockEntity$CasingType } from "@package/com/simibubi/create/content/kinetics/belt";
import { $MenuType_, $AbstractContainerMenu, $Slot } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $SchematicPrinter } from "@package/com/simibubi/create/content/schematics";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/schematics/cannon" {
    export class $SchematicannonBlockEntity extends $SmartBlockEntity implements $MenuProvider, $Clearable {
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        clearContent(): void;
        findInventories(): void;
        finishedPrinting(): void;
        getShotsPerGunpowder(): number;
        updateChecklist(): void;
        static stripBeltIfNotLast(arg0: $BlockState_): $BlockState;
        playFiringSound(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        config(): $CSchematics;
        getDisplayName(): $Component;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        flyingBlocks: $List<$LaunchedItem>;
        schematicProgress: number;
        replaceBlockEntities: boolean;
        firstRenderTick: boolean;
        inventory: $SchematicannonInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        previousTarget: $BlockPos;
        missingItem: $ItemStack;
        dontUpdateChecklist: boolean;
        replaceMode: number;
        static NEIGHBOUR_CHECKING: number;
        positionNotLoaded: boolean;
        blocksPlaced: number;
        state: $SchematicannonBlockEntity$State;
        bookPrintingProgress: number;
        blocksToPlace: number;
        skipMissing: boolean;
        defaultYaw: number;
        sendUpdate: boolean;
        level: $Level;
        neighbourCheckCooldown: number;
        printer: $SchematicPrinter;
        static ATTACHMENTS_NBT_KEY: string;
        checklist: $MaterialChecklist;
        remainingFuel: number;
        hasCreativeCrate: boolean;
        static MAX_ANCHOR_DISTANCE: number;
        statusMsg: string;
        attachedInventories: $LinkedHashSet<$IItemHandler>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get shotsPerGunpowder(): number;
        get displayName(): $Component;
    }
    export class $SchematicannonBlockEntity$State extends $Enum<$SchematicannonBlockEntity$State> {
        static values(): $SchematicannonBlockEntity$State[];
        static valueOf(arg0: string): $SchematicannonBlockEntity$State;
        static PAUSED: $SchematicannonBlockEntity$State;
        static RUNNING: $SchematicannonBlockEntity$State;
        static STOPPED: $SchematicannonBlockEntity$State;
    }
    /**
     * Values that may be interpreted as {@link $SchematicannonBlockEntity$State}.
     */
    export type $SchematicannonBlockEntity$State_ = "stopped" | "paused" | "running";
    export class $SchematicannonMenu extends $MenuBase<$SchematicannonBlockEntity> {
        static create(arg0: number, arg1: $Inventory, arg2: $SchematicannonBlockEntity): $SchematicannonMenu;
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
        contentHolder: $SchematicannonBlockEntity;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $SchematicannonBlockEntity);
    }
    export class $LaunchedItem$ForBlockState extends $LaunchedItem {
        stack: $ItemStack;
        data: $CompoundTag;
        totalTicks: number;
        state: $BlockState;
        ticksRemaining: number;
        target: $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $ItemStack_, arg3: $BlockState_, arg4: $CompoundTag_);
    }
    export class $SchematicannonBlockEntity$SchematicannonOptions extends $Record {
        replaceMode(): number;
        skipMissing(): boolean;
        replaceBlockEntities(): boolean;
        static CODEC: $Codec<$SchematicannonBlockEntity$SchematicannonOptions>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SchematicannonBlockEntity$SchematicannonOptions>;
        constructor(replaceMode: number, skipMissing: boolean, replaceBlockEntities: boolean);
    }
    /**
     * Values that may be interpreted as {@link $SchematicannonBlockEntity$SchematicannonOptions}.
     */
    export type $SchematicannonBlockEntity$SchematicannonOptions_ = { skipMissing?: boolean, replaceBlockEntities?: boolean, replaceMode?: number,  } | [skipMissing?: boolean, replaceBlockEntities?: boolean, replaceMode?: number, ];
    export class $SchematicannonRenderer extends $SafeBlockEntityRenderer<$SchematicannonBlockEntity> {
        static getCannonAngles(arg0: $SchematicannonBlockEntity, arg1: $BlockPos_, arg2: number): number[];
        static getRecoil(arg0: $SchematicannonBlockEntity, arg1: number): number;
        shouldRenderOffScreen(arg0: $SchematicannonBlockEntity): boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ConfigureSchematicannonPacket$Option extends $Enum<$ConfigureSchematicannonPacket$Option> {
        static values(): $ConfigureSchematicannonPacket$Option[];
        static valueOf(arg0: string): $ConfigureSchematicannonPacket$Option;
        static SKIP_MISSING: $ConfigureSchematicannonPacket$Option;
        static PAUSE: $ConfigureSchematicannonPacket$Option;
        static PLAY: $ConfigureSchematicannonPacket$Option;
        static SKIP_BLOCK_ENTITIES: $ConfigureSchematicannonPacket$Option;
        static STOP: $ConfigureSchematicannonPacket$Option;
        static DONT_REPLACE: $ConfigureSchematicannonPacket$Option;
        static REPLACE_ANY: $ConfigureSchematicannonPacket$Option;
        static REPLACE_EMPTY: $ConfigureSchematicannonPacket$Option;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigureSchematicannonPacket$Option>;
        static REPLACE_SOLID: $ConfigureSchematicannonPacket$Option;
    }
    /**
     * Values that may be interpreted as {@link $ConfigureSchematicannonPacket$Option}.
     */
    export type $ConfigureSchematicannonPacket$Option_ = "dont_replace" | "replace_solid" | "replace_any" | "replace_empty" | "skip_missing" | "skip_block_entities" | "play" | "pause" | "stop";
    export class $LaunchedItem$ForEntity extends $LaunchedItem {
        stack: $ItemStack;
        totalTicks: number;
        entity: $Entity;
        ticksRemaining: number;
        target: $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $ItemStack_, arg3: $Entity);
    }
    export class $LaunchedItem {
        static fromNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $HolderGetter<$Block_>): $LaunchedItem;
        update(arg0: $Level_): boolean;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        stack: $ItemStack;
        totalTicks: number;
        ticksRemaining: number;
        target: $BlockPos;
    }
    export class $MaterialChecklist {
        createWrittenClipboard(): $ItemStack;
        createWrittenBook(): $ItemStack;
        getRequiredAmount(arg0: $Item_): number;
        warnBlockNotLoaded(): void;
        collect(arg0: $ItemStack_): void;
        require(arg0: $ItemRequirement): void;
        blocksNotLoaded: boolean;
        static MAX_ENTRIES_PER_CLIPBOARD_PAGE: number;
        damageRequired: $Object2IntMap<$Item>;
        static MAX_ENTRIES_PER_PAGE: number;
        gathered: $Object2IntMap<$Item>;
        required: $Object2IntMap<$Item>;
        constructor();
    }
    export class $LaunchedItem$ForBelt extends $LaunchedItem$ForBlockState {
        casings: $BeltBlockEntity$CasingType[];
        stack: $ItemStack;
        data: $CompoundTag;
        totalTicks: number;
        length: number;
        state: $BlockState;
        ticksRemaining: number;
        target: $BlockPos;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $ItemStack_, arg3: $BlockState_, arg4: $BeltBlockEntity$CasingType_[]);
        constructor();
    }
    export class $SchematicannonInventory extends $ItemStackHandler {
        handler$epf000$create_pattern_schematics$isItemValid(arg0: number, arg1: $ItemStack_, arg2: $CallbackInfoReturnable<any>): void;
        constructor(arg0: $SchematicannonBlockEntity);
    }
    export class $SchematicannonVisual extends $AbstractBlockEntityVisual<$SchematicannonBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $SchematicannonBlockEntity, arg2: number);
    }
    export class $ConfigureSchematicannonPacket extends $Record implements $ServerboundPacketPayload {
        set(): boolean;
        handle(arg0: $ServerPlayer): void;
        option(): $ConfigureSchematicannonPacket$Option;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigureSchematicannonPacket>;
        constructor(option: $ConfigureSchematicannonPacket$Option_, set: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ConfigureSchematicannonPacket}.
     */
    export type $ConfigureSchematicannonPacket_ = { set?: boolean, option?: $ConfigureSchematicannonPacket$Option_,  } | [set?: boolean, option?: $ConfigureSchematicannonPacket$Option_, ];
    export class $SchematicannonScreen extends $AbstractSimiContainerScreen<$SchematicannonMenu> {
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
        constructor(arg0: $SchematicannonMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $SchematicannonBlock extends $Block implements $IBE<$SchematicannonBlockEntity> {
        neighborChanged(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $Block_, arg4: $BlockPos_, arg5: boolean): void;
        getBlockEntityType(): $BlockEntityType<$SchematicannonBlockEntity>;
        getBlockEntityClass(): $Class<$SchematicannonBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SchematicannonBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$SchematicannonBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$SchematicannonBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($SchematicannonBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $SchematicannonBlockEntity;
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
        get blockEntityType(): $BlockEntityType<$SchematicannonBlockEntity>;
        get blockEntityClass(): $Class<$SchematicannonBlockEntity>;
    }
}
