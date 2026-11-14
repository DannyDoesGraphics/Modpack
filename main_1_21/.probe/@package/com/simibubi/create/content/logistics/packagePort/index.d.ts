import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $AbstractSimiContainerScreen, $MenuBase } from "@package/com/simibubi/create/foundation/gui/menu";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $MenuProvider, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $Holder, $BlockPos_, $NonNullList } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MenuType_, $AbstractContainerMenu, $Slot } from "@package/net/minecraft/world/inventory";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Record } from "@package/java/lang";
import { $LevelAccessor, $Level } from "@package/net/minecraft/world/level";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $ItemHandlerWrapper, $SmartInventory } from "@package/com/simibubi/create/foundation/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ChainConveyorBlockEntity } from "@package/com/simibubi/create/content/kinetics/chainConveyor";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as postbox from "@package/com/simibubi/create/content/logistics/packagePort/postbox";
export * as frogport from "@package/com/simibubi/create/content/logistics/packagePort/frogport";

declare module "@package/com/simibubi/create/content/logistics/packagePort" {
    export class $PackagePortTarget {
        getExactTargetLocation(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): $Vec3;
        depositImmediately(): boolean;
        deregister(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        register(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        setup(arg0: $PackagePortBlockEntity, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        be(arg0: $LevelAccessor, arg1: $BlockPos_): $BlockEntity;
        "export"(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $ItemStack_, arg3: boolean): boolean;
        getIcon(): $ItemStack;
        canSupport(arg0: $BlockEntity): boolean;
        static CODEC: $Codec<$PackagePortTarget>;
        relativePos: $BlockPos;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackagePortTarget>;
        constructor(arg0: $BlockPos_);
        get icon(): $ItemStack;
    }
    export class $PackagePortMenu extends $MenuBase<$PackagePortBlockEntity> {
        static create(arg0: number, arg1: $Inventory, arg2: $PackagePortBlockEntity): $PackagePortMenu;
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
        contentHolder: $PackagePortBlockEntity;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $PackagePortBlockEntity);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
    }
    export class $PackagePortTarget$TrainStationFrogportTarget extends $PackagePortTarget {
        static CODEC: $MapCodec<$PackagePortTarget$TrainStationFrogportTarget>;
        relativePos: $BlockPos;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PackagePortTarget$TrainStationFrogportTarget>;
        constructor(arg0: $BlockPos_);
    }
    export class $PackagePortPlacementPacket$ClientBoundRequest extends $Record implements $ClientboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PackagePortPlacementPacket$ClientBoundRequest>;
        constructor(pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $PackagePortPlacementPacket$ClientBoundRequest}.
     */
    export type $PackagePortPlacementPacket$ClientBoundRequest_ = { pos?: $BlockPos_,  } | [pos?: $BlockPos_, ];
    export class $PackagePortScreen extends $AbstractSimiContainerScreen<$PackagePortMenu> {
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
        constructor(arg0: $PackagePortMenu, arg1: $Inventory, arg2: $Component_);
    }
    export interface $PackagePortTargetType extends RegistryMarked<RegistryTypes.CreatePackagePortTargetTypeTag, RegistryTypes.CreatePackagePortTargetType> {}
    export class $PackagePortConfigurationPacket extends $BlockEntityConfigurationPacket<$PackagePortBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PackagePortConfigurationPacket>;
        constructor(arg0: $BlockPos_, arg1: string, arg2: boolean);
    }
    export class $PackagePortTarget$ChainConveyorFrogportTarget extends $PackagePortTarget {
        handler$gcc000$sable$testSublevelDistance(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $ItemStack_, arg3: boolean, arg4: $CallbackInfoReturnable<any>, arg5: $ChainConveyorBlockEntity): void;
        flipped: boolean;
        static CODEC: $MapCodec<$PackagePortTarget$ChainConveyorFrogportTarget>;
        relativePos: $BlockPos;
        connection: $BlockPos;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PackagePortTarget$ChainConveyorFrogportTarget>;
        chainPos: number;
        constructor(arg0: $BlockPos_, arg1: number, arg2: ($BlockPos_) | undefined, arg3: boolean);
        constructor(arg0: $BlockPos_, arg1: number, arg2: $BlockPos_, arg3: boolean);
    }
    export class $PackagePortPlacementPacket extends $Record implements $ServerboundPacketPayload {
        target(): $PackagePortTarget;
        pos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackagePortPlacementPacket>;
        constructor(target: $PackagePortTarget, pos: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $PackagePortPlacementPacket}.
     */
    export type $PackagePortPlacementPacket_ = { pos?: $BlockPos_, target?: $PackagePortTarget,  } | [pos?: $BlockPos_, target?: $PackagePortTarget, ];
    export class $AllPackagePortTargetTypes {
        static register(arg0: $IEventBus): void;
        static TRAIN_STATION: $Holder<$PackagePortTargetType>;
        static CHAIN_CONVEYOR: $Holder<$PackagePortTargetType>;
        constructor();
    }
    export class $PackagePortTargetSelectionHandler {
        static validateDiff(arg0: $Vec3_, arg1: $BlockPos_): string;
        static animateConnection(arg0: $Minecraft, arg1: $Vec3_, arg2: $Vec3_, arg3: $Color): void;
        static flushSettings(arg0: $BlockPos_): void;
        static onUse(): boolean;
        static tick(): void;
        static exactPositionOfTarget: $Vec3;
        static isPostbox: boolean;
        static activePackageTarget: $PackagePortTarget;
        constructor();
    }
    export class $PackagePortTarget$ChainConveyorFrogportTarget$Type implements $PackagePortTargetType {
        streamCodec(): $StreamCodec<$ByteBuf, $PackagePortTarget$ChainConveyorFrogportTarget>;
        codec(): $MapCodec<$PackagePortTarget$ChainConveyorFrogportTarget>;
        constructor();
    }
    export class $PackagePortAutomationInventoryWrapper extends $ItemHandlerWrapper {
        constructor(arg0: $IItemHandlerModifiable, arg1: $PackagePortBlockEntity);
    }
    export class $PackagePortItem extends $BlockItem {
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
    export class $PackagePortTarget$TrainStationFrogportTarget$Type implements $PackagePortTargetType {
        streamCodec(): $StreamCodec<$ByteBuf, $PackagePortTarget$TrainStationFrogportTarget>;
        codec(): $MapCodec<$PackagePortTarget$TrainStationFrogportTarget>;
        constructor();
    }
    export class $PackagePortTargetType {
    }
    export interface $PackagePortTargetType {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $PackagePortTarget>;
        codec(): $MapCodec<$PackagePortTarget>;
    }
    /**
     * Values that may be interpreted as {@link $PackagePortTargetType}.
     */
    export type $PackagePortTargetType_ = RegistryTypes.CreatePackagePortTargetType;
    export class $PackagePortBlockEntity extends $SmartBlockEntity implements $MenuProvider, $Clearable {
        isBackedUp(): boolean;
        filterChanged(): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        getComparatorOutput(): number;
        clearContent(): void;
        getFilterString(): string;
        use(arg0: $Player): $ItemInteractionResult;
        getDisplayName(): $Component;
        drop(arg0: $ItemStack_): void;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        acceptsPackages: boolean;
        level: $Level;
        addressFilter: string;
        static ATTACHMENTS_NBT_KEY: string;
        inventory: $SmartInventory;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        target: $PackagePortTarget;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get backedUp(): boolean;
        get comparatorOutput(): number;
        get filterString(): string;
        get displayName(): $Component;
    }
}
