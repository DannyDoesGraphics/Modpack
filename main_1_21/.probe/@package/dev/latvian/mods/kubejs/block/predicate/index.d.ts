import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";

declare module "@package/dev/latvian/mods/kubejs/block/predicate" {
    export class $BlockEntityPredicateDataCheck {
    }
    export interface $BlockEntityPredicateDataCheck {
        checkData(data: $CompoundTag_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityPredicateDataCheck}.
     */
    export type $BlockEntityPredicateDataCheck_ = ((data: $CompoundTag) => boolean);
    export class $BlockPredicate {
    }
    export interface $BlockPredicate {
        check(block: $LevelBlock): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockPredicate}.
     */
    export type $BlockPredicate_ = ((block: $LevelBlock) => boolean);
    export class $BlockIDPredicate implements $BlockPredicate {
        getBlockProperties(): $List<$BlockIDPredicate$PropertyObject>;
        "with"(key: string, value: string): $BlockIDPredicate;
        check(b: $LevelBlock): boolean;
        checkState(state: $BlockState_): boolean;
        getBlockState(): $BlockState;
        constructor(i: $ResourceLocation_);
        get blockProperties(): $List<$BlockIDPredicate$PropertyObject>;
        get blockState(): $BlockState;
    }
    export class $BlockEntityPredicate implements $BlockPredicate {
        data(cd: $BlockEntityPredicateDataCheck_): $BlockEntityPredicate;
        check(block: $LevelBlock): boolean;
        constructor(i: $ResourceLocation_);
    }
    export class $BlockIDPredicate$PropertyObject extends $Record {
        value(): $Object;
        property(): $Property<never>;
        constructor(property: $Property<never>, value: $Object);
    }
    /**
     * Values that may be interpreted as {@link $BlockIDPredicate$PropertyObject}.
     */
    export type $BlockIDPredicate$PropertyObject_ = { value?: $Object, property?: $Property<never>,  } | [value?: $Object, property?: $Property<never>, ];
}
