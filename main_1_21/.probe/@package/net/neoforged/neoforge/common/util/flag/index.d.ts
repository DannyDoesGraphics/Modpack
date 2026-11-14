import { $FeatureFlagRegistry$Builder } from "@package/net/minecraft/world/flag";

declare module "@package/net/neoforged/neoforge/common/util/flag" {
    export class $FeatureFlagLoader {
        static loadModdedFlags(builder: $FeatureFlagRegistry$Builder): void;
    }
}
