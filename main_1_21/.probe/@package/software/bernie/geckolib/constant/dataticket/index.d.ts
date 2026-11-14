import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Enum, $Class } from "@package/java/lang";
import { $Map_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/software/bernie/geckolib/constant/dataticket" {
    export class $SerializableDataTicket<D> extends $DataTicket<D> {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        static ofEnum<E extends $Enum<E>>(arg0: $ResourceLocation_, arg1: $Class<E>): $SerializableDataTicket<E>;
        static ofFloat(arg0: $ResourceLocation_): $SerializableDataTicket<number>;
        static ofBoolean(arg0: $ResourceLocation_): $SerializableDataTicket<boolean>;
        static ofInt(arg0: $ResourceLocation_): $SerializableDataTicket<number>;
        static ofString(arg0: $ResourceLocation_): $SerializableDataTicket<string>;
        static ofDouble(arg0: $ResourceLocation_): $SerializableDataTicket<number>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SerializableDataTicket<never>>;
        constructor(arg0: string, arg1: $Class<D>);
    }
    export class $DataTicket<D> {
        id(): string;
        getData<D>(arg0: $Map_<$DataTicket<never>, never>): D;
        objectType(): $Class<D>;
        constructor(arg0: string, arg1: $Class<D>);
    }
}
