import { $Level, $BlockGetter, $Explosion, $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Map_, $Map, $Collection } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $EnumProperty, $Property, $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockPlaceContext } from "@package/net/minecraft/world/item/context";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Rotation_, $Block_, $Rotation, $Mirror_, $Block, $Mirror } from "@package/net/minecraft/world/level/block";
import { $Comparable_, $Enum, $Comparable } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/dev/latvian/mods/kubejs/block/callback" {
    export class $BlockExplodedCallback {
        getRadius(): number;
        getExplosion(): $Explosion;
        getIgniter(): $LivingEntity;
        getAffectedPlayers(): $List<$Player>;
        getBlock(): $LevelBlock;
        getCause(): $Entity;
        getLevel(): $Level;
        getBlockState(): $BlockState;
        constructor(level: $Level_, pos: $BlockPos_, explosion: $Explosion);
        get radius(): number;
        get explosion(): $Explosion;
        get igniter(): $LivingEntity;
        get affectedPlayers(): $List<$Player>;
        get block(): $LevelBlock;
        get cause(): $Entity;
        get level(): $Level;
        get blockState(): $BlockState;
    }
    export class $BlockStateModifyCallback {
        /**
         * Gets the value of the passed in property as an Optional. If the property does not exist in this block the Optional will be empty
         */
        getOptionalValue<T extends $Comparable<T>>(property: $Property<T>): (T) | undefined;
        populateNeighbours(map: $Map_<$Map_<$Property<never>, $Comparable_<never>>, $BlockState_>): $BlockStateModifyCallback;
        /**
         * Updates the shape of this block. Mostly used in waterloggable blocks to update the water flow
         */
        updateShape(direction: $Direction_, blockState: $BlockState_, levelAccessor: $LevelAccessor, blockPos: $BlockPos_, blockPos2: $BlockPos_): $BlockStateModifyCallback;
        /**
         * Get a map of this blocks properties to it's value
         */
        getValues(): $Map<$Property<never>, $Comparable<never>>;
        /**
         * Gets the value of the pased in property
         */
        get<T extends $Comparable<T>>(property: $Property<T>): T;
        /**
         * Gets the value of the passed in property
         */
        getValue<T extends $Comparable<T>>(property: $Property<T>): T;
        /**
         * Sets the value of the specified enum property
         */
        set<T extends $Enum<T>>(property: $EnumProperty<T>, value: string): $BlockStateModifyCallback;
        /**
         * Sets the value of the specified boolean property
         */
        set(property: $BooleanProperty, value: boolean): $BlockStateModifyCallback;
        /**
         * Sets the value of the specified integer property
         */
        set(property: $IntegerProperty, value: number): $BlockStateModifyCallback;
        /**
         * Get the properties this block has that can be changed
         */
        getProperties(): $Collection<$Property<never>>;
        /**
         * Gets the state. If it has been modified, gets the new state
         */
        getState(): $BlockState;
        /**
         * Sets the value of the specified property
         */
        setValue<T extends $Comparable<T>, V extends T>(property: $Property<T>, comparable: V): $BlockStateModifyCallback;
        /**
         * Rotate the block using the specified Rotation
         */
        rotate(rotation: $Rotation_): $BlockStateModifyCallback;
        /**
         * Mirror the block using the specified Mirror
         */
        mirror(mirror: $Mirror_): $BlockStateModifyCallback;
        /**
         * Checks if this block has the specified property
         */
        hasProperty<T extends $Comparable<T>>(property: $Property<T>): boolean;
        /**
         * Cycles the property
         */
        cycle<T extends $Comparable<T>>(property: $Property<T>): $BlockStateModifyCallback;
        constructor(state: $BlockState_);
        get values(): $Map<$Property<never>, $Comparable<never>>;
        get properties(): $Collection<$Property<never>>;
        get state(): $BlockState;
    }
    export class $EntityFallenOnBlockCallback extends $EntityBlockCallback {
        /**
         * Applies fall damage to the entity as if they had fallen from the provided height, and multiplies it by the provided multiplier.
         * Note this does not force it, so entities that do not take fall damage are not affected.
         */
        applyFallDamage(fallHeight: number, multiplier: number): boolean;
        /**
         * Damages the entity using the provided damage source, using the fall height and multiplier to calculate the damage amount.
         * Note this does not force the damage, so entities that do not take fall damage are not affected.
         */
        applyFallDamage(fallHeight: number, multiplier: number, damageSource: $DamageSource_): boolean;
        /**
         * Applies default fall damage to the entity.
         * Note this does not force it, so entities that do not take fall damage are not affected.
         */
        applyFallDamage(): boolean;
        /**
         * Applies fall damage to the entity, multiplier by the multiplier.
         * Note this does not force it, so entities that do not take fall damage are not affected.
         */
        applyFallDamage(multiplier: number): boolean;
        /**
         * Get the height the entity has fallen
         */
        getFallHeight(): number;
        constructor(level: $Level_, entity: $Entity, pos: $BlockPos_, state: $BlockState_, fallHeight: number);
        get fallHeight(): number;
    }
    export class $BlockStateMirrorCallback extends $BlockStateModifyCallback {
        /**
         * Gets the Mirror
         */
        getMirror(): $Mirror;
        /**
         * Mirrors the direction passed in
         */
        mirror(dir: $Direction_): $Direction;
        /**
         * Gets the rotation of the direction passed in relative to this mirror
         */
        getRotation(dir: $Direction_): $Rotation;
        constructor(state: $BlockState_, mirror: $Mirror_);
    }
    export class $BlockStateModifyPlacementCallback extends $BlockStateModifyCallback {
        /**
         * Returns if the block being placed thinks it can be placed here. This is used for replacement checks, like placing blocks in water or tall grass
         */
        canPlace(): boolean;
        /**
         * Returns if the hit posiiton in the block-space is inside the 1x1x1 cube of the block
         */
        isInside(): boolean;
        /**
         * Gets an array of all directions, ordered by which the player is looking closest to
         */
        getNearestLookingDirections(): $Direction[];
        /**
         * Gets the hand that is placing the block
         */
        getHand(): $InteractionHand;
        /**
         * Gets the clicked position in world
         */
        getClickedPos(): $BlockPos;
        /**
         * Gets the facing direction of the clicked block face
         */
        getClickedFace(): $Direction;
        /**
         * Gets the player placing the block, if available
         */
        getPlayer(): $Player;
        /**
         * Gets the nearest horizontal direction to where the player is looking. NORTH if there is no player
         */
        getHorizontalDirection(): $Direction;
        /**
         * Gets the position in the block-space of where it was clicked
         */
        getClickLocation(): $Vec3;
        /**
         * Gets the direction closes to where the player is currently looking
         */
        getNearestLookingDirection(): $Direction;
        /**
         * Gets the vertical direction (UP/DOWN) closest to where the player is currently looking
         */
        getNearestLookingVerticalDirection(): $Direction;
        /**
         * Returns if the block being placed is replacing the block clicked
         */
        replacingClickedOnBlock(): boolean;
        /**
         * Gets the clicked block
         */
        getClickedBlock(): $LevelBlock;
        /**
         * Gets the FluidSate at the clicked position
         */
        getFluidStateAtClickedPos(): $FluidState;
        /**
         * Checks if the position clicked has a specified fluid there
         */
        isClickedPosIn(fluid: $Fluid_): boolean;
        /**
         * Checks if the block currently occupying the position this is being placed in is the same block type.
         * Used for things like candles, where multiple can be in the same block-space.
         */
        isReplacingSelf(): boolean;
        /**
         * Gets the level
         */
        getLevel(): $Level;
        /**
         * Gets the item being placed
         */
        getItem(): $ItemStack;
        /**
         * Get the horizontal rotation of the player
         */
        getRotation(): number;
        /**
         * Set this block as waterlogged if it is in water
         */
        waterlogged(): $BlockStateModifyPlacementCallback;
        /**
         * Set if this block is waterlogged or not
         */
        waterlogged(waterlogged: boolean): $BlockStateModifyPlacementCallback;
        /**
         * Checks if this block is in water
         */
        isInWater(): boolean;
        /**
         * Returns if the player is using the 'secondary' function of this item. Basically checks if they are holding shift
         */
        isSecondaryUseActive(): boolean;
        minecraftBlock: $Block;
        context: $BlockPlaceContext;
        block: $LevelBlock;
        constructor(context: $BlockPlaceContext, block: $Block_);
        get inside(): boolean;
        get nearestLookingDirections(): $Direction[];
        get hand(): $InteractionHand;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get player(): $Player;
        get horizontalDirection(): $Direction;
        get clickLocation(): $Vec3;
        get nearestLookingDirection(): $Direction;
        get nearestLookingVerticalDirection(): $Direction;
        get clickedBlock(): $LevelBlock;
        get fluidStateAtClickedPos(): $FluidState;
        get replacingSelf(): boolean;
        get level(): $Level;
        get item(): $ItemStack;
        get rotation(): number;
        get inWater(): boolean;
        get secondaryUseActive(): boolean;
    }
    export class $RandomTickCallback {
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        random: $RandomSource;
        block: $LevelBlock;
        constructor(block: $LevelBlock, random: $RandomSource);
        get level(): $Level;
        get server(): $MinecraftServer;
    }
    export class $EntityBlockCallback {
        /**
         * Returns the block's position
         */
        getPos(): $BlockPos;
        /**
         * Returns the block
         */
        getBlock(): $LevelBlock;
        /**
         * Returns the entity
         */
        getEntity(): $Entity;
        /**
         * Returns the BlockState
         */
        getState(): $BlockState;
        /**
         * Returns the level
         */
        getLevel(): $Level;
        /**
         * Returns if the entity is suppressing bouncing (for players this is true if the player is crouching)
         */
        isSuppressingBounce(): boolean;
        constructor(level: $Level_, entity: $Entity, pos: $BlockPos_, state: $BlockState_);
        get pos(): $BlockPos;
        get block(): $LevelBlock;
        get entity(): $Entity;
        get state(): $BlockState;
        get level(): $Level;
        get suppressingBounce(): boolean;
    }
    export class $CanBeReplacedCallback {
        isInside(): boolean;
        getNearestLookingDirections(): $Direction[];
        getHand(): $InteractionHand;
        getClickedPos(): $BlockPos;
        getClickedFace(): $Direction;
        getPlayer(): $Player;
        getHorizontalDirection(): $Direction;
        getClickLocation(): $Vec3;
        getNearestLookingDirection(): $Direction;
        canBeReplaced(): boolean;
        getNearestLookingVerticalDirection(): $Direction;
        getClickedBlock(): $LevelBlock;
        getFluidStateAtClickedPos(): $FluidState;
        isClickedPosIn(fluid: $Fluid_): boolean;
        getLevel(): $Level;
        getItem(): $ItemStack;
        getRotation(): number;
        isSecondaryUseActive(): boolean;
        constructor(blockPlaceContext: $BlockPlaceContext, state: $BlockState_);
        get inside(): boolean;
        get nearestLookingDirections(): $Direction[];
        get hand(): $InteractionHand;
        get clickedPos(): $BlockPos;
        get clickedFace(): $Direction;
        get player(): $Player;
        get horizontalDirection(): $Direction;
        get clickLocation(): $Vec3;
        get nearestLookingDirection(): $Direction;
        get nearestLookingVerticalDirection(): $Direction;
        get clickedBlock(): $LevelBlock;
        get fluidStateAtClickedPos(): $FluidState;
        get level(): $Level;
        get item(): $ItemStack;
        get rotation(): number;
        get secondaryUseActive(): boolean;
    }
    export class $BlockStateRotateCallback extends $BlockStateModifyCallback {
        /**
         * Rotates the specified direction
         */
        rotate(dir: $Direction_): $Direction;
        /**
         * Get the Rotation that this block is being rotated by
         */
        getRotation(): $Rotation;
        constructor(state: $BlockState_, rotation: $Rotation_);
        get rotation(): $Rotation;
    }
    export class $AfterEntityFallenOnBlockCallback extends $EntityBlockCallback {
        /**
         * Bounce the entity upwards by bounciness * their fall velocity.
         * Do not make bounciness negative, as that is a recipe for a long and laggy trip to the void
         */
        bounce(bounciness: number): void;
        /**
         * Sets the entity's velocity
         */
        setVelocity(vec: $Vec3_): void;
        /**
         * Sets the entity's velocity
         */
        setVelocity(x: number, y: number, z: number): void;
        /**
         * Returns the Vec3 of the entity's velocity. Use .x, .y and .z to get the respective components of that
         */
        getVelocity(): $Vec3;
        constructor(blockGetter: $BlockGetter, entity: $Entity);
    }
}
