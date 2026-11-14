import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Supplier_, $BiConsumer_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $SimpleRegistry, $SimpleRegistry$Multi } from "@package/com/simibubi/create/api/registry";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $EntityType, $EntityType_ } from "@package/net/minecraft/world/entity";
import { $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $BlockEntityType_, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BuilderCallback_, $AbstractBuilder } from "@package/com/tterrag/registrate/builders";

declare module "@package/com/simibubi/create/api/registry/registrate" {
    export class $SimpleBuilder$SimpleRegistryAccess<K, V> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SimpleBuilder$SimpleRegistryAccess}.
     */
    export type $SimpleBuilder$SimpleRegistryAccess_<K, V> = { tagAdder?: $BiConsumer_<$TagKey<any>, any>, adder?: $BiConsumer_<any, any>,  } | [tagAdder?: $BiConsumer_<$TagKey<any>, any>, adder?: $BiConsumer_<any, any>, ];
    export class $SimpleBuilder<R, T extends R, P> extends $AbstractBuilder<R, T, P, $SimpleBuilder<R, T, P>> {
        byBlock(arg0: $SimpleRegistry<$Block_, R>): $SimpleBuilder<R, T, P>;
        byBlock(arg0: $SimpleRegistry$Multi<$Block_, R>): $SimpleBuilder<R, T, P>;
        byBlockEntity(arg0: $SimpleRegistry<$BlockEntityType_<never>, R>): $SimpleBuilder<R, T, P>;
        byBlockEntity(arg0: $SimpleRegistry$Multi<$BlockEntityType_<never>, R>): $SimpleBuilder<R, T, P>;
        byFluid(arg0: $SimpleRegistry<$Fluid_, R>): $SimpleBuilder<R, T, P>;
        byFluid(arg0: $SimpleRegistry$Multi<$Fluid_, R>): $SimpleBuilder<R, T, P>;
        associate(arg0: $Block_): $SimpleBuilder<R, T, P>;
        associate(arg0: $Fluid_): $SimpleBuilder<R, T, P>;
        associate(arg0: $BlockEntityType_<never>): $SimpleBuilder<R, T, P>;
        associate(arg0: $EntityType_<never>): $SimpleBuilder<R, T, P>;
        associateBlockTag(arg0: $TagKey_<$Block>): $SimpleBuilder<R, T, P>;
        associateBeTag(arg0: $TagKey_<$BlockEntityType<never>>): $SimpleBuilder<R, T, P>;
        associateEntityTag(arg0: $TagKey_<$EntityType<never>>): $SimpleBuilder<R, T, P>;
        associateFluidTag(arg0: $TagKey_<$Fluid>): $SimpleBuilder<R, T, P>;
        byEntity(arg0: $SimpleRegistry<$EntityType_<never>, R>): $SimpleBuilder<R, T, P>;
        byEntity(arg0: $SimpleRegistry$Multi<$EntityType_<never>, R>): $SimpleBuilder<R, T, P>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: P, arg2: string, arg3: $BuilderCallback_, arg4: $ResourceKey_<$Registry<R>>, arg5: $Supplier_<T>);
    }
}
