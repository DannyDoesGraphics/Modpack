import { $Level } from "@package/net/minecraft/world/level";
import { $ETFEntity } from "@package/traben/entity_texture_features/utils";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EntityType, $Entity, $Pose } from "@package/net/minecraft/world/entity";
import { $Team } from "@package/net/minecraft/world/scores";
import { $UUID } from "@package/java/util";
import { $Iterable } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/traben/entity_texture_features/features/state" {
    export class $ETFEntityRenderState$ETFRenderStateInit {
    }
    export interface $ETFEntityRenderState$ETFRenderStateInit {
        make(arg0: $ETFEntity): $ETFEntityRenderState;
    }
    /**
     * Values that may be interpreted as {@link $ETFEntityRenderState$ETFRenderStateInit}.
     */
    export type $ETFEntityRenderState$ETFRenderStateInit_ = ((arg0: $ETFEntity) => $ETFEntityRenderState);
    export class $ETFEntityRenderState {
        static forEntity(entity: $ETFEntity): $ETFEntityRenderState;
        static setEtfRenderStateConstructor(reason: string, init: $ETFEntityRenderState$ETFRenderStateInit_): void;
    }
    export interface $ETFEntityRenderState {
        /**
         * @deprecated
         */
        entity(): $ETFEntity;
        uuid(): $UUID;
        customName(): $Component;
        /**
         * @deprecated
         */
        pose(): $Pose;
        nbt(): $CompoundTag;
        canRenderBright(): boolean;
        isBlockEntity(): boolean;
        entityType(): $EntityType<never>;
        blockPos(): $BlockPos;
        optifineId(): number;
        optifineVehicleId(): number;
        blockY(): number;
        hasCustomName(): boolean;
        scoreboardTeam(): $Team;
        itemsEquipped(): $Iterable<$ItemStack>;
        handItems(): $Iterable<$ItemStack>;
        armorItems(): $Iterable<$ItemStack>;
        velocity(): $Vec3;
        entityKey(): string;
        distanceTo(arg0: $Entity): number;
        world(): $Level;
        get blockEntity(): boolean;
    }
}
