import { $PaintingVariantBuilder } from "@package/dev/latvian/mods/kubejs/misc";
import { $JukeboxSong } from "@package/net/minecraft/world/item";
import { $RegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/registry";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $JukeboxSongBuilder } from "@package/dev/latvian/mods/kubejs/item";

declare module "@side-only/server/events/registry" {
    class JukeboxSong extends $RegistryKubeEvent<$JukeboxSong> {
        create(name: string): $JukeboxSongBuilder;
    }
    class PaintingVariant extends $RegistryKubeEvent<$PaintingVariant> {
        create(name: string): $PaintingVariantBuilder;
    }
}
