import { $ChunkPos, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $WorldBorderExtension } from "@package/dev/ryanhcode/sable/mixinterface/world_border";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderChangeListener$DelegateBorderChangeListener implements $BorderChangeListener {
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, newAmount: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, newAmount: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, newAmount: number): void;
        onBorderSetWarningTime(border: $WorldBorder, newDistance: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, newDistance: number): void;
        constructor(worldBorder: $WorldBorder);
    }
    export class $WorldBorder$MovingBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        /**
         * Retrieves the color that the border should be, while in this state.
         */
        getColor(): number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
    }
    export class $WorldBorder$StaticBorderExtent implements $WorldBorder$BorderExtent {
    }
    export class $WorldBorder$Settings {
        getWarningTime(): number;
        getWarningBlocks(): number;
        getSafeZone(): number;
        getSizeLerpTime(): number;
        getSizeLerpTarget(): number;
        getCenterX(): number;
        getCenterZ(): number;
        write(nbt: $CompoundTag_): void;
        static read(dynamic: $DynamicLike<never>, defaultValue: $WorldBorder$Settings): $WorldBorder$Settings;
        getSize(): number;
        getDamagePerBlock(): number;
        get warningTime(): number;
        get warningBlocks(): number;
        get safeZone(): number;
        get sizeLerpTime(): number;
        get sizeLerpTarget(): number;
        get centerX(): number;
        get centerZ(): number;
        get size(): number;
        get damagePerBlock(): number;
    }
    export class $WorldBorder$BorderExtent {
    }
    export interface $WorldBorder$BorderExtent {
        getMaxX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        onCenterChange(): void;
        getLerpRemainingTime(): number;
        getLerpTarget(): number;
        onAbsoluteMaxSizeChange(): void;
        getLerpSpeed(): number;
        update(): $WorldBorder$BorderExtent;
        getSize(): number;
        getStatus(): $BorderStatus;
        getCollisionShape(): $VoxelShape;
        getMinX(): number;
        get maxX(): number;
        get minZ(): number;
        get maxZ(): number;
        get lerpRemainingTime(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
        get size(): number;
        get status(): $BorderStatus;
        get collisionShape(): $VoxelShape;
        get minX(): number;
    }
    export class $WorldBorder implements $WorldBorderExtension {
        clampToBounds(pos: $BlockPos_): $BlockPos;
        clampToBounds(pos: $Vec3_): $BlockPos;
        clampToBounds(x: number, arg1: number, y: number): $BlockPos;
        handler$fmd000$sable$isWithinBounds(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        getMaxX(): number;
        getMinZ(): number;
        getMaxZ(): number;
        handler$fmd000$sable$isInsideCloseToBorder(arg0: $Entity, arg1: $AABB_, arg2: $CallbackInfoReturnable<any>): void;
        setCenter(x: number, arg1: number): void;
        getLerpRemainingTime(): number;
        getLerpTarget(): number;
        lerpSizeBetween(oldSize: number, arg1: number, newSize: number): void;
        getAbsoluteMaxSize(): number;
        setDamageSafeZone(damagePerBlock: number): void;
        setDamagePerBlock(damagePerBlock: number): void;
        getLerpSpeed(): number;
        getWarningTime(): number;
        setWarningTime(size: number): void;
        getWarningBlocks(): number;
        setWarningBlocks(size: number): void;
        wrapOperation$dim000$lithium$getUpdatedArea(arg0: $WorldBorder$BorderExtent, arg1: $Operation_<any>): $WorldBorder$BorderExtent;
        createSettings(): $WorldBorder$Settings;
        applySettings(serializer: $WorldBorder$Settings): void;
        getCenterX(): number;
        getCenterZ(): number;
        sable$setLevel(arg0: $Level_): void;
        setAbsoluteMaxSize(size: number): void;
        getSize(): number;
        tick(): void;
        setSize(damagePerBlock: number): void;
        removeListener(listener: $BorderChangeListener): void;
        addListener(listener: $BorderChangeListener): void;
        getStatus(): $BorderStatus;
        isWithinBounds(pos: $BlockPos_): boolean;
        isWithinBounds(pos: $Vec3_): boolean;
        isWithinBounds(box: $AABB_): boolean;
        isWithinBounds(chunkPos: $ChunkPos): boolean;
        isWithinBounds(x: number, arg1: number, z: number): boolean;
        isWithinBounds(x: number, arg1: number): boolean;
        getDistanceToBorder(entity: $Entity): number;
        getDistanceToBorder(x: number, arg1: number): number;
        getDamageSafeZone(): number;
        getDamagePerBlock(): number;
        getCollisionShape(): $VoxelShape;
        isInsideCloseToBorder(entity: $Entity, bounds: $AABB_): boolean;
        getMinX(): number;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get maxX(): number;
        get minZ(): number;
        get maxZ(): number;
        get lerpRemainingTime(): number;
        get lerpTarget(): number;
        get lerpSpeed(): number;
        get centerX(): number;
        get centerZ(): number;
        get status(): $BorderStatus;
        get collisionShape(): $VoxelShape;
        get minX(): number;
    }
}
