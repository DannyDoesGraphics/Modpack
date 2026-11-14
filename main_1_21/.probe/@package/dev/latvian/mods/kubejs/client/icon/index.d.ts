import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/client/icon" {
    export class $KubeIconType<T extends $KubeIcon> extends $Record {
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        id(): $ResourceLocation;
        codec(): $MapCodec<T>;
        static TYPES: $Lazy<$Map<$ResourceLocation, $KubeIconType<never>>>;
        static CODEC: $Codec<$KubeIconType<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $KubeIconType<never>>;
        constructor(id: $ResourceLocation_, codec: $MapCodec_<T>);
        constructor(id: $ResourceLocation_, codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $KubeIconType}.
     */
    export type $KubeIconType_<T> = { id?: $ResourceLocation_, codec?: $MapCodec_<$KubeIcon_>, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $KubeIcon_>,  } | [id?: $ResourceLocation_, codec?: $MapCodec_<$KubeIcon_>, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $KubeIcon_>, ];
    export class $KubeIcon {
        static CODEC: $Codec<$KubeIcon>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($KubeIcon) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $KubeIcon>;
    }
    export interface $KubeIcon {
        getType(): $KubeIconType<never>;
        get type(): $KubeIconType<never>;
    }
    /**
     * Values that may be interpreted as {@link $KubeIcon}.
     */
    export type $KubeIcon_ = { type: "kubejs:item", item: { id: RegistryTypes.Item, count?: number,  },  } | { type: "kubejs:texture", texture: `${string}:${string}`,  } | { type: "kubejs:atlas_sprite", atlas?: `${string}:${string}`, sprite: `${string}:${string}`,  } | (() => $KubeIconType_<never>);
}
