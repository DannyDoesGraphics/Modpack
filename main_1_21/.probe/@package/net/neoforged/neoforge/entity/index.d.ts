import { $Level } from "@package/net/minecraft/world/level";
import { $HolderLookup$Provider, $BlockPos } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ExperienceOrb, $Entity$RemovalReason, $Entity, $PortalProcessor } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";

declare module "@package/net/neoforged/neoforge/entity" {
    export class $PartEntity<T extends $Entity> extends $Entity {
        getParent(): $CompoundTag;
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
        constructor(arg0: $CompoundTag_);
        get parent(): $CompoundTag;
    }
    /**
     * Event to determine which player an XP Orb should follow.
     * 
     * This is fired once a second when an XP Orbit find itself without a player to move toward.
     * 
     * The default (nearest player within `#getScanDistance()`) can be overridden with
     * either a new (Fake)Player or null to cancel the attraction.
     * 
     * Note that providing a player that is more than 8 blocks away does work, but it will
     * cause this event to be fired again after 20 ticks.
     * 
     * See also: `PickupXp` for cancelling the pickup.
     * 
     * This event is fired on both server and client on the `NeoForge#EVENT_BUS`.
     */
    export class $XpOrbTargetingEvent extends $Event {
        /**
         * The result of the event.
         */
        getFollowingPlayer(): $Player;
        /**
         * Sets a new result. Can be null to cancel the default search.
         */
        setFollowingPlayer(newFollowingPlayer: $Player): void;
        /**
         * The `ExperienceOrb` that's looking for a player to follow.
         * 
         * You can get the `Level` from this.
         */
        getXpOrb(): $ExperienceOrb;
        /**
         * The maximum distance to scan for players. This is 8 for vanilla orbs.
         */
        getScanDistance(): number;
        constructor(xpOrb: $ExperienceOrb, scanDistance: number);
        get xpOrb(): $ExperienceOrb;
        get scanDistance(): number;
    }
    /**
     * An interface for Entities that need extra information to be communicated
     * between the server and client when they are spawned.
     */
    export class $IEntityWithComplexSpawn {
    }
    export interface $IEntityWithComplexSpawn {
        /**
         * Called by the server when constructing the spawn packet.
         * Data should be added to the provided stream.
         */
        writeSpawnData(buffer: $RegistryFriendlyByteBuf): void;
        /**
         * Called by the server when constructing the spawn packet.
         * Data should be added to the provided stream.
         */
        readSpawnData(buffer: $RegistryFriendlyByteBuf): void;
    }
}
