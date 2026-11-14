import { $BiFunction } from "@package/java/util/function";
import { $DataFixTypes_ } from "@package/net/minecraft/util/datafix";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Record } from "@package/java/lang";
import { $Schema } from "@package/com/mojang/datafixers/schemas";
import { $DataFixer } from "@package/com/mojang/datafixers";

declare module "@package/com/railwayteam/railways/base/datafixerapi" {
    export class $DataFixesInternals$DataFixerEntry extends $Record {
        currentVersion(): number;
        dataFixer(): $DataFixer;
        constructor(dataFixer: $DataFixer, currentVersion: number);
    }
    /**
     * Values that may be interpreted as {@link $DataFixesInternals$DataFixerEntry}.
     */
    export type $DataFixesInternals$DataFixerEntry_ = { dataFixer?: $DataFixer, currentVersion?: number,  } | [dataFixer?: $DataFixer, currentVersion?: number, ];
    export class $NoOpDataFixesInternals extends $DataFixesInternals {
        static BASE_SCHEMA: $BiFunction<number, $Schema, $Schema>;
        constructor();
    }
    export class $FirstSchema extends $Schema {
        constructor(arg0: number);
    }
    export class $EmptySchema extends $FirstSchema {
        constructor(arg0: number);
    }
    export class $DataFixesInternalsImpl extends $DataFixesInternals {
        static BASE_SCHEMA: $BiFunction<number, $Schema, $Schema>;
        constructor(arg0: $Schema);
    }
    export class $DataFixesInternals {
        static get(): $DataFixesInternals;
        updateWithAllFixers(arg0: $DataFixTypes_, arg1: $CompoundTag_): $CompoundTag;
        addModDataVersions(arg0: $CompoundTag_): $CompoundTag;
        createBaseSchema(): $Schema;
        static getModDataVersion(arg0: $CompoundTag_): number;
        registerFixer(arg0: number, arg1: $DataFixer): void;
        getFixerEntry(): $DataFixesInternals$DataFixerEntry;
        static BASE_SCHEMA: $BiFunction<number, $Schema, $Schema>;
        constructor();
        get fixerEntry(): $DataFixesInternals$DataFixerEntry;
    }
}
