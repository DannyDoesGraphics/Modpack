import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $AtlasSet$AtlasEntry, $AtlasSet, $AtlasSet$AtlasEntry_ } from "@package/net/minecraft/client/resources/model";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/foundry/veil/mixin/resource/accessor" {
    export class $ResourceAtlasSetAccessor {
    }
    export interface $ResourceAtlasSetAccessor {
        getAtlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
        get atlases(): $Map<$ResourceLocation, $AtlasSet$AtlasEntry>;
    }
    /**
     * Values that may be interpreted as {@link $ResourceAtlasSetAccessor}.
     */
    export type $ResourceAtlasSetAccessor_ = (() => $Map_<$ResourceLocation_, $AtlasSet$AtlasEntry_>);
    export class $ResourceTextureAtlasAccessor {
    }
    export interface $ResourceTextureAtlasAccessor {
        getMipLevel(): number;
        get mipLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $ResourceTextureAtlasAccessor}.
     */
    export type $ResourceTextureAtlasAccessor_ = (() => number);
    export class $ResourceModelManagerAccessor {
    }
    export interface $ResourceModelManagerAccessor {
        getMaxMipmapLevels(): number;
        getAtlases(): $AtlasSet;
        get maxMipmapLevels(): number;
        get atlases(): $AtlasSet;
    }
}
