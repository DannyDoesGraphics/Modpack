import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $FluidStack } from "@package/dev/architectury/fluid";

declare module "@package/dev/ftb/mods/ftblibrary/config/ui/resource" {
    export class $SelectableResource<T> {
        static fluid(stack: $FluidStack): $SelectableResource<$FluidStack>;
        static item(stack: $ItemStack_): $SelectableResource<$ItemStack>;
    }
    export interface $SelectableResource<T> {
        copyWithCount(arg0: number): $SelectableResource<T>;
        getComponentsTag(): $CompoundTag;
        applyComponentsTag(tag: $CompoundTag_): void;
        getName(): $Component;
        isEmpty(): boolean;
        getCount(): number;
        resource(): T;
        getIcon(): $Icon;
        setCount(arg0: number): void;
        get componentsTag(): $CompoundTag;
        get name(): $Component;
        get empty(): boolean;
        get icon(): $Icon;
    }
}
