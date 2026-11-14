import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CommandDispatcher } from "@package/com/mojang/brigadier";
import { $HumanoidArm, $PortalProcessor, $Entity, $EntityDimensions, $Entity$RemovalReason, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $EntityRenderersEvent$RegisterLayerDefinitions, $RegisterClientCommandsEvent } from "@package/net/neoforged/neoforge/client/event";
import { $IConductorHoldingFakePlayer, $ConductorEntity } from "@package/com/railwayteam/railways/content/conductor";
import { $Consumer, $BiConsumer_, $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $FakePlayer } from "@package/net/neoforged/neoforge/common/util";
import { $ServerPlayerGameMode, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos } from "@package/net/minecraft/core";
import { $Connection } from "@package/net/minecraft/network";
import { $CreativeModeTabModifier } from "@package/com/tterrag/registrate/util";
import { $AbstractContainerMenu, $InventoryMenu } from "@package/net/minecraft/world/inventory";
import { $Record, $Object } from "@package/java/lang";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Level } from "@package/net/minecraft/world/level";
import { $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $ModelLayerLocation } from "@package/net/minecraft/client/model/geom";
import { $ServerGamePacketListenerImpl, $PlayerChunkSender } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ForwardingMultimap } from "@package/com/google/common/collect";
import { $RegisterCommandsEvent, $AddPackFindersEvent } from "@package/net/neoforged/neoforge/event";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $RegisterPayloadHandlersEvent } from "@package/net/neoforged/neoforge/network/event";
import { $SharedSuggestionProvider, $CommandSourceStack, $CommandBuildContext } from "@package/net/minecraft/commands";
import { $LayerDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as asm from "@package/com/railwayteam/railways/neoforge/asm";
export * as events from "@package/com/railwayteam/railways/neoforge/events";
export * as datagen from "@package/com/railwayteam/railways/neoforge/datagen";
export * as mixin from "@package/com/railwayteam/railways/neoforge/mixin";
export * as client from "@package/com/railwayteam/railways/neoforge/client";

declare module "@package/com/railwayteam/railways/neoforge" {
    export class $RailwaysNetworking {
        static registerPayloads(arg0: $RegisterPayloadHandlersEvent): void;
        constructor();
    }
    export class $ConductorFakePlayerForge$ConductorNetHandler extends $ServerGamePacketListenerImpl {
        static LATENCY_CHECK_INTERVAL: number;
        server: $MinecraftServer;
        aboveGroundTickCount: number;
        connection: $Connection;
        aboveGroundVehicleTickCount: number;
        chunkSender: $PlayerChunkSender;
        player: $ServerPlayer;
    }
    export class $ModSetupImpl {
        static useBaseTab(): void;
        static useTracksTab(): void;
        static usePalettesTab(): void;
        constructor();
    }
    export class $RailwaysImpl {
        static registerCommands(arg0: $BiConsumer_<$CommandDispatcher<$CommandSourceStack>, $CommandBuildContext>): void;
        static finalizeRegistrate(): void;
        static onCommandRegistration(arg0: $RegisterCommandsEvent): void;
        static platformBasedRegistration(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        constructor(arg0: $IEventBus, arg1: $ModContainer);
    }
    export class $RailwaysImpl$NoOpCreativeTabMultimap extends $ForwardingMultimap<$ResourceKey<$CreativeModeTab>, $Consumer<$CreativeModeTabModifier>> {
    }
    export class $ConductorFakePlayerForge extends $FakePlayer implements $IConductorHoldingFakePlayer {
        getConductor(): $ConductorEntity;
        serializeNBT(arg0: $HolderLookup$Provider): $Player;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        static ID_TAG: string;
        static WAKE_UP_DURATION: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        wonGame: boolean;
        walkDist: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        gameMode: $ServerPlayerGameMode;
        object: $Object;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        dead: boolean;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        xxa: number;
        zCloak: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        rotA: number;
        horizontalCollision: boolean;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        tickCount: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        level: $Level;
        yRot: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        currentExplosionCause: $Entity;
        constructor(arg0: $ServerLevel, arg1: $ConductorEntity);
        get conductor(): $ConductorEntity;
    }
    export class $RailwaysClientImpl {
        static onClientCommandRegistration(arg0: $RegisterClientCommandsEvent): void;
        static registerModelLayer(arg0: $ModelLayerLocation, arg1: $Supplier_<$LayerDefinition>): void;
        static onModelLayerRegistration(arg0: $EntityRenderersEvent$RegisterLayerDefinitions): void;
        static registerBuiltinPack(arg0: string, arg1: string): void;
        static init(): void;
        static registerClientCommands(arg0: $Consumer_<$CommandDispatcher<$SharedSuggestionProvider>>): void;
        static onBuiltinPackRegistration(arg0: $AddPackFindersEvent): void;
        constructor();
    }
    export class $RailwaysDataPackImpl {
        static onBuiltinPackRegistration(arg0: $AddPackFindersEvent): void;
        constructor();
    }
    export class $RailwaysClientImpl$PackInfo extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $RailwaysClientImpl$PackInfo}.
     */
    export type $RailwaysClientImpl$PackInfo_ = { id?: string, name?: string,  } | [id?: string, name?: string, ];
}
