import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $UUID, $List, $EnumSet, $UUID_, $List_, $Map } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $BehaviourType, $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IHaveBigOutline, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $BakedModelWrapperWithData } from "@package/com/simibubi/create/foundation/model";
import { $Record, $Class } from "@package/java/lang";
import { $LootParams$Builder } from "@package/net/minecraft/world/level/storage/loot";
import { $Couple, $IntAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $DyeColor_, $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties, $DyeColor } from "@package/net/minecraft/world/item";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityDataPacket } from "@package/com/simibubi/create/foundation/networking";
import { $InventorySummary } from "@package/com/simibubi/create/content/logistics/packager";
import { $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $AutoRequestData } from "@package/com/simibubi/create/content/logistics/redstoneRequester";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/logistics/tableCloth" {
    export class $TableClothFilterSlot extends $ValueBoxTransform {
    }
    export class $TableClothModel extends $BakedModelWrapperWithData {
        static reload(): void;
        constructor(arg0: $BakedModel);
    }
    export class $ShopUpdatePacket extends $BlockEntityDataPacket<$TableClothBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ShopUpdatePacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $BlueprintOverlayShopContext extends $Record {
        stockLevel(): number;
        purchases(): number;
        checkout(): boolean;
        constructor(checkout: boolean, stockLevel: number, purchases: number);
    }
    /**
     * Values that may be interpreted as {@link $BlueprintOverlayShopContext}.
     */
    export type $BlueprintOverlayShopContext_ = { checkout?: boolean, purchases?: number, stockLevel?: number,  } | [checkout?: boolean, purchases?: number, stockLevel?: number, ];
    export class $TableClothModel$CullData extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $TableClothModel$CullData}.
     */
    export type $TableClothModel$CullData_ = { culled?: $EnumSet<$Direction_>,  } | [culled?: $EnumSet<$Direction_>, ];
    export class $ShoppingListItem$ShoppingList$Mutable {
        addPurchases(arg0: $BlockPos_, arg1: number): void;
        toImmutable(): $ShoppingListItem$ShoppingList;
        constructor(arg0: $ShoppingListItem$ShoppingList_);
    }
    export class $TableClothRenderer extends $SmartBlockEntityRenderer<$TableClothBlockEntity> {
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $ShoppingListItem extends $Item {
        static saveList(arg0: $ItemStack_, arg1: $ShoppingListItem$ShoppingList_, arg2: string): $ItemStack;
        static getAddress(arg0: $ItemStack_): string;
        static getList(arg0: $ItemStack_): $ShoppingListItem$ShoppingList;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $TableClothBlock$PlacementHelper implements $IPlacementHelper {
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
        getOffset(arg0: $Player, arg1: $Level_, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
    }
    export class $TableClothBlockItem extends $BlockItem {
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
    export class $TableClothBlock extends $Block implements $IHaveBigOutline, $IWrenchable, $IBE<$TableClothBlockEntity> {
        getOcclusionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getInteractionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_): $VoxelShape;
        getDrops(arg0: $BlockState_, arg1: $LootParams$Builder): $List<$ItemStack>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntityType(): $BlockEntityType<$TableClothBlockEntity>;
        getBlockEntityClass(): $Class<$TableClothBlockEntity>;
        getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        getColor(): $DyeColor;
        canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
        getCollisionShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
        onRemove(arg0: $BlockState_, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_, arg4: boolean): void;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getTicker<S extends $BlockEntity>(arg0: $Level_, arg1: $BlockState_, arg2: $BlockEntityType_<S>): $BlockEntityTicker<S>;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TableClothBlockEntity, $InteractionResult>): $InteractionResult;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TableClothBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$TableClothBlockEntity>): void;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($TableClothBlockEntity) | undefined;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $TableClothBlockEntity;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static HAS_BE: $BooleanProperty;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: string);
        constructor(arg0: $BlockBehaviour$Properties, arg1: $DyeColor_);
        get blockEntityType(): $BlockEntityType<$TableClothBlockEntity>;
        get blockEntityClass(): $Class<$TableClothBlockEntity>;
        get color(): $DyeColor;
    }
    export class $ShoppingListItem$ShoppingList extends $Record {
        bakeEntries(arg0: $LevelAccessor, arg1: $BlockPos_): $Couple<$InventorySummary>;
        shopOwner(): $UUID;
        shopNetwork(): $UUID;
        getPurchases(arg0: $BlockPos_): number;
        purchases(): $List<$IntAttached<$BlockPos>>;
        duplicate(): $ShoppingListItem$ShoppingList;
        static CODEC: $Codec<$ShoppingListItem$ShoppingList>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ShoppingListItem$ShoppingList>;
        constructor(purchases: $List_<$IntAttached<$BlockPos_>>, shopOwner: $UUID_, shopNetwork: $UUID_);
    }
    /**
     * Values that may be interpreted as {@link $ShoppingListItem$ShoppingList}.
     */
    export type $ShoppingListItem$ShoppingList_ = { shopOwner?: $UUID_, purchases?: $List_<$IntAttached<$BlockPos_>>, shopNetwork?: $UUID_,  } | [shopOwner?: $UUID_, purchases?: $List_<$IntAttached<$BlockPos_>>, shopNetwork?: $UUID_, ];
    export class $TableClothOverlayRenderer {
        static tick(): void;
        constructor();
    }
    export class $TableClothFilteringBehaviour extends $FilteringBehaviour {
        upTo: boolean;
        blockEntity: $SmartBlockEntity;
        count: number;
        customLabel: $MutableComponent;
        static TYPE: $BehaviourType<$FilteringBehaviour>;
        constructor(arg0: $TableClothBlockEntity);
    }
    export class $TableClothBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
        isShop(): boolean;
        getPaymentAmount(): number;
        useShop(arg0: $Player): $ItemInteractionResult;
        getPaymentItem(): $ItemStack;
        getStockLevelForTrade(arg0: $ShoppingListItem$ShoppingList_): number;
        getItemsForRender(): $List<$ItemStack>;
        invalidateItemsForRender(): void;
        notifyShopUpdate(): void;
        targetsPriceTag(arg0: $Player, arg1: $BlockHitResult): boolean;
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        use(arg0: $Player, arg1: $BlockHitResult): $ItemInteractionResult;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        owner: $UUID;
        level: $Level;
        manuallyAddedItems: $List<$ItemStack>;
        priceTag: $FilteringBehaviour;
        facing: $Direction;
        static ATTACHMENTS_NBT_KEY: string;
        sideOccluded: boolean;
        computerBehaviour: $AbstractComputerBehaviour;
        requestData: $AutoRequestData;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get shop(): boolean;
        get paymentAmount(): number;
        get paymentItem(): $ItemStack;
        get itemsForRender(): $List<$ItemStack>;
    }
}
