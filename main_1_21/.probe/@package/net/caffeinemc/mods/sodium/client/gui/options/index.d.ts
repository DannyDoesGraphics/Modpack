import { $Component_, $Component } from "@package/net/minecraft/network/chat";

declare module "@package/net/caffeinemc/mods/sodium/client/gui/options" {
    export class $TextProvider {
    }
    export interface $TextProvider {
        getLocalizedName(): $Component;
        get localizedName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $TextProvider}.
     */
    export type $TextProvider_ = (() => $Component_);
}
