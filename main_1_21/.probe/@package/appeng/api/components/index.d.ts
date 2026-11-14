import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/api/components" {
    export class $ExportedUpgrades extends $Record {
        upgrades(): $List<$ItemStack>;
        static CODEC: $Codec<$ExportedUpgrades>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ExportedUpgrades>;
        constructor(upgrades: $List_<$ItemStack_>);
    }
    /**
     * Values that may be interpreted as {@link $ExportedUpgrades}.
     */
    export type $ExportedUpgrades_ = { upgrades?: $List_<$ItemStack_>,  } | [upgrades?: $List_<$ItemStack_>, ];
}
