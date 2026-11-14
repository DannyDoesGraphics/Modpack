import { $Explosion, $Level$ExplosionInteraction, $Level$ExplosionInteraction_, $Level, $ExplosionDamageCalculator, $Level_ } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fireworks_ } from "@package/net/minecraft/world/item/component";
import { $EntityType_, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $Holder_, $Holder, $Direction_, $RegistryAccess } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockProviderKJS, $InventoryKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Record, $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/latvian/mods/kubejs/level" {
    export class $ExplosionKubeEvent$After extends $ExplosionKubeEvent {
        /**
         * Gets a list of all entities affected by the explosion.
         */
        getAffectedEntities(): $EntityArrayList;
        /**
         * Gets a list of all blocks affected by the explosion.
         */
        getAffectedBlocks(): $List<$LevelBlock>;
        /**
         * Remove an entity from the list of affected entities.
         */
        removeAffectedEntity(entity: $Entity): void;
        /**
         * Remove all entities from the list of affected entities.
         */
        removeAllAffectedEntities(): void;
        /**
         * Remove a block from the list of affected blocks.
         */
        removeAffectedBlock(block: $LevelBlock): void;
        /**
         * Remove all blocks from the list of affected blocks.
         */
        removeAllAffectedBlocks(): void;
        /**
         * Remove all knockback from all affected *players*.
         */
        removeKnockback(): void;
        constructor(level: $Level_, explosion: $Explosion, affectedEntities: $List_<$Entity>);
        get affectedEntities(): $EntityArrayList;
        get affectedBlocks(): $List<$LevelBlock>;
    }
    export class $WrappedSpawner extends $Record {
        isWorldgen(): boolean;
        entity(): $Entity;
        static of(spawner: $Either<$BlockEntity, $Entity>): $WrappedSpawner;
        block(): $LevelBlock;
        constructor(entity: $Entity, block: $LevelBlock);
        get worldgen(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrappedSpawner}.
     */
    export type $WrappedSpawner_ = { entity?: $Entity, block?: $LevelBlock,  } | [entity?: $Entity, block?: $LevelBlock, ];
    export class $KubeLevelEvent {
    }
    export interface $KubeLevelEvent extends $KubeEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    /**
     * Values that may be interpreted as {@link $KubeLevelEvent}.
     */
    export type $KubeLevelEvent_ = (() => $Level_);
    export class $ExplosionProperties extends $Record {
        damageSource(): $DamageSource;
        explode(level: $Level_, x: number, y: number, z: number): $Explosion;
        explosionSound(): $Holder<$SoundEvent>;
        damageCalculator(): $ExplosionDamageCalculator;
        causesFire(): (boolean) | undefined;
        smallParticles(): $ParticleOptions;
        largeParticles(): $ParticleOptions;
        mode(): $Level$ExplosionInteraction;
        source(): $Entity;
        particles(): (boolean) | undefined;
        strength(): (number) | undefined;
        constructor(source: $Entity | null, damageSource: $DamageSource_ | null, damageCalculator: $ExplosionDamageCalculator | null, strength: (number) | undefined, causesFire: (boolean) | undefined, mode: $Level$ExplosionInteraction_ | null, particles: (boolean) | undefined, smallParticles: $ParticleOptions_ | null, largeParticles: $ParticleOptions_ | null, explosionSound: $Holder_<$SoundEvent> | null);
    }
    /**
     * Values that may be interpreted as {@link $ExplosionProperties}.
     */
    export type $ExplosionProperties_ = { particles?: (boolean) | undefined, damageSource?: $DamageSource_, explosionSound?: $Holder_<$SoundEvent>, largeParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, smallParticles?: $ParticleOptions_, strength?: (number) | undefined, source?: $Entity, mode?: $Level$ExplosionInteraction_, causesFire?: (boolean) | undefined,  } | [particles?: (boolean) | undefined, damageSource?: $DamageSource_, explosionSound?: $Holder_<$SoundEvent>, largeParticles?: $ParticleOptions_, damageCalculator?: $ExplosionDamageCalculator, smallParticles?: $ParticleOptions_, strength?: (number) | undefined, source?: $Entity, mode?: $Level$ExplosionInteraction_, causesFire?: (boolean) | undefined, ];
    export class $SimpleLevelKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(l: $Level_);
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
    export class $LevelBlock {
    }
    export interface $LevelBlock extends $BlockProviderKJS {
        getDimensionKey(): $ResourceKey<$Level>;
        getPos(): $BlockPos;
        canSeeSkyFromBelowWater(): boolean;
        setEntityData(tag: $CompoundTag_): void;
        getCenterY(): number;
        spawnLightning(effectOnly: boolean, player: $ServerPlayer): void;
        spawnLightning(effectOnly: boolean): void;
        spawnLightning(): void;
        getPlayersInRadius(radius: number): $EntityArrayList;
        getPlayersInRadius(): $EntityArrayList;
        getDown(): $LevelBlock;
        getUp(): $LevelBlock;
        getNorth(): $LevelBlock;
        getSouth(): $LevelBlock;
        getWest(): $LevelBlock;
        getEast(): $LevelBlock;
        getEntityId(): string;
        mergeEntityData(tag: $CompoundTag_): void;
        getLight(): number;
        getSkyLight(): number;
        getBlockLight(): number;
        getCanSeeSky(): boolean;
        spawnFireworks(fireworks: $Fireworks_, lifetime: number): void;
        popItem(item: $ItemStack_): void;
        popItemFromFace(item: $ItemStack_, dir: $Direction_): void;
        getBiomeId(): $ResourceLocation;
        toBlockStateString(): string;
        explode(properties: $ExplosionProperties_): $Explosion;
        setBlockState(state: $BlockState_, flags: number): void;
        setBlockState(state: $BlockState_): void;
        getCenterX(): number;
        getCenterZ(): number;
        getDrops(): $List<$ItemStack>;
        getDrops(entity: $Entity, heldItem: $ItemStack_): $List<$ItemStack>;
        createEntity(type: $EntityType_<never>): $Entity;
        getDimension(): $ResourceLocation;
        getY(): number;
        getEntity(): $BlockEntity;
        offset(x: number, y: number, z: number): $LevelBlock;
        offset(f: $Direction_): $LevelBlock;
        offset(f: $Direction_, d: number): $LevelBlock;
        set(block: $Block_): void;
        set(block: $Block_, properties: $Map_<never, never>): void;
        set(block: $Block_, properties: $Map_<never, never>, flags: number): void;
        getProperties(): $Map<string, string>;
        getLevel(): $Level;
        getItem(): $ItemStack;
        getX(): number;
        getZ(): number;
        getBlockState(): $BlockState;
        getInventory(facing: $Direction_): $InventoryKJS;
        getInventory(): $InventoryKJS;
        getEntityData(): $CompoundTag;
        getBlock(): $Block;
        get dimensionKey(): $ResourceKey<$Level>;
        get pos(): $BlockPos;
        get centerY(): number;
        get down(): $LevelBlock;
        get up(): $LevelBlock;
        get north(): $LevelBlock;
        get south(): $LevelBlock;
        get west(): $LevelBlock;
        get east(): $LevelBlock;
        get entityId(): string;
        get light(): number;
        get skyLight(): number;
        get blockLight(): number;
        get canSeeSky(): boolean;
        get biomeId(): $ResourceLocation;
        get centerX(): number;
        get centerZ(): number;
        get dimension(): $ResourceLocation;
        get y(): number;
        get entity(): $BlockEntity;
        get properties(): $Map<string, string>;
        get level(): $Level;
        get item(): $ItemStack;
        get x(): number;
        get z(): number;
        get block(): $Block;
    }
    export class $ExplosionKubeEvent$Before extends $ExplosionKubeEvent {
        /**
         * Returns the size of the explosion.
         */
        getSize(): number;
        /**
         * Sets the size of the explosion.
         */
        setSize(s: number): void;
        constructor(level: $Level_, explosion: $Explosion);
    }
    export class $ExplosionKubeEvent implements $KubeLevelEvent {
        getExploder(): $LivingEntity;
        getY(): number;
        getBlock(): $LevelBlock;
        getLevel(): $Level;
        getX(): number;
        getZ(): number;
        getPosition(): $Vec3;
        getRegistries(): $RegistryAccess;
        getServer(): $MinecraftServer;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(level: $Level_, explosion: $Explosion);
        get exploder(): $LivingEntity;
        get y(): number;
        get block(): $LevelBlock;
        get level(): $Level;
        get x(): number;
        get z(): number;
        get position(): $Vec3;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
    }
}
