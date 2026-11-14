import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Recipe } from "@package/net/minecraft/world/item/crafting";
import { $AbstractSimiContainerScreen, $GhostItemMenu } from "@package/com/simibubi/create/foundation/gui/menu";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $EntityType_, $PortalProcessor, $Entity, $Entity$RemovalReason, $EntityType$Builder } from "@package/net/minecraft/world/entity";
import { $TrackPlacement$PlacementInfo } from "@package/com/simibubi/create/content/trains/track";
import { $IInteractionChecker } from "@package/com/simibubi/create/foundation/utility";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft, $DeltaTracker } from "@package/net/minecraft/client";
import { $HangingEntity } from "@package/net/minecraft/world/entity/decoration";
import { $List, $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $MenuProvider, $Container } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MenuType_, $AbstractContainerMenu, $Slot, $TransientCraftingContainer } from "@package/net/minecraft/world/inventory";
import { $Record } from "@package/java/lang";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Couple } from "@package/net/createmod/catnip/data";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $SpecialEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $EntityRendererProvider$Context, $EntityRenderDispatcher, $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $Item_, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $IEntityWithComplexSpawn } from "@package/net/neoforged/neoforge/entity";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $SlotItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ISyncPersistentData } from "@package/com/simibubi/create/foundation/networking";
import { $TableClothBlockEntity, $ShoppingListItem$ShoppingList_ } from "@package/com/simibubi/create/content/logistics/tableCloth";
import { $InventorySummary } from "@package/com/simibubi/create/content/logistics/packager";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font, $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/blueprint" {
    export class $BlueprintRenderer extends $EntityRenderer<$BlueprintEntity> {
        getTextureLocation(arg0: $BlueprintEntity): $ResourceLocation;
        render(arg0: $BlueprintEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $BlueprintEntity extends $HangingEntity implements $IEntityWithComplexSpawn, $SpecialEntityItemRequirement, $ISyncPersistentData, $IInteractionChecker {
        getSectionAt(arg0: $Vec3_): $BlueprintEntity$BlueprintSection;
        getOrCreateRecipeCompound(): $CompoundTag;
        getSection(arg0: number): $BlueprintEntity$BlueprintSection;
        onPersistentDataUpdated(): void;
        writeSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        readSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        canPlayerUse(arg0: $Player): boolean;
        getRequiredItems(): $ItemRequirement;
        static build(arg0: $EntityType$Builder<never>): $EntityType$Builder<never>;
        getWidth(): number;
        getHeight(): number;
        syncPersistentDataWithTracking(arg0: $Entity): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        level: $Level;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        constructor(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_, arg3: $Direction_);
        get orCreateRecipeCompound(): $CompoundTag;
        get requiredItems(): $ItemRequirement;
        get width(): number;
        get height(): number;
    }
    export class $BlueprintOverlayRenderer {
        static drawItemStack(arg0: $GuiGraphics, arg1: $Minecraft, arg2: number, arg3: number, arg4: $ItemStack_, arg5: string): void;
        static displayClothShop(arg0: $TableClothBlockEntity, arg1: number, arg2: $ShoppingListItem$ShoppingList_): void;
        static displayShoppingList(arg0: $Couple<$InventorySummary>): void;
        static displayTrackRequirements(arg0: $TrackPlacement$PlacementInfo, arg1: $ItemStack_): void;
        static displayChainRequirements(arg0: $Item_, arg1: number, arg2: boolean): void;
        static renderOverlay(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static tick(): void;
        static rebuild(arg0: $BlueprintEntity$BlueprintSection, arg1: boolean): void;
        static OVERLAY: $LayeredDraw$Layer;
        constructor();
    }
    export class $BlueprintEntity$BlueprintCraftingInventory extends $TransientCraftingContainer {
        menu: $AbstractContainerMenu;
    }
    export class $BlueprintItem extends $Item {
        static assignCompleteRecipe(arg0: $Level_, arg1: $ItemStackHandler, arg2: $Recipe<never>): void;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $BlueprintEntity$BlueprintSection implements $MenuProvider, $IInteractionChecker {
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
    }
    export class $BlueprintScreen extends $AbstractSimiContainerScreen<$BlueprintMenu> {
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
        constructor(arg0: $BlueprintMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $BlueprintMenu extends $GhostItemMenu<$BlueprintEntity$BlueprintSection> {
        onCraftMatrixChanged(): void;
        static create(arg0: number, arg1: $Inventory, arg2: $BlueprintEntity$BlueprintSection): $BlueprintMenu;
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
        contentHolder: $BlueprintEntity$BlueprintSection;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $BlueprintEntity$BlueprintSection);
        constructor(arg0: $MenuType_<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
    }
    export class $BlueprintMenu$BlueprintCraftSlot extends $SlotItemHandler {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $BlueprintMenu$BlueprintCraftingInventory extends $TransientCraftingContainer {
        menu: $AbstractContainerMenu;
    }
    export class $BlueprintAssignCompleteRecipePacket extends $Record implements $ServerboundPacketPayload {
        recipeId(): $ResourceLocation;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlueprintAssignCompleteRecipePacket>;
        constructor(recipeId: $ResourceLocation_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $BlueprintAssignCompleteRecipePacket}.
     */
    export type $BlueprintAssignCompleteRecipePacket_ = { recipeId?: $ResourceLocation_,  } | [recipeId?: $ResourceLocation_, ];
}
