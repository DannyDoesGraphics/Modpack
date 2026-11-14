import { $ItemLike, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $Pair } from "@package/oshi/util/tuples";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $AugmentSelectionScreen } from "@package/rearth/oritech/client/ui";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Multimap } from "@package/com/google/common/collect";
import { $CustomPacketPayload$Type_, $CustomPacketPayload, $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft, $KeyMapping } from "@package/net/minecraft/client";
import { $Set } from "@package/java/util";
import { $Attachment } from "@package/rearth/oritech/api/attachment";
import { $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $SimpleInventoryStorage } from "@package/rearth/oritech/api/item/containers";
import { $TriConsumer_ } from "@package/org/apache/logging/log4j/util";
import { $Runnable } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as block from "@package/rearth/oritech/block";
export * as neoforge from "@package/rearth/oritech/neoforge";
export * as client from "@package/rearth/oritech/client";
export * as api from "@package/rearth/oritech/api";
export * as util from "@package/rearth/oritech/util";
export * as init from "@package/rearth/oritech/init";
export * as item from "@package/rearth/oritech/item";

declare module "@package/rearth/oritech" {
    export class $OritechPlatform {
        static INSTANCE: $OritechPlatform;
    }
    export interface $OritechPlatform {
        removeAttachment<T>(arg0: $LivingEntity, arg1: $Attachment<T>): void;
        sendBlockHandle(arg0: $BlockEntity, arg1: $CustomPacketPayload_): void;
        sendPlayerHandle(arg0: $CustomPacketPayload_, arg1: $ServerPlayer): void;
        registerToClient<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>, arg2: $TriConsumer_<T, $Level, $RegistryAccess>): void;
        registerToServer<T extends $CustomPacketPayload>(arg0: $CustomPacketPayload$Type_<T>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, T>, arg2: $TriConsumer_<T, $Player, $RegistryAccess>): void;
        hasAttachment<T>(arg0: $LivingEntity, arg1: $Attachment<T>): boolean;
        getAttachmentValue<T>(arg0: $LivingEntity, arg1: $Attachment<T>): T;
        setAttachment<T>(arg0: $LivingEntity, arg1: $Attachment<T>, arg2: T): void;
        resetCapabilities(arg0: $ServerLevel, arg1: $BlockPos_): void;
        canPlayerBreakBlock(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Player): boolean;
        canAttackBeDone(arg0: $Level_, arg1: $LivingEntity, arg2: number, arg3: $DamageSource_): boolean;
        register<T>(arg0: $Attachment<T>): void;
        create(arg0: $ServerLevel, arg1: $GameProfile, arg2: $SimpleInventoryStorage): $ServerPlayer;
        sendToServer(arg0: $CustomPacketPayload_): void;
    }
    export class $OritechClient {
        static registerRenderers(): void;
        static handleMouseClicked(arg0: $Minecraft, arg1: number, arg2: number, arg3: number): boolean;
        static initialize(): void;
        static AUGMENT_SELECTOR: $KeyMapping;
        static activeScreen: $AugmentSelectionScreen;
        static laserActive: boolean;
        constructor();
    }
    export class $Oritech {
        static initEventMap(): $Multimap<$ResourceLocation, $Runnable>;
        static runAllRegistries(): void;
        static initialize(): void;
        static id(arg0: string): $ResourceLocation;
        static MOD_ID: string;
        static COMPOSTABLES_DATA: $Set<$Pair<$ItemLike, number>>;
        static LOGGER: $Logger;
        static EVENT_MAP: $Multimap<$ResourceLocation, $Runnable>;
        constructor();
    }
}
