import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $CustomRenderedItemModelRenderer } from "@package/com/simibubi/create/foundation/item/render";
import { $EntityType_, $PortalProcessor, $Entity, $Entity$RemovalReason, $EntityType$Builder } from "@package/net/minecraft/world/entity";
import { $UUID, $Map } from "@package/java/util";
import { $HumanoidModel$ArmPose } from "@package/net/minecraft/client/model";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $Predicate } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $IItemDecorator } from "@package/net/neoforged/neoforge/client";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum, $Record } from "@package/java/lang";
import { $PotatoProjectileBlockHitAction, $PotatoCannonProjectileType, $PotatoProjectileEntityHitAction, $PotatoCannonProjectileType_, $PotatoProjectileRenderMode, $PotatoProjectileEntityHitAction$Type_ } from "@package/com/simibubi/create/api/equipment/potatoCannon";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $LevelAccessor, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $EntityRendererProvider$Context, $EntityRenderDispatcher, $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $Item, $ItemStack_, $ProjectileWeaponItem, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $IEntityWithComplexSpawn } from "@package/net/neoforged/neoforge/entity";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $PotatoProjectileEntityExtension } from "@package/dev/eriksonn/aeronautics/mixinterface";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ShootGadgetPacket, $ShootableGadgetRenderHandler } from "@package/com/simibubi/create/content/equipment/zapper";
import { $AbstractHurtingProjectile } from "@package/net/minecraft/world/entity/projectile";
import { $CustomArmPoseItem } from "@package/com/simibubi/create/foundation/item";
import { $FoodProperties, $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $EntityHitResult, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/potatoCannon" {
    export class $PotatoCannonPacket extends $ShootGadgetPacket {
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotatoCannonPacket>;
        constructor(arg0: $Vec3_, arg1: $Vec3_, arg2: $ItemStack_, arg3: $InteractionHand_, arg4: number, arg5: boolean);
    }
    export class $PotatoCannonItemRenderer extends $CustomRenderedItemModelRenderer {
        static DECORATOR: $IItemDecorator;
        constructor();
    }
    export class $PotatoCannonItem$Ammo extends $Record {
        stack(): $ItemStack;
        type(): $PotatoCannonProjectileType;
        constructor(stack: $ItemStack_, type: $PotatoCannonProjectileType_);
    }
    /**
     * Values that may be interpreted as {@link $PotatoCannonItem$Ammo}.
     */
    export type $PotatoCannonItem$Ammo_ = { stack?: $ItemStack_, type?: $PotatoCannonProjectileType_,  } | [stack?: $ItemStack_, type?: $PotatoCannonProjectileType_, ];
    export class $AllPotatoProjectileTypes {
        static bootstrap(arg0: $BootstrapContext<$PotatoCannonProjectileType_>): void;
        static FALLBACK: $ResourceKey<$PotatoCannonProjectileType>;
        constructor();
    }
    export class $AllPotatoProjectileEntityHitActions {
        static init(): void;
        constructor();
    }
    export class $AllPotatoProjectileEntityHitActions$FoodEffects extends $Record implements $PotatoProjectileEntityHitAction {
        recoverable(): boolean;
        foodProperty(): $FoodProperties;
        execute(arg0: $ItemStack_, arg1: $EntityHitResult, arg2: $PotatoProjectileEntityHitAction$Type_): boolean;
        codec(): $MapCodec<$PotatoProjectileEntityHitAction>;
        static CODEC: $MapCodec<$AllPotatoProjectileEntityHitActions$FoodEffects>;
        constructor(foodProperty: $FoodProperties_, recoverable: boolean);
    }
    /**
     * Values that may be interpreted as {@link $AllPotatoProjectileEntityHitActions$FoodEffects}.
     */
    export type $AllPotatoProjectileEntityHitActions$FoodEffects_ = { foodProperty?: $FoodProperties_, recoverable?: boolean,  } | [foodProperty?: $FoodProperties_, recoverable?: boolean, ];
    export class $AllPotatoProjectileRenderModes$Tumble extends $Enum<$AllPotatoProjectileRenderModes$Tumble> implements $PotatoProjectileRenderMode {
        static values(): $AllPotatoProjectileRenderModes$Tumble[];
        static valueOf(arg0: string): $AllPotatoProjectileRenderModes$Tumble;
        transform(arg0: $PoseStack, arg1: $PotatoProjectileEntity, arg2: number): void;
        codec(): $MapCodec<$PotatoProjectileRenderMode>;
        static CODEC: $MapCodec<$AllPotatoProjectileRenderModes$Tumble>;
        static INSTANCE: $AllPotatoProjectileRenderModes$Tumble;
    }
    /**
     * Values that may be interpreted as {@link $AllPotatoProjectileRenderModes$Tumble}.
     */
    export type $AllPotatoProjectileRenderModes$Tumble_ = "instance";
    export class $AllPotatoProjectileRenderModes$StuckToEntity extends $Record implements $PotatoProjectileRenderMode {
        offset(): $Vec3;
        transform(arg0: $PoseStack, arg1: $PotatoProjectileEntity, arg2: number): void;
        codec(): $MapCodec<$PotatoProjectileRenderMode>;
        static CODEC: $MapCodec<$AllPotatoProjectileRenderModes$StuckToEntity>;
        constructor(offset: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $AllPotatoProjectileRenderModes$StuckToEntity}.
     */
    export type $AllPotatoProjectileRenderModes$StuckToEntity_ = { offset?: $Vec3_,  } | [offset?: $Vec3_, ];
    export class $AllPotatoProjectileEntityHitActions$SetOnFire extends $Record implements $PotatoProjectileEntityHitAction {
        execute(arg0: $ItemStack_, arg1: $EntityHitResult, arg2: $PotatoProjectileEntityHitAction$Type_): boolean;
        static seconds(arg0: number): $AllPotatoProjectileEntityHitActions$SetOnFire;
        ticks(): number;
        codec(): $MapCodec<$PotatoProjectileEntityHitAction>;
        static CODEC: $MapCodec<$AllPotatoProjectileEntityHitActions$SetOnFire>;
        constructor(ticks: number);
    }
    /**
     * Values that may be interpreted as {@link $AllPotatoProjectileEntityHitActions$SetOnFire}.
     */
    export type $AllPotatoProjectileEntityHitActions$SetOnFire_ = { ticks?: number,  } | [ticks?: number, ];
    export class $AllPotatoProjectileBlockHitActions {
        static init(): void;
        constructor();
    }
    export class $AllPotatoProjectileEntityHitActions$PotionEffect extends $Record implements $PotatoProjectileEntityHitAction {
        recoverable(): boolean;
        execute(arg0: $ItemStack_, arg1: $EntityHitResult, arg2: $PotatoProjectileEntityHitAction$Type_): boolean;
        level(): number;
        ticks(): number;
        codec(): $MapCodec<$PotatoProjectileEntityHitAction>;
        effect(): $Holder<$MobEffect>;
        static CODEC: $MapCodec<$AllPotatoProjectileEntityHitActions$PotionEffect>;
        constructor(effect: $Holder_<$MobEffect>, level: number, ticks: number, recoverable: boolean);
    }
    /**
     * Values that may be interpreted as {@link $AllPotatoProjectileEntityHitActions$PotionEffect}.
     */
    export type $AllPotatoProjectileEntityHitActions$PotionEffect_ = { effect?: $Holder_<$MobEffect>, recoverable?: boolean, ticks?: number, level?: number,  } | [effect?: $Holder_<$MobEffect>, recoverable?: boolean, ticks?: number, level?: number, ];
    export class $AllPotatoProjectileEntityHitActions$ChorusTeleport extends $Record implements $PotatoProjectileEntityHitAction {
        teleportDiameter(): number;
        execute(arg0: $ItemStack_, arg1: $EntityHitResult, arg2: $PotatoProjectileEntityHitAction$Type_): boolean;
        codec(): $MapCodec<$PotatoProjectileEntityHitAction>;
        static CODEC: $MapCodec<$AllPotatoProjectileEntityHitActions$ChorusTeleport>;
        constructor(teleportDiameter: number);
    }
    /**
     * Values that may be interpreted as {@link $AllPotatoProjectileEntityHitActions$ChorusTeleport}.
     */
    export type $AllPotatoProjectileEntityHitActions$ChorusTeleport_ = { teleportDiameter?: number,  } | [teleportDiameter?: number, ];
    export class $PotatoCannonRenderHandler extends $ShootableGadgetRenderHandler {
        beforeShoot(arg0: number, arg1: $Vec3_, arg2: $Vec3_, arg3: $ItemStack_): void;
        constructor();
    }
    export class $AllPotatoProjectileRenderModes$TowardMotion extends $Record implements $PotatoProjectileRenderMode {
        spriteAngleOffset(): number;
        spin(): number;
        transform(arg0: $PoseStack, arg1: $PotatoProjectileEntity, arg2: number): void;
        codec(): $MapCodec<$PotatoProjectileRenderMode>;
        static CODEC: $MapCodec<$AllPotatoProjectileRenderModes$TowardMotion>;
        constructor(spriteAngleOffset: number, spin: number);
    }
    /**
     * Values that may be interpreted as {@link $AllPotatoProjectileRenderModes$TowardMotion}.
     */
    export type $AllPotatoProjectileRenderModes$TowardMotion_ = { spin?: number, spriteAngleOffset?: number,  } | [spin?: number, spriteAngleOffset?: number, ];
    export class $AllPotatoProjectileEntityHitActions$CureZombieVillager extends $Enum<$AllPotatoProjectileEntityHitActions$CureZombieVillager> implements $PotatoProjectileEntityHitAction {
        static values(): $AllPotatoProjectileEntityHitActions$CureZombieVillager[];
        static valueOf(arg0: string): $AllPotatoProjectileEntityHitActions$CureZombieVillager;
        execute(arg0: $ItemStack_, arg1: $EntityHitResult, arg2: $PotatoProjectileEntityHitAction$Type_): boolean;
        codec(): $MapCodec<$PotatoProjectileEntityHitAction>;
        static CODEC: $MapCodec<$AllPotatoProjectileEntityHitActions$CureZombieVillager>;
        static INSTANCE: $AllPotatoProjectileEntityHitActions$CureZombieVillager;
    }
    /**
     * Values that may be interpreted as {@link $AllPotatoProjectileEntityHitActions$CureZombieVillager}.
     */
    export type $AllPotatoProjectileEntityHitActions$CureZombieVillager_ = "instance";
    export class $AllPotatoProjectileBlockHitActions$PlaceBlockOnGround extends $Record implements $PotatoProjectileBlockHitAction {
        execute(arg0: $LevelAccessor, arg1: $ItemStack_, arg2: $BlockHitResult): boolean;
        block(): $Holder<$Block>;
        codec(): $MapCodec<$PotatoProjectileBlockHitAction>;
        static CODEC: $MapCodec<$AllPotatoProjectileBlockHitActions$PlaceBlockOnGround>;
        constructor(arg0: $Block_);
        constructor(block: $Holder_<$Block>);
    }
    /**
     * Values that may be interpreted as {@link $AllPotatoProjectileBlockHitActions$PlaceBlockOnGround}.
     */
    export type $AllPotatoProjectileBlockHitActions$PlaceBlockOnGround_ = { block?: $Holder_<$Block>,  } | [block?: $Holder_<$Block>, ];
    export class $PotatoCannonItem extends $ProjectileWeaponItem implements $CustomArmPoseItem {
        getArmPose(arg0: $ItemStack_, arg1: $AbstractClientPlayer, arg2: $InteractionHand_): $HumanoidModel$ArmPose;
        static getAmmo(arg0: $Player, arg1: $ItemStack_): $PotatoCannonItem$Ammo;
        static ARROW_ONLY: $Predicate<$ItemStack>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        static ARROW_OR_FIREWORK: $Predicate<$ItemStack>;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $PotatoProjectileRenderer extends $EntityRenderer<$PotatoProjectileEntity> {
        getTextureLocation(arg0: $PotatoProjectileEntity): $ResourceLocation;
        render(arg0: $PotatoProjectileEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $AllPotatoProjectileRenderModes {
        static init(): void;
        constructor();
    }
    export class $PotatoProjectileEntity extends $AbstractHurtingProjectile implements $IEntityWithComplexSpawn, $PotatoProjectileEntityExtension {
        setEnchantmentEffectsFromCannon(arg0: $ItemStack_): void;
        getProjectileType(): $PotatoCannonProjectileType;
        getStuckEntity(): $Entity;
        setStuckEntity(arg0: $Entity): void;
        getRenderMode(): $PotatoProjectileRenderMode;
        static playHitSound(arg0: $Level_, arg1: $Vec3_): void;
        aeronautics$setIsFromMountedPotatoCannon(arg0: boolean): void;
        aeronautics$setDamageMultiplier(arg0: number): void;
        setItem(arg0: $ItemStack_): void;
        writeSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        readSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        static playLaunchSound(arg0: $Level_, arg1: $Vec3_, arg2: number): void;
        static build(arg0: $EntityType$Builder<never>): $EntityType$Builder<never>;
        getItem(): $ItemStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        hasImpulse: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        leftOwner: boolean;
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
        aeronautics$isFromMountedPotatoCannon: boolean;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        accelerationPower: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static INITAL_ACCELERATION_POWER: number;
        static DEFLECTION_SCALE: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        ownerUUID: $UUID;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        hasBeenShot: boolean;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        horizontalCollision: boolean;
        constructor(arg0: $EntityType_<$AbstractHurtingProjectile>, arg1: $Level_);
        set enchantmentEffectsFromCannon(value: $ItemStack_);
        get projectileType(): $PotatoCannonProjectileType;
        get renderMode(): $PotatoProjectileRenderMode;
    }
    export class $AllPotatoProjectileBlockHitActions$PlantCrop extends $Record implements $PotatoProjectileBlockHitAction {
        cropBlock(): $Holder<$Block>;
        execute(arg0: $LevelAccessor, arg1: $ItemStack_, arg2: $BlockHitResult): boolean;
        codec(): $MapCodec<$PotatoProjectileBlockHitAction>;
        static CODEC: $MapCodec<$AllPotatoProjectileBlockHitActions$PlantCrop>;
        constructor(arg0: $Block_);
        constructor(cropBlock: $Holder_<$Block>);
    }
    /**
     * Values that may be interpreted as {@link $AllPotatoProjectileBlockHitActions$PlantCrop}.
     */
    export type $AllPotatoProjectileBlockHitActions$PlantCrop_ = { cropBlock?: $Holder_<$Block>,  } | [cropBlock?: $Holder_<$Block>, ];
    export class $AllPotatoProjectileEntityHitActions$SuspiciousStew extends $Enum<$AllPotatoProjectileEntityHitActions$SuspiciousStew> implements $PotatoProjectileEntityHitAction {
        static values(): $AllPotatoProjectileEntityHitActions$SuspiciousStew[];
        static valueOf(arg0: string): $AllPotatoProjectileEntityHitActions$SuspiciousStew;
        execute(arg0: $ItemStack_, arg1: $EntityHitResult, arg2: $PotatoProjectileEntityHitAction$Type_): boolean;
        codec(): $MapCodec<$PotatoProjectileEntityHitAction>;
        static CODEC: $MapCodec<$AllPotatoProjectileEntityHitActions$SuspiciousStew>;
        static INSTANCE: $AllPotatoProjectileEntityHitActions$SuspiciousStew;
    }
    /**
     * Values that may be interpreted as {@link $AllPotatoProjectileEntityHitActions$SuspiciousStew}.
     */
    export type $AllPotatoProjectileEntityHitActions$SuspiciousStew_ = "instance";
    export class $AllPotatoProjectileRenderModes$Billboard extends $Enum<$AllPotatoProjectileRenderModes$Billboard> implements $PotatoProjectileRenderMode {
        static values(): $AllPotatoProjectileRenderModes$Billboard[];
        static valueOf(arg0: string): $AllPotatoProjectileRenderModes$Billboard;
        transform(arg0: $PoseStack, arg1: $PotatoProjectileEntity, arg2: number): void;
        codec(): $MapCodec<$PotatoProjectileRenderMode>;
        static CODEC: $MapCodec<$AllPotatoProjectileRenderModes$Billboard>;
        static INSTANCE: $AllPotatoProjectileRenderModes$Billboard;
    }
    /**
     * Values that may be interpreted as {@link $AllPotatoProjectileRenderModes$Billboard}.
     */
    export type $AllPotatoProjectileRenderModes$Billboard_ = "instance";
}
