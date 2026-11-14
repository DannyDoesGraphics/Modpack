import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $EntityType_, $PortalProcessor, $Entity, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState, $EntityType$Builder } from "@package/net/minecraft/world/entity";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List, $List_, $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $PackageOrderWithCrafts, $PackageOrderWithCrafts_ } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $AttackEntityEvent } from "@package/net/neoforged/neoforge/event/entity/player";
import { $WeakReference } from "@package/java/lang/ref";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $InteractionResultHolder, $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $EntityRendererProvider$Context, $EntityRenderDispatcher, $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $IEntityWithComplexSpawn } from "@package/net/neoforged/neoforge/entity";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $TransformedInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $AbstractEntityVisual, $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/box" {
    export class $PackageEntity extends $LivingEntity implements $IEntityWithComplexSpawn {
        static centerPackage(arg0: $Entity, arg1: $Vec3_): boolean;
        static fromDroppedItem(arg0: $Level_, arg1: $Entity, arg2: $ItemStack_): $PackageEntity;
        setBox(arg0: $ItemStack_): void;
        static createPackageAttributes(): $AttributeSupplier$Builder;
        decreaseInsertionTimer(arg0: $Vec3_): boolean;
        static fromItemStack(arg0: $Level_, arg1: $Vec3_, arg2: $ItemStack_): $PackageEntity;
        writeSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        readSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        getBox(): $ItemStack;
        getAddress(): string;
        static build(arg0: $EntityType$Builder<never>): $EntityType$Builder<never>;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static ARMOR_SLOT_OFFSET: number;
        static USE_ITEM_INTERVAL: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        yHeadRot: number;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        level: $Level;
        yRot: number;
        swingingArm: $InteractionHand;
        vec3: $Vec3;
        moveDist: number;
        vec2: $Vec3;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        clientPosition: $Vec3;
        zo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        walkAnimation: $WalkAnimationState;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        insertionDelay: number;
        deathTime: number;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static UUID_TAG: string;
        hurtDuration: number;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        box: $ItemStack;
        dead: boolean;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static DEFAULT_BABY_SCALE: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        static ATTRIBUTES_FIELD: string;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        xxa: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        tossedBy: $WeakReference<$Player>;
        yBodyRot: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        timeOffs: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        rotA: number;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<never>, arg1: $Level_);
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number);
        get address(): string;
    }
    export class $PackageItem$PackageOrderData extends $Record {
        orderId(): number;
        fragmentIndex(): number;
        linkIndex(): number;
        isFinalLink(): boolean;
        orderContext(): $PackageOrderWithCrafts;
        isFinal(): boolean;
        static CODEC: $Codec<$PackageItem$PackageOrderData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackageItem$PackageOrderData>;
        constructor(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: boolean, arg5: ($PackageOrderWithCrafts_) | undefined);
        constructor(orderId: number, linkIndex: number, isFinalLink: boolean, fragmentIndex: number, isFinal: boolean, orderContext: $PackageOrderWithCrafts_);
        get finalLink(): boolean;
        get final(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PackageItem$PackageOrderData}.
     */
    export type $PackageItem$PackageOrderData_ = { isFinalLink?: boolean, linkIndex?: number, orderContext?: $PackageOrderWithCrafts_, fragmentIndex?: number, orderId?: number, isFinal?: boolean,  } | [isFinalLink?: boolean, linkIndex?: number, orderContext?: $PackageOrderWithCrafts_, fragmentIndex?: number, orderId?: number, isFinal?: boolean, ];
    export class $PackageVisual extends $AbstractEntityVisual<$PackageEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        instance: $TransformedInstance;
        constructor(arg0: $VisualizationContext, arg1: $PackageEntity, arg2: number);
    }
    export class $PackageItem extends $Item {
        static matchAddress(arg0: $ItemStack_, arg1: string): boolean;
        static matchAddress(arg0: string, arg1: string): boolean;
        static getPackageVelocity(arg0: number): number;
        static clearAddress(arg0: $ItemStack_): void;
        static addAddress(arg0: $ItemStack_, arg1: string): void;
        static getOrderId(arg0: $ItemStack_): number;
        static hasOrderData(arg0: $ItemStack_): boolean;
        static getLinkIndex(arg0: $ItemStack_): number;
        static getOrderContext(arg0: $ItemStack_): $PackageOrderWithCrafts;
        static addOrderContext(arg0: $ItemStack_, arg1: $PackageOrderWithCrafts_): void;
        static getHookDistance(arg0: $ItemStack_): number;
        static isFinalLink(arg0: $ItemStack_): boolean;
        static isFinal(arg0: $ItemStack_): boolean;
        open(arg0: $Level_, arg1: $Player, arg2: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        static isPackage(arg0: $ItemStack_): boolean;
        static getAddress(arg0: $ItemStack_): string;
        static getIndex(arg0: $ItemStack_): number;
        static getContents(arg0: $ItemStack_): $ItemStackHandler;
        static setOrder(arg0: $ItemStack_, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean, arg6: $PackageOrderWithCrafts_): void;
        static containing(arg0: $ItemStackHandler): $ItemStack;
        static containing(arg0: $List_<$ItemStack_>): $ItemStack;
        static getWidth(arg0: $ItemStack_): number;
        static getHeight(arg0: $ItemStack_): number;
        static SLOTS: number;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        style: $PackageStyles$PackageStyle;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties, arg1: $PackageStyles$PackageStyle_);
    }
    export class $PackageRenderer extends $EntityRenderer<$PackageEntity> {
        getTextureLocation(arg0: $PackageEntity): $ResourceLocation;
        static renderBox(arg0: $Entity, arg1: number, arg2: $PoseStack, arg3: $MultiBufferSource_, arg4: number, arg5: $PartialModel): void;
        render(arg0: $PackageEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $PackageClientInteractionHandler {
        static onPlayerPunchPackage(arg0: $AttackEntityEvent): void;
        constructor();
    }
    export class $PackageDestroyPacket extends $Record implements $ClientboundPacketPayload {
        location(): $Vec3;
        box(): $ItemStack;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PackageDestroyPacket>;
        constructor(location: $Vec3_, box: $ItemStack_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $PackageDestroyPacket}.
     */
    export type $PackageDestroyPacket_ = { box?: $ItemStack_, location?: $Vec3_,  } | [box?: $ItemStack_, location?: $Vec3_, ];
    export class $PackageStyles$PackageStyle extends $Record {
        getItemId(): $ResourceLocation;
        rare(): boolean;
        riggingOffset(): number;
        getRiggingModel(): $ResourceLocation;
        type(): string;
        width(): number;
        height(): number;
        constructor(type: string, width: number, height: number, riggingOffset: number, rare: boolean);
        get itemId(): $ResourceLocation;
        get riggingModel(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $PackageStyles$PackageStyle}.
     */
    export type $PackageStyles$PackageStyle_ = { type?: string, riggingOffset?: number, height?: number, rare?: boolean, width?: number,  } | [type?: string, riggingOffset?: number, height?: number, rare?: boolean, width?: number, ];
    export class $PackageStyles {
        static getRandomBox(): $ItemStack;
        static getDefaultBox(): $ItemStack;
        static RARE_BOXES: $List<$PackageItem>;
        static STYLES: $List<$PackageStyles$PackageStyle>;
        static STANDARD_BOXES: $List<$PackageItem>;
        static ALL_BOXES: $List<$PackageItem>;
        constructor();
        static get randomBox(): $ItemStack;
        static get defaultBox(): $ItemStack;
    }
}
