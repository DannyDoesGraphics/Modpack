import { $SharedSuggestionProvider } from "@package/net/minecraft/commands";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $Loader, $EntityTypeConfigurator, $Env, $PlayerSelection, $PacketSet } from "@package/com/railwayteam/railways/multiloader";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CustomPacketPayload$Type_, $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/railwayteam/railways/multiloader/neoforge" {
    export class $PacketSetImpl extends $PacketSet {
        s2cPacket: $ResourceLocation;
        id: string;
        c2sPacket: $ResourceLocation;
        static HANDLERS: $Map<$ResourceLocation, $PacketSet>;
        version: number;
    }
    export class $EnvImpl {
        static getCurrent(): $Env;
        constructor();
        static get current(): $Env;
    }
    export class $PlayerSelectionImpl extends $PlayerSelection {
    }
    export class $PlatformAbstractionHelperImpl {
        static getBurnTime(arg0: $Item_): number;
        static enumArgument<T extends $Enum<T>>(arg0: $Class<T>): $ArgumentType<T>;
        constructor();
    }
    export class $CustomPayloadWrapper extends $Record implements $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPayloadWrapper>;
        static type(arg0: $ResourceLocation_): $CustomPacketPayload$Type<$CustomPayloadWrapper>;
        data(): $FriendlyByteBuf;
        id(): $ResourceLocation;
        static create(arg0: $ResourceLocation_, arg1: $FriendlyByteBuf): $CustomPayloadWrapper;
        static codec(arg0: $ResourceLocation_): $StreamCodec<$FriendlyByteBuf, $CustomPayloadWrapper>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        constructor(type: $CustomPacketPayload$Type_<$CustomPayloadWrapper_>, data: $FriendlyByteBuf);
    }
    /**
     * Values that may be interpreted as {@link $CustomPayloadWrapper}.
     */
    export type $CustomPayloadWrapper_ = { type?: $CustomPacketPayload$Type_<$CustomPayloadWrapper_>, data?: $FriendlyByteBuf,  } | [type?: $CustomPacketPayload$Type_<$CustomPayloadWrapper_>, data?: $FriendlyByteBuf, ];
    export class $LoaderImpl {
        static getCurrent(): $Loader;
        constructor();
        static get current(): $Loader;
    }
    export class $EntityTypeConfiguratorImpl extends $EntityTypeConfigurator {
    }
    export class $ClientCommandsImpl {
        static sendSuccess(arg0: $SharedSuggestionProvider, arg1: $Component_): void;
        static sendFailure(arg0: $SharedSuggestionProvider, arg1: $Component_): void;
        constructor();
    }
}
