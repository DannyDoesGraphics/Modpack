import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ScoreHolder } from "@package/net/minecraft/world/scores";
import { $Set } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContext, $LootContext$EntityTarget, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/providers/score" {
    /**
     * A `ScoreboardNameProvider` that provides the scoreboard name for an entity selected by a `EntityTarget`.
     */
    export class $ContextScoreboardNameProvider extends $Record implements $ScoreboardNameProvider {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        static forTarget(target: $LootContext$EntityTarget_): $ScoreboardNameProvider;
        getScoreHolder(context: $LootContext): $ScoreHolder;
        target(): $LootContext$EntityTarget;
        getType(): $LootScoreProviderType;
        static INLINE_CODEC: $Codec<$ContextScoreboardNameProvider>;
        static CODEC: $MapCodec<$ContextScoreboardNameProvider>;
        constructor(target: $LootContext$EntityTarget_);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootScoreProviderType;
    }
    /**
     * Values that may be interpreted as {@link $ContextScoreboardNameProvider}.
     */
    export type $ContextScoreboardNameProvider_ = { target?: $LootContext$EntityTarget_,  } | [target?: $LootContext$EntityTarget_, ];
    /**
     * Provides a scoreboard name based on a `LootContext`.
     */
    export class $ScoreboardNameProvider {
    }
    export interface $ScoreboardNameProvider {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getScoreHolder(context: $LootContext): $ScoreHolder;
        getType(): $LootScoreProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootScoreProviderType;
    }
    /**
     * The SerializerType for `ScoreboardNameProvider`.
     */
    export class $LootScoreProviderType extends $Record {
        codec(): $MapCodec<$ScoreboardNameProvider>;
        constructor(arg0: $MapCodec_<$ScoreboardNameProvider>);
    }
    /**
     * Values that may be interpreted as {@link $LootScoreProviderType}.
     */
    export type $LootScoreProviderType_ = RegistryTypes.LootScoreProviderType | { codec?: $MapCodec_<$ScoreboardNameProvider>,  } | [codec?: $MapCodec_<$ScoreboardNameProvider>, ];
    export interface $LootScoreProviderType extends RegistryMarked<RegistryTypes.LootScoreProviderTypeTag, RegistryTypes.LootScoreProviderType> {}
    /**
     * Registration for `ScoreboardNameProvider`.
     */
    export class $ScoreboardNameProviders {
        static CODEC: $Codec<$ScoreboardNameProvider>;
        static FIXED: $LootScoreProviderType;
        static CONTEXT: $LootScoreProviderType;
        constructor();
    }
    /**
     * A `ScoreboardNameProvider` that always provides a fixed name.
     */
    export class $FixedScoreboardNameProvider extends $Record implements $ScoreboardNameProvider {
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getScoreHolder(context: $LootContext): $ScoreHolder;
        name(): string;
        static forName(name: string): $ScoreboardNameProvider;
        getType(): $LootScoreProviderType;
        static CODEC: $MapCodec<$FixedScoreboardNameProvider>;
        constructor(name: string);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootScoreProviderType;
    }
    /**
     * Values that may be interpreted as {@link $FixedScoreboardNameProvider}.
     */
    export type $FixedScoreboardNameProvider_ = { name?: string,  } | [name?: string, ];
}
