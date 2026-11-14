import { $Level } from "@package/net/minecraft/world/level";
import { $ItemTooltipData, $ItemTooltipData_ } from "@package/dev/latvian/mods/kubejs/text/tooltip";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $List, $List_ } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $IPayloadContext } from "@package/net/neoforged/neoforge/network/handling";
import { $RecipeViewerData, $RecipeViewerData_ } from "@package/dev/latvian/mods/kubejs/recipe/viewer/server";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record, $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/net" {
    export class $SyncServerDataPayload extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<never>;
        data(): $KubeServerData;
        handle(ctx: $IPayloadContext): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SyncServerDataPayload>;
        constructor(data: $KubeServerData_);
    }
    /**
     * Values that may be interpreted as {@link $SyncServerDataPayload}.
     */
    export type $SyncServerDataPayload_ = { data?: $KubeServerData_,  } | [data?: $KubeServerData_, ];
    export class $NetworkKubeEvent implements $KubePlayerEvent {
        /**
         * The channel of the packet.
         */
        getChannel(): string;
        /**
         * The data of the packet.
         */
        getData(): $CompoundTag;
        getPlayer(): $Player;
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
        getEntity(): $LivingEntity;
        constructor(p: $Player, c: string, d: $CompoundTag_);
        get channel(): string;
        get data(): $CompoundTag;
        get player(): $Player;
        get level(): $Level;
        get registries(): $RegistryAccess;
        get server(): $MinecraftServer;
        get entity(): $LivingEntity;
    }
    export class $KubeServerData extends $Record {
        recipeViewerData(): ($RecipeViewerData) | undefined;
        itemTooltipData(): $List<$ItemTooltipData>;
        static collect(): $KubeServerData;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $KubeServerData>;
        constructor(recipeViewerData: ($RecipeViewerData_) | undefined, itemTooltipData: $List_<$ItemTooltipData_>);
    }
    /**
     * Values that may be interpreted as {@link $KubeServerData}.
     */
    export type $KubeServerData_ = { recipeViewerData?: ($RecipeViewerData_) | undefined, itemTooltipData?: $List_<$ItemTooltipData_>,  } | [recipeViewerData?: ($RecipeViewerData_) | undefined, itemTooltipData?: $List_<$ItemTooltipData_>, ];
}
