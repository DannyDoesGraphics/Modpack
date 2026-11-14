import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $TooltipContext_, $TooltipBuilder, $TooltipContext } from "@package/appeng/api/integrations/igtooltip";

declare module "@package/appeng/api/integrations/igtooltip/providers" {
    export class $ServerDataProvider<T> {
    }
    export interface $ServerDataProvider<T> {
        provideServerData(arg0: $Player, arg1: T, arg2: $CompoundTag_): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerDataProvider}.
     */
    export type $ServerDataProvider_<T> = ((arg0: $Player, arg1: T, arg2: $CompoundTag) => void);
    export class $IconProvider<T> {
    }
    export interface $IconProvider<T> {
        getIcon(arg0: T, arg1: $TooltipContext_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $IconProvider}.
     */
    export type $IconProvider_<T> = ((arg0: T, arg1: $TooltipContext) => $ItemStack_);
    export class $BodyProvider<T> {
    }
    export interface $BodyProvider<T> {
        buildTooltip(arg0: T, arg1: $TooltipContext_, arg2: $TooltipBuilder): void;
    }
    /**
     * Values that may be interpreted as {@link $BodyProvider}.
     */
    export type $BodyProvider_<T> = ((arg0: T, arg1: $TooltipContext, arg2: $TooltipBuilder) => void);
    export class $ModNameProvider<T> {
    }
    export interface $ModNameProvider<T> {
        getModName(arg0: T, arg1: $TooltipContext_): string;
    }
    /**
     * Values that may be interpreted as {@link $ModNameProvider}.
     */
    export type $ModNameProvider_<T> = ((arg0: T, arg1: $TooltipContext) => string);
    export class $NameProvider<T> {
    }
    export interface $NameProvider<T> {
        getName(arg0: T, arg1: $TooltipContext_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $NameProvider}.
     */
    export type $NameProvider_<T> = ((arg0: T, arg1: $TooltipContext) => $Component_);
}
