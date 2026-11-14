import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity" {
    export class $Clear implements $RuleBlockEntityModifier {
        apply(arg0: $RandomSource, arg1: $CompoundTag_ | null): $CompoundTag;
        getType(): $RuleBlockEntityModifierType<never>;
        static CODEC: $MapCodec<$Clear>;
        constructor();
        get type(): $RuleBlockEntityModifierType<never>;
    }
    export interface $RuleBlockEntityModifierType<P> extends RegistryMarked<RegistryTypes.RuleBlockEntityModifierTag, RegistryTypes.RuleBlockEntityModifier> {}
    export class $Passthrough implements $RuleBlockEntityModifier {
        apply(arg0: $RandomSource, arg1: $CompoundTag_ | null): $CompoundTag;
        getType(): $RuleBlockEntityModifierType<never>;
        static CODEC: $MapCodec<$Passthrough>;
        static INSTANCE: $Passthrough;
        constructor();
        get type(): $RuleBlockEntityModifierType<never>;
    }
    export class $RuleBlockEntityModifierType<P extends $RuleBlockEntityModifier> {
        static PASSTHROUGH: $RuleBlockEntityModifierType<$Passthrough>;
        static APPEND_STATIC: $RuleBlockEntityModifierType<$AppendStatic>;
        static APPEND_LOOT: $RuleBlockEntityModifierType<$AppendLoot>;
        static CLEAR: $RuleBlockEntityModifierType<$Clear>;
    }
    export interface $RuleBlockEntityModifierType<P extends $RuleBlockEntityModifier> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $RuleBlockEntityModifierType}.
     */
    export type $RuleBlockEntityModifierType_<P> = RegistryTypes.RuleBlockEntityModifier | (() => $MapCodec_<P>);
    export class $AppendStatic implements $RuleBlockEntityModifier {
        apply(random: $RandomSource, tag: $CompoundTag_ | null): $CompoundTag;
        getType(): $RuleBlockEntityModifierType<never>;
        static CODEC: $MapCodec<$AppendStatic>;
        constructor(tag: $CompoundTag_);
        get type(): $RuleBlockEntityModifierType<never>;
    }
    export class $RuleBlockEntityModifier {
        static CODEC: $Codec<$RuleBlockEntityModifier>;
    }
    export interface $RuleBlockEntityModifier {
        apply(random: $RandomSource, tag: $CompoundTag_ | null): $CompoundTag;
        getType(): $RuleBlockEntityModifierType<never>;
        get type(): $RuleBlockEntityModifierType<never>;
    }
    export class $AppendLoot implements $RuleBlockEntityModifier {
        apply(random: $RandomSource, tag: $CompoundTag_ | null): $CompoundTag;
        getType(): $RuleBlockEntityModifierType<never>;
        static CODEC: $MapCodec<$AppendLoot>;
        constructor(lootTable: $ResourceKey_<$LootTable>);
        get type(): $RuleBlockEntityModifierType<never>;
    }
}
